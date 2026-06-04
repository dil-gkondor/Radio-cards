# Radio Cards

Radio card component implementations in **React** and **Angular**, built from the
Figma design at [Interactive-card › Radio card states](https://www.figma.com/design/BmWgXw0EIEEVXcplgJJ645/Interactive-card?node-id=1-693).

Three visual variants are rendered on the demo page, each covering the full
interaction state matrix (default → hover → pressed → selected), and each driven
exclusively by Atlas / Lens **Figma design tokens** exposed as CSS custom
properties.

## What's in the box

```
Radio cards/
├── tokens/                ← shared CSS custom-property tokens (Atlas / Lens)
│   ├── atlas-tokens.css
│   └── radio-card.css
├── react/                 ← Vite + React 18 + TypeScript app
└── angular/               ← Angular 18 (standalone components) app
```

`atlas-reference/` is the reference codebase only — it is git-ignored and not part
of this repo.

## Hover-state enhancement

The Figma "Hover" column only changes the radio indicator's inner ring fill;
per the product brief, the card surface itself was missing a hover affordance.
This implementation adds:

- **Elevation lift** — `--semantic-shadow-elevation-hover` (slightly stronger than
  `elevation/low` so the lift is unambiguous).
- **Subtle scale** — `transform: scale(1.01)` on `:hover`, dropping to
  `scale(0.995)` on `:active` for press feedback.
- **Motion tokens** — `200ms` / `cubic-bezier(0.2, 0, 0, 1)`, with
  `prefers-reduced-motion` opting out cleanly.

## Run locally

### React

```bash
cd react
npm install
npm run dev          # → http://127.0.0.1:5173
```

### Angular

```bash
cd angular
npm install
npm start            # → http://127.0.0.1:4200
```

Both dev servers hot-reload on edits to the component or token files.
