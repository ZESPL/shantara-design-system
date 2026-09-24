import * as React from "react";

/** Transient confirmation. Bottom-centre when `fixed`; otherwise renders inline. */
export interface ToastProps extends React.HTMLAttributes<HTMLDivElement> {
  tone?: "neutral" | "success" | "warning" | "danger";
  title?: string;
  message?: string;
  icon?: React.ReactNode;
  /** Shows a 44×44 dismiss control with a 20px ×. */
  onClose?: () => void;
  /** Accessible name of the dismiss control. Default "Dismiss". */
  closeLabel?: string;
  /** Wraps the toast in the fixed bottom-centre region. */
  fixed?: boolean;
}

export declare function Toast(props: ToastProps): JSX.Element;
