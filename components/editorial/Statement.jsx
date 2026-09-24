import React from "react";
import { Eyebrow } from "./Eyebrow.jsx";

/* Eyebrow → full-sentence headline in Light → one quiet supporting line.
   The deck's heading block. Sizes are fluid (tokens/typography.css), so the same
   block reads at 28px on a phone and 48px on a desktop without breakpoints. */
const SIZE = {
  display: "var(--type-display)",
  h1: "var(--type-h1)",
  statement: "var(--type-statement)",
  title: "var(--type-title)",
};

const CSS = `
.sh-stmt{display:flex;flex-direction:column;gap:var(--stack-md);min-width:0}
.sh-stmt-title{margin:0;max-width:var(--_m,var(--measure-statement));color:var(--text-primary)}
.sh-stmt-sub{margin:0;max-width:var(--measure-body);font:var(--type-body);color:var(--text-secondary)}
.sh-stmt[data-size="display"] .sh-stmt-sub,.sh-stmt[data-size="h1"] .sh-stmt-sub{font-size:calc(clamp(17px, 0.3vw + 16px, 20px) * var(--text-scale))}
.sh-stmt-actions{margin-top:var(--space-3)}
`;

function ensure() {
  if (typeof document === "undefined" || document.getElementById("sh-stmt-css")) return;
  const el = document.createElement("style");
  el.id = "sh-stmt-css";
  el.textContent = CSS;
  document.head.appendChild(el);
}

export function Statement({ eyebrow, children, sub, actions, as: Tag = "h2", size = "statement", measure, className, style, ...rest }) {
  ensure();
  return (
    <div className={"sh-stmt" + (className ? " " + className : "")} data-size={size} style={style} {...rest}>
      {eyebrow ? <Eyebrow>{eyebrow}</Eyebrow> : null}
      <Tag className="sh-stmt-title" style={{ font: SIZE[size] || SIZE.statement, ...(measure ? { "--_m": measure } : null) }}>{children}</Tag>
      {sub ? <p className="sh-stmt-sub">{sub}</p> : null}
      {actions ? <div className="sh-actions sh-stmt-actions" data-stack="mobile">{actions}</div> : null}
    </div>
  );
}
