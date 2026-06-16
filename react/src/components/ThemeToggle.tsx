import { useEffect, useId, useState } from 'react';

export type Theme = 'lens' | 'light' | 'dark';

const THEMES: ReadonlyArray<{ value: Theme; label: string }> = [
  { value: 'lens', label: 'Lens' },
  { value: 'light', label: 'Light' },
  { value: 'dark', label: 'Dark' },
];

export interface ThemeToggleProps {
  /** Current theme — controlled prop */
  value: Theme;
  /** Called when the user picks a new theme */
  onChange: (next: Theme) => void;
}

/**
 * Segmented theme toggle. Renders as role="radiogroup" so screen readers
 * announce it correctly. Sets `data-theme` on the document <html> as a side
 * effect so the rest of the page picks up the right token overrides.
 */
export function ThemeToggle({ value, onChange }: ThemeToggleProps) {
  const groupId = useId();

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', value);
  }, [value]);

  return (
    <div role="radiogroup" aria-label="Theme" className="theme-toggle">
      {THEMES.map((t) => {
        const isSelected = t.value === value;
        return (
          <button
            key={t.value}
            type="button"
            role="radio"
            aria-checked={isSelected}
            data-theme-option={t.value}
            id={`${groupId}-${t.value}`}
            className={`theme-toggle__option${isSelected ? ' is-selected' : ''}`}
            onClick={() => onChange(t.value)}
          >
            {t.label}
          </button>
        );
      })}
    </div>
  );
}

/** Tiny hook so each app can keep theme state alongside the toggle. */
export function useTheme(initial: Theme = 'lens') {
  const [theme, setTheme] = useState<Theme>(initial);
  return { theme, setTheme };
}
