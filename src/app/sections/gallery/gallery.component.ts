import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RevealDirective } from '../../core/reveal.directive';
import { I18nService } from '../../core/i18n.service';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [CommonModule, RevealDirective],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.scss'
})
export class GalleryComponent {
  readonly i18n = inject(I18nService);

  readonly photos = Array.from({ length: 16 }, (_, i) => {
    const n = String(i + 1).padStart(2, '0');
    return `assets/images/gallery/gallery-${n}.jpeg`;
  });
}
