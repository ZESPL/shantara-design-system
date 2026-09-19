Rosette **band** on one edge of a surface — the only way the pattern is used. Not a wash behind content, not a texture inside cards. One band per screen or slide, and its inner edge is always ruled with a 1px hairline.

```jsx
<PatternPanel tone="pearl" edge="right" band="288px" style={{ padding: "var(--space-13)" }}>
  <h2>Three things we left out, on purpose</h2>
</PatternPanel>
```

- `edge` — `right` (default), `left`, `top`, `bottom`. The band bleeds off on its three outer sides; the inner side carries the hairline.
- `band` — width for vertical bands (22–38% of the surface), height for horizontal strips (8–18%). A strip's cell is measured off its height, so a strip needs ~260px to clear the floor.
- `scale` — **proportional, not a free choice: cell = band / 2**, so two rosettes read across the band at any surface size (usable range band/1.5 → band/3). Given `band` as an absolute length, the default computes this for you; a percentage band must pass `scale` explicitly. 1440 page → band 432 → cell 216. 1280 slide → band 380 → cell 199. 1440×1800 post, strip 15% → strip 270 → cell 135. 960 panel → band 288 → cell 144. Floor 130px, which makes ~880px the smallest patterned surface — below that drop the pattern rather than shrink it. Always a single square value.
- `tone="none"` lays the band over photography (white line at 0.5) — set on a wrapper that already holds the image.
- `reserve` (default true) pads the content clear of the band. Only switch it off when the children are absolutely positioned away from that edge.
- `ink` / `rule` override the line and hairline colours.
