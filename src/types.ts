export type Level = 'A1' | 'A2' | 'B1' | 'B2' | 'C1' | 'C2';
export type ExType = 'multiple-choice' | 'fill-blank' | 'word-order' | 'true-false' | 'matching' | 'sentence-transformation' | 'short-answer' | 'reading-comprehension';
export type Answer = number | boolean | string | string[] | Record<string, string>;

export interface Exercise {
  id: string; type: ExType; instructions: string; prompt: string;
  passage?: string;            // reading-comprehension
  options?: string[];          // multiple-choice, reading-comprehension (answer = index)
  words?: string[];            // word-order (answer = correct string[])
  pairs?: [string, string][];  // matching
  answer?: Answer;             // expected answer
  accept?: string[];           // alternative accepted texts (fill-blank, transformation)
  rubric?: string;             // open types: guidance instead of auto-grading
  feedback: string;
}
export interface Vocab { word: string; translation: string; pron: string; stress?: string }
export interface Unit {
  id: string; level: Level; unitNumber: number; title: string; subtitle: string;
  objectives: string[]; communicativeGoal: string;
  grammar: { title: string; explanation: string[]; forms: { label: string; lines: string[] }[] };
  vocabulary: Vocab[]; examples: { en: string; es: string }[];
  dialogue: { speaker: string; text: string; es: string }[];
  listening: { script: { speaker: string; text: string }[]; audioUrl?: string; questions: Exercise[] };
  reading: { title: string; text: string; questions: Exercise[] };
  speaking: { prompt: string; tasks: string[] };
  writing: { prompt: string; rubric: string[]; model: string };
  pronunciation: { items: { word: string; ipa: string; stress: string }[]; tips: string[] };
  exercises: Exercise[]; assessment: Exercise[]; review: string[];
}
export interface Score { best: number; last: number; attempts: number; date: string }
export interface SpeechPracticeStat {
  attempts: number;
  lastTextMatchPct: number | null;
  bestTextMatchPct: number | null;
  completed: boolean;
  date: string;
}
export interface Progress {
  currentLevel: Level; currentUnit: string | null;
  completed: string[]; reviewUnits: string[];
  scores: Record<string, Score>;
  practice: Record<string, string[]>; // unitId -> exercise ids answered correctly
  speechPractice: Record<string, SpeechPracticeStat>; // "unitId|itemKey" -> textual practice tracking
  listeningCompleted: string[];       // unitIds with completed listening practice
  savedVocab: string[];               // "unitId|word"
  activity: { at: string; text: string }[];
  lastActivity: string | null;
}
export type SpeechVariant = 'en-US' | 'en-GB';
export type SpeechRate = 0.5 | 0.75 | 1 | 1.25;
export interface Settings {
  showTranslations: boolean;
  speechVariant: SpeechVariant;
  speechVoiceName: string;
  speechRate: SpeechRate;
  autoPlayAudio: boolean;
}