import React from "react";

const CSS = `
.sh-tabs{display:flex;align-items:center;gap:var(--space-7);border-bottom:var(--border-width) solid var(--border-subtle);font-family:var(--font-body)}
.sh-tab{position:relative;appearance:none;border:0;background:transparent;padding:var(--space-4) 0;min-height:32px;font-size:var(--text-sm);font-weight:var(--weight-regular);color:var(--text-secondary);cursor:pointer;transition:color var(--duration-fast) var(--ease-standard)}
.sh-tab:hover{color:var(--text-primary)}
.sh-tab:focus-visible{outline:none;box-shadow:var(--ring-focus);border-radius:var(--radius-xs)}
.sh-tab[aria-selected="true"]{color:var(--text-primary);font-weight:var(--weight-medium)}
.sh-tab[aria-selected="true"]::after{content:"";position:absolute;left:0;right:0;bottom:-1px;height:1.5px;background:var(--surface-brand)}
.sh-tabs[data-variant="pill"]{border-bottom:0;gap:var(--space-2);background:var(--surface-raised);padding:var(--space-2);border-radius:var(--radius-pill);display:inline-flex}
.sh-tabs[data-variant="pill"] .sh-tab{padding:0 var(--space-6);height:34px;border-radius:var(--radius-pill)}
.sh-tabs[data-variant="pill"] .sh-tab[aria-selected="true"]{background:var(--surface-card);box-shadow:var(--shadow-sm)}
.sh-tabs[data-variant="pill"] .sh-tab[aria-selected="true"]::after{display:none}
`;

function ensure() {
  if (typeof document === "undefined" || document.getElementById("sh-tabs-css")) return;
  const el = document.createElement("style");
  el.id = "sh-tabs-css";
  el.textContent = CSS;
  document.head.appendChild(el);
}

export function Tabs({ items = [], value, onChange, variant = "underline", style, ...rest }) {
  ensure();
  const [internal, setInternal] = React.useState(value != null ? value : (items[0] && (items[0].value || items[0])) || "");
  const active = value != null ? value : internal;
  const pick = (v) => { setInternal(v); if (onChange) onChange(v); };
  const list = React.useRef(null);
  const keys = items.map((it) => (typeof it === "string" ? it : it.value));
  /* ARIA tablist keyboard contract: arrows move and select, Home/End jump to the ends.
     Only the selected tab is in the tab order (roving tabindex). */
  const onKeyDown = (e) => {
    const i = keys.indexOf(active);
    let next = null;
    if (e.key === "ArrowRight" || e.key === "ArrowDown") next = (i + 1) % keys.length;
    else if (e.key === "ArrowLeft" || e.key === "ArrowUp") next = (i - 1 + keys.length) % keys.length;
    else if (e.key === "Home") next = 0;
    else if (e.key === "End") next = keys.length - 1;
    if (next == null) return;
    e.preventDefault();
    pick(keys[next]);
    const btns = list.current ? list.current.querySelectorAll('[role="tab"]') : [];
    if (btns[next]) btns[next].focus();
  };
  return (
    <div ref={list} className="sh-tabs" data-variant={variant} role="tablist" onKeyDown={onKeyDown} style={style} {...rest}>
      {items.map((it) => {
        const v = typeof it === "string" ? it : it.value;
        const l = typeof it === "string" ? it : it.label;
        const on = active === v;
        return (
          <button key={v} type="button" role="tab" className="sh-tab" aria-selected={on} tabIndex={on ? 0 : -1} onClick={() => pick(v)}>
            {l}{typeof it === "object" && it.count != null ? <span style={{ color: "var(--text-muted)", marginLeft: "var(--space-3)" }}>{it.count}</span> : null}
          </button>
        );
      })}
    </div>
  );
}
