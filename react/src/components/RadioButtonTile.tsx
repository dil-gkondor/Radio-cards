import { forwardRef } from 'react';
import type { KeyboardEvent } from 'react';
import { ButtonTile } from '../primitives/ButtonTile';

export interface RadioButtonTileProps {
  label: string;
  value: string;
  checked: boolean;
  disabled?: boolean;
  name?: string;
  onSelect?: (value: string) => void;
  onKeyboardNav?: (event: KeyboardEvent<HTMLButtonElement>) => void;
  tabIndex?: number;
}

/**
 * Button Tile-based Radio Card. Wraps the Atlas Button Tile primitive with
 * radio role and group navigation semantics. Visual states (hover, pressed,
 * focused, selected) come from the tile primitive's CSS plus the `is-selected`
 * modifier.
 */
export const RadioButtonTile = forwardRef<HTMLButtonElement, RadioButtonTileProps>(
  function RadioButtonTile(
    { label, value, checked, disabled, name, onSelect, onKeyboardNav, tabIndex },
    ref,
  ) {
    const classes = [
      'rbt-tile',
      checked ? 'is-selected' : '',
      disabled ? 'is-disabled' : '',
    ]
      .filter(Boolean)
      .join(' ');

    return (
      <ButtonTile
        ref={ref}
        role="radio"
        aria-checked={checked}
        aria-disabled={disabled || undefined}
        tabIndex={disabled ? -1 : tabIndex ?? (checked ? 0 : -1)}
        data-name={name}
        data-value={value}
        disabled={disabled}
        className={classes}
        onClick={() => !disabled && onSelect?.(value)}
        onKeyDown={(e) => {
          if (disabled) return;
          if (e.key === ' ' || e.key === 'Enter') {
            e.preventDefault();
            onSelect?.(value);
            return;
          }
          onKeyboardNav?.(e);
        }}
      >
        <div className="rbt-content">
          <span className="rbt-radio" aria-hidden="true" />
          <span className="rbt-label">{label}</span>
        </div>
      </ButtonTile>
    );
  },
);
