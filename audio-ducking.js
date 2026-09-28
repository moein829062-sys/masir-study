(function (root, factory) {
  const api = factory();

  if (typeof module === "object" && module.exports) {
    module.exports = api;
  }

  if (root) {
    root.AudioDuckingController = api.AudioDuckingController;
  }
})(typeof globalThis !== "undefined" ? globalThis : this, function () {
  "use strict";

  class AudioDuckingController {
    constructor(options = {}) {
      this.navigator = options.navigator || globalThis.navigator;
      this.window = options.window || globalThis.window;
      this.leases = new Set();
      this.previousAudioSessionType = null;
      this.usesSystemAudioFocus = false;
      this.boundStopAll = () => this.stopAll("page-exit");

      this.window?.addEventListener?.("pagehide", this.boundStopAll);
      this.window?.addEventListener?.("beforeunload", this.boundStopAll);
    }

    get active() {
      return this.leases.size > 0;
    }

    get mode() {
      return this.usesSystemAudioFocus ? "system-audio-focus" : "unsupported";
    }

    start() {
      if (!this.active) {
        this.activateSystemAudioFocus();
      }

      const lease = {
        stopped: false,
        onstop: null,
        stop: (reason = "ended") => this.stop(lease, reason),
      };

      this.leases.add(lease);
      return lease;
    }

    trackMediaElement(mediaElement) {
      let lease = null;
      const begin = () => {
        if (!lease) lease = this.start();
      };
      const finish = (event) => {
        lease?.stop(event?.type || "stopped");
        lease = null;
      };
      const endEvents = ["pause", "ended", "error", "abort", "emptied"];

      mediaElement.addEventListener("playing", begin);
      for (const eventName of endEvents) {
        mediaElement.addEventListener(eventName, finish);
      }

      return () => {
        finish({ type: "detached" });
        mediaElement.removeEventListener("playing", begin);
        for (const eventName of endEvents) {
          mediaElement.removeEventListener(eventName, finish);
        }
      };
    }

    trackSpeechUtterance(utterance) {
      let lease = null;
      const begin = () => {
        if (!lease) lease = this.start();
      };
      const finish = (event) => {
        lease?.stop(event?.type || "stopped");
        lease = null;
      };

      utterance.addEventListener("start", begin);
      utterance.addEventListener("resume", begin);
      utterance.addEventListener("pause", finish);
      utterance.addEventListener("end", finish);
      utterance.addEventListener("error", finish);

      return () => {
        finish({ type: "cancelled" });
        utterance.removeEventListener("start", begin);
        utterance.removeEventListener("resume", begin);
        utterance.removeEventListener("pause", finish);
        utterance.removeEventListener("end", finish);
        utterance.removeEventListener("error", finish);
      };
    }

    activateSystemAudioFocus() {
      const audioSession = this.navigator?.audioSession;
      this.usesSystemAudioFocus = false;
      this.previousAudioSessionType = null;

      if (!audioSession || !("type" in audioSession)) {
        return;
      }

      try {
        this.previousAudioSessionType = audioSession.type;
        audioSession.type = "transient";
        this.usesSystemAudioFocus = audioSession.type === "transient";
      } catch (_error) {
        this.previousAudioSessionType = null;
      }
    }

    stop(lease, _reason = "ended") {
      if (!lease || lease.stopped || !this.leases.has(lease)) {
        return;
      }

      lease.stopped = true;
      this.leases.delete(lease);

      if (!this.active) {
        this.restoreSystemAudioFocus();
      }

      lease.onstop?.(_reason);
    }

    stopAll(reason = "ended") {
      for (const lease of [...this.leases]) {
        this.stop(lease, reason);
      }
    }

    restoreSystemAudioFocus() {
      const audioSession = this.navigator?.audioSession;
      if (audioSession && this.previousAudioSessionType !== null) {
        try {
          audioSession.type = this.previousAudioSessionType;
        } catch (_error) {
          // The browser or OS may already have disposed the session on exit.
        }
      }

      this.previousAudioSessionType = null;
      this.usesSystemAudioFocus = false;
    }

    destroy() {
      this.stopAll("destroy");
      this.window?.removeEventListener?.("pagehide", this.boundStopAll);
      this.window?.removeEventListener?.("beforeunload", this.boundStopAll);
    }
  }

  return { AudioDuckingController };
});
