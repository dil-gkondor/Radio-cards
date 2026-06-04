import { useCallback, useId } from 'react';
import { RadioCard } from './RadioCard';

export interface RadioCardOption {
  value: string;
  label: string;
  disabled?: boolean;
}

export type RadioCardGroupVariant = 'default' | 'variant' | 'variant-subtle';

export interface RadioCardGroupProps {
  /** Section title shown above the cards */
  title: string;
  /** The options to show */
  options: RadioCardOption[];
  /** Currently selected value (controlled) */
  value: string | null;
  /** Called when selection changes */
  onChange: (value: string) => void;
  /** Visual variant — maps to the 3 versions in Figma */
  variant?: RadioCardGroupVariant;
  /** Form name */
  name?: string;
}

const variantClass: Record<RadioCardGroupVariant, string> = {
  default: '',
  variant: 'radio-card-group--variant',
  'variant-subtle': 'radio-card-group--variant-subtle',
};

export function RadioCardGroup({
  title,
  options,
  value,
  onChange,
  variant = 'default',
  name,
}: RadioCardGroupProps) {
  const fallbackName = useId();
  const groupName = name ?? fallbackName;

  const handleSelect = useCallback(
    (next: string) => {
      onChange(next);
    },
    [onChange],
  );

  return (
    <div
      role="radiogroup"
      aria-label={title}
      className={['radio-card-group', variantClass[variant]].filter(Boolean).join(' ')}
    >
      <p className="radio-card-group__title">{title}</p>
      <div className="radio-card-group__grid">
        {options.map((opt) => (
          <RadioCard
            key={opt.value}
            name={groupName}
            value={opt.value}
            label={opt.label}
            checked={value === opt.value}
            disabled={opt.disabled}
            onSelect={handleSelect}
          />
        ))}
      </div>
    </div>
  );
}
