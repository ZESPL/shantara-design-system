function conditionListingGroups() {
  const items = (window.ShantaraContent.conditions || []).filter((c) => c.listing_group && c.summary && c.photo);
  const order = ["Metabolic", "Hormonal", "Musculoskeletal"];
  return order
    .map((name) => ({
      name,
      items: items
        .filter((c) => c.listing_group === name)
        .map((c) => ({ name: c.name, copy: c.summary, photo: c.photo })),
    }))
    .filter((g) => g.items.length);
}

function ConditionsScreen({ onNavigate }) {
  const { t } = window.ShantaraI18n.useLocale();
  const { Card, Breadcrumbs } = window.ShantaraDesignSystem_45bbe4;
  const groups = conditionListingGroups();
  return (
    <main style={{ maxWidth: "var(--layout-max)", margin: "0 auto", padding: "var(--space-8) var(--layout-gutter-lg) var(--section-y)" }}>
      <Breadcrumbs items={[{ label: t("Home"), href: window.ShantaraLocales ? window.ShantaraLocales.kitHash(window.ShantaraI18n.currentLocaleCode(), "home") : "#/en/" }, t("Conditions")]} />
      <span className="shantara-eyebrow" style={{ display: "block", marginTop: "var(--space-7)" }}>{t("Conditions")}</span>
      <h1 style={{ font: "var(--type-h1)", fontSize: "var(--text-3xl)", margin: "var(--space-4) 0 var(--space-5)", maxWidth: "22ch" }}>{t("Conditions we commonly see")}</h1>
      <p style={{ font: "var(--type-lead)", color: "var(--text-secondary)", maxWidth: "58ch", margin: "0 0 var(--space-9)" }}>{t("Our doctors see guests with a range of long-standing conditions. Programmes are planned after consultation and assessment.")}</p>
      {groups.map((g) => (
        <section key={g.name} style={{ marginBottom: "var(--space-10)" }}>
          <h2 style={{ font: "var(--type-h3)", fontSize: "var(--text-2xl)", margin: "0 0 var(--space-6)" }}>{t(g.name)}</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(2, minmax(0,1fr))", gap: "var(--space-7)" }}>
            {g.items.map((item) => (
              <Card
                key={item.name}
                interactive
                padding="md"
                media={"../../assets/photos/" + item.photo + ".jpg"}
                mediaAlt={t(item.name)}
                onClick={() => onNavigate("programme")}
              >
                <h3 style={{ font: "var(--type-h4)", margin: "0 0 var(--space-3)" }}>{t(item.name)}</h3>
                <p style={{ font: "var(--type-body-sm)", color: "var(--text-secondary)", margin: 0 }}>{t(item.copy)}</p>
              </Card>
            ))}
          </div>
        </section>
      ))}
    </main>
  );
}

Object.assign(window, { ConditionsScreen });
