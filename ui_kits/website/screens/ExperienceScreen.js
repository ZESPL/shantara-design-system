/* Experience — composition sample (not the production site). */

const EXPERIENCES = [
  { title: "Treatments and therapies", copy: "Your doctor may recommend therapies based on your assessment and programme.", photo: "treatment", alt: "Treatment room", view: "programme" },
  { title: "Accommodation", copy: "Shantara has 52 rooms across five categories, designed for comfortable residential stays.", photo: "room-premium", alt: "A room with a balcony over the valley", view: "tariffs" },
  { title: "Meals during your stay", copy: "Meals are planned as part of your programme, taking into account your doctor's recommendations and dietary requirements.", photo: "dining", alt: "The dining room", view: "booking" },
  { title: "What to expect during your stay", copy: "A typical day may include a consultation, therapies, meals, physical activity, rest and personal time.", photo: "grounds-pond-building-path", alt: "A path beside the pond on the grounds", view: "programme" },
];

const DAY_STEPS = [
  { title: "Consultation", text: "Vitals and a doctor review, every morning" },
  { title: "Therapies", text: "Sessions recommended for your programme" },
  { title: "Meals and rest", text: "Meals planned for your programme, walking or quiet time, and an early night" },
];

/* The same four parts of the day as the programme page. */
const DAY_TIMES = [
  { time: "Morning", text: "Vitals and a short doctor review, then yoga therapy in the hall. Movement and breathwork are adapted to what you can manage that day." },
  { time: "Midday", text: "Therapy sessions may include mud therapy, hydrotherapy, massage or acupuncture, sequenced by the clinical team." },
  { time: "Afternoon", text: "Depending on your programme, the afternoon may include controlled sunlight, walking on the grounds, or time in the library." },
  { time: "Evening", text: "A meal planned for your programme, a mind-body session and an early night." },
];

function ExperienceScreen({ onNavigate }) {
  const { t } = window.ShantaraI18n.useLocale();
  const { Button, Breadcrumbs, Eyebrow, Section, HeroFullBleed, Statement, NumberedSteps, SplitSection, TimeTable, PanoramaCaption, TileGrid, Tile, ClosingCTA, TextLink } = window.ShantaraDesignSystem_45bbe4;
  const site = window.ShantaraContent.site || {};
  const phones = site.phone || [];
  return (
    <main>
      <HeroFullBleed
        height="tall"
        src={window.photoSrc("courtyard")}
        alt={t("The planted courtyard")}
        title={t("What to expect during your stay")}
        sub={t("A typical day may include consultations, therapies, meals, physical activity, rest and time for yourself.")}
      />

      <Section ground="merino">
        <Breadcrumbs style={{ marginBottom: "var(--stack-lg)" }} items={[{ label: t("Home"), href: window.ShantaraLocales ? window.ShantaraLocales.kitHash(window.ShantaraI18n.currentLocaleCode(), "home") : "#/en/" }, t("Experience")]} />
        <Statement sub={t("A typical day is planned by your doctor and reviewed each morning. It may include a consultation, therapies, meals, movement, rest and personal time.")}>
          {t("What a day may include")}
        </Statement>
        <NumberedSteps style={{ marginTop: "var(--stack-lg)" }} columns={3} items={DAY_STEPS.map((s) => ({ title: t(s.title), text: t(s.text) }))} />
      </Section>

      <SplitSection ground="stone" mediaSide="end" src={window.photoSrc("activity-hall-yoga-studio-empty")} alt={t("The yoga hall")}>
        <Eyebrow>{t("A typical day")}</Eyebrow>
        <TimeTable rows={DAY_TIMES.map((r) => ({ time: t(r.time), title: t(r.text) }))} />
      </SplitSection>

      <PanoramaCaption
        src={window.photoSrc("valley")}
        alt={t("The lounge window over the valley")}
        eyebrow={t("The setting")}
        title={t("Overlooking the Chennamangallur valley")}
      />

      <Section ground="merino">
        <TileGrid layout="2">
          {EXPERIENCES.map((item) => (
            <Tile key={item.title} src={window.photoSrc(item.photo)} alt={t(item.alt)} title={t(item.title)} text={t(item.copy)} onClick={() => onNavigate(item.view)} />
          ))}
        </TileGrid>
      </Section>

      <ClosingCTA
        src={window.photoSrc("exterior-entrance-dusk-driveway")}
        alt={t("The driveway and entrance at dusk")}
        title={t("Start with a consultation.")}
        sub={t("Share your name and a number we can reach. Our team will contact you to arrange a consultation.")}
        action={<Button size="lg" onClick={() => onNavigate("booking")}>{t("Book a Consultation")}</Button>}
        contact={<>
          <a href={window.ShantaraLocales ? window.ShantaraLocales.kitHash(window.ShantaraI18n.currentLocaleCode(), "contact") : "#/en/contact"} onClick={(e) => { e.preventDefault(); onNavigate("contact"); }}>{t("Speak to our team")}</a>
          <a className="shantara-dir-ltr" href={"mailto:" + (site.email || "")}>{site.email}</a>
          {phones.map((p) => <a key={p} className="shantara-dir-ltr" href={"tel:" + p.replace(/[^\d+]/g, "")} style={{ fontVariantNumeric: "tabular-nums" }}>{p}</a>)}
        </>}
      />
    </main>
  );
}

Object.assign(window, { ExperienceScreen });
