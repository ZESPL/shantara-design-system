import * as React from "react";

export interface TimeRow { time: React.ReactNode; title: React.ReactNode; text?: React.ReactNode }
export interface TimeTableProps extends React.OlHTMLAttributes<HTMLOListElement> {
  rows: TimeRow[];
  headingLevel?: 3 | 4;
}
export declare function TimeTable(props: TimeTableProps): JSX.Element;
