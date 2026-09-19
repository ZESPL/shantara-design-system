import * as React from "react";

/** Small uppercase status marker. Read-only — for user-removable filters use `Tag`. */
export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  tone?: "neutral" | "brand" | "accent" | "outline" | "success" | "info" | "warning" | "danger";
  icon?: React.ReactNode;
  children?: React.ReactNode;
}

export declare function Badge(props: BadgeProps): JSX.Element;
