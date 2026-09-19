Filter / preference pill, 32px tall, selectable and optionally removable.

```jsx
<Tag selected onClick={toggle}>Ayurveda</Tag>
<Tag onRemove={() => drop("Vegan")}>Vegan</Tag>
```

Selected state fills with Himalaya. Sentence case, no uppercase — that's `Badge`'s job.
