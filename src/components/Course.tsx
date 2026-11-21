import type { Ctx } from '../ctx';
import type { Level } from '../types';
import { LEVELS, UNITS_PER_LEVEL, unitsOf } from '../data';
import ProgressBar from './ProgressBar';

export const levelStatus = (ctx: Ctx, l: Level) => {
  const us = unitsOf(l), done = us.filter(u => ctx.progress.completed.includes(u.id)).length;
  if (!us.length) return 'Content coming soon';
  if (done === UNITS_PER_LEVEL) return 'Completed';
  return done > 0 || us.some(u => ctx.progress.scores[u.id]) ? 'In progress' : 'Available';
};
export const LevelSelector = ({ ctx }: { ctx: Ctx }) => (
  <div role="tablist" className="-mx-4 flex gap-2 overflow-x-auto px-4 pb-2">{LEVELS.map(l => (
    <button key={l.id} role="tab" aria-selected={ctx.progress.currentLevel === l.id} onClick={() => ctx.update(p => ({ ...p, currentLevel: l.id }))} className={`min-h-[48px] shrink-0 rounded-lg border px-4 text-left ${ctx.progress.currentLevel === l.id ? 'border-brand-600 bg-brand-600 text-white' : 'border-slate-300 bg-white'}`}>
      <span className="block font-semibold">{l.id}</span><span className="block text-xs">{l.name}</span></button>))}</div>);

export function UnitList({ ctx, level }: { ctx: Ctx; level: Level }) {
  const us = unitsOf(level);
  return (<ul className="space-y-3">{Array.from({ length: UNITS_PER_LEVEL }, (_, i) => i + 1).map(n => { const u = us.find(x => x.unitNumber === n);
    if (!u) return <li key={n} className="card opacity-60"><p className="font-semibold">Unit {n}</p><p className="muted">Content arrives in a later batch.</p></li>;
    const s = ctx.progress.scores[u.id], st = ctx.progress.completed.includes(u.id) ? 'COMPLETED' : ctx.progress.reviewUnits.includes(u.id) ? 'REVIEW' : s ? 'IN PROGRESS' : 'NOT STARTED';
    return (<li key={u.id}><button className="card w-full text-left hover:border-brand-600" onClick={() => ctx.go('lesson', u.id, 'objectives')}>
      <div className="flex items-start justify-between gap-3"><div><p className="muted">Unit {n}</p><p className="text-lg font-semibold">{u.title}</p><p className="muted">{u.subtitle}</p></div>
        <span className="shrink-0 rounded-full bg-slate-200 px-3 py-0.5 text-xs font-bold">{st}</span></div>
      {s && <p className="muted mt-2">Best score {s.best}% · {s.attempts} attempt{s.attempts > 1 ? 's' : ''}</p>}</button></li>); })}</ul>);
}
export default function Course({ ctx }: { ctx: Ctx }) {
  const l = LEVELS.find(x => x.id === ctx.progress.currentLevel)!;
  const done = unitsOf(l.id).filter(u => ctx.progress.completed.includes(u.id)).length;
  return (<div className="space-y-4"><h1 className="text-2xl font-bold">My Course</h1><LevelSelector ctx={ctx} />
    <div className="card"><p className="font-semibold">{l.id} — {l.name}</p><p className="muted mb-3">{l.desc}</p><ProgressBar value={(done / UNITS_PER_LEVEL) * 100} label="Level progress" /><p className="muted mt-2">{done} of {UNITS_PER_LEVEL} units completed · {levelStatus(ctx, l.id)}</p></div>
    <UnitList ctx={ctx} level={l.id} /></div>);
}
