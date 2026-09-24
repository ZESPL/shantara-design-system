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

/* Rooms and tariffs — HeroSplit → rate table beside the booking panel → room tiles.
   The booking panel is the page's CTA, so there is no ClosingCTA (#35). The one mention of
   the room count on the whole site sits in the body line under the table (#8). */
function TariffScreen({ onNavigate }) {
  const { t } = window.ShantaraI18n.useLocale();
  const { Button, Breadcrumbs, HeroSplit, Section, FormSplit, SpecTable, Statement, PlainList, TileGrid, Tile, Media } = window.ShantaraDesignSystem_45bbe4;
  const P = window.PageSlot;
  const L = window.ShantaraLocales;
  const home = L ? L.kitHash(window.ShantaraI18n.currentLocaleCode(), "home") : "#/en/";
  const rows = tariffRows();
  const included = tariffInclusions();
  const symbol = (window.ShantaraContent.tariff && window.ShantaraContent.tariff.currency_symbol) || "₹";
  const book = (where) => () => { if (L) L.track("consultation_cta_click", { page_type: "tariffs", content_id: "tariffs", content_name: "Rooms and tariffs", cta_location: where }); onNavigate("booking"); };
  return (
    <main>
      <P id="tariffs/hero">
        <HeroSplit
          src={window.photoSrc("room-bedroom-desk-balcony-view")}
          alt={t("A bedroom with a desk and a balcony view")}
          breadcrumbs={<Breadcrumbs items={[{ label: t("Home"), href: home }, t("Rooms and tariffs")]} />}
          title={t("Rooms and tariffs")}
          meta={[t("Five room categories"), t("Rates per night")]}
          sub={t("Every room category is designed for a comfortable residential stay. Reservations are confirmed after a preliminary consultation.")}
        />
      </P>

      <P id="tariffs/rates">
        <Section>
          <FormSplit
            aside={<>
              <Statement as="h2" size="h4">{t("What the nightly rate includes")}</Statement>
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
                size: r.size.replace(/ /g, " "),
                occ: t(r.occ),
              }))}
            />
            <p style={{ margin: 0, font: "var(--type-body-sm)", color: "var(--text-secondary)", maxWidth: "var(--measure-body)" }}>{t("Shantara has 52 rooms across five accommodation categories.")} {t(tariffValidCopy())}</p>
          </FormSplit>
        </Section>
      </P>

      <P id="tariffs/rooms">
        <Section space="bottom">
          {/* Five categories: layout "2" puts the first across the full width and the other
              four in two even rows, so no row is left half empty. */}
          <TileGrid layout="2">
            {rows.map((r, i) => (
              <Tile key={r.id} media={<Media src={window.photoSrc(TARIFF_ROOM_PHOTOS[r.id] || "room-twin")} alt="" ratio={i === 0 && rows.length % 2 === 1 ? "21:9" : "4:3"} mobileRatio="4:3" />} title={t(r.name)} meta={t(r.spec)} />
            ))}
          </TileGrid>
        </Section>
      </P>
    </main>
  );
}

Object.assign(window, { TariffScreen });
