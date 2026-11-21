import type { SpeechRate, SpeechVariant } from '../types';

export const SPEECH_RATES: readonly SpeechRate[] = [0.5, 0.75, 1, 1.25] as const;

export type PlaybackStatus = 'idle' | 'playing' | 'paused';

export interface PlaybackSnapshot {
  status: PlaybackStatus;
  activeId: string | null;
  error: string | null;
  voiceLabel: string;
}

export interface SpeakOptions {
  id: string;
  variant: SpeechVariant;
  voiceName?: string;
  rate: SpeechRate;
}

export interface VoiceResolution {
  voice: SpeechSynthesisVoice | null;
  label: string;
  isFallback: boolean;
}

export interface AudioCapabilities {
  speechSynthesis: boolean;
  speechRecognition: boolean;
  mediaRecorder: boolean;
}

export function getAudioCapabilities(): AudioCapabilities {
  if (typeof window === 'undefined') {
    return { speechSynthesis: false, speechRecognition: false, mediaRecorder: false };
  }
  const speechSynthesisSupported =
    'speechSynthesis' in window && typeof SpeechSynthesisUtterance !== 'undefined';
  const speechRecognitionSupported =
    'SpeechRecognition' in window || 'webkitSpeechRecognition' in window;
  const mediaRecorderSupported = 'MediaRecorder' in window;
  return {
    speechSynthesis: speechSynthesisSupported,
    speechRecognition: speechRecognitionSupported,
    mediaRecorder: mediaRecorderSupported
  };
}

export function isSpeechSynthesisSupported(): boolean {
  return getAudioCapabilities().speechSynthesis;
}

export function getAvailableEnglishVoices(): SpeechSynthesisVoice[] {
  if (!isSpeechSynthesisSupported()) return [];
  const all = window.speechSynthesis.getVoices();
  const english = all.filter(v => v.lang.toLowerCase().startsWith('en'));
  return english.sort((a, b) => a.lang.localeCompare(b.lang) || a.name.localeCompare(b.name));
}

export function subscribeVoicesChanged(listener: (voices: SpeechSynthesisVoice[]) => void): () => void {
  if (!isSpeechSynthesisSupported()) return () => {};
  const synth = window.speechSynthesis;
  const handle = () => listener(getAvailableEnglishVoices());
  handle();
  if (typeof synth.addEventListener === 'function') {
    synth.addEventListener('voiceschanged', handle);
    return () => synth.removeEventListener('voiceschanged', handle);
  }
  const prev = synth.onvoiceschanged;
  synth.onvoiceschanged = handle;
  return () => {
    if (synth.onvoiceschanged === handle) {
      synth.onvoiceschanged = prev ?? null;
    }
  };
}

export function resolveVoice(variant: SpeechVariant, preferredVoiceName?: string): VoiceResolution {
  const voices = getAvailableEnglishVoices();
  if (voices.length === 0) {
    return {
      voice: null,
      label: `Default browser voice (${variant})`,
      isFallback: true
    };
  }

  if (preferredVoiceName) {
    const exact = voices.find(v => v.name === preferredVoiceName);
    if (exact) {
      return {
        voice: exact,
        label: `${exact.name} (${exact.lang})`,
        isFallback: !exact.lang.toLowerCase().startsWith(variant.toLowerCase())
      };
    }
  }

  const target = variant.toLowerCase();
  const normTarget = target.replace('-', '_');
  const exactVariant = voices.find(v => {
    const lang = v.lang.toLowerCase();
    return lang === target || lang === normTarget || lang.startsWith(target);
  });

  if (exactVariant) {
    return {
      voice: exactVariant,
      label: `${exactVariant.name} (${exactVariant.lang})`,
      isFallback: false
    };
  }

  const fallback = voices[0];
  return {
    voice: fallback,
    label: `${fallback.name} (${fallback.lang}) — fallback`,
    isFallback: true
  };
}

