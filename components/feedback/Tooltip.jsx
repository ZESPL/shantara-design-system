import React from "react";

const CSS = `
.sh-tip{position:relative;display:inline-flex}
.sh-tip-bubble{position:absolute;z-index:900;padding:var(--space-3) var(--space-4);background:var(--surface-inverse);color:var(--text-on-inverse);border-radius:var(--radius-xs);font-family:var(--font-body);font-size:var(--text-2xs);line-height:1.4;white-space:nowrap;pointer-events:none;opacity:0;transition:opacity 125ms var(--ease-out),transform 125ms var(--ease-out)}
.sh-tip[data-instant="true"] .sh-tip-bubble{transition-duration:0ms}
.sh-tip[data-open="true"] .sh-tip-bubble{opacity:1}
.sh-tip-bubble[data-side="top"]{bottom:calc(100% + 6px);left:50%;transform:translateX(-50%) translateY(4px) scale(0.97);transform-origin:bottom center}
.sh-tip[data-open="true"] .sh-tip-bubble[data-side="top"]{transform:translateX(-50%) translateY(0) scale(1)}
.sh-tip-bubble[data-side="bottom"]{top:calc(100% + 6px);left:50%;transform:translateX(-50%) translateY(-4px) scale(0.97);transform-origin:top center}
.sh-tip[data-open="true"] .sh-tip-bubble[data-side="bottom"]{transform:translateX(-50%) translateY(0) scale(1)}
.sh-tip-bubble[data-side="left"]{right:calc(100% + 6px);top:50%;transform:translateY(-50%) translateX(4px) scale(0.97);transform-origin:right center}
.sh-tip[data-open="true"] .sh-tip-bubble[data-side="left"]{transform:translateY(-50%) translateX(0) scale(1)}
.sh-tip-bubble[data-side="right"]{left:calc(100% + 6px);top:50%;transform:translateY(-50%) translateX(-4px) scale(0.97);transform-origin:left center}
.sh-tip[data-open="true"] .sh-tip-bubble[data-side="right"]{transform:translateY(-50%) translateX(0) scale(1)}
.sh-tip-bubble[data-side="start"]{inset-inline-end:calc(100% + 6px);top:50%;transform:translateY(-50%) scale(0.97);transform-origin:var(--tip-logical-origin, right center)}
.sh-tip[data-open="true"] .sh-tip-bubble[data-side="start"]{transform:translateY(-50%) scale(1)}
.sh-tip-bubble[data-side="end"]{inset-inline-start:calc(100% + 6px);top:50%;transform:translateY(-50%) scale(0.97);transform-origin:var(--tip-logical-origin, left center)}
.sh-tip[data-open="true"] .sh-tip-bubble[data-side="end"]{transform:translateY(-50%) scale(1)}
[dir="rtl"] .sh-tip-bubble[data-side="start"]{--tip-logical-origin:left center}
[dir="rtl"] .sh-tip-bubble[data-side="end"]{--tip-logical-origin:right center}
@media (prefers-reduced-motion: reduce){
  .sh-tip-bubble{transform:none !important}
}
`;

function ensure() {
  if (typeof document === "undefined" || document.getElementById("sh-tip-css")) return;
  const el = document.createElement("style");
  el.id = "sh-tip-css";
  el.textContent = CSS;
  document.head.appendChild(el);
}

let tipSeq = 0;
let lastTipAt = 0;
const TIP_RECENT_MS = 400;
const TIP_DELAY_MS = 280;

export function Tooltip({ label, side = "top", children, style, ...rest }) {
  ensure();
  const [open, setOpen] = React.useState(false);
  const [instant, setInstant] = React.useState(false);
  const uid = React.useMemo(() => "sh-tip-" + ++tipSeq, []);
  const delayRef = React.useRef(0);

  const show = () => {
    clearTimeout(delayRef.current);
    const now = Date.now();
    const skip = now - lastTipAt < TIP_RECENT_MS;
    setInstant(skip);
    if (skip) {
      setOpen(true);
      lastTipAt = now;
      return;
    }
    delayRef.current = setTimeout(() => {
      setOpen(true);
      lastTipAt = Date.now();
    }, TIP_DELAY_MS);
  };
  const hide = () => {
    clearTimeout(delayRef.current);
    if (open) lastTipAt = Date.now();
    setOpen(false);
  };

  React.useEffect(() => () => clearTimeout(delayRef.current), []);
  /* 1.4.13 Content on hover or focus: dismissible without moving the pointer. */
  React.useEffect(() => {
    if (!open) return;
    const onKey = (e) => { if (e.key === "Escape") hide(); };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);
  return (
    <span
      className="sh-tip"
      data-open={String(open)}
      data-instant={String(instant)}
      aria-describedby={uid}
      onMouseEnter={show}
      onMouseLeave={hide}
      onFocus={show}
      onBlur={hide}
      style={style}
      {...rest}
    >
      {children}
      <span className="sh-tip-bubble" id={uid} data-side={side} role="tooltip">{label}</span>
    </span>
  );
}
