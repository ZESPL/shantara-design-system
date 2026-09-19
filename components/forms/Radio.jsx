import React from "react";

const CSS = `
.sh-radio{display:inline-flex;align-items:flex-start;gap:var(--space-4);min-height:24px;font-family:var(--font-body);font-size:var(--text-sm);color:var(--text-primary);cursor:pointer;line-height:1.35}
.sh-radio input{position:absolute;opacity:0;width:0;height:0}
.sh-radio-dot{flex:0 0 auto;display:grid;place-items:center;width:20px;height:20px;margin-top:1px;background:var(--surface-card);border:var(--border-width-strong) solid var(--border-control);border-radius:var(--radius-pill);transition:var(--transition-control)}
.sh-radio:hover .sh-radio-dot{border-color:var(--border-strong)}
.sh-radio input:focus-visible + .sh-radio-dot{box-shadow:var(--ring-focus)}
.sh-radio input:checked + .sh-radio-dot{border-color:var(--surface-brand)}
.sh-radio-dot::after{content:"";width:10px;height:10px;border-radius:var(--radius-pill);background:var(--surface-brand);transform:scale(0);transition:transform var(--duration-fast) var(--ease-out)}
.sh-radio input:checked + .sh-radio-dot::after{transform:scale(1)}
.sh-radio input:disabled ~ *{opacity:.45}
.sh-radio-desc{display:block;color:var(--text-muted);font-size:var(--text-2xs);margin-top:2px}
.sh-radio-card{padding:var(--space-5);border:var(--border-width) solid var(--border-control);border-radius:var(--radius-md);background:var(--surface-card);width:100%}
.sh-radio-card:has(input:checked){border-color:var(--surface-brand);background:var(--surface-brand-soft)}
`;

function ensure() {
  if (typeof document === "undefined" || document.getElementById("sh-radio-css")) return;
  const el = document.createElement("style");
  el.id = "sh-radio-css";
  el.textContent = CSS;
  document.head.appendChild(el);
}

export function Radio({ label, description, card = false, style, ...rest }) {
  ensure();
  return (
    <label className={"sh-radio" + (card ? " sh-radio-card" : "")} style={style}>
      <input type="radio" {...rest} />
      <span className="sh-radio-dot" />
      <span>{label}{description ? <span className="sh-radio-desc">{description}</span> : null}</span>
    </label>
  );
}
