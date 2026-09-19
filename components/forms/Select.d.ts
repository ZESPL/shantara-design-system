import * as React from "react";

/** Native select styled to match `Input`, with a hairline chevron. */
export interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  hint?: string;
  error?: string;
  required?: boolean;
  size?: "sm" | "md" | "lg";
  /** Strings or `{value,label}` pairs. */
  options?: Array<string | { value: string; label: string }>;
  /** Empty first option, e.g. "Choose a practitioner". */
  placeholder?: string;
}

export declare function Select(props: SelectProps): JSX.Element;
