# Radio Cards

Radio-card pattern in both **React** and **Angular**, built on the Atlas **Card**
component, sourced from the Figma file
[Radio-Card](https://www.figma.com/design/BmWgXw0EIEEVXcplgJJ645/Radio-Card)
([Solution with Card](https://www.figma.com/design/BmWgXw0EIEEVXcplgJJ645/Radio-Card?node-id=28-6360),
[Hover](https://www.figma.com/design/BmWgXw0EIEEVXcplgJJ645/Radio-Card?node-id=95-911),
[Disabled](https://www.figma.com/design/BmWgXw0EIEEVXcplgJJ645/Radio-Card?node-id=95-969)).

Every value (colour, spacing, radius, typography, shadow) comes from Atlas /
Lens Figma tokens declared in `tokens/atlas-tokens.css`. The full state matrix
is wired up:

| State    | Card                                                       |
| -------- | ---------------------------------------------------------- |
| Default  | white surface, `outline/static` border                     |
| Hover    | four-stop asymmetric `shadow/elevation/low` drop shadow    |
| Pressed  | `surface/variant-subtle` background                        |
| Focused  | `shadow/focus/default` (blue + white spread ring)          |
| Selected | `form/outline-selected` border + filled blue indicator     |
| Disabled | `form/outline-disabled` radio + `type/disabled` label      |

The inner radio indicator itself has only two visual states (default and
selected) — the card's hover / pressed / focused states do not propagate to it.

## Structure

```
Radio cards/
├── tokens/                                ← shared CSS custom-property tokens
│   ├── atlas-tokens.css
│   └── radio-card.css
├── react/                                 ← Vite + React 18 + TypeScript
│   └── src/
│       ├── primitives/Card.tsx
│       └── components/{RadioCard,RadioCardGroup}.tsx
├── angular/                               ← Angular 18 standalone components
│   └── src/app/
│       ├── primitives/card.component.ts
│       └── radio-card{,-group}.component.ts
└── preview/                               ← self-contained HTML previews
    ├── radio-cards-preview.html
    └── react-app.html                     ← inlined React build
```

`atlas-reference/` is the reference codebase only — git-ignored.

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

### No-install preview

Open `preview/react-app.html` in any browser — same React build with all JS / CSS
inlined into one file.
