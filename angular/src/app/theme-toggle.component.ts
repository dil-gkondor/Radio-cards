import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  HostBinding,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
  ViewEncapsulation,
} from '@angular/core';
import { CommonModule } from '@angular/common';

export type Theme = 'lens' | 'light' | 'dark';

interface ThemeOption {
  value: Theme;
  label: string;
}

/**
 * Segmented theme toggle. Renders as role="radiogroup" and writes
 * `data-theme` on the document <html> as a side effect so the rest of the
 * page picks up the right token overrides.
 */
@Component({
  selector: 'app-theme-toggle',
  standalone: true,
  imports: [CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  template: `
    <button
      *ngFor="let t of themes; trackBy: trackByValue"
      type="button"
      role="radio"
      [attr.aria-checked]="t.value === value"
      [attr.data-theme-option]="t.value"
      class="theme-toggle__option"
      [class.is-selected]="t.value === value"
      (click)="onSelect(t.value)"
    >
      {{ t.label }}
    </button>
  `,
})
export class ThemeToggleComponent implements OnChanges {
  @Input({ required: true }) value!: Theme;
  @Output() valueChange = new EventEmitter<Theme>();

  @HostBinding('class.theme-toggle') readonly base = true;
  @HostBinding('attr.role') readonly role = 'radiogroup';
  @HostBinding('attr.aria-label') readonly ariaLabel = 'Theme';

  readonly themes: ThemeOption[] = [
    { value: 'lens', label: 'Lens' },
    { value: 'light', label: 'Light' },
    { value: 'dark', label: 'Dark' },
  ];

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['value']) {
      document.documentElement.setAttribute('data-theme', this.value);
    }
  }

  onSelect(theme: Theme): void {
    if (theme === this.value) return;
    this.value = theme;
    this.valueChange.emit(theme);
  }

  trackByValue(_: number, t: ThemeOption) {
    return t.value;
  }
}
