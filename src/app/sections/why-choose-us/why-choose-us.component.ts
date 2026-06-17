import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WHY_CHOOSE } from '../../shared/data/why-choose';
import { RevealDirective } from '../../core/reveal.directive';
import { IconComponent } from '../../shared/ui/icon.component';

@Component({
  selector: 'app-why-choose-us',
  standalone: true,
  imports: [CommonModule, RevealDirective, IconComponent],
  template: `
    <section id="why-choose-us" class="section why" aria-labelledby="why-title">
      <div class="container">
        <div class="section-heading" appReveal>
          <span class="section-eyebrow">Why Choose Us</span>
          <h2 id="why-title">A Clinic Built Around You</h2>
          <p>From your first call to your follow-up — care that is personal, attentive and rooted in trust.</p>
        </div>
        <div class="grid">
          <article class="card" *ngFor="let w of items">
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
      background: #fff;
      border: 1px solid var(--color-border-soft);
      border-radius: var(--radius-lg);
      box-shadow: var(--shadow-sm);
      transition: transform var(--transition), box-shadow var(--transition), border-color var(--transition);
    }
    .card:hover {
      transform: translateY(-3px);
      box-shadow: var(--shadow-md);
      border-color: var(--color-accent-soft);
    }
    .icon {
      width: 48px; height: 48px;
      border-radius: 14px;
      background: var(--color-accent-soft);
      color: var(--color-accent-dark);
      display: grid; place-items: center;
      flex-shrink: 0;
    }
    .icon app-icon { width: 24px; height: 24px; }
    h3 { font-size: 1rem; margin: 0 0 4px; }
    p { color: var(--color-text-muted); margin: 0; font-size: 0.9rem; }
  `]
})
export class WhyChooseUsComponent {
  readonly items = WHY_CHOOSE;
}
