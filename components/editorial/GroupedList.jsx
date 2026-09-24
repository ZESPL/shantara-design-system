import React from "react";

/* Small olive group labels with their items inline, separated by a middot — the deck's
   therapy slide. Groups stack on phones and sit in columns from 760px. */
const CSS = `
.sh-glist{display:grid;grid-template-columns:minmax(0,1fr);gap:var(--space-7) var(--grid-gap);margin:0}
.sh-glist-group{min-width:0}
.sh-glist-label{margin:0 0 var(--space-3)}
.sh-glist-items{margin:0;padding:0;list-style:none;display:flex;flex-wrap:wrap;font:var(--type-body);color:var(--text-primary)}
.sh-glist-items>li:not(:last-child)::after{content:"·";margin-inline:0.5em;color:var(--text-muted)}
@media (min-width:760px){.sh-glist[data-columns="2"],.sh-glist[data-columns="3"]{grid-template-columns:repeat(2,minmax(0,1fr))}}
@media (min-width:1000px){.sh-glist[data-columns="3"]{grid-template-columns:repeat(3,minmax(0,1fr))}}
`;

function ensure() {
  if (typeof document === "undefined" || document.getElementById("sh-glist-css")) return;
  const el = document.createElement("style");
  el.id = "sh-glist-css";
  el.textContent = CSS;
  document.head.appendChild(el);
}

export function GroupedList({ groups = [], columns = 1, style, ...rest }) {
  ensure();
  return (
    <div className="sh-glist" data-columns={String(columns)} style={style} {...rest}>
      {groups.map((g) => (
        <div className="sh-glist-group" key={g.label}>
          <p className="shantara-eyebrow sh-glist-label">{g.label}</p>
          <ul className="sh-glist-items">
            {g.items.map((it) => <li key={it}>{it}</li>)}
          </ul>
        </div>
      ))}
    </div>
  );
}
