import React from "react";

const CSS = `
.sh-ta-wrap{display:flex;flex-direction:column;gap:var(--space-3);font-family:var(--font-body)}
.sh-ta{min-height:104px;padding:var(--space-5);background:var(--surface-card);border:var(--border-width) solid var(--border-control);border-radius:var(--radius-input);color:var(--text-primary);font-family:var(--font-body);font-size:var(--text-sm);line-height:var(--leading-normal);resize:vertical;outline:none;transition:var(--transition-control)}
.sh-ta:hover{border-color:var(--border-strong)}
.sh-ta:focus{border-color:var(--border-focus);box-shadow:0 0 0 3px var(--surface-brand-soft)}
.sh-ta::placeholder{color:var(--text-muted)}
.sh-ta[aria-invalid="true"]{border-color:var(--status-danger)}
.sh-ta:disabled{background:var(--surface-raised);opacity:.6}
.sh-ta-foot{display:flex;justify-content:space-between;gap:var(--space-4)}
`;

function ensure() {
  if (typeof document === "undefined" || document.getElementById("sh-ta-css")) return;
  const el = document.createElement("style");
  el.id = "sh-ta-css";
  el.textContent = CSS;
  document.head.appendChild(el);
}

export function Textarea({ label, hint, error, required, maxLength, value, id, style, ...rest }) {
  ensure();
  const fid = id || `sh-ta-${label ? label.replace(/\W+/g, "-").toLowerCase() : "field"}`;
  const count = typeof value === "string" ? value.length : null;
  return (
    <div className="sh-ta-wrap" style={style}>
      {label ? <label className="sh-field-label" htmlFor={fid}>{label}{required ? <span className="sh-field-req"> *</span> : null}</label> : null}
      <textarea id={fid} className="sh-ta" aria-invalid={error ? "true" : undefined} maxLength={maxLength} value={value} {...rest} />
      <span className="sh-ta-foot">
        {error ? <span className="sh-field-error">{error}</span> : <span className="sh-field-hint">{hint || ""}</span>}
        {maxLength && count != null ? <span className="sh-field-hint">{count}/{maxLength}</span> : null}
      </span>
    </div>
  );
}
