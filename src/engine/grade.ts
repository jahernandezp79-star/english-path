import type { Answer, Exercise } from '../types';
export const norm = (s: string) =>
  s.toLowerCase().replace(/[’‘]/g, "'").trim().replace(/[.!?¿¡,]+$/g, '').replace(/\s+/g, ' ').trim();
const same = (a: string[], b: string[]) => a.length === b.length && a.every((x, i) => x === b[i]);

/** true/false = auto-graded; null = open answer (self-check against rubric, never auto-scored). */
export function grade(ex: Exercise, a: Answer | undefined): boolean | null {
  if (ex.type === 'short-answer') return null;
  if (a === undefined || a === '' || (Array.isArray(a) && a.length === 0)) return false;
  switch (ex.type) {
    case 'multiple-choice': case 'reading-comprehension': case 'true-false': return a === ex.answer;
    case 'fill-blank': case 'sentence-transformation': {
      const ok = [ex.answer as string, ...(ex.accept ?? [])].map(norm);
      return typeof a === 'string' && ok.includes(norm(a));
    }
    case 'word-order': return Array.isArray(a) && same(a.map(norm), (ex.answer as string[]).map(norm));
    case 'matching': {
      const m = a as Record<string, string>;
      return !!ex.pairs && ex.pairs.every(([l, r]) => m[l] === r);
    }
  }
}
export const pct = (right: number, total: number) => (total ? Math.round((right / total) * 100) : 0);
export const PASS = 80;
export function studyTip(score: number): string {
  if (score >= 95) return 'Excellent. Move on to the next unit and keep using these structures in speaking and writing.';
  if (score >= PASS) return 'Good work. Read the explanations for the questions you missed, then continue.';
  if (score >= 50) return 'Review the Grammar and Vocabulary sections, redo the practice exercises, and retake the assessment.';
  return 'Go back to Objectives, Grammar and the Dialogue. Study them slowly, then try the exercises again before the assessment.';
}
