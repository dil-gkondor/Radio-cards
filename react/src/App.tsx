import { useState } from 'react';
import { RadioCardGroup, type RadioCardOption } from './components/RadioCardGroup';
import { RadioButtonTileGroup } from './components/RadioButtonTileGroup';

const options: RadioCardOption[] = [
  { value: 'none', label: 'None' },
  { value: 'professional', label: 'Professional' },
  { value: 'contributor', label: 'Contributor' },
  { value: 'oversight', label: 'Oversight' },
];

export default function App() {
  const [cardValue, setCardValue] = useState<string | null>('none');
  const [tileValue, setTileValue] = useState<string | null>('none');

  return (
    <main className="demo-page">
      <h1 className="demo-page__title">Radio Cards · React</h1>
      <p className="demo-page__subtitle">
        Two solutions for the same radio-card pattern, side by side. Both pull
        every value from Atlas / Lens Figma tokens. Hover, click, and Tab through
        each group to see the full state matrix
        (default · hover · pressed · focused · selected).
      </p>

      <section className="demo-section">
        <h2 className="demo-section__heading">Solution 1 — built on the Atlas Card</h2>
        <p className="demo-section__copy">
          The interactive Card surface drives default, hover (soft elevation),
          pressed (variant-subtle fill) and selected (blue outline). Focus is a
          UI/Focus/Main ring on the card itself.
        </p>
        <RadioCardGroup
          title="Subscription"
          options={options}
          value={cardValue}
          onChange={setCardValue}
        />
      </section>

      <section className="demo-section">
        <h2 className="demo-section__heading">Solution 2 — built on the Atlas Button Tile</h2>
        <p className="demo-section__copy">
          The Button Tile primitive provides the hover (action-secondary), pressed
          (action-secondary-active) and focus (focus-ring shadow) states out of
          the box; selection is layered via the Form/Outline-selected border.
        </p>
        <RadioButtonTileGroup
          title="Subscription"
          options={options}
          value={tileValue}
          onChange={setTileValue}
        />
      </section>
    </main>
  );
}
