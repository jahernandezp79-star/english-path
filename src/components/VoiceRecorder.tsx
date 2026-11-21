import { useEffect, useRef, useState } from 'react';
import {
  LocalAudioRecorder,
  isAudioRecordingSupported
} from '../services/audioRecordingService';

interface VoiceRecorderProps {
  title?: string;
  onRecorded?: () => void;
}

const MicIcon = () => (
  <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4 shrink-0 fill-none stroke-current" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 1a3 3 0 00-3 3v8a3 3 0 006 0V4a3 3 0 00-3-3z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M19 10v2a7 7 0 01-14 0v-2M12 19v4M8 23h8" />
  </svg>
);

export default function VoiceRecorder({ title = 'Record yourself', onRecorded }: VoiceRecorderProps) {
  const [supported] = useState(isAudioRecordingSupported);
  const [recording, setRecording] = useState(false);
  const [seconds, setSeconds] = useState(0);
  const [audioUrl, setAudioUrl] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const recorderRef = useRef<LocalAudioRecorder | null>(null);
  if (!recorderRef.current) {
    recorderRef.current = new LocalAudioRecorder();
  }

  useEffect(() => {
    if (!recording) return;
    const id = window.setInterval(() => setSeconds(s => s + 1), 1000);
    return () => window.clearInterval(id);
  }, [recording]);

  useEffect(() => {
    const recorder = recorderRef.current;
    return () => {
      recorder?.dispose();
    };
  }, []);

  const handleStart = async () => {
    setError(null);
    setSeconds(0);
    setAudioUrl(null);
    await recorderRef.current?.start({
      onStart: () => setRecording(true),
      onStop: result => {
        setRecording(false);
        setAudioUrl(result.url);
        onRecorded?.();
      },
      onError: msg => {
        setRecording(false);
        setError(msg);
      }
    });
  };

  const handleStop = () => {
    recorderRef.current?.stop();
  };

  const handleDelete = () => {
    recorderRef.current?.deleteRecording();
    setAudioUrl(null);
    setSeconds(0);
    setError(null);
  };

  if (!supported) {
    return (
      <div className="rounded-lg border border-slate-200 bg-slate-50 p-3 text-sm text-slate-600">
        Microphone recording (MediaRecorder) is not supported in this browser.
      </div>
    );
  }

  const mm = String(Math.floor(seconds / 60)).padStart(2, '0');
  const ss = String(seconds % 60).padStart(2, '0');

  return (
    <div className="rounded-lg border border-slate-200 bg-slate-50 p-3 space-y-2.5">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <span className="text-sm font-semibold">{title}</span>
        {recording && (
          <span role="status" className="inline-flex items-center gap-1.5 text-xs font-semibold text-red-700">
            <span className="h-2.5 w-2.5 animate-pulse rounded-full bg-red-600" />
            Recording {mm}:{ss}
          </span>
        )}
      </div>

      <div className="flex flex-wrap items-center gap-2">
        {!recording ? (
          <button type="button" onClick={handleStart} className="btn min-h-[40px] gap-2 px-4 text-sm">
            <MicIcon />
            <span>{audioUrl ? 'Record again' : 'Start recording'}</span>
          </button>
        ) : (
          <button type="button" onClick={handleStop} className="btn bg-red-700 hover:bg-red-800 min-h-[40px] px-4 text-sm">
            Stop recording
          </button>
        )}

        {audioUrl && !recording && (
          <button type="button" onClick={handleDelete} className="btn btn2 min-h-[40px] px-3 text-sm">
            Delete
          </button>
        )}
      </div>

      {audioUrl && (
        <div className="pt-1">
          <audio controls src={audioUrl} className="w-full" />
        </div>
      )}

      <p className="muted text-xs">
        Stored temporarily in browser memory only. Never uploaded; deleted automatically when you leave.
      </p>

      {error && (
        <p role="alert" className="text-xs font-medium text-red-700">
          {error}
        </p>
      )}
    </div>
  );
}