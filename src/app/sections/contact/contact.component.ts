import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { CLINIC } from '../../shared/data/clinic';
import { WhatsappService } from '../../core/whatsapp.service';
import { RevealDirective } from '../../core/reveal.directive';
import { IconComponent } from '../../shared/ui/icon.component';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule, RevealDirective, IconComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  readonly clinic = CLINIC;
  readonly wa = inject(WhatsappService);
  private readonly sanitizer = inject(DomSanitizer);
  readonly mapEmbed: SafeResourceUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
    `https://www.google.com/maps?q=${encodeURIComponent(CLINIC.mapEmbedQuery)}&output=embed`
  );

  readonly form = signal({ name: '', phone: '', date: '', concern: '' });

  update(field: 'name' | 'phone' | 'date' | 'concern', value: string): void {
    this.form.update(f => ({ ...f, [field]: value }));
  }

  submit(): string {
    const f = this.form();
    const message =
      `Hello Doctor,\n\nI would like to book an appointment for Acupuncture Treatment.\n\n` +
      `Name: ${f.name}\nPhone: ${f.phone}\nPreferred Date: ${f.date}\nHealth Concern: ${f.concern}`;
    const url = `https://wa.me/${this.clinic.whatsapp}?text=${encodeURIComponent(message)}`;
    if (typeof window !== 'undefined') window.open(url, '_blank', 'noopener');
    return url;
  }
}
