import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FAQS } from '../../shared/data/faqs';
import { RevealDirective } from '../../core/reveal.directive';
import { IconComponent } from '../../shared/ui/icon.component';

@Component({
  selector: 'app-faq',
  standalone: true,
  imports: [CommonModule, RevealDirective, IconComponent],
  template: `
    <section id="faq" class="section faq" aria-labelledby="faq-title">
      <div class="container">
        <div class="section-heading" appReveal>
          <span class="section-eyebrow">FAQ</span>
          <h2 id="faq-title">Common Questions, Honest Answers</h2>
          <p>Everything you may want to know before your first acupuncture visit.</p>
        </div>

        <div class="list" appReveal>
          <details *ngFor="let f of items; let i = index"
                   [open]="open() === i"
                   (toggle)="onToggle(i, $event)">
            <summary>
              <span>{{ f.question }}</span>
              <span class="chev" aria-hidden="true"><app-icon name="chevron-down"></app-icon></span>
            </summary>
            <p>{{ f.answer }}</p>
          </details>
        </div>
      </div>
    </section>
  `,
  styles: [`
    :host { display: block; }
    .section { padding-block: clamp(48px, 8vw, 96px); }

    .list {
      max-width: 820px;
      margin-inline: auto;
      display: grid;
      gap: 12px;
    }
    details {
      background: #fff;
      border: 1px solid var(--color-border-soft);
      border-radius: var(--radius-lg);
      box-shadow: var(--shadow-sm);
      transition: border-color var(--transition), box-shadow var(--transition);
      overflow: hidden;
    }
    details[open] {
      border-color: var(--color-primary-soft);
      box-shadow: var(--shadow-md);
    }
    summary {
      list-style: none;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 16px;
      padding: 18px 22px;
      font-weight: 600;
      color: var(--color-text);
      font-size: 0.98rem;
    }
    summary::-webkit-details-marker { display: none; }
    summary:hover { color: var(--color-primary-dark); }
    .chev {
      width: 28px; height: 28px;
      border-radius: 50%;
      background: var(--color-primary-soft);
      color: var(--color-primary-dark);
      display: grid; place-items: center;
      transition: transform var(--transition), background var(--transition), color var(--transition);
      flex-shrink: 0;
    }
    .chev app-icon { width: 16px; height: 16px; }
    details[open] .chev { transform: rotate(180deg); background: var(--color-primary); color: #fff; }
    details p {
      padding: 0 22px 20px;
      margin: 0;
      color: var(--color-text-muted);
      font-size: 0.94rem;
      line-height: 1.65;
    }
  `]
})
export class FaqComponent {
  readonly items = FAQS;
  readonly open = signal<number>(0);

  onToggle(index: number, ev: Event): void {
    const el = ev.target as HTMLDetailsElement;
    if (el.open) this.open.set(index);
    else if (this.open() === index) this.open.set(-1);
  }
}
