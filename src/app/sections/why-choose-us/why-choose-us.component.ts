import { Component, inject, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WHY_CHOOSE } from '../../shared/data/why-choose';
import { RevealDirective } from '../../core/reveal.directive';
import { IconComponent } from '../../shared/ui/icon.component';
import { I18nService } from '../../core/i18n.service';

@Component({
  selector: 'app-why-choose-us',
  standalone: true,
  imports: [CommonModule, RevealDirective, IconComponent],
  template: `
    <section id="why-choose-us" class="section why" aria-labelledby="why-title">
      <div class="container">
        <div class="section-heading" appReveal>
          <span class="section-eyebrow">{{ i18n.t('whyChoose.eyebrow') }}</span>
          <h2 id="why-title">{{ i18n.t('whyChoose.title') }}</h2>
          <p>{{ i18n.t('whyChoose.subtitle') }}</p>
        </div>
        <div class="grid">
          <article class="card" *ngFor="let w of items()">
            <span class="icon"><app-icon [name]="w.icon"></app-icon></span>
            <div>
              <h3>{{ w.title }}</h3>
              <p>{{ w.description }}</p>
            </div>
          </article>
        </div>
      </div>
    </section>
  `,
  styles: [`
    :host { display: block; }
    .section { padding-block: clamp(48px, 8vw, 96px); }
    .grid {
      display: grid;
      gap: 18px;
      grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
    }
    .card {
      display: flex;
      gap: 16px;
      align-items: flex-start;
      padding: 22px 22px;
      background: var(--color-surface);
      border: 1px solid var(--color-border-soft);
      border-top: 3px solid var(--color-primary);
      border-radius: var(--radius-lg);
      box-shadow: var(--shadow-sm);
      transition: transform var(--transition), box-shadow var(--transition), border-color var(--transition);
    }
    .card:nth-child(2n) { border-top-color: var(--color-accent); }
    .card:hover {
      transform: translateY(-3px);
      box-shadow: var(--shadow-md);
      border-color: var(--color-accent-soft);
      border-top-color: var(--color-primary);
    }
    .card:nth-child(2n):hover { border-top-color: var(--color-accent); }
    .icon {
      width: 52px; height: 52px;
      border-radius: 50%;
      background: linear-gradient(135deg, var(--color-primary) 0%, var(--color-primary-dark) 100%);
      color: #fff;
      box-shadow: 0 8px 18px -8px rgba(43, 168, 74, 0.5);
      display: grid; place-items: center;
      flex-shrink: 0;
    }
    .card:nth-child(2n) .icon {
      background: linear-gradient(135deg, var(--color-accent) 0%, var(--color-accent-dark) 100%);
      box-shadow: 0 8px 18px -8px rgba(30, 136, 229, 0.5);
    }
    .icon app-icon { width: 24px; height: 24px; }
    h3 { font-size: 1rem; margin: 0 0 4px; }
    p { color: var(--color-text-muted); margin: 0; font-size: 0.9rem; }
  `]
})
export class WhyChooseUsComponent {
  readonly i18n = inject(I18nService);

  readonly items = computed(() =>
    WHY_CHOOSE.map((w, i) => ({
      icon: w.icon,
      title: this.i18n.t(`whyChoose.item${i + 1}.title`),
      description: this.i18n.t(`whyChoose.item${i + 1}.desc`)
    }))
  );
}
