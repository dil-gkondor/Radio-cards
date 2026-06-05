import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  RadioCardGroupComponent,
  type RadioCardOption,
} from './radio-card-group.component';
import { RadioButtonTileGroupComponent } from './radio-button-tile-group.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RadioCardGroupComponent, RadioButtonTileGroupComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <main class="demo-page">
      <h1 class="demo-page__title">Radio Cards · Angular</h1>
      <p class="demo-page__subtitle">
        Two solutions for the same radio-card pattern, side by side. Both pull
        every value from Atlas / Lens Figma tokens. Hover, click, and Tab
        through each group to see the full state matrix
        (default · hover · pressed · focused · selected).
      </p>

      <section class="demo-section">
        <h2 class="demo-section__heading">Solution 1 — built on the Atlas Card</h2>
        <p class="demo-section__copy">
          The interactive Card surface drives default, hover (soft elevation),
          pressed (variant-subtle fill) and selected (blue outline). Focus is
          a UI/Focus/Main ring on the card itself.
        </p>
        <app-radio-card-group
          title="Subscription"
          [options]="options"
          [value]="cardValue"
          (valueChange)="cardValue = $event"
        ></app-radio-card-group>
      </section>

      <section class="demo-section">
        <h2 class="demo-section__heading">Solution 2 — built on the Atlas Button Tile</h2>
        <p class="demo-section__copy">
          The Button Tile primitive provides the hover (action-secondary),
          pressed (action-secondary-active) and focus (focus-ring shadow)
          states out of the box; selection is layered via the
          Form/Outline-selected border.
        </p>
        <app-radio-button-tile-group
          title="Subscription"
          [options]="options"
          [value]="tileValue"
          (valueChange)="tileValue = $event"
        ></app-radio-button-tile-group>
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

  cardValue: string | null = 'none';
  tileValue: string | null = 'none';
}
