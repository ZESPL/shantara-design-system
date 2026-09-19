import * as React from "react";

/** Multi-select control, 20px box, 4px radius, Himalaya fill when checked. */
export interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: React.ReactNode;
  /** Secondary line under the label. */
  description?: string;
  indeterminate?: boolean;
}

export declare function Checkbox(props: CheckboxProps): JSX.Element;
