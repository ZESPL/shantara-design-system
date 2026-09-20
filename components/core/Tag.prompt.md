Filter / preference pill, 32px tall, selectable and optionally removable.

```jsx
<Tag selected onClick={toggle}>Ayurveda</Tag>
<Tag onRemove={() => drop("Vegan")}>Vegan</Tag>
```

Selected state fills with Himalaya. Sentence case, no uppercase — that's `Badge`'s job. Interactive filter Tags are controls; do not use static Tags as decorative pills next to CTAs — write a sentence instead.

**Motion.** Hover fills Pearl Bush (or Himalaya-800 when selected) at 160ms on fine pointers; press is `scale(0.97)`. With `onClick` the tag is a button — Enter and Space toggle it. The remove control fades to full opacity on hover. Static tags (`data-static`) do not press.

**RTL.** The remove control sits at the inline end. Label and optional icon stay in reading order.
