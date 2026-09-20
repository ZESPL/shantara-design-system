import React from "react";

const CSS = `
.sh-btn{--_bg:var(--surface-brand);--_fg:var(--text-on-brand);--_bd:transparent;display:inline-flex;align-items:center;justify-content:center;gap:var(--space-3);font-family:var(--font-body);font-weight:var(--weight-medium);letter-spacing:var(--tracking-wide);text-decoration:none;white-space:nowrap;border:var(--border-width) solid var(--_bd);border-radius:var(--radius-control);background:var(--_bg);color:var(--_fg);cursor:pointer;transition:var(--transition-control)}
.sh-btn:focus-visible{outline:none;box-shadow:var(--ring-focus)}
.sh-btn:active:not(:disabled){transform:scale(var(--press-scale))}
.sh-btn:disabled{opacity:.42;cursor:not-allowed}
.sh-btn[data-size="sm"]{min-height:var(--control-sm);height:auto;padding:0 var(--space-5);font-size:var(--text-xs)}
.sh-btn[data-size="md"]{min-height:var(--control-md);height:auto;padding:0 var(--space-6);font-size:var(--text-sm)}
.sh-btn[data-size="lg"]{min-height:var(--control-lg);height:auto;padding:0 var(--space-8);font-size:var(--text-base)}
.sh-btn[data-full="true"]{width:100%}
.sh-btn[data-variant="accent"]{--_bg:var(--surface-accent);--_fg:var(--text-on-accent);--_bd:var(--color-gold-800)}
.sh-btn[data-variant="secondary"]{--_bg:transparent;--_fg:var(--text-primary);--_bd:var(--border-control)}
.sh-btn[data-variant="ghost"]{--_bg:transparent;--_fg:var(--text-brand)}
.sh-btn[data-variant="inverse"]{--_bg:var(--color-merino);--_fg:var(--color-pine-tree)}
.sh-btn[data-variant="inverse"]:focus-visible{box-shadow:var(--ring-focus-inverse)}
@media (hover: hover) and (pointer: fine){
  .sh-btn[data-variant="primary"]:hover:not(:disabled){--_bg:var(--color-himalaya-800)}
  .sh-btn[data-variant="accent"]:hover:not(:disabled){--_bg:var(--color-gold-200)}
  .sh-btn[data-variant="secondary"]:hover:not(:disabled){--_bg:var(--surface-raised);--_bd:var(--border-strong)}
  .sh-btn[data-variant="ghost"]:hover:not(:disabled){--_bg:var(--surface-brand-soft)}
  .sh-btn[data-variant="inverse"]:hover:not(:disabled){--_bg:var(--color-white)}
}
`;

function ensure() {
  if (typeof document === "undefined" || document.getElementById("sh-btn-css")) return;
  const el = document.createElement("style");
  el.id = "sh-btn-css";
  el.textContent = CSS;
  document.head.appendChild(el);
}

export function Button({ variant = "primary", size = "md", fullWidth = false, startIcon, endIcon, as, children, style, ...rest }) {
  ensure();
  const Tag = as || (rest.href ? "a" : "button");
  return (
    <Tag className="sh-btn" data-variant={variant} data-size={size} data-full={String(fullWidth)} style={style} {...rest}>
      {startIcon}
      {children ? <span>{children}</span> : null}
      {endIcon}
    </Tag>
  );
}
