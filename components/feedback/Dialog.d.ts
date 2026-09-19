import * as React from "react";

/** Modal sheet: 24px radius, Pine Tree 55% scrim, 12px rise on entry. */
export interface DialogProps extends React.HTMLAttributes<HTMLDivElement> {
  open?: boolean;
  title?: string;
  /** Short supporting sentence under the title. */
  description?: string;
  size?: "sm" | "md" | "lg";
  /** Omit to make the dialog non-dismissible (no × and no scrim click). */
  onClose?: () => void;
  /** Right-aligned action row, usually two Buttons. */
  footer?: React.ReactNode;
  children?: React.ReactNode;
}

export declare function Dialog(props: DialogProps): JSX.Element | null;
