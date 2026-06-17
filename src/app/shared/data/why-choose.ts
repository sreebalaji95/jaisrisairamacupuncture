export interface WhyChoose {
  title: string;
  description: string;
  icon: string;
}

export const WHY_CHOOSE: readonly WhyChoose[] = [
  { title: 'Experienced Practitioner', description: 'Years of dedicated practice in classical acupuncture.', icon: 'badge' },
  { title: 'Individual Attention', description: 'Every patient receives unhurried, focused care.', icon: 'user-check' },
  { title: 'Affordable Consultation', description: 'Transparent, accessible pricing for all patients.', icon: 'wallet' },
  { title: 'Comfortable Environment', description: 'Calm, hygienic clinic designed for healing.', icon: 'home' },
  { title: 'Holistic Healing', description: 'Treats body, mind and lifestyle together.', icon: 'lotus' },
  { title: 'Modern + Traditional', description: 'Time-tested methods refined with modern best practices.', icon: 'sparkle' },
  { title: 'Personalized Plans', description: 'Treatment built around your diagnosis and goals.', icon: 'plan' },
  { title: 'Friendly Care', description: 'Warm, supportive guidance throughout your journey.', icon: 'heart' }
];
