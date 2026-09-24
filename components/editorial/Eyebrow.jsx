import React from "react";

/* The deck's small tracked label. Colour comes from the ground (--eyebrow-color):
   Himalaya on Merino/Stone, Gold on flat dark grounds, Merino on photography.
   It must add information — never repeat the heading beneath it. */
export function Eyebrow({ as: Tag = "p", children, style, ...rest }) {
  return (
    <Tag className="shantara-eyebrow" style={{ margin: 0, ...style }} {...rest}>{children}</Tag>
  );
}
