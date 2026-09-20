import * as React from "react";

/** Hover/focus label on a Pine Tree chip. Never put essential information here. */
export interface TooltipProps extends React.HTMLAttributes<HTMLSpanElement> {
  label: string;
  side?: "top" | "bottom" | "left" | "right" | "start" | "end";
  children?: React.ReactNode;
}

export declare function Tooltip(props: TooltipProps): JSX.Element;
