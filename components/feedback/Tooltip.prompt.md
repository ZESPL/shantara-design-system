Wraps a control to explain it in a few words.

```jsx
<Tooltip label="Quiet hours: 9pm–7am"><IconButton label="Info"><Icon name="info" size={16} /></IconButton></Tooltip>
```

**Motion.** First open waits 280ms, then fades and scales from `0.97` toward the trigger over 125ms `--ease-out`. Once one tooltip has just been open, neighbours appear instantly with no animation. Dismissible with Escape (1.4.13). If the note is essential, it does not belong in a tooltip.

**RTL.** `left` and `right` are physical. Use `start` / `end` when the side should follow reading direction.
