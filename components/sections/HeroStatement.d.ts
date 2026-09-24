import * as React from "react";

export interface HeroStatementProps extends React.HTMLAttributes<HTMLElement> {
  eyebrow?: React.ReactNode;
  /** The page title as a full sentence, Diodrum Light. */
  title: React.ReactNode;
  sub?: React.ReactNode;
  actions?: React.ReactNode;
  /** A <Breadcrumbs/> node, placed above the eyebrow. */
  breadcrumbs?: React.ReactNode;
  /** Optional right-hand column from 1000px (7/4 split) — a short fact list or a link. Stacks below on smaller screens. */
  aside?: React.ReactNode;
  /** Light grounds only. */
  ground?: "merino" | "stone";
  /** `true` (default) keeps a 420–720px floor and sits the statement low; `false` is content-height. */
  tall?: boolean;
  /** Headline size. Default `h1` (34→64px). */
  size?: "display" | "h1" | "statement";
  titleAs?: "h1" | "h2";
  /** Headline line length. Default `22ch`. */
  measure?: string;
}
export declare function HeroStatement(props: HeroStatementProps): JSX.Element;
