function JournalScreen({ onNavigate }) {
  const { t } = window.ShantaraI18n.useLocale();
  const { Tabs, Card, Badge, Button, Icon, Divider } = window.ShantaraDesignSystem_45bbe4;
  const [cat, setCat] = React.useState("All");
  const posts = [
    { t: "Why seven nights is a clinical number, not a sales one", k: "Clinical Guides", photo: "corridor", read: 5, lead: "What naturopathy protocols actually need to take effect." },
    { t: "What a supervised fast actually feels like", k: "Doctor Answers", photo: "treatment", read: 7, lead: "How a supervised fast is introduced, monitored and ended." },
    { t: "Food as prescription: inside diet therapy", k: "Food & Recipes", photo: "dining", read: 4, lead: "How meals are prescribed, and why there is no menu." },
    { t: "Reading the valley: a week of monsoon light", k: "Guest Stories", photo: "valley", read: 6, lead: "Four acres above Chennamangallur, hour by hour." },
    { t: "Twenty-six years of treating the cause", k: "Clinical Guides", photo: "library", read: 3, lead: "Dr. P.A. Kareem on drug-free practice since 2000." },
    { t: "Designing rooms that ask nothing of you", k: "Guest Stories", photo: "room-premium", read: 5, lead: "Why the rooms are quiet, plain and easy to rest in." },
  ];
  const shown = cat === "All" ? posts : posts.filter((p) => p.k === cat);
  const [lead, ...rest] = shown;
  return (
    <main style={{ maxWidth: "var(--layout-max)", margin: "0 auto", padding: "var(--space-9) var(--layout-gutter-lg) var(--section-y)" }}>
      <span className="shantara-eyebrow">{t("Insights")}</span>
      <h1 style={{ font: "var(--type-h1)", margin: "var(--space-5) 0 var(--space-8)", maxWidth: "26ch" }}>{t("Articles from our doctors and team")}</h1>
      <Tabs items={["All", "Doctor Answers", "Clinical Guides", "Guest Stories", "Food & Recipes"].map((key) => ({ value: key, label: t(key) }))} value={cat} onChange={setCat} />
      {lead ? (
        <a href="#" onClick={(e) => e.preventDefault()} style={{ display: "grid", gridTemplateColumns: "1.15fr 0.85fr", gap: "var(--space-9)", alignItems: "center", textDecoration: "none", color: "inherit", margin: "var(--space-9) 0" }}>
          <Photo name={lead.photo} alt={t(lead.t)} height={380} />
          <div>
            <Badge tone="brand">{t(lead.k)}</Badge>
            <h2 style={{ font: "var(--type-h2)", fontSize: "var(--text-3xl)", margin: "var(--space-5) 0 var(--space-4)" }}>{t(lead.t)}</h2>
            <p style={{ font: "var(--type-lead)", color: "var(--text-secondary)", margin: "0 0 var(--space-6)" }}>{t(lead.lead)}</p>
            <span style={{ fontSize: "var(--text-2xs)", color: "var(--text-muted)" }}>{lead.read} {t("min read")} · {t("by the clinical team")}</span>
          </div>
        </a>
      ) : null}
      <Divider spacing="var(--space-2)" />
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "var(--space-7)", marginTop: "var(--space-9)" }}>
        {rest.map((p) => (
          <a key={p.t} href="#" onClick={(e) => e.preventDefault()} style={{ textDecoration: "none", color: "inherit" }}>
            <Photo name={p.photo} alt={t(p.t)} height={190} />
            <span className="shantara-eyebrow" style={{ display: "block", marginTop: "var(--space-5)" }}>{t(p.k)}</span>
            <h3 style={{ font: "var(--type-h4)", fontSize: "var(--text-lg)", margin: "var(--space-3) 0 var(--space-3)", maxWidth: "24ch" }}>{t(p.t)}</h3>
            <p style={{ font: "var(--type-body-sm)", color: "var(--text-secondary)", margin: 0 }}>{t(p.lead)}</p>
            <span style={{ display: "block", marginTop: "var(--space-4)", fontSize: "var(--text-2xs)", color: "var(--text-muted)" }}>{p.read} {t("min read")}</span>
          </a>
        ))}
      </div>
      <div style={{ display: "flex", justifyContent: "center", marginTop: "var(--space-10)" }}>
        <Button variant="secondary" endIcon={<Icon name="arrow-down" size={16} />}>{t("Show older articles")}</Button>
      </div>
    </main>
  );
}

Object.assign(window, { JournalScreen });
