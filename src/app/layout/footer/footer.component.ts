import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { NAV_LINKS } from '../../shared/data/nav';
import { CLINIC } from '../../shared/data/clinic';
import { WhatsappService } from '../../core/whatsapp.service';
import { IconComponent } from '../../shared/ui/icon.component';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, RouterLink, IconComponent],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  readonly links = NAV_LINKS;
  readonly clinic = CLINIC;
  readonly wa = inject(WhatsappService);
  readonly year = new Date().getFullYear();
  readonly serviceHighlights = [
    'Chronic Pain Management', 'Sciatica & Back Pain', 'Migraine & Headache',
    'Stress & Anxiety', 'PCOS / Women’s Health', 'Wellness Therapy'
  ];
}
