function tariffRows() {
  const C = window.ShantaraContent;
  const roomsById = Object.fromEntries((C.rooms || []).map((r) => [r.id, r]));
  const tariff = C.tariff || {};
  return (tariff.rooms || []).map((row) => {
    const room = roomsById[row.room_id] || {};
    return {
      id: row.room_id,
      name: room.name || row.room_id,
      size: room.size || "",
      occ: room.occupancy || "",
      spec: room.spec_line || room.size || "",
      single: row.single_per_night == null ? null : String(row.single_per_night).replace(/\B(?=(\d{3})+(?!\d))/g, ","),
      double: row.double_per_night == null ? null : String(row.double_per_night).replace(/\B(?=(\d{3})+(?!\d))/g, ","),
    };
  });
}

function tariffInclusions() {
  return (window.ShantaraContent.tariff && window.ShantaraContent.tariff.inclusions) || [];
}

function tariffValidCopy() {
  const tariff = window.ShantaraContent.tariff || {};
  if (!tariff.valid_to) return "Rates valid to 31 December 2026. Reservations are confirmed after a preliminary consultation.";
  const d = new Date(tariff.valid_to + "T00:00:00");
  const formatted = d.toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" });
  return `Rates valid to ${formatted}. Reservations are confirmed after a preliminary consultation.`;
}

/* One photograph per room on this page (the content records share `room-twin` between
   three categories), and none of them the hero frame. */
const TARIFF_ROOM_PHOTOS = {
  "executive-suite": "suite-living-balcony-empty",
  "premium-room": "room-premium",
  "superior-room": "balcony",
  "deluxe-room": "room-twin",
  "standard-room": "room-bedroom-forest-view-armchair",
};

function TariffScreen({ onNavigate }) {
  const { t } = window.ShantaraI18n.useLocale();
  const { Button, Breadcrumbs, HeroFullBleed, Section, FormSplit, SpecTable, Eyebrow, PlainList, TileGrid, Tile, ClosingCTA } = window.ShantaraDesignSystem_45bbe4;
  const L = window.ShantaraLocales;
  const site = window.ShantaraContent.site || {};
  const phones = site.phone || ["+91 9553 600 100", "+91 9553 700 100"];
  const email = site.email || "heal@shantara.life";
  const home = L ? L.kitHash(window.ShantaraI18n.currentLocaleCode(), "home") : "#/en/";
  const rows = tariffRows();
  const included = tariffInclusions();
  const symbol = (window.ShantaraContent.tariff && window.ShantaraContent.tariff.currency_symbol) || "₹";
  const book = (where) => () => { if (L) L.track("consultation_cta_click", { page_type: "tariffs", content_id: "tariffs", content_name: "Rooms and tariffs", cta_location: where }); onNavigate("booking"); };
  return (
    <main>
      <HeroFullBleed
        height="tall"
        src={window.photoSrc("room-bedroom-desk-balcony-view")}
        alt={t("A bedroom with a desk and a balcony view")}
        title={t("Rooms and tariffs")}
        sub={t("Shantara has 52 rooms across five accommodation categories, designed for comfortable residential stays.")}
      />

      <Section>
        <div style={{ marginBottom: "var(--stack-lg)" }}>
          <Breadcrumbs items={[{ label: t("Home"), href: home }, t("Rooms and tariffs")]} />
        </div>
        <FormSplit
          aside={<>
            <Eyebrow>{t("What the nightly rate includes")}</Eyebrow>
            <PlainList columns={1} rules items={included.map((line) => t(line))} />
            <Button fullWidth size="lg" onClick={book("inline")}>{t("Book a Consultation")}</Button>
          </>}
        >
          <SpecTable
            size="lg"
            showHeader
            caption={t("Rooms and tariffs")}
            columns={[
              { key: "name", label: t("Room") },
              { key: "single", label: t("Single / night"), accent: true, mobileLabel: true },
              { key: "double", label: t("Double / night"), mobileLabel: true },
              { key: "size", label: t("Size"), mobileLabel: true },
              { key: "occ", label: t("Occupancy"), mobileLabel: true },
            ]}
            rows={rows.map((r) => ({
              name: t(r.name),
              single: r.single ? `${symbol}${r.single}` : "—",
              double: r.double ? `${symbol}${r.double}` : "—",
              size: r.size,
              occ: t(r.occ),
            }))}
          />
          <p style={{ margin: 0, font: "var(--type-body-sm)", color: "var(--text-secondary)", maxWidth: "var(--measure-body)" }}>{t(tariffValidCopy())}</p>
        </FormSplit>
      </Section>

      <Section space="bottom">
        <TileGrid layout="3">
          {rows.map((r) => (
            <Tile key={r.id} src={window.photoSrc(TARIFF_ROOM_PHOTOS[r.id] || "room-twin")} alt="" title={t(r.name)} meta={t(r.spec)} />
          ))}
        </TileGrid>
      </Section>

      <ClosingCTA
        src={window.photoSrc("balcony-lounge-infinity-edge-valley")}
        alt={t("The balcony lounge above the valley")}
        title={t("Share your name and a number we can reach.")}
        sub={t("Our team will contact you to arrange a consultation.")}
        action={<Button size="lg" onClick={book("closing")}>{t("Book a Consultation")}</Button>}
        contact={<>
          <a className="shantara-dir-ltr" href={"mailto:" + email} onClick={() => L && L.track("contact_click", { contact_method: "email", page_type: "tariffs", cta_location: "closing" })}>{email}</a>
          <a className="shantara-dir-ltr" href={"tel:" + phones[0].replace(/\s/g, "")} style={{ fontVariantNumeric: "tabular-nums" }} onClick={() => L && L.track("contact_click", { contact_method: "phone", page_type: "tariffs", cta_location: "closing" })}>{phones.join(" · ")}</a>
        </>}
      />
    </main>
  );
}

Object.assign(window, { TariffScreen });
