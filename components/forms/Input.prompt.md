Text field for all single-line entry. Inputs use the 8px radius — only buttons are pill-shaped.

```jsx
<Input label="Email" type="email" placeholder="you@example.com" required hint="We only email about your booking." />
<Input label="Guests" error="Maximum 6 guests per suite." defaultValue="8" />
<Input label="Search treatments" startIcon={<Icon name="search" size={16} />} />
```

Labels are sentence case, 13px Medium, letterspaced. Hints are full sentences with a period.
