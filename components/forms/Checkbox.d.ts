import * as React from "react";

/** Multi-select control: 20px box, 2px radius, centred SVG tick, Himalaya fill when checked. */
export interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: React.ReactNode;
  /** Secondary line under the label. */
  description?: string;
  indeterminate?: boolean;
  /** Error message under the row; turns the box Clay. */
  error?: string;
  required?: boolean;
}

export declare function Checkbox(props: CheckboxProps): JSX.Element;
