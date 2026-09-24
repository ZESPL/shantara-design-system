/* About — HeroStatement → numerals → doctors → story → approach → editorial policy → closing.
   Copy comes from content/ (site, doctors) and the strings this screen already carried. */

function aboutDoctors() {
  return (window.ShantaraContent.doctors || []).map((d) => ({
    name: d.full_name,
    role: d.role,
    detail: [d.qualification, d.publications_note].filter(Boolean).join(". ") || undefined,
    src: d.photo_profile ? window.photoSrc(d.photo_profile) : undefined,
  }));
}

function aboutNumerals() {
  const stats = (window.ShantaraContent.site && window.ShantaraContent.site.stats) || [];
  // Two or three figures only; the guests figure is already in the statement beside them.
  return stats.filter((s) => !/guests/i.test(s.label)).slice(0, 3);
}

function AboutScreen({ onNavigate }) {
  const { t } = window.ShantaraI18n.useLocale();
  const { Breadcrumbs, HeroStatement, Section, NumeralsSplit, PeopleRow, SplitSection, Statement, TextLink, ClosingCTA, Button } = window.ShantaraDesignSystem_45bbe4;
  const L = window.ShantaraLocales;
  const site = window.ShantaraContent.site || {};
  const phones = site.phone || ["+91 9553 600 100", "+91 9553 700 100"];
  const email = site.email || "heal@shantara.life";
  const home = L ? L.kitHash(window.ShantaraI18n.currentLocaleCode(), "home") : "#/en/";
  return (
    <main>
      <HeroStatement
        breadcrumbs={<Breadcrumbs items={[{ label: t("Home"), href: home }, t("About")]} />}
        title={t("About Shantara")}
        sub={t("Shantara is a doctor-led naturopathy retreat on four hilltop acres above the Chennamangallur valley. It is the evolution of Hygiene Nature Cure Hospital, which has cared for guests since 2000.")}
      />

      <Section ground="stone">
        <NumeralsSplit
          eyebrow={t("Shantara in numbers")}
          title={t("Shantara is the evolution of Hygiene Nature Cure Hospital, which has cared for more than 25,000 guests since 2000.")}
          numerals={aboutNumerals().map((s) => ({ value: s.value, label: t(s.label) }))}
        />
      </Section>

      <Section>
        <PeopleRow
          eyebrow={t("Meet our doctors")}
          title={t("A doctor plans your programme after consultation and reviews it during your stay.")}
          sub={t("Profiles include qualifications so you can see who is responsible for clinical guidance.")}
          people={aboutDoctors().map((p) => ({ ...p, role: t(p.role), detail: p.detail ? t(p.detail) : undefined }))}
        />
      </Section>

      <SplitSection src={window.photoSrc("courtyard")} alt={t("The courtyard at Shantara")} ground="merino">
        <Statement eyebrow={t("Our story")} sub={t("Dr. P.A. Kareem founded Hygiene Nature Cure Hospital in 2000. Its core approach is to treat the cause through ethical, drug-free naturopathy.")}>
          {t("Shantara is the evolution of Hygiene Nature Cure Hospital.")}
        </Statement>
      </SplitSection>

      <SplitSection src={window.photoSrc("library")} alt={t("The library at Shantara")} mediaSide="end" ground="merino">
        <Statement
          eyebrow={t("Our approach")}
          sub={t("Treatment is drug-free and planned by our doctors after consultation and assessment. Plans are reviewed during the stay and adjusted where needed.")}
          actions={<TextLink onClick={() => onNavigate("programme")}>{t("Programmes")}</TextLink>}
        >
          {t("Your programme is planned after consultation and assessment.")}
        </Statement>
      </SplitSection>

      <Section ground="stone" space="sm">
        <Statement size="title" eyebrow={t("Medical Editorial Policy")}>
          {t("Health pages name who writes, who reviews, which sources are used, and how often content is reviewed.")}
        </Statement>
      </Section>

      <ClosingCTA
        src={window.photoSrc("valley")}
        alt={t("The Chennamangallur valley from Shantara")}
        title={t("Share your name and a number we can reach.")}
        sub={t("Our team will contact you to arrange a consultation.")}
        action={<Button size="lg" onClick={() => { if (L) L.track("consultation_cta_click", { page_type: "about", content_id: "about", content_name: "About", cta_location: "closing" }); onNavigate("booking"); }}>{t("Book a Consultation")}</Button>}
        contact={<>
          <a className="shantara-dir-ltr" href={"mailto:" + email} onClick={() => L && L.track("contact_click", { contact_method: "email", page_type: "about", cta_location: "closing" })}>{email}</a>
          <a className="shantara-dir-ltr" href={"tel:" + phones[0].replace(/\s/g, "")} style={{ fontVariantNumeric: "tabular-nums" }} onClick={() => L && L.track("contact_click", { contact_method: "phone", page_type: "about", cta_location: "closing" })}>{phones.join(" · ")}</a>
        </>}
      />
    </main>
  );
}

Object.assign(window, { AboutScreen });
