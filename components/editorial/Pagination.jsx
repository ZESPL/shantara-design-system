import React from "react";
import { Icon } from "../core/Icon.jsx";

/* Previous / numbered pages / next for the Journal index. Numbers collapse with an
   ellipsis around the current page. Under 520px the numbers give way to "Page 2 of 8"
   between the two arrows. Links when `hrefFor` is given (crawlable), buttons otherwise. */
const CSS = `
.sh-pag{display:flex;align-items:center;justify-content:space-between;gap:var(--space-4);padding-top:var(--space-6);border-top:var(--border-width) solid var(--rule-color);font:var(--type-body-sm);min-width:0}
.sh-pag-list{display:flex;align-items:center;gap:var(--space-1);list-style:none;margin:0;padding:0}
.sh-pag-step,.sh-pag-num{appearance:none;display:inline-flex;align-items:center;justify-content:center;gap:var(--space-2);min-height:var(--tap-min);min-width:var(--tap-min);padding:0 var(--space-3);border:0;border-radius:var(--radius-pill);background:transparent;color:var(--text-secondary);font:inherit;font-variant-numeric:tabular-nums;text-decoration:none;cursor:pointer}
.sh-pag-step{color:var(--text-primary)}
.sh-pag-num[aria-current="page"]{color:var(--text-primary);font-weight:var(--weight-medium);box-shadow:inset 0 0 0 1px var(--text-primary)}
.sh-pag-gap{min-width:24px;text-align:center;color:var(--text-muted)}
.sh-pag-status{display:none;margin:0;color:var(--text-secondary);font-variant-numeric:tabular-nums}
.sh-pag [aria-disabled="true"]{opacity:0.35;pointer-events:none}
.sh-pag-step:focus-visible,.sh-pag-num:focus-visible{outline:none;box-shadow:var(--ring-focus)}
[dir="rtl"] .sh-pag-step [data-icon]{transform:scaleX(-1)}
@media (hover: hover) and (pointer: fine){.sh-pag-num:hover,.sh-pag-step:hover{color:var(--text-primary);background:color-mix(in srgb, var(--text-primary) 6%, transparent)}}
@media (max-width:519.98px){.sh-pag-list{display:none}.sh-pag-status{display:block}.sh-pag-step>span:not([data-icon]){position:absolute;width:1px;height:1px;overflow:hidden;clip:rect(0 0 0 0)}}
`;

function ensure() {
  if (typeof document === "undefined" || document.getElementById("sh-pag-css")) return;
  const el = document.createElement("style");
  el.id = "sh-pag-css";
  el.textContent = CSS;
  document.head.appendChild(el);
}

function range(page, count, sib) {
  const out = [];
  const lo = Math.max(2, page - sib);
  const hi = Math.min(count - 1, page + sib);
  out.push(1);
  if (lo > 2) out.push("gap-l");
  for (let i = lo; i <= hi; i++) out.push(i);
  if (hi < count - 1) out.push("gap-r");
  if (count > 1) out.push(count);
  return out;
}

export function Pagination({ page = 1, pageCount = 1, hrefFor, onChange, siblings = 1, prevLabel = "Previous", nextLabel = "Next", label = "Pages", style, ...rest }) {
  ensure();
  const go = (n) => (e) => { if (onChange) { if (!hrefFor) e.preventDefault(); onChange(n); } };
  const Item = ({ n, className, children, current, disabled, rel }) => {
    const common = { className, "aria-current": current ? "page" : undefined, "aria-disabled": disabled ? "true" : undefined, rel };
    return hrefFor
      ? <a {...common} href={disabled ? undefined : hrefFor(n)} onClick={disabled ? undefined : go(n)}>{children}</a>
      : <button type="button" {...common} disabled={disabled} onClick={go(n)}>{children}</button>;
  };
  return (
    <nav data-ds-id="editorial/Pagination" className="sh-pag" aria-label={label} style={style} {...rest}>
      <Item n={page - 1} className="sh-pag-step" disabled={page <= 1} rel="prev"><Icon name="arrow-left" size={16} /><span>{prevLabel}</span></Item>
      <ol className="sh-pag-list">
        {range(page, pageCount, siblings).map((n) => (
          <li key={n}>{typeof n === "string" ? <span className="sh-pag-gap" aria-hidden="true">…</span>
            : <Item n={n} className="sh-pag-num" current={n === page}><span className="sh-visually-hidden">Page </span>{n}</Item>}</li>
        ))}
      </ol>
      <p className="sh-pag-status" aria-hidden="true">Page {page} of {pageCount}</p>
      <Item n={page + 1} className="sh-pag-step" disabled={page >= pageCount} rel="next"><span>{nextLabel}</span><Icon name="arrow-right" size={16} /></Item>
    </nav>
  );
}
