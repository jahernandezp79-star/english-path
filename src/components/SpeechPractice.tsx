import { useEffect, useRef, useState } from 'react';
import {
  compareSpokenText,
  type SpeechComparisonResult
} from '../services/speechComparisonService';
import {
  createSpeechRecognitionSession,
  getSpeechRecognitionPrivacyNotice,
  isSpeechRecognitionSupported,
  type RecognitionHandle
} from '../services/speechRecognitionService';
import type { SpeechRate, SpeechVariant } from '../types';
import AudioPlayer from './AudioPlayer';
import VoiceRecorder from './VoiceRecorder';

interface SpeechPracticeProps {
  targetText: string;
  label?: string;
  variant?: SpeechVariant;
  voiceName?: string;
  defaultRate?: SpeechRate;
  showRecorder?: boolean;
  onPracticeResult?: (textualMatchPct: number | null) => void;
}

export default function SpeechPractice({
  targetText,
  label,
  variant = 'en-US',
  voiceName = '',
  defaultRate = 1,
  showRecorder = true,
  onPracticeResult
}: SpeechPracticeProps) {
  const [recognitionSupported] = useState(isSpeechRecognitionSupported);
  const [useWrittenMode, setUseWrittenMode] = useState(() => !isSpeechRecognitionSupported());
  const [listening, setListening] = useState(false);
  const [interimText, setInterimText] = useState('');
  const [transcript, setTranscript] = useState('');
  const [writtenInput, setWrittenInput] = useState('');
  const [comparison, setComparison] = useState<SpeechComparisonResult | null>(null);
  const [error, setError] = useState<string | null>(null);

  const sessionRef = useRef<RecognitionHandle | null>(null);

  useEffect(() => {
    return () => {
      sessionRef.current?.abort();
      sessionRef.current = null;
    };
  }, []);

  const evaluateText = (text: string) => {
    const res = compareSpokenText(targetText, text);
    setComparison(res);
    onPracticeResult?.(res.textualMatchPct);
  };

  const handleStartListening = () => {
    setError(null);
    setInterimText('');
    setTranscript('');
    setComparison(null);

    sessionRef.current?.abort();
    const session = createSpeechRecognitionSession({
      lang: variant,
      onStart: () => setListening(true),
      onInterim: text => setInterimText(text),
      onFinal: text => {
        setTranscript(text);
        setInterimText('');
        evaluateText(text);
      },
      onError: msg => {
        setError(msg);
      },
      onEnd: () => {
        setListening(false);
      }
    });

    if (!session) {
      setUseWrittenMode(true);
      setError('Speech recognition is unavailable. Switched to written practice.');
      return;
    }

    sessionRef.current = session;
    session.start();
  };

  const handleStopListening = () => {
    sessionRef.current?.stop();
  };

  const handleClear = () => {
    sessionRef.current?.abort();
    setListening(false);
    setInterimText('');
    setTranscript('');
    setWrittenInput('');
    setComparison(null);
    setError(null);
  };

  const handleCheckWritten = () => {
    if (!writtenInput.trim()) return;
    setTranscript(writtenInput.trim());
    evaluateText(writtenInput.trim());
  };

  const tokenClass = (status: 'correct' | 'omitted' | 'different' | 'extra') => {
    switch (status) {
      case 'correct':
        return 'bg-emerald-100 text-emerald-900 border-emerald-300';
      case 'omitted':
        return 'bg-amber-100 text-amber-900 border-amber-300 line-through';
      case 'different':
        return 'bg-red-100 text-red-900 border-red-300';
      case 'extra':
        return 'bg-slate-200 text-slate-800 border-slate-300';
    }
  };

  return (
    <div className="rounded-xl border border-slate-200 bg-white p-4 space-y-3">
      <div className="flex flex-wrap items-start justify-between gap-2">
        <div className="min-w-0 flex-1">
          {label && <p className="muted text-xs font-semibold uppercase tracking-wide">{label}</p>}
          <p className="font-semibold text-slate-900">{targetText}</p>
        </div>
        <AudioPlayer
          text={targetText}
          variant={variant}
          voiceName={voiceName}
          defaultRate={defaultRate}
          compact
          label={targetText}
        />
      </div>

      {!recognitionSupported && (
        <div role="status" className="rounded-lg border border-amber-200 bg-amber-50 p-3 text-xs text-amber-900">
          SpeechRecognition is not supported in this browser. A written practice alternative is enabled automatically below.
        </div>
      )}

      {recognitionSupported && (
        <div className="space-y-2">
          <div className="flex flex-wrap items-center gap-2">
            {!listening ? (
              <button type="button" onClick={handleStartListening} className="btn min-h-[40px] px-4 text-sm">
                {transcript ? 'Repeat speech check' : 'Speak & transcribe'}
              </button>
            ) : (
              <button type="button" onClick={handleStopListening} className="btn bg-red-700 hover:bg-red-800 min-h-[40px] px-4 text-sm">
                Stop listening
              </button>
            )}

            <button
              type="button"
              onClick={() => setUseWrittenMode(v => !v)}
              className="btn btn2 min-h-[40px] px-3 text-xs"
            >
              {useWrittenMode ? 'Hide written input' : 'Type instead'}
            </button>

            {(transcript || comparison || error) && (
              <button type="button" onClick={handleClear} className="btn btn2 min-h-[40px] px-3 text-xs">
                Clear
              </button>
            )}
          </div>

          {listening && (
            <p role="status" className="inline-flex items-center gap-2 text-xs font-semibold text-brand-600">
              <span className="h-2.5 w-2.5 animate-pulse rounded-full bg-brand-600" />
              Listening… speak clearly into your microphone.
            </p>
          )}

          <p className="muted text-xs">{getSpeechRecognitionPrivacyNotice()}</p>
        </div>
      )}

      {useWrittenMode && (
        <div className="space-y-2 rounded-lg border border-slate-200 bg-slate-50 p-3">
          <label className="block text-xs font-semibold text-slate-700">
            Written practice alternative
            <input
              type="text"
              value={writtenInput}
              onChange={e => setWrittenInput(e.target.value)}
              placeholder="Type the phrase from memory or after listening"
              className="mt-1 min-h-[44px] w-full rounded-lg border border-slate-300 bg-white px-3 text-sm font-normal focus:border-brand-600 focus:outline-none focus:ring-1 focus:ring-brand-600"
            />
          </label>
          <div className="flex gap-2">
            <button
              type="button"
              disabled={!writtenInput.trim()}
              onClick={handleCheckWritten}
              className="btn min-h-[40px] px-4 text-sm"
            >
              Compare text
            </button>
            {(writtenInput || comparison) && (
              <button type="button" onClick={handleClear} className="btn btn2 min-h-[40px] px-3 text-xs">
                Clear
              </button>
            )}
          </div>
        </div>
      )}

      {error && (
        <p role="alert" className="text-xs font-medium text-red-700">
          {error}
        </p>
      )}

      {(interimText || transcript) && (
        <div className="rounded-lg border border-slate-200 bg-slate-50 p-3 text-sm">
          <p className="muted text-xs font-semibold">Transcribed / entered text:</p>
          <p className="mt-1 text-slate-900">{transcript || interimText}</p>
        </div>
      )}

      {comparison && (
        <div className="space-y-2 rounded-lg border border-slate-200 bg-slate-50 p-3">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <span className="text-sm font-semibold">
              Coincidencia textual / Textual match: <span className="text-brand-600">{comparison.textualMatchPct}%</span>
            </span>
            <span className="muted text-xs">
              Correct: {comparison.correctWords.length} · Omitted: {comparison.omittedWords.length} · Different: {comparison.differentWords.length}
            </span>
          </div>

          <div className="flex flex-wrap gap-1.5" aria-label="Word-by-word textual comparison">
            {comparison.tokens.map((tok, idx) => (
              <span
                key={`${tok.word}-${idx}`}
                className={`inline-flex items-center gap-1 rounded border px-2 py-0.5 text-xs font-medium ${tokenClass(tok.status)}`}
                title={
                  tok.status === 'different'
                    ? `Expected "${tok.expected}", got "${tok.word}"`
                    : tok.status
                }
              >
                <span>{tok.word}</span>
                {tok.status === 'different' && tok.expected && (
                  <span className="text-[11px] opacity-80">(expected: {tok.expected})</span>
                )}
                {tok.status === 'omitted' && <span className="text-[11px] opacity-80">(omitted)</span>}
                {tok.status === 'extra' && <span className="text-[11px] opacity-80">(extra)</span>}
              </span>
            ))}
          </div>

          <p className="muted text-xs">{comparison.disclaimer}</p>
        </div>
      )}

      {showRecorder && (
        <VoiceRecorder
          title="Compare your own voice (local recording)"
          onRecorded={() => onPracticeResult?.(null)}
        />
      )}
    </div>
  );
}