import React from "react";

/* Resolves the brand asset folder from wherever _ds_bundle.js was loaded from,
   so <Logo /> works in cards, kits and consuming projects without configuration. */
function resolveBase() {
  if (typeof document === "undefined") return "assets";
  const s = document.querySelector('script[src$="_ds_bundle.js"]');
  if (s) return s.getAttribute("src").replace(/_ds_bundle\.js$/, "assets");
  return "assets";
}

const FILE = { full: "logo", icon: "icon", wordmark: "wordmark" };

export function Logo({ mark = "full", tone = "dark", height, assetBase, style, ...rest }) {
  const base = assetBase || resolveBase();
  const h = height || (mark === "icon" ? 40 : mark === "wordmark" ? 22 : 56);
  return (
    <img
      src={`${base}/${FILE[mark] || "logo"}-${tone}.svg`}
      alt="Shantara"
      data-ds-id="core/Logo"
      style={{ height: typeof h === "number" ? h + "px" : h, width: "auto", display: "block", ...style }}
      {...rest}
    />
  );
}
