import * as React from "react";

export interface QuoteFact { label: string; text: React.ReactNode }
export interface QuoteBlockProps extends React.HTMLAttributes<HTMLElement> {
  quote: React.ReactNode;
  cite?: React.ReactNode;
  facts?: QuoteFact[];
}
export declare function QuoteBlock(props: QuoteBlockProps): JSX.Element;
