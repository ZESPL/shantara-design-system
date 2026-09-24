import * as React from "react";

export interface FormSplitProps extends React.HTMLAttributes<HTMLDivElement> {
  /** The form: fields, consent and one primary button. Always first. */
  children?: React.ReactNode;
  /** The Stone panel — who will call (a <PortraitFrame/>) and what happens next (<NumberedSteps/>). Sticky from 1000px. */
  aside?: React.ReactNode;
}
export declare function FormSplit(props: FormSplitProps): JSX.Element;
