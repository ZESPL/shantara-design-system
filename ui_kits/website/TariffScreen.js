const TARIFF = [
  { name: "Executive Suite", size: "530 sq.ft", occ: "Single or double", single: "22,000", double: "28,000" },
  { name: "Premium Room", size: "460 sq.ft", occ: "Single or double", single: "18,000", double: "24,000" },
  { name: "Superior Room", size: "300 sq.ft", occ: "Single or double", single: "16,000", double: "22,000" },
  { name: "Deluxe Room", size: "260 sq.ft", occ: "Single only", single: "14,000", double: null },
  { name: "Standard Room", size: "220 sq.ft", occ: "Single only", single: "12,000", double: null },
];

const INCLUDED = [
  "Daily doctor consultation",
  "All prescribed naturopathy therapies",
  "Yoga therapy and meditation",
  "Personalised diet therapy",
  "Wellness attire and daily laundry",
  "Airport and railway transfers",
  "All applicable taxes",
];

function TariffScreen({ onNavigate }) {
  const { t } = window.ShantaraI18n.useLocale();
  const { Button, Breadcrumbs, Divider, Card, Icon } = window.ShantaraDesignSystem_45bbe4;
  return (
    <main>
      <section style={{ position: "relative", marginTop: "-96px", paddingTop: "96px", marginBottom: "var(--space-9)" }}>
        <Photo name="room-premium" alt={t("Rooms and tariffs")} height={420} radius="0px" scrim="bottom">
          <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "flex-end" }}>
            <div style={{ maxWidth: "var(--layout-max)", width: "100%", margin: "0 auto", padding: "0 var(--layout-gutter-lg) var(--space-11)" }}>
              <span className="shantara-eyebrow" style={{ color: "var(--color-gold-crayola)" }}>{t("Rooms & tariffs")}</span>
              <h1 style={{ font: "var(--type-h1)", color: "var(--color-merino)", margin: "var(--space-4) 0 var(--space-5)", maxWidth: "14ch" }}>{t("Rooms and tariffs")}</h1>
              <p style={{ font: "var(--type-lead)", color: "var(--color-merino)", maxWidth: "42ch", margin: 0 }}>{t("Shantara has 52 rooms across five accommodation categories, designed for comfortable residential stays.")}</p>
            </div>
          </div>
        </Photo>
      </section>
      <div style={{ maxWidth: "var(--layout-max)", margin: "0 auto", padding: "0 var(--layout-gutter-lg) var(--section-y)" }}>
      <Breadcrumbs items={[{ label: t("Stay"), href: window.ShantaraLocales ? window.ShantaraLocales.kitHash(window.ShantaraI18n.currentLocaleCode(), "home") : "#/en/" }, t("Rooms & tariffs")]} />
      <div style={{ display: "flex", gap: "var(--space-11)", marginTop: "var(--space-7)", alignItems: "flex-start", flexWrap: "wrap" }}>
        <div style={{ flex: "1 1 520px", minWidth: 0 }}>
          <span className="shantara-eyebrow">{t("Rooms and tariffs")}</span>
          <h2 style={{ font: "var(--type-h1)", fontSize: "var(--text-3xl)", margin: "var(--space-4) 0 var(--space-6)" }}>{t("Rooms and tariffs")}</h2>
          <p style={{ font: "var(--type-lead)", margin: "0 0 var(--space-8)", maxWidth: "52ch" }}>{t("Each nightly rate includes the stay items listed here.")}</p>
          {TARIFF.map((r) => (
            <div key={r.name} style={{ display: "flex", alignItems: "baseline", gap: "var(--space-5)", borderTop: "1px solid var(--border-subtle)", padding: "18px 0" }}>
              <div>
                <h2 style={{ font: "var(--type-h4)", fontSize: "var(--text-lg)", margin: 0 }}>{t(r.name)}</h2>
                <p style={{ font: "var(--type-body-sm)", color: "var(--text-secondary)", margin: "var(--space-2) 0 0" }}>
                  {r.size} · {t(r.occ)}
                  {r.double ? ` · ${t("Double / night")} ₹${r.double}` : ""}
                </p>
              </div>
              <span style={{ marginInlineStart: "auto", font: "var(--weight-light) var(--text-2xl)/1 var(--font-display)", fontVariantNumeric: "tabular-nums", whiteSpace: "nowrap" }}>₹{r.single}</span>
            </div>
          ))}
          <p style={{ fontSize: "var(--text-sm)", color: "var(--text-secondary)", margin: "var(--space-7) 0 0", maxWidth: "72ch" }}>{t("Rates valid to 31 December 2026. Reservations are confirmed after a preliminary consultation.")}</p>
        </div>
        <Card padding="lg" style={{ flex: "0 1 360px" }}>
          <span className="shantara-eyebrow">{t("What your stay includes")}</span>
          <h2 style={{ font: "var(--type-h4)", margin: "var(--space-4) 0 var(--space-6)" }}>{t("What the nightly rate includes")}</h2>
          <ul style={{ margin: 0, padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: "var(--space-4)" }}>
            {INCLUDED.map((line) => (
              <li key={line} style={{ display: "flex", gap: "var(--space-3)", alignItems: "flex-start", fontSize: "var(--text-sm)", borderTop: "1px solid var(--border-subtle)", paddingTop: "var(--space-4)" }}>
                <Icon name="leaf" size={16} color="var(--text-brand)" /><span>{t(line)}</span>
              </li>
            ))}
          </ul>
          <Divider spacing="var(--space-7)" />
          <Button fullWidth size="lg" onClick={() => onNavigate("booking")}>{t("Book a Consultation")}</Button>
          <Button fullWidth variant="secondary" style={{ marginTop: "var(--space-4)" }} onClick={() => onNavigate("home")}>{t("Back to home")}</Button>
        </Card>
      </div>
      </div>
    </main>
  );
}

Object.assign(window, { TariffScreen, TARIFF });
