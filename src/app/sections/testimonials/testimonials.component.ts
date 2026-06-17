import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TESTIMONIALS } from '../../shared/data/testimonials';
import { RevealDirective } from '../../core/reveal.directive';
import { IconComponent } from '../../shared/ui/icon.component';
import { I18nService } from '../../core/i18n.service';

@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [CommonModule, RevealDirective, IconComponent],
  template: `
    <section id="testimonials" class="section testimonials" aria-labelledby="testi-title">
      <div class="container">
        <div class="section-heading" appReveal>
          <span class="section-eyebrow">{{ i18n.t('testimonials.eyebrow') }}</span>
          <h2 id="testi-title">{{ i18n.t('testimonials.title') }}</h2>
          <p>{{ i18n.t('testimonials.subtitle') }}</p>
        </div>
        <div class="grid">
          <article class="card" *ngFor="let t of items" appReveal>
            <span class="quote-mark" aria-hidden="true"><app-icon name="quote"></app-icon></span>
            <div class="stars" aria-label="5 star rating">
              <app-icon *ngFor="let _ of stars(t.rating)" name="star"></app-icon>
            </div>
            <p class="quote">\u201C{{ t.text }}\u201D</p>
            <div class="footer">
              <span class="avatar">{{ t.name.charAt(0) }}</span>
              <div>
                <strong>{{ t.name }}</strong>
                <small>{{ t.location }} \u2022 {{ t.treatment }}</small>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  `,
  styles: [`
    :host { display: block; }
    .section {
      padding-block: clamp(48px, 8vw, 96px);
      background: var(--gradient-soft);
    }
    .grid {
      display: grid;
      gap: 18px;
      grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    }
    .card {
      background: var(--color-surface);
      border-radius: var(--radius-lg);
      padding: 28px 24px;
      box-shadow: var(--shadow-sm);
      border: 1px solid var(--color-border-soft);
      position: relative;
      transition: transform var(--transition), box-shadow var(--transition), border-color var(--transition);
    }
    .card:hover {
      transform: translateY(-4px);
      box-shadow: var(--shadow-md);
      border-color: var(--color-primary-soft);
    }
    .quote-mark {
      position: absolute;
      top: 18px; right: 18px;
      width: 32px; height: 32px;
      color: var(--color-primary-soft);
    }
    .stars {
      display: inline-flex;
      gap: 2px;
      color: var(--color-star);
      margin-bottom: 12px;
    }
    .stars app-icon { width: 18px; height: 18px; }
    .quote {
      color: var(--color-text);
      font-size: 0.96rem;
      margin: 0 0 18px;
      line-height: 1.55;
    }
    .footer {
      display: flex;
      align-items: center;
      gap: 12px;
      padding-top: 14px;
      border-top: 1px solid var(--color-border-soft);
    }
    .avatar {
      width: 40px; height: 40px;
      border-radius: 50%;
      background: var(--gradient-primary);
      color: #fff;
      display: grid; place-items: center;
      font-weight: 700;
      font-family: var(--font-heading);
    }
    .footer strong { display: block; color: var(--color-text); font-size: 0.92rem; }
    .footer small { color: var(--color-text-muted); font-size: 0.78rem; }
  `]
})
export class TestimonialsComponent {
  readonly i18n = inject(I18nService);
  readonly items = TESTIMONIALS;
  stars(n: number) { return Array.from({ length: n }); }
}
