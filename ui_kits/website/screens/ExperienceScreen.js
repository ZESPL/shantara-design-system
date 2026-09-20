const EXPERIENCES = [
  { title: "Treatments and therapies", copy: "Your doctor may recommend therapies based on your assessment and programme.", photo: "treatment", view: "programme", cta: "Learn about the programme" },
  { title: "Accommodation", copy: "Shantara has 52 rooms across five categories, designed for comfortable residential stays.", photo: "room-premium", view: "tariffs", cta: "View tariffs" },
  { title: "Meals during your stay", copy: "Meals are planned as part of your programme, taking into account your doctor's recommendations and dietary requirements.", photo: "dining", view: "booking", cta: "Book a Consultation" },
  { title: "What to expect during your stay", copy: "A typical day may include a consultation, therapies, meals, physical activity, rest and personal time.", photo: "grounds", view: "programme", cta: "Read what to expect" },
];

function ExperienceScreen({ onNavigate }) {
  const { t } = window.ShantaraI18n.useLocale();
  const { Button, Card, Breadcrumbs } = window.ShantaraDesignSystem_45bbe4;
  return (
    <main>
      <section style={{ position: "relative", marginTop: "-96px", paddingTop: "96px" }}>
        <Photo name="courtyard" alt={t("The property")} height={420} radius="0px" scrim="bottom">
          <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "flex-end" }}>
            <div style={{ maxWidth: "var(--layout-max)", width: "100%", margin: "0 auto", padding: "0 var(--layout-gutter-lg) var(--space-11)" }}>
              <span className="shantara-eyebrow" style={{ color: "var(--color-gold-crayola)" }}>{t("Experience")}</span>
              <h1 style={{ font: "var(--type-h1)", color: "var(--color-merino)", margin: "var(--space-4) 0 var(--space-4)", maxWidth: "18ch" }}>{t("What to expect during your stay")}</h1>
              <p style={{ font: "var(--type-lead)", color: "var(--color-merino)", maxWidth: "46ch", margin: 0 }}>{t("A typical day may include consultations, therapies, meals, physical activity, rest and time for yourself.")}</p>
            </div>
          </div>
        </Photo>
      </section>
      <div style={{ maxWidth: "var(--layout-max)", margin: "0 auto", padding: "var(--space-9) var(--layout-gutter-lg) 0" }}>
        <Breadcrumbs items={[{ label: t("Home"), href: window.ShantaraLocales ? window.ShantaraLocales.kitHash(window.ShantaraI18n.currentLocaleCode(), "home") : "#/en/" }, t("Experience")]} />
      </div>

      {/* Four movements — brand-deck slide 04 */}
      <section style={{ maxWidth: "var(--layout-max)", margin: "0 auto", padding: "var(--space-10) var(--layout-gutter-lg) var(--section-y-sm)", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "var(--space-11)", alignItems: "center" }}>
        <div>
          <span className="shantara-eyebrow">{t("A typical day")}</span>
          <h2 style={{ font: "var(--type-h2)", margin: "var(--space-5) 0 var(--space-6)", maxWidth: "16ch" }}>{t("What a day may include")}</h2>
          <p style={{ color: "var(--text-secondary)", margin: "0 0 var(--space-8)", maxWidth: "44ch" }}>{t("A typical day is planned by your doctor and reviewed each morning. It may include a consultation, therapies, meals, movement, rest and personal time.")}</p>
          <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-5)" }}>
            {[["01", "Consultation", "Vitals and a doctor review, every morning"], ["02", "Therapies", "Sessions recommended for your programme"], ["03", "Meals and rest", "Meals planned for your programme, walking or quiet time, and an early night"]].map(([n, title, copy]) => (
              <div key={n} style={{ display: "flex", gap: "var(--space-5)", alignItems: "baseline", borderTop: "1px solid var(--border-subtle)", paddingTop: "var(--space-5)" }}>
                <span style={{ fontSize: "var(--text-sm)", fontVariantNumeric: "tabular-nums", color: "var(--text-brand)", fontWeight: "var(--weight-medium)" }}>{n}</span>
                <div>
                  <div style={{ font: "var(--type-h4)", fontSize: "var(--text-lg)" }}>{t(title)}</div>
                  <div style={{ fontSize: "var(--text-sm)", color: "var(--text-secondary)", marginTop: "var(--space-2)" }}>{t(copy)}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <Photo name="lounge" alt={t("The lounge")} />
      </section>

      {/* Mosaic — brand-deck slide 11 */}
      <section style={{ maxWidth: "var(--layout-max)", margin: "0 auto", padding: "0 var(--layout-gutter-lg) var(--section-y-sm)", display: "grid", gridTemplateColumns: "1.6fr 1fr", gridTemplateRows: "auto auto", gap: "var(--space-5)" }}>
        <Photo name="valley" alt={t("Overlooking the Chennamangallur valley")} ratio="3:4" scrim="bottom" style={{ gridRow: "span 2" }}>
          <div style={{ position: "absolute", insetInlineStart: "var(--space-7)", insetInlineEnd: "var(--space-7)", bottom: "var(--space-7)" }}>
            <span className="shantara-eyebrow" style={{ color: "var(--color-gold-crayola)", display: "block", marginBottom: "var(--space-3)" }}>{t("The setting")}</span>
            <h3 style={{ font: "var(--type-h3)", color: "var(--color-merino)", margin: 0, maxWidth: "18ch" }}>{t("Overlooking the Chennamangallur valley")}</h3>
          </div>
        </Photo>
        <Photo name="dining" alt={t("Meals during your stay")} ratio="4:3" />
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "var(--space-5)" }}>
          <Photo name="library" alt={t("Reading room")} ratio="4:3" />
          <Photo name="treatment" alt={t("Therapy wing")} ratio="4:3" />
        </div>
      </section>

      <div style={{ maxWidth: "var(--layout-max)", margin: "0 auto", padding: "0 var(--layout-gutter-lg) var(--section-y)" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(2, minmax(0,1fr))", gap: "var(--space-7)" }}>
          {EXPERIENCES.map((item) => (
            <Card
              key={item.title}
              interactive
              padding="md"
              media={"../../assets/photos/" + item.photo + ".jpg"}
              mediaAlt={t(item.title)}
              onClick={() => onNavigate(item.view)}
            >
              <h2 style={{ font: "var(--type-h4)", margin: "0 0 var(--space-3)" }}>{t(item.title)}</h2>
              <p style={{ font: "var(--type-body-sm)", color: "var(--text-secondary)", margin: 0 }}>{t(item.copy)}</p>
            </Card>
          ))}
        </div>
        <div style={{ marginTop: "var(--space-11)", display: "flex", gap: "var(--space-4)", flexWrap: "wrap" }}>
          <Button size="lg" onClick={() => onNavigate("booking")}>{t("Book a Consultation")}</Button>
          <Button size="lg" variant="secondary" onClick={() => onNavigate("contact")}>{t("Speak to our team")}</Button>
        </div>
      </div>
    </main>
  );
}

Object.assign(window, { ExperienceScreen });
