import * as React from "react";

export interface StatementProps extends React.HTMLAttributes<HTMLDivElement> {
  eyebrow?: React.ReactNode;
  /** The headline — one full sentence, Diodrum Light. */
  children: React.ReactNode;
  /** One quiet supporting line in body size. */
  sub?: React.ReactNode;
  /** Buttons, laid out in `.sh-actions` and stacked full width on phones. */
  actions?: React.ReactNode;
  as?: "h1" | "h2" | "h3" | "p";
  /** display 40→84, h1 34→64, statement 28→48, title 22→30 — all fluid. */
  size?: "display" | "h1" | "statement" | "title";
  /** Line length for the headline. Default `--measure-statement` (30ch). */
  measure?: string;
}
export declare function Statement(props: StatementProps): JSX.Element;
