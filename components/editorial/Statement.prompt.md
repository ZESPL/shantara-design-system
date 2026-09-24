The deck's heading block: full-sentence headline → optional meta row → one quiet supporting line → actions. **No eyebrow** — nothing small and uppercase sits above the heading. Category or duration goes in `meta`, below the title.

```jsx
<Statement sub="Progress is reviewed through the stay.">
  Each programme begins with a consultation and is adjusted as your stay goes on.
</Statement>
<Statement size="h3" meta={["Metabolic", "7–21 nights"]}>Detox</Statement>
```

**Type.** Sizes map onto the type roles (display, h1, h2/statement, h3/title, h4); all shrink on narrow screens via clamp. The supporting line is body size (lead size under display/h1) — never a second headline. Always left-aligned.

**Measure.** Headlines wrap at 30ch; pass `measure` for a short page title.

**Responsive.** No breakpoints needed; `actions` stack full width under 520px.
