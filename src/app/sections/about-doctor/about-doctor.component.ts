import { Component, inject, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CLINIC } from '../../shared/data/clinic';
import { WhatsappService } from '../../core/whatsapp.service';
import { RevealDirective } from '../../core/reveal.directive';
import { IconComponent } from '../../shared/ui/icon.component';
import { I18nService } from '../../core/i18n.service';

@Component({
  selector: 'app-about-doctor',
  standalone: true,
  imports: [CommonModule, RevealDirective, IconComponent],
  templateUrl: './about-doctor.component.html',
  styleUrl: './about-doctor.component.scss'
})
export class AboutDoctorComponent {
  readonly clinic = CLINIC;
  readonly wa = inject(WhatsappService);
  readonly i18n = inject(I18nService);

  readonly points = computed(() => [
    this.i18n.t('aboutDoctor.point1'),
    this.i18n.t('aboutDoctor.point2'),
    this.i18n.t('aboutDoctor.point3'),
    this.i18n.t('aboutDoctor.point4'),
    this.i18n.t('aboutDoctor.point5'),
  ]);

  readonly qualifications = computed(() => [
    this.i18n.t('aboutDoctor.qualification1'),
    this.i18n.t('aboutDoctor.qualification2'),
    this.i18n.t('aboutDoctor.qualification3'),
    this.i18n.t('aboutDoctor.qualification4'),
    this.i18n.t('aboutDoctor.qualification5'),
    this.i18n.t('aboutDoctor.qualification6'),
  ]);
}
