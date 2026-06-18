export interface Faq {
  question: string;
  answer: string;
}

export const FAQS: readonly Faq[] = [
  {
    question: 'What is acupuncture?',
    answer:
      'Acupuncture is a traditional healing therapy that uses very fine, sterile needles inserted into specific points on the body to restore the natural flow of energy and stimulate the body’s self-healing systems. It is widely used for pain relief, stress reduction and a range of lifestyle and chronic conditions.'
  },
  {
    question: 'Is acupuncture painful?',
    answer:
      'The needles used are extremely thin — much finer than injection needles. Most patients feel only a mild tingling, warmth or a brief pinch. Sessions are generally very relaxing and many patients fall asleep on the table.'
  },
  {
    question: 'How many sessions are required?',
    answer:
      'It depends on your condition, its severity and how long you have had it. Some acute issues respond in a few sessions, while chronic conditions may need a structured course. Dr. Padmanabhan will design a personalized plan after your assessment.'
  },
  {
    question: 'Are there any side effects?',
    answer:
      'Acupuncture has minimal side effects when performed by a trained practitioner. Occasionally a small bruise or mild soreness may occur at the needle site. There are no drug interactions, no dependency and no chemical side effects.'
  },
  {
    question: 'Is acupuncture safe?',
    answer:
      'Yes. We use only sterile, single-use disposable needles and follow strict hygiene protocols. Acupuncture is recognized as a safe, evidence-supported therapy when performed by a qualified practitioner.'
  },
  {
    question: 'Who can undergo acupuncture treatment?',
    answer:
      'Acupuncture is suitable for adults of all ages and is widely used for pain, stress, lifestyle disorders, women’s health concerns and general wellness. Pregnant patients and those with specific medical conditions should inform the doctor so the treatment can be tailored safely.'
  }
];
