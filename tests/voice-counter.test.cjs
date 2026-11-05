const test = require('node:test');
const assert = require('node:assert/strict');
const { normalize, PhraseMatcher, createController } = require('../speech-counter.js');

test('Arabic shaping, hamza, diacritics and joined words match the same dhikr', () => {
  assert.equal(normalize('أَسْتَغْفِرُ اللهَ'), normalize('استغفرالله'));
  const matcher = new PhraseMatcher('أستغفر الله');
  assert.equal(matcher.accept('استغفرالله، أستغفر الله، أَسْتَغْفِرُ اللهَ', 'one'), 3);
});

test('Only the complete selected phrase counts, including custom long dhikr', () => {
  const matcher = new PhraseMatcher('سبحان الله وبحمده سبحان الله العظيم');
  assert.equal(matcher.accept('سبحان الله وبحمده', 'one'), 0);
  assert.equal(matcher.accept('الحمد لله الله أكبر', 'two'), 0);
  assert.equal(matcher.accept('سبحان الله وبحمده سبحان الله العظيم', 'three'), 1);
});

test('Partial revisions and final replay do not double count', () => {
  const matcher = new PhraseMatcher('الحمد لله');
  assert.equal(matcher.accept('الحمد لله', 'one'), 1);
  assert.equal(matcher.accept('الحمد لله', 'one'), 0);
  assert.equal(matcher.accept('الحمد لله الحمد لله', 'one'), 1);
  assert.equal(matcher.accept('الحمد', 'one'), 0);
  assert.equal(matcher.accept('الحمد لله الحمد لله', 'one'), 0);
  assert.equal(matcher.accept('الحمد لله', 'two'), 1);
});

function mockNative() {
  const listeners = new Map();
  let sessions = 0;
  let stops = 0;
  const plugin = {
    async addListener(name, handler) {
      if (!listeners.has(name)) listeners.set(name, new Set());
      listeners.get(name).add(handler);
      return { async remove() { listeners.get(name).delete(handler); } };
    },
    async start() { return { session: `s${++sessions}` }; },
    async stop() { stops += 1; },
  };
  return {
    environment: { Capacitor: { isNativePlatform: () => true, isPluginAvailable: () => true, registerPlugin: () => plugin } },
    emit(name, data) { listeners.get(name)?.forEach(handler => handler(data)); },
    get stops() { return stops; },
  };
}
const turn = () => new Promise(resolve => setImmediate(resolve));

test('Continuous partial speech counts without waiting for a pause', async () => {
  const native = mockNative();
  const counts = [];
  const controller = createController({ environment: native.environment,
    context: () => ({ key: 'a', phrase: 'استغفر الله' }),
    onCount: amount => counts.push(amount), onState() {} });
  await controller.start();
  const interval = setInterval(() => native.emit('transcript', {
    session: 's1', text: 'استغفر الله', final: false
  }), 30);
  try {
    await new Promise(resolve => setTimeout(resolve, 350));
    assert.deepEqual(counts, [1]);
    native.emit('transcript', { session: 's1', text: 'استغفر الله', final: true });
    assert.deepEqual(counts, [1]);
  } finally {
    clearInterval(interval);
    await controller.stop();
  }
});

test('Opt in, switch dhikr, ignore previous sessions and stop immediately', async () => {
  const native = mockNative();
  let context = { key: 'a', phrase: 'استغفر الله' };
  const counts = [];
  const controller = createController({ environment: native.environment, context: () => context,
    onCount: (amount, key) => counts.push([amount, key]), onState() {} });
  await controller.start();
  native.emit('transcript', { session: 's1', text: 'استغفر الله استغفر الله', final: true });
  assert.deepEqual(counts, [[2, 'a']]);
  context = { key: 'b', phrase: 'الله أكبر' };
  controller.syncContext();
  await turn();
  native.emit('transcript', { session: 's1', text: 'الله أكبر', final: true });
  native.emit('transcript', { session: 's2', text: 'الله أكبر', final: true });
  assert.deepEqual(counts, [[2, 'a'], [1, 'b']]);
  await controller.stop();
  native.emit('transcript', { session: 's2', text: 'الله أكبر الله أكبر', final: true });
  assert.equal(counts.length, 2);
  assert.ok(native.stops >= 2);
});

test('Turning off during a context restart does not reopen the microphone', async () => {
  const native = mockNative();
  let context = { key: 'a', phrase: 'الله أكبر' };
  let last;
  const controller = createController({ environment: native.environment, context: () => context,
    onCount() {}, onState: state => { last = state; } });
  await controller.start();
  context = { key: 'b', phrase: 'الحمد لله' };
  controller.syncContext();
  await controller.stop();
  await turn();
  assert.equal(last.active, false);
  assert.equal(last.pending, false);
});

test('Browsers without local recognition never start a cloud recognizer', async () => {
  let starts = 0;
  let last;
  class CloudSpeech { start() { starts += 1; } }
  const controller = createController({ environment: { SpeechRecognition: CloudSpeech },
    context: () => ({ key: 'a', phrase: 'الله أكبر' }), onCount() {},
    onState: state => { last = state; } });
  await controller.start();
  assert.equal(starts, 0);
  assert.equal(last.active, false);
  assert.match(last.message, /غير متاح/);
});

test('Permission denial leaves the feature off with no leaked native listeners', async () => {
  const native = mockNative();
  const plugin = native.environment.Capacitor.registerPlugin();
  plugin.start = async () => { throw { code: 'PERMISSION_DENIED' }; };
  let last;
  const controller = createController({ environment: native.environment,
    context: () => ({ key: 'a', phrase: 'الله أكبر' }), onCount() { assert.fail('unexpected count'); },
    onState: state => { last = state; } });
  await controller.start();
  assert.equal(last.active, false);
  assert.match(last.message, /الميكروفون/);
  native.emit('transcript', { session: 's1', text: 'الله أكبر', final: true });
});

test('Native recognition errors show a diagnostic and turn listening off', async () => {
  const native = mockNative();
  let last;
  const controller = createController({ environment: native.environment,
    context: () => ({ key: 'a', phrase: 'الله أكبر' }), onCount() {},
    onState: state => { last = state; } });
  await controller.start();
  native.emit('speechState', { state: 'error', code: 'RECOGNITION_FAILED', nativeCode: 1101 });
  await turn();
  assert.equal(last.active, false);
  assert.match(last.message, /1101/);
  assert.match(last.message, /التعرف على الكلام/);
});
