import React from "react";
import { Icon } from "../core/Icon.jsx";

/* "On this page" for long articles. Desktop (≥1000px): a sticky list on a hairline rail
   in the article's side column; the section in view is marked with a 1px brand bar.
   Phones and tablets: a collapsed row ("On this page" + chevron) above the body that opens
   the same list. items come from the article's h2s (each h2 needs an id). */
const CSS = `
.sh-toc{min-width:0;font:var(--type-body-sm)}
.sh-toc[data-sticky="true"]{position:sticky;top:calc(var(--space-12) + 24px)}
.sh-toc-toggle{appearance:none;display:flex;width:100%;align-items:center;justify-content:space-between;gap:var(--space-4);min-height:var(--tap-min);padding:var(--space-3) 0;background:transparent;border:0;border-block:var(--border-width) solid var(--rule-color);font:var(--type-label);font-size:var(--text-sm);color:var(--text-primary);cursor:pointer;text-align:start}
.sh-toc-toggle [data-icon]{transition:transform var(--duration-base) var(--ease-out)}
.sh-toc-toggle[aria-expanded="true"] [data-icon]{transform:rotate(180deg)}
.sh-toc-toggle:focus-visible{outline:none;box-shadow:var(--ring-focus)}
.sh-toc-title{display:none;margin:0 0 var(--space-4);font:var(--type-label);font-size:var(--text-sm);color:var(--text-primary)}
.sh-toc-list{list-style:none;margin:0;padding:var(--space-3) 0 var(--space-4);display:flex;flex-direction:column}
.sh-toc[data-open="false"] .sh-toc-list{display:none}
.sh-toc-list a{display:block;padding:var(--space-2) 0 var(--space-2) var(--space-4);margin-inline-start:-1px;border-inline-start:1px solid transparent;color:var(--text-secondary);text-decoration:none;line-height:1.4}
.sh-toc-list li[data-level="3"] a{padding-inline-start:var(--space-7);font-size:var(--text-xs)}
.sh-toc-list a[aria-current="true"]{color:var(--text-primary);border-inline-start-color:var(--text-brand)}
.sh-toc-list a:focus-visible{outline:none;box-shadow:var(--ring-focus)}
@media (hover: hover) and (pointer: fine){.sh-toc-list a:hover{color:var(--text-primary)}}
@media (max-width:999.98px){.sh-toc[data-sticky="true"]{position:static}.sh-toc-list{border-inline-start:1px solid var(--rule-color);margin-top:var(--space-3);padding-block:0}}
@media (min-width:1000px){
  .sh-toc-toggle{display:none}
  .sh-toc-title{display:block}
  .sh-toc[data-open="false"] .sh-toc-list{display:flex}
  .sh-toc-list{padding:0;border-inline-start:1px solid var(--rule-color)}
}
`;

function ensure() {
  if (typeof document === "undefined" || document.getElementById("sh-toc-css")) return;
  const el = document.createElement("style");
  el.id = "sh-toc-css";
  el.textContent = CSS;
  document.head.appendChild(el);
}

export function TableOfContents({ items = [], title = "On this page", activeId, track = true, sticky = true, defaultOpen = false, onNavigate, style, ...rest }) {
  ensure();
  const [open, setOpen] = React.useState(defaultOpen);
  const [seen, setSeen] = React.useState(items[0] && items[0].id);
  const listId = React.useId ? React.useId() : "sh-toc-list";

  React.useEffect(() => {
    if (!track || activeId || typeof IntersectionObserver === "undefined") return undefined;
    const els = items.map((it) => document.getElementById(it.id)).filter(Boolean);
    if (!els.length) return undefined;
    const io = new IntersectionObserver((entries) => {
      const vis = entries.filter((e) => e.isIntersecting).sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
      if (vis[0]) setSeen(vis[0].target.id);
    }, { rootMargin: "-15% 0px -70% 0px" });
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [track, activeId, items.map((i) => i.id).join("|")]);

  const current = activeId || seen;
  return (
    <nav data-ds-id="editorial/TableOfContents" className="sh-toc" aria-label={title} data-open={String(open)} data-sticky={String(sticky)} style={style} {...rest}>
      <button type="button" className="sh-toc-toggle" aria-expanded={open} aria-controls={listId} onClick={() => setOpen(!open)}>
        <span>{title}</span>
        <Icon name="chevron-down" size={18} />
      </button>
      <p className="sh-toc-title" aria-hidden="true">{title}</p>
      <ol className="sh-toc-list" id={listId}>
        {items.map((it) => (
          <li key={it.id} data-level={String(it.level || 2)}>
            <a href={"#" + it.id} aria-current={current === it.id ? "true" : undefined}
              onClick={(e) => { setSeen(it.id); if (onNavigate) onNavigate(it.id, e); }}>{it.label}</a>
          </li>
        ))}
      </ol>
    </nav>
  );
}
