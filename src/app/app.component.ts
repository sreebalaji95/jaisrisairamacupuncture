import { Component, OnInit, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { FloatingWhatsappComponent } from './layout/floating-whatsapp/floating-whatsapp.component';
import { ScrollToTopComponent } from './layout/scroll-to-top/scroll-to-top.component';
import { ThemeService } from './core/theme.service';

@Component({
  selector: 'app-root',
  standalone: true,
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
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  private readonly theme = inject(ThemeService);
  ngOnInit(): void { this.theme.init(); }
}
