Modal for confirmations and short focused tasks. Returns `null` when `open` is false.

```jsx
<Dialog open={open} onClose={close} title="Move your booking?"
  description="Your practitioner and room stay the same."
  footer={<><Button variant="secondary" onClick={close}>Keep it</Button><Button onClick={confirm}>Move booking</Button></>} />
```

Never stack dialogs. Destructive confirmations use a `Button` with `variant="primary"` and Clay-toned copy, not a red button — the brand has no red.

**Motion.** The scrim fades over 240ms. The panel scales from `0.96` at centre over 420ms `--ease-out` — never from `scale(0)`, never from a trigger. Exit is faster (`--duration-fast`). Reduced motion keeps the fade and drops the scale. No bounce.

**RTL.** Close sits at the inline end. Footer actions stay at the end of the reading order (primary last).
