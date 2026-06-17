export interface Testimonial {
  name: string;
  location: string;
  rating: number;
  text: string;
  treatment: string;
}

export const TESTIMONIALS: readonly Testimonial[] = [
  {
    name: 'Lakshmi R.',
    location: 'Tirupur',
    rating: 5,
    treatment: 'Chronic Back Pain',
    text: 'After years of back pain and painkillers, Dr. Padmanabhan’s treatment gave me real, lasting relief. I feel like myself again.'
  },
  {
    name: 'Senthil K.',
    location: 'Coimbatore',
    rating: 5,
    treatment: 'Sciatica',
    text: 'I had nearly given up on my sciatica. Within a few sessions, the pain reduced drastically. Honest, caring practitioner.'
  },
  {
    name: 'Priya M.',
    location: 'Tirupur',
    rating: 5,
    treatment: 'Migraine',
    text: 'My migraines were ruining my work life. Acupuncture has reduced their frequency to almost nothing. Truly grateful.'
  },
  {
    name: 'Ravi S.',
    location: 'Erode',
    rating: 5,
    treatment: 'Frozen Shoulder',
    text: 'My shoulder mobility came back faster than I expected. The doctor is patient, explains everything, and the clinic is spotless.'
  },
  {
    name: 'Anitha V.',
    location: 'Tirupur',
    rating: 5,
    treatment: 'PCOS Support',
    text: 'My cycles have become regular and my energy is back. I appreciate the holistic, drug-free approach.'
  },
  {
    name: 'Mohan B.',
    location: 'Avinashi',
    rating: 5,
    treatment: 'Stress & Sleep',
    text: 'Sleep had become a struggle. After consistent sessions, my stress is manageable and I sleep deeply. Highly recommend.'
  }
];
