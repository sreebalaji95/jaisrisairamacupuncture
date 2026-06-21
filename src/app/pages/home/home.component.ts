import { Component, OnInit, inject } from '@angular/core';
import { HeroComponent } from '../../sections/hero/hero.component';
import { AboutDoctorComponent } from '../../sections/about-doctor/about-doctor.component';
import { AboutAcupunctureComponent } from '../../sections/about-acupuncture/about-acupuncture.component';
import { TreatmentsComponent } from '../../sections/treatments/treatments.component';
import { BenefitsComponent } from '../../sections/benefits/benefits.component';
import { WhyChooseUsComponent } from '../../sections/why-choose-us/why-choose-us.component';
import { ProcessTimelineComponent } from '../../sections/process-timeline/process-timeline.component';
import { TestimonialsComponent } from '../../sections/testimonials/testimonials.component';
import { GalleryComponent } from '../../sections/gallery/gallery.component';
import { FaqComponent } from '../../sections/faq/faq.component';
import { ContactComponent } from '../../sections/contact/contact.component';
import { SeoService } from '../../core/seo.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HeroComponent,
    AboutDoctorComponent,
    AboutAcupunctureComponent,
    TreatmentsComponent,
    BenefitsComponent,
    WhyChooseUsComponent,
    ProcessTimelineComponent,
    TestimonialsComponent,
    GalleryComponent,
    FaqComponent,
    ContactComponent
  ],
  template: `
    <main id="main">
      <app-hero/>
      <app-about-doctor/>
      <app-about-acupuncture/>
      <app-treatments/>
      <app-benefits/>
      <app-why-choose-us/>
      <app-process-timeline/>
      <app-testimonials/>
      <app-gallery/>
      <app-faq/>
      <app-contact/>
    </main>
  `
})
export class HomeComponent implements OnInit {
  private readonly seo = inject(SeoService);
  ngOnInit(): void { this.seo.setHome(); }
}
