function ProgrammeScreen({ onNavigate }) {
  const { Button, Badge, Tag, Radio, Breadcrumbs, Divider, Card, Icon, Tooltip, IconButton, Accordion } = window.ShantaraDesignSystem_45bbe4;
  const [len, setLen] = React.useState("14");
  const rooms = { 7: "1,26,000", 14: "2,52,000", 21: "3,78,000" };
  return (
    <main style={{ maxWidth: "var(--layout-max)", margin: "0 auto", padding: "var(--space-8) var(--layout-gutter-lg) var(--section-y)" }}>
      <Breadcrumbs items={[{ label: "Programmes", href: "#" }, { label: "Wellness", href: "#" }, "Detox"]} />
      <div style={{ display: "grid", gridTemplateColumns: "1.25fr 0.75fr", gap: "var(--space-10)", marginTop: "var(--space-7)" }}>
        <div>
          <Photo name="water-wall" alt="Water wall at the therapy wing" height={420} />
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "var(--space-4)", marginTop: "var(--space-4)" }}>
            <Photo name="treatment" alt="Treatment room" height={96} radius="var(--radius-sm)" />
            <Photo name="courtyard" alt="Planted courtyard" height={96} radius="var(--radius-sm)" />
            <Photo name="grounds" alt="Grounds and walking paths" height={96} radius="var(--radius-sm)" />
          </div>
          <div style={{ marginTop: "var(--space-9)", maxWidth: "62ch" }}>
            <span className="shantara-eyebrow">Naturopathy programme</span>
            <h1 style={{ font: "var(--type-h1)", fontSize: "var(--text-3xl)", margin: "var(--space-4) 0 var(--space-6)" }}>Detox</h1>
            <p style={{ font: "var(--type-lead)", margin: "0 0 var(--space-6)" }}>Prescribed meals, supervised fasting where your doctor considers it appropriate, and therapies that support digestion and elimination.</p>
            <p style={{ color: "var(--text-secondary)" }}>Your programme is written after the preliminary consultation and reviewed by a doctor every morning. If fasting is part of it, it is introduced gradually and supervised throughout. Diet therapy runs alongside: meals are prescribed to your condition rather than chosen from a menu.</p>
            <div style={{ display: "flex", gap: "var(--space-3)", marginTop: "var(--space-7)", flexWrap: "wrap" }}>
              {["Doctor-guided", "Drug-free", "Supervised fasting", "7-night minimum"].map((t) => <Tag key={t}>{t}</Tag>)}
            </div>
            <Divider spacing="var(--space-9)" />
            <h3 style={{ font: "var(--type-h4)", marginBottom: "var(--space-5)" }}>Who it suits</h3>
            <ul style={{ margin: 0, paddingLeft: "1.1em", color: "var(--text-secondary)", display: "grid", gap: "var(--space-3)" }}>
              <li>Feeling persistently heavy, sluggish or fatigued</li>
              <li>Digestive discomfort or an irregular appetite</li>
              <li>Wanting a supervised reset after a long period of irregular eating, travel or sleep</li>
            </ul>
            <h3 style={{ font: "var(--type-h4)", margin: "var(--space-8) 0 var(--space-5)" }}>What guests commonly report</h3>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "var(--space-4)" }}>
              {["Feeling lighter and more alert", "Easier digestion and clearer appetite", "Better sleep and morning energy", "Less bloating"].map((s) => (
                <div key={s} style={{ display: "flex", gap: "var(--space-3)", alignItems: "flex-start", fontSize: "var(--text-sm)" }}>
                  <Icon name="leaf" size={16} color="var(--text-brand)" /><span>{s}</span>
                </div>
              ))}
            </div>
            <Divider spacing="var(--space-9)" />
            <h3 style={{ font: "var(--type-h4)", marginBottom: "var(--space-4)" }}>What a day includes</h3>
            <Accordion defaultOpen={null} items={[
              { title: "Morning · consultation and movement", content: "Vitals and a short doctor review, then yoga therapy in the hall: gentle movement and breathwork adapted to what you can manage that day." },
              { title: "Midday · prescribed therapies", content: "Two therapy slots drawn from mud therapy, hydrotherapy, massage or acupuncture, sequenced by the clinical team rather than chosen from a list." },
              { title: "Afternoon · rest and heliotherapy", content: "Controlled sunlight, walking on the grounds, or the library. Rest is scheduled into the day rather than left to chance." },
              { title: "Evening · diet therapy and quiet", content: "Your prescribed meal, a mind-body session and an early night. Meals are part of the treatment, not a menu choice." },
            ]} />
          </div>
        </div>

        <aside style={{ position: "sticky", top: "104px", alignSelf: "start" }}>
          <Card padding="lg">
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
              <Badge tone="info">Consultation required</Badge>
              <div style={{ display: "flex", gap: "var(--space-2)" }}>
                <Tooltip label="Save this programme"><IconButton label="Save"><Icon name="bookmark" size={17} /></IconButton></Tooltip>
                <Tooltip label="Share" side="left"><IconButton label="Share"><Icon name="share-2" size={17} /></IconButton></Tooltip>
              </div>
            </div>
            <div style={{ font: "var(--weight-light) var(--text-3xl)/1 var(--font-display)", fontVariantNumeric: "tabular-nums", margin: "var(--space-5) 0 var(--space-2)" }}>₹{rooms[len]}</div>
            <span style={{ fontSize: "var(--text-2xs)", color: "var(--text-muted)" }}>Superior Room, single occupancy · all treatment, meals and taxes included</span>
            <Divider spacing="var(--space-6)" />
            <span className="shantara-eyebrow" style={{ marginBottom: "var(--space-4)", display: "block" }}>Length of stay</span>
            <div role="radiogroup" style={{ display: "flex", flexDirection: "column", gap: "var(--space-3)" }}>
              {[["7", "7 nights", "the clinical minimum"], ["14", "14 nights", "recommended for detox"], ["21", "21 nights", "for long-standing conditions"]].map(([v, l, d]) => (
                <Radio key={v} card name="len" value={v} label={l} description={d} checked={len === v} onChange={() => setLen(v)} />
              ))}
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-4)", marginTop: "var(--space-7)" }}>
              <Button fullWidth size="lg" onClick={() => onNavigate("booking")}>Request a consultation</Button>
              <Button fullWidth variant="secondary" onClick={() => onNavigate("booking")}>Speak to our team</Button>
            </div>
            <p style={{ fontSize: "var(--text-2xs)", color: "var(--text-muted)", margin: "var(--space-6) 0 0" }}>Your stay is confirmed only after a doctor reviews your Health Assessment Form. Tariffs valid to 31 December 2026.</p>
          </Card>
        </aside>
      </div>
    </main>
  );
}

Object.assign(window, { ProgrammeScreen });
