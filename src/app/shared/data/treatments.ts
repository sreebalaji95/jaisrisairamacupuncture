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
  image: string;
}

const IMG = 'assets/images/conditions';

export const TREATMENTS: readonly Treatment[] = [
  { name: 'Chronic Pain Management', category: 'Pain Management', icon: 'pain', image: `${IMG}/cat-pain.jpg` },
  { name: 'Neck Pain', category: 'Pain Management', icon: 'neck', image: `${IMG}/neck-pain.jpg` },
  { name: 'Back Pain', category: 'Pain Management', icon: 'spine', image: `${IMG}/back-pain.jpg` },
  { name: 'Shoulder Pain', category: 'Pain Management', icon: 'shoulder', image: `${IMG}/shoulder-pain.jpg` },
  { name: 'Knee Pain', category: 'Pain Management', icon: 'knee', image: `${IMG}/knee-pain.jpg` },
  { name: 'Sciatica', category: 'Pain Management', icon: 'sciatica', image: `${IMG}/back-pain.jpg` },
  { name: 'Migraine & Headache', category: 'Pain Management', icon: 'head', image: `${IMG}/migraine.jpg` },
  { name: 'Arthritis', category: 'Pain Management', icon: 'joint', image: `${IMG}/arthritis.jpg` },
  { name: 'Cervical Spondylosis', category: 'Pain Management', icon: 'spine', image: `${IMG}/neck-pain.jpg` },
  { name: 'Frozen Shoulder', category: 'Pain Management', icon: 'shoulder', image: `${IMG}/shoulder-pain.jpg` },

  { name: 'Stress & Anxiety Management', category: 'Mental Wellness', icon: 'mind', image: `${IMG}/stress.jpg` },
  { name: 'Depression Support', category: 'Mental Wellness', icon: 'heart-mind', image: `${IMG}/depression.jpg` },
  { name: 'Insomnia Treatment', category: 'Mental Wellness', icon: 'sleep', image: `${IMG}/insomnia.jpg` },

  { name: 'Sinus Problems', category: 'Respiratory', icon: 'nose', image: `${IMG}/sinus.jpg` },
  { name: 'Allergies', category: 'Respiratory', icon: 'allergy', image: `${IMG}/allergies.jpg` },
  { name: 'Asthma Support', category: 'Respiratory', icon: 'lungs', image: `${IMG}/asthma.jpg` },

  { name: 'Weight Management', category: 'Lifestyle Disorders', icon: 'scale', image: `${IMG}/weight-management.jpg` },
  { name: 'Diabetes Support Therapy', category: 'Lifestyle Disorders', icon: 'drop', image: `${IMG}/diabetes.jpg` },
  { name: 'Hypertension Management', category: 'Lifestyle Disorders', icon: 'pulse', image: `${IMG}/hypertension.jpg` },
  { name: 'Digestive Disorders', category: 'Lifestyle Disorders', icon: 'stomach', image: `${IMG}/digestive.jpg` },
  { name: 'Gastric Problems', category: 'Lifestyle Disorders', icon: 'stomach', image: `${IMG}/cat-lifestyle.jpg` },
  { name: 'Acidity', category: 'Lifestyle Disorders', icon: 'flame', image: `${IMG}/cat-lifestyle.jpg` },

  { name: 'PCOD / PCOS Support', category: "Women's Health", icon: 'women', image: `${IMG}/pcos.jpg` },
  { name: 'Infertility Support', category: "Women's Health", icon: 'family', image: `${IMG}/infertility.jpg` },
  { name: 'Menstrual Problems', category: "Women's Health", icon: 'cycle', image: `${IMG}/cat-womens.jpg` },
  { name: 'Hormonal Imbalance', category: "Women's Health", icon: 'balance', image: `${IMG}/cat-womens.jpg` },

  { name: 'Facial Paralysis', category: 'Neurological', icon: 'face', image: `${IMG}/facial.jpg` },
  { name: 'Sports Injury Recovery', category: 'Neurological', icon: 'sport', image: `${IMG}/sports-injury.jpg` },
  { name: 'Joint Pain', category: 'Neurological', icon: 'joint', image: `${IMG}/joint-pain.jpg` },
  { name: 'Muscle Pain', category: 'Neurological', icon: 'muscle', image: `${IMG}/muscle-pain.jpg` },
  { name: 'Neurological Disorders Support', category: 'Neurological', icon: 'brain', image: `${IMG}/cat-neuro.jpg` },

  { name: 'Immunity Improvement', category: 'General Wellness', icon: 'shield', image: `${IMG}/immunity.jpg` },
  { name: 'Wellness Therapy', category: 'General Wellness', icon: 'lotus', image: `${IMG}/wellness.jpg` }
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
