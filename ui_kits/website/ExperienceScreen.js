const EXPERIENCES = [
  { title: "Therapies", copy: "Therapies are prescribed as part of a program. This kit does not create a page per therapy.", photo: "treatment", view: "programme" },
  { title: "Rooms & Suites", copy: "Five room categories. Rates and inclusions live on the tariff card, not on this hub.", photo: "room-premium", view: "tariffs" },
  { title: "Farm & Dining", copy: "Meals are prescribed diet therapy, not a restaurant menu. Sample menus belong in a table section when published.", photo: "dining", view: "booking" },
  { title: "A Day at Shantara", copy: "A day is a timeline, not a separate schedule component: consultation, therapies, rest, prescribed meals.", photo: "grounds", view: "programme" },
];

function ExperienceScreen({ onNavigate }) {
  const { t } = window.ShantaraI18n.useLocale();
  const { Button, Card, Breadcrumbs, Icon } = window.ShantaraDesignSystem_45bbe4;
  return (
    <main>
      <section style={{ position: "relative", marginTop: "-96px", paddingTop: "96px" }}>
        <Photo name="courtyard" alt={t("The property")} height={420} radius="0px" scrim="bottom">
          <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "flex-end" }}>
            <div style={{ maxWidth: "var(--layout-max)", width: "100%", margin: "0 auto", padding: "0 var(--layout-gutter-lg) var(--space-11)" }}>
              <span className="shantara-eyebrow" style={{ color: "var(--color-gold-crayola)" }}>{t("Experience")}</span>
              <h1 style={{ font: "var(--type-h1)", color: "var(--color-merino)", margin: "var(--space-4) 0 var(--space-4)", maxWidth: "18ch" }}>{t("What a stay is made of")}</h1>
              <p style={{ font: "var(--type-lead)", color: "color-mix(in srgb, var(--color-merino) 88%, transparent)", maxWidth: "46ch", margin: 0 }}>{t("Therapies, rooms, meals and the shape of a day. Individual therapy and room pages are not the default.")}</p>
            </div>
          </div>
        </Photo>
      </section>
      <div style={{ maxWidth: "var(--layout-max)", margin: "0 auto", padding: "var(--space-9) var(--layout-gutter-lg) 0" }}>
        <Breadcrumbs items={[{ label: t("Home"), href: "#" }, t("Experience")]} />
      </div>

      {/* Four movements — brand-deck slide 04 */}
      <section style={{ maxWidth: "var(--layout-max)", margin: "0 auto", padding: "var(--space-10) var(--layout-gutter-lg) var(--section-y-sm)", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "var(--space-11)", alignItems: "center" }}>
        <div>
          <span className="shantara-eyebrow">{t("A day in the programme")}</span>
          <h2 style={{ font: "var(--type-h2)", margin: "var(--space-5) 0 var(--space-6)", maxWidth: "16ch" }}>{t("Four movements, seven nights minimum")}</h2>
          <p style={{ color: "var(--text-secondary)", margin: "0 0 var(--space-8)", maxWidth: "44ch" }}>{t("Every day is written by a doctor and reviewed each morning. The protocol does the deciding; the guest only has to arrive.")}</p>
          <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-5)" }}>
            {[["01", "Consultation", "Vitals and a doctor review, every morning"], ["02", "Prescribed therapies", "Two slots drawn from thirteen therapies"], ["03", "Diet therapy & rest", "Meals as treatment, heliotherapy, an early night"]].map(([n, title, copy]) => (
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
        <Photo name="lounge" alt={t("The lounge")} height={480} />
      </section>

      {/* Mosaic — brand-deck slide 11 */}
      <section style={{ maxWidth: "var(--layout-max)", margin: "0 auto", padding: "0 var(--layout-gutter-lg) var(--section-y-sm)", display: "grid", gridTemplateColumns: "1.6fr 1fr", gridTemplateRows: "1fr 1fr", gap: "var(--space-5)" }}>
        <Photo name="valley" alt={t("Overlooking the Chennamangallur valley")} height={440} style={{ gridRow: "span 2", height: "100%", minHeight: 440 }}>
          <span style={{ position: "absolute", inset: 0, background: "var(--scrim-bottom)" }} />
          <div style={{ position: "absolute", insetInlineStart: "var(--space-7)", insetInlineEnd: "var(--space-7)", bottom: "var(--space-7)" }}>
            <span className="shantara-eyebrow" style={{ color: "var(--color-gold-crayola)", display: "block", marginBottom: "var(--space-3)" }}>{t("The setting")}</span>
            <h3 style={{ font: "var(--type-h3)", color: "var(--color-merino)", margin: 0, maxWidth: "18ch" }}>{t("Overlooking the Chennamangallur valley")}</h3>
          </div>
        </Photo>
        <Photo name="dining" alt={t("Farm & Dining")} height={210} />
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "var(--space-5)" }}>
          <Photo name="library" alt={t("Reading room")} height={210} />
          <Photo name="treatment" alt={t("Therapy wing")} height={210} />
        </div>
      </section>

      <div style={{ maxWidth: "var(--layout-max)", margin: "0 auto", padding: "0 var(--layout-gutter-lg) var(--section-y)" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(2, minmax(0,1fr))", gap: "var(--space-7)" }}>
          {EXPERIENCES.map((item) => (
            <Card key={item.title} padding="md">
              <Photo name={item.photo} alt={t(item.title)} height={180} radius="var(--radius-sm)" style={{ marginBottom: "var(--space-5)" }} />
              <h2 style={{ font: "var(--type-h4)", margin: "0 0 var(--space-3)" }}>{t(item.title)}</h2>
              <p style={{ font: "var(--type-body-sm)", color: "var(--text-secondary)", margin: "0 0 var(--space-5)" }}>{t(item.copy)}</p>
              <Button variant="ghost" onClick={() => onNavigate(item.view)} endIcon={<Icon name="arrow-right" size={16} />}>{item.view === "tariffs" ? t("View the tariff card") : t("Continue")}</Button>
            </Card>
          ))}
        </div>
        <div style={{ marginTop: "var(--space-11)", display: "flex", gap: "var(--space-4)", flexWrap: "wrap" }}>
          <Button size="lg" onClick={() => onNavigate("booking")}>{t("Book a Consultation")}</Button>
          <Button size="lg" variant="secondary" onClick={() => onNavigate("contact")}>{t("Contact")}</Button>
        </div>
      </div>
    </main>
  );
}

Object.assign(window, { ExperienceScreen });
