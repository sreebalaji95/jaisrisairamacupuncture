import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Component, HostListener, PLATFORM_ID, inject, signal } from '@angular/core';
import { IconComponent } from '../../shared/ui/icon.component';

@Component({
  selector: 'app-scroll-to-top',
  standalone: true,
  imports: [CommonModule, IconComponent],
  template: `
    <button class="scroll-to-top"
            [class.is-visible]="visible()"
            (click)="toTop()"
            aria-label="Scroll back to top">
      <app-icon name="arrow-up"></app-icon>
    </button>
  `,
  styles: [`
    .scroll-to-top {
      position: fixed;
      right: 18px;
      bottom: 88px;
      z-index: 89;
      width: 44px;
      height: 44px;
      border-radius: 50%;
      background: var(--color-surface);
      color: var(--color-primary);
      box-shadow: 0 14px 24px -12px rgba(16,42,67,0.25);
      border: 1px solid var(--color-border-soft);
      display: grid;
      place-items: center;
      opacity: 0;
      pointer-events: none;
      transform: translateY(8px);
      transition: opacity var(--transition), transform var(--transition), background var(--transition), color var(--transition);
    }
    .scroll-to-top.is-visible { opacity: 1; pointer-events: auto; transform: none; }
    .scroll-to-top:hover { background: var(--color-primary); color: #fff; }
    .scroll-to-top app-icon { width: 20px; height: 20px; }
    @media (max-width: 600px) { .scroll-to-top { bottom: 78px; } }
  `]
})
export class ScrollToTopComponent {
  private readonly platformId = inject(PLATFORM_ID);
  readonly visible = signal(false);

  @HostListener('window:scroll')
  onScroll(): void {
    if (!isPlatformBrowser(this.platformId)) return;
    this.visible.set(window.scrollY > 600);
  }

  toTop(): void {
    if (!isPlatformBrowser(this.platformId)) return;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
