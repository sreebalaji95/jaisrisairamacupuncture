export type TreatmentCategory =
  | 'Pain Management'
  | 'Mental Wellness'
  | 'Respiratory'
  | 'Lifestyle Disorders'
  | "Women's Health"
  | 'Neurological'
  | 'General Wellness';

export interface Treatment {
  name: string;
  category: TreatmentCategory;
  icon: string;
}

export const TREATMENTS: readonly Treatment[] = [
  { name: 'Chronic Pain Management', category: 'Pain Management', icon: 'pain' },
  { name: 'Neck Pain', category: 'Pain Management', icon: 'neck' },
  { name: 'Back Pain', category: 'Pain Management', icon: 'spine' },
  { name: 'Shoulder Pain', category: 'Pain Management', icon: 'shoulder' },
  { name: 'Knee Pain', category: 'Pain Management', icon: 'knee' },
  { name: 'Sciatica', category: 'Pain Management', icon: 'sciatica' },
  { name: 'Migraine & Headache', category: 'Pain Management', icon: 'head' },
  { name: 'Arthritis', category: 'Pain Management', icon: 'joint' },
  { name: 'Cervical Spondylosis', category: 'Pain Management', icon: 'spine' },
  { name: 'Frozen Shoulder', category: 'Pain Management', icon: 'shoulder' },

  { name: 'Stress & Anxiety Management', category: 'Mental Wellness', icon: 'mind' },
  { name: 'Depression Support', category: 'Mental Wellness', icon: 'heart-mind' },
  { name: 'Insomnia Treatment', category: 'Mental Wellness', icon: 'sleep' },

  { name: 'Sinus Problems', category: 'Respiratory', icon: 'nose' },
  { name: 'Allergies', category: 'Respiratory', icon: 'allergy' },
  { name: 'Asthma Support', category: 'Respiratory', icon: 'lungs' },

  { name: 'Weight Management', category: 'Lifestyle Disorders', icon: 'scale' },
  { name: 'Diabetes Support Therapy', category: 'Lifestyle Disorders', icon: 'drop' },
  { name: 'Hypertension Management', category: 'Lifestyle Disorders', icon: 'pulse' },
  { name: 'Digestive Disorders', category: 'Lifestyle Disorders', icon: 'stomach' },
  { name: 'Gastric Problems', category: 'Lifestyle Disorders', icon: 'stomach' },
  { name: 'Acidity', category: 'Lifestyle Disorders', icon: 'flame' },

  { name: 'PCOD / PCOS Support', category: "Women's Health", icon: 'women' },
  { name: 'Infertility Support', category: "Women's Health", icon: 'family' },
  { name: 'Menstrual Problems', category: "Women's Health", icon: 'cycle' },
  { name: 'Hormonal Imbalance', category: "Women's Health", icon: 'balance' },

  { name: 'Facial Paralysis', category: 'Neurological', icon: 'face' },
  { name: 'Sports Injury Recovery', category: 'Neurological', icon: 'sport' },
  { name: 'Joint Pain', category: 'Neurological', icon: 'joint' },
  { name: 'Muscle Pain', category: 'Neurological', icon: 'muscle' },
  { name: 'Neurological Disorders Support', category: 'Neurological', icon: 'brain' },

  { name: 'Immunity Improvement', category: 'General Wellness', icon: 'shield' },
  { name: 'Wellness Therapy', category: 'General Wellness', icon: 'lotus' }
];

export const TREATMENT_CATEGORIES: readonly TreatmentCategory[] = [
  'Pain Management',
  'Mental Wellness',
  'Respiratory',
  'Lifestyle Disorders',
  "Women's Health",
  'Neurological',
  'General Wellness'
];
