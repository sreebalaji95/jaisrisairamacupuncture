import { Component, computed, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Treatment, TREATMENTS, TREATMENT_CATEGORIES, TreatmentCategory } from '../../shared/data/treatments';
import { RevealDirective } from '../../core/reveal.directive';
import { IconComponent } from '../../shared/ui/icon.component';

type Filter = 'All' | TreatmentCategory;

@Component({
  selector: 'app-treatments',
  standalone: true,
  imports: [CommonModule, RevealDirective, IconComponent],
  templateUrl: './treatments.component.html',
  styleUrl: './treatments.component.scss'
})
export class TreatmentsComponent {
  readonly categories: readonly Filter[] = ['All', ...TREATMENT_CATEGORIES];
  readonly active = signal<Filter>('All');
  readonly visible = computed(() =>
    this.active() === 'All' ? TREATMENTS : TREATMENTS.filter(t => t.category === this.active())
  );

  setActive(c: Filter): void {
    this.active.set(c);
  }

  trackByName = (_: number, t: Treatment) => t.name;
}
