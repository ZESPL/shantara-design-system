import * as React from "react";

export interface PanoramaCaptionProps extends React.HTMLAttributes<HTMLElement> {
  src: string;
  /** Describe the scene. */
  alt?: string;
  position?: string;
  /** object-position under 760px — choose the part of the panorama that survives a 4:5 crop. */
  mobilePosition?: string;
  eyebrow?: React.ReactNode;
  /** A short caption, not a headline. No button. */
  title?: React.ReactNode;
  /** Desktop ratio. Default `21:9`. */
  ratio?: string;
  /** Ratio under 760px. Default `4:5`. */
  mobileRatio?: string;
  headingLevel?: 2 | 3;
}
export declare function PanoramaCaption(props: PanoramaCaptionProps): JSX.Element;
