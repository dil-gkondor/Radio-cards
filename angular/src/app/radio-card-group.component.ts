import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  HostBinding,
  Input,
  Output,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RadioCardComponent } from './radio-card.component';

export interface RadioCardOption {
  value: string;
  label: string;
  disabled?: boolean;
}

export type RadioCardGroupVariant = 'default' | 'variant' | 'variant-subtle';

@Component({
  selector: 'app-radio-card-group',
  standalone: true,
  imports: [CommonModule, RadioCardComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <p class="radio-card-group__title">{{ title }}</p>
    <div class="radio-card-group__grid">
      <app-radio-card
        *ngFor="let opt of options; trackBy: trackByValue"
        [label]="opt.label"
        [value]="opt.value"
        [checked]="opt.value === value"
        [disabled]="!!opt.disabled"
        (selectValue)="onSelect($event)"
      ></app-radio-card>
    </div>
  `,
})
export class RadioCardGroupComponent {
  @Input({ required: true }) title!: string;
  @Input({ required: true }) options: RadioCardOption[] = [];
  @Input() value: string | null = null;
  @Input() variant: RadioCardGroupVariant = 'default';

  @Output() valueChange = new EventEmitter<string>();

  @HostBinding('class.radio-card-group') readonly base = true;
  @HostBinding('attr.role') readonly role = 'radiogroup';
  @HostBinding('attr.aria-label') get ariaLabel() {
    return this.title;
  }
  @HostBinding('class.radio-card-group--variant') get variantClass() {
    return this.variant === 'variant';
  }
  @HostBinding('class.radio-card-group--variant-subtle') get variantSubtleClass() {
    return this.variant === 'variant-subtle';
  }

  onSelect(value: string): void {
    this.value = value;
    this.valueChange.emit(value);
  }

  trackByValue(_: number, opt: RadioCardOption) {
    return opt.value;
  }
}
