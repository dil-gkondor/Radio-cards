import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  RadioCardGroupComponent,
  type RadioCardOption,
} from './radio-card-group.component';
import { ThemeToggleComponent, type Theme } from './theme-toggle.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RadioCardGroupComponent, ThemeToggleComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <main class="demo-page">
      <header class="demo-header">
        <div>
          <h1 class="demo-page__title">Radio Cards · Angular</h1>
          <p class="demo-page__subtitle">
            Radio-card pattern built on the Atlas Card component. Every value
            comes from Atlas / Lens Figma tokens. The theme switcher rewrites
            the same tokens on <code>:root</code>.
          </p>
        </div>
        <app-theme-toggle
          [value]="theme"
          (valueChange)="theme = $event"
        ></app-theme-toggle>
      </header>

      <section class="demo-section">
        <h2 class="demo-section__heading">Built on the Atlas Card</h2>
        <p class="demo-section__copy">
          The interactive Card surface drives default, hover (asymmetric
          Elevation/Low shadow), pressed (variant-subtle fill) and selected
          (blue outline). Focus is a UI/Focus/Main ring on the card itself.
          The first option ("None") is disabled to show that state.
        </p>
        <app-radio-card-group
          title="Subscription"
          [options]="cardOptions"
          [value]="cardValue"
          (valueChange)="cardValue = $event"
        ></app-radio-card-group>
      </section>
    </main>
  `,
})
export class AppComponent {
  /** Disabled in the Card demo to match Figma node 95:969. */
  readonly cardOptions: RadioCardOption[] = [
    { value: 'none', label: 'None', disabled: true },
    { value: 'professional', label: 'Professional' },
    { value: 'contributor', label: 'Contributor' },
    { value: 'oversight', label: 'Oversight' },
  ];

  cardValue: string | null = 'professional';
  theme: Theme = 'lens';
}
