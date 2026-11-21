import type { Level, Progress, Score, Settings, SpeechPracticeStat } from '../types';
const KEY = 'englishpath.progress.v1', SKEY = 'englishpath.settings.v1';
export const defaultProgress = (): Progress => ({
  currentLevel: 'A1',
  currentUnit: null,
  completed: [],
  reviewUnits: [],
  scores: {},
  practice: {},
  speechPractice: {},
  listeningCompleted: [],
  savedVocab: [],
  activity: [],
  lastActivity: null
});
export const defaultSettings = (): Settings => ({
  showTranslations: true,
  speechVariant: 'en-US',
  speechVoiceName: '',
  speechRate: 1,
  autoPlayAudio: false
});
type Store = { getItem(k: string): string | null; setItem(k: string, v: string): void };
const ls = (): Store | null => { try { return (globalThis as any).localStorage ?? null; } catch { return null; } };
export function load<T>(key: string, def: () => T): T {
  try { const raw = ls()?.getItem(key); return raw ? { ...def(), ...JSON.parse(raw) } : def(); } catch { return def(); }
}
export const loadProgress = () => load(KEY, defaultProgress);
export const loadSettings = () => load(SKEY, defaultSettings);
function save(key: string, v: unknown) { try { ls()?.setItem(key, JSON.stringify(v)); } catch { /* storage unavailable: app keeps working in memory */ } }
export const saveProgress = (p: Progress) => save(KEY, p);
export const saveSettings = (s: Settings) => save(SKEY, s);

const stamp = (p: Progress, text: string): Progress => {
  const at = new Date().toISOString();
  return { ...p, lastActivity: at, activity: [{ at, text }, ...p.activity].slice(0, 20) };
};
export const openUnit = (p: Progress, level: Level, unitId: string, title: string): Progress =>
  stamp({ ...p, currentLevel: level, currentUnit: unitId }, `Opened ${title}`);
export function recordPractice(p: Progress, unitId: string, exId: string, ok: boolean): Progress {
  const done = new Set(p.practice[unitId] ?? []);
  if (ok) done.add(exId); else done.delete(exId);
  return { ...p, practice: { ...p.practice, [unitId]: [...done] } };
}
export function recordAssessment(p: Progress, unitId: string, title: string, score: number, passed: boolean): Progress {
  const old: Score | undefined = p.scores[unitId];
  const scores = { ...p.scores, [unitId]: { best: Math.max(old?.best ?? 0, score), last: score, attempts: (old?.attempts ?? 0) + 1, date: new Date().toISOString() } };
  const completed = passed ? [...new Set([...p.completed, unitId])] : p.completed;
  const reviewUnits = passed ? p.reviewUnits.filter(u => u !== unitId) : [...new Set([...p.reviewUnits, unitId])];
  return stamp({ ...p, scores, completed, reviewUnits }, `${title}: ${score}% — ${passed ? 'COMPLETED' : 'REVIEW'}`);
}
export function recordSpeechPractice(
  p: Progress,
  unitId: string,
  itemKey: string,
  textualMatchPct: number | null,
  completed = true
): Progress {
  const key = `${unitId}|${itemKey}`;
  const prev: SpeechPracticeStat | undefined = p.speechPractice[key];
  const best =
    textualMatchPct === null
      ? prev?.bestTextMatchPct ?? null
      : prev?.bestTextMatchPct === null || prev?.bestTextMatchPct === undefined
      ? textualMatchPct
      : Math.max(prev.bestTextMatchPct, textualMatchPct);
  const nextStat: SpeechPracticeStat = {
    attempts: (prev?.attempts ?? 0) + 1,
    lastTextMatchPct: textualMatchPct,
    bestTextMatchPct: best,
    completed: Boolean(prev?.completed || completed),
    date: new Date().toISOString()
  };
  return stamp(
    { ...p, speechPractice: { ...p.speechPractice, [key]: nextStat } },
    `Practised speaking (${unitId})`
  );
}
export function recordListeningCompleted(p: Progress, unitId: string): Progress {
  if (p.listeningCompleted.includes(unitId)) return p;
  return stamp(
    { ...p, listeningCompleted: [...p.listeningCompleted, unitId] },
    `Completed listening (${unitId})`
  );
}
export function toggleVocab(p: Progress, key: string): Progress {
  const has = p.savedVocab.includes(key);
  return { ...p, savedVocab: has ? p.savedVocab.filter(k => k !== key) : [...p.savedVocab, key] };
}
/** Resets progress only. Course content lives in src/data and is never touched. */
export const resetProgress = (): Progress => defaultProgress();