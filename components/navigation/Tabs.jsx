import React from "react";

const CSS = `
.sh-tabs{display:flex;align-items:center;gap:var(--space-7);border-bottom:var(--border-width) solid var(--border-subtle);font-family:var(--font-body);overflow-x:auto;overscroll-behavior-x:contain;scrollbar-width:none;-webkit-overflow-scrolling:touch}
.sh-tabs::-webkit-scrollbar{display:none}
@media (max-width:759.98px){.sh-tabs{gap:var(--space-6);margin-inline:calc(-1 * var(--layout-gutter));padding-inline:var(--layout-gutter);scroll-padding-inline:var(--layout-gutter)}}
.sh-tab{position:relative;flex:0 0 auto;white-space:nowrap;appearance:none;border:0;background:transparent;padding:var(--space-4) 0;min-height:var(--tap-min);font-family:inherit;font-size:var(--text-sm);font-weight:var(--weight-regular);color:var(--text-secondary);cursor:pointer;transition:color var(--duration-fast) var(--ease-standard),background-color var(--duration-fast) var(--ease-standard),box-shadow var(--duration-fast) var(--ease-standard),transform var(--duration-fast) var(--ease-standard)}
.sh-tab:active{transform:scale(var(--press-scale))}
@media (hover: hover) and (pointer: fine){
  .sh-tab:hover{color:var(--text-primary)}
}
.sh-tab:focus-visible{outline:none;box-shadow:var(--ring-focus);border-radius:var(--radius-xs)}
.sh-tab::after{content:"";position:absolute;inset-inline:0;bottom:-1px;height:1.5px;background:var(--surface-brand);transform:scaleX(0);transform-origin:left center;transition:transform var(--duration-base) var(--ease-out)}
[dir="rtl"] .sh-tab::after{transform-origin:right center}
.sh-tab[aria-selected="true"]{color:var(--text-primary);font-weight:var(--weight-medium)}
.sh-tab[aria-selected="true"]::after{transform:scaleX(1)}
.sh-tabs[data-variant="pill"]{border-bottom:0;gap:var(--space-2);background:var(--surface-raised);padding:var(--space-2);border-radius:var(--radius-pill);display:inline-flex;max-width:100%;margin-inline:0}
.sh-tabs[data-variant="pill"] .sh-tab{padding:0 var(--space-6);height:34px;border-radius:var(--radius-pill)}
.sh-tabs[data-variant="pill"] .sh-tab::after{display:none}
.sh-tabs[data-variant="pill"] .sh-tab[aria-selected="true"]{background:var(--surface-card);box-shadow:var(--shadow-sm)}
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
    const rtl = list.current && getComputedStyle(list.current).direction === "rtl";
    if (e.key === "ArrowDown" || (rtl ? e.key === "ArrowLeft" : e.key === "ArrowRight")) next = (i + 1) % keys.length;
    else if (e.key === "ArrowUp" || (rtl ? e.key === "ArrowRight" : e.key === "ArrowLeft")) next = (i - 1 + keys.length) % keys.length;
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
            {l}{typeof it === "object" && it.count != null ? <span style={{ color: "var(--text-muted)", marginInlineStart: "var(--space-3)" }}>{it.count}</span> : null}
          </button>
        );
      })}
    </div>
  );
}
