Single choice among a small visible set. Group with a `role="radiogroup"` wrapper and a shared `name`.

```jsx
<Radio name="nights" label="7 nights" description="a shorter stay" card defaultChecked />
<Radio name="nights" label="14 nights" description="often recommended for this programme" card />
```

**Motion.** The inner dot scales from `0.5` with opacity over 160ms `--ease-out` — never from `scale(0)`. `card` rows cross-fade their Himalaya fill and hairline at 160ms.

**RTL.** The dot stays before the label in reading order, same contract as `Checkbox`.
