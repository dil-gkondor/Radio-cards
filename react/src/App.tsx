import { useState } from 'react';
import { RadioCardGroup, type RadioCardOption } from './components/RadioCardGroup';
import { ThemeToggle, type Theme } from './components/ThemeToggle';

/** Disabled in the Card demo to match Figma node 95:969. */
const cardOptions: RadioCardOption[] = [
  { value: 'none', label: 'None', disabled: true },
  { value: 'professional', label: 'Professional' },
  { value: 'contributor', label: 'Contributor' },
  { value: 'oversight', label: 'Oversight' },
];

export default function App() {
  const [cardValue, setCardValue] = useState<string | null>('professional');
  const [theme, setTheme] = useState<Theme>('lens');

  return (
    <main className="demo-page">
      <header className="demo-header">
        <div>
          <h1 className="demo-page__title">Radio Cards · React</h1>
          <p className="demo-page__subtitle">
            Radio-card pattern built on the Atlas Card component. Every value
            comes from Atlas / Lens Figma tokens. The theme switcher rewrites
            the same tokens on <code>:root</code>.
          </p>
        </div>
        <ThemeToggle value={theme} onChange={setTheme} />
      </header>

      <section className="demo-section">
        <h2 className="demo-section__heading">Built on the Atlas Card</h2>
        <p className="demo-section__copy">
          The interactive Card surface drives default, hover (asymmetric
          Elevation/Low shadow), pressed (variant-subtle fill) and selected
          (blue outline). Focus is a UI/Focus/Main ring on the card itself.
          The first option ("None") is disabled to show that state.
        </p>
        <RadioCardGroup
          title="Subscription"
          options={cardOptions}
          value={cardValue}
          onChange={setCardValue}
        />
      </section>
    </main>
  );
}
