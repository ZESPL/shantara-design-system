import * as React from "react";

/** Single-choice control for 2–5 visible options. */
export interface RadioProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: React.ReactNode;
  description?: string;
  /** Wraps the row in a bordered 2px-radius panel (Himalaya 2px edge when chosen). */
  card?: boolean;
  /** Clay ring for a group that failed validation. */
  invalid?: boolean;
}

export declare function Radio(props: RadioProps): JSX.Element;
