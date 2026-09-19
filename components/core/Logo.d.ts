import * as React from "react";

/**
 * The Shantara mark, supplied as SVG in four brand colourways. Never redraw or recolour outside these tones.
 */
export interface LogoProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  /** `full` = frangipani + wordmark lockup, `icon` = mark only, `wordmark` = type only. */
  mark?: "full" | "icon" | "wordmark";
  /** Colourway: `dark` (Pine Tree), `olive` (Himalaya), `cream` (Merino), `gold` (Gold Crayola). */
  tone?: "dark" | "olive" | "cream" | "gold";
  /** Rendered height in px. Defaults: full 56, icon 40, wordmark 22. */
  height?: number | string;
  /** Override the assets folder URL (auto-derived from the loaded bundle by default). */
  assetBase?: string;
}

export declare function Logo(props: LogoProps): JSX.Element;
