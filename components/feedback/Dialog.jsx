import React from "react";

const CSS = `
.sh-dlg-scrim{position:fixed;inset:0;background:var(--surface-overlay);backdrop-filter:blur(3px);display:grid;place-items:center;padding:var(--space-7);z-index:1000;opacity:1;transition:opacity var(--duration-base) var(--ease-out)}
.sh-dlg-scrim[data-phase="enter"],.sh-dlg-scrim[data-phase="exit"]{opacity:0}
.sh-dlg{position:relative;width:100%;max-width:520px;background:var(--surface-card);border-radius:var(--radius-xl);box-shadow:var(--shadow-xl);padding:var(--space-9);font-family:var(--font-body);transform-origin:center;opacity:1;transform:scale(1);transition:opacity var(--duration-slow) var(--ease-out),transform var(--duration-slow) var(--ease-out)}
.sh-dlg-scrim[data-phase="enter"] .sh-dlg,.sh-dlg-scrim[data-phase="exit"] .sh-dlg{opacity:0;transform:scale(0.96)}
.sh-dlg-scrim[data-phase="exit"] .sh-dlg{transition-duration:var(--duration-fast)}
.sh-dlg[data-size="sm"]{max-width:400px}
.sh-dlg[data-size="lg"]{max-width:720px}
.sh-dlg-title{font:var(--type-h3);margin:0;margin-inline-end:var(--space-9);margin-block-end:var(--space-4)}
.sh-dlg-desc{color:var(--text-secondary);font-size:var(--text-sm);line-height:var(--leading-relaxed);margin:0}
.sh-dlg-foot{display:flex;justify-content:flex-end;gap:var(--space-4);margin-top:var(--space-8)}
.sh-dlg-x{position:absolute;top:var(--space-6);inset-inline-end:var(--space-6);width:36px;height:36px;display:grid;place-items:center;border:0;border-radius:var(--radius-pill);background:transparent;color:var(--text-secondary);font-size:18px;cursor:pointer;transition:var(--transition-control)}
@media (hover: hover) and (pointer: fine){
  .sh-dlg-x:hover{background:var(--surface-raised);color:var(--text-primary)}
}
@media (prefers-reduced-motion: reduce){
  .sh-dlg-scrim[data-phase="enter"] .sh-dlg,.sh-dlg-scrim[data-phase="exit"] .sh-dlg{transform:none}
}
`;

function ensure() {
  if (typeof document === "undefined" || document.getElementById("sh-dlg-css")) return;
  const el = document.createElement("style");
  el.id = "sh-dlg-css";
  el.textContent = CSS;
  document.head.appendChild(el);
}

let dlgSeq = 0;

const FOCUSABLE = 'a[href],button:not([disabled]),input:not([disabled]),select:not([disabled]),textarea:not([disabled]),[tabindex]:not([tabindex="-1"])';

export function Dialog({ open = false, title, description, size = "md", onClose, footer, children, ...rest }) {
  ensure();
  const box = React.useRef(null);
  const returnTo = React.useRef(null);
  const uid = React.useMemo(() => "sh-dlg-" + ++dlgSeq, []);
  const [shown, setShown] = React.useState(open);
  const [phase, setPhase] = React.useState(open ? "enter" : "exit");
  const shownRef = React.useRef(open);
  shownRef.current = shown;

  React.useEffect(() => {
    if (open) {
      setShown(true);
      setPhase("enter");
      let nested = 0;
      const id = requestAnimationFrame(() => {
        nested = requestAnimationFrame(() => setPhase("open"));
      });
      return () => {
        cancelAnimationFrame(id);
        cancelAnimationFrame(nested);
      };
    }
    if (!shownRef.current) return;
    setPhase("exit");
    const t = setTimeout(() => setShown(false), 180);
    return () => clearTimeout(t);
  }, [open]);

  React.useEffect(() => {
    if (!open) return;
    returnTo.current = document.activeElement;
    const node = box.current;
    if (node) {
      const first = node.querySelector(FOCUSABLE);
      (first || node).focus({ preventScroll: true });
    }
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e) => {
      if (e.key === "Escape" && onClose) { e.stopPropagation(); onClose(); return; }
      if (e.key !== "Tab" || !node) return;
      const items = Array.from(node.querySelectorAll(FOCUSABLE)).filter((el) => el.offsetParent !== null || el === node);
      if (!items.length) return;
      const first = items[0], last = items[items.length - 1];
      if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
      else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
    };
    document.addEventListener("keydown", onKey, true);
    return () => {
      document.removeEventListener("keydown", onKey, true);
      document.body.style.overflow = prevOverflow;
      const back = returnTo.current;
      if (back && back.focus) back.focus({ preventScroll: true });
    };
  }, [open, onClose]);

  if (!shown) return null;
  return (
    <div className="sh-dlg-scrim" data-phase={phase} onClick={onClose ? (e) => { if (e.target === e.currentTarget) onClose(); } : undefined}>
      <div
        ref={box}
        className="sh-dlg"
        role="dialog"
        aria-modal="true"
        tabIndex={-1}
        aria-labelledby={title ? uid + "-t" : undefined}
        aria-describedby={description ? uid + "-d" : undefined}
        data-size={size}
        {...rest}
      >
        {onClose ? <button type="button" className="sh-dlg-x" aria-label="Close" onClick={onClose}>×</button> : null}
        {title ? <h3 className="sh-dlg-title" id={uid + "-t"}>{title}</h3> : null}
        {description ? <p className="sh-dlg-desc" id={uid + "-d"}>{description}</p> : null}
        {children}
        {footer ? <div className="sh-dlg-foot">{footer}</div> : null}
      </div>
    </div>
  );
}
