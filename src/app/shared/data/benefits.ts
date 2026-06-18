export interface Benefit {
  title: string;
  description: string;
  icon: string;
}

export const BENEFITS: readonly Benefit[] = [
  { title: 'Drug-Free Treatment', description: 'Heal naturally without medications or chemical side effects.', icon: 'leaf' },
  { title: 'Natural Healing', description: 'Activates your body’s innate ability to restore balance.', icon: 'lotus' },
  { title: 'Safe & Effective', description: 'Sterile single-use needles, time-tested traditional methods.', icon: 'shield' },
  { title: 'Personalized Care', description: 'Tailored treatment plans based on your unique condition.', icon: 'user-check' },
  { title: 'Improves Blood Circulation', description: 'Stimulates flow, oxygenation and energy through meridians.', icon: 'pulse' },
  { title: 'Reduces Stress', description: 'Calms the nervous system and lowers anxiety naturally.', icon: 'mind' },
  { title: 'Pain Relief', description: 'Targets root causes of chronic and acute pain.', icon: 'heal' },
  { title: 'Better Sleep', description: 'Restores healthy sleep cycles and deep rest.', icon: 'sleep' },
  { title: 'Improves Overall Wellness', description: 'Boosts immunity, energy and mind-body harmony.', icon: 'sun' },
  { title: 'Minimal Side Effects', description: 'Non-invasive therapy with virtually no adverse reactions.', icon: 'check' }
];
