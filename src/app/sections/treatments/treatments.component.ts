import { Component, computed, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Treatment, TREATMENTS, TREATMENT_CATEGORIES, TreatmentCategory } from '../../shared/data/treatments';
import { RevealDirective } from '../../core/reveal.directive';
import { IconComponent } from '../../shared/ui/icon.component';
import { I18nService } from '../../core/i18n.service';

type Filter = 'All' | TreatmentCategory;

const TREATMENT_KEY_MAP: Record<string, string> = {
  'Chronic Pain Management': 'treatments.chronicPain',
  'Neck Pain': 'treatments.neckPain',
  'Back Pain': 'treatments.backPain',
  'Shoulder Pain': 'treatments.shoulderPain',
  'Knee Pain': 'treatments.kneePain',
  'Sciatica': 'treatments.sciatica',
  'Migraine & Headache': 'treatments.migraine',
  'Arthritis': 'treatments.arthritis',
  'Cervical Spondylosis': 'treatments.cervical',
  'Frozen Shoulder': 'treatments.frozenShoulder',
  'Stress & Anxiety Management': 'treatments.stress',
  'Depression Support': 'treatments.depression',
  'Insomnia Treatment': 'treatments.insomnia',
  'Sinus Problems': 'treatments.sinus',
  'Allergies': 'treatments.allergies',
  'Asthma Support': 'treatments.asthma',
  'Weight Management': 'treatments.weight',
  'Diabetes Support Therapy': 'treatments.diabetes',
  'Hypertension Management': 'treatments.hypertension',
  'Digestive Disorders': 'treatments.digestive',
  'Gastric Problems': 'treatments.gastric',
  'Acidity': 'treatments.acidity',
  'PCOD / PCOS Support': 'treatments.pcos',
  'Infertility Support': 'treatments.infertility',
  'Menstrual Problems': 'treatments.menstrual',
  'Hormonal Imbalance': 'treatments.hormonal',
  'Facial Paralysis': 'treatments.facialParalysis',
  'Sports Injury Recovery': 'treatments.sportsInjury',
  'Joint Pain': 'treatments.jointPain',
  'Muscle Pain': 'treatments.musclePain',
  'Neurological Disorders Support': 'treatments.neurological',
  'Immunity Improvement': 'treatments.immunity',
  'Wellness Therapy': 'treatments.wellness',
};

const CATEGORY_KEY_MAP: Record<string, string> = {
  'All': 'treatments.catAll',
  'Pain Management': 'treatments.catPain',
  'Mental Wellness': 'treatments.catMental',
  'Respiratory': 'treatments.catRespiratory',
  'Lifestyle Disorders': 'treatments.catLifestyle',
  "Women's Health": 'treatments.catWomens',
  'Neurological': 'treatments.catNeuro',
  'General Wellness': 'treatments.catGeneral',
};

@Component({
  selector: 'app-treatments',
  standalone: true,
  imports: [CommonModule, RevealDirective, IconComponent],
  templateUrl: './treatments.component.html',
  styleUrl: './treatments.component.scss'
})
export class TreatmentsComponent {
  readonly i18n = inject(I18nService);
  readonly rawCategories: readonly Filter[] = ['All', ...TREATMENT_CATEGORIES];
  readonly active = signal<Filter>('All');

  readonly categories = computed(() =>
    this.rawCategories.map(c => ({
      raw: c,
      label: this.i18n.t(CATEGORY_KEY_MAP[c] ?? c)
    }))
  );

  readonly visible = computed(() => {
    const filtered = this.active() === 'All' ? TREATMENTS : TREATMENTS.filter(t => t.category === this.active());
    return filtered.map(t => ({
      ...t,
      translatedName: this.i18n.t(TREATMENT_KEY_MAP[t.name] ?? t.name),
      translatedCategory: this.i18n.t(CATEGORY_KEY_MAP[t.category] ?? t.category)
    }));
  });

  setActive(c: Filter): void {
    this.active.set(c);
  }

  trackByName = (_: number, t: Treatment & { translatedName: string }) => t.name;
}
