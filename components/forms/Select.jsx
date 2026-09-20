import React from "react";

const CSS = `
.sh-sel-wrap{display:flex;flex-direction:column;gap:var(--space-3);font-family:var(--font-body)}
.sh-sel-box{position:relative;display:flex;align-items:center}
.sh-sel{appearance:none;width:100%;height:var(--control-md);padding-block:0;padding-inline:var(--space-5) var(--space-9);background:var(--surface-card);border:var(--border-width) solid var(--border-control);border-radius:var(--radius-input);color:var(--text-primary);font-family:var(--font-body);font-size:var(--text-sm);outline:none;cursor:pointer;transition:var(--transition-control)}
.sh-sel:focus{border-color:var(--border-focus);box-shadow:0 0 0 3px var(--surface-brand-soft)}
@media (hover: hover) and (pointer: fine){
  .sh-sel:hover{border-color:var(--border-strong)}
}
.sh-sel[data-size="lg"]{height:var(--control-lg)}
.sh-sel[data-size="sm"]{height:var(--control-sm)}
.sh-sel:disabled{background:var(--surface-raised);opacity:.6;cursor:not-allowed}
.sh-sel-caret{position:absolute;inset-inline-end:var(--space-5);width:8px;height:8px;border-inline-end:1.5px solid var(--text-secondary);border-bottom:1.5px solid var(--text-secondary);transform:translateY(-2px) rotate(45deg);pointer-events:none;transition:border-color var(--duration-fast) var(--ease-standard),transform var(--duration-fast) var(--ease-out)}
.sh-sel-box:focus-within .sh-sel-caret{border-color:var(--text-brand);transform:translateY(1px) rotate(45deg)}
`;

function ensure() {
  if (typeof document === "undefined" || document.getElementById("sh-sel-css")) return;
  const el = document.createElement("style");
  el.id = "sh-sel-css";
  el.textContent = CSS;
  document.head.appendChild(el);
}

export function Select({ label, hint, error, required, size = "md", options = [], placeholder, children, id, style, ...rest }) {
  ensure();
  const fid = id || `sh-sel-${label ? label.replace(/\W+/g, "-").toLowerCase() : "field"}`;
  return (
    <div className="sh-sel-wrap" style={style}>
      {label ? <label className="sh-field-label" htmlFor={fid}>{label}{required ? <span className="sh-field-req"> *</span> : null}</label> : null}
      <span className="sh-sel-box">
        <select id={fid} className="sh-sel" data-size={size} aria-invalid={error ? "true" : undefined} {...rest}>
          {placeholder ? <option value="">{placeholder}</option> : null}
          {options.map((o) => {
            const v = typeof o === "string" ? o : o.value;
            const l = typeof o === "string" ? o : o.label;
            return <option key={v} value={v}>{l}</option>;
          })}
          {children}
        </select>
        <span className="sh-sel-caret" />
      </span>
      {error ? <span className="sh-field-error">{error}</span> : hint ? <span className="sh-field-hint">{hint}</span> : null}
    </div>
  );
}
