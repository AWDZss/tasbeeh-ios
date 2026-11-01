import AVFoundation
import Capacitor
import Speech
import UIKit

@objc(VoiceBridgeViewController)
class VoiceBridgeViewController: CAPBridgeViewController {
    override func capacitorDidLoad() {
        bridge?.registerPluginInstance(DhikrSpeechPlugin())
    }
}

@objc(DhikrSpeechPlugin)
public class DhikrSpeechPlugin: CAPPlugin, CAPBridgedPlugin {
    public let identifier = "DhikrSpeechPlugin"
    public let jsName = "DhikrSpeech"
    public let pluginMethods: [CAPPluginMethod] = [
        CAPPluginMethod(name: "start", returnType: CAPPluginReturnPromise),
        CAPPluginMethod(name: "stop", returnType: CAPPluginReturnPromise)
    ]

    private let engine = AVAudioEngine()
    private var recognizer: SFSpeechRecognizer?
    private var request: SFSpeechAudioBufferRecognitionRequest?
    private var task: SFSpeechRecognitionTask?
    private var rotation: Timer?
    private var backgroundObserver: NSObjectProtocol?
    private var interruptionObserver: NSObjectProtocol?
    private var hasTap = false
    private var active = false
    private var generation = 0
    private var session = ""
    private var phrases: [String] = []
    private var failures = 0

    public override func load() {
        backgroundObserver = NotificationCenter.default.addObserver(
            forName: UIApplication.willResignActiveNotification, object: nil, queue: .main
        ) { [weak self] _ in self?.stopForLifecycle() }
        interruptionObserver = NotificationCenter.default.addObserver(
            forName: AVAudioSession.interruptionNotification, object: nil, queue: .main
        ) { [weak self] _ in self?.stopForLifecycle() }
    }

    deinit {
        if let observer = backgroundObserver { NotificationCenter.default.removeObserver(observer) }
        if let observer = interruptionObserver { NotificationCenter.default.removeObserver(observer) }
        rotation?.invalidate()
        task?.cancel()
        engine.stop()
        if hasTap { engine.inputNode.removeTap(onBus: 0) }
    }

    @objc func start(_ call: CAPPluginCall) {
        DispatchQueue.main.async {
            self.stopRecording()
            let ticket = self.generation
            self.recognizer = ["ar-SA", "ar-AE", "ar"]
                .compactMap { SFSpeechRecognizer(locale: Locale(identifier: $0)) }
                .first { $0.supportsOnDeviceRecognition }
            guard self.recognizer?.supportsOnDeviceRecognition == true else {
                call.reject("Local Arabic recognition is unavailable", "LOCAL_UNAVAILABLE")
                return
            }
            self.phrases = call.getArray("phrases", String.self) ?? []
            SFSpeechRecognizer.requestAuthorization { status in
                guard status == .authorized else {
                    call.reject("Speech permission denied", "PERMISSION_DENIED")
                    return
                }
                AVAudioSession.sharedInstance().requestRecordPermission { granted in
                    DispatchQueue.main.async {
                        guard ticket == self.generation else {
                            call.reject("Listening cancelled", "CANCELLED")
                            return
                        }
                        guard granted else {
                            call.reject("Microphone permission denied", "PERMISSION_DENIED")
                            return
                        }
                        guard self.recognizer?.isAvailable == true else {
                            call.reject("Recognizer unavailable", "UNAVAILABLE")
                            return
                        }
                        do {
                            self.active = true
                            self.failures = 0
                            try self.beginSession()
                            call.resolve(["session": self.session, "local": true])
                        } catch {
                            self.stopRecording()
                            call.reject("Cannot start microphone", "UNAVAILABLE")
                        }
                    }
                }
            }
        }
    }

    @objc func stop(_ call: CAPPluginCall) {
        DispatchQueue.main.async {
            self.stopRecording()
            call.resolve()
        }
    }

    private func beginSession() throws {
        guard active, let recognizer = recognizer,
              recognizer.supportsOnDeviceRecognition, recognizer.isAvailable else {
            throw NSError(domain: "DhikrSpeech", code: 1)
        }
        endSession()
        let audioSession = AVAudioSession.sharedInstance()
        try audioSession.setCategory(.record, mode: .measurement)
        try audioSession.setActive(true)
        let nextRequest = SFSpeechAudioBufferRecognitionRequest()
        nextRequest.shouldReportPartialResults = true
        nextRequest.requiresOnDeviceRecognition = true
        nextRequest.contextualStrings = phrases
        nextRequest.taskHint = .dictation
        let input = engine.inputNode
        let format = input.outputFormat(forBus: 0)
        guard format.sampleRate > 0, format.channelCount > 0 else {
            throw NSError(domain: "DhikrSpeech", code: 2)
        }
        input.installTap(onBus: 0, bufferSize: 1024, format: format) { buffer, _ in
            nextRequest.append(buffer)
        }
        hasTap = true
        request = nextRequest
        session = UUID().uuidString
        let sessionID = session
        notifyListeners("speechState", data: ["state": "session", "session": sessionID])
        task = recognizer.recognitionTask(with: nextRequest) { [weak self] result, error in
            DispatchQueue.main.async {
                guard let self = self, self.active, self.session == sessionID else { return }
                if let result = result {
                    self.failures = 0
                    self.notifyListeners("transcript", data: [
                        "text": result.bestTranscription.formattedString,
                        "session": sessionID, "final": result.isFinal
                    ])
                }
                if error != nil || result?.isFinal == true {
                    if error != nil { self.failures += 1 }
                    if self.failures > 3 { self.failAndStop(); return }
                    self.restartSession(after: 0.3)
                }
            }
        }
        engine.prepare()
        try engine.start()
        // Apple recognition tasks are finite; rotate without replaying old audio.
        rotation = Timer.scheduledTimer(withTimeInterval: 50, repeats: false) { [weak self] _ in
            self?.restartSession(after: 0.2)
        }
    }

    private func restartSession(after delay: TimeInterval) {
        let ticket = generation
        endSession()
        DispatchQueue.main.asyncAfter(deadline: .now() + delay) { [weak self] in
            guard let self = self, self.active, self.generation == ticket else { return }
            do { try self.beginSession() } catch { self.failAndStop() }
        }
    }

    private func endSession() {
        rotation?.invalidate()
        rotation = nil
        session = ""
        engine.stop()
        if hasTap { engine.inputNode.removeTap(onBus: 0); hasTap = false }
        request?.endAudio()
        task?.cancel()
        task = nil
        request = nil
    }

    private func stopRecording() {
        generation += 1
        active = false
        endSession()
        try? AVAudioSession.sharedInstance().setActive(false, options: .notifyOthersOnDeactivation)
    }

    private func stopForLifecycle() {
        guard active else { return }
        stopRecording()
        notifyListeners("speechState", data: ["state": "stopped"])
    }

    private func failAndStop() {
        stopRecording()
        notifyListeners("speechState", data: ["state": "error", "code": "UNAVAILABLE"])
    }
}
