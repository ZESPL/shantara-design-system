/* Contact — HeroStatement → entrance photograph beside address, distances and direct lines →
   closing (Book a Consultation). */

const CONTACT_DISTANCES = [
  { place: "Calicut International Airport", km: "28 km", mins: "55 min" },
  { place: "Kozhikode railway station", km: "14 km", mins: "30 min" },
];

function ContactScreen({ onNavigate }) {
  const { t } = window.ShantaraI18n.useLocale();
  const { Breadcrumbs, HeroStatement, SplitSection, Statement, SpecTable, Eyebrow, TextLink, ClosingCTA, Button } = window.ShantaraDesignSystem_45bbe4;
  const L = window.ShantaraLocales;
  const home = L ? L.kitHash(window.ShantaraI18n.currentLocaleCode(), "home") : "#/en/";
  const trackContact = (method, where) => L && L.track("contact_click", { contact_method: method, page_type: "contact", cta_location: where });
  const lineStyle = { margin: 0, font: "var(--type-body)" };
  return (
    <main>
      <HeroStatement
        tall={false}
        breadcrumbs={<Breadcrumbs items={[{ label: t("Home"), href: home }, t("Contact")]} />}
        title={t("How to reach the retreat")}
        sub={t("Address, telephone, email and WhatsApp. To book a consultation, send your details and our team will be in touch.")}
      />

      <SplitSection src={window.photoSrc("exterior-entrance-dusk-driveway")} alt={t("The entrance drive at dusk")} ground="stone" align="center">
        <Statement eyebrow={t("Location")} sub={t("Four hilltop acres. Airport and railway transfers are included with a confirmed stay. Details follow after consultation.")}>
          {t("Chennamangallur valley, Kozhikode, Kerala, India")}
        </Statement>
        <SpecTable
          caption={t("Distances and transfer times")}
          columns={[
            { key: "place", label: t("From") },
            { key: "km", label: t("Distance"), accent: true, align: "end" },
            { key: "mins", label: t("Time"), align: "end" },
          ]}
          rows={CONTACT_DISTANCES.map((d) => ({ place: t(d.place), km: d.km, mins: d.mins }))}
        />
        <p style={{ margin: 0, font: "var(--type-body-sm)", color: "var(--text-secondary)" }}>{t("Transfer included with a confirmed stay")}</p>
        <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-3)" }}>
          <Eyebrow>{t("Email and telephone")}</Eyebrow>
          <p style={lineStyle}><a className="shantara-dir-ltr" href="mailto:heal@shantara.life" onClick={() => trackContact("email", "inline")}>heal@shantara.life</a></p>
          <p style={{ ...lineStyle, fontVariantNumeric: "tabular-nums" }}>
            <a className="shantara-dir-ltr" href="tel:+919553600100" onClick={() => trackContact("phone", "inline")}>+91 9553 600 100</a>
            {" · "}
            <a className="shantara-dir-ltr" href="tel:+919553700100" onClick={() => trackContact("phone", "inline")}>+91 9553 700 100</a>
          </p>
        </div>
        <div className="sh-actions">
          <TextLink onClick={() => onNavigate("tariffs")}>{t("View tariffs")}</TextLink>
        </div>
      </SplitSection>

      <ClosingCTA
        src={window.photoSrc("courtyard-pond-architecture")}
        alt={t("The courtyard pond at Shantara")}
        title={t("Share your name and a number we can reach.")}
        sub={t("You can also write, call or message us. To book a consultation, send your details and our team will be in touch.")}
        action={<Button size="lg" onClick={() => { if (L) L.track("consultation_cta_click", { page_type: "contact", content_id: "contact", content_name: "Contact", cta_location: "inline" }); onNavigate("booking"); }}>{t("Book a Consultation")}</Button>}
      />
    </main>
  );
}

Object.assign(window, { ContactScreen });
