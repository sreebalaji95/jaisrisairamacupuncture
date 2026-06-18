import { Component, inject, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { NAV_LINKS } from '../../shared/data/nav';
import { CLINIC } from '../../shared/data/clinic';
import { WhatsappService } from '../../core/whatsapp.service';
import { IconComponent } from '../../shared/ui/icon.component';
import { I18nService } from '../../core/i18n.service';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, RouterLink, IconComponent],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  readonly clinic = CLINIC;
  readonly wa = inject(WhatsappService);
  readonly i18n = inject(I18nService);
  readonly year = new Date().getFullYear();

  readonly links = computed(() => NAV_LINKS.map(l => ({
    ...l,
    label: this.i18n.t(`nav.${l.fragment === 'about-doctor' ? 'about' : l.fragment === 'why-choose-us' ? 'whyUs' : l.fragment === 'home' ? 'home' : l.fragment}`)
  })));

  readonly serviceHighlights = computed(() => [
    this.i18n.t('footer.service1'),
    this.i18n.t('footer.service2'),
    this.i18n.t('footer.service3'),
    this.i18n.t('footer.service4'),
    this.i18n.t('footer.service5'),
    this.i18n.t('footer.service6'),
  ]);
}
