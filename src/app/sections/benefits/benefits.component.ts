import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BENEFITS } from '../../shared/data/benefits';
import { RevealDirective } from '../../core/reveal.directive';
import { IconComponent } from '../../shared/ui/icon.component';

@Component({
  selector: 'app-benefits',
  standalone: true,
  imports: [CommonModule, RevealDirective, IconComponent],
  template: `
    <section id="benefits" class="section benefits" aria-labelledby="benefits-title">
      <div class="container">
        <div class="section-heading" appReveal>
          <span class="section-eyebrow">Benefits</span>
          <h2 id="benefits-title">Why Acupuncture Works</h2>
          <p>A natural, evidence-supported therapy with benefits that touch every part of life.</p>
        </div>
        <div class="grid">
          <article class="card" *ngFor="let b of items">
            <span class="check"><app-icon name="check"></app-icon></span>
            <span class="icon"><app-icon [name]="b.icon"></app-icon></span>
            <h3>{{ b.title }}</h3>
            <p>{{ b.description }}</p>
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
      gap: 16px;
      grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
    }
    .card {
      background: #fff;
      border-radius: var(--radius-lg);
      padding: 24px 22px;
      position: relative;
      border: 1px solid #fff;
      box-shadow: var(--shadow-sm);
      transition: transform var(--transition), box-shadow var(--transition), border-color var(--transition);
    }
    .card:hover {
      transform: translateY(-4px);
      box-shadow: var(--shadow-md);
      border-color: var(--color-primary-soft);
    }
    .check {
      position: absolute;
      top: 16px;
      right: 16px;
      width: 26px; height: 26px;
      border-radius: 50%;
      background: var(--color-primary-soft);
      color: var(--color-primary-dark);
      display: grid; place-items: center;
    }
    .check app-icon { width: 16px; height: 16px; }
    .icon {
      width: 46px; height: 46px;
      border-radius: 14px;
      background: linear-gradient(135deg, var(--color-primary-soft), var(--color-accent-soft));
      color: var(--color-primary-dark);
      display: grid; place-items: center;
      margin-bottom: 14px;
    }
    .icon app-icon { width: 24px; height: 24px; }
    h3 { font-size: 1rem; margin: 0 0 6px; }
    p { color: var(--color-text-muted); margin: 0; font-size: 0.9rem; }
  `]
})
export class BenefitsComponent {
  readonly items = BENEFITS;
}
