A statement beside two or three large Light numerals (deck slide 8).

```jsx
<NumeralsSplit
  eyebrow="Shantara in numbers"
  title="Doctor-led naturopathy, planned around your assessment."
  numerals={[{ value: "25,000+", label: "guests since 2000" }, { value: "4", label: "hilltop acres" }]}
/>
```

**Content.** Figures come only from `content/site.json` `stats`, with their labels as written there. Two is the deck's number; three at most — a fourth is dropped. Never a rate, an outcome or a percentage.

**Responsive.** Phone: the statement first, then the numerals two across (three wrap to 2 + 1). From 760px three numerals sit in one row. From 1000px the statement and the numerals sit side by side in two equal columns, bottom-aligned. A `footnote` spans the full width underneath.
