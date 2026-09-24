import * as React from "react";

/** Native select in Input's 52px chrome, with a centred 16px chevron at the inline end. */
export interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  hint?: string;
  error?: string;
  required?: boolean;
  optional?: boolean | string;
  size?: "sm" | "md" | "lg";
  /** Strings or `{value,label}` pairs. */
  options?: Array<string | { value: string; label: string }>;
  /** Empty first option, e.g. "Choose a practitioner". */
  placeholder?: string;
}

export declare function Select(props: SelectProps): JSX.Element;
