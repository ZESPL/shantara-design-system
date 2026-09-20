import React from "react";

const CSS = `
@keyframes sh-breathe{0%,100%{transform:scale(0.82);opacity:.45}50%{transform:scale(1);opacity:1}}
.sh-spinner{display:inline-grid;place-items:center}
.sh-spinner span{display:block;border-radius:var(--radius-pill);background:currentColor;animation:sh-breathe var(--duration-ambient) var(--ease-breath) infinite}
.sh-spinner-row{display:inline-flex;align-items:center;gap:0.4em}
.sh-spinner-row span:nth-child(2){animation-delay:180ms}
.sh-spinner-row span:nth-child(3){animation-delay:360ms}
@media (prefers-reduced-motion: reduce){.sh-spinner span{animation:none;opacity:.7;transform:none}}
`;

function ensure() {
  if (typeof document === "undefined" || document.getElementById("sh-spinner-css")) return;
  const el = document.createElement("style");
  el.id = "sh-spinner-css";
  el.textContent = CSS;
  document.head.appendChild(el);
}

export function Spinner({ size = 8, color = "var(--text-brand)", label = "Loading", style, ...rest }) {
  ensure();
  const px = size + "px";
  return (
    <span className="sh-spinner" role="status" aria-label={label} style={{ color, ...style }} {...rest}>
      <span className="sh-spinner-row" style={{ fontSize: px }}>
        <span style={{ width: px, height: px }} />
        <span style={{ width: px, height: px }} />
        <span style={{ width: px, height: px }} />
      </span>
    </span>
  );
}
