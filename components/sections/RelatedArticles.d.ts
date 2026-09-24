import * as React from "react";

export interface RelatedArticle {
  title: React.ReactNode;
  href: string;
  src?: string;
  alt?: string;
  /** Default "3:2". */
  ratio?: string;
  category?: string;
  /** e.g. "4 min read". */
  readTime?: string;
  date?: string;
  dateTime?: string;
  /** Optional one line (the article's lead). Usually omitted. */
  text?: React.ReactNode;
}
export interface RelatedArticlesProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Default "Related reading". */
  title?: React.ReactNode;
  /** 2–3 articles (extra ones are dropped). */
  articles: RelatedArticle[];
  /** Usually <TextLink href="/en/insights">All insights</TextLink>. */
  action?: React.ReactNode;
  layout?: "3" | "2";
  /** Icon-led meta (tag / clock / calendar) instead of "Category · 4 min read". */
  icons?: boolean;
  headingLevel?: 2 | 3;
}
export declare function RelatedArticles(props: RelatedArticlesProps): JSX.Element;
