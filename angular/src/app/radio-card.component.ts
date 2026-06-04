import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  HostBinding,
  HostListener,
  Input,
  Output,
} from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * Single selectable radio card.
 *
 * Rendered with `role="radio"` and `aria-checked`; arrow-key navigation is
 * expected to be handled by the parent group component if needed.
 */
@Component({
  selector: 'app-radio-card',
  standalone: true,
  imports: [CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <span class="radio-card__indicator" aria-hidden="true"></span>
    <span class="radio-card__label">{{ label }}</span>
  `,
})
export class RadioCardComponent {
  @Input({ required: true }) label!: string;
  @Input({ required: true }) value!: string;
  @Input() checked = false;
  @Input() disabled = false;

  @Output() selectValue = new EventEmitter<string>();

  @HostBinding('class.radio-card') readonly base = true;
  @HostBinding('class.is-selected') get selectedClass() {
    return this.checked;
  }
  @HostBinding('class.is-disabled') get disabledClass() {
    return this.disabled;
  }
  @HostBinding('attr.role') readonly role = 'radio';
  @HostBinding('attr.aria-checked') get ariaChecked() {
    return this.checked;
  }
  @HostBinding('attr.aria-disabled') get ariaDisabled() {
    return this.disabled ? 'true' : null;
  }
  @HostBinding('attr.tabindex') get tabIndex() {
    return this.disabled ? -1 : 0;
  }

  @HostListener('click') onClick(): void {
    if (this.disabled) return;
    this.selectValue.emit(this.value);
  }

  @HostListener('keydown', ['$event']) onKeydown(event: KeyboardEvent): void {
    if (this.disabled) return;
    if (event.key === ' ' || event.key === 'Enter') {
      event.preventDefault();
      this.selectValue.emit(this.value);
    }
  }
}
