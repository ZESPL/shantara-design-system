import React from "react";
import { Media } from "../editorial/Media.jsx";
import { Statement } from "../editorial/Statement.jsx";

/* Deck slide 18. A full-bleed dark photograph (or the Pine ground when `src` is omitted)
   with a statement, ONE Gold primary button and contact lines in small type. Ends every
   marketing page. 72svh on desktop, content-height with a 520px floor on phones. */
const CSS = `
.sh-close{position:relative;display:flex;align-items:flex-end;min-height:clamp(520px, 72svh, 860px);overflow:hidden;isolation:isolate}
.sh-close>.sh-media{position:absolute;inset:0;z-index:-1;aspect-ratio:auto;height:100%}
.sh-close-body{width:100%;padding-block:var(--section-y)}
.sh-close-contact{display:flex;flex-wrap:wrap;gap:var(--space-3) var(--space-8);margin-top:var(--stack-lg);padding-top:var(--space-6);border-top:var(--border-width) solid var(--rule-color);font:var(--type-body-sm);color:var(--text-secondary)}
.sh-close-contact a{color:inherit;text-decoration:none}
@media (hover: hover) and (pointer: fine){.sh-close-contact a:hover{color:var(--text-primary)}}
`;

function ensure() {
  if (typeof document === "undefined" || document.getElementById("sh-close-css")) return;
  const el = document.createElement("style");
  el.id = "sh-close-css";
  el.textContent = CSS;
  document.head.appendChild(el);
}

export function ClosingCTA({ src, alt = "", position, eyebrow, title, sub, action, contact, style, ...rest }) {
  ensure();
  return (
    <section className="sh-close" data-ground={src ? "photo" : "pine"} style={style} {...rest}>
      {src ? <Media src={src} alt={alt} ratio="fill" scrim="hero" position={position} /> : null}
      <div className="sh-close-body">
        <div className="sh-container">
          <Statement eyebrow={eyebrow} sub={sub} actions={action}>{title}</Statement>
          {contact ? <div className="sh-close-contact">{contact}</div> : null}
        </div>
      </div>
    </section>
  );
}
