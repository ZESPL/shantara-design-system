import * as React from "react";

export interface TileProps extends React.HTMLAttributes<HTMLElement> {
  /** A <Media/> node, or pass `src` + `alt` + `ratio`. */
  media?: React.ReactNode;
  src?: string;
  alt?: string;
  ratio?: string;
  eyebrow?: React.ReactNode;
  title: React.ReactNode;
  text?: React.ReactNode;
  /** Duration, read time, size — caption type. */
  meta?: React.ReactNode;
  href?: string;
  onClick?: React.MouseEventHandler;
  /** `lg` for the featured tile in a TileGrid. */
  size?: "md" | "lg";
  /** `row` puts the photograph beside the text from 760px. */
  layout?: "stack" | "row";
  headingLevel?: 2 | 3 | 4;
}
export declare function Tile(props: TileProps): JSX.Element;
