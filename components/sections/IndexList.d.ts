import * as React from "react";

export interface IndexItem {
  title: React.ReactNode;
  /** One line. */
  text?: React.ReactNode;
  href?: string;
  onClick?: React.MouseEventHandler;
}

export interface IndexListProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Groups with a label and rows. Labels come from content (e.g. a condition's `listing_group`). */
  groups: { label: string; items: IndexItem[] }[];
  /** Rows per group from 760px. Default 2. */
  columns?: 1 | 2;
  /** Level of the group label; row titles are one level below. Default 2. */
  headingLevel?: 2 | 3 | 4;
}
export declare function IndexList(props: IndexListProps): JSX.Element;
