import { useState } from 'react';
import type { Answer, Exercise } from '../types';
import { grade } from '../engine/grade';
import ProgressBar from './ProgressBar';

export const showAnswer = (ex: Exercise, a: Answer | undefined): string => {
  if (a === undefined) return '—';
  switch (ex.type) {
    case 'multiple-choice': case 'reading-comprehension': return typeof a === 'number' ? ex.options?.[a] ?? '—' : '—';
    case 'true-false': return typeof a === 'boolean' ? (a ? 'True' : 'False') : '—';
    case 'word-order': return Array.isArray(a) ? a.join(' ') : '—';
    case 'matching': return typeof a === 'object' && !Array.isArray(a) ? Object.entries(a).map(([l, r]) => `${l} → ${r}`).join(', ') : '—';
    default: return typeof a === 'string' ? a : '—';
  }
};
export const correctText = (ex: Exercise) =>
  ex.type === 'matching' ? (ex.pairs ?? []).map(([l, r]) => `${l} → ${r}`).join(', ') : ex.type === 'short-answer' ? ex.rubric ?? '' : showAnswer(ex, ex.answer);
const opt = (on: boolean) => `block w-full min-h-[48px] rounded-lg border px-4 py-2 text-left ${on ? 'border-brand-600 bg-brand-50 font-semibold' : 'border-slate-300 bg-white hover:border-brand-600'} disabled:opacity-70`;

export function ExerciseView({ ex, value, onChange, locked, result }: { ex: Exercise; value: Answer | undefined; onChange: (a: Answer) => void; locked: boolean; result?: boolean | null }) {
  const picked = (Array.isArray(value) ? value : []) as string[];
  const remaining = [...(ex.words ?? [])];
  picked.forEach(w => { const i = remaining.indexOf(w); if (i >= 0) remaining.splice(i, 1); });
  const map = (typeof value === 'object' && value !== null && !Array.isArray(value) ? value : {}) as Record<string, string>;
  return (
    <div>
      <p className="muted">{ex.instructions}</p>
      {ex.passage && <p className="my-3 rounded-lg bg-slate-100 p-3 leading-relaxed">{ex.passage}</p>}
      <p className="my-3 text-lg font-semibold leading-snug">{ex.prompt}</p>
      {(ex.type === 'multiple-choice' || ex.type === 'reading-comprehension') && (
        <div className="space-y-2" role="radiogroup">{ex.options!.map((o, i) => <button key={o} role="radio" aria-checked={value === i} disabled={locked} className={opt(value === i)} onClick={() => onChange(i)}>{o}</button>)}</div>)}
      {ex.type === 'true-false' && <div className="grid grid-cols-2 gap-2">{[true, false].map(b => <button key={String(b)} disabled={locked} aria-pressed={value === b} className={opt(value === b)} onClick={() => onChange(b)}>{b ? 'True' : 'False'}</button>)}</div>}
      {(ex.type === 'fill-blank' || ex.type === 'sentence-transformation') && <input aria-label="Your answer" disabled={locked} value={typeof value === 'string' ? value : ''} onChange={e => onChange(e.target.value)} autoComplete="off" className="min-h-[48px] w-full rounded-lg border border-slate-300 px-3 text-base focus:border-brand-600 focus:outline-none focus:ring-1 focus:ring-brand-600" placeholder="Type your answer" />}
      {ex.type === 'short-answer' && <textarea aria-label="Your answer" disabled={locked} rows={4} value={typeof value === 'string' ? value : ''} onChange={e => onChange(e.target.value)} className="w-full rounded-lg border border-slate-300 p-3 focus:border-brand-600 focus:outline-none focus:ring-1 focus:ring-brand-600" placeholder="Write your answer here" />}
      {ex.type === 'word-order' && (
        <div>
          <div className="mb-3 flex min-h-[52px] flex-wrap gap-2 rounded-lg border border-dashed border-slate-400 p-2" aria-label="Your sentence">
            {picked.length === 0 && <span className="muted p-2">Tap the words below</span>}
            {picked.map((w, i) => <button key={i} disabled={locked} className="min-h-[40px] rounded-md bg-brand-600 px-3 text-white" onClick={() => onChange(picked.filter((_, j) => j !== i))}>{w}</button>)}
          </div>
          <div className="flex flex-wrap gap-2">{remaining.map((w, i) => <button key={i} disabled={locked} className="min-h-[40px] rounded-md border border-slate-300 bg-white px-3 hover:border-brand-600" onClick={() => onChange([...picked, w])}>{w}</button>)}</div>
        </div>)}
      {ex.type === 'matching' && <div className="space-y-2">{ex.pairs!.map(([l]) => (
        <label key={l} className="flex items-center justify-between gap-3"><span className="font-medium">{l}</span>
          <select disabled={locked} value={map[l] ?? ''} onChange={e => onChange({ ...map, [l]: e.target.value })} className="min-h-[44px] min-w-[150px] rounded-lg border border-slate-300 bg-white px-2">
            <option value="">Choose…</option>{[...ex.pairs!.map(p => p[1])].sort().map(r => <option key={r}>{r}</option>)}</select></label>))}</div>}
      {result !== undefined && (
        <div role="status" className={`mt-4 rounded-lg border p-3 ${result === true ? 'border-emerald-300 bg-emerald-50' : result === false ? 'border-red-300 bg-red-50' : 'border-slate-300 bg-slate-50'}`}>
          <p className="font-semibold">{result === true ? 'Correct' : result === false ? 'Not quite' : 'Self-check'}</p>
          {result !== true && <p className="text-sm">{ex.type === 'short-answer' ? ex.rubric : <>Correct answer: <b>{correctText(ex)}</b></>}</p>}
          <p className="mt-1 text-sm">{ex.feedback}</p>
        </div>)}
    </div>
  );
}

