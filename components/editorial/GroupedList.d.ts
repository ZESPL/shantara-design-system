import * as React from "react";

export interface ListGroup { label: string; items: string[] }
export interface GroupedListProps extends React.HTMLAttributes<HTMLDivElement> {
  groups: ListGroup[];
  columns?: 1 | 2 | 3;
}
export declare function GroupedList(props: GroupedListProps): JSX.Element;
