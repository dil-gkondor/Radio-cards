import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  RadioCardGroupComponent,
  type RadioCardOption,
} from './radio-card-group.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RadioCardGroupComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <main class="demo-page">
      <h1 class="demo-page__title">Radio Cards · Angular</h1>
      <p class="demo-page__subtitle">
        Three variants of the radio card group, all driven by Atlas / Lens Figma
        tokens. Hover any card to see the elevation + scale animation (added per
        product brief on top of the Figma interaction states).
      </p>

      <section class="demo-section">
        <p class="demo-section__label">Variant 1 — default surface</p>
        <app-radio-card-group
          title="Subscription"
          [options]="options"
          [value]="v1"
          variant="default"
          (valueChange)="v1 = $event"
        ></app-radio-card-group>
      </section>

      <section class="demo-section">
        <p class="demo-section__label">Variant 2 — variant surface</p>
        <app-radio-card-group
          title="Subscription"
          [options]="options"
          [value]="v2"
          variant="variant"
          (valueChange)="v2 = $event"
        ></app-radio-card-group>
      </section>

      <section class="demo-section">
        <p class="demo-section__label">Variant 3 — variant-subtle surface</p>
        <app-radio-card-group
          title="Subscription"
          [options]="options"
          [value]="v3"
          variant="variant-subtle"
          (valueChange)="v3 = $event"
        ></app-radio-card-group>
      </section>
    </main>
  `,
})
export class AppComponent {
  readonly options: RadioCardOption[] = [
    { value: 'none', label: 'None' },
    { value: 'professional', label: 'Professional' },
    { value: 'contributor', label: 'Contributor' },
    { value: 'oversight', label: 'Oversight' },
  ];

  v1: string | null = 'none';
  v2: string | null = 'professional';
  v3: string | null = null;
}
