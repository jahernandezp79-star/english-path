import type { Ctx } from '../ctx';
import type { Unit } from '../types';
import AssessmentView from './Assessment';
import { DialogueSection, GrammarSection, ListeningSection, ObjectiveSection, PracticeSection, PronunciationSection, ReadingSection, ReviewSection, SpeakingSection, VocabularySection, WritingSection } from './Sections';

export const TABS = ['objectives', 'grammar', 'vocabulary', 'pronunciation', 'dialogue', 'listening', 'reading', 'speaking', 'writing', 'practice', 'summary', 'assessment'] as const;
const label = (t: string) => t[0].toUpperCase() + t.slice(1);

export default function LessonView({ unit, tab, ctx }: { unit: Unit; tab: string; ctx: Ctx }) {
  const cur = (TABS as readonly string[]).includes(tab) ? tab : 'objectives';
  const status = ctx.progress.completed.includes(unit.id) ? 'COMPLETED' : ctx.progress.reviewUnits.includes(unit.id) ? 'REVIEW' : null;
  return (
    <div>
      <button className="muted mb-2 min-h-[44px] underline" onClick={() => ctx.go('course')}>‹ Back to course</button>
      <div className="mb-4"><p className="muted">{unit.level} · Unit {unit.unitNumber}</p><h1 className="text-2xl font-bold">{unit.title}</h1><p className="muted">{unit.subtitle}</p>
        {status && <span className="mt-2 inline-block rounded-full bg-slate-200 px-3 py-0.5 text-xs font-bold">{status}</span>}</div>
      <div role="tablist" className="-mx-4 mb-4 flex gap-2 overflow-x-auto px-4 pb-2">{TABS.map(t => (
        <button key={t} role="tab" aria-selected={cur === t} onClick={() => ctx.go('lesson', unit.id, t)} className={`min-h-[44px] shrink-0 rounded-full border px-4 text-sm font-medium ${cur === t ? 'border-brand-600 bg-brand-600 text-white' : 'border-slate-300 bg-white'}`}>{label(t)}</button>))}</div>
      {cur === 'objectives' && <ObjectiveSection unit={unit} />}
      {cur === 'grammar' && <GrammarSection unit={unit} ctx={ctx} />}
      {cur === 'vocabulary' && <VocabularySection unit={unit} ctx={ctx} />}
      {cur === 'pronunciation' && <PronunciationSection unit={unit} ctx={ctx} />}
      {cur === 'dialogue' && <DialogueSection unit={unit} ctx={ctx} />}
      {cur === 'listening' && <ListeningSection unit={unit} ctx={ctx} />}
      {cur === 'reading' && <ReadingSection unit={unit} ctx={ctx} />}
      {cur === 'speaking' && <SpeakingSection unit={unit} ctx={ctx} />}
      {cur === 'writing' && <WritingSection unit={unit} />}
      {cur === 'practice' && <PracticeSection unit={unit} ctx={ctx} />}
      {cur === 'summary' && <ReviewSection unit={unit} ctx={ctx} />}
      {cur === 'assessment' && <AssessmentView key={unit.id} unit={unit} ctx={ctx} />}
    </div>
  );
}