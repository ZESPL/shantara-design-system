import React from "react";

const CSS = `
.sh-acc{border-top:var(--border-width) solid var(--border-subtle);font-family:var(--font-body)}
.sh-acc-item{border-bottom:var(--border-width) solid var(--border-subtle)}
.sh-acc-btn{display:flex;align-items:center;justify-content:space-between;gap:var(--space-5);width:100%;padding:var(--space-6) 0;border:0;background:transparent;text-align:start;font:var(--type-h4);font-size:var(--text-lg);color:var(--text-primary);cursor:pointer;transition:color var(--duration-fast) var(--ease-standard)}
.sh-acc-btn:focus-visible{outline:none;box-shadow:var(--ring-focus);border-radius:var(--radius-xs)}
@media (hover: hover) and (pointer: fine){
  .sh-acc-btn:hover{color:var(--text-brand)}
}
.sh-acc-sign{position:relative;flex:0 0 auto;width:14px;height:14px}
.sh-acc-sign::before,.sh-acc-sign::after{content:"";position:absolute;background:var(--text-secondary);transition:transform var(--duration-base) var(--ease-out), opacity var(--duration-base) var(--ease-out)}
.sh-acc-sign::before{top:6px;left:0;width:14px;height:1.5px}
.sh-acc-sign::after{left:6px;top:0;width:1.5px;height:14px}
.sh-acc-item[data-open="true"] .sh-acc-sign::after{transform:rotate(90deg);opacity:0}
.sh-acc-panel{display:grid;grid-template-rows:0fr;transition:grid-template-rows var(--duration-base) var(--ease-out)}
.sh-acc-item[data-open="true"] .sh-acc-panel{grid-template-rows:1fr}
.sh-acc-clip{overflow:hidden;min-height:0}
.sh-acc-inner{padding-block:0 var(--space-7);padding-inline:0 var(--space-9);color:var(--text-secondary);font-size:var(--text-sm);line-height:var(--leading-relaxed)}
`;

function ensure() {
  if (typeof document === "undefined" || document.getElementById("sh-acc-css")) return;
  const el = document.createElement("style");
  el.id = "sh-acc-css";
  el.textContent = CSS;
  document.head.appendChild(el);
}

let accSeq = 0;

export function Accordion({ items = [], defaultOpen = 0, allowMultiple = false, style, ...rest }) {
  ensure();
  const [open, setOpen] = React.useState(defaultOpen == null ? [] : [defaultOpen]);
  const uid = React.useMemo(() => "sh-acc-" + ++accSeq, []);
  const toggle = (i) => setOpen((cur) => (cur.includes(i) ? cur.filter((x) => x !== i) : allowMultiple ? [...cur, i] : [i]));
  return (
    <div className="sh-acc" style={style} {...rest}>
      {items.map((it, i) => {
        const on = open.includes(i);
        const pid = `${uid}-p${i}`, bid = `${uid}-b${i}`;
        return (
          <div className="sh-acc-item" key={it.title + i} data-open={String(on)}>
            <button type="button" className="sh-acc-btn" id={bid} aria-expanded={on} aria-controls={pid} onClick={() => toggle(i)}>
              {it.title}<span className="sh-acc-sign" aria-hidden="true" />
            </button>
            <div className="sh-acc-panel" id={pid} role="region" aria-labelledby={bid} aria-hidden={!on} inert={on ? undefined : true}>
              <div className="sh-acc-clip">
                <div className="sh-acc-inner">{it.content}</div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
