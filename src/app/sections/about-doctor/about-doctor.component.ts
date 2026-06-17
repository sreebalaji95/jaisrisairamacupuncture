import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DOCTOR_POINTS } from '../../shared/data/about';
import { CLINIC } from '../../shared/data/clinic';
import { WhatsappService } from '../../core/whatsapp.service';
import { RevealDirective } from '../../core/reveal.directive';
import { IconComponent } from '../../shared/ui/icon.component';

@Component({
  selector: 'app-about-doctor',
  standalone: true,
  imports: [CommonModule, RevealDirective, IconComponent],
  templateUrl: './about-doctor.component.html',
  styleUrl: './about-doctor.component.scss'
})
export class AboutDoctorComponent {
  readonly points = DOCTOR_POINTS;
  readonly clinic = CLINIC;
  readonly wa = inject(WhatsappService);
}
