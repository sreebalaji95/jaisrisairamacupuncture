import { Component, inject } from '@angular/core';
import { I18nService } from '../../core/i18n.service';

@Component({
  selector: 'app-lang-switch',
  standalone: true,
  template: `
    <button class="lang-switch" (click)="i18n.toggle()"
            [attr.aria-label]="i18n.locale() === 'en' ? 'Switch to Tamil' : 'Switch to English'">
      <span class="lang-option" [class.is-active]="i18n.locale() === 'en'">EN</span>
      <span class="divider" aria-hidden="true"></span>
      <span class="lang-option" [class.is-active]="i18n.locale() === 'ta'">தமிழ்</span>
    </button>
  `,
  styles: [`
    .lang-switch {
      display: inline-flex;
      align-items: center;
      gap: 0;
      padding: 5px 4px;
      border-radius: var(--radius-pill);
      background: var(--color-surface-muted);
      border: 1px solid var(--color-border-soft);
      cursor: pointer;
      transition: border-color var(--transition), box-shadow var(--transition);
    }
    .lang-switch:hover {
      border-color: var(--color-primary-soft);
      box-shadow: 0 4px 12px -6px rgba(43,168,74,0.18);
    }
    .lang-option {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      padding: 4px 10px;
      border-radius: var(--radius-pill);
      font-size: 0.78rem;
      font-weight: 600;
      letter-spacing: 0.02em;
      color: var(--color-text-muted);
      transition: background var(--transition), color var(--transition);
      line-height: 1.2;
    }
    .lang-option.is-active {
      background: var(--gradient-primary);
      color: #fff;
      box-shadow: 0 4px 10px -4px rgba(43,168,74,0.45);
    }
    .divider {
      width: 1px;
      height: 16px;
      background: var(--color-border);
      margin: 0 2px;
    }
  `]
})
export class LangSwitchComponent {
  readonly i18n = inject(I18nService);
}
