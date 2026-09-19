import * as React from "react";

/**
 * Content container: 16px radius, hairline border, whisper-soft warm shadow.
 */
export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  tone?: "default" | "raised" | "sunken" | "outline" | "brand" | "inverse";
  padding?: "none" | "sm" | "md" | "lg";
  /** Image URL rendered flush at the top of the card. */
  media?: string;
  /** Alt text for `media`. Leave empty only when the image is decorative. */
  mediaAlt?: string;
  mediaHeight?: number | string;
  /** Adds the lift-on-hover treatment. With `onClick` the card also becomes a keyboard-operable button (role, tab order, Enter/Space). */
  interactive?: boolean;
  footer?: React.ReactNode;
  children?: React.ReactNode;
}

export declare function Card(props: CardProps): JSX.Element;
