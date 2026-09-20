import React from "react";

const CSS = `
.sh-switch{display:inline-flex;align-items:center;gap:var(--space-4);font-family:var(--font-body);font-size:var(--text-sm);color:var(--text-primary);cursor:pointer}
.sh-switch input{position:absolute;opacity:0;width:0;height:0}
.sh-switch-track{position:relative;flex:0 0 auto;width:44px;height:26px;border-radius:var(--radius-pill);background:var(--color-cotton-seed);transition:background-color var(--duration-base) var(--ease-out),box-shadow var(--duration-base) var(--ease-out)}
.sh-switch-knob{position:absolute;inset-block-start:3px;inset-inline-start:3px;width:20px;height:20px;border-radius:var(--radius-pill);background:var(--color-white);box-shadow:var(--shadow-sm);transition:transform var(--duration-base) var(--ease-out)}
.sh-switch input:checked + .sh-switch-track{background:var(--surface-brand)}
@media (hover: hover) and (pointer: fine){
  .sh-switch:hover input:not(:checked):not(:disabled) + .sh-switch-track{background:var(--color-line-600)}
}
.sh-switch input:checked + .sh-switch-track .sh-switch-knob{transform:translateX(18px)}
[dir="rtl"] .sh-switch input:checked + .sh-switch-track .sh-switch-knob{transform:translateX(-18px)}
.sh-switch input:focus-visible + .sh-switch-track{box-shadow:var(--ring-focus)}
.sh-switch input:disabled ~ *{opacity:.45}
.sh-switch[data-reverse="true"]{flex-direction:row-reverse;justify-content:space-between;width:100%}
`;

function ensure() {
  if (typeof document === "undefined" || document.getElementById("sh-switch-css")) return;
  const el = document.createElement("style");
  el.id = "sh-switch-css";
  el.textContent = CSS;
  document.head.appendChild(el);
}

export function Switch({ label, labelFirst = false, style, ...rest }) {
  ensure();
  return (
    <label className="sh-switch" data-reverse={String(labelFirst)} style={style}>
      <input type="checkbox" role="switch" {...rest} />
      <span className="sh-switch-track"><span className="sh-switch-knob" /></span>
      {label ? <span>{label}</span> : null}
    </label>
  );
}
