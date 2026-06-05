import { useCallback, useId, useRef } from 'react';
import type { KeyboardEvent } from 'react';
import { RadioButtonTile } from './RadioButtonTile';
import type { RadioCardOption } from './RadioCardGroup';

export interface RadioButtonTileGroupProps {
  title: string;
  options: RadioCardOption[];
  value: string | null;
  onChange: (value: string) => void;
  name?: string;
}

/** Group of Button-Tile-based radio options. Same a11y model as RadioCardGroup. */
export function RadioButtonTileGroup({
  title,
  options,
  value,
  onChange,
  name,
}: RadioButtonTileGroupProps) {
  const fallbackName = useId();
  const groupName = name ?? fallbackName;
  const refs = useRef<Array<HTMLButtonElement | null>>([]);

  const handleSelect = useCallback((v: string) => onChange(v), [onChange]);

  const handleNav = useCallback(
    (idx: number) => (e: KeyboardEvent<HTMLButtonElement>) => {
      let next = -1;
      if (e.key === 'ArrowDown' || e.key === 'ArrowRight') next = (idx + 1) % options.length;
      if (e.key === 'ArrowUp' || e.key === 'ArrowLeft')
        next = (idx - 1 + options.length) % options.length;
      if (next >= 0) {
        e.preventDefault();
        refs.current[next]?.focus();
        onChange(options[next].value);
      }
    },
    [onChange, options],
  );

  const firstEnabledIdx = options.findIndex((o) => !o.disabled);

  return (
    <div role="radiogroup" aria-label={title} className="rbt-group">
      <p className="rbt-group__title">{title}</p>
      <div className="rbt-group__grid">
        {options.map((opt, idx) => {
          const isSelected = opt.value === value;
          const isFirst = idx === firstEnabledIdx;
          const isInTabOrder = isSelected || (value === null && isFirst);
          return (
            <RadioButtonTile
              key={opt.value}
              ref={(el) => {
                refs.current[idx] = el;
              }}
              name={groupName}
              value={opt.value}
              label={opt.label}
              checked={isSelected}
              disabled={opt.disabled}
              tabIndex={isInTabOrder ? 0 : -1}
              onSelect={handleSelect}
              onKeyboardNav={handleNav(idx)}
            />
          );
        })}
      </div>
    </div>
  );
}
