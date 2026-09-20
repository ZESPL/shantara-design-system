const GROUPS = [
  {
    name: "Metabolic",
    items: [
      { name: "Diabetes", copy: "Residential programs planned around blood-sugar control, diet therapy and daily doctor review." },
      { name: "Weight management", copy: "Prescribed meals, activity and therapies, with weight and vitals reviewed each morning." },
    ],
  },
  {
    name: "Hormonal",
    items: [
      { name: "PCOS", copy: "A condition page is published only when Shantara has original, medically reviewed content for it." },
    ],
  },
  {
    name: "Musculoskeletal",
    items: [
      { name: "Arthritis", copy: "Composition can differ from a diabetes page — sections follow the visitor’s questions, not a template." },
    ],
  },
];

function ConditionsScreen({ onNavigate }) {
  const { t } = window.ShantaraI18n.useLocale();
  const { Button, Card, Badge, Breadcrumbs } = window.ShantaraDesignSystem_45bbe4;
  return (
    <main style={{ maxWidth: "var(--layout-max)", margin: "0 auto", padding: "var(--space-8) var(--layout-gutter-lg) var(--section-y)" }}>
      <Breadcrumbs items={[{ label: t("Home"), href: "#" }, t("Conditions")]} />
      <span className="shantara-eyebrow" style={{ display: "block", marginTop: "var(--space-7)" }}>{t("Conditions")}</span>
      <h1 style={{ font: "var(--type-h1)", fontSize: "var(--text-3xl)", margin: "var(--space-4) 0 var(--space-5)", maxWidth: "22ch" }}>{t("Conditions we commonly see")}</h1>
      <p style={{ font: "var(--type-lead)", color: "var(--text-secondary)", maxWidth: "58ch", margin: "0 0 var(--space-9)" }}>{t("This listing groups conditions visually. It does not create category URLs. A full condition page is added only when there is original content, a clinical perspective, a relevant program, and medical review.")}</p>
      {GROUPS.map((g) => (
        <section key={g.name} style={{ marginBottom: "var(--space-10)" }}>
          <h2 style={{ font: "var(--type-h3)", fontSize: "var(--text-2xl)", margin: "0 0 var(--space-6)" }}>{t(g.name)}</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(2, minmax(0,1fr))", gap: "var(--space-5)" }}>
            {g.items.map((item) => (
              <Card key={item.name} padding="lg" style={{ background: "var(--color-pearl-bush)", borderTop: "2px solid var(--color-himalaya)", boxShadow: "none" }}>
                <Badge tone="outline">{t(g.name)}</Badge>
                <h3 style={{ font: "var(--type-h4)", margin: "var(--space-4) 0 var(--space-3)" }}>{t(item.name)}</h3>
                <p style={{ font: "var(--type-body-sm)", color: "var(--text-secondary)", margin: "0 0 var(--space-6)" }}>{t(item.copy)}</p>
                <div style={{ display: "flex", gap: "var(--space-3)", flexWrap: "wrap" }}>
                  <Button size="sm" onClick={() => onNavigate("booking")}>{t("Book a Consultation")}</Button>
                  <Button size="sm" variant="secondary" onClick={() => onNavigate("programme")}>{t("View programs")}</Button>
                </div>
              </Card>
            ))}
          </div>
        </section>
      ))}
    </main>
  );
}

Object.assign(window, { ConditionsScreen });
