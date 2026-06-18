import { Component, inject } from '@angular/core';
import { WhatsappService } from '../../core/whatsapp.service';
import { IconComponent } from '../../shared/ui/icon.component';
import { I18nService } from '../../core/i18n.service';

@Component({
  selector: 'app-floating-whatsapp',
  standalone: true,
  imports: [IconComponent],
  template: `
    <a class="floating-whatsapp" [href]="wa.link" target="_blank" rel="noopener"
       aria-label="Book consultation on WhatsApp">
      <span class="ring"></span>
      <span class="icon"><app-icon name="whatsapp"></app-icon></span>
      <span class="label">{{ i18n.t('common.chatOnWhatsapp') }}</span>
    </a>
  `,
  styles: [`
    .floating-whatsapp {
      position: fixed;
      right: 18px;
      bottom: 22px;
      z-index: 90;
      display: inline-flex;
      align-items: center;
      gap: 10px;
      padding: 12px 18px 12px 12px;
      background: var(--color-whatsapp);
      color: #fff;
      border-radius: 999px;
      box-shadow: 0 18px 30px -10px rgba(37, 211, 102, 0.55);
      transition: transform var(--transition), box-shadow var(--transition);
      text-decoration: none;
    }
    .floating-whatsapp:hover { transform: translateY(-2px); color: #fff; box-shadow: 0 22px 36px -10px rgba(37,211,102,0.6); }
    .icon {
      width: 36px; height: 36px;
      border-radius: 50%;
      background: rgba(255,255,255,0.16);
      display: grid; place-items: center;
      position: relative;
      z-index: 1;
    }
    .icon app-icon { width: 22px; height: 22px; }
    .ring {
      position: absolute;
      left: 10px; top: 10px;
      width: 40px; height: 40px;
      border-radius: 50%;
      background: var(--color-whatsapp);
      animation: pulse 1.8s ease-out infinite;
      z-index: 0;
    }
    .label { font-weight: 600; font-size: 0.9rem; }
    @keyframes pulse {
      0%   { transform: scale(1);   opacity: 0.6; }
      80%  { transform: scale(1.7); opacity: 0; }
      100% { transform: scale(1.7); opacity: 0; }
    }
    @media (max-width: 600px) {
      .label { display: none; }
      .floating-whatsapp { padding: 8px; }
    }
    @media (prefers-reduced-motion: reduce) {
      .ring { animation: none; }
    }
  `]
})
export class FloatingWhatsappComponent {
  readonly wa = inject(WhatsappService);
  readonly i18n = inject(I18nService);
}
