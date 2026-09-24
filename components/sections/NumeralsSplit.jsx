import React from "react";
import { Statement } from "../editorial/Statement.jsx";
import { Numeral } from "../editorial/Numeral.jsx";

/* Deck slide 8. A statement beside two (at most three) large numerals. Stacked on
   phones with the numerals side by side; 5/7 columns from 1000px. */
const CSS = `
.sh-nsplit{display:grid;grid-template-columns:minmax(0,1fr);gap:var(--stack-lg);align-items:end}
.sh-nsplit-nums{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:var(--space-8) var(--grid-gap)}
.sh-nsplit-nums[data-count="3"]{grid-template-columns:repeat(2,minmax(0,1fr))}
@media (min-width:760px){.sh-nsplit-nums[data-count="3"]{grid-template-columns:repeat(3,minmax(0,1fr))}}
@media (min-width:1000px){.sh-nsplit{grid-template-columns:minmax(0,6fr) minmax(0,6fr);gap:calc(var(--grid-gap) * 2)}}
.sh-nsplit-foot{grid-column:1/-1;margin:0;font:var(--type-body-sm);color:var(--text-secondary);max-width:var(--measure-body)}
`;

function ensure() {
  if (typeof document === "undefined" || document.getElementById("sh-nsplit-css")) return;
  const el = document.createElement("style");
  el.id = "sh-nsplit-css";
  el.textContent = CSS;
  document.head.appendChild(el);
}

/* numerals: [{ value, label }] — two or three. */
export function NumeralsSplit({ eyebrow, title, sub, numerals = [], footnote, style, ...rest }) {
  ensure();
  const shown = numerals.slice(0, 3);
  return (
    <div className="sh-nsplit" style={style} {...rest}>
      <Statement eyebrow={eyebrow} sub={sub}>{title}</Statement>
      <div className="sh-nsplit-nums" data-count={String(shown.length)}>
        {shown.map((n) => <Numeral key={n.label} value={n.value} label={n.label} />)}
      </div>
      {footnote ? <p className="sh-nsplit-foot">{footnote}</p> : null}
    </div>
  );
}
