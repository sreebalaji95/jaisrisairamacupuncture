import { Injectable, inject } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Injectable({ providedIn: 'root' })
export class SeoService {
  private readonly title = inject(Title);
  private readonly meta = inject(Meta);

  setHome(): void {
    this.title.setTitle('Jaisri Sairam Acupuncture Centre | Dr. Padmanabhan | Tirupur');
    this.meta.updateTag({
      name: 'description',
      content:
        'Natural healing through acupuncture. Safe, drug-free treatments for chronic pain, stress, lifestyle disorders and overall wellness by Dr. Padmanabhan in Tirupur.'
    });
  }
}
