import { forwardRef } from 'react';
import type { ButtonHTMLAttributes } from 'react';

type DivAttrs = Omit<
  ButtonHTMLAttributes<HTMLButtonElement>,
  'onChange' | 'value' | 'onSelect'
>;

export interface RadioCardProps extends DivAttrs {
  /** Visible label */
  label: string;
  /** Whether this option is currently selected */
  checked: boolean;
  /** Whether the option is disabled */
  disabled?: boolean;
  /** Name of the radio group (for a11y / form semantics) */
  name?: string;
  /** Value of this option */
  value: string;
  /** Called when the user picks this option */
  onSelect?: (value: string) => void;
}

/**
 * RadioCard — a single selectable option laid out as a card.
 *
 * Rendered as a <button role="radio">, the native semantics announce checked state
 * to screen readers and arrow-key navigation can be wired by a parent group.
 */
export const RadioCard = forwardRef<HTMLButtonElement, RadioCardProps>(
  function RadioCard(
    { label, checked, disabled, name, value, onSelect, className, ...rest },
    ref,
  ) {
    const classes = [
      'radio-card',
      checked ? 'is-selected' : '',
      disabled ? 'is-disabled' : '',
      className ?? '',
    ]
      .filter(Boolean)
      .join(' ');

    return (
      <button
        ref={ref}
        type="button"
        role="radio"
        aria-checked={checked}
        aria-disabled={disabled || undefined}
        data-name={name}
        data-value={value}
        disabled={disabled}
        className={classes}
        onClick={() => !disabled && onSelect?.(value)}
        {...rest}
      >
        <span className="radio-card__indicator" aria-hidden="true" />
        <span className="radio-card__label">{label}</span>
      </button>
    );
  },
);
