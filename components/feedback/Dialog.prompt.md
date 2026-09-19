Modal for confirmations and short focused tasks. Returns `null` when `open` is false.

```jsx
<Dialog open={open} onClose={close} title="Move your booking?"
  description="Your practitioner and room stay the same."
  footer={<><Button variant="secondary" onClick={close}>Keep it</Button><Button onClick={confirm}>Move booking</Button></>} />
```

Never stack dialogs. Destructive confirmations use a `Button` with `variant="primary"` and Clay-toned copy, not a red button — the brand has no red.
