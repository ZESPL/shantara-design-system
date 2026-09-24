import * as React from "react";

export interface NumeralsSplitProps extends React.HTMLAttributes<HTMLDivElement> {
  eyebrow?: React.ReactNode;
  title: React.ReactNode;
  sub?: React.ReactNode;
  /** Two or three figures from content/site.json `stats`. A fourth is dropped. */
  numerals: { value: React.ReactNode; label: React.ReactNode }[];
  /** A small source or context line across the full width. */
  footnote?: React.ReactNode;
}
export declare function NumeralsSplit(props: NumeralsSplitProps): JSX.Element;
