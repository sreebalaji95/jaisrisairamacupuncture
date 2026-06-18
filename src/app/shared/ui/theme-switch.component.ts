import { Component, inject } from '@angular/core';
import { ThemeService } from '../../core/theme.service';
import { IconComponent } from './icon.component';

@Component({
  selector: 'app-theme-switch',
  standalone: true,
  imports: [IconComponent],
  template: `
    <button class="theme-switch" (click)="theme.toggle()"
            [attr.aria-label]="theme.theme() === 'light' ? 'Switch to dark mode' : 'Switch to light mode'">
      <span class="icon-wrap" [class.is-dark]="theme.theme() === 'dark'">
        <span class="icon-sun"><app-icon name="sun"></app-icon></span>
        <span class="icon-moon"><app-icon name="sleep"></app-icon></span>
      </span>
    </button>
  `,
  styles: [`
    .theme-switch {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: 38px;
      height: 38px;
      border-radius: 50%;
      background: var(--color-surface-muted);
      border: 1px solid var(--color-border-soft);
      cursor: pointer;
      transition: border-color var(--transition), box-shadow var(--transition), background var(--transition);
      position: relative;
      overflow: hidden;
    }
    .theme-switch:hover {
      border-color: var(--color-primary-soft);
      box-shadow: 0 4px 12px -6px rgba(43,168,74,0.18);
    }
    .icon-wrap {
      position: relative;
      width: 20px;
      height: 20px;
    }
    .icon-sun, .icon-moon {
      position: absolute;
      inset: 0;
      display: grid;
      place-items: center;
      transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.3s ease;
    }
    .icon-sun app-icon, .icon-moon app-icon {
      width: 18px;
      height: 18px;
    }
    .icon-sun {
      color: #f5a623;
      opacity: 1;
      transform: rotate(0deg) scale(1);
    }
    .icon-moon {
      color: #7eb8da;
      opacity: 0;
      transform: rotate(-90deg) scale(0.5);
    }
    .icon-wrap.is-dark .icon-sun {
      opacity: 0;
      transform: rotate(90deg) scale(0.5);
    }
    .icon-wrap.is-dark .icon-moon {
      opacity: 1;
      transform: rotate(0deg) scale(1);
    }
  `]
})
export class ThemeSwitchComponent {
  readonly theme = inject(ThemeService);
}
