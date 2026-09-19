import React from "react";

const CSS = `
.sh-tag{display:inline-flex;align-items:center;gap:var(--space-3);height:32px;padding:0 var(--space-5);border-radius:var(--radius-pill);border:var(--border-width) solid var(--border-control);background:transparent;color:var(--text-primary);font-family:var(--font-body);font-size:var(--text-xs);font-weight:var(--weight-regular);cursor:pointer;transition:var(--transition-control)}
.sh-tag:hover{background:var(--surface-raised)}
.sh-tag:focus-visible{outline:none;box-shadow:var(--ring-focus)}
.sh-tag[data-selected="true"]{background:var(--surface-brand);border-color:var(--surface-brand);color:var(--text-on-brand)}
.sh-tag[data-selected="true"]:hover{background:var(--color-himalaya-800)}
.sh-tag[data-static="true"]{cursor:default}
.sh-tag-x{display:inline-grid;place-items:center;width:24px;height:24px;margin:0 -4px 0 -2px;border:0;border-radius:var(--radius-pill);background:transparent;color:inherit;opacity:.6;cursor:pointer;padding:0;line-height:1}
.sh-tag-x:focus-visible{outline:none;box-shadow:var(--ring-focus);opacity:1}
.sh-tag-x:hover{opacity:1}
`;

function ensure() {
  if (typeof document === "undefined" || document.getElementById("sh-tag-css")) return;
  const el = document.createElement("style");
  el.id = "sh-tag-css";
  el.textContent = CSS;
  document.head.appendChild(el);
}

export function Tag({ selected = false, onRemove, icon, children, ...rest }) {
  ensure();
  const interactive = Boolean(rest.onClick || onRemove);
  return (
    <span className="sh-tag" data-selected={String(selected)} data-static={String(!interactive)} role={rest.onClick ? "button" : undefined} tabIndex={rest.onClick ? 0 : undefined} {...rest}>
      {icon}
      {children}
      {onRemove ? (
        <button type="button" className="sh-tag-x" aria-label="Remove" onClick={(e) => { e.stopPropagation(); onRemove(e); }}>×</button>
      ) : null}
    </span>
  );
}
