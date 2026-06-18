import { Component, inject, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PROCESS_STEPS } from '../../shared/data/process';
import { RevealDirective } from '../../core/reveal.directive';
import { IconComponent } from '../../shared/ui/icon.component';
import { I18nService } from '../../core/i18n.service';

@Component({
  selector: 'app-process-timeline',
  standalone: true,
  imports: [CommonModule, RevealDirective, IconComponent],
  template: `
    <section id="process" class="section process" aria-labelledby="process-title">
      <div class="container">
        <div class="section-heading" appReveal>
          <span class="section-eyebrow">{{ i18n.t('process.eyebrow') }}</span>
          <h2 id="process-title">{{ i18n.t('process.title') }}</h2>
          <p>{{ i18n.t('process.subtitle') }}</p>
        </div>
        <ol class="timeline">
          <li *ngFor="let s of steps(); let last = last" appReveal>
            <span class="num">{{ s.step }}</span>
            <div class="content">
              <span class="icon"><app-icon [name]="s.icon"></app-icon></span>
              <h3>{{ s.title }}</h3>
              <p>{{ s.description }}</p>
            </div>
            <span class="connector" *ngIf="!last" aria-hidden="true"></span>
          </li>
        </ol>
      </div>
    </section>
  `,
  styles: [`
    :host { display: block; }
    .section { padding-block: clamp(48px, 8vw, 96px); background: linear-gradient(180deg, var(--color-surface-muted) 0%, var(--color-bg) 100%); }

    .timeline {
      list-style: none;
      padding: 0;
      margin: 0;
      display: grid;
      gap: 24px;
      grid-template-columns: 1fr;
    }
    @media (min-width: 1024px) {
      .timeline { grid-template-columns: repeat(4, 1fr); gap: 16px; align-items: stretch; }
    }
    .timeline li {
      position: relative;
      background: var(--color-surface);
      border-radius: var(--radius-lg);
      padding: 28px 24px 24px;
      border: 1px solid var(--color-border-soft);
      box-shadow: var(--shadow-sm);
    }
    .num {
      position: absolute;
      top: -16px; left: 24px;
      width: 36px; height: 36px;
      border-radius: 50%;
      background: var(--gradient-primary);
      color: #fff;
      display: grid; place-items: center;
      font-weight: 700;
      font-family: var(--font-heading);
      box-shadow: 0 10px 18px -8px rgba(43,168,74,0.55);
    }
    .content { display: flex; flex-direction: column; gap: 8px; padding-top: 12px; }
    .icon {
      width: 44px; height: 44px;
      border-radius: 12px;
      background: var(--color-primary-soft);
      color: var(--color-primary-dark);
      display: grid; place-items: center;
    }
    .icon app-icon { width: 24px; height: 24px; }
    h3 { margin: 0; font-size: 1.05rem; }
    p { margin: 0; color: var(--color-text-muted); font-size: 0.9rem; }

    .connector {
      display: none;
    }
    @media (min-width: 1024px) {
      .connector {
        display: block;
        position: absolute;
        top: 50%;
        right: -10px;
        width: 20px;
        height: 2px;
        background: linear-gradient(90deg, var(--color-primary), var(--color-accent));
        border-radius: 2px;
      }
      .connector::after {
        content: '';
        position: absolute;
        right: -2px;
        top: -3px;
        width: 8px; height: 8px;
        border-radius: 50%;
        background: var(--color-accent);
      }
    }
  `]
})
export class ProcessTimelineComponent {
  readonly i18n = inject(I18nService);

  readonly steps = computed(() =>
    PROCESS_STEPS.map((s, i) => ({
      step: s.step,
      icon: s.icon,
      title: this.i18n.t(`process.step${i + 1}.title`),
      description: this.i18n.t(`process.step${i + 1}.desc`)
    }))
  );
}
