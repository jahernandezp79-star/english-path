export interface RecordingResult {
  blob: Blob;
  url: string;
  mimeType: string;
}

export interface AudioRecorderCallbacks {
  onStart?: () => void;
  onStop?: (result: RecordingResult) => void;
  onError?: (message: string) => void;
}

export function isAudioRecordingSupported(): boolean {
  if (typeof window === 'undefined') return false;
  return (
    'MediaRecorder' in window &&
    typeof navigator !== 'undefined' &&
    Boolean(navigator.mediaDevices?.getUserMedia)
  );
}

function pickMimeType(): string {
  if (typeof MediaRecorder === 'undefined' || typeof MediaRecorder.isTypeSupported !== 'function') {
    return '';
  }
  const candidates = ['audio/webm;codecs=opus', 'audio/webm', 'audio/mp4', 'audio/ogg;codecs=opus'];
  return candidates.find(type => MediaRecorder.isTypeSupported(type)) ?? '';
}

export class LocalAudioRecorder {
  private mediaRecorder: MediaRecorder | null = null;
  private stream: MediaStream | null = null;
  private chunks: Blob[] = [];
  private activeUrl: string | null = null;
  private disposed = false;

  async start(callbacks: AudioRecorderCallbacks): Promise<void> {
    if (!isAudioRecordingSupported()) {
      callbacks.onError?.('Microphone recording (MediaRecorder) is not supported in this browser.');
      return;
    }

    this.stopTracks();
    this.revokeUrl();
    this.chunks = [];
    this.disposed = false;

    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      if (this.disposed) {
        stream.getTracks().forEach(t => t.stop());
        return;
      }
      this.stream = stream;
      const mimeType = pickMimeType();
      const recorder = mimeType ? new MediaRecorder(stream, { mimeType }) : new MediaRecorder(stream);
      this.mediaRecorder = recorder;

      recorder.ondataavailable = (event: BlobEvent) => {
        if (event.data && event.data.size > 0) {
          this.chunks.push(event.data);
        }
      };

      recorder.onerror = () => {
        this.stopTracks();
        callbacks.onError?.('An error occurred while recording audio.');
      };

      recorder.onstop = () => {
        const type = recorder.mimeType || mimeType || 'audio/webm';
        const blob = new Blob(this.chunks, { type });
        this.chunks = [];
        this.stopTracks();
        if (this.disposed) return;
        const url = URL.createObjectURL(blob);
        this.activeUrl = url;
        callbacks.onStop?.({ blob, url, mimeType: type });
      };

      recorder.start();
      callbacks.onStart?.();
    } catch (err) {
      this.stopTracks();
      const name = err instanceof Error ? err.name : '';
      if (name === 'NotAllowedError' || name === 'PermissionDeniedError') {
        callbacks.onError?.('Microphone permission was denied. Enable access in your browser settings to record.');
      } else if (name === 'NotFoundError') {
        callbacks.onError?.('No microphone device was detected.');
      } else {
        callbacks.onError?.('Unable to access the microphone.');
      }
    }
  }

  stop(): void {
    if (this.mediaRecorder && this.mediaRecorder.state !== 'inactive') {
      try {
        this.mediaRecorder.stop();
      } catch {
        this.stopTracks();
      }
    } else {
      this.stopTracks();
    }
  }

  deleteRecording(): void {
    this.revokeUrl();
    this.chunks = [];
  }

  dispose(): void {
    this.disposed = true;
    this.stop();
    this.stopTracks();
    this.revokeUrl();
    this.chunks = [];
    this.mediaRecorder = null;
  }

  private stopTracks(): void {
    if (this.stream) {
      this.stream.getTracks().forEach(track => track.stop());
      this.stream = null;
    }
  }

  private revokeUrl(): void {
    if (this.activeUrl) {
      URL.revokeObjectURL(this.activeUrl);
      this.activeUrl = null;
    }
  }
}