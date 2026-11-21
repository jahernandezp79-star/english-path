import { useEffect, useId, useState } from 'react';
import {
  SPEECH_RATES,
  isSpeechSynthesisSupported,
  resolveVoice,
  speechService,
  subscribeVoicesChanged,
  type PlaybackSnapshot
} from '../services/speechSynthesisService';
import type { SpeechRate, SpeechVariant } from '../types';

interface AudioPlayerProps {
  text: string | string[];
  variant?: SpeechVariant;
  voiceName?: string;
  defaultRate?: SpeechRate;
  compact?: boolean;
  label?: string;
  autoPlay?: boolean;
  playerId?: string;
}

const SpeakerIcon = () => (
  <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4 shrink-0 fill-none stroke-current" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M11 5L6 9H2v6h4l5 4V5z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M15.54 8.46a5 5 0 010 7.07" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M19.07 4.93a10 10 0 010 14.14" />
  </svg>
);

export default function AudioPlayer({
  text,
  variant = 'en-US',
  voiceName = '',
  defaultRate = 1,
  compact = false,
  label,
  autoPlay = false,
  playerId
}: AudioPlayerProps) {
  const generatedId = useId();
  const id = playerId ?? generatedId;

  const [supported] = useState(isSpeechSynthesisSupported);
  const [rate, setRate] = useState<SpeechRate>(defaultRate);
  const [snapshot, setSnapshot] = useState<PlaybackSnapshot>(() => speechService.getSnapshot());
  const [resolvedVoiceLabel, setResolvedVoiceLabel] = useState<string>(() => resolveVoice(variant, voiceName).label);

  useEffect(() => {
    setRate(defaultRate);
  }, [defaultRate]);

  useEffect(() => {
    return speechService.subscribe(setSnapshot);
  }, []);

  useEffect(() => {
    return subscribeVoicesChanged(() => {
      setResolvedVoiceLabel(resolveVoice(variant, voiceName).label);
    });
  }, [variant, voiceName]);

  useEffect(() => {
    if (autoPlay && supported) {
      speechService.speak(text, { id, variant, voiceName, rate });
    }
    return () => {
      if (speechService.getSnapshot().activeId === id) {
        speechService.stop();
      }
    };
  }, [autoPlay, id, supported]);

  const isMine = snapshot.activeId === id;
  const status = isMine ? snapshot.status : 'idle';

  const handlePlayOrResume = () => {
    if (status === 'paused') {
      speechService.resume();
    } else {
      speechService.speak(text, { id, variant, voiceName, rate });
    }
  };

  const handleRepeat = () => {
    speechService.speak(text, { id, variant, voiceName, rate });
  };

  const handleRateChange = (nextRate: SpeechRate) => {
    setRate(nextRate);
    if (isMine && status !== 'idle') {
      speechService.speak(text, { id, variant, voiceName, rate: nextRate });
    }
  };

  if (!supported) {
    return compact ? null : (
      <p className="muted text-xs" role="status">
        Browser text-to-speech is not supported in this browser.
      </p>
    );
  }

  if (compact) {
    return (
      <div className="inline-flex flex-wrap items-center gap-1.5">
        <button
          type="button"
          onClick={status === 'playing' ? () => speechService.pause() : handlePlayOrResume}
          aria-label={label ? `${status === 'playing' ? 'Pause' : 'Listen'}: ${label}` : status === 'playing' ? 'Pause audio' : 'Listen'}
          className="btn btn2 min-h-[36px] gap-1.5 px-2.5 text-xs"
        >
          <SpeakerIcon />
          <span>{status === 'playing' ? 'Pause' : status === 'paused' ? 'Resume' : 'Listen'}</span>
        </button>
        {status !== 'idle' && (
          <button
            type="button"
            onClick={() => speechService.stop()}
            aria-label="Stop audio"
            className="btn btn2 min-h-[36px] px-2.5 text-xs"
          >
            Stop
          </button>
        )}
      </div>
    );
  }

  return (
    <div className="rounded-lg border border-slate-200 bg-slate-50 p-3">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <div className="flex flex-wrap items-center gap-2">
          <button
            type="button"
            onClick={status === 'playing' ? () => speechService.pause() : handlePlayOrResume}
            className="btn min-h-[44px] gap-2 px-4 text-sm"
          >
            <SpeakerIcon />
            <span>{status === 'playing' ? 'Pause' : status === 'paused' ? 'Resume' : label ?? 'Play audio'}</span>
          </button>
          <button
            type="button"
            onClick={() => speechService.stop()}
            disabled={status === 'idle'}
            className="btn btn2 min-h-[44px] px-3 text-sm"
          >
            Stop
          </button>
          <button
            type="button"
            onClick={handleRepeat}
            className="btn btn2 min-h-[44px] px-3 text-sm"
          >
            Repeat
          </button>
        </div>

        <div className="flex flex-wrap items-center gap-1" role="group" aria-label="Playback speed">
          <span className="muted mr-1 text-xs font-medium">Speed:</span>
          {SPEECH_RATES.map(r => (
            <button
              key={r}
              type="button"
              aria-pressed={rate === r}
              onClick={() => handleRateChange(r)}
              className={`min-h-[36px] rounded-md border px-2.5 text-xs font-semibold transition-colors ${
                rate === r
                  ? 'border-brand-600 bg-brand-600 text-white'
                  : 'border-slate-300 bg-white text-slate-700 hover:border-brand-600'
              }`}
            >
              {r}x
            </button>
          ))}
        </div>
      </div>

      <p className="muted mt-2 text-xs">
        Voice: <span className="font-medium text-slate-700">{isMine && snapshot.voiceLabel ? snapshot.voiceLabel : resolvedVoiceLabel}</span>
      </p>

      {isMine && snapshot.error && (
        <p role="alert" className="mt-1 text-xs font-medium text-red-700">
          {snapshot.error}
        </p>
      )}
    </div>
  );
}