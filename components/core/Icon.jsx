import React from "react";

const BASE = "https://unpkg.com/lucide-static@0.544.0/icons/";

/* The curated Shantara icon registry — every Lucide slug the brand uses, grouped by job.
   Any other Lucide slug still renders, but new names should be added here first so the
   set stays small and consistent. WhatsApp has no Lucide glyph: `message-circle` stands in. */
export const ICON_GROUPS = {
  contact: ["phone", "message-circle", "mail", "map-pin", "globe", "languages", "share-2", "external-link"],
  stay: ["calendar-days", "clock", "bed-double", "utensils", "wifi", "car", "plane", "train-front"],
  care: ["stethoscope", "heart-pulse", "user-round", "users", "shield-check", "award", "leaf", "sprout"],
  nature: ["sun", "moon", "droplets", "wind", "mountain"],
  content: ["book-open", "file-text", "quote", "bookmark", "download", "filter", "sliders-horizontal", "search"],
  status: ["info", "alert-circle", "check-circle-2", "check", "x"],
  direction: ["arrow-right", "arrow-left", "arrow-up", "arrow-down", "chevron-right", "chevron-left", "chevron-up", "chevron-down", "plus", "minus", "menu"],
};

export const ICON_NAMES = Object.values(ICON_GROUPS).flat();

/* Lucide is a documented substitution: the Shantara brand package ships no icon set.
   Glyphs are painted as masks so they inherit currentColor. */
export function Icon({ name, size = 20, strokeWidth, color = "currentColor", label, style, ...rest }) {
  const px = typeof size === "number" ? size + "px" : size;
  return (
    <span
      aria-hidden={label ? undefined : "true"}
      role={label ? "img" : undefined}
      aria-label={label}
      data-ds-id="core/Icon"
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
