Text field for all single-line entry. Inputs use the 8px radius — only buttons are pill-shaped.

```jsx
<Input label="Email" type="email" placeholder="you@example.com" required hint="We only email about your booking." />
<Input label="Guests" error="Maximum 6 guests per suite." defaultValue="8" />
<Input label="Search treatments" startIcon={<Icon name="search" size={16} />} />
```

Labels are sentence case, 13px Medium, letterspaced. Hints stay short (“Optional”) at `--text-xs` minimum — never essay paragraphs in the hint. Errors also use `--text-xs`.

**Motion.** Hover darkens the hairline to `--border-strong`. Focus is Himalaya plus a 3px `--surface-brand-soft` halo, 160ms. An error message rises 8px (`sh-enter-up`) over 240ms — it does not shake.

**RTL.** `startIcon` / `endIcon` follow reading direction. Search belongs in `startIcon` in both LTR and RTL.
