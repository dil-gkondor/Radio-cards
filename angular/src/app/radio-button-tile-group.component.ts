import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  HostBinding,
  Input,
  Output,
  QueryList,
  ViewChildren,
  ViewEncapsulation,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RadioButtonTileComponent } from './radio-button-tile.component';
import type { RadioCardOption } from './radio-card-group.component';

@Component({
  selector: 'app-radio-button-tile-group',
  standalone: true,
  imports: [CommonModule, RadioButtonTileComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  template: `
    <p class="rbt-group__title">{{ title }}</p>
    <div class="rbt-group__grid">
      <button
        appRadioButtonTile
        *ngFor="let opt of options; let i = index; trackBy: trackByValue"
        [label]="opt.label"
        [value]="opt.value"
        [checked]="opt.value === value"
        [disabled]="!!opt.disabled"
        [tabIndexValue]="isInTabOrder(opt, i) ? 0 : -1"
        (selectValue)="onSelect($event)"
        (navigate)="onNavigate($event, i)"
      ></button>
    </div>
  `,
})
export class RadioButtonTileGroupComponent {
  @Input({ required: true }) title!: string;
  @Input({ required: true }) options: RadioCardOption[] = [];
  @Input() value: string | null = null;

  @Output() valueChange = new EventEmitter<string>();

  @ViewChildren(RadioButtonTileComponent) tiles!: QueryList<RadioButtonTileComponent>;

  @HostBinding('class.rbt-group') readonly base = true;
  @HostBinding('attr.role') readonly role = 'radiogroup';
  @HostBinding('attr.aria-label') get ariaLabel() {
    return this.title;
  }

  isInTabOrder(opt: RadioCardOption, idx: number): boolean {
    if (this.value !== null) return opt.value === this.value;
    return idx === this.options.findIndex((o) => !o.disabled);
  }

  onSelect(value: string): void {
    this.value = value;
    this.valueChange.emit(value);
  }

  onNavigate(event: KeyboardEvent, idx: number): void {
    let next = -1;
    if (event.key === 'ArrowDown' || event.key === 'ArrowRight')
      next = (idx + 1) % this.options.length;
    if (event.key === 'ArrowUp' || event.key === 'ArrowLeft')
      next = (idx - 1 + this.options.length) % this.options.length;
    if (next >= 0) {
      event.preventDefault();
      this.tiles.toArray()[next]?.focus();
      this.onSelect(this.options[next].value);
    }
  }

  trackByValue(_: number, opt: RadioCardOption) {
    return opt.value;
  }
}
