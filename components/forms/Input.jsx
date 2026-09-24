import React from "react";

/* Shared field chrome — identical in Input, Textarea and Select (one <style id="sh-field-css">). */
const FIELD_CSS = `
.sh-field{display:flex;flex-direction:column;gap:var(--space-3);min-width:0;font-family:var(--font-body)}
.sh-field-label{display:flex;align-items:baseline;gap:var(--space-2);font:var(--weight-medium) var(--text-sm)/1.3 var(--font-body);color:var(--text-primary)}
.sh-field-req{color:var(--text-brand);font-weight:var(--weight-regular)}
.sh-field-opt{color:var(--text-muted);font-weight:var(--weight-regular);font-size:var(--text-xs)}
.sh-field-msg{display:flex;align-items:flex-start;gap:var(--space-2);font:var(--weight-regular) var(--text-xs)/1.45 var(--font-body);color:var(--text-secondary)}
.sh-field-msg[data-kind="error"]{color:var(--status-danger);animation:sh-enter-up var(--duration-base) var(--ease-out)}
.sh-field-msg svg{flex:0 0 auto;margin-top:2px}
.sh-field-foot{display:flex;justify-content:space-between;align-items:flex-start;gap:var(--space-4)}
.sh-field-count{margin-inline-start:auto;font:var(--weight-regular) var(--text-xs)/1.45 var(--font-body);color:var(--text-muted);font-variant-numeric:tabular-nums}
.sh-ctl{--_bd:var(--border-control);--_ring:var(--surface-brand-soft);width:100%;min-width:0;background:var(--surface-card);border:var(--border-width) solid var(--_bd);border-radius:var(--radius-input);color:var(--text-primary);font:var(--weight-regular) var(--text-base)/1.4 var(--font-body);transition:var(--transition-control)}
.sh-ctl[data-invalid="true"]{--_bd:var(--status-danger);--_ring:var(--status-danger-soft)}
@media (hover: hover) and (pointer: fine){
  .sh-ctl:not([data-disabled="true"]):not([data-invalid="true"]):hover{--_bd:var(--border-strong)}
}
.sh-ctl:focus-within,.sh-ctl:focus{outline:none;--_bd:var(--border-focus);box-shadow:0 0 0 3px var(--_ring)}
.sh-ctl[data-invalid="true"]:focus-within,.sh-ctl[data-invalid="true"]:focus{--_bd:var(--status-danger)}
.sh-ctl[data-disabled="true"],.sh-ctl:disabled{background:var(--surface-raised);--_bd:var(--border-subtle);color:var(--text-muted);cursor:not-allowed}
.sh-ctl ::placeholder,.sh-ctl::placeholder{color:var(--text-muted);opacity:1}
`;

function ensureField() {
  if (typeof document === "undefined" || document.getElementById("sh-field-css")) return;
  const el = document.createElement("style");
  el.id = "sh-field-css";
  el.textContent = FIELD_CSS;
  document.head.appendChild(el);
}

const ALERT = (
  <svg width="14" height="14" viewBox="0 0 16 16" aria-hidden="true"><circle cx="8" cy="8" r="6.75" fill="none" stroke="currentColor" strokeWidth="1.5" /><path d="M8 4.75v3.75" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" /><circle cx="8" cy="11.1" r="0.9" fill="currentColor" /></svg>
);

function FieldLabel({ htmlFor, label, required, optional }) {
  if (!label) return null;
  return (
    <label className="sh-field-label" htmlFor={htmlFor}>
      <span>{label}</span>
      {required ? <span className="sh-field-req" aria-hidden="true">*</span> : null}
      {!required && optional ? <span className="sh-field-opt">{typeof optional === "string" ? optional : "Optional"}</span> : null}
    </label>
  );
}

function FieldMessage({ id, error, hint }) {
  if (error) return <span className="sh-field-msg" data-kind="error" id={id}>{ALERT}<span>{error}</span></span>;
  if (hint) return <span className="sh-field-msg" id={id}>{hint}</span>;
  return null;
}

/* Input — 52px, 2px radius, 17px text (never zooms on iOS), calm 3px brand-soft focus halo. */
const CSS = `
.sh-input-wrap{display:flex;align-items:center;gap:var(--space-3);height:var(--control-lg);padding:0 var(--space-5)}
.sh-input-wrap[data-size="sm"]{height:var(--control-md)}
.sh-input-wrap[data-size="lg"]{height:var(--control-xl)}
.sh-input{flex:1;min-width:0;height:100%;padding:0;border:0;background:transparent;color:inherit;font:inherit;outline:none}
.sh-input:disabled{cursor:not-allowed}
.sh-input:focus-visible{box-shadow:none}
.sh-input-affix{display:inline-flex;align-items:center;color:var(--text-muted);font-size:var(--text-sm)}
`;

function ensure() {
  ensureField();
  if (typeof document === "undefined" || document.getElementById("sh-input-css")) return;
  const el = document.createElement("style");
  el.id = "sh-input-css";
  el.textContent = CSS;
  document.head.appendChild(el);
}

export function Input({ label, hint, error, required, optional, size = "md", startIcon, endIcon, id, className, style, ...rest }) {
  ensure();
  const auto = React.useId();
  const fid = id || "sh-in" + auto.replace(/:/g, "");
  const mid = fid + "-msg";
  return (
    <div className={"sh-field" + (className ? " " + className : "")} data-ds-id="forms/Input" style={style}>
      <FieldLabel htmlFor={fid} label={label} required={required} optional={optional} />
      <span className="sh-ctl sh-input-wrap" data-size={size} data-invalid={String(Boolean(error))} data-disabled={String(Boolean(rest.disabled))}>
        {startIcon ? <span className="sh-input-affix">{startIcon}</span> : null}
        <input id={fid} className="sh-input" required={required} aria-invalid={error ? "true" : undefined} aria-describedby={error || hint ? mid : undefined} {...rest} />
        {endIcon ? <span className="sh-input-affix">{endIcon}</span> : null}
      </span>
      <FieldMessage id={mid} error={error} hint={hint} />
    </div>
  );
}
