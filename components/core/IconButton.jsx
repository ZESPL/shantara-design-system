import React from "react";

const CSS = `
.sh-ibtn{display:inline-grid;place-items:center;border-radius:var(--radius-pill);border:var(--border-width) solid transparent;background:transparent;color:var(--text-primary);cursor:pointer;transition:var(--transition-control)}
.sh-ibtn:active:not(:disabled){transform:scale(var(--press-scale))}
.sh-ibtn:focus-visible{outline:none;box-shadow:var(--ring-focus)}
.sh-ibtn:disabled{opacity:.42;cursor:not-allowed}
.sh-ibtn[data-size="sm"]{width:var(--control-sm);height:var(--control-sm)}
.sh-ibtn[data-size="md"]{width:var(--control-md);height:var(--control-md)}
.sh-ibtn[data-size="lg"]{width:var(--control-lg);height:var(--control-lg)}
.sh-ibtn[data-variant="solid"]{background:var(--surface-brand);color:var(--text-on-brand)}
.sh-ibtn[data-variant="outline"]{border-color:var(--border-control)}
.sh-ibtn[data-variant="glass"]{background:var(--glass-fill);backdrop-filter:var(--blur-glass);-webkit-backdrop-filter:var(--blur-glass)}
.sh-ibtn[data-variant="inverse"]{color:var(--color-merino)}
@media (hover: hover) and (pointer: fine){
  .sh-ibtn:hover:not(:disabled){background:var(--surface-raised)}
  .sh-ibtn[data-variant="solid"]:hover:not(:disabled){background:var(--color-himalaya-800)}
  .sh-ibtn[data-variant="inverse"]:hover:not(:disabled){background:color-mix(in srgb, var(--color-merino) 18%, transparent)}
  /* Dark grounds re-point the ink to Merino, so a light --surface-raised fill would wash the
     icon out. Use a translucent Merino wash instead, as the inverse variant does. */
  :is([data-ground="himalaya"],[data-ground="pine"],[data-ground="photo"]) .sh-ibtn:not([data-variant="solid"]):hover:not(:disabled){background:color-mix(in srgb, var(--color-merino) 18%, transparent)}
}
`;

function ensure() {
  if (typeof document === "undefined" || document.getElementById("sh-ibtn-css")) return;
  const el = document.createElement("style");
  el.id = "sh-ibtn-css";
  el.textContent = CSS;
  document.head.appendChild(el);
}

export function IconButton({ variant = "ghost", size = "md", label, children, ...rest }) {
  ensure();
  return (
    <button type="button" className="sh-ibtn" data-ds-id="core/IconButton" data-variant={variant} data-size={size} aria-label={label} title={label} {...rest}>
      {children}
    </button>
  );
}
