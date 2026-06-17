import { Component, inject, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WhatsappService } from '../../core/whatsapp.service';
import { CLINIC } from '../../shared/data/clinic';
import { HERO_STATS } from '../../shared/data/about';
import { RevealDirective } from '../../core/reveal.directive';
import { IconComponent } from '../../shared/ui/icon.component';
import { I18nService } from '../../core/i18n.service';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule, RevealDirective, IconComponent],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent {
  readonly wa = inject(WhatsappService);
  readonly clinic = CLINIC;
  readonly i18n = inject(I18nService);

  readonly stats = computed(() => {
    const statLabels = ['hero.stat1Label', 'hero.stat2Label', 'hero.stat3Label'];
    return HERO_STATS.map((s, i) => ({
      value: s.value,
      suffix: s.suffix,
      label: this.i18n.t(statLabels[i])
    }));
  });
}
