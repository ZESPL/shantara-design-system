const NAV = [
  { label: "Conditions", view: "conditions" },
  { label: "Programmes", view: "programme" },
  { label: "Experience", view: "experience" },
  { label: "About", view: "about" },
  { label: "Insights", view: "journal" },
  { label: "Contact", view: "contact" },
];

const TEXT_SIZE_KEY = "shantara-text-size";
const TEXT_SIZES = [
  { id: "md", label: "Default" },
  { id: "lg", label: "Large" },
  { id: "xl", label: "Larger" },
];

function applyTextSize(size) {
  const next = TEXT_SIZES.some((s) => s.id === size) ? size : "md";
  if (typeof document !== "undefined") document.documentElement.setAttribute("data-text-size", next);
  try { localStorage.setItem(TEXT_SIZE_KEY, next); } catch (_) {}
  return next;
}

function readStoredTextSize() {
  try {
    const stored = localStorage.getItem(TEXT_SIZE_KEY);
    if (TEXT_SIZES.some((s) => s.id === stored)) return stored;
  } catch (_) {}
  return "md";
}

function SiteHeader({ view, onNavigate, locale = "en", onLocaleChange }) {
  const { t } = window.ShantaraI18n.useLocale();
  const { Button, IconButton, Icon, Logo, Divider, LanguageSelector } = window.ShantaraDesignSystem_45bbe4;
  const [scrolled, setScrolled] = React.useState(false);
  React.useEffect(() => {
    const el = document.getElementById("kit-scroll");
    if (!el) return;
    const onScroll = () => setScrolled(el.scrollTop > 8);
    el.addEventListener("scroll", onScroll);
    return () => el.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <header style={{ position: "sticky", top: 0, zIndex: 30, background: scrolled ? "color-mix(in srgb, var(--color-merino) 88%, transparent)" : "transparent", backdropFilter: scrolled ? "var(--blur-glass)" : "none", WebkitBackdropFilter: scrolled ? "var(--blur-glass)" : "none", borderBottom: `1px solid ${scrolled ? "var(--border-subtle)" : "transparent"}`, transition: "background-color var(--duration-base) var(--ease-standard), border-color var(--duration-base) var(--ease-standard)" }}>
      <style>{`@media (hover: hover) and (pointer: fine){.sh-site-nav a:hover{color:var(--text-primary)!important}}`}</style>
      <div style={{ maxWidth: "var(--layout-max)", margin: "0 auto", padding: "var(--space-6) var(--layout-gutter-lg)", display: "flex", alignItems: "center", gap: "var(--space-9)" }}>
        <a href={window.ShantaraLocales ? window.ShantaraLocales.kitHash(locale, "home") : "#/en/"} onClick={(e) => { e.preventDefault(); onNavigate("home"); }} style={{ display: "block" }}><Logo mark="wordmark" tone="dark" height={22} assetBase="../../assets" /></a>
        <nav className="sh-site-nav" style={{ display: "flex", alignItems: "center", gap: "var(--space-7)" }}>
          {NAV.map((n) => (
            <a key={n.label} href={window.ShantaraLocales ? window.ShantaraLocales.kitHash(locale, n.view) : "#"} onClick={(e) => { e.preventDefault(); onNavigate(n.view); }}
              aria-current={view === n.view && n.view !== "home" ? "page" : undefined}
              style={{ fontSize: "var(--text-sm)", letterSpacing: "var(--tracking-wide)", whiteSpace: "nowrap", textDecoration: "none", textDecorationLine: view === n.view && n.view !== "home" ? "underline" : "none", textUnderlineOffset: "5px", textDecorationThickness: "1px", color: view === n.view && n.view !== "home" ? "var(--text-primary)" : "var(--text-secondary)", transition: "color var(--duration-fast) var(--ease-standard)" }}>{t(n.label)}</a>
          ))}
        </nav>
        <div style={{ marginInlineStart: "auto", display: "flex", alignItems: "center", gap: "var(--space-4)" }}>
          {LanguageSelector ? <LanguageSelector locale={locale} rest={window.ShantaraLocales ? window.ShantaraLocales.kitViewPath(view) : ""} onSelect={onLocaleChange} /> : null}
          <IconButton label={t("Search")}><Icon name="search" size={18} /></IconButton>
          <IconButton label={t("Call the retreat")}><Icon name="phone" size={18} /></IconButton>
          <Divider orientation="vertical" spacing="var(--space-2)" />
          <Button size="sm" onClick={() => { if (window.ShantaraLocales) window.ShantaraLocales.track("consultation_cta_click", { page_type: view, content_id: view, content_name: view, cta_location: "header" }, { locale }); onNavigate("booking"); }}>{t("Book a Consultation")}</Button>
        </div>
      </div>
    </header>
  );
}

function SiteFooter({ onNavigate, locale = "en" }) {
  const { t } = window.ShantaraI18n.useLocale();
  const { Logo } = window.ShantaraDesignSystem_45bbe4;
  const [textSize, setTextSize] = React.useState(() => readStoredTextSize());
  React.useEffect(() => { applyTextSize(textSize); }, [textSize]);
  const cols = [
    { title: "Explore", links: [
      { label: "Conditions", view: "conditions" },
      { label: "Programmes", view: "programme" },
      { label: "Experience", view: "experience" },
      { label: "Insights", view: "journal" },
    ] },
    { title: "About", links: [
      { label: "Our story", view: "about" },
      { label: "Our approach", view: "about" },
      { label: "Meet our doctors", view: "about" },
      { label: "Medical Editorial Policy", view: "about" },
    ] },
    { title: "Visit", links: [
      { label: "Contact", view: "contact" },
      { label: "Rooms & tariffs", view: "tariffs" },
      { label: "Book a Consultation", view: "booking" },
      { label: "Cancellation policy", view: "contact" },
    ] },
  ];
  return (
    <footer className="sh-site-foot" style={{ position: "relative", background: "var(--surface-inverse)", color: "var(--text-on-inverse)", overflow: "hidden" }}>
      <style>{`.sh-site-foot a{transition:color var(--duration-fast) var(--ease-standard)}@media (hover: hover) and (pointer: fine){.sh-site-foot a:hover{color:var(--color-merino)}}`}</style>
      <span aria-hidden="true" style={{ position: "absolute", left: 0, right: 0, top: 0, height: 264, boxSizing: "border-box", borderBottom: "1px solid var(--pattern-rule-dark)", pointerEvents: "none" }}>
        <span style={{ position: "absolute", inset: 0, backgroundColor: "var(--pattern-ink-dark)", WebkitMaskImage: "url(../../assets/pattern-unit.png)", maskImage: "url(../../assets/pattern-unit.png)", WebkitMaskRepeat: "repeat", maskRepeat: "repeat", WebkitMaskSize: "132px 132px", maskSize: "132px 132px", opacity: 0.4 }} />
      </span>
      <div style={{ position: "relative", maxWidth: "var(--layout-max)", margin: "0 auto", padding: "calc(264px + var(--space-11)) var(--layout-gutter-lg) var(--space-8)", display: "grid", gridTemplateColumns: "1.4fr repeat(3, 1fr)", gap: "var(--space-9)" }}>
        <div>
          <Logo mark="full" tone="cream" height={44} assetBase="../../assets" />
          <p style={{ marginTop: "var(--space-6)", color: "var(--color-cotton-seed)", fontSize: "var(--text-sm)", lineHeight: "var(--leading-relaxed)", maxWidth: "32ch" }}>{t("A naturopathy retreat on four hilltop acres above the Chennamangallur valley, Kozhikode. An evolution of Hygiene Nature Cure Hospital, caring for guests since 2000.")}</p>
          <div style={{ marginTop: "var(--space-7)", display: "flex", flexDirection: "column", gap: "var(--space-2)", fontSize: "var(--text-sm)", color: "var(--color-cotton-seed)" }}>
            <span className="shantara-dir-ltr">heal@shantara.life</span>
            <span className="shantara-dir-ltr" style={{ fontVariantNumeric: "tabular-nums" }}>+91 9553 600 100 · +91 9553 700 100</span>
          </div>
        </div>
        {cols.map((c) => (
          <div key={c.title} style={{ display: "flex", flexDirection: "column", gap: "var(--space-4)" }}>
            <span className="shantara-eyebrow" style={{ color: "var(--color-gold-crayola)" }}>{t(c.title)}</span>
            {c.links.map((l) => (
              <a key={l.label} href={window.ShantaraLocales && l.view ? window.ShantaraLocales.kitHash(locale, l.view) : "#"} onClick={(e) => { e.preventDefault(); if (l.view && onNavigate) onNavigate(l.view); }} style={{ fontSize: "var(--text-sm)", color: "var(--color-cotton-seed)", textDecoration: "none", transition: "color var(--duration-fast) var(--ease-standard)" }}>{t(l.label)}</a>
            ))}
          </div>
        ))}
      </div>
      <div style={{ position: "relative", maxWidth: "var(--layout-max)", margin: "0 auto", padding: "var(--space-6) var(--layout-gutter-lg) var(--space-9)", borderTop: "1px solid color-mix(in srgb, var(--color-merino) 14%, transparent)", display: "flex", flexWrap: "wrap", alignItems: "center", gap: "var(--space-7)", fontSize: "var(--text-xs)", color: "color-mix(in srgb, var(--color-cotton-seed) 70%, transparent)" }}>
        <span>{t("© 2026 Shantara Naturopathy")}</span><span>{t("Privacy")}</span><span>{t("Terms")}</span>
        <div role="group" aria-label={t("Text size")} style={{ display: "inline-flex", alignItems: "center", gap: "var(--space-3)", marginInlineStart: "auto" }}>
          <span style={{ color: "color-mix(in srgb, var(--color-cotton-seed) 70%, transparent)" }}>{t("Text size")}</span>
          {TEXT_SIZES.map((s) => (
            <button
              key={s.id}
              type="button"
              aria-pressed={textSize === s.id}
              onClick={() => setTextSize(applyTextSize(s.id))}
              style={{
                appearance: "none",
                border: "1px solid " + (textSize === s.id ? "var(--color-merino)" : "color-mix(in srgb, var(--color-merino) 28%, transparent)"),
                background: textSize === s.id ? "color-mix(in srgb, var(--color-merino) 14%, transparent)" : "transparent",
                color: "var(--color-merino)",
                font: "var(--type-label)",
                letterSpacing: "var(--tracking-wide)",
                padding: "6px 10px",
                borderRadius: "var(--radius-sm)",
                cursor: "pointer",
              }}
            >{t(s.label)}</button>
          ))}
        </div>
        <span>{t("Kozhikode · Kerala · India")}</span>
      </div>
    </footer>
  );
}

Object.assign(window, { SiteHeader, SiteFooter, applyTextSize, readStoredTextSize });
