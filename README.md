# Radio Cards

Two side-by-side **radio-card solutions** in both **React** and **Angular**, built
from the Figma file [Radio-Card](https://www.figma.com/design/BmWgXw0EIEEVXcplgJJ645/Radio-Card):

- **Solution 1** — built on the Atlas **Card** component
  ([Solution with Card](https://www.figma.com/design/BmWgXw0EIEEVXcplgJJ645/Radio-Card?node-id=28-6360))
- **Solution 2** — built on the Atlas **Button Tile** component
  ([Solution with Button tile](https://www.figma.com/design/BmWgXw0EIEEVXcplgJJ645/Radio-Card?node-id=28-6361))

Every value (colour, spacing, radius, typography, focus shadow) comes from Atlas /
Lens Figma tokens declared in `tokens/atlas-tokens.css`. All five interaction
states are wired in both solutions:

| State    | Card solution                                | Button Tile solution                          |
| -------- | -------------------------------------------- | --------------------------------------------- |
| Default  | white surface, `outline/static` border       | white surface, `outline/static-button-tile`   |
| Hover    | `shadow/elevation/low` (soft drop shadow)    | `action/secondary/hover` background           |
| Pressed  | `surface/variant-subtle` background          | `action/secondary/active` background          |
| Focused  | `shadow/focus/default` (blue + white spread) | `shadow/focus/default` (blue + white spread)  |
| Selected | `form/outline-selected` border + blue dot    | `form/outline-selected` border + blue dot     |

## Structure

```
Radio cards/
├── tokens/                                ← shared CSS custom-property tokens
│   ├── atlas-tokens.css
│   ├── radio-card.css                     ← Card-based solution styles
│   └── radio-button-tile.css              ← Button-Tile-based solution styles
├── react/                                 ← Vite + React 18 + TypeScript app
│   └── src/
│       ├── primitives/{Card,ButtonTile}.tsx
│       └── components/{RadioCard,RadioButtonTile,*Group}.tsx
├── angular/                               ← Angular 18 standalone-component app
│   └── src/app/
│       ├── primitives/{card,button-tile}.component.ts
│       └── radio-card{,-group}.component.ts + radio-button-tile{,-group}.component.ts
└── preview/                               ← self-contained HTML previews
    ├── radio-cards-preview.html           ← live vanilla-JS preview
    └── react-app.html                     ← inlined React build
```

`atlas-reference/` is the reference codebase only — it is git-ignored.

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

Just open `preview/react-app.html` in any browser — same React build, all JS / CSS
inlined into one file.
