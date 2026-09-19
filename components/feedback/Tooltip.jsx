import React from "react";

const CSS = `
.sh-tip{position:relative;display:inline-flex}
.sh-tip-bubble{position:absolute;z-index:900;padding:var(--space-3) var(--space-4);background:var(--surface-inverse);color:var(--text-on-inverse);border-radius:var(--radius-xs);font-family:var(--font-body);font-size:var(--text-2xs);line-height:1.4;white-space:nowrap;pointer-events:none;opacity:0;transition:opacity var(--duration-fast) var(--ease-standard)}
.sh-tip[data-open="true"] .sh-tip-bubble{opacity:1}
.sh-tip-bubble[data-side="top"]{bottom:calc(100% + 6px);left:50%;transform:translateX(-50%)}
.sh-tip-bubble[data-side="bottom"]{top:calc(100% + 6px);left:50%;transform:translateX(-50%)}
.sh-tip-bubble[data-side="left"]{right:calc(100% + 6px);top:50%;transform:translateY(-50%)}
.sh-tip-bubble[data-side="right"]{left:calc(100% + 6px);top:50%;transform:translateY(-50%)}
`;

function ensure() {
  if (typeof document === "undefined" || document.getElementById("sh-tip-css")) return;
  const el = document.createElement("style");
  el.id = "sh-tip-css";
  el.textContent = CSS;
  document.head.appendChild(el);
}

let tipSeq = 0;

export function Tooltip({ label, side = "top", children, style, ...rest }) {
  ensure();
  const [open, setOpen] = React.useState(false);
  const uid = React.useMemo(() => "sh-tip-" + ++tipSeq, []);
  /* 1.4.13 Content on hover or focus: dismissible without moving the pointer. */
  React.useEffect(() => {
    if (!open) return;
    const onKey = (e) => { if (e.key === "Escape") setOpen(false); };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);
  return (
    <span
      className="sh-tip"
      data-open={String(open)}
      aria-describedby={uid}
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      onFocus={() => setOpen(true)}
      onBlur={() => setOpen(false)}
      style={style}
      {...rest}
    >
      {children}
      <span className="sh-tip-bubble" id={uid} data-side={side} role="tooltip">{label}</span>
    </span>
  );
}
