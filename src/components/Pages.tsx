import { useEffect, useState } from 'react';
import type { Ctx } from '../ctx';
import { ALL_UNITS, LEVELS, UNITS_PER_LEVEL, getUnit, unitsOf } from '../data';
import { resetProgress, toggleVocab } from '../engine/store';
import {
  SPEECH_RATES,
  getAudioCapabilities,
  resolveVoice,
  subscribeVoicesChanged
} from '../services/speechSynthesisService';
import type { SpeechRate, SpeechVariant } from '../types';
import AudioPlayer from './AudioPlayer';
import ProgressBar from './ProgressBar';

export const MyProgress = ({ ctx }: { ctx: Ctx }) => (
  <div className="space-y-4"><h1 className="text-2xl font-bold">My Progress</h1>
    <div className="grid gap-3 sm:grid-cols-2">{LEVELS.map(l => { const d = unitsOf(l.id).filter(u => ctx.progress.completed.includes(u.id)).length; return (
      <div key={l.id} className="card"><p className="mb-2 font-semibold">{l.id} — {l.name}</p><ProgressBar value={(d / UNITS_PER_LEVEL) * 100} label={`${l.id} progress`} /><p className="muted mt-2">{d} of {UNITS_PER_LEVEL} units completed</p></div>); })}</div>
    <div className="card overflow-x-auto"><h2 className="mb-2 text-lg font-semibold">Scores by unit</h2>
      {Object.keys(ctx.progress.scores).length === 0 ? <p className="muted">Complete a final assessment to see scores here.</p> :
        <table className="w-full text-left text-sm"><thead><tr className="border-b"><th className="py-2">Unit</th><th>Best</th><th>Last</th><th>Attempts</th><th>Status</th></tr></thead><tbody>
          {Object.entries(ctx.progress.scores).map(([id, s]) => <tr key={id} className="border-b"><td className="py-2">{getUnit(id)?.level} · {getUnit(id)?.title ?? id}</td><td>{s.best}%</td><td>{s.last}%</td><td>{s.attempts}</td><td>{ctx.progress.completed.includes(id) ? 'COMPLETED' : 'REVIEW'}</td></tr>)}</tbody></table>}</div></div>);

export const ReviewPage = ({ ctx }: { ctx: Ctx }) => {
  const us = ctx.progress.reviewUnits.map(getUnit).filter(Boolean);
  return (<div className="space-y-4"><h1 className="text-2xl font-bold">Review</h1>
    <div className="card"><h2 className="mb-2 text-lg font-semibold">Units to review</h2>
      {us.length === 0 ? <p className="muted">No units to review. A unit appears here when its assessment score is below 80%.</p> : <ul className="space-y-3">{us.map(u => u && <li key={u.id} className="flex flex-wrap items-center justify-between gap-2"><span>{u.level} · {u.title} <span className="muted">(last {ctx.progress.scores[u.id]?.last}%)</span></span>
        <span className="flex gap-2"><button className="btn btn2 min-h-[40px]" onClick={() => ctx.go('lesson', u.id, 'grammar')}>Study</button><button className="btn min-h-[40px]" onClick={() => ctx.go('lesson', u.id, 'assessment')}>Retake</button></span></li>)}</ul>}</div>
    <div className="card"><h2 className="mb-2 text-lg font-semibold">Saved vocabulary</h2><p className="muted mb-3">{ctx.progress.savedVocab.length} saved word{ctx.progress.savedVocab.length === 1 ? '' : 's'}.</p><button className="btn btn2" onClick={() => ctx.go('vocabulary')}>Open vocabulary</button></div></div>);
};

export function VocabularyPage({ ctx }: { ctx: Ctx }) {
  const [q, setQ] = useState(''), [only, setOnly] = useState(false);
  const rows = ALL_UNITS.flatMap(u => u.vocabulary.map(v => ({ u, v, k: `${u.id}|${v.word}` }))).filter(r => (!only || ctx.progress.savedVocab.includes(r.k)) && (r.v.word + r.v.translation).toLowerCase().includes(q.toLowerCase()));
  return (<div className="space-y-4"><h1 className="text-2xl font-bold">Vocabulary</h1>
    <div className="flex flex-wrap gap-2"><input aria-label="Search words" value={q} onChange={e => setQ(e.target.value)} placeholder="Search words" className="min-h-[44px] flex-1 rounded-lg border border-slate-300 px-3" />
      <button aria-pressed={only} className={`btn ${only ? '' : 'btn2'}`} onClick={() => setOnly(!only)}>Saved only ({ctx.progress.savedVocab.length})</button></div>
    <div className="card">{rows.length === 0 ? <p className="muted">No words match.</p> : <ul className="divide-y divide-slate-200">{rows.map(({ u, v, k }) => { const on = ctx.progress.savedVocab.includes(k); return (
      <li key={k} className="flex items-center justify-between gap-3 py-2"><div><b>{v.word}</b> <span className="muted">{v.pron}{v.stress ? ` · ${v.stress}` : ''}</span><div className="muted">{v.translation} · {u.level} Unit {u.unitNumber}</div></div>
        <button aria-pressed={on} className={`btn min-h-[40px] px-3 text-sm ${on ? '' : 'btn2'}`} onClick={() => ctx.update(p => toggleVocab(p, k))}>{on ? 'Saved' : 'Save'}</button></li>); })}</ul>}</div></div>);
}

export const GrammarPage = ({ ctx }: { ctx: Ctx }) => (
  <div className="space-y-3"><h1 className="text-2xl font-bold">Grammar</h1>
    {ALL_UNITS.map(u => <details key={u.id} className="card"><summary className="min-h-[44px] cursor-pointer font-semibold">{u.level} · Unit {u.unitNumber} — {u.grammar.title}</summary>
      <div className="mt-3 space-y-2">{u.grammar.explanation.map(t => <p key={t}>{t}</p>)}<button className="btn btn2" onClick={() => ctx.go('lesson', u.id, 'grammar')}>Open in lesson</button></div></details>)}</div>);

