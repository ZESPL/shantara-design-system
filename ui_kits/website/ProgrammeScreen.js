function ProgrammeScreen({ onNavigate }) {
  const { t } = window.ShantaraI18n.useLocale();
  const { Button, Badge, Tag, Radio, Breadcrumbs, Divider, Card, Icon, Tooltip, IconButton, Accordion } = window.ShantaraDesignSystem_45bbe4;
  const [len, setLen] = React.useState("14");
  return (
    <main style={{ maxWidth: "var(--layout-max)", margin: "0 auto", padding: "var(--space-8) var(--layout-gutter-lg) var(--section-y)" }}>
      <Breadcrumbs items={[{ label: t("Programs"), href: "#" }, t("Detox")]} />
      <div style={{ display: "grid", gridTemplateColumns: "1.25fr 0.75fr", gap: "var(--space-10)", marginTop: "var(--space-7)" }}>
        <div>
          <Photo name="water-wall" alt="Water wall at the therapy wing" height={420} />
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "var(--space-4)", marginTop: "var(--space-4)" }}>
            <Photo name="treatment" alt="Treatment room" height={96} radius="var(--radius-sm)" />
            <Photo name="courtyard" alt="Planted courtyard" height={96} radius="var(--radius-sm)" />
            <Photo name="grounds" alt="Grounds and walking paths" height={96} radius="var(--radius-sm)" />
          </div>
          <div style={{ marginTop: "var(--space-9)", maxWidth: "62ch" }}>
            <span className="shantara-eyebrow">{t("Naturopathy programme")}</span>
            <h1 style={{ font: "var(--type-h1)", fontSize: "var(--text-3xl)", margin: "var(--space-4) 0 var(--space-6)" }}>{t("Detox")}</h1>
            <p style={{ font: "var(--type-lead)", margin: "0 0 var(--space-6)" }}>{t("Prescribed meals, supervised fasting where your doctor considers it appropriate, and therapies that support digestion and elimination.")}</p>
            <p style={{ color: "var(--text-secondary)" }}>{t("Your programme is written after the preliminary consultation and reviewed by a doctor every morning. If fasting is part of it, it is introduced gradually and supervised throughout. Diet therapy runs alongside: meals are prescribed to your condition rather than chosen from a menu.")}</p>
            <div style={{ display: "flex", gap: "var(--space-3)", marginTop: "var(--space-7)", flexWrap: "wrap" }}>
              {["Doctor-guided", "Drug-free", "Supervised fasting", "7-night minimum"].map((key) => <Tag key={key}>{t(key)}</Tag>)}
            </div>
            <Divider spacing="var(--space-9)" />
            <h3 style={{ font: "var(--type-h4)", marginBottom: "var(--space-5)" }}>{t("Who it suits")}</h3>
            <ul style={{ margin: 0, paddingInlineStart: "1.1em", color: "var(--text-secondary)", display: "grid", gap: "var(--space-3)" }}>
              <li>{t("Feeling persistently heavy, sluggish or fatigued")}</li>
              <li>{t("Digestive discomfort or an irregular appetite")}</li>
              <li>{t("Wanting a supervised reset after a long period of irregular eating, travel or sleep")}</li>
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
            <h3 style={{ font: "var(--type-h4)", marginBottom: "var(--space-6)" }}>{t("Two routes through the same retreat")}</h3>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "var(--space-7)", marginBottom: "var(--space-9)" }}>
              {[
                { title: "Naturopathy programme", nights: "Seven to twenty-one nights", lines: ["Chosen by the guest from eight programmes", "Two therapy slots a day, revised each morning", "Diet therapy at maintenance level"] },
                { title: "Medical programme", nights: "Fourteen nights and above", lines: ["Assigned by a doctor after review of blood work", "Three to four interventions a day, charted", "Diet therapy as the primary treatment"] },
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
            <h3 style={{ font: "var(--type-h4)", marginBottom: "var(--space-4)" }}>{t("What a day includes")}</h3>
            <Accordion defaultOpen={null} items={[
              { title: t("Morning · consultation and movement"), content: t("Vitals and a short doctor review, then yoga therapy in the hall: gentle movement and breathwork adapted to what you can manage that day.") },
              { title: t("Midday · prescribed therapies"), content: t("Two therapy slots drawn from mud therapy, hydrotherapy, massage or acupuncture, sequenced by the clinical team rather than chosen from a list.") },
              { title: t("Afternoon · rest and heliotherapy"), content: t("Controlled sunlight, walking on the grounds, or the library. Rest is scheduled into the day rather than left to chance.") },
              { title: t("Evening · diet therapy and quiet"), content: t("Your prescribed meal, a mind-body session and an early night. Meals are part of the treatment, not a menu choice.") },
            ]} />
          </div>
        </div>

        <aside style={{ position: "sticky", top: "104px", alignSelf: "start" }}>
          <Card padding="lg">
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
              <Badge tone="info">{t("Consultation required")}</Badge>
              <div style={{ display: "flex", gap: "var(--space-2)" }}>
                <Tooltip label={t("Save this programme")}><IconButton label={t("Save")}><Icon name="bookmark" size={17} /></IconButton></Tooltip>
                <Tooltip label={t("Share")} side="start"><IconButton label={t("Share")}><Icon name="share-2" size={17} /></IconButton></Tooltip>
              </div>
            </div>
            <h2 style={{ font: "var(--type-h3)", fontSize: "var(--text-2xl)", margin: "var(--space-5) 0 var(--space-2)" }}>{t("Detox")}</h2>
            <span style={{ fontSize: "var(--text-2xs)", color: "var(--text-muted)" }}>{t("Superior Room · treatment, meals and taxes included")}</span>
            <Divider spacing="var(--space-6)" />
            <span className="shantara-eyebrow" style={{ marginBottom: "var(--space-4)", display: "block" }}>{t("Length of stay")}</span>
            <div role="radiogroup" style={{ display: "flex", flexDirection: "column", gap: "var(--space-3)" }}>
              {[["7", "7 nights", "the clinical minimum"], ["14", "14 nights", "recommended for detox"], ["21", "21 nights", "for long-standing conditions"]].map(([v, l, d]) => (
                <Radio key={v} card name="len" value={v} label={t(l)} description={t(d)} checked={len === v} onChange={() => setLen(v)} />
              ))}
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-4)", marginTop: "var(--space-7)" }}>
              <Button fullWidth size="lg" onClick={() => onNavigate("booking")}>{t("Book a Consultation")}</Button>
              <Button fullWidth variant="secondary" onClick={() => onNavigate("tariffs")}>{t("View the tariff card")}</Button>
            </div>
            <p style={{ fontSize: "var(--text-2xs)", color: "var(--text-muted)", margin: "var(--space-6) 0 0" }}>{t("Your stay is confirmed only after a doctor reviews your Health Assessment Form.")}</p>
          </Card>
        </aside>
      </div>
    </main>
  );
}

Object.assign(window, { ProgrammeScreen });
