Multi-select rows — add-ons, consents, preferences.

```jsx
<Checkbox label="I will upload my medical records" description="Reports from the last 12 months" defaultChecked />
<Checkbox label="All therapies acknowledged" indeterminate />
```

**Motion.** The box press-scales. The tick scales in from 0.6 over 160ms `--ease-out`; the indeterminate dash fades. No bounce.

**RTL.** The box stays before the label in reading order. The tick is a convention, not a letter — it does not flip.
