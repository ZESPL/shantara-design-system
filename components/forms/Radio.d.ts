import * as React from "react";

/** Single-choice control for 2–5 visible options. */
export interface RadioProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: React.ReactNode;
  description?: string;
  /** Wraps the row in a selectable card (olive border + soft olive fill when chosen). */
  card?: boolean;
}

export declare function Radio(props: RadioProps): JSX.Element;
