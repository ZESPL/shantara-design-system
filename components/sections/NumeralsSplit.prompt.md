A statement beside two or three large Light numerals (deck slide 8).

```jsx
<NumeralsSplit
  eyebrow="Shantara in numbers"
  title="Doctor-led naturopathy, planned around your assessment."
  numerals={[{ value: "25,000+", label: "guests since 2000" }, { value: "4", label: "hilltop acres" }]}
/>
```

**Content.** Figures come only from `content/site.json` `stats`, with their labels as written there. Two is the deck's number; three at most — a fourth is dropped. Never a rate, an outcome or a percentage.

**Responsive.** Phone: the statement first, then the numerals side by side in equal columns while they fit; a figure never shrinks below its own width, so a long value (“25,000+”) moves to its own row rather than colliding with its neighbour. Three numerals sit in one row once there is room (about 760px). From 1000px the statement takes 5 of 12 columns and the numerals 7, bottom-aligned. A `footnote` spans the full width underneath.
