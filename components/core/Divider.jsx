import React from "react";

export function Divider({ tone = "subtle", spacing = "var(--space-7)", label, orientation = "horizontal", style, ...rest }) {
  const color = tone === "strong" ? "var(--border-strong)" : tone === "default" ? "var(--border-default)" : "var(--border-subtle)";
  if (orientation === "vertical") {
    return <span aria-hidden="true" style={{ display: "inline-block", width: "1px", alignSelf: "stretch", background: color, margin: `0 ${spacing}`, ...style }} {...rest} />;
  }
  if (label) {
    return (
      <div style={{ display: "flex", alignItems: "center", gap: "var(--space-5)", margin: `${spacing} 0`, ...style }} {...rest}>
        <span style={{ flex: 1, height: "1px", background: color }} />
        <span className="shantara-eyebrow">{label}</span>
        <span style={{ flex: 1, height: "1px", background: color }} />
      </div>
    );
  }
  return <hr style={{ border: 0, height: "1px", background: color, margin: `${spacing} 0`, ...style }} {...rest} />;
}
