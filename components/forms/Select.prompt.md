Single-choice picker for lists of 6+ options; use `Radio` below that.

```jsx
<Select label="Treatment room" placeholder="No preference" options={["Garden pavilion", "Cedar suite", "Water room"]} />
```

**Motion.** Same hover / focus halo as `Input`. The caret drops 3px and takes Himalaya on `:focus-within` — it does not spin or flip.

**RTL.** The caret sits at the inline end. Do not add a second physical `right` offset.
