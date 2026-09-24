import React from "react";

/* Muted 01–04 numerals, a Medium item title and one line — the deck's process slide.
   One column on phones, two from 760px, `columns` from 1000px. */
const CSS = `
.sh-steps{list-style:none;margin:0;padding:0;display:grid;grid-template-columns:minmax(0,1fr);gap:var(--space-8) var(--grid-gap);counter-reset:none}
.sh-step{display:grid;grid-template-columns:3ch minmax(0,1fr);gap:var(--space-5);align-items:baseline;padding-top:var(--space-5);border-top:var(--border-width) solid var(--rule-color)}
.sh-step-n{font:var(--weight-light) var(--text-lg)/1 var(--font-display);color:var(--text-brand);font-variant-numeric:tabular-nums}
.sh-step-title{margin:0;font:var(--type-item);color:var(--text-primary)}
.sh-step-text{margin:var(--space-3) 0 0;font:var(--type-body-sm);color:var(--text-secondary);max-width:48ch}
.sh-steps[data-rules="false"] .sh-step{border-top:0;padding-top:0}
@media (min-width:760px){.sh-steps[data-columns="2"],.sh-steps[data-columns="3"],.sh-steps[data-columns="4"]{grid-template-columns:repeat(2,minmax(0,1fr))}}
@media (min-width:1000px){.sh-steps[data-columns="3"]{grid-template-columns:repeat(3,minmax(0,1fr))}.sh-steps[data-columns="4"]{grid-template-columns:repeat(4,minmax(0,1fr))}.sh-steps[data-columns="4"] .sh-step{grid-template-columns:minmax(0,1fr);gap:var(--space-4)}}
`;

function ensure() {
  if (typeof document === "undefined" || document.getElementById("sh-steps-css")) return;
  const el = document.createElement("style");
  el.id = "sh-steps-css";
  el.textContent = CSS;
  document.head.appendChild(el);
}

export function NumberedSteps({ items = [], columns = 1, start = 1, rules = true, headingLevel = 3, style, ...rest }) {
  ensure();
  const H = "h" + headingLevel;
  return (
    <ol className="sh-steps" data-columns={String(columns)} data-rules={String(rules)} style={style} {...rest}>
      {items.map((item, i) => (
        <li className="sh-step" key={item.title || i}>
          <span className="sh-step-n" aria-hidden="true">{String(start + i).padStart(2, "0")}</span>
          <div>
            <H className="sh-step-title">{item.title}</H>
            {item.text ? <p className="sh-step-text">{item.text}</p> : null}
          </div>
        </li>
      ))}
    </ol>
  );
}
