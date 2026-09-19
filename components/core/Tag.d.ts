import * as React from "react";

/** Selectable / removable pill. Used for treatment filters, wellness goals, dietary preferences. */
export interface TagProps extends React.HTMLAttributes<HTMLSpanElement> {
  selected?: boolean;
  /** Renders a × affordance; omit for a read-only chip. */
  onRemove?: (e: React.MouseEvent) => void;
  icon?: React.ReactNode;
  children?: React.ReactNode;
}

export declare function Tag(props: TagProps): JSX.Element;
