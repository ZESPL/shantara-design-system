import React from "react";

const CSS_ID = "sh-lang-css";

function localesApi() {
  return (typeof window !== "undefined" && window.ShantaraLocales) || null;
}

function i18n() {
  return (typeof window !== "undefined" && window.ShantaraI18n) || { t: (s) => s };
}

export function LanguageSelector({
  locale,
  pageTranslations,
  rest = "",
  onSelect,
  compact = true,
  label,
  options: optionsProp,
  style,
  ...restProps
}) {
  const api = localesApi();
  const { t } = i18n();
  const current = (api && api.localeRecord(locale)) || { code: "en", compact: "EN", nativeName: "English" };
  const options = optionsProp || (api
    ? api.languageSelectorOptions({ currentLocale: current.code, pageTranslations, rest })
    : []);
  const [open, setOpen] = React.useState(false);
  const root = React.useRef(null);

  React.useEffect(() => {
    if (!open) return undefined;
    const onDoc = (event) => {
      if (root.current && !root.current.contains(event.target)) setOpen(false);
    };
    const onKey = (event) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.addEventListener("mousedown", onDoc);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDoc);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  if (!options.length) return null;

  const accessibleName = label || t("Language");
  const triggerLabel = compact ? current.compact : current.nativeName;

  return (
    <div ref={root} className="sh-lang" style={style} {...restProps}>
      <button
        type="button"
        className="sh-lang-btn"
        aria-label={`${accessibleName}: ${current.nativeName}`}
        aria-haspopup="listbox"
        aria-expanded={open}
        onClick={() => setOpen((value) => !value)}
      >
        {triggerLabel}
      </button>
      {open ? (
        <ul className="sh-lang-list" role="listbox" aria-label={t("Choose language")}>
          {options.map((opt) => {
            const selected = opt.current;
            const disabled = opt.available === false;
            const Tag = opt.href && !disabled && !onSelect ? "a" : "button";
            return (
              <li key={opt.code} role="none">
                <Tag
                  className="sh-lang-opt"
                  role="option"
                  lang={opt.code}
                  href={Tag === "a" ? opt.href : undefined}
                  hrefLang={Tag === "a" ? opt.code : undefined}
                  aria-selected={selected}
                  aria-current={selected ? "true" : undefined}
                  aria-disabled={disabled || undefined}
                  disabled={Tag === "button" ? disabled : undefined}
                  type={Tag === "button" ? "button" : undefined}
                  onClick={(event) => {
                    if (disabled) {
                      event.preventDefault();
                      return;
                    }
                    setOpen(false);
                    if (onSelect) {
                      event.preventDefault();
                      onSelect(opt.code, opt);
                    }
                  }}
                >
                  {opt.nativeName}
                </Tag>
              </li>
            );
          })}
        </ul>
      ) : null}
    </div>
  );
}

if (typeof window !== "undefined") {
  const ns = window.ShantaraDesignSystem_45bbe4 || (window.ShantaraDesignSystem_45bbe4 = {});
  ns.LanguageSelector = LanguageSelector;
}
