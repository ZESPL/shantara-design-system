import * as React from "react";

/** Hierarchy trail, 13px, muted with the current page in Pine Tree. */
export interface BreadcrumbsProps extends React.HTMLAttributes<HTMLElement> {
  items: Array<string | { label: string; href?: string }>;
  /** Defaults to a slash; the brand also uses "·". */
  separator?: React.ReactNode;
}

export declare function Breadcrumbs(props: BreadcrumbsProps): JSX.Element;
