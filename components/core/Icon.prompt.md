Renders one Lucide glyph, colour-inheriting, for use inside any Shantara control.

```jsx
<Icon name="leaf" size={24} />
<Button startIcon={<Icon name="calendar-days" size={18} />}>Reserve</Button>
```

Substitution note: Shantara's brand package contains no icon library, so Lucide (`lucide-static@0.544.0`, CDN) stands in. Preferred slugs for this brand: `leaf`, `flower`, `sun`, `moon`, `waves`, `mountain`, `sparkles`, `calendar-days`, `map-pin`, `clock`, `heart`, `user-round`.

**Motion.** Icons inherit `currentColor`, so they ride the parent control's 160ms colour shift. They do not bounce, spin or swap on their own.

**RTL.** Directional slugs (`arrow-*`, `chevron-left` / `chevron-right`, matching corners) flip with `scaleX(-1)` under `dir="rtl"`. Symmetric marks — leaf, plus, heart, search — do not.
