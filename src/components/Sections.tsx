import { useState } from 'react';
import type { Ctx } from '../ctx';
import type { Unit } from '../types';
import { ExerciseSet } from './ExerciseView';
import AudioPlayer from './AudioPlayer';
import SpeechPractice from './SpeechPractice';
import VoiceRecorder from './VoiceRecorder';
import {
  recordListeningCompleted,
  recordPractice,
  recordSpeechPractice,
  toggleVocab
} from '../engine/store';

const H = ({ children }: { children: string }) => <h3 className="mb-2 text-lg font-semibold">{children}</h3>;

export const ObjectiveSection = ({ unit }: { unit: Unit }) => (
  <div className="card"><H>Communicative goal</H><p className="mb-4">{unit.communicativeGoal}</p><H>Learning objectives</H>
    <ul className="list-disc space-y-1 pl-5">{unit.objectives.map(o => <li key={o}>{o}</li>)}</ul></div>);

export const GrammarSection = ({ unit, ctx }: { unit: Unit; ctx: Ctx }) => (
  <div className="space-y-4">
    <div className="card"><H>{unit.grammar.title}</H>{unit.grammar.explanation.map(t => <p key={t} className="mb-2 leading-relaxed">{t}</p>)}</div>
    <div className="grid gap-4 md:grid-cols-3">{unit.grammar.forms.map(f => <div key={f.label} className="card"><p className="mb-2 font-semibold text-brand-600">{f.label}</p><ul className="space-y-1 text-sm">{f.lines.map(l => <li key={l}>{l}</li>)}</ul></div>)}</div>
    <div className="card">
      <H>Examples</H>
      <ul className="space-y-3">
        {unit.examples.map(e => (
          <li key={e.en} className="flex flex-wrap items-start justify-between gap-2">
            <div className="min-w-0 flex-1">
              <span className="font-medium">{e.en}</span>
              {ctx.settings.showTranslations && <span className="muted block">{e.es}</span>}
            </div>
            <AudioPlayer
              text={e.en}
              variant={ctx.settings.speechVariant}
              voiceName={ctx.settings.speechVoiceName}
              defaultRate={ctx.settings.speechRate}
              compact
              label={e.en}
            />
          </li>
        ))}
      </ul>
    </div>
  </div>
);

export const VocabularySection = ({ unit, ctx }: { unit: Unit; ctx: Ctx }) => (
  <div className="card"><H>Vocabulary</H>
    <ul className="divide-y divide-slate-200">{unit.vocabulary.map(v => { const k = `${unit.id}|${v.word}`, on = ctx.progress.savedVocab.includes(k); return (
      <li key={k} className="flex flex-wrap items-center justify-between gap-3 py-2">
        <div className="min-w-0 flex-1">
          <b>{v.word}</b> <span className="muted">{v.pron}{v.stress ? ` · ${v.stress}` : ''}</span>
          {ctx.settings.showTranslations && <div className="muted">{v.translation}</div>}
        </div>
        <div className="flex items-center gap-2">
          <AudioPlayer
            text={v.word}
            variant={ctx.settings.speechVariant}
            voiceName={ctx.settings.speechVoiceName}
            defaultRate={ctx.settings.speechRate}
            compact
            label={v.word}
          />
          <button aria-pressed={on} className={`btn min-h-[36px] px-3 text-xs ${on ? '' : 'btn2'}`} onClick={() => ctx.update(p => toggleVocab(p, k))}>{on ? 'Saved' : 'Save'}</button>
        </div>
      </li>); })}</ul></div>
);

export const PronunciationSection = ({ unit, ctx }: { unit: Unit; ctx: Ctx }) => (
  <div className="space-y-4">
    <div className="card">
      <H>Pronunciation guide</H>
      <ul className="divide-y divide-slate-200">
        {unit.pronunciation.items.map(i => (
          <li key={i.word} className="flex flex-wrap items-center justify-between gap-2 py-2.5">
            <div className="flex flex-wrap items-baseline gap-3">
              <b>{i.word}</b>
              <span>{i.ipa}</span>
              <span className="muted">stress: {i.stress}</span>
            </div>
            <AudioPlayer
              text={i.word}
              variant={ctx.settings.speechVariant}
              voiceName={ctx.settings.speechVoiceName}
              defaultRate={ctx.settings.speechRate}
              compact
              label={i.word}
            />
          </li>
        ))}
      </ul>
    </div>

    <div className="card space-y-3">
      <H>Listen, record and compare</H>
      <p className="muted">
        Listen to the synthetic model, record your own voice to compare, or test word recognition. Textual match is only a transcription check, not a phonetic grade.
      </p>
      <div className="space-y-3">
        {unit.pronunciation.items.map(item => {
          const stat = ctx.progress.speechPractice[`${unit.id}|pron:${item.word}`];
          return (
            <div key={item.word} className="space-y-1">
              {stat && (
                <p className="muted text-xs">
                  Attempts: {stat.attempts}
                  {stat.lastTextMatchPct !== null ? ` · Last textual match: ${stat.lastTextMatchPct}%` : ''}
                </p>
              )}
              <SpeechPractice
                targetText={item.word}
                label={`IPA ${item.ipa} · stress: ${item.stress}`}
                variant={ctx.settings.speechVariant}
                voiceName={ctx.settings.speechVoiceName}
                defaultRate={ctx.settings.speechRate}
                showRecorder={false}
                onPracticeResult={pct => ctx.update(p => recordSpeechPractice(p, unit.id, `pron:${item.word}`, pct))}
              />
            </div>
          );
        })}
      </div>
      <VoiceRecorder
        title="Record yourself practising these words (local memory only)"
        onRecorded={() => ctx.update(p => recordSpeechPractice(p, unit.id, 'pron:recorder', null))}
      />
    </div>

    <div className="card">
      <H>Tips</H>
      <ul className="list-disc space-y-1 pl-5">{unit.pronunciation.tips.map(t => <li key={t}>{t}</li>)}</ul>
    </div>
  </div>
);

