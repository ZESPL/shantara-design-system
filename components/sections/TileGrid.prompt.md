A heading row with one text link on the right, then tiles in a grid that never leaves an uneven last row (deck slide 11).

```jsx
<TileGrid eyebrow="Programmes" title="Naturopathy programmes"
  action={<TextLink href="/en/programs">All programmes</TextLink>}>
  <Tile src="/assets/photos/balcony.jpg" alt="" eyebrow="Mind · 7–14 nights" title="Stress Management"
    text="Doctor-led routines, therapies and rest for guests managing sustained stress, poor sleep or fatigue." href="/en/programs/stress-management" />
  <Tile src="/assets/photos/water-wall.jpg" alt="" eyebrow="Metabolic · 7–21 nights" title="Detox" … />
  <Tile src="/assets/photos/grounds.jpg" alt="" eyebrow="Metabolic · 14–21 nights" title="Weight Management" … />
</TileGrid>
```

**Layouts.** `3` (default) three across; `2` two across; `feature` one large tile (pass `size="lg"`) beside the others stacked. Keep counts to multiples of the column count — three or six for `3`, two or four for `2`, three for `feature`.

**Content.** Programme names, focus and durations from `content/programs/`; one photograph per job, never repeated on the same page. No prices on tiles.

**Responsive.** Phone (<760px): tiles stack in one column and the link sits under the heading. Tablet (760–999px): two columns with the link right of the heading; an odd count makes the first tile span both columns so the last row is never half empty. Desktop (≥1000px): `3` goes three across, `feature` becomes 7/5 columns with the first tile spanning the height of the stack beside it.
