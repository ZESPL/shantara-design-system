/* Insights — HeroStatement → category tabs, a lead article (row tile) and a 3-up grid →
   closing. The grid shows a multiple of three; "Show older articles" reveals the rest. */

function journalPosts() {
  const C = window.ShantaraContent;
  const fromArticles = (C.articles || [])
    .filter((a) => a.kit_journal)
    .map((a) => ({
      t: a.title,
      k: a.category,
      photo: a.photo,
      read: a.read_minutes,
      lead: a.lead,
    }));
  const fromAnswers = (C.doctorAnswers || [])
    .filter((a) => a.kit_journal)
    .map((a) => ({
      t: a.question,
      k: a.category || "Doctor Answers",
      photo: a.photo,
      read: a.read_minutes,
      lead: a.short_answer || "",
    }));
  return [...fromArticles, ...fromAnswers];
}

const JOURNAL_CATEGORIES = ["All", "Doctor Answers", "Clinical Guides", "Guest Stories", "Food & Recipes"];

function JournalScreen({ onNavigate }) {
  const { t } = window.ShantaraI18n.useLocale();
  const { Tabs, Button, Icon, HeroStatement, Section, Tile, TileGrid, ClosingCTA } = window.ShantaraDesignSystem_45bbe4;
  const L = window.ShantaraLocales;
  const site = window.ShantaraContent.site || {};
  const phones = site.phone || ["+91 9553 600 100", "+91 9553 700 100"];
  const email = site.email || "heal@shantara.life";
  const [cat, setCat] = React.useState("All");
  const [older, setOlder] = React.useState(false);
  const posts = journalPosts();
  const shown = cat === "All" ? posts : posts.filter((p) => p.k === cat);
  const [lead, ...rest] = shown;
  // Desktop grid is three across: show whole rows first, the remainder behind the button.
  const firstRows = rest.length >= 3 ? rest.length - (rest.length % 3) : rest.length;
  const visible = older ? rest : rest.slice(0, firstRows);
  const hasOlder = !older && visible.length < rest.length;
  const meta = (p) => [p.read ? `${p.read} ${t("min read")}` : null, t("by the clinical team")].filter(Boolean).join(" · ");
  const onTab = (v) => { setCat(v); setOlder(false); };
  return (
    <main>
      <HeroStatement
        eyebrow={t("Insights")}
        title={t("Articles from our doctors and team")}
      />

      <Section space="sm" style={{ paddingBlockEnd: "var(--section-y)" }}>
        <Tabs items={JOURNAL_CATEGORIES.map((key) => ({ value: key, label: t(key) }))} value={cat} onChange={onTab} />
        <div key={cat} className="sh-page-enter" style={{ display: "flex", flexDirection: "column", gap: "var(--section-y-sm)", marginTop: "var(--stack-lg)" }}>
          {lead ? (
            <Tile
              size="lg"
              layout="row"
              headingLevel={2}
              src={window.photoSrc(lead.photo)}
              alt=""
              eyebrow={t(lead.k)}
              title={t(lead.t)}
              text={lead.lead ? t(lead.lead) : undefined}
              meta={meta(lead)}
              onClick={() => {}}
            />
          ) : null}
          {visible.length ? (
            <TileGrid layout="3">
              {visible.map((p) => (
                <Tile key={p.t} src={window.photoSrc(p.photo)} alt="" eyebrow={t(p.k)} title={t(p.t)} text={p.lead ? t(p.lead) : undefined} meta={meta(p)} onClick={() => {}} />
              ))}
            </TileGrid>
          ) : null}
          {hasOlder ? (
            <div className="sh-actions" data-stack="mobile" style={{ justifyContent: "center" }}>
              <Button variant="secondary" onClick={() => setOlder(true)} endIcon={<Icon name="arrow-down" size={16} />}>{t("Show older articles")}</Button>
            </div>
          ) : null}
        </div>
      </Section>

      <ClosingCTA
        src={window.photoSrc("water-wall")}
        alt={t("The water wall court")}
        title={t("Share your name and a number we can reach.")}
        sub={t("Our team will contact you to arrange a consultation.")}
        action={<Button size="lg" onClick={() => { if (L) L.track("consultation_cta_click", { page_type: "journal", content_id: "journal", content_name: "Insights", cta_location: "closing" }); onNavigate("booking"); }}>{t("Book a Consultation")}</Button>}
        contact={<>
          <a className="shantara-dir-ltr" href={"mailto:" + email} onClick={() => L && L.track("contact_click", { contact_method: "email", page_type: "journal", cta_location: "closing" })}>{email}</a>
          <a className="shantara-dir-ltr" href={"tel:" + phones[0].replace(/\s/g, "")} style={{ fontVariantNumeric: "tabular-nums" }} onClick={() => L && L.track("contact_click", { contact_method: "phone", page_type: "journal", cta_location: "closing" })}>{phones.join(" · ")}</a>
        </>}
      />
    </main>
  );
}

Object.assign(window, { JournalScreen });
