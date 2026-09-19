import * as React from "react";

/**
 * Single-line text field with label, hint and error slots.
 */
export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  /** Helper text below the field. Hidden while `error` is set. */
  hint?: string;
  /** Error message; also turns the border Clay and sets aria-invalid. */
  error?: string;
  required?: boolean;
  size?: "sm" | "md" | "lg";
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
}

export declare function Input(props: InputProps): JSX.Element;
