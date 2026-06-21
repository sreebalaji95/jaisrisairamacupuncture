export const CLINIC = {
  name: 'Jaisri Sairam Acupuncture Centre',
  doctor: 'Dr. Padmanabhan',
  address: 'No. 2, Samundipuram 1st Street, Tirupur – 641603',
  phone: '+91 9488456549',
  phoneRaw: '+919488456549',
  whatsapp: '919488456549',
  email: 'jaisrisairamacupuncture2003@gmail.com',
  mapsUrl: 'https://maps.app.goo.gl/iKt7U4ehTd3abVh29',
  mapEmbedQuery: '11.123707,77.3188716',
  hours: [
    { day: 'Monday – Saturday', time: '9:00 AM – 8:00 PM' },
    { day: 'Sunday', time: 'By Appointment' }
  ],
  whatsappMessage:
    'Hello Doctor,\n\nI would like to book an appointment for Acupuncture Treatment.\n\nName:\nPhone:\nPreferred Date:\nHealth Concern:'
} as const;
