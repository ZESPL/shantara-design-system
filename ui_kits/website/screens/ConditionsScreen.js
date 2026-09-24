/* Conditions — HeroStatement → text index of conditions by group → a quiet panorama → closing.
   No photographs in the list: a condition is not a room or a meal. */

function conditionListingGroups() {
  const items = (window.ShantaraContent.conditions || []).filter((c) => c.listing_group && c.summary);
  const order = ["Metabolic", "Hormonal", "Musculoskeletal"];
  return order
    .map((name) => ({
      name,
      items: items
        .filter((c) => c.listing_group === name)
        .map((c) => ({ name: c.name, copy: c.summary })),
    }))
    .filter((g) => g.items.length);
}

function ConditionsScreen({ onNavigate }) {
  const { t } = window.ShantaraI18n.useLocale();
  const { Breadcrumbs, HeroStatement, Section, IndexList, PanoramaCaption, ClosingCTA, Button } = window.ShantaraDesignSystem_45bbe4;
  const L = window.ShantaraLocales;
  const site = window.ShantaraContent.site || {};
  const phones = site.phone || ["+91 9553 600 100", "+91 9553 700 100"];
  const email = site.email || "heal@shantara.life";
  const home = L ? L.kitHash(window.ShantaraI18n.currentLocaleCode(), "home") : "#/en/";
  const programmeHref = L ? L.kitHash(window.ShantaraI18n.currentLocaleCode(), "programme") : undefined;
  const groups = conditionListingGroups().map((g) => ({
    label: t(g.name),
    items: g.items.map((item) => ({ title: t(item.name), text: t(item.copy), href: programmeHref, onClick: (e) => { e.preventDefault(); onNavigate("programme"); } })),
  }));
  return (
    <main>
      <HeroStatement
        breadcrumbs={<Breadcrumbs items={[{ label: t("Home"), href: home }, t("Conditions")]} />}
        title={t("Conditions we commonly see")}
        sub={t("Our doctors see guests with a range of long-standing conditions. Programmes are planned after consultation and assessment.")}
      />

      {/* The panorama sits midway through the index as a pause; the list itself has no photographs. */}
      <Section space="bottom">
        <IndexList groups={groups.slice(0, 1)} columns={1} />
      </Section>

      {groups.length > 1 ? (
        <>
          <PanoramaCaption src={window.photoSrc("grounds-pond-building-path")} alt={t("A path past the pond on the grounds at Shantara")} />
          <Section>
            <IndexList groups={groups.slice(1)} columns={1} />
          </Section>
        </>
      ) : null}

      <ClosingCTA
        src={window.photoSrc("exterior-entrance-dusk-lit-canopy")}
        alt={t("The entrance canopy at dusk")}
        title={t("Share your name and a number we can reach.")}
        sub={t("Our team will contact you to arrange a consultation.")}
        action={<Button size="lg" onClick={() => { if (L) L.track("consultation_cta_click", { page_type: "conditions", content_id: "conditions", content_name: "Conditions", cta_location: "closing" }); onNavigate("booking"); }}>{t("Book a Consultation")}</Button>}
        contact={<>
          <a className="shantara-dir-ltr" href={"mailto:" + email} onClick={() => L && L.track("contact_click", { contact_method: "email", page_type: "conditions", cta_location: "closing" })}>{email}</a>
          {phones.map((n) => <a key={n} className="shantara-dir-ltr" href={"tel:" + n.replace(/\s/g, "")} style={{ fontVariantNumeric: "tabular-nums" }} onClick={() => L && L.track("contact_click", { contact_method: "phone", page_type: "conditions", cta_location: "closing" })}>{n}</a>)}
        </>}
      />
    </main>
  );
}

Object.assign(window, { ConditionsScreen });
