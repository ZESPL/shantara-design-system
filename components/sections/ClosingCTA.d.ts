import * as React from "react";

export interface ClosingCTAProps extends React.HTMLAttributes<HTMLElement> {
  /** A dark photograph. Omit it and the section paints the Pine ground instead. */
  src?: string;
  alt?: string;
  position?: string;
  eyebrow?: React.ReactNode;
  title: React.ReactNode;
  sub?: React.ReactNode;
  /** ONE primary button — Gold on this ground. */
  action?: React.ReactNode;
  /** Phone, email and place lines in small type, above a hairline. */
  contact?: React.ReactNode;
}
export declare function ClosingCTA(props: ClosingCTAProps): JSX.Element;
