const ABOUT = [
  { title: "Our story", copy: "Shantara is the evolution of Hygiene Nature Cure Hospital, which has cared for more than 25,000 guests since 2000.", photo: "courtyard" },
  { title: "Our approach", copy: "Treatment is drug-free and planned by our doctors after consultation and assessment. Plans are reviewed during the stay and adjusted where needed.", photo: "library" },
  { title: "Meet our doctors", copy: "A doctor plans your programme after consultation and reviews it during your stay. Profiles include qualifications so you can see who is responsible for clinical guidance.", photo: "doctor-bahja-janu-profile" },
  { title: "Medical Editorial Policy", copy: "Health pages name who writes, who reviews, which sources are used, and how often content is reviewed.", photo: "lounge" },
];

function AboutScreen({ onNavigate }) {
  const { t } = window.ShantaraI18n.useLocale();
  const { Button, Card, Breadcrumbs, Logo } = window.ShantaraDesignSystem_45bbe4;
  return (
    <main>
      <div style={{ maxWidth: "var(--layout-max)", margin: "0 auto", padding: "var(--space-8) var(--layout-gutter-lg) var(--space-10)" }}>
        <Breadcrumbs items={[{ label: t("Home"), href: window.ShantaraLocales ? window.ShantaraLocales.kitHash(window.ShantaraI18n.currentLocaleCode(), "home") : "#/en/" }, t("About")]} />
        <span className="shantara-eyebrow" style={{ display: "block", marginTop: "var(--space-7)" }}>{t("About")}</span>
        <h1 style={{ font: "var(--type-h1)", fontSize: "var(--text-3xl)", margin: "var(--space-4) 0 var(--space-5)", maxWidth: "20ch" }}>{t("About Shantara")}</h1>
        <p style={{ font: "var(--type-lead)", color: "var(--text-secondary)", maxWidth: "58ch", margin: 0 }}>{t("Shantara is a doctor-led naturopathy retreat on four hilltop acres above the Chennamangallur valley. It is the evolution of Hygiene Nature Cure Hospital, which has cared for guests since 2000.")}</p>
      </div>

      {/* Statement — warm neutral. Avoid full-bleed Himalaya washes; brand green stays under ~10% of the page. */}
      <section style={{ background: "var(--color-pearl-bush)" }}>
        <div style={{ maxWidth: "var(--layout-max)", margin: "0 auto", padding: "var(--section-y) var(--layout-gutter-lg)" }}>
          <span className="shantara-eyebrow" style={{ color: "var(--text-brand)" }}>{t("Our approach")}</span>
          <h2 style={{ font: "var(--weight-light) var(--text-4xl)/1.08 var(--font-display)", color: "var(--text-primary)", margin: "var(--space-6) 0 var(--space-8)", maxWidth: "18ch" }}>{t("Your programme is planned after consultation and assessment.")}</h2>
          <div style={{ height: 1, width: 160, background: "var(--border-brand)", marginBottom: "var(--space-6)" }} />
          <p style={{ font: "var(--type-lead)", color: "var(--text-secondary)", maxWidth: "46ch", margin: 0 }}>{t("The clinical team plans your programme and adjusts it where necessary during your stay.")}</p>
        </div>
      </section>

      {/* Stats — Pine Tree inverse (not Himalaya). Gold eyebrows and one accent numeral. */}
      <section style={{ background: "var(--color-pine-tree)", color: "var(--text-on-inverse)" }}>
        <div style={{ maxWidth: "var(--layout-max)", margin: "0 auto", padding: "var(--section-y-sm) var(--layout-gutter-lg)" }}>
          <span className="shantara-eyebrow" style={{ color: "var(--color-gold-crayola)", display: "block", marginBottom: "var(--space-9)" }}>{t("Shantara in numbers")}</span>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "var(--space-8)" }}>
            {((window.ShantaraContent.site && window.ShantaraContent.site.stats) || []).map(({ value: n, label: l }) => (
              <div key={l}>
                <div style={{ font: "var(--weight-light) var(--text-4xl)/1 var(--font-display)", fontVariantNumeric: "tabular-nums", color: /therapies/i.test(l) ? "var(--color-gold-crayola)" : "var(--color-merino)" }}>{n}</div>
                <div className="shantara-eyebrow" style={{ marginTop: "var(--space-4)", color: "var(--color-cotton-seed)" }}>{t(l)}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div style={{ maxWidth: "var(--layout-max)", margin: "0 auto", padding: "var(--section-y) var(--layout-gutter-lg)" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(2, minmax(0,1fr))", gap: "var(--space-7)" }}>
          {ABOUT.map((item) => (
            <Card key={item.title} padding="md" media={"../../assets/photos/" + item.photo + ".jpg"} mediaAlt={t(item.title)}>
              <h2 style={{ font: "var(--type-h4)", margin: "0 0 var(--space-3)" }}>{t(item.title)}</h2>
              <p style={{ font: "var(--type-body-sm)", color: "var(--text-secondary)", margin: 0 }}>{t(item.copy)}</p>
            </Card>
          ))}
        </div>

        {/* Statement — brand-deck slide 19 */}
        <div style={{ background: "var(--color-pearl-bush)", borderRadius: "var(--radius-card)", padding: "var(--space-12) var(--space-9)", textAlign: "center", marginTop: "var(--space-11)", display: "flex", flexDirection: "column", alignItems: "center" }}>
          <Logo mark="icon" tone="olive" height={44} assetBase="../../assets" />
          <p style={{ font: "var(--weight-light) var(--text-3xl)/1.18 var(--font-display)", margin: "var(--space-7) 0 0", maxWidth: "26ch" }}>{t("Doctor-led naturopathy, planned around your assessment.")}</p>
          <span className="shantara-eyebrow" style={{ marginTop: "var(--space-7)" }}>{t("Our approach")}</span>
        </div>

        <div style={{ marginTop: "var(--space-10)" }}>
          <Button size="lg" onClick={() => onNavigate("booking")}>{t("Book a Consultation")}</Button>
        </div>
      </div>
    </main>
  );
}

Object.assign(window, { AboutScreen });
