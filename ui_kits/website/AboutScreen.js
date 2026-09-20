const ABOUT = [
  { title: "Our Story", copy: "Shantara is the evolution of Hygiene Nature Cure Hospital, which has treated more than 25,000 patients since 2000. Welnez is the former name — do not use it in new public copy." },
  { title: "Our Approach", copy: "Treatment is drug-free, doctor-prescribed and root-cause focused. The minimum stay is seven nights because that is what the protocols need." },
  { title: "Our Doctors", copy: "A doctor writes the program after a consultation and reviews it every morning. Profiles should make qualifications verifiable — do not invent credentials." },
  { title: "Medical Editorial Policy", copy: "Health pages name who writes, who reviews, acceptable sources, the review cycle, and that AI-generated medical content is not published without qualified human review." },
];

function AboutScreen({ onNavigate }) {
  const { t } = window.ShantaraI18n.useLocale();
  const { Button, Card, Breadcrumbs, PatternPanel, Logo } = window.ShantaraDesignSystem_45bbe4;
  return (
    <main>
      <div style={{ maxWidth: "var(--layout-max)", margin: "0 auto", padding: "var(--space-8) var(--layout-gutter-lg) var(--space-10)" }}>
        <Breadcrumbs items={[{ label: t("Home"), href: "#" }, t("About")]} />
        <span className="shantara-eyebrow" style={{ display: "block", marginTop: "var(--space-7)" }}>{t("About")}</span>
        <h1 style={{ font: "var(--type-h1)", fontSize: "var(--text-3xl)", margin: "var(--space-4) 0 var(--space-5)", maxWidth: "20ch" }}>{t("Who operates Shantara")}</h1>
        <p style={{ font: "var(--type-lead)", color: "var(--text-secondary)", maxWidth: "58ch", margin: 0 }}>{t("Trust pages: story, approach, doctors, and the public medical editorial policy. This hub is a sample — not four finished pages.")}</p>
      </div>

      {/* Section break — brand-deck slide 02 */}
      <PatternPanel tone="olive" edge="end" band="380px" style={{ marginBottom: 0 }}>
        <div style={{ maxWidth: "var(--layout-max)", margin: "0 auto", padding: "var(--section-y) var(--layout-gutter-lg)" }}>
          <span className="shantara-eyebrow" style={{ color: "var(--color-gold-crayola)" }}>{t("The retreat and how it works")}</span>
          <h2 style={{ font: "var(--weight-light) var(--text-4xl)/1.08 var(--font-display)", color: "var(--color-merino)", margin: "var(--space-6) 0 var(--space-8)", maxWidth: "18ch" }}>{t("Consultation first, then protocol, then quiet.")}</h2>
          <div style={{ height: 1, width: 160, background: "color-mix(in srgb, var(--color-merino) 35%, transparent)", marginBottom: "var(--space-6)" }} />
          <p style={{ font: "var(--type-lead)", color: "color-mix(in srgb, var(--color-merino) 86%, transparent)", maxWidth: "46ch", margin: 0 }}>{t("Nothing here is ordered from a list.")}</p>
        </div>
      </PatternPanel>

      {/* Stats — brand-deck slide 05 */}
      <section style={{ background: "var(--color-pine-tree)", color: "var(--text-on-inverse)" }}>
        <div style={{ maxWidth: "var(--layout-max)", margin: "0 auto", padding: "var(--section-y-sm) var(--layout-gutter-lg)" }}>
          <span className="shantara-eyebrow" style={{ color: "var(--color-gold-crayola)", display: "block", marginBottom: "var(--space-9)" }}>{t("Shantara in numbers")}</span>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "var(--space-8)" }}>
            {[["4", "hilltop acres"], ["52", "rooms, 5 categories"], ["13", "therapies"], ["25,000+", "patients since 2000"]].map(([n, l]) => (
              <div key={l}>
                <div style={{ font: "var(--weight-light) var(--text-4xl)/1 var(--font-display)", fontVariantNumeric: "tabular-nums", color: n === "13" ? "var(--color-gold-crayola)" : "var(--color-merino)" }}>{n}</div>
                <div className="shantara-eyebrow" style={{ marginTop: "var(--space-4)", color: "var(--color-cotton-seed)" }}>{t(l)}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div style={{ maxWidth: "var(--layout-max)", margin: "0 auto", padding: "var(--section-y) var(--layout-gutter-lg)" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(2, minmax(0,1fr))", gap: "var(--space-6)" }}>
          {ABOUT.map((item) => (
            <Card key={item.title} padding="lg">
              <h2 style={{ font: "var(--type-h4)", margin: "0 0 var(--space-3)" }}>{t(item.title)}</h2>
              <p style={{ font: "var(--type-body-sm)", color: "var(--text-secondary)", margin: 0 }}>{t(item.copy)}</p>
            </Card>
          ))}
        </div>

        {/* Statement — brand-deck slide 19 */}
        <div style={{ background: "var(--color-pearl-bush)", borderRadius: "var(--radius-card)", padding: "var(--space-12) var(--space-9)", textAlign: "center", marginTop: "var(--space-11)", display: "flex", flexDirection: "column", alignItems: "center" }}>
          <Logo mark="icon" tone="olive" height={44} assetBase="../../assets" />
          <p style={{ font: "var(--weight-light) var(--text-3xl)/1.18 var(--font-display)", margin: "var(--space-7) 0 0", maxWidth: "26ch" }}>{t("No drugs, no injections, no shortcuts to seven nights")}</p>
          <span className="shantara-eyebrow" style={{ marginTop: "var(--space-7)" }}>{t("What we do not do")}</span>
        </div>

        <div style={{ marginTop: "var(--space-10)" }}>
          <Button size="lg" onClick={() => onNavigate("booking")}>{t("Book a Consultation")}</Button>
        </div>
      </div>
    </main>
  );
}

Object.assign(window, { AboutScreen });
