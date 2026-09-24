import * as React from "react";

/**
 * Small flat status label (20px, 2px radius, tinted, sentence case, no border).
 * Read-only: never looks or behaves like a button. For selectable filters use `Tag` with `onClick`.
 */
export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** `outline` renders a dot plus text with no box at all. */
  tone?: "neutral" | "brand" | "accent" | "outline" | "success" | "info" | "warning" | "danger";
  /** Leading 6px dot in the tone colour. Default: on for `outline`, off otherwise. */
  dot?: boolean;
  icon?: React.ReactNode;
  children?: React.ReactNode;
}

export declare function Badge(props: BadgeProps): JSX.Element;
