import React from "react";

const CSS = `
.sh-bc{display:flex;align-items:center;gap:var(--space-4);font-family:var(--font-body);font-size:var(--text-xs);color:var(--text-muted)}
.sh-bc-link{color:inherit;text-decoration:none;transition:color var(--duration-fast) var(--ease-standard)}
.sh-bc-link:focus-visible{outline:none;box-shadow:var(--ring-focus);border-radius:var(--radius-xs)}
@media (hover: hover) and (pointer: fine){
  .sh-bc-link:hover{color:var(--text-primary);text-decoration:underline;text-underline-offset:3px;text-decoration-color:var(--border-default)}
}
.sh-bc-current{color:var(--text-primary)}
.sh-bc-sep{opacity:.5}
`;

function ensure() {
  if (typeof document === "undefined" || document.getElementById("sh-bc-css")) return;
  const el = document.createElement("style");
  el.id = "sh-bc-css";
  el.textContent = CSS;
  document.head.appendChild(el);
}

export function Breadcrumbs({ items = [], separator = "/", style, "aria-label": ariaLabel = "Breadcrumb", ...rest }) {
  ensure();
  return (
    <nav className="sh-bc" aria-label={ariaLabel} style={style} {...rest}>
      {items.map((it, i) => {
        const last = i === items.length - 1;
        const label = typeof it === "string" ? it : it.label;
        const href = typeof it === "string" ? undefined : it.href;
        return (
          <React.Fragment key={label + i}>
            {last || !href ? (
              <span className={last ? "sh-bc-current" : undefined} aria-current={last ? "page" : undefined}>{label}</span>
            ) : (
              <a className="sh-bc-link" href={href}>{label}</a>
            )}
            {last ? null : <span className="sh-bc-sep" aria-hidden="true">{separator}</span>}
          </React.Fragment>
        );
      })}
    </nav>
  );
}
