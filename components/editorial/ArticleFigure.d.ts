import * as React from "react";

export interface ArticleFigureProps extends React.HTMLAttributes<HTMLElement> {
  src?: string;
  /** Describe the picture; required unless purely decorative. */
  alt?: string;
  /** A custom node (diagram, chart) in place of the photograph. */
  media?: React.ReactNode;
  ratio?: "4:3" | "3:2" | "16:9" | "4:5" | "1:1" | string;
  mobileRatio?: string;
  /** One sentence saying what the picture shows. */
  caption?: React.ReactNode;
  /** Photographer or source, e.g. "Photograph: Shantara". */
  credit?: React.ReactNode;
  /** `prose` (68ch, default), `wide` (breaks out from 1000px inside Prose), `full` (container width). */
  width?: "prose" | "wide" | "full";
}
export declare function ArticleFigure(props: ArticleFigureProps): JSX.Element;
