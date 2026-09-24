import * as React from "react";

export interface ProseProps extends React.HTMLAttributes<HTMLElement> {
  /** Rendered HTML from the CMS / Markdown (trusted, sanitised upstream). Or pass children. */
  html?: string;
  children?: React.ReactNode;
  /** `md` body 17px (default) or `lg` lead size for short essays. */
  size?: "md" | "lg";
  as?: "div" | "article" | "section";
}
export declare function Prose(props: ProseProps): JSX.Element;
