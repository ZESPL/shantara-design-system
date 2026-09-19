import React from "react";

const CSS = `
.sh-check{display:inline-flex;align-items:flex-start;gap:var(--space-4);min-height:24px;font-family:var(--font-body);font-size:var(--text-sm);color:var(--text-primary);cursor:pointer;line-height:1.35}
.sh-check input{position:absolute;opacity:0;width:0;height:0}
.sh-check-box{flex:0 0 auto;display:grid;place-items:center;width:20px;height:20px;margin-top:1px;background:var(--surface-card);border:var(--border-width-strong) solid var(--border-control);border-radius:var(--radius-xs);transition:var(--transition-control)}
.sh-check:hover .sh-check-box{border-color:var(--border-strong)}
.sh-check input:focus-visible + .sh-check-box{box-shadow:var(--ring-focus)}
.sh-check input:checked + .sh-check-box{background:var(--surface-brand);border-color:var(--surface-brand)}
.sh-check input:disabled ~ *{opacity:.45}
.sh-check-tick{width:11px;height:6px;border-left:1.5px solid var(--color-merino);border-bottom:1.5px solid var(--color-merino);transform:translateY(-1px) rotate(-45deg);opacity:0;transition:opacity var(--duration-fast) var(--ease-standard)}
.sh-check input:checked + .sh-check-box .sh-check-tick{opacity:1}
.sh-check-dash{width:10px;height:1.5px;background:var(--color-merino);opacity:0}
.sh-check input:indeterminate + .sh-check-box{background:var(--surface-brand);border-color:var(--surface-brand)}
.sh-check input:indeterminate + .sh-check-box .sh-check-dash{opacity:1}
.sh-check input:indeterminate + .sh-check-box .sh-check-tick{opacity:0}
.sh-check-desc{display:block;color:var(--text-muted);font-size:var(--text-2xs);margin-top:2px}
`;

function ensure() {
  if (typeof document === "undefined" || document.getElementById("sh-check-css")) return;
  const el = document.createElement("style");
  el.id = "sh-check-css";
  el.textContent = CSS;
  document.head.appendChild(el);
}

export function Checkbox({ label, description, indeterminate = false, style, ...rest }) {
  ensure();
  const ref = React.useRef(null);
  React.useEffect(() => { if (ref.current) ref.current.indeterminate = indeterminate; }, [indeterminate]);
  return (
    <label className="sh-check" style={style}>
      <input ref={ref} type="checkbox" {...rest} />
      <span className="sh-check-box"><span className="sh-check-tick" /><span className="sh-check-dash" /></span>
      <span>{label}{description ? <span className="sh-check-desc">{description}</span> : null}</span>
    </label>
  );
}
