import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Component, HostListener, PLATFORM_ID, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NAV_LINKS } from '../../shared/data/nav';
import { CLINIC } from '../../shared/data/clinic';
import { WhatsappService } from '../../core/whatsapp.service';
import { IconComponent } from '../../shared/ui/icon.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterLink, IconComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  readonly links = NAV_LINKS;
  readonly clinic = CLINIC;
  readonly wa = inject(WhatsappService);
  private readonly platformId = inject(PLATFORM_ID);

  readonly scrolled = signal(false);
  readonly drawerOpen = signal(false);

  @HostListener('window:scroll')
  onScroll(): void {
    if (!isPlatformBrowser(this.platformId)) return;
    this.scrolled.set(window.scrollY > 24);
  }

  toggleDrawer(): void {
    this.drawerOpen.update(v => !v);
    if (isPlatformBrowser(this.platformId)) {
      document.body.style.overflow = this.drawerOpen() ? 'hidden' : '';
    }
  }

  closeDrawer(): void {
    this.drawerOpen.set(false);
    if (isPlatformBrowser(this.platformId)) document.body.style.overflow = '';
  }
}
