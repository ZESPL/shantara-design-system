import React from "react";

function resolveBase() {
  if (typeof document === "undefined") return "assets";
  const s = document.querySelector('script[src$="_ds_bundle.js"]');
  if (s) return s.getAttribute("src").replace(/_ds_bundle\.js$/, "assets");
  return "assets";
}

const BG = {
  merino: "var(--color-merino)",
  pearl: "var(--color-pearl-bush)",
  sand: "var(--color-sand)",
  olive: "var(--color-himalaya)",
  pine: "var(--color-pine-tree)",
  gold: "var(--color-gold-crayola)",
  none: "transparent",
};

/* The rosette never washes a whole surface — it is a BAND flush to one edge,
   bleeding off on three sides, ruled with a hairline on its inner side, with the
   content kept clear of it. `scale` sets one square cell edge (applied to both
   axes, so the geometry can never be stretched) and is PROPORTIONAL to the band:
   half the band's width by default, so two rosettes read across it. */
export function PatternPanel({
  tone = "merino",
  edge = "right",
  band,
  scale,
  intensity,
  ink,
  rule,
  reserve = true,
  radius = "0px",
  children,
  style,
  ...rest
}) {
  const base = resolveBase();
  const vertical = edge === "right" || edge === "left";
  const dark = tone === "olive" || tone === "pine" || tone === "none";
  const size = band || (vertical ? "var(--pattern-band-md)" : "var(--pattern-strip)");
  /* cell = band / 2. Only computable when the band is an absolute length; a
     percentage band must pass `scale` itself (see PatternPanel.prompt.md). */
  const cell = scale || (/^[\d.]+(px|rem|em|pt|in|mm|cm)$/.test(String(size).trim()) ? `calc(${size} / 2)` : "var(--pattern-scale-2xs)");
  const op = intensity != null ? intensity : tone === "none" ? 0.5 : dark ? 0.4 : 0.9;
  const tint = ink || (dark ? "var(--pattern-ink-dark)" : "var(--pattern-ink-light)");
  const line = rule || (dark ? "var(--pattern-rule-dark)" : "var(--pattern-rule-light)");
  const pad = reserve
    ? { right: { paddingRight: size }, left: { paddingLeft: size }, top: { paddingTop: size }, bottom: { paddingBottom: size } }[edge]
    : null;
  const ruleSide = { right: "borderLeft", left: "borderRight", top: "borderBottom", bottom: "borderTop" }[edge];
  return (
    <div style={{ position: "relative", isolation: "isolate", background: BG[tone] || tone, color: dark && tone !== "none" ? "var(--text-on-inverse)" : "var(--text-primary)", borderRadius: radius, overflow: "hidden", ...style }} {...rest}>
      <span
        aria-hidden="true"
        style={{
          position: "absolute",
          boxSizing: "border-box",
          top: edge === "bottom" ? "auto" : 0,
          bottom: edge === "top" ? "auto" : 0,
          left: edge === "right" ? "auto" : 0,
          right: edge === "left" ? "auto" : 0,
          width: vertical ? size : "auto",
          height: vertical ? "auto" : size,
          [ruleSide]: `1px solid ${line}`,
          pointerEvents: "none",
          zIndex: 0,
        }}
      >
        <span
          style={{
            position: "absolute",
            inset: 0,
            backgroundColor: tint,
            WebkitMaskImage: `url(${base}/pattern-unit.png)`,
            maskImage: `url(${base}/pattern-unit.png)`,
            WebkitMaskRepeat: "repeat",
            maskRepeat: "repeat",
            WebkitMaskSize: `${cell} ${cell}`,
            maskSize: `${cell} ${cell}`,
            opacity: op,
          }}
        />
      </span>
      <div style={{ position: "relative", zIndex: 1, ...pad }}>{children}</div>
    </div>
  );
}
