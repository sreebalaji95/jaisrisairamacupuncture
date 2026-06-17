import { Injectable, PLATFORM_ID, inject, signal, computed } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { EN } from '../shared/i18n/en';
import { TA } from '../shared/i18n/ta';

export type Locale = 'en' | 'ta';

const DICTIONARIES: Record<Locale, Record<string, string>> = { en: EN, ta: TA };
const STORAGE_KEY = 'jsac-locale';

@Injectable({ providedIn: 'root' })
export class I18nService {
  private readonly platformId = inject(PLATFORM_ID);
  private readonly _locale = signal<Locale>(this.loadLocale());

  readonly locale = this._locale.asReadonly();

  /** Reactive translation lookup — use in computed signals */
  t = (key: string): string => {
    const dict = DICTIONARIES[this._locale()];
    return dict[key] ?? DICTIONARIES['en'][key] ?? key;
  };

  /** Get a computed signal for a specific key (auto-updates on locale change) */
  tc = (key: string) => computed(() => this.t(key));

  setLocale(locale: Locale): void {
    this._locale.set(locale);
    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem(STORAGE_KEY, locale);
      document.documentElement.lang = locale;
    }
  }

  toggle(): void {
    this.setLocale(this._locale() === 'en' ? 'ta' : 'en');
  }

  private loadLocale(): Locale {
    if (isPlatformBrowser(this.platformId)) {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored === 'en' || stored === 'ta') {
        document.documentElement.lang = stored;
        return stored;
      }
    }
    return 'en';
  }
}
