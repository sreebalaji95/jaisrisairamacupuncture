import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ABOUT_ACUPUNCTURE } from '../../shared/data/about';
import { RevealDirective } from '../../core/reveal.directive';
import { IconComponent } from '../../shared/ui/icon.component';

@Component({
  selector: 'app-about-acupuncture',
  standalone: true,
  imports: [CommonModule, RevealDirective, IconComponent],
  template: `
    <section id="about-acupuncture" class="section about-acupuncture" aria-labelledby="about-acu-title">
      <div class="container">
        <div class="section-heading" appReveal>
          <span class="section-eyebrow">About Acupuncture</span>
          <h2 id="about-acu-title">A Time-Tested Path to Whole-Body Wellness</h2>
          <p>Acupuncture is a complete therapeutic system, not just a pain treatment. Here’s what makes it effective and safe.</p>
        </div>
        <div class="grid">
          <article class="card" *ngFor="let item of items; let i = index"
                   appReveal [class]="'reveal-delay-' + (i % 3)">
            <span class="icon"><app-icon [name]="item.icon"></app-icon></span>
            <h3>{{ item.title }}</h3>
            <p>{{ item.description }}</p>
          </article>
        </div>
      </div>
    </section>
  `,
  styles: [`
    :host { display: block; }
    .section { padding-block: clamp(48px, 8vw, 96px); background: linear-gradient(180deg, #ffffff 0%, #f5faf7 100%); }
    .grid {
      display: grid;
      gap: 18px;
      grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
    }
    .card {
      background: #fff;
      padding: 26px 24px;
      border-radius: var(--radius-lg);
      border: 1px solid var(--color-border-soft);
      box-shadow: var(--shadow-sm);
      transition: transform var(--transition), box-shadow var(--transition), border-color var(--transition);
    }
    .card:hover {
      transform: translateY(-4px);
      box-shadow: var(--shadow-md);
      border-color: var(--color-primary-soft);
    }
    .icon {
      width: 46px; height: 46px;
      border-radius: 14px;
      background: var(--color-primary-soft);
      color: var(--color-primary-dark);
      display: grid; place-items: center;
      margin-bottom: 14px;
    }
    .icon app-icon { width: 24px; height: 24px; }
    h3 { font-size: 1.05rem; margin-bottom: 6px; }
    p { color: var(--color-text-muted); margin: 0; font-size: 0.92rem; }
  `]
})
export class AboutAcupunctureComponent {
  readonly items = ABOUT_ACUPUNCTURE;
}
