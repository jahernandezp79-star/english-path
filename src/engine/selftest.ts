import { grade, pct } from './grade';
import { defaultProgress, loadProgress, openUnit, recordAssessment, recordPractice, saveProgress, toggleVocab, resetProgress } from './store';
import { ALL_UNITS, getUnit } from '../data';
import type { Exercise } from '../types';
let fails = 0; const t = (n: string, c: boolean) => { if (!c) fails++; console.log(`${c ? 'PASS' : 'FAIL'}  ${n}`); };
const mem: Record<string, string> = {};
(globalThis as any).localStorage = { getItem: (k: string) => mem[k] ?? null, setItem: (k: string, v: string) => { mem[k] = v; } };
// data integrity
const u = getUnit('a1-u01')!; const ids: string[] = [];
const all: Exercise[] = [...u.exercises, ...u.assessment, ...u.listening.questions, ...u.reading.questions]; all.forEach(e => ids.push(e.id));
t('unit has >=10 assessment questions', u.assessment.length >= 10);
t('vocabulary 12-20 words', u.vocabulary.length >= 12 && u.vocabulary.length <= 20);
t('exercise ids unique', new Set(ids).size === ids.length);
t('all 8 exercise types present', new Set([...u.exercises].map(e => e.type)).size === 8);
t('MC answers in range', all.filter(e => e.options).every(e => typeof e.answer === 'number' && e.answer < e.options!.length));
t('every auto-graded exercise has a correct answer that grades true', all.filter(e => e.type !== 'short-answer').every(e => {
  const a = e.type === 'matching' ? Object.fromEntries(e.pairs!) : e.answer; return grade(e, a as any) === true; }));
t('wrong answers grade false', all.filter(e => e.type === 'multiple-choice').every(e => grade(e, ((e.answer as number) + 1) % e.options!.length) === false));
t('empty answer is false', grade(u.assessment[2], '') === false && grade(u.assessment[2], undefined) === false);
t('fill-blank ignores case, spaces, final punctuation', grade(u.assessment[2], '  ARE. ') === true);
t('transformation accepts contraction with curly or straight apostrophe', grade(u.exercises[6], "I'm not a student") === true && grade(u.exercises[6], 'I’m not a student.') === true);
t('word order exact', grade(u.assessment[6], ['What', 'is', 'your', 'name']) === true && grade(u.assessment[6], ['What', 'your', 'is', 'name']) === false);
t('short-answer is not auto-graded', grade(u.exercises[9], 'x') === null);
t('pct rounding', pct(8, 10) === 80 && pct(7, 9) === 78 && pct(0, 0) === 0);
// progress + persistence
let p = defaultProgress();
p = openUnit(p, 'A1', u.id, u.title); p = recordPractice(p, u.id, 'a1u01-e1', true);
p = recordAssessment(p, u.id, u.title, 70, false);
t('score 70 → REVIEW, not completed', p.reviewUnits.includes(u.id) && !p.completed.includes(u.id));
p = recordAssessment(p, u.id, u.title, 90, true);
t('score 90 → COMPLETED, removed from review', p.completed.includes(u.id) && !p.reviewUnits.includes(u.id));
t('best/last/attempts tracked', p.scores[u.id].best === 90 && p.scores[u.id].last === 90 && p.scores[u.id].attempts === 2);
p = recordAssessment(p, u.id, u.title, 50, false);
t('later low score keeps best and COMPLETED', p.scores[u.id].best === 90 && p.completed.includes(u.id));
p = toggleVocab(p, 'a1-u01|name'); t('vocab save', p.savedVocab.length === 1);
saveProgress(p); const back = loadProgress();
t('localStorage round trip', JSON.stringify(back) === JSON.stringify(p));
t('boundary 80% passes via assessment score math', pct(8, 10) >= 80 && pct(79, 100) < 80);
t('reset clears progress, content intact', resetProgress().completed.length === 0 && ALL_UNITS.length >= 1 && u.assessment.length === 10);
// vocabulary size by level (Lote 2: A1/A2 12-20, Lote 3: B1/B2 18-25, Lote 4: C1/C2 20-30)
const VOCAB: Record<string, [number, number]> = { A1: [12, 20], A2: [12, 20], B1: [18, 25], B2: [18, 25], C1: [20, 30], C2: [20, 30] };
// every unit in the course
const seen = new Set<string>();
for (const x of ALL_UNITS) {
  const ex: Exercise[] = [...x.exercises, ...x.assessment, ...x.listening.questions, ...x.reading.questions];
  const tag = `${x.id}:`;
  t(tag + ' unique unit id', !seen.has(x.id) && !!(seen.add(x.id)));
  t(tag + ' 10+ assessment, 12-20 vocab, 8 examples+, dialogue, script', x.assessment.length >= 10 && x.vocabulary.length >= VOCAB[x.level][0] && x.vocabulary.length <= VOCAB[x.level][1] && x.examples.length >= 8 && x.dialogue.length >= 6 && x.listening.script.length >= 4);
  t(tag + ' all 8 exercise types in practice', new Set(x.exercises.map(e => e.type)).size === 8);
  t(tag + ' exercise ids unique', new Set(ex.map(e => e.id)).size === ex.length);
  t(tag + ' every answer key grades correct and a wrong pick grades wrong', ex.filter(e => e.type !== 'short-answer').every(e => {
    const a = e.type === 'matching' ? Object.fromEntries(e.pairs!) : e.answer; if (grade(e, a as any) !== true) return false;
    return !e.options || grade(e, ((e.answer as number) + 1) % e.options.length) === false; }));
  t(tag + ' word-order tiles are exactly the answer words; matching rights unique', ex.filter(e => e.type === 'word-order').every(e => JSON.stringify([...e.words!].sort()) === JSON.stringify([...(e.answer as string[])].sort())) && ex.filter(e => e.type === 'matching').every(e => new Set(e.pairs!.map(p => p[1])).size === e.pairs!.length));
  t(tag + ' grammar forms, writing, speaking, pronunciation present', x.grammar.forms.length >= 3 && x.writing.rubric.length >= 3 && x.speaking.tasks.length >= 3 && x.pronunciation.items.length >= 4);
}
console.log(fails ? `${fails} FAILED` : 'ALL TESTS PASSED'); if (fails) throw new Error('tests failed');
