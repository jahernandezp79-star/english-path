import type { Ctx } from '../ctx';
import { ALL_UNITS, LEVELS, TOTAL_UNITS, getUnit, nextUnitFor, unitsOf, UNITS_PER_LEVEL } from '../data';
import ProgressBar from './ProgressBar';
import { levelStatus } from './Course';

export default function Dashboard({ ctx }: { ctx: Ctx }) {
  const p = ctx.progress, scores = Object.values(p.scores);
  const avg = scores.length ? Math.round(scores.reduce((s, x) => s + x.last, 0) / scores.length) : null;
  const overall = Math.round((p.completed.length / TOTAL_UNITS) * 100);
  const level = LEVELS.find(l => l.id === p.currentLevel)!;
  const next = nextUnitFor(p.completed, p.currentUnit);
  const rec = [...p.reviewUnits.map(getUnit), ...ALL_UNITS.filter(u => !p.completed.includes(u.id) && u.id !== next?.id)].filter(Boolean).slice(0, 3);
  const stat = (k: string, v: string) => <div className="card"><p className="muted">{k}</p><p className="text-2xl font-bold">{v}</p></div>;
  return (
    <div className="space-y-6">
      <div><h1 className="text-3xl font-bold">Welcome to English Path</h1><p className="muted">From A1 to C2, one unit at a time.</p></div>
      <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
        {stat('Current Level', `${level.id} · ${level.name}`)}
        <div className="card"><p className="muted">Overall Progress</p><p className="mb-2 text-2xl font-bold">{overall}%</p><ProgressBar value={overall} label="Overall progress" /></div>
        {stat('Lessons Completed', `${p.completed.length} of ${TOTAL_UNITS}`)}
        {stat('Average Score', avg === null ? 'No scores yet' : `${avg}%`)}
      </div>
      <div className="grid gap-4 lg:grid-cols-3">
        <div className="card border-brand-600"><h2 className="mb-2 text-lg font-semibold">Continue Learning</h2>
          {next ? <><p className="muted">{next.level} · Unit {next.unitNumber}</p><p className="mb-4 text-xl font-semibold">{next.title}</p><button className="btn" onClick={() => ctx.go('lesson', next.id, 'objectives')}>{p.lastActivity ? 'Continue' : 'Start learning'}</button></> : <p className="muted">All available units are complete. New units arrive in later batches.</p>}</div>
        <div className="card"><h2 className="mb-2 text-lg font-semibold">Recommended for You</h2>
          {rec.length ? <ul className="space-y-2">{rec.map(u => u && <li key={u.id}><button className="text-left underline" onClick={() => ctx.go('lesson', u.id, p.reviewUnits.includes(u.id) ? 'grammar' : 'objectives')}>{p.reviewUnits.includes(u.id) ? 'Review' : 'Study'}: {u.title}</button></li>)}</ul> : <p className="muted">Nothing to recommend yet.</p>}</div>
        <div className="card"><h2 className="mb-2 text-lg font-semibold">Recent Activity</h2>
          {p.activity.length ? <ul className="space-y-1 text-sm">{p.activity.slice(0, 5).map(a => <li key={a.at}>{a.text} <span className="muted">· {new Date(a.at).toLocaleDateString()}</span></li>)}</ul> : <p className="muted">Your activity will appear here.</p>}</div>
      </div>
      <div><h2 className="mb-3 text-lg font-semibold">Levels</h2>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">{LEVELS.map(l => { const done = unitsOf(l.id).filter(u => p.completed.includes(u.id)).length; return (
          <button key={l.id} onClick={() => { ctx.update(x => ({ ...x, currentLevel: l.id })); ctx.go('course'); }} className="card text-left hover:border-brand-600">
            <p className="font-semibold">{l.id} — {l.name}</p><p className="muted mb-3">{l.desc}</p><ProgressBar value={(done / UNITS_PER_LEVEL) * 100} label={`${l.id} progress`} /><p className="muted mt-2">{done} of {UNITS_PER_LEVEL} units · {levelStatus(ctx, l.id)}</p></button>); })}</div></div>
    </div>
  );
}
