import React from "react";

const CSS = `
.sh-badge{display:inline-flex;align-items:center;gap:var(--space-2);height:22px;padding:0 var(--space-4);border-radius:var(--radius-pill);font-family:var(--font-body);font-size:var(--text-3xs);font-weight:var(--weight-semibold);letter-spacing:var(--tracking-eyebrow);text-transform:uppercase;background:var(--surface-raised);color:var(--text-secondary);white-space:nowrap}
.sh-badge[data-tone="brand"]{background:var(--surface-brand);color:var(--text-on-brand)}
.sh-badge[data-tone="accent"]{background:var(--surface-accent);color:var(--text-on-accent)}
.sh-badge[data-tone="success"]{background:var(--status-success-soft);color:var(--status-success)}
.sh-badge[data-tone="info"]{background:var(--status-info-soft);color:var(--color-pine-tree)}
.sh-badge[data-tone="warning"]{background:var(--status-warning-soft);color:var(--status-warning)}
.sh-badge[data-tone="danger"]{background:var(--status-danger-soft);color:var(--status-danger)}
.sh-badge[data-tone="outline"]{background:transparent;box-shadow:inset 0 0 0 var(--border-width) var(--border-control);color:var(--text-secondary)}
`;

function ensure() {
  if (typeof document === "undefined" || document.getElementById("sh-badge-css")) return;
  const el = document.createElement("style");
  el.id = "sh-badge-css";
  el.textContent = CSS;
  document.head.appendChild(el);
}

export function Badge({ tone = "neutral", icon, children, ...rest }) {
  ensure();
  return (
    <span className="sh-badge" data-tone={tone} {...rest}>
      {icon}
      {children}
    </span>
  );
}
