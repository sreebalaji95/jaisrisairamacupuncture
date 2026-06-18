export interface NavLink {
  label: string;
  fragment: string;
}

export const NAV_LINKS: readonly NavLink[] = [
  { label: 'Home', fragment: 'home' },
  { label: 'About', fragment: 'about-doctor' },
  { label: 'Treatments', fragment: 'treatments' },
  { label: 'Benefits', fragment: 'benefits' },
  { label: 'Why Us', fragment: 'why-choose-us' },
  { label: 'Testimonials', fragment: 'testimonials' },
  { label: 'FAQ', fragment: 'faq' },
  { label: 'Contact', fragment: 'contact' }
];
