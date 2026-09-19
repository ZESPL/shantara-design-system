import * as React from "react";

/** Transient confirmation. Bottom-centre when `fixed`; otherwise renders inline. */
export interface ToastProps extends React.HTMLAttributes<HTMLDivElement> {
  tone?: "neutral" | "success" | "warning" | "danger";
  title?: string;
  message?: string;
  icon?: React.ReactNode;
  onClose?: () => void;
  /** Wraps the toast in the fixed bottom-centre region. */
  fixed?: boolean;
}

export declare function Toast(props: ToastProps): JSX.Element;
