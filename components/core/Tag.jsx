import React from "react";

const CSS = `
.sh-tag{display:inline-flex;align-items:center;gap:var(--space-3);height:32px;padding:0 var(--space-5);border-radius:var(--radius-pill);border:var(--border-width) solid var(--border-control);background:transparent;color:var(--text-primary);font-family:var(--font-body);font-size:var(--text-xs);font-weight:var(--weight-regular);cursor:pointer;transition:var(--transition-control)}
.sh-tag:active:not([data-static="true"]){transform:scale(var(--press-scale))}
.sh-tag:focus-visible{outline:none;box-shadow:var(--ring-focus)}
.sh-tag[data-selected="true"]{background:var(--surface-brand);border-color:var(--surface-brand);color:var(--text-on-brand)}
.sh-tag[data-static="true"]{cursor:default}
.sh-tag-x{display:inline-grid;place-items:center;width:24px;height:24px;margin-block:0;margin-inline:-2px -4px;border:0;border-radius:var(--radius-pill);background:transparent;color:inherit;opacity:.6;cursor:pointer;padding:0;line-height:1;transition:opacity var(--duration-fast) var(--ease-standard),box-shadow var(--duration-fast) var(--ease-standard)}
.sh-tag-x:focus-visible{outline:none;box-shadow:var(--ring-focus);opacity:1}
@media (hover: hover) and (pointer: fine){
  .sh-tag:hover{background:var(--surface-raised)}
  .sh-tag[data-selected="true"]:hover{background:var(--color-himalaya-800)}
  .sh-tag-x:hover{opacity:1}
}
`;

function ensure() {
  if (typeof document === "undefined" || document.getElementById("sh-tag-css")) return;
  const el = document.createElement("style");
  el.id = "sh-tag-css";
  el.textContent = CSS;
  document.head.appendChild(el);
}

export function Tag({ selected = false, onRemove, icon, children, onClick, onKeyDown, ...rest }) {
  ensure();
  const interactive = Boolean(onClick || onRemove);
  const activate = onClick
    ? (e) => {
        if (onKeyDown) onKeyDown(e);
        if (e.defaultPrevented) return;
        if (e.key === "Enter" || e.key === " " || e.key === "Spacebar") { e.preventDefault(); onClick(e); }
      }
    : onKeyDown;
  return (
    <span className="sh-tag" data-selected={String(selected)} data-static={String(!interactive)} role={onClick ? "button" : undefined} tabIndex={onClick ? 0 : undefined} onClick={onClick} onKeyDown={activate} {...rest}>
      {icon}
      {children}
      {onRemove ? (
        <button type="button" className="sh-tag-x" aria-label="Remove" onClick={(e) => { e.stopPropagation(); onRemove(e); }}>×</button>
      ) : null}
    </span>
  );
}
