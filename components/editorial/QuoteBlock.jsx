import React from "react";

/* A large Light quote, left-aligned, with small labelled facts beneath (deck slides
   16–17). Only real, consented words go here — never a composed testimonial. */
const CSS = `
.sh-quote{margin:0;display:flex;flex-direction:column;gap:var(--stack-lg);min-width:0}
.sh-quote-text{margin:0;font:var(--type-statement);color:var(--text-primary);max-width:var(--measure-statement);quotes:"\\201C" "\\201D"}
.sh-quote-text::before{content:open-quote}
.sh-quote-text::after{content:close-quote}
.sh-quote-cite{font:var(--type-body-sm);font-style:normal;color:var(--text-secondary)}
.sh-quote-facts{display:grid;grid-template-columns:minmax(0,1fr);gap:var(--space-6);margin:0}
.sh-quote-facts dt{margin:0 0 var(--space-2)}
.sh-quote-facts dd{margin:0;font:var(--type-body-sm);color:var(--text-secondary);max-width:44ch}
@media (min-width:760px){.sh-quote-facts{grid-template-columns:repeat(2,minmax(0,1fr))}}
`;

function ensure() {
  if (typeof document === "undefined" || document.getElementById("sh-quote-css")) return;
  const el = document.createElement("style");
  el.id = "sh-quote-css";
  el.textContent = CSS;
  document.head.appendChild(el);
}

export function QuoteBlock({ quote, cite, facts = [], style, ...rest }) {
  ensure();
  return (
    <figure className="sh-quote" style={style} {...rest}>
      <blockquote className="sh-quote-text">{quote}</blockquote>
      {cite ? <figcaption className="sh-quote-cite">{cite}</figcaption> : null}
      {facts.length ? (
        <dl className="sh-quote-facts">
          {facts.map((f) => (
            <div key={f.label}>
              <dt className="shantara-eyebrow">{f.label}</dt>
              <dd>{f.text}</dd>
            </div>
          ))}
        </dl>
      ) : null}
    </figure>
  );
}
