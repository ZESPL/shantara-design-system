Replaces the white card on linen: photograph and text sit directly on the ground, with no border, shadow or radius.

```jsx
<Tile src={photo} alt="Stress Management" eyebrow="Mind · 7–14 nights" title="Stress Management"
  text="Doctor-led routines, therapies and rest…" href="/en/programs/stress-management" />
```

**Use for** programmes, rooms, articles, experiences — every listing on the website. `Card` stays for forms and dialogs only.

**Interaction.** The whole tile is one link. Hover (fine pointers): photograph scales to 1.02 inside its frame, title takes a hairline underline. No lift, no shadow.

**Content.** Eyebrow carries the category and the duration together ("Metabolic · 7–21 nights") instead of a pill badge. One photograph per job — do not reuse a frame that already appears on the page.

**Responsive.** Stacks everywhere; `layout="row"` sits side by side from 760px. Put tiles in `TileGrid`, which never leaves an uneven last row.
