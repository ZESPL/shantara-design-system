import React from "react";

const CSS = `
.sh-field{display:flex;flex-direction:column;gap:var(--space-3);font-family:var(--font-body)}
.sh-field-label{font:var(--type-label);letter-spacing:var(--tracking-wide);color:var(--text-secondary)}
.sh-field-req{color:var(--status-danger)}
.sh-field-hint{font-size:var(--text-xs);color:var(--text-muted)}
.sh-field-error{font-size:var(--text-xs);color:var(--status-danger);animation:sh-enter-up var(--duration-base) var(--ease-out)}
.sh-input-wrap{display:flex;align-items:center;gap:var(--space-3);height:var(--control-md);padding:0 var(--space-5);background:var(--surface-card);border:var(--border-width) solid var(--border-control);border-radius:var(--radius-input);color:var(--text-primary);transition:var(--transition-control)}
.sh-input-wrap:focus-within{border-color:var(--border-focus);box-shadow:0 0 0 3px var(--surface-brand-soft)}
@media (hover: hover) and (pointer: fine){
  .sh-input-wrap:hover{border-color:var(--border-strong)}
}
.sh-input-wrap[data-invalid="true"]{border-color:var(--status-danger)}
.sh-input-wrap[data-size="lg"]{height:var(--control-lg);padding:0 var(--space-6)}
.sh-input-wrap[data-size="sm"]{height:var(--control-sm)}
.sh-input-wrap[data-disabled="true"]{background:var(--surface-raised);opacity:.6}
.sh-input{flex:1;min-width:0;border:0;background:transparent;color:inherit;font-family:var(--font-body);font-size:var(--text-sm);outline:none}
.sh-input::placeholder{color:var(--text-muted)}
.sh-input-affix{color:var(--text-muted);display:inline-flex;align-items:center;font-size:var(--text-xs)}
`;

function ensure() {
  if (typeof document === "undefined" || document.getElementById("sh-input-css")) return;
  const el = document.createElement("style");
  el.id = "sh-input-css";
  el.textContent = CSS;
  document.head.appendChild(el);
}

export function Input({ label, hint, error, required, size = "md", startIcon, endIcon, id, style, ...rest }) {
  ensure();
  const fid = id || `sh-in-${label ? label.replace(/\W+/g, "-").toLowerCase() : "field"}`;
  return (
    <div className="sh-field" style={style}>
      {label ? <label className="sh-field-label" htmlFor={fid}>{label}{required ? <span className="sh-field-req"> *</span> : null}</label> : null}
      <span className="sh-input-wrap" data-size={size} data-invalid={String(Boolean(error))} data-disabled={String(Boolean(rest.disabled))}>
        {startIcon ? <span className="sh-input-affix">{startIcon}</span> : null}
        <input id={fid} className="sh-input" aria-invalid={error ? "true" : undefined} {...rest} />
        {endIcon ? <span className="sh-input-affix">{endIcon}</span> : null}
      </span>
      {error ? <span className="sh-field-error">{error}</span> : hint ? <span className="sh-field-hint">{hint}</span> : null}
    </div>
  );
}
