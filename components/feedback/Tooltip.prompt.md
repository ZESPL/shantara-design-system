Wraps a control to explain it in a few words. The text goes in `content` (`label` is an alias).

```jsx
<Tooltip content="Prescribed by your doctor"><IconButton label="About this therapy"><Icon name="info" size={20} /></IconButton></Tooltip>
<Tooltip content="Quiet hours: 9pm–7am" defaultOpen>…</Tooltip>
```

Pine Tree chip, 13px Merino text, 2px corners, wraps at 260px (70vw on phones). `defaultOpen` starts it open (uncontrolled); `open` controls it. Keyboard focus opens it and `aria-describedby` ties it to the trigger.

**Motion.** First open waits 280ms, then fades and scales from `0.97` toward the trigger over 125ms `--ease-out`. Once one tooltip has just been open, neighbours appear instantly with no animation. Dismissible with Escape (1.4.13). If the note is essential, it does not belong in a tooltip.

**RTL.** `left` and `right` are physical. Use `start` / `end` when the side should follow reading direction.
