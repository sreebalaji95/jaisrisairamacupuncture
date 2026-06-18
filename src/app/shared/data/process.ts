export interface ProcessStep {
  step: number;
  title: string;
  description: string;
  icon: string;
}

export const PROCESS_STEPS: readonly ProcessStep[] = [
  { step: 1, title: 'Book Consultation', description: 'Reach out on WhatsApp or phone — we’ll schedule your first visit.', icon: 'calendar' },
  { step: 2, title: 'Health Assessment', description: 'A thorough evaluation of your condition, lifestyle and history.', icon: 'clipboard' },
  { step: 3, title: 'Acupuncture Therapy', description: 'A personalized course of treatments using sterile needles.', icon: 'needle' },
  { step: 4, title: 'Recovery & Follow-up', description: 'Lifestyle guidance and progress reviews to sustain wellness.', icon: 'sun' }
];
