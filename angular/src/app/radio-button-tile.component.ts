import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  EventEmitter,
  HostBinding,
  HostListener,
  Input,
  Output,
  ViewEncapsulation,
} from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * Button Tile-based Radio Card. Renders as a <button appButtonTile> with
 * radio semantics. Visual states (hover, pressed, focused, selected) come
 * from the .atlas-button-tile + .rbt-tile / .is-selected CSS chain.
 */
@Component({
  selector: 'button[appRadioButtonTile]',
  standalone: true,
  imports: [CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  template: `
    <span class="rbt-content">
      <span class="rbt-radio" aria-hidden="true"></span>
      <span class="rbt-label">{{ label }}</span>
    </span>
  `,
})
export class RadioButtonTileComponent {
  @Input({ required: true }) label!: string;
  @Input({ required: true }) value!: string;
  @Input() checked = false;
  @Input() disabled = false;
  @Input() tabIndexValue = -1;

  @Output() selectValue = new EventEmitter<string>();
  @Output() navigate = new EventEmitter<KeyboardEvent>();

  constructor(private readonly host: ElementRef<HTMLElement>) {}

  focus() {
    this.host.nativeElement.focus();
  }

  @HostBinding('class.atlas-button-tile') readonly base = true;
  @HostBinding('class.rbt-tile') readonly tileClass = true;
  @HostBinding('class.is-selected') get selectedClass() {
    return this.checked;
  }
  @HostBinding('class.is-disabled') get disabledClass() {
    return this.disabled;
  }
  @HostBinding('attr.type') readonly buttonType = 'button';
  @HostBinding('attr.role') readonly role = 'radio';
  @HostBinding('attr.aria-checked') get ariaChecked() {
    return this.checked;
  }
  @HostBinding('attr.aria-disabled') get ariaDisabled() {
    return this.disabled ? 'true' : null;
  }
  @HostBinding('attr.tabindex') get tabIndex() {
    return this.disabled ? -1 : this.tabIndexValue;
  }
  @HostBinding('attr.disabled') get disabledAttr() {
    return this.disabled ? '' : null;
  }
  @HostBinding('attr.data-value') get dataValue() {
    return this.value;
  }

  @HostListener('click') onClick() {
    if (this.disabled) return;
    this.selectValue.emit(this.value);
  }

  @HostListener('keydown', ['$event']) onKeydown(event: KeyboardEvent) {
    if (this.disabled) return;
    if (event.key === ' ' || event.key === 'Enter') {
      event.preventDefault();
      this.selectValue.emit(this.value);
      return;
    }
    this.navigate.emit(event);
  }
}
