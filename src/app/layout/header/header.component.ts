import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Component, HostListener, PLATFORM_ID, inject, signal, computed } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NAV_LINKS } from '../../shared/data/nav';
import { CLINIC } from '../../shared/data/clinic';
import { WhatsappService } from '../../core/whatsapp.service';
import { IconComponent } from '../../shared/ui/icon.component';
import { LangSwitchComponent } from '../../shared/ui/lang-switch.component';
import { ThemeSwitchComponent } from '../../shared/ui/theme-switch.component';
import { I18nService } from '../../core/i18n.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterLink, IconComponent, LangSwitchComponent, ThemeSwitchComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  readonly clinic = CLINIC;
  readonly wa = inject(WhatsappService);
  readonly i18n = inject(I18nService);
  private readonly platformId = inject(PLATFORM_ID);

  readonly links = computed(() => NAV_LINKS.map(l => ({
    ...l,
    label: this.i18n.t(`nav.${l.fragment === 'about-doctor' ? 'about' : l.fragment === 'why-choose-us' ? 'whyUs' : l.fragment === 'home' ? 'home' : l.fragment}`)
  })));

  readonly scrolled = signal(false);
  readonly drawerOpen = signal(false);

  private scrollLockY = 0;

  @HostListener('window:scroll')
  onScroll(): void {
    if (!isPlatformBrowser(this.platformId)) return;
    this.scrolled.set(window.scrollY > 24);
  }

  @HostListener('window:resize')
  onResize(): void {
    if (!isPlatformBrowser(this.platformId)) return;
    if (this.drawerOpen() && window.innerWidth >= 1024) this.closeDrawer();
  }

  toggleDrawer(): void {
    this.drawerOpen.update(v => !v);
    if (this.drawerOpen()) {
      this.lockScroll();
    } else {
      this.unlockScroll();
    }
  }

  closeDrawer(): void {
    if (!this.drawerOpen()) return;
    this.drawerOpen.set(false);
    this.unlockScroll();
  }

  private lockScroll(): void {
    if (!isPlatformBrowser(this.platformId)) return;
    this.scrollLockY = window.scrollY;
    document.body.style.top = `-${this.scrollLockY}px`;
    document.body.classList.add('is-scroll-locked');
  }

  private unlockScroll(): void {
    if (!isPlatformBrowser(this.platformId)) return;
    document.body.classList.remove('is-scroll-locked');
    document.body.style.top = '';
    window.scrollTo(0, this.scrollLockY);
  }
}
