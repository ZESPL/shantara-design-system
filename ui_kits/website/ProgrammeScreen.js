const GALLERY = [
  { name: "water-wall", alt: "Water wall at the therapy wing" },
  { name: "treatment", alt: "Treatment room" },
  { name: "courtyard", alt: "Planted courtyard" },
  { name: "grounds", alt: "Grounds and walking paths" },
];

function ProgrammeScreen({ onNavigate }) {
  const { t } = window.ShantaraI18n.useLocale();
  const { Button, Radio, Breadcrumbs, Divider, Card, Icon, Tooltip, IconButton, Accordion } = window.ShantaraDesignSystem_45bbe4;
  const [len, setLen] = React.useState("14");
  const [active, setActive] = React.useState(0);
  const current = GALLERY[active];
  return (
    <main style={{ maxWidth: "var(--layout-max)", margin: "0 auto", padding: "var(--space-8) var(--layout-gutter-lg) var(--section-y)" }}>
      <Breadcrumbs items={[{ label: t("Programmes"), href: window.ShantaraLocales ? window.ShantaraLocales.kitHash(window.ShantaraI18n.currentLocaleCode(), "programme") : "#/en/programs" }, t("Detox")]} />
      <div style={{ display: "grid", gridTemplateColumns: "1.25fr 0.75fr", gap: "var(--space-10)", marginTop: "var(--space-7)" }}>
        <div>
          <Photo name={current.name} alt={current.alt} ratio="4:3" />
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: "var(--space-4)", marginTop: "var(--space-4)" }}>
            {GALLERY.map((shot, i) => {
              const selected = i === active;
              return (
                <button
                  key={shot.name}
                  type="button"
                  aria-pressed={selected}
                  aria-label={t(shot.alt)}
                  onClick={() => setActive(i)}
                  style={{
                    display: "block",
                    padding: 0,
                    margin: 0,
                    border: selected ? "2px solid var(--border-brand)" : "2px solid transparent",
                    borderRadius: "var(--radius-sm)",
                    background: "transparent",
                    cursor: "pointer",
                    overflow: "hidden",
                    outline: "none",
                    boxShadow: "none",
                  }}
                  onFocus={(e) => { e.currentTarget.style.boxShadow = "var(--ring-focus)"; }}
                  onBlur={(e) => { e.currentTarget.style.boxShadow = "none"; }}
                >
                  <Photo name={shot.name} alt="" ratio="4:3" radius="0px" aria-hidden="true" />
                </button>
              );
            })}
          </div>
          <div style={{ marginTop: "var(--space-9)", maxWidth: "62ch" }}>
            <span className="shantara-eyebrow">{t("Naturopathy programme")}</span>
            <h1 style={{ font: "var(--type-h1)", fontSize: "var(--text-3xl)", margin: "var(--space-4) 0 var(--space-6)" }}>{t("Detox")}</h1>
            <p style={{ font: "var(--type-lead)", margin: "0 0 var(--space-6)" }}>{t("Your doctor may recommend a specific meal plan or supervised fasting based on your assessment. Therapies may also be included as part of your programme.")}</p>
            <p style={{ color: "var(--text-secondary)" }}>{t("Your programme is planned after consultation and assessment. A doctor reviews it each morning and adjusts it where needed. If fasting is included, it is introduced gradually and supervised throughout. Meals are planned according to your programme and dietary requirements.")}</p>
            <p style={{ font: "var(--type-body-sm)", color: "var(--text-secondary)", margin: "var(--space-7) 0 0" }}>{t("Doctor-guided and drug-free. Supervised fasting may be included when your doctor considers it appropriate.")}</p>
            <Divider spacing="var(--space-9)" />
            <h3 style={{ font: "var(--type-h4)", marginBottom: "var(--space-5)" }}>{t("Who this programme is for")}</h3>
            <ul style={{ margin: 0, paddingInlineStart: "1.1em", color: "var(--text-secondary)", display: "grid", gap: "var(--space-3)" }}>
              <li>{t("Feeling persistently heavy, sluggish or fatigued")}</li>
              <li>{t("Digestive discomfort or an irregular appetite")}</li>
              <li>{t("Wanting a supervised stay after a long period of irregular eating, travel or sleep")}</li>
            </ul>
            <h3 style={{ font: "var(--type-h4)", margin: "var(--space-8) 0 var(--space-5)" }}>{t("What guests commonly report")}</h3>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "var(--space-4)" }}>
              {["Feeling lighter and more alert", "Easier digestion and clearer appetite", "Better sleep and morning energy", "Less bloating"].map((s) => (
                <div key={s} style={{ display: "flex", gap: "var(--space-3)", alignItems: "flex-start", fontSize: "var(--text-sm)" }}>
                  <Icon name="leaf" size={16} color="var(--text-brand)" /><span>{t(s)}</span>
                </div>
              ))}
            </div>
            <Divider spacing="var(--space-9)" />
            <h3 style={{ font: "var(--type-h4)", marginBottom: "var(--space-6)" }}>{t("How programmes are planned")}</h3>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "var(--space-7)", marginBottom: "var(--space-9)" }}>
              {[
                { title: "Naturopathy programme", nights: "Typical duration varies by programme", lines: ["Planned with you after consultation", "Two therapy sessions a day, reviewed each morning", "Meals planned as part of the programme"] },
                { title: "Medical programme", nights: "Often a longer residential stay", lines: ["Planned by a doctor after reviewing your assessment", "A fuller daily plan of treatments and review", "Meals planned as a central part of the programme"] },
              ].map((col) => (
                <div key={col.title} style={{ borderTop: "2px solid var(--color-himalaya)", paddingTop: "var(--space-5)" }}>
                  <h4 style={{ font: "var(--type-h4)", margin: "0 0 var(--space-2)" }}>{t(col.title)}</h4>
                  <p style={{ margin: "0 0 var(--space-5)", fontSize: "var(--text-sm)", color: "var(--text-brand)", fontWeight: "var(--weight-medium)" }}>{t(col.nights)}</p>
                  {col.lines.map((line) => (
                    <div key={line} style={{ borderTop: "1px solid var(--border-subtle)", paddingTop: "var(--space-4)", marginBottom: "var(--space-4)", fontSize: "var(--text-sm)" }}>{t(line)}</div>
                  ))}
                </div>
              ))}
            </div>
            <h3 style={{ font: "var(--type-h4)", marginBottom: "var(--space-4)" }}>{t("What to expect during your stay")}</h3>
            <Accordion defaultOpen={null} items={[
              { title: t("Morning"), content: t("Vitals and a short doctor review, then yoga therapy in the hall. Movement and breathwork are adapted to what you can manage that day.") },
              { title: t("Midday"), content: t("Therapy sessions may include mud therapy, hydrotherapy, massage or acupuncture, sequenced by the clinical team.") },
              { title: t("Afternoon"), content: t("Depending on your programme, the afternoon may include controlled sunlight, walking on the grounds, or time in the library.") },
              { title: t("Evening"), content: t("A meal planned for your programme, a mind-body session and an early night.") },
            ]} />
          </div>
        </div>

        <aside style={{ position: "sticky", top: "104px", alignSelf: "start" }}>
          <Card padding="lg">
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
              <span className="shantara-eyebrow">{t("Consultation first")}</span>
              <div style={{ display: "flex", gap: "var(--space-2)" }}>
                <Tooltip label={t("Save this programme")}><IconButton label={t("Save")}><Icon name="bookmark" size={17} /></IconButton></Tooltip>
                <Tooltip label={t("Share")} side="start"><IconButton label={t("Share")}><Icon name="share-2" size={17} /></IconButton></Tooltip>
              </div>
            </div>
            <h2 style={{ font: "var(--type-h3)", fontSize: "var(--text-2xl)", margin: "var(--space-5) 0 var(--space-2)" }}>{t("Detox")}</h2>
            <span style={{ font: "var(--type-body-sm)", color: "var(--text-muted)" }}>{t("Superior Room · treatment, meals and taxes included")}</span>
            <Divider spacing="var(--space-6)" />
            <span className="shantara-eyebrow" style={{ marginBottom: "var(--space-4)", display: "block" }}>{t("Typical duration")}</span>
            <div role="radiogroup" style={{ display: "flex", flexDirection: "column", gap: "var(--space-3)" }}>
              {[["7", "7 nights", "a shorter stay"], ["14", "14 nights", "often recommended for this programme"], ["21", "21 nights", "for a longer residential stay"]].map(([v, l, d]) => (
                <Radio key={v} card name="len" value={v} label={t(l)} description={t(d)} checked={len === v} onChange={() => setLen(v)} />
              ))}
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-4)", marginTop: "var(--space-7)" }}>
              <Button fullWidth size="lg" onClick={() => onNavigate("booking")}>{t("Book a Consultation")}</Button>
              <Button fullWidth variant="secondary" onClick={() => onNavigate("tariffs")}>{t("View tariffs")}</Button>
            </div>
            <p style={{ font: "var(--type-body-sm)", color: "var(--text-muted)", margin: "var(--space-6) 0 0" }}>{t("Your stay is confirmed after a doctor reviews your details.")}</p>
          </Card>
        </aside>
      </div>
    </main>
  );
}

Object.assign(window, { ProgrammeScreen });