export const DialogueSection = ({ unit, ctx }: { unit: Unit; ctx: Ctx }) => (
  <div className="card space-y-4">
    <H>Dialogue</H>
    <AudioPlayer
      text={unit.dialogue.map(d => d.text)}
      variant={ctx.settings.speechVariant}
      voiceName={ctx.settings.speechVoiceName}
      defaultRate={ctx.settings.speechRate}
      autoPlay={ctx.settings.autoPlayAudio}
      label="Play full dialogue"
    />
    <ul className="space-y-3">
      {unit.dialogue.map((d, i) => (
        <li key={i} className="flex flex-wrap items-start justify-between gap-2">
          <div className="min-w-0 flex-1">
            <b>{d.speaker}:</b> {d.text}
            {ctx.settings.showTranslations && <div className="muted">{d.es}</div>}
          </div>
          <AudioPlayer
            text={d.text}
            variant={ctx.settings.speechVariant}
            voiceName={ctx.settings.speechVoiceName}
            defaultRate={ctx.settings.speechRate}
            compact
            label={`${d.speaker} line ${i + 1}`}
          />
        </li>
      ))}
    </ul>
  </div>
);

const practiceHook = (unit: Unit, ctx: Ctx) => (ex: { id: string }, ok: boolean | null) => {
  if (ok !== null) ctx.update(p => recordPractice(p, unit.id, ex.id, ok));
};

export function ListeningSection({ unit, ctx }: { unit: Unit; ctx: Ctx }) {
  const [show, setShow] = useState(false);
  const completed = ctx.progress.listeningCompleted.includes(unit.id);

  const handleListeningChecked = (ex: { id: string }, ok: boolean | null) => {
    practiceHook(unit, ctx)(ex, ok);
    if (ok !== null) {
      ctx.update(p => recordListeningCompleted(p, unit.id));
    }
  };

  return (
    <div className="space-y-4">
      <div className="card space-y-3">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <H>Listening</H>
          {completed && (
            <span className="rounded-full bg-emerald-100 px-3 py-0.5 text-xs font-semibold text-emerald-800">
              Practised
            </span>
          )}
        </div>
        {unit.listening.audioUrl ? (
          <audio controls src={unit.listening.audioUrl} className="w-full" />
        ) : (
          <p className="muted">
            Synthetic browser audio (Text-to-Speech, not a human recording). Listen first, then answer the questions below.
          </p>
        )}
        <AudioPlayer
          text={unit.listening.script.map(l => l.text)}
          variant={ctx.settings.speechVariant}
          voiceName={ctx.settings.speechVoiceName}
          defaultRate={ctx.settings.speechRate}
          autoPlay={ctx.settings.autoPlayAudio}
          label="Listen to script"
        />
        <div className="flex flex-wrap gap-2">
          <button className="btn btn2" aria-expanded={show} onClick={() => setShow(!show)}>{show ? 'Hide script' : 'Show script'}</button>
          {!completed && (
            <button
              type="button"
              className="btn btn2"
              onClick={() => ctx.update(p => recordListeningCompleted(p, unit.id))}
            >
              Mark listening completed
            </button>
          )}
        </div>
        {show && (
          <ul className="space-y-1">
            {unit.listening.script.map((l, i) => <li key={i}><b>{l.speaker}:</b> {l.text}</li>)}
          </ul>
        )}
      </div>
      <ExerciseSet exercises={unit.listening.questions} mode="practice" onChecked={handleListeningChecked} />
    </div>
  );
}

