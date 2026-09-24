import * as React from "react";

/** Instant-effect toggle, 44×26 track. Use for settings that apply immediately. */
export interface SwitchProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: React.ReactNode;
  /** Puts the label on the left and stretches the row full width (settings lists). */
  labelFirst?: boolean;
  /** Secondary line under the label. */
  description?: string;
}

export declare function Switch(props: SwitchProps): JSX.Element;
