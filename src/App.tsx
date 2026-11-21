import { useEffect, useState } from 'react';
import type { Ctx, Page } from './ctx';
import { getUnit } from './data';
import { loadProgress, loadSettings, openUnit, saveProgress, saveSettings } from './engine/store';
import type { Progress, Settings } from './types';
import Dashboard from './components/Dashboard';
import Course from './components/Course';
import LessonView from './components/LessonView';
import { GrammarPage, MyProgress, ReviewPage, SettingsPage, VocabularyPage } from './components/Pages';

const NAV: [Page, string][] = [['dashboard', 'Dashboard'], ['course', 'My Course'], ['progress', 'My Progress'], ['review', 'Review'], ['vocabulary', 'Vocabulary'], ['grammar', 'Grammar'], ['settings', 'Settings']];

export default function App() {
  const [progress, setProgress] = useState<Progress>(loadProgress);
  const [settings, setSettingsState] = useState<Settings>(loadSettings);
  const [view, setView] = useState<{ page: Page; unit?: string; tab?: string }>({ page: 'dashboard' });
  useEffect(() => saveProgress(progress), [progress]);
  useEffect(() => { window.scrollTo(0, 0); }, [view.page, view.unit]);
  const ctx: Ctx = {
    progress, update: f => setProgress(f), settings, setSettings: s => { setSettingsState(s); saveSettings(s); },
    go: (page, unit, tab) => {
      const u = getUnit(unit);
      if (page === 'lesson' && u && progress.currentUnit !== u.id) setProgress(p => openUnit(p, u.level, u.id, u.title));
      setView({ page, unit, tab });
    }
  };
  const unit = getUnit(view.unit);
  const active = view.page === 'lesson' ? 'course' : view.page;
  return (
    <div className="min-h-screen">
      <header className="sticky top-0 z-10 border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-5xl flex-wrap items-center gap-x-6 px-4">
          <button className="min-h-[48px] text-lg font-bold text-brand-600" onClick={() => ctx.go('dashboard')}>ENGLISH PATH</button>
          <nav aria-label="Main" className="-mx-4 flex flex-1 gap-1 overflow-x-auto px-4">{NAV.map(([p, l]) => <button key={p} aria-current={active === p ? 'page' : undefined} onClick={() => ctx.go(p)} className={`min-h-[48px] shrink-0 border-b-2 px-3 text-sm font-medium ${active === p ? 'border-brand-600 text-brand-600' : 'border-transparent text-slate-600 hover:text-slate-900'}`}>{l}</button>)}</nav>
        </div>
      </header>
      <main className="mx-auto max-w-5xl px-4 py-6">
        {view.page === 'dashboard' && <Dashboard ctx={ctx} />}
        {view.page === 'course' && <Course ctx={ctx} />}
        {view.page === 'lesson' && (unit ? <LessonView unit={unit} tab={view.tab ?? 'objectives'} ctx={ctx} /> : <p>Unit not found.</p>)}
        {view.page === 'progress' && <MyProgress ctx={ctx} />}
        {view.page === 'review' && <ReviewPage ctx={ctx} />}
        {view.page === 'vocabulary' && <VocabularyPage ctx={ctx} />}
        {view.page === 'grammar' && <GrammarPage ctx={ctx} />}
        {view.page === 'settings' && <SettingsPage ctx={ctx} />}
      </main>
    </div>
  );
}
