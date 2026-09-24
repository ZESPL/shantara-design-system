Immediate-effect toggle. For choices that need a Save press, use `Checkbox`.

```jsx
<Switch label="Therapy reminders" labelFirst defaultChecked />
```

44×26 track, 20px white knob, 17px label, 44px row. Optional `description` line. Disabled fades the track to 45% and mutes the label.

**Motion.** The knob travels 18px and the track fills Himalaya over `--duration-base` (240ms). Hover darkens an off track; it does not enlarge the knob.

**RTL.** The knob travels toward the inline end. `labelFirst` still puts the label at the inline start of the row.
