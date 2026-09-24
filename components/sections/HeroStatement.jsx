import React from "react";
import { Statement } from "../editorial/Statement.jsx";

/* Deck slide 2. No photograph: a Merino (or Stone) ground with the eyebrow and a large
   Light statement placed LOW, with open space above it. For inner pages that do not need
   a picture — conditions, about, insights, booking. Breadcrumbs sit above the eyebrow. */
const CSS = `
.sh-hstmt{padding-block:calc(var(--space-12) + var(--section-y-sm)) var(--section-y-sm)}
.sh-hstmt[data-tall="true"]{min-height:clamp(420px, 62svh, 720px);display:flex;align-items:flex-end}
.sh-hstmt>.sh-container{width:100%}
.sh-hstmt-crumbs{margin-bottom:var(--stack-lg)}
.sh-hstmt-grid{display:grid;grid-template-columns:minmax(0,1fr);gap:var(--stack-lg);align-items:end}
@media (min-width:1000px){.sh-hstmt-grid[data-aside="true"]{grid-template-columns:minmax(0,7fr) minmax(0,4fr);gap:var(--grid-gap) calc(var(--grid-gap) * 2)}}
`;

function ensure() {
  if (typeof document === "undefined" || document.getElementById("sh-hstmt-css")) return;
  const el = document.createElement("style");
  el.id = "sh-hstmt-css";
  el.textContent = CSS;
  document.head.appendChild(el);
}

export function HeroStatement({ eyebrow, title, sub, actions, breadcrumbs, aside, ground = "merino", tall = true, size = "h1", titleAs = "h1", measure = "22ch", style, ...rest }) {
  ensure();
  return (
    <section className="sh-hstmt" data-ground={ground} data-tall={String(tall)} style={style} {...rest}>
      <div className="sh-container">
        {breadcrumbs ? <div className="sh-hstmt-crumbs">{breadcrumbs}</div> : null}
        <div className="sh-hstmt-grid" data-aside={aside ? "true" : "false"}>
          <Statement as={titleAs} size={size} eyebrow={eyebrow} sub={sub} actions={actions} measure={measure}>{title}</Statement>
          {aside ? <div>{aside}</div> : null}
        </div>
      </div>
    </section>
  );
}
