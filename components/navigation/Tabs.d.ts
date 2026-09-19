import * as React from "react";

/**
 * View switcher. Uncontrolled by default; pass `value` + `onChange` to control it.
 */
export interface TabsProps extends React.HTMLAttributes<HTMLDivElement> {
  items: Array<string | { value: string; label: string; count?: number }>;
  value?: string;
  onChange?: (value: string) => void;
  /** `underline` for page-level sections, `pill` for in-card filters. */
  variant?: "underline" | "pill";
}

export declare function Tabs(props: TabsProps): JSX.Element;