const hasAnswer = (_ex: Exercise, a: Answer | undefined) => a !== undefined && !(Array.isArray(a) && a.length === 0) && (typeof a !== 'string' || a.trim() !== '');

export function ExerciseSet({ exercises, mode, onChecked, onFinish, finishLabel }: { exercises: Exercise[]; mode: 'practice' | 'test'; onChecked?: (ex: Exercise, ok: boolean | null) => void; onFinish?: (answers: Record<string, Answer>) => void; finishLabel?: string }) {
  const [i, setI] = useState(0);
  const [answers, setAnswers] = useState<Record<string, Answer>>({});
  const [checked, setChecked] = useState<Record<string, boolean | null>>({});
  const [done, setDone] = useState(false);
  const ex = exercises[i];
  if (done) {
    const auto = exercises.filter(e => e.type !== 'short-answer'), right = auto.filter(e => checked[e.id] === true).length;
    return <div className="card text-center"><p className="text-xl font-semibold">Practice finished</p><p className="my-2">{right} of {auto.length} auto-graded answers correct.</p>
      <button className="btn btn2" onClick={() => { setI(0); setAnswers({}); setChecked({}); setDone(false); }}>Practice again</button></div>;
  }
  const isChecked = ex.id in checked, last = i === exercises.length - 1;
  const check = () => { const r = grade(ex, answers[ex.id]); setChecked({ ...checked, [ex.id]: r }); onChecked?.(ex, r); };
  const next = () => { if (!last) setI(i + 1); else if (mode === 'test') onFinish?.(answers); else { setDone(true); onFinish?.(answers); } };
  return (
    <div className="card">
      <div className="mb-4"><div className="muted mb-1">Question {i + 1} of {exercises.length}</div><ProgressBar value={((i + 1) / exercises.length) * 100} label="Question progress" /></div>
      <ExerciseView key={ex.id} ex={ex} value={answers[ex.id]} onChange={a => setAnswers({ ...answers, [ex.id]: a })} locked={mode === 'practice' && isChecked} result={mode === 'practice' && isChecked ? checked[ex.id] : undefined} />
      <div className="mt-5 flex gap-2">
        {i > 0 && mode === 'test' && <button className="btn btn2" onClick={() => setI(i - 1)}>Back</button>}
        {mode === 'practice' && !isChecked && <button className="btn" disabled={!hasAnswer(ex, answers[ex.id])} onClick={check}>Check answer</button>}
        {(mode === 'test' || isChecked) && <button className="btn" onClick={next}>{last ? finishLabel ?? 'Finish' : 'Next'}</button>}
      </div>
    </div>
  );
}