export const ReadingSection = ({ unit, ctx }: { unit: Unit; ctx: Ctx }) => (
  <div className="space-y-4">
    <div className="card space-y-3">
      <H>{unit.reading.title}</H>
      <AudioPlayer
        text={unit.reading.text}
        variant={ctx.settings.speechVariant}
        voiceName={ctx.settings.speechVoiceName}
        defaultRate={ctx.settings.speechRate}
        label="Read passage aloud"
      />
      <p className="leading-relaxed">{unit.reading.text}</p>
    </div>
    <ExerciseSet exercises={unit.reading.questions} mode="practice" onChecked={practiceHook(unit, ctx)} />
  </div>
);

export function SpeakingSection({ unit, ctx }: { unit: Unit; ctx: Ctx }) {
  const [done, setDone] = useState<string[]>([]);
  const [selectedExample, setSelectedExample] = useState(unit.examples[0]?.en ?? '');

  const toggleTask = (task: string, idx: number) => {
    const nextDone = done.includes(task) ? done.filter(x => x !== task) : [...done, task];
    setDone(nextDone);
    if (!done.includes(task)) {
      ctx.update(p => recordSpeechPractice(p, unit.id, `task:${idx}`, null, true));
    }
  };

  return (
    <div className="space-y-4">
      <div className="card space-y-3">
        <H>Speaking</H>
        <p>{unit.speaking.prompt}</p>
        <ul className="space-y-2">
          {unit.speaking.tasks.map((t, idx) => (
            <li key={t}>
              <label className="flex min-h-[44px] items-start gap-3">
                <input
                  type="checkbox"
                  className="mt-1 h-5 w-5"
                  checked={done.includes(t)}
                  onChange={() => toggleTask(t, idx)}
                />
                <span>{t}</span>
              </label>
            </li>
          ))}
        </ul>
      </div>

      <VoiceRecorder
        title="Free speaking practice (local recording)"
        onRecorded={() => ctx.update(p => recordSpeechPractice(p, unit.id, 'speaking:free', null))}
      />

      {unit.examples.length > 0 && (
        <div className="card space-y-3">
          <H>Guided phrase practice</H>
          <label className="block space-y-1">
            <span className="muted text-xs font-semibold">Choose a model sentence from this unit</span>
            <select
              value={selectedExample}
              onChange={e => setSelectedExample(e.target.value)}
              className="min-h-[44px] w-full rounded-lg border border-slate-300 bg-white px-3 text-sm"
            >
              {unit.examples.map(ex => (
                <option key={ex.en} value={ex.en}>{ex.en}</option>
              ))}
            </select>
          </label>
          <SpeechPractice
            key={selectedExample}
            targetText={selectedExample}
            label="Model sentence"
            variant={ctx.settings.speechVariant}
            voiceName={ctx.settings.speechVoiceName}
            defaultRate={ctx.settings.speechRate}
            showRecorder={false}
            onPracticeResult={pct => ctx.update(p => recordSpeechPractice(p, unit.id, `speaking:phrase`, pct))}
          />
        </div>
      )}
    </div>
  );
}

export function WritingSection({ unit }: { unit: Unit }) {
  const [text, setText] = useState(''); const [model, setModel] = useState(false);
  return (<div className="card"><H>Writing</H><p className="mb-3">{unit.writing.prompt}</p>
    <textarea aria-label="Your text" rows={6} value={text} onChange={e => setText(e.target.value)} className="w-full rounded-lg border border-slate-300 p-3 focus:border-brand-600 focus:outline-none focus:ring-1 focus:ring-brand-600" />
    <p className="muted my-2">Words: {text.trim() ? text.trim().split(/\s+/).length : 0}. Open answers are self-checked in this version.</p>
    <p className="mb-1 font-semibold">Check your text</p><ul className="mb-3 list-disc space-y-1 pl-5 text-sm">{unit.writing.rubric.map(r => <li key={r}>{r}</li>)}</ul>
    <button className="btn btn2" aria-expanded={model} onClick={() => setModel(!model)}>{model ? 'Hide model text' : 'Show model text'}</button>{model && <p className="mt-3 rounded-lg bg-slate-100 p-3">{unit.writing.model}</p>}</div>);
}
export const PracticeSection = ({ unit, ctx }: { unit: Unit; ctx: Ctx }) => (
  <div className="space-y-3"><p className="muted">{(ctx.progress.practice[unit.id] ?? []).length} of {unit.exercises.filter(e => e.type !== 'short-answer').length} auto-graded exercises answered correctly.</p>
    <ExerciseSet exercises={unit.exercises} mode="practice" onChecked={practiceHook(unit, ctx)} /></div>);
export const ReviewSection = ({ unit, ctx }: { unit: Unit; ctx: Ctx }) => (
  <div className="card"><H>Unit summary</H><ul className="mb-4 list-disc space-y-1 pl-5">{unit.review.map(r => <li key={r}>{r}</li>)}</ul><button className="btn" onClick={() => ctx.go('lesson', unit.id, 'assessment')}>Go to final assessment</button></div>);