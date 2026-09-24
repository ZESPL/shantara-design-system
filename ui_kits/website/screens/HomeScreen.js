/* Home — composition sample (not the production site). Content from window.ShantaraContent. */

/* The three programmes shown with photographs; the rest go in the text index below them. */
const HOME_TILE_PROGRAMMES = ["detox", "diabetes-reversal", "stress-management"];
/* Kit-journal articles on the home page (photos chosen so none repeats another frame on this page). */
const HOME_ARTICLES = ["how-programme-duration-is-decided", "how-meals-are-planned", "week-of-monsoon-light"];

function firstSentence(text) {
  const m = String(text || "").match(/^.*?[.!?](\s|$)/);
  return m ? m[0].trim() : String(text || "");
}

function homeDoctors(t) {
  return (window.ShantaraContent.doctors || []).map((d) => ({
    name: t(d.full_name),
    role: t(d.role),
    detail: d.qualification ? t(d.qualification) : undefined,
    src: d.photo_profile ? window.photoSrc(d.photo_profile) : undefined,
  }));
}

function siteFaqs() {
  return (window.ShantaraContent.faqs || []).map((f) => ({ title: f.question, content: f.answer }));
}

function HomeScreen({ onNavigate }) {
  const { t } = window.ShantaraI18n.useLocale();
  const DS = window.ShantaraDesignSystem_45bbe4;
  const { Button, Accordion, Section, HeroFullBleed, Statement, BandStatement, PeopleRow, TileGrid, Tile, IndexList, SplitSection, PlainList, PanoramaCaption, SpecTable, TextLink, ClosingCTA } = DS;
  const C = window.ShantaraContent;
  const programs = (C.programs || []).filter((p) => p.publication_status !== "draft");
  const tiles = HOME_TILE_PROGRAMMES.map((id) => programs.find((p) => p.id === id)).filter(Boolean);
  const rest = programs.filter((p) => !HOME_TILE_PROGRAMMES.includes(p.id));
  const therapies = (C.therapies || []).filter((x) => x.home_featured);
  const rooms = C.rooms || [];
  const articles = HOME_ARTICLES.map((id) => (C.articles || []).find((a) => a.id === id)).filter(Boolean);
  const site = C.site || {};
  const phones = site.phone || [];

  return (
    <main>
      <HeroFullBleed
        src={window.photoSrc("arrival-dusk")}
        alt={t("The entrance to Shantara at dusk")}
        eyebrow={t("Kozhikode, Kerala · since 2000")}
        title={t("A doctor-led naturopathy retreat in Kerala")}
        sub={t("Drug-free naturopathy on four hilltop acres above the Chennamangallur valley. Every stay begins with a consultation, and your programme is planned by our doctors.")}
        actions={<>
          <Button size="lg" onClick={() => onNavigate("booking")}>{t("Book a Consultation")}</Button>
          <Button size="lg" variant="secondary" onClick={() => onNavigate("programme")}>{t("View programmes")}</Button>
        </>}
      />

      <Section ground="merino">
        <Statement eyebrow={t("Our approach")} sub={t("Naturopathy treats the causes of a condition through diet, activity, therapies and rest rather than through medication.")}>
          {t("How our doctors plan your programme")}
        </Statement>
        <p style={{ margin: "var(--stack-md) 0 0", font: "var(--type-body)", color: "var(--text-secondary)", maxWidth: "var(--measure-body)" }}>
          {t("Your programme begins with a consultation and assessment. Our doctors consider your medical history, current health, lifestyle and goals. They then plan your treatments, meals, activity and rest. The plan is reviewed during your stay and adjusted where necessary.")}
        </p>
      </Section>

      <BandStatement>
        <Statement actions={<TextLink onClick={() => onNavigate("about")}>{t("Our approach")}</TextLink>}>
          {t("Your programme is planned after consultation and assessment.")}
        </Statement>
      </BandStatement>

      <Section ground="merino">
        <PeopleRow
          title={t("Meet our doctors")}
          people={homeDoctors(t)}
          action={<TextLink onClick={() => onNavigate("about")}>{t("About Shantara")}</TextLink>}
        />
      </Section>

      <Section ground="stone">
        <TileGrid
          eyebrow={t("Programmes")}
          title={t("Naturopathy programmes")}
          action={<TextLink onClick={() => onNavigate("programme")}>{t("View programmes")}</TextLink>}
          layout="3"
        >
          {tiles.map((p) => (
            <Tile
              key={p.id}
              src={window.photoSrc(p.photo)}
              alt=""
              eyebrow={[t(p.focus), p.durations ? t(p.durations) : null].filter(Boolean).join(" · ")}
              title={t(p.name)}
              text={t(p.proposition)}
              onClick={() => onNavigate("programme")}
            />
          ))}
        </TileGrid>
        <IndexList
          style={{ marginTop: "var(--section-y-sm)" }}
          groups={[{ label: t("All programmes"), items: rest.map((p) => ({ title: t(p.name), text: t(firstSentence(p.proposition)), onClick: () => onNavigate("programme") })) }]}
        />
        <p style={{ margin: "var(--stack-lg) 0 var(--space-4)", font: "var(--type-body-sm)", color: "var(--text-secondary)", maxWidth: "var(--measure-body)" }}>
          {t("Alongside these, Shantara runs condition-specific medical programmes across eleven categories, from metabolic and renal health to hormonal conditions. Every guest in a medical programme is under a doctor's direct care.")}
        </p>
        <TextLink onClick={() => onNavigate("conditions")}>{t("View conditions")}</TextLink>
      </Section>

      <SplitSection mediaSide="end" src={window.photoSrc("treatment-bath-corridor-cubicles")} alt={t("Bath corridor in the therapy wing")}>
        <Statement sub={t("Your doctor may recommend specific therapies based on your assessment and programme.")}>
          {t("Naturopathy treatments and therapies")}
        </Statement>
        <PlainList columns={2} rules items={therapies.map((x) => ({ title: t(x.name), text: t(x.description) }))} />
      </SplitSection>

      <PanoramaCaption
        src={window.photoSrc("grounds")}
        alt={t("The grounds and accommodation wing")}
        eyebrow={t("The grounds")}
        title={t("Four hilltop acres above the Chennamangallur valley")}
      />

      <SplitSection ground="stone" mediaSide="start" src={window.photoSrc("room-bedroom-balcony-open-book")} alt={t("A bedroom with a balcony over the valley")}>
        <Statement eyebrow={t("Accommodation")}>
          {t("Shantara has 52 rooms across five accommodation categories, designed for comfortable residential stays.")}
        </Statement>
        <SpecTable
          caption={t("Room categories")}
          columns={[
            { key: "name", label: t("Room") },
            { key: "size", label: t("Size"), accent: true },
            { key: "occupancy", label: t("Occupancy") },
          ]}
          rows={rooms.map((r) => ({ name: t(r.name), size: t(r.size), occupancy: t(r.occupancy) }))}
        />
        <div><TextLink onClick={() => onNavigate("tariffs")}>{t("View tariffs")}</TextLink></div>
      </SplitSection>

      <Section ground="merino">
        <TileGrid
          eyebrow={t("Insights")}
          title={t("Articles from our doctors and team")}
          action={<TextLink onClick={() => onNavigate("journal")}>{t("View all articles")}</TextLink>}
          layout="feature"
        >
          {articles.map((a, i) => (
            <Tile
              key={a.id}
              src={window.photoSrc(a.photo)}
              alt=""
              size={i === 0 ? "lg" : "md"}
              eyebrow={t(a.category)}
              title={t(a.title)}
              meta={a.read_minutes ? t(a.read_minutes + " min read") : undefined}
              onClick={() => onNavigate("journal")}
            />
          ))}
        </TileGrid>
      </Section>

      <Section ground="stone" width="narrow">
        <Statement>{t("Preparing for your stay")}</Statement>
        <Accordion style={{ marginTop: "var(--stack-lg)" }} items={siteFaqs().map((item) => ({ title: t(item.title), content: t(item.content) }))} />
      </Section>

      <ClosingCTA
        src={window.photoSrc("exterior-entrance-dusk-lit-canopy")}
        alt={t("The entrance canopy at dusk")}
        title={t("Start with a consultation.")}
        sub={t("Share your name and a number we can reach. Our team will contact you to arrange a consultation.")}
        action={<Button size="lg" onClick={() => onNavigate("booking")}>{t("Book a Consultation")}</Button>}
        contact={<>
          <a className="shantara-dir-ltr" href={"mailto:" + (site.email || "")}>{site.email}</a>
          {phones.map((p) => <a key={p} className="shantara-dir-ltr" href={"tel:" + p.replace(/[^\d+]/g, "")} style={{ fontVariantNumeric: "tabular-nums" }}>{p}</a>)}
        </>}
      />
    </main>
  );
}

Object.assign(window, { HomeScreen });
