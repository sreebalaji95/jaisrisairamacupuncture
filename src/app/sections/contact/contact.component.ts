import { Component, inject, signal, computed } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { CLINIC } from '../../shared/data/clinic';
import { WhatsappService } from '../../core/whatsapp.service';
import { RevealDirective } from '../../core/reveal.directive';
import { IconComponent } from '../../shared/ui/icon.component';
import { I18nService } from '../../core/i18n.service';

@Component({
    selector: 'app-contact',
    imports: [FormsModule, RevealDirective, IconComponent],
    templateUrl: './contact.component.html',
    styleUrl: './contact.component.scss'
})
export class ContactComponent {
  readonly clinic = CLINIC;
  readonly wa = inject(WhatsappService);
  readonly i18n = inject(I18nService);
  private readonly sanitizer = inject(DomSanitizer);
  readonly mapEmbed: SafeResourceUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
    `https://www.google.com/maps?q=${encodeURIComponent(CLINIC.mapEmbedQuery)}&output=embed`
  );

  readonly form = signal({ name: '', phone: '', date: '', concern: '' });

  readonly qualifications = computed(() => [
    this.i18n.t('aboutDoctor.qualification1'),
    this.i18n.t('aboutDoctor.qualification2'),
    this.i18n.t('aboutDoctor.qualification3'),
    this.i18n.t('aboutDoctor.qualification4'),
    this.i18n.t('aboutDoctor.qualification5'),
  ]);

  update(field: 'name' | 'phone' | 'date' | 'concern', value: string): void {
    this.form.update(f => ({ ...f, [field]: value }));
  }

  submit(): void {
    const f = this.form();
    if (!f.name.trim() || !f.phone.trim()) return;
    const msgTemplate = this.i18n.t('contact.whatsappMsg');
    const message = msgTemplate
      .replace('{name}', f.name)
      .replace('{phone}', f.phone)
      .replace('{date}', f.date)
      .replace('{concern}', f.concern);
    const url = `https://wa.me/${this.clinic.whatsapp}?text=${encodeURIComponent(message)}`;
    if (typeof window !== 'undefined') window.open(url, '_blank', 'noopener');
  }
}
