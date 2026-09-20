import * as React from "react";

export interface LanguageSelectorOption {
  code: string;
  nativeName: string;
  compact: string;
  direction: "ltr" | "rtl";
  current: boolean;
  href: string | null;
  available: boolean;
}

export interface LanguageSelectorProps extends React.HTMLAttributes<HTMLDivElement> {
  locale?: string;
  /** Map of locale → { path | slug, translation_status }. Missing locales are omitted. */
  pageTranslations?: Record<string, { path?: string; slug?: string; translation_status?: string; published?: boolean }>;
  /** Path after the locale prefix, used when pageTranslations is omitted. */
  rest?: string;
  onSelect?: (code: string, option: LanguageSelectorOption) => void;
  /** Compact trigger uses EN / AR / … Native names always appear in the list. No flags. */
  compact?: boolean;
  label?: string;
  /** Specimen-only override. Production omits this and reads enabled locales from locales.js. */
  options?: LanguageSelectorOption[];
}

/**
 * Reusable locale control. Renders nothing when only one locale is enabled.
 * Never uses flags as the primary representation.
 */
export declare function LanguageSelector(props: LanguageSelectorProps): JSX.Element | null;
