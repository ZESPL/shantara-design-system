Long-form entry — guest notes, health intake, journal reflections.

```jsx
<Textarea label="Anything we should know?" hint="Allergies, injuries, preferences." maxLength={280} value={notes} onChange={e => setNotes(e.target.value)} />
```

**Motion.** Same field contract as `Input`: hover hairline, focus halo, 160ms. The character count is still — it does not pulse as it approaches the limit.

**RTL.** The counter sits at the inline end of the footer; hint and error stay at the start.