class SpeechSynthesisController {
  private snapshot: PlaybackSnapshot = {
    status: 'idle',
    activeId: null,
    error: null,
    voiceLabel: ''
  };
  private listeners = new Set<(s: PlaybackSnapshot) => void>();
  private queue: string[] = [];
  private queueIndex = 0;
  private lastLines: string[] = [];
  private lastOptions: SpeakOptions | null = null;
  private runToken = 0;

  subscribe(listener: (s: PlaybackSnapshot) => void): () => void {
    this.listeners.add(listener);
    listener(this.snapshot);
    return () => {
      this.listeners.delete(listener);
    };
  }

  getSnapshot(): PlaybackSnapshot {
    return this.snapshot;
  }

  private emit(patch: Partial<PlaybackSnapshot>): void {
    this.snapshot = { ...this.snapshot, ...patch };
    this.listeners.forEach(fn => fn(this.snapshot));
  }

  speak(input: string | string[], options: SpeakOptions): void {
    if (!isSpeechSynthesisSupported()) {
      this.emit({
        status: 'idle',
        activeId: options.id,
        error: 'Speech synthesis is not supported in this browser.'
      });
      return;
    }

    const lines = (Array.isArray(input) ? input : [input])
      .map(t => t.trim())
      .filter(Boolean);

    if (lines.length === 0) return;

    this.runToken += 1;
    const token = this.runToken;
    window.speechSynthesis.cancel();

    this.queue = lines;
    this.queueIndex = 0;
    this.lastLines = lines;
    this.lastOptions = options;

    const resolved = resolveVoice(options.variant, options.voiceName);
    this.emit({
      status: 'playing',
      activeId: options.id,
      error: null,
      voiceLabel: resolved.label
    });

    this.speakNext(token, options, resolved);
  }

  private speakNext(token: number, options: SpeakOptions, resolved: VoiceResolution): void {
    if (token !== this.runToken) return;
    if (this.queueIndex >= this.queue.length) {
      this.emit({ status: 'idle', activeId: null });
      return;
    }

    try {
      const utterance = new SpeechSynthesisUtterance(this.queue[this.queueIndex]);
      utterance.lang = resolved.voice?.lang ?? options.variant;
      if (resolved.voice) utterance.voice = resolved.voice;
      utterance.rate = options.rate;

      utterance.onend = () => {
        if (token !== this.runToken) return;
        this.queueIndex += 1;
        this.speakNext(token, options, resolved);
      };

      utterance.onerror = (event: SpeechSynthesisErrorEvent) => {
        if (token !== this.runToken) return;
        if (event.error === 'interrupted' || event.error === 'canceled') return;
        this.emit({
          status: 'idle',
          activeId: null,
          error: `Audio playback error (${event.error || 'unknown'}).`
        });
      };

      window.speechSynthesis.speak(utterance);
    } catch {
      if (token !== this.runToken) return;
      this.emit({
        status: 'idle',
        activeId: null,
        error: 'Unable to start synthetic speech playback.'
      });
    }
  }

  pause(): void {
    if (!isSpeechSynthesisSupported() || this.snapshot.status !== 'playing') return;
    window.speechSynthesis.pause();
    this.emit({ status: 'paused' });
  }

  resume(): void {
    if (!isSpeechSynthesisSupported() || this.snapshot.status !== 'paused') return;
    window.speechSynthesis.resume();
    this.emit({ status: 'playing' });
  }

  stop(): void {
    this.runToken += 1;
    this.queue = [];
    this.queueIndex = 0;
    if (isSpeechSynthesisSupported()) {
      window.speechSynthesis.cancel();
    }
    this.emit({ status: 'idle', activeId: null });
  }

  repeat(overrideOptions?: Partial<SpeakOptions>): void {
    if (this.lastLines.length === 0 || !this.lastOptions) return;
    this.speak(this.lastLines, { ...this.lastOptions, ...overrideOptions });
  }
}

export const speechService = new SpeechSynthesisController();