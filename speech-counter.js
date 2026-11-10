(function (root) {
  "use strict";

  function normalize(text) {
    return String(text || "").normalize("NFKD")
      .replace(/[\u064b-\u065f\u0670\u0640]/g, "")
      .replace(/[أإآٱ]/g, "ا").replace(/ى/g, "ي")
      .replace(/[^\p{L}\p{N}]/gu, "").toLowerCase();
  }

  class PhraseMatcher {
    constructor(phrase) {
      this.phrase = normalize(phrase);
      this.seen = new Map();
    }

    occurrences(transcript) {
      if (!this.phrase) return 0;
      const text = normalize(transcript);
      let count = 0;
      let cursor = 0;
      while ((cursor = text.indexOf(this.phrase, cursor)) !== -1) {
        count += 1;
        cursor += this.phrase.length;
      }
      return count;
    }

    accept(transcript, segment, alternatives = []) {
      let count = this.occurrences(transcript);
      // Use the first matching alternative only if the best transcript has no match.
      if (!count && Array.isArray(alternatives)) {
        for (const alternative of alternatives.slice(0, 3)) {
          count = this.occurrences(alternative);
          if (count) break;
        }
      }
      const previous = this.seen.get(segment) || 0;
      this.seen.set(segment, Math.max(count, previous));
      if (this.seen.size > 64) this.seen.delete(this.seen.keys().next().value);
      return Math.max(0, count - previous);
    }
  }

  function createController({ context, onCount, onState, environment = root }) {
    let generation = 0;
    let active = false;
    let pending = false;
    let current = null;
    let matcher = null;
    let recognizer = null;
    let native = null;
    let handles = [];
    let settleTimer = null;
    let pendingDelivery = null;
    let restartTimer = null;
    let nativeSession = "";
    let stopNative = Promise.resolve();

    function report(message) { onState({ active, pending, message }); }

    async function stop(message = "الاستماع متوقف") {
      generation += 1;
      active = false;
      pending = false;
      clearTimeout(settleTimer);
      settleTimer = null;
      pendingDelivery = null;
      clearTimeout(restartTimer);
      if (recognizer) {
        recognizer.onend = null;
        recognizer.onresult = null;
        recognizer.onerror = null;
        recognizer.abort();
        recognizer = null;
      }
      const previousHandles = handles;
      handles = [];
      stopNative = native ? native.stop().catch(() => {}) : Promise.resolve();
      report(message);
      await Promise.allSettled([stopNative, ...previousHandles.map((handle) => handle.remove())]);
    }

    function receive(text, segment, final, ticket, alternatives) {
      if (!active || ticket !== generation) return;
      const deliver = () => {
        if (!active || ticket !== generation || context()?.key !== current.key) return;
        const amount = matcher.accept(text, segment, final ? alternatives : undefined);
        if (amount) onCount(amount, current.key);
        if (active && ticket === generation) {
          report(amount ? "تم احتساب الذكر" : normalize(text).includes(matcher.phrase)
            ? "أستمع للذكر الحالي" : "أسمع كلامك؛ قل الذكر المعروض كاملًا");
        }
      };
      if (final) {
        clearTimeout(settleTimer);
        settleTimer = null;
        pendingDelivery = null;
        deliver();
      }
      else {
        pendingDelivery = deliver;
        // Throttle the latest partial instead of waiting for silence indefinitely.
        if (!settleTimer) settleTimer = setTimeout(() => {
          settleTimer = null;
          const latest = pendingDelivery;
          pendingDelivery = null;
          latest?.();
        }, 200);
      }
    }

    function flushPending() {
      clearTimeout(settleTimer);
      settleTimer = null;
      const deliver = pendingDelivery;
      pendingDelivery = null;
      deliver?.();
    }

    function fail(error) {
      const code = error?.code || error?.error || "";
      const messages = {
        PERMISSION_DENIED: "اسمح بالميكروفون والتعرف على الكلام من إعدادات الجهاز",
        "not-allowed": "لم يُسمح باستخدام الميكروفون",
        "audio-capture": "الميكروفون غير متاح الآن",
        LOCAL_UNAVAILABLE: "التعرف العربي على الجهاز غير متاح؛ يمكنك الاستمرار بالضغط",
        "language-not-supported": "التعرف العربي على الجهاز غير متاح؛ يمكنك الاستمرار بالضغط",
        UNAVAILABLE: "التعرف على الصوت غير متاح الآن",
        AUDIO_START_FAILED: "تعذر تشغيل الميكروفون؛ أغلق أي مكالمة أو تطبيق يستخدمه ثم أعد المحاولة",
        RECOGNITION_FAILED: "تعذر تشغيل التعرف على الكلام على الجهاز",
      };
      const diagnostic = Number.isInteger(error?.nativeCode) ? ` (${error.nativeCode})` : "";
      return stop((messages[code] || "تعذر بدء الاستماع؛ أعد تشغيل التطبيق وحاول مرة أخرى") + diagnostic);
    }

    async function start() {
      if (active || pending) return;
      current = context();
      if (!normalize(current?.phrase)) { report("اختر ذكرًا أولًا"); return; }
      const ticket = ++generation;
      matcher = new PhraseMatcher(current.phrase);
      pending = true;
      report("جارٍ تشغيل الميكروفون...");
      try {
        await stopNative;
        if (ticket !== generation) return;
        const capacitor = environment.Capacitor;
        if (capacitor?.isNativePlatform?.()) {
          if (!capacitor.isPluginAvailable("DhikrSpeech")) throw { code: "UNAVAILABLE" };
          // The injected iOS bridge exposes Plugins, not the npm registerPlugin helper.
          native = native || capacitor.Plugins?.DhikrSpeech;
          if (!native && typeof capacitor.registerPlugin === "function") {
            native = capacitor.registerPlugin("DhikrSpeech");
          }
          if (!native) throw { code: "UNAVAILABLE" };
          const nextHandles = [];
          try {
            nextHandles.push(await native.addListener("transcript", (event) => {
              if (ticket !== generation) return;
              // A cancelled native task may finish after a replacement task starts.
              if (event.session !== nativeSession) return;
              receive(event.text, event.session, event.final, ticket, event.alternatives);
            }));
            nextHandles.push(await native.addListener("speechState", (event) => {
              if (ticket !== generation) return;
              if (event.state === "session") {
                flushPending();
                nativeSession = event.session;
              } else if (event.state === "stopped") stop();
              else if (event.state === "error") fail(event);
            }));
            if (ticket !== generation) {
              await Promise.all(nextHandles.map((handle) => handle.remove()));
              return;
            }
            handles = nextHandles;
            const result = await native.start({ language: "ar-SA", phrases: [current.phrase] });
            if (ticket !== generation) return;
            nativeSession = result.session;
          } catch (error) {
            await Promise.all(nextHandles.map((handle) => handle.remove()));
            if (handles === nextHandles) handles = [];
            throw error;
          }
        } else {
          const Speech = environment.SpeechRecognition || environment.webkitSpeechRecognition;
          if (!Speech) throw { code: "LOCAL_UNAVAILABLE" };
          const candidate = new Speech();
          // Never silently fall back to a browser's cloud speech service.
          if (!("processLocally" in candidate) || typeof Speech.available !== "function") {
            throw { code: "LOCAL_UNAVAILABLE" };
          }
          const availability = await Speech.available({ langs: ["ar-SA"], processLocally: true });
          if (availability !== "available") throw { code: "LOCAL_UNAVAILABLE" };
          if (ticket !== generation) return;
          recognizer = candidate;
          candidate.lang = "ar-SA";
          candidate.processLocally = true;
          candidate.continuous = true;
          candidate.interimResults = true;
          let session = 0;
          candidate.onresult = (event) => {
            for (let i = event.resultIndex; i < event.results.length; i += 1) {
              receive(event.results[i][0].transcript, `${session}:${i}`, event.results[i].isFinal, ticket);
            }
          };
          candidate.onerror = (event) => {
            if (ticket !== generation) return;
            if (event.error === "no-speech") return;
            fail(event);
          };
          candidate.onend = () => {
            if (!active || ticket !== generation) return;
            flushPending();
            restartTimer = setTimeout(() => {
              if (!active || ticket !== generation) return;
              session += 1;
              try { candidate.start(); } catch (error) { fail(error); }
            }, 250);
          };
          candidate.start();
        }
        if (ticket !== generation) return;
        pending = false;
        active = true;
        report("أستمع للذكر الحالي");
      } catch (error) {
        if (ticket === generation) await fail(error);
      }
    }

    function syncContext() {
      if (!active && !pending) return;
      const next = context();
      if (!next?.phrase) { stop(); return; }
      if (next.key !== current.key || next.phrase !== current.phrase) {
        // Start a fresh recognition task so old words cannot count in the new dhikr.
        const stopped = stop();
        const ticket = generation;
        stopped.then(() => { if (generation === ticket && context()?.key === next.key) start(); });
      }
    }

    return { start, stop, syncContext };
  }

  const api = { normalize, PhraseMatcher, createController };
  if (typeof module !== "undefined" && module.exports) module.exports = api;
  else root.DhikrVoice = api;
})(typeof window !== "undefined" ? window : globalThis);