export function SettingsPage({ ctx }: { ctx: Ctx }) {
  const [confirm, setConfirm] = useState(false);
  const [voices, setVoices] = useState<SpeechSynthesisVoice[]>([]);
  const capabilities = getAudioCapabilities();

  useEffect(() => {
    return subscribeVoicesChanged(setVoices);
  }, []);

  const resolved = resolveVoice(ctx.settings.speechVariant, ctx.settings.speechVoiceName);

  const badge = (supported: boolean) => (
    <span className={`rounded-full px-2.5 py-0.5 text-xs font-semibold ${supported ? 'bg-emerald-100 text-emerald-800' : 'bg-amber-100 text-amber-800'}`}>
      {supported ? 'Supported' : 'Not supported'}
    </span>
  );

  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold">Settings</h1>

      <div className="card">
        <label className="flex min-h-[44px] items-center justify-between gap-3">
          <span>
            <b>Show Spanish translations</b>
            <span className="muted block">Examples, dialogues and vocabulary.</span>
          </span>
          <input
            type="checkbox"
            className="h-6 w-6"
            checked={ctx.settings.showTranslations}
            onChange={e => ctx.setSettings({ ...ctx.settings, showTranslations: e.target.checked })}
          />
        </label>
      </div>

      <div className="card space-y-4">
        <div>
          <h2 className="text-lg font-semibold">Audio Settings</h2>
          <p className="muted">
            Uses your browser&apos;s built-in synthetic voices (100% local, $0 cost). Availability depends on your device and operating system.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <label className="block space-y-1">
            <span className="text-sm font-semibold">English variant</span>
            <select
              value={ctx.settings.speechVariant}
              onChange={e => ctx.setSettings({ ...ctx.settings, speechVariant: e.target.value as SpeechVariant })}
              className="min-h-[44px] w-full rounded-lg border border-slate-300 bg-white px-3"
            >
              <option value="en-US">English (United States) — en-US</option>
              <option value="en-GB">English (United Kingdom) — en-GB</option>
            </select>
          </label>

          <label className="block space-y-1">
            <span className="text-sm font-semibold">Default speed</span>
            <select
              value={ctx.settings.speechRate}
              onChange={e => ctx.setSettings({ ...ctx.settings, speechRate: Number(e.target.value) as SpeechRate })}
              className="min-h-[44px] w-full rounded-lg border border-slate-300 bg-white px-3"
            >
              {SPEECH_RATES.map(r => (
                <option key={r} value={r}>{r}x</option>
              ))}
            </select>
          </label>
        </div>

        <label className="block space-y-1">
          <span className="text-sm font-semibold">Voice</span>
          <select
            value={ctx.settings.speechVoiceName}
            onChange={e => ctx.setSettings({ ...ctx.settings, speechVoiceName: e.target.value })}
            disabled={!capabilities.speechSynthesis}
            className="min-h-[44px] w-full rounded-lg border border-slate-300 bg-white px-3 disabled:opacity-50"
          >
            <option value="">Automatic ({resolved.label})</option>
            {voices.map(v => (
              <option key={`${v.name}-${v.lang}`} value={v.name}>
                {v.name} ({v.lang})
              </option>
            ))}
          </select>
        </label>

        <label className="flex min-h-[44px] items-center justify-between gap-3">
          <span>
            <b>Auto-play audio</b>
            <span className="muted block">Automatically read dialogues and listening scripts when opening those tabs.</span>
          </span>
          <input
            type="checkbox"
            className="h-6 w-6"
            checked={ctx.settings.autoPlayAudio}
            onChange={e => ctx.setSettings({ ...ctx.settings, autoPlayAudio: e.target.checked })}
          />
        </label>

        <div>
          <p className="mb-2 text-sm font-semibold">Test audio</p>
          <AudioPlayer
            text="Welcome to English Path. Adjust your voice and playback speed here."
            variant={ctx.settings.speechVariant}
            voiceName={ctx.settings.speechVoiceName}
            defaultRate={ctx.settings.speechRate}
            label="Test voice"
          />
        </div>

        <div className="border-t border-slate-200 pt-3">
          <p className="mb-2 text-sm font-semibold">Browser compatibility</p>
          <ul className="space-y-1.5 text-sm">
            <li className="flex items-center justify-between gap-2">
              <span>SpeechSynthesis (Text-to-Speech)</span>
              {badge(capabilities.speechSynthesis)}
            </li>
            <li className="flex items-center justify-between gap-2">
              <span>SpeechRecognition (Voice dictation)</span>
              {badge(capabilities.speechRecognition)}
            </li>
            <li className="flex items-center justify-between gap-2">
              <span>MediaRecorder (Microphone recording)</span>
              {badge(capabilities.mediaRecorder)}
            </li>
          </ul>
        </div>
      </div>

      <div className="card">
        <h2 className="mb-1 font-semibold">Reset progress</h2>
        <p className="muted mb-3">Clears scores, completed units, saved words and activity. Course content is not deleted.</p>
        {!confirm ? (
          <button className="btn btn2" onClick={() => setConfirm(true)}>Reset progress</button>
        ) : (
          <div className="flex gap-2">
            <button className="btn bg-red-700 hover:bg-red-800" onClick={() => { ctx.update(() => resetProgress()); setConfirm(false); }}>Yes, reset my progress</button>
            <button className="btn btn2" onClick={() => setConfirm(false)}>Cancel</button>
          </div>
        )}
      </div>
    </div>
  );
}