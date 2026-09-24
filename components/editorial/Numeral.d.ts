import * as React from "react";

export interface NumeralProps extends React.HTMLAttributes<HTMLDivElement> {
  value: React.ReactNode;
  label?: React.ReactNode;
}
export declare function Numeral(props: NumeralProps): JSX.Element;
