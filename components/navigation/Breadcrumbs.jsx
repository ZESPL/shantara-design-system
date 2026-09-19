import React from "react";

export function Breadcrumbs({ items = [], separator = "/", style, ...rest }) {
  return (
    <nav aria-label="Breadcrumb" style={{ display: "flex", alignItems: "center", gap: "var(--space-4)", fontFamily: "var(--font-body)", fontSize: "var(--text-xs)", color: "var(--text-muted)", ...style }} {...rest}>
      {items.map((it, i) => {
        const last = i === items.length - 1;
        const label = typeof it === "string" ? it : it.label;
        const href = typeof it === "string" ? undefined : it.href;
        return (
          <React.Fragment key={label + i}>
            {last || !href ? (
              <span aria-current={last ? "page" : undefined} style={{ color: last ? "var(--text-primary)" : undefined }}>{label}</span>
            ) : (
              <a href={href} style={{ color: "inherit", textDecoration: "none" }}>{label}</a>
            )}
            {last ? null : <span aria-hidden="true" style={{ opacity: 0.5 }}>{separator}</span>}
          </React.Fragment>
        );
      })}
    </nav>
  );
}
