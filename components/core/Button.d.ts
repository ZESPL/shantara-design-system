import * as React from "react";

/**
 * Primary action control. Pill-shaped, Diodrum Medium, warm hover shifts.
 */
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Visual treatment. `accent` is Gold Crayola; `inverse` sits on Pine Tree or photography. */
  variant?: "primary" | "accent" | "secondary" | "ghost" | "inverse";
  size?: "sm" | "md" | "lg";
  fullWidth?: boolean;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  /** Render as another element/component — pass `href` to get an anchor automatically. */
  as?: React.ElementType;
  href?: string;
  children?: React.ReactNode;
}

export declare function Button(props: ButtonProps): JSX.Element;
