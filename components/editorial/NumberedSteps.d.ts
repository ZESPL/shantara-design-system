import * as React from "react";

export interface StepItem { title: React.ReactNode; text?: React.ReactNode }
export interface NumberedStepsProps extends React.OlHTMLAttributes<HTMLOListElement> {
  items: StepItem[];
  /** Columns from 1000px (2 from 760px). */
  columns?: 1 | 2 | 3 | 4;
  start?: number;
  /** Hairline above each step. */
  rules?: boolean;
  headingLevel?: 3 | 4;
}
export declare function NumberedSteps(props: NumberedStepsProps): JSX.Element;
