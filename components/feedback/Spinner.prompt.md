Loading state as three dots breathing on a 1200ms cycle — matches the brand's slow motion language.

```jsx
<Spinner /> 
<Spinner size={6} color="var(--color-merino)" />
```

Never use a rotating spinner or progress bar under 2 seconds of wait.

**Motion.** The only looping animation in the system: three dots on `--duration-ambient` (1200ms) `--ease-breath`. `prefers-reduced-motion: reduce` freezes them at rest. Never substitute a rotating ring.
