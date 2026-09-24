import { Component, OnInit, inject, ChangeDetectionStrategy } from '@angular/core';
import { ViewportScroller } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { FloatingWhatsappComponent } from './layout/floating-whatsapp/floating-whatsapp.component';
import { ScrollToTopComponent } from './layout/scroll-to-top/scroll-to-top.component';
import { ThemeService } from './core/theme.service';

@Component({
    selector: 'app-root',
    imports: [
        RouterOutlet,
        HeaderComponent,
        FooterComponent,
        FloatingWhatsappComponent,
        ScrollToTopComponent
    ],
    template: `
    <app-header />
    <router-outlet />
    <app-footer />
    <app-floating-whatsapp />
    <app-scroll-to-top />
  `,
    changeDetection: ChangeDetectionStrategy.Eager,
    styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  private readonly theme = inject(ThemeService);
  private readonly viewportScroller = inject(ViewportScroller);

  ngOnInit(): void {
    this.theme.init();
    // Router anchor scrolling ignores CSS scroll-margin-top, so offset by the fixed header here.
    this.viewportScroller.setOffset(() => [0, (document.querySelector('.site-header')?.clientHeight ?? 0) + 16]);
  }
}
