import * as React from "react";

export interface PaginationProps extends React.HTMLAttributes<HTMLElement> {
  /** Current page, 1-based. */
  page: number;
  pageCount: number;
  /** Build each page's URL (renders crawlable links), e.g. n => n === 1 ? "/en/journal" : `/en/journal/${n}`. */
  hrefFor?: (n: number) => string;
  /** Client-side paging; with hrefFor it runs alongside the link. */
  onChange?: (n: number) => void;
  /** Pages shown either side of the current one (default 1). */
  siblings?: number;
  prevLabel?: string;
  nextLabel?: string;
  /** nav aria-label, default "Pages". */
  label?: string;
}
export declare function Pagination(props: PaginationProps): JSX.Element;
