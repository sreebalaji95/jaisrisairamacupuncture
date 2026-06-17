import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WhatsappService } from '../../core/whatsapp.service';
import { CLINIC } from '../../shared/data/clinic';
import { HERO_STATS } from '../../shared/data/about';
import { RevealDirective } from '../../core/reveal.directive';
import { IconComponent } from '../../shared/ui/icon.component';

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
  readonly stats = HERO_STATS;
}
