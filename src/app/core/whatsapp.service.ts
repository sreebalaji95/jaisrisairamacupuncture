import { Injectable } from '@angular/core';
import { CLINIC } from '../shared/data/clinic';

@Injectable({ providedIn: 'root' })
export class WhatsappService {
  readonly link = `https://wa.me/${CLINIC.whatsapp}?text=${encodeURIComponent(CLINIC.whatsappMessage)}`;
  readonly telLink = `tel:${CLINIC.phoneRaw}`;
  readonly mailLink = `mailto:${CLINIC.email}`;
  readonly mapsLink = CLINIC.mapsUrl;
}
