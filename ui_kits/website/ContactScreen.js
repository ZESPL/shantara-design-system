function ContactScreen({ onNavigate }) {
  const { t } = window.ShantaraI18n.useLocale();
  const { Button, Card, Breadcrumbs, Icon, Divider } = window.ShantaraDesignSystem_45bbe4;
  return (
    <main style={{ maxWidth: "var(--layout-max)", margin: "0 auto", padding: "var(--space-8) var(--layout-gutter-lg) var(--section-y)" }}>
      <Breadcrumbs items={[{ label: t("Home"), href: "#" }, t("Contact")]} />
      <span className="shantara-eyebrow" style={{ display: "block", marginTop: "var(--space-7)" }}>{t("Contact")}</span>
      <h1 style={{ font: "var(--type-h1)", fontSize: "var(--text-3xl)", margin: "var(--space-4) 0 var(--space-5)" }}>{t("How to reach the retreat")}</h1>
      <p style={{ font: "var(--type-lead)", color: "var(--text-secondary)", maxWidth: "52ch", margin: "0 0 var(--space-9)" }}>{t("Address, telephone, email and WhatsApp. The structured lead path is still Book a Consultation.")}</p>
      <div style={{ display: "grid", gridTemplateColumns: "1.35fr 1fr", gap: "var(--space-8)", alignItems: "stretch", marginBottom: "var(--space-8)" }}>
        <Photo name="water-wall" alt={t("The water wall court")} height={360} />
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
          <span className="shantara-eyebrow">{t("The grounds")}</span>
          <h2 style={{ font: "var(--type-h3)", margin: "var(--space-4) 0 var(--space-6)" }}>{t("The water wall court")}</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-4)", borderTop: "1px solid var(--border-subtle)", paddingTop: "var(--space-5)" }}>
            <p style={{ margin: 0, color: "var(--text-secondary)" }}>{t("Guided meditation is held here at six each evening.")}</p>
            <p style={{ margin: 0, color: "var(--text-secondary)" }}>{t("Phones are left at the entrance to the court, without exception.")}</p>
          </div>
        </div>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "var(--space-8)", alignItems: "start" }}>
        <Card padding="lg">
          <h2 style={{ font: "var(--type-h4)", margin: "0 0 var(--space-6)" }}>{t("Location")}</h2>
          <p style={{ margin: "0 0 var(--space-4)" }}>{t("Chennamangallur valley, Kozhikode, Kerala, India")}</p>
          <p style={{ font: "var(--type-body-sm)", color: "var(--text-secondary)", margin: "0 0 var(--space-6)" }}>{t("Four hilltop acres. Airport and railway transfers are included with a confirmed stay — details after consultation.")}</p>
          <Divider spacing="var(--space-5)" />
          <div style={{ display: "flex", flexDirection: "column" }}>
            {[["Calicut International Airport", "28 km", "55 min"], ["Kozhikode railway station", "14 km", "30 min"]].map(([place, km, mins]) => (
              <div key={place} style={{ display: "flex", alignItems: "baseline", gap: "var(--space-5)", borderTop: "1px solid var(--border-subtle)", padding: "var(--space-4) 0" }}>
                <div style={{ flex: 1 }}>
                  <div>{t(place)}</div>
                  <div style={{ fontSize: "var(--text-sm)", color: "var(--text-secondary)" }}>{t("Transfer included with a confirmed stay")}</div>
                </div>
                <div style={{ textAlign: "end" }}>
                  <div style={{ color: "var(--text-brand)", fontVariantNumeric: "tabular-nums", fontWeight: "var(--weight-medium)" }}>{km}</div>
                  <div style={{ fontSize: "var(--text-sm)", color: "var(--text-secondary)", fontVariantNumeric: "tabular-nums" }}>{mins}</div>
                </div>
              </div>
            ))}
          </div>
          <Divider spacing="var(--space-5)" />
          <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-3)", fontSize: "var(--text-sm)" }}>
            <span>heal@shantara.life</span>
            <span style={{ fontVariantNumeric: "tabular-nums" }}>+91 9553 600 100 · +91 9553 700 100</span>
          </div>
        </Card>
        <Card tone="raised" padding="lg">
          <span className="shantara-eyebrow">{t("Next step")}</span>
          <h2 style={{ font: "var(--type-h4)", margin: "var(--space-4) 0 var(--space-4)" }}>{t("Book a Consultation")}</h2>
          <p style={{ font: "var(--type-body-sm)", color: "var(--text-secondary)", margin: "0 0 var(--space-6)" }}>{t("WhatsApp and phone are secondary. Use the same consultation form everywhere.")}</p>
          <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-4)" }}>
            <Button fullWidth size="lg" onClick={() => onNavigate("booking")}>{t("Book a Consultation")}</Button>
            <Button fullWidth variant="secondary" onClick={() => onNavigate("tariffs")} endIcon={<Icon name="arrow-right" size={16} />}>{t("View the tariff card")}</Button>
          </div>
        </Card>
      </div>
    </main>
  );
}

Object.assign(window, { ContactScreen });
