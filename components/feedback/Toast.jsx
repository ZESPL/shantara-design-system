import React from "react";

const CSS = `
.sh-toast{display:flex;align-items:flex-start;gap:var(--space-4);min-width:300px;max-width:420px;padding:var(--space-5) var(--space-6);background:var(--surface-inverse);color:var(--text-on-inverse);border-radius:var(--radius-md);box-shadow:var(--shadow-lg);font-family:var(--font-body);font-size:var(--text-sm);opacity:1;transform:translateY(0);transition:opacity var(--duration-slow) var(--ease-standard),transform var(--duration-slow) var(--ease-standard)}
@starting-style{.sh-toast{opacity:0;transform:translateY(100%)}}
.sh-toast[data-tone="success"]{background:var(--color-himalaya)}
.sh-toast[data-tone="warning"]{background:var(--color-gold-crayola);color:var(--text-on-accent)}
.sh-toast[data-tone="danger"]{background:var(--status-danger);color:var(--color-merino)}
.sh-toast-body{flex:1}
.sh-toast-title{font-weight:var(--weight-medium)}
.sh-toast-msg{opacity:.82;margin-top:2px}
.sh-toast-x{border:0;background:transparent;color:inherit;opacity:.6;font-size:16px;cursor:pointer;padding:0 2px;transition:opacity var(--duration-fast) var(--ease-standard)}
@media (hover: hover) and (pointer: fine){
  .sh-toast-x:hover{opacity:1}
}
.sh-toast-region{position:fixed;bottom:var(--space-8);left:50%;transform:translateX(-50%);display:flex;flex-direction:column;gap:var(--space-4);z-index:1100;padding-bottom:env(safe-area-inset-bottom, 0px)}
@media (prefers-reduced-motion: reduce){
  .sh-toast{transform:none}
  @starting-style{.sh-toast{transform:none}}
}
`;

function ensure() {
  if (typeof document === "undefined" || document.getElementById("sh-toast-css")) return;
  const el = document.createElement("style");
  el.id = "sh-toast-css";
  el.textContent = CSS;
  document.head.appendChild(el);
}

export function Toast({ tone = "neutral", title, message, icon, onClose, fixed = false, style, ...rest }) {
  ensure();
  const node = (
    <div className="sh-toast" data-tone={tone} role="status" style={style} {...rest}>
      {icon}
      <div className="sh-toast-body">
        {title ? <div className="sh-toast-title">{title}</div> : null}
        {message ? <div className="sh-toast-msg">{message}</div> : null}
      </div>
      {onClose ? <button type="button" className="sh-toast-x" aria-label="Dismiss" onClick={onClose}>×</button> : null}
    </div>
  );
  return fixed ? <div className="sh-toast-region">{node}</div> : node;
}
