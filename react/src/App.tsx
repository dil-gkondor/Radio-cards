import { useState } from 'react';
import { RadioCardGroup, type RadioCardOption } from './components/RadioCardGroup';

const options: RadioCardOption[] = [
  { value: 'none', label: 'None' },
  { value: 'professional', label: 'Professional' },
  { value: 'contributor', label: 'Contributor' },
  { value: 'oversight', label: 'Oversight' },
];

export default function App() {
  const [v1, setV1] = useState<string | null>('none');
  const [v2, setV2] = useState<string | null>('professional');
  const [v3, setV3] = useState<string | null>(null);

  return (
    <main className="demo-page">
      <h1 className="demo-page__title">Radio Cards · React</h1>
      <p className="demo-page__subtitle">
        Three variants of the radio card group, all driven by Atlas / Lens Figma tokens.
        Hover any card to see the elevation + scale animation (added per product brief
        on top of the Figma interaction states).
      </p>

      <section className="demo-section">
        <p className="demo-section__label">Variant 1 — default surface</p>
        <RadioCardGroup
          title="Subscription"
          options={options}
          value={v1}
          onChange={setV1}
          variant="default"
        />
      </section>

      <section className="demo-section">
        <p className="demo-section__label">Variant 2 — variant surface</p>
        <RadioCardGroup
          title="Subscription"
          options={options}
          value={v2}
          onChange={setV2}
          variant="variant"
        />
      </section>

      <section className="demo-section">
        <p className="demo-section__label">Variant 3 — variant-subtle surface</p>
        <RadioCardGroup
          title="Subscription"
          options={options}
          value={v3}
          onChange={setV3}
          variant="variant-subtle"
        />
      </section>
    </main>
  );
}
