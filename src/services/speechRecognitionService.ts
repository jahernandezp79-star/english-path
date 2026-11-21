import type { SpeechVariant } from '../types';

export interface BrowserSpeechAlternative {
  readonly transcript: string;
  readonly confidence: number;
}

export interface BrowserSpeechResult {
  readonly isFinal: boolean;
  readonly length: number;
  [index: number]: BrowserSpeechAlternative;
}

export interface BrowserSpeechResultList {
  readonly length: number;
  [index: number]: BrowserSpeechResult;
}

export interface BrowserSpeechRecognitionEvent {
  readonly resultIndex: number;
  readonly results: BrowserSpeechResultList;
}

export interface BrowserSpeechErrorEvent {
  readonly error: string;
  readonly message?: string;
}

export interface BrowserSpeechRecognition {
  lang: string;
  interimResults: boolean;
  continuous: boolean;
  maxAlternatives: number;
  onstart: (() => void) | null;
  onend: (() => void) | null;
  onerror: ((event: BrowserSpeechErrorEvent) => void) | null;
  onresult: ((event: BrowserSpeechRecognitionEvent) => void) | null;
  start: () => void;
  stop: () => void;
  abort: () => void;
}

type SpeechRecognitionCtor = new () => BrowserSpeechRecognition;

function getRecognitionCtor(): SpeechRecognitionCtor | null {
  if (typeof window === 'undefined') return null;
  const w = window as unknown as {
    SpeechRecognition?: SpeechRecognitionCtor;
    webkitSpeechRecognition?: SpeechRecognitionCtor;
  };
  return w.SpeechRecognition ?? w.webkitSpeechRecognition ?? null;
}

export function isSpeechRecognitionSupported(): boolean {
  return getRecognitionCtor() !== null;
}

export function getSpeechRecognitionPrivacyNotice(): string {
  return 'Browser speech recognition (SpeechRecognition) may send audio to your browser vendor’s speech service for transcription. If you prefer 100% local offline practice, use the local microphone recorder or the written alternative below.';
}

export function mapRecognitionError(code: string): string {
  switch (code) {
    case 'not-allowed':
    case 'service-not-allowed':
      return 'Microphone permission was denied. Allow microphone access in your browser settings or use the written alternative.';
    case 'no-speech':
      return 'No speech was detected. Try speaking closer to the microphone and click Repeat.';
    case 'audio-capture':
      return 'No microphone was found on this device. You can use the written alternative instead.';
    case 'network':
      return 'Speech recognition could not reach the browser speech service. Check your connection or use the written alternative.';
    case 'aborted':
      return '';
    default:
      return `Speech recognition error (${code || 'unknown'}). You can use the written alternative.`;
  }
}

export interface RecognitionCallbacks {
  lang: SpeechVariant;
  onStart?: () => void;
  onInterim?: (transcript: string) => void;
  onFinal?: (transcript: string) => void;
  onError?: (message: string) => void;
  onEnd?: () => void;
}

export interface RecognitionHandle {
  start: () => void;
  stop: () => void;
  abort: () => void;
}

export function createSpeechRecognitionSession(callbacks: RecognitionCallbacks): RecognitionHandle | null {
  const Ctor = getRecognitionCtor();
  if (!Ctor) return null;

  const recognition = new Ctor();
  recognition.lang = callbacks.lang;
  recognition.interimResults = true;
  recognition.continuous = false;
  recognition.maxAlternatives = 1;

  let active = false;
  let finalBuffer = '';

  recognition.onstart = () => {
    active = true;
    finalBuffer = '';
    callbacks.onStart?.();
  };

  recognition.onresult = (event: BrowserSpeechRecognitionEvent) => {
    let interim = '';
    for (let i = event.resultIndex; i < event.results.length; i += 1) {
      const result = event.results[i];
      const text = result[0]?.transcript ?? '';
      if (result.isFinal) {
        finalBuffer = `${finalBuffer} ${text}`.trim();
      } else {
        interim = `${interim} ${text}`.trim();
      }
    }
    if (interim) callbacks.onInterim?.(interim);
    if (finalBuffer) callbacks.onFinal?.(finalBuffer);
  };

  recognition.onerror = (event: BrowserSpeechErrorEvent) => {
    const msg = mapRecognitionError(event.error);
    if (msg) callbacks.onError?.(msg);
  };

  recognition.onend = () => {
    active = false;
    callbacks.onEnd?.();
  };

  return {
    start: () => {
      if (active) return;
      try {
        recognition.start();
      } catch {
        callbacks.onError?.('Could not start speech recognition. Please try again.');
      }
    },
    stop: () => {
      if (!active) return;
      try {
        recognition.stop();
      } catch {
        // Ignore stop errors if already ended
      }
    },
    abort: () => {
      try {
        recognition.abort();
      } catch {
        // Ignore abort errors on cleanup
      }
      active = false;
    }
  };
}