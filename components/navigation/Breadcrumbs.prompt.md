Location trail for deep pages (treatment detail, journal article).

```jsx
<Breadcrumbs items={[{label:"Programmes", href:"/programmes"}, {label:"Wellness", href:"/programmes/wellness"}, "Detox"]} />
```

**Motion.** Ancestor links take `--text-primary` and a Cotton Seed underline on hover, 160ms. The current page does not hover.

**RTL.** The trail reads right to left. Keep the `/` separator — do not swap it for a backslash or a flipped chevron.
