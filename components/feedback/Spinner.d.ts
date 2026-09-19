import * as React from "react";

/** Three breathing dots — the brand's only loading indicator. No rotating rings. */
export interface SpinnerProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** Dot diameter in px (default 8). */
  size?: number;
  color?: string;
  label?: string;
}

export declare function Spinner(props: SpinnerProps): JSX.Element;
