import React from "react";

/* The consultation form on Merino with square fields, beside a Stone panel that shows who
   will call (a doctor portrait) and what happens next. The form comes first on phones.
   ≥1000px: form 7 columns, panel 5 columns, the panel sticky while the form scrolls. */
const CSS = `
.sh-fsplit{display:grid;grid-template-columns:minmax(0,1fr);gap:var(--stack-lg);align-items:start}
.sh-fsplit-form{min-width:0;display:flex;flex-direction:column;gap:var(--space-6)}
.sh-fsplit-aside{min-width:0;background:var(--ground-stone);padding:clamp(24px, 2.2vw + 16px, 48px);display:flex;flex-direction:column;gap:var(--space-7)}
@media (min-width:1000px){
  .sh-fsplit{grid-template-columns:minmax(0,7fr) minmax(0,5fr);gap:calc(var(--grid-gap) * 2.5)}
  .sh-fsplit-aside{position:sticky;top:calc(var(--space-12) + 16px)}
}
`;

function ensure() {
  if (typeof document === "undefined" || document.getElementById("sh-fsplit-css")) return;
  const el = document.createElement("style");
  el.id = "sh-fsplit-css";
  el.textContent = CSS;
  document.head.appendChild(el);
}

export function FormSplit({ children, aside, style, ...rest }) {
  ensure();
  return (
    <div className="sh-fsplit" style={style} {...rest}>
      <div className="sh-fsplit-form">{children}</div>
      {aside ? <aside className="sh-fsplit-aside" data-ground="stone">{aside}</aside> : null}
    </div>
  );
}
