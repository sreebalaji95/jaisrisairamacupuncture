import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

export type IconName =
  | 'pain' | 'neck' | 'spine' | 'shoulder' | 'knee' | 'sciatica' | 'head' | 'joint'
  | 'mind' | 'heart-mind' | 'sleep' | 'nose' | 'allergy' | 'lungs' | 'scale' | 'drop'
  | 'pulse' | 'stomach' | 'flame' | 'women' | 'family' | 'cycle' | 'balance' | 'face'
  | 'sport' | 'muscle' | 'brain' | 'shield' | 'lotus' | 'leaf' | 'user-check' | 'heal'
  | 'sun' | 'check' | 'badge' | 'wallet' | 'home' | 'sparkle' | 'plan' | 'heart'
  | 'calendar' | 'clipboard' | 'needle' | 'phone' | 'mail' | 'whatsapp' | 'map'
  | 'menu' | 'close' | 'arrow-up' | 'arrow-right' | 'chevron-down' | 'star' | 'quote'
  | 'facebook' | 'instagram' | 'youtube';

@Component({
  selector: 'app-icon',
  standalone: true,
  imports: [CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <svg [attr.viewBox]="viewBox" xmlns="http://www.w3.org/2000/svg"
         fill="none" stroke="currentColor" stroke-width="1.8"
         stroke-linecap="round" stroke-linejoin="round"
         [attr.aria-hidden]="true" focusable="false">
      <ng-container [ngSwitch]="name">
        <g *ngSwitchCase="'pain'"><circle cx="12" cy="12" r="3"/><path d="M12 2v3M12 19v3M2 12h3M19 12h3M5 5l2 2M17 17l2 2M19 5l-2 2M7 17l-2 2"/></g>
        <g *ngSwitchCase="'neck'"><path d="M9 3h6M10 3v4a3 3 0 0 1-3 3H5M14 3v4a3 3 0 0 0 3 3h2M12 10v11"/></g>
        <g *ngSwitchCase="'spine'"><path d="M12 3v18M9 5h6M8 8h8M9 11h6M8 14h8M9 17h6M8 20h8"/></g>
        <g *ngSwitchCase="'shoulder'"><path d="M4 8a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4M6 10v8M18 10v8M9 18h6"/></g>
        <g *ngSwitchCase="'knee'"><path d="M8 3v6l-2 4 2 4v4M16 3v6l2 4-2 4v4"/><circle cx="12" cy="13" r="2"/></g>
        <g *ngSwitchCase="'sciatica'"><path d="M7 3c2 5-1 8 0 11s4 4 3 7M14 3c-1 6 3 7 2 11s-3 4-2 7"/></g>
        <g *ngSwitchCase="'head'"><path d="M12 3a7 7 0 0 0-7 7v3l-1 2a1 1 0 0 0 1 1h1v3a2 2 0 0 0 2 2h2v3"/><path d="M16 19v3M12 14a3 3 0 0 0 3-3"/></g>
        <g *ngSwitchCase="'joint'"><circle cx="12" cy="12" r="3.5"/><path d="M12 3v5M12 16v5M3 12h5M16 12h5"/></g>
        <g *ngSwitchCase="'mind'"><path d="M8 4a4 4 0 0 0-4 4v4a4 4 0 0 0 2 3.5V19a2 2 0 0 0 2 2h2v-7"/><path d="M16 4a4 4 0 0 1 4 4v4a4 4 0 0 1-2 3.5V19a2 2 0 0 1-2 2h-2v-7"/><path d="M10 9h4M10 12h4"/></g>
        <g *ngSwitchCase="'heart-mind'"><path d="M12 21s-7-4.5-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 11c0 5.5-7 10-7 10z"/><path d="M9 11h6"/></g>
        <g *ngSwitchCase="'sleep'"><path d="M21 14a9 9 0 1 1-11-11 7 7 0 0 0 11 11z"/><path d="M15 4h4l-4 5h4"/></g>
        <g *ngSwitchCase="'nose'"><path d="M12 3v9a3 3 0 0 1-3 3H7l2 3h6l2-3h-2a3 3 0 0 1-3-3"/><path d="M9 18h6"/></g>
        <g *ngSwitchCase="'allergy'"><circle cx="12" cy="12" r="3"/><circle cx="5" cy="6" r="1.5"/><circle cx="19" cy="6" r="1.5"/><circle cx="5" cy="18" r="1.5"/><circle cx="19" cy="18" r="1.5"/><path d="M7 7l3 3M17 7l-3 3M7 17l3-3M17 17l-3-3"/></g>
        <g *ngSwitchCase="'lungs'"><path d="M12 3v9M9 12V8a3 3 0 0 0-3 3v6a4 4 0 0 0 4 4h2V12M15 12V8a3 3 0 0 1 3 3v6a4 4 0 0 1-4 4h-2"/></g>
        <g *ngSwitchCase="'scale'"><path d="M12 4v16M4 8h16M7 8l-3 6a3 3 0 0 0 6 0L7 8zM17 8l-3 6a3 3 0 0 0 6 0l-3-6z"/></g>
        <g *ngSwitchCase="'drop'"><path d="M12 3s6 7 6 11a6 6 0 0 1-12 0c0-4 6-11 6-11z"/></g>
        <g *ngSwitchCase="'pulse'"><path d="M3 12h4l2-6 4 12 2-6h6"/></g>
        <g *ngSwitchCase="'stomach'"><path d="M7 4h6a6 6 0 0 1 6 6v2a8 8 0 0 1-8 8 6 6 0 0 1-6-6V8a4 4 0 0 1 4-4z"/><path d="M7 4v4M11 12h4"/></g>
        <g *ngSwitchCase="'flame'"><path d="M12 3s4 4 4 9a4 4 0 0 1-8 0c0-2 1-3 1-3s-1 4 2 4 4-3 1-10z"/></g>
        <g *ngSwitchCase="'women'"><circle cx="12" cy="8" r="5"/><path d="M12 13v8M9 18h6"/></g>
        <g *ngSwitchCase="'family'"><circle cx="8" cy="7" r="3"/><circle cx="16" cy="7" r="3"/><circle cx="12" cy="15" r="2"/><path d="M3 21c0-3 2-5 5-5M21 21c0-3-2-5-5-5M10 21c0-2 1-3 2-3s2 1 2 3"/></g>
        <g *ngSwitchCase="'cycle'"><path d="M4 12a8 8 0 0 1 14-5M20 12a8 8 0 0 1-14 5"/><path d="M18 3v4h-4M6 21v-4h4"/></g>
        <g *ngSwitchCase="'balance'"><path d="M12 3v18M6 8h12M3 14l3-6 3 6a3 3 0 0 1-6 0zM15 14l3-6 3 6a3 3 0 0 1-6 0z"/></g>
        <g *ngSwitchCase="'face'"><circle cx="12" cy="12" r="9"/><path d="M9 10h.01M15 10h.01M8 15a4 4 0 0 0 8 0"/></g>
        <g *ngSwitchCase="'sport'"><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18"/></g>
        <g *ngSwitchCase="'muscle'"><path d="M3 12c2-1 4-1 6 0 2 1 4 1 6 0l5 2-3 5-3-1c-2-1-4-1-6 0s-5 1-5-1v-5z"/></g>
        <g *ngSwitchCase="'brain'"><path d="M9 3a3 3 0 0 0-3 3 3 3 0 0 0-2 5 3 3 0 0 0 2 5 3 3 0 0 0 6 0V3a3 3 0 0 0-3 0z"/><path d="M15 3a3 3 0 0 1 3 3 3 3 0 0 1 2 5 3 3 0 0 1-2 5 3 3 0 0 1-6 0"/></g>
        <g *ngSwitchCase="'shield'"><path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6l8-3z"/><path d="M9 12l2 2 4-4"/></g>
        <g *ngSwitchCase="'lotus'"><path d="M12 3c-2 3-2 6 0 9 2-3 2-6 0-9z"/><path d="M4 11c2-1 5 0 8 2-3 0-6-1-8-2zM20 11c-2-1-5 0-8 2 3 0 6-1 8-2zM12 12c-4 0-7 3-7 6h14c0-3-3-6-7-6z"/></g>
        <g *ngSwitchCase="'leaf'"><path d="M4 20c6 0 16-2 16-16-6 0-16 2-16 16z"/><path d="M4 20c4-4 8-8 16-16"/></g>
        <g *ngSwitchCase="'user-check'"><circle cx="10" cy="8" r="4"/><path d="M3 21c0-4 3-7 7-7s7 3 7 7"/><path d="M16 12l2 2 4-4"/></g>
        <g *ngSwitchCase="'heal'"><path d="M12 21s-7-4.5-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 11c0 5.5-7 10-7 10z"/><path d="M9 11h6M12 8v6"/></g>
        <g *ngSwitchCase="'sun'"><circle cx="12" cy="12" r="4"/><path d="M12 2v3M12 19v3M2 12h3M19 12h3M5 5l2 2M17 17l2 2M19 5l-2 2M7 17l-2 2"/></g>
        <g *ngSwitchCase="'check'"><path d="M4 12l5 5L20 6"/></g>
        <g *ngSwitchCase="'badge'"><path d="M12 3l3 2 3-1 1 3 3 1-1 3 2 3-2 3 1 3-3 1-1 3-3-1-3 2-3-2-3 1-1-3-3-1 1-3-2-3 2-3-1-3 3-1 1-3 3 1z"/><path d="M9 12l2 2 4-4"/></g>
        <g *ngSwitchCase="'wallet'"><path d="M3 7a2 2 0 0 1 2-2h13l3 4v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7z"/><path d="M16 13h3M3 9h18"/></g>
        <g *ngSwitchCase="'home'"><path d="M3 11l9-8 9 8v9a2 2 0 0 1-2 2h-4v-7h-6v7H5a2 2 0 0 1-2-2v-9z"/></g>
        <g *ngSwitchCase="'sparkle'"><path d="M12 3l2 5 5 2-5 2-2 5-2-5-5-2 5-2zM19 14l1 2 2 1-2 1-1 2-1-2-2-1 2-1z"/></g>
        <g *ngSwitchCase="'plan'"><path d="M5 4h14v16H5z"/><path d="M9 9h6M9 13h6M9 17h4"/></g>
        <g *ngSwitchCase="'heart'"><path d="M12 21s-7-4.5-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 11c0 5.5-7 10-7 10z"/></g>
        <g *ngSwitchCase="'calendar'"><rect x="3" y="5" width="18" height="16" rx="2"/><path d="M3 10h18M8 3v4M16 3v4"/></g>
        <g *ngSwitchCase="'clipboard'"><rect x="6" y="4" width="12" height="17" rx="2"/><path d="M9 4h6v3H9zM9 11h6M9 15h6M9 18h4"/></g>
        <g *ngSwitchCase="'needle'"><path d="M20 4l-2-2-12 12 1 5 5 1L20 4z"/><path d="M10 14l2-2M14 10l2-2"/></g>
        <g *ngSwitchCase="'phone'"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19 19 0 0 1-8.3-3 19 19 0 0 1-6-6 19 19 0 0 1-3-8.4A2 2 0 0 1 4.5 2h3a2 2 0 0 1 2 1.7c.1.9.3 1.8.6 2.6a2 2 0 0 1-.5 2.1L8.1 9.8a16 16 0 0 0 6 6l1.4-1.4a2 2 0 0 1 2.1-.5c.8.3 1.7.5 2.6.6a2 2 0 0 1 1.8 2.4z"/></g>
        <g *ngSwitchCase="'mail'"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 6 9-6"/></g>
        <g *ngSwitchCase="'whatsapp'" fill="currentColor" stroke="none"><path d="M19.05 4.91A10 10 0 0 0 12 2a10 10 0 0 0-8.5 15.16L2 22l4.95-1.46A10 10 0 1 0 19.05 4.91zM12 20.13a8.13 8.13 0 0 1-4.14-1.13l-.3-.18-2.94.86.88-2.86-.2-.31A8.14 8.14 0 1 1 12 20.13zm4.71-6.12c-.26-.13-1.53-.76-1.77-.85-.24-.09-.41-.13-.59.13s-.67.85-.83 1.03c-.15.18-.3.2-.56.07a6.56 6.56 0 0 1-1.93-1.2 7.2 7.2 0 0 1-1.34-1.66c-.14-.24-.02-.37.11-.5.11-.11.26-.3.39-.45.13-.15.17-.26.26-.43.09-.18.04-.33-.02-.46-.06-.13-.59-1.41-.81-1.93-.21-.51-.43-.44-.59-.45h-.5c-.18 0-.46.07-.7.33-.24.26-.92.9-.92 2.2s.94 2.55 1.07 2.72c.13.18 1.86 2.84 4.5 3.99.63.27 1.12.43 1.5.55.63.2 1.2.17 1.66.1.5-.07 1.53-.62 1.74-1.22.22-.6.22-1.11.15-1.22-.06-.11-.24-.18-.5-.31z"/></g>
        <g *ngSwitchCase="'map'"><path d="M9 3l6 2 6-2v16l-6 2-6-2-6 2V5z"/><path d="M9 3v18M15 5v18"/></g>
        <g *ngSwitchCase="'menu'"><path d="M4 7h16M4 12h16M4 17h16"/></g>
        <g *ngSwitchCase="'close'"><path d="M6 6l12 12M18 6L6 18"/></g>
        <g *ngSwitchCase="'arrow-up'"><path d="M12 19V5M5 12l7-7 7 7"/></g>
        <g *ngSwitchCase="'arrow-right'"><path d="M5 12h14M13 5l7 7-7 7"/></g>
        <g *ngSwitchCase="'chevron-down'"><path d="M6 9l6 6 6-6"/></g>
        <g *ngSwitchCase="'star'"><path d="M12 3l2.6 5.7 6.2.6-4.7 4.3 1.4 6.2L12 16.8l-5.5 3 1.4-6.2L3.2 9.3l6.2-.6z" fill="currentColor"/></g>
        <g *ngSwitchCase="'quote'"><path d="M7 7h4v6a4 4 0 0 1-4 4v-3a1 1 0 0 0 1-1V11H7zM15 7h4v6a4 4 0 0 1-4 4v-3a1 1 0 0 0 1-1V11h-1z"/></g>
        <g *ngSwitchCase="'facebook'"><path d="M14 8h3V4h-3a4 4 0 0 0-4 4v3H7v4h3v7h4v-7h3l1-4h-4V8a1 1 0 0 1 1-1z"/></g>
        <g *ngSwitchCase="'instagram'"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor"/></g>
        <g *ngSwitchCase="'youtube'"><path d="M22 8a3 3 0 0 0-2-2c-2-.5-8-.5-8-.5s-6 0-8 .5a3 3 0 0 0-2 2c-.5 2-.5 4-.5 4s0 2 .5 4a3 3 0 0 0 2 2c2 .5 8 .5 8 .5s6 0 8-.5a3 3 0 0 0 2-2c.5-2 .5-4 .5-4s0-2-.5-4z"/><path d="M10 9l5 3-5 3z" fill="currentColor"/></g>
      </ng-container>
    </svg>
  `,
  styles: [`
    :host { display: inline-flex; }
    svg { width: 100%; height: 100%; display: block; }
  `]
})
export class IconComponent {
  @Input({ required: true }) name!: IconName | string;
  @Input() viewBox = '0 0 24 24';
}
