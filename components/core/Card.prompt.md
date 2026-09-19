The brand's content container — treatments, retreats, journal entries, booking summaries.

```jsx
<Card media="/assets/photos/treatment.jpg" mediaAlt="Therapy room" interactive onClick={open}>
  <span className="shantara-eyebrow">Prescribed therapy</span>
  <h4>Mud therapy</h4>
  <p>45 minutes · daily, 10:30</p>
</Card>
```

Tones: `default` (white on Merino pages), `raised` (Pearl Bush, no shadow — for grouped panels), `sunken` (Sand), `outline`, `brand` (Himalaya), `inverse` (Pine Tree). `interactive` adds a 2px lift and the large shadow; never combine it with an interactive child button.

`interactive` + `onClick` makes the whole card a button: it gets `role="button"`, enters the tab order, and fires on Enter and Space. Give `media` a real `mediaAlt` unless the image is decorative.
