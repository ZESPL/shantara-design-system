import * as React from "react";

/**
 * Lucide glyph wrapper — intentional addition (the brand package ships no icon set).
 * Renders the glyph as a CSS mask so it takes `currentColor`.
 */
export interface IconProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** Lucide icon slug, e.g. `"leaf"`, `"calendar-days"`, `"arrow-right"`. */
  name: string;
  /** Box size in px (default 20). */
  size?: number | string;
  /** Ignored — kept for API parity; Lucide masks carry their own 2px stroke. */
  strokeWidth?: number;
  color?: string;
}

export declare function Icon(props: IconProps): JSX.Element;
