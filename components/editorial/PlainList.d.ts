import * as React from "react";

export type PlainItem = string | { title: React.ReactNode; text?: React.ReactNode };
export interface PlainListProps extends React.HTMLAttributes<HTMLUListElement> {
  items: PlainItem[];
  columns?: 1 | 2 | 3;
  size?: "sm" | "md";
  rules?: boolean;
}
export declare function PlainList(props: PlainListProps): JSX.Element;
