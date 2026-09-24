Muted 01–04 numerals, a Medium item title and one line — the deck's process slide.

```jsx
<NumberedSteps columns={2} items={[{ title: "Consultation and assessment", text: "A doctor meets you…" }]} />
```

**Responsive.** One column on phones, two from 760px, `columns` from 1000px. Numbers are decorative (`aria-hidden`); the `<ol>` carries order for screen readers.
