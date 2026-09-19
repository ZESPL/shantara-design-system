import React from "react";

const BASE = "https://unpkg.com/lucide-static@0.544.0/icons/";

/* Lucide is a documented substitution: the Shantara brand package ships no icon set.
   Glyphs are painted as masks so they inherit currentColor and the 1.5px brand stroke feel. */
export function Icon({ name, size = 20, strokeWidth, color = "currentColor", style, ...rest }) {
  const px = typeof size === "number" ? size + "px" : size;
  return (
    <span
      aria-hidden="true"
      data-icon={name}
      style={{
        display: "inline-block",
        width: px,
        height: px,
        flex: "0 0 auto",
        background: color,
        WebkitMaskImage: `url(${BASE}${name}.svg)`,
        maskImage: `url(${BASE}${name}.svg)`,
        WebkitMaskRepeat: "no-repeat",
        maskRepeat: "no-repeat",
        WebkitMaskPosition: "center",
        maskPosition: "center",
        WebkitMaskSize: "contain",
        maskSize: "contain",
        ...style,
      }}
      {...rest}
    />
  );
}
