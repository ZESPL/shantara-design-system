import React from "react";

const CSS = `
.sh-dlg-scrim{position:fixed;inset:0;z-index:1000;display:grid;place-items:center;padding:var(--space-5);background:var(--surface-overlay);opacity:1;overflow-y:auto;overscroll-behavior:contain;transition:opacity var(--duration-base) var(--ease-out)}
.sh-dlg-scrim[data-phase="enter"],.sh-dlg-scrim[data-phase="exit"]{opacity:0}
.sh-dlg{position:relative;width:100%;max-width:560px;max-height:calc(100dvh - 2 * var(--space-5));overflow-y:auto;box-sizing:border-box;padding:clamp(28px, 2.2vw + 20px, 48px);background:var(--color-merino);color:var(--text-primary);border-radius:var(--radius-card);box-shadow:var(--shadow-xl);font-family:var(--font-body);outline:none;opacity:1;transform:none;transition:opacity var(--duration-slow) var(--ease-out),transform var(--duration-slow) var(--ease-out)}
.sh-dlg-scrim[data-phase="enter"] .sh-dlg,.sh-dlg-scrim[data-phase="exit"] .sh-dlg{opacity:0;transform:translateY(8px) scale(0.98)}
.sh-dlg-scrim[data-phase="exit"] .sh-dlg{transition-duration:var(--duration-fast)}
.sh-dlg[data-size="sm"]{max-width:440px}
.sh-dlg[data-size="lg"]{max-width:760px}
.sh-dlg-title{margin:0;padding-inline-end:var(--space-9);font:var(--weight-light) var(--text-2xl)/var(--leading-snug) var(--font-display);color:var(--text-primary);text-wrap:balance}
.sh-dlg-desc{margin:var(--space-5) 0 0;max-width:none;font:var(--type-body);color:var(--text-secondary)}
.sh-dlg-body{margin-top:var(--space-6)}
.sh-dlg-foot{display:flex;flex-wrap:wrap;justify-content:flex-end;align-items:center;gap:var(--space-4);margin-top:var(--space-9)}
.sh-dlg-x{position:absolute;top:var(--space-4);inset-inline-end:var(--space-4);width:var(--tap-min);height:var(--tap-min);display:grid;place-items:center;padding:0;border:0;border-radius:var(--radius-xs);background:transparent;color:var(--text-secondary);cursor:pointer;transition:var(--transition-control)}
.sh-dlg-x svg{display:block;width:20px;height:20px}
.sh-dlg-x:focus-visible{outline:none;box-shadow:var(--ring-focus)}
@media (hover: hover) and (pointer: fine){
  .sh-dlg-x:hover{background:color-mix(in srgb, var(--text-primary) 6%, transparent);color:var(--text-primary)}
}
@media (max-width:519.98px){
  .sh-dlg-foot{flex-direction:column-reverse;align-items:stretch}
  .sh-dlg-foot>*{width:100%}
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

const X_ICON = <svg viewBox="0 0 20 20" aria-hidden="true"><path d="M5 5l10 10M15 5L5 15" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" /></svg>;

const FOCUSABLE = 'a[href],button:not([disabled]),input:not([disabled]),select:not([disabled]),textarea:not([disabled]),[tabindex]:not([tabindex="-1"])';

export function Dialog({ open = false, title, description, size = "md", onClose, footer, children, closeLabel = "Close", ...rest }) {
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
    /* Focus the panel itself (no ring on a control at open); Tab then enters the controls. */
    if (node) node.focus({ preventScroll: true });
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e) => {
      if (e.key === "Escape" && onClose) { e.stopPropagation(); onClose(); return; }
      if (e.key !== "Tab" || !node) return;
      const items = Array.from(node.querySelectorAll(FOCUSABLE)).filter((el) => el.offsetParent !== null || el === node);
      if (!items.length) return;
      const first = items[0], last = items[items.length - 1];
      if (document.activeElement === node) { e.preventDefault(); (e.shiftKey ? last : first).focus(); return; }
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
    <div className="sh-dlg-scrim" data-ds-id="feedback/Dialog" data-phase={phase} onClick={onClose ? (e) => { if (e.target === e.currentTarget) onClose(); } : undefined}>
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
        {onClose ? <button type="button" className="sh-dlg-x" aria-label={closeLabel} onClick={onClose}>{X_ICON}</button> : null}
        {title ? <h2 className="sh-dlg-title" id={uid + "-t"}>{title}</h2> : null}
        {description ? <p className="sh-dlg-desc" id={uid + "-d"}>{description}</p> : null}
        {children ? <div className="sh-dlg-body">{children}</div> : null}
        {footer ? <div className="sh-dlg-foot">{footer}</div> : null}
      </div>
    </div>
  );
}
