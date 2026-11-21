import type { Progress, Settings } from './types';
export type Page = 'dashboard' | 'course' | 'progress' | 'review' | 'vocabulary' | 'grammar' | 'settings' | 'lesson';
export interface Ctx {
  progress: Progress; update: (f: (p: Progress) => Progress) => void;
  settings: Settings; setSettings: (s: Settings) => void;
  go: (page: Page, unitId?: string, tab?: string) => void;
}
