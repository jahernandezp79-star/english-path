import { useState } from 'react';
import type { Answer, Unit } from '../types';
import { grade, pct, PASS, studyTip } from '../engine/grade';
import { ExerciseSet, correctText, showAnswer } from './ExerciseView';
import type { Ctx } from '../ctx';
import { recordAssessment } from '../engine/store';

export function ResultView({ unit, answers, onRetake, ctx }: { unit: Unit; answers: Record<string, Answer>; onRetake: () => void; ctx: Ctx }) {
  const rows = unit.assessment.map(ex => ({ ex, ok: grade(ex, answers[ex.id]) === true }));
  const right = rows.filter(r => r.ok).length, score = pct(right, rows.length), passed = score >= PASS;
  return (
    <div className="space-y-4">
      <div className="card text-center">
        <p className="muted">Final assessment · {unit.title}</p>
        <p className="my-1 text-5xl font-bold text-brand-600">{score}%</p>
        <span className={`inline-block rounded-full px-4 py-1 text-sm font-bold text-white ${passed ? 'bg-emerald-700' : 'bg-amber-700'}`}>{passed ? 'COMPLETED' : 'REVIEW'}</span>
        <p className="mt-3">{right} correct · {rows.length - right} incorrect</p>
        <p className="muted mt-2">{studyTip(score)}</p>
        <div className="mt-4 flex flex-wrap justify-center gap-2"><button className="btn" onClick={onRetake}>Retake assessment</button><button className="btn btn2" onClick={() => ctx.go('lesson', unit.id, 'grammar')}>Review grammar</button><button className="btn btn2" onClick={() => ctx.go('course')}>Back to course</button></div>
      </div>
      <div className="card"><h3 className="mb-3 text-lg font-semibold">Explanations</h3>
        <ol className="space-y-3">{rows.map(({ ex, ok }, i) => (
          <li key={ex.id} className={`rounded-lg border p-3 ${ok ? 'border-emerald-200 bg-emerald-50' : 'border-red-200 bg-red-50'}`}>
            <p className="font-medium">{i + 1}. {ex.prompt} <span className="muted">({ok ? 'correct' : 'incorrect'})</span></p>
            {!ok && <p className="text-sm">Your answer: {showAnswer(ex, answers[ex.id])} · Correct: <b>{correctText(ex)}</b></p>}
            <p className="text-sm">{ex.feedback}</p></li>))}</ol></div>
    </div>
  );
}

export default function AssessmentView({ unit, ctx }: { unit: Unit; ctx: Ctx }) {
  const [answers, setAnswers] = useState<Record<string, Answer> | null>(null);
  const [run, setRun] = useState(0);
  const prev = ctx.progress.scores[unit.id];
  if (answers) return <ResultView unit={unit} answers={answers} ctx={ctx} onRetake={() => { setAnswers(null); setRun(run + 1); }} />;
  const finish = (a: Record<string, Answer>) => {
    const right = unit.assessment.filter(ex => grade(ex, a[ex.id]) === true).length, score = pct(right, unit.assessment.length);
    ctx.update(p => recordAssessment(p, unit.id, unit.title, score, score >= PASS));
    setAnswers(a);
  };
  return (
    <div className="space-y-3">
      <div className="card"><h3 className="text-lg font-semibold">Final assessment</h3>
        <p className="muted">{unit.assessment.length} questions. Score {PASS}% or more to complete the unit; below {PASS}% the unit goes to Review.{prev ? ` Best score so far: ${prev.best}%.` : ''}</p></div>
      <ExerciseSet key={run} exercises={unit.assessment} mode="test" onFinish={finish} finishLabel="Submit assessment" />
    </div>
  );
}
