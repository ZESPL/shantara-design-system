Shantara's action control — use for every commit action; pill radius is non-negotiable in this brand.

```jsx
<Button variant="primary" size="lg" endIcon={<Icon name="arrow-right" />}>Book a Consultation</Button>
```

Variants: `primary` (Himalaya olive), `accent` (Gold Crayola, for warm/promotional CTAs), `secondary` (hairline Cotton Seed outline), `ghost` (olive text, soft olive hover), `inverse` (Merino on dark or over photography). Sizes `sm|md|lg` map to the 32/40/48px control heights. Pass `href` for a link-button; `fullWidth` for mobile sheets.

Labels stay short — about one action, roughly 20 characters in English. Extra meaning lives in nearby text or on the destination page. Buttons may wrap; they must not become captions.

**Motion.** Hover is a one-step fill or hairline shift at `--duration-fast` (160ms), gated to fine pointers. Press is `scale(var(--press-scale))` (`0.96`) on `:active`, never a colour flash. Focus is the 2+2px Himalaya ring. Disabled sits at 42% and does not move.

**RTL.** `startIcon` / `endIcon` follow reading direction. An `arrow-right` or `chevron-right` end icon flips when the page or region is `dir="rtl"` — do not swap the slug yourself.
