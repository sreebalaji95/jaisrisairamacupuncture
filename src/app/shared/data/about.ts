export interface AboutPoint {
  title: string;
  description: string;
  icon: string;
}

export const ABOUT_ACUPUNCTURE: readonly AboutPoint[] = [
  { title: 'What is Acupuncture?', description: 'An ancient healing science that uses precise stimulation of body points to restore natural balance.', icon: 'lotus' },
  { title: 'How it Works', description: 'Stimulates the nervous system, blood flow and the body’s self-regulating mechanisms to relieve pain and disease.', icon: 'pulse' },
  { title: 'Holistic Benefits', description: 'Addresses root causes rather than masking symptoms — body, mind and energy together.', icon: 'leaf' },
  { title: 'Safety First', description: 'Sterile single-use needles, strict hygiene and a qualified practitioner you can trust.', icon: 'shield' },
  { title: 'Scientific Approach', description: 'Modern evidence-based practice grounded in classical acupuncture principles.', icon: 'sparkle' },
  { title: 'Holistic Healing', description: 'Treats the whole person — encouraging long-term wellness, not short-term fixes.', icon: 'heart' }
];

export const DOCTOR_POINTS: readonly string[] = [
  'Patient-focused, compassionate care',
  'Natural, holistic healing approach',
  'Completely drug-free treatments',
  'Personalized diagnosis and plan',
  'Focus on long-term wellness, not quick fixes'
];

export const HERO_STATS = [
  { value: 15, suffix: '+', label: 'Years of Practice' },
  { value: 5000, suffix: '+', label: 'Patients Treated' },
  { value: 30, suffix: '+', label: 'Conditions Covered' }
] as const;
