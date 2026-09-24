import * as React from "react";

/** Modal: Merino surface, 4px radius (--radius-card), Light 30px title, --surface-overlay scrim, focus trap + Escape. */
export interface DialogProps extends React.HTMLAttributes<HTMLDivElement> {
  open?: boolean;
  title?: string;
  /** Short supporting sentence under the title. */
  description?: string;
  size?: "sm" | "md" | "lg";
  /** Omit to make the dialog non-dismissible (no × and no scrim click). */
  onClose?: () => void;
  /** Accessible name of the 44×44 close button. Default "Close". */
  closeLabel?: string;
  /** Right-aligned action row (primary last); stacks full width under 520px. */
  footer?: React.ReactNode;
  children?: React.ReactNode;
}

export declare function Dialog(props: DialogProps): JSX.Element | null;
