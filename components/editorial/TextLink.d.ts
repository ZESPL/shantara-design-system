import * as React from "react";

export interface TextLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  /** Show the arrow. Default true. */
  arrow?: boolean;
  onClick?: React.MouseEventHandler;
  children: React.ReactNode;
}
export declare function TextLink(props: TextLinkProps): JSX.Element;
