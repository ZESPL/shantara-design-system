const PROGRAMMES = [
  { name: "Stress Management", photo: "balcony", focus: "Mind", copy: "Doctor-led routines, therapies and rest for guests managing sustained stress, poor sleep or fatigue.", nights: "7–14 nights" },
  { name: "Detox", photo: "water-wall", focus: "Metabolic", copy: "Prescribed diet, supervised fasting where appropriate, and therapies that support digestion and elimination.", nights: "7–21 nights" },
  { name: "Weight Management", photo: "grounds", focus: "Metabolic", copy: "Prescribed meals, daily activity and therapies, with weight and vitals reviewed by a doctor each morning.", nights: "14–21 nights" },
  { name: "Diabetes Reversal", photo: "treatment", focus: "Clinical", copy: "Diet, activity and therapies aimed at improving blood-sugar control, with medication reviewed daily by a doctor.", nights: "14–28 nights" },
  { name: "Complete Healing", photo: "courtyard", focus: "Immersive", copy: "For guests managing several long-standing conditions at once, across metabolic, musculoskeletal and mental health.", nights: "21–28 nights" },
  { name: "Weekend Rejuvenation", photo: "lounge", focus: "Rest", copy: "A shorter stay for guests with limited time: rest, gentle therapies and prescribed meals.", nights: "7 nights" },
  { name: "Executive Wellness", photo: "library", focus: "Rest", copy: "A compact daily schedule for guests who need to stay partly available for work.", nights: "7–10 nights" },
  { name: "Corporate Retreats", photo: "dining", focus: "Groups", copy: "Group programmes for teams, with therapies and schedule planned around group size and objectives.", nights: "By arrangement" },
];

const THERAPIES = [
  ["Mud Therapy", "Mineral-rich earth applied to calm inflammation and ease physical tension."],
  ["Yoga Therapy", "Gentle movement and breathwork adapted to the individual."],
  ["Hydrotherapy", "Water at controlled temperatures to move circulation."],
  ["Fasting Therapy", "Introduced gradually and supervised by a doctor throughout."],
  ["Acupuncture", "Fine needles to stimulate energy pathways and ease pain."],
  ["Hijama", "Traditional cupping, delivered under medical supervision."],
  ["Diet Therapy", "Meals prescribed to your condition, reviewed as your programme progresses."],
  ["Heliotherapy", "Controlled sunlight exposure, scheduled in the early morning."],
];

const ROOMS = [
  { name: "Executive Suite", spec: "530 sq.ft · balcony", photo: "room-premium" },
  { name: "Premium Room", spec: "460 sq.ft · balcony", photo: "room-twin" },
  { name: "Superior Room", spec: "300 sq.ft · balcony", photo: "balcony" },
];

function HomeScreen({ onNavigate }) {
  const { t } = window.ShantaraI18n.useLocale();
  const { Button, Icon, Card, Badge, Tag, Accordion, Input, Divider, Logo } = window.ShantaraDesignSystem_45bbe4;
  const [focus, setFocus] = React.useState("All");
  const shown = focus === "All" ? PROGRAMMES : PROGRAMMES.filter((p) => p.focus === focus);
  return (
    <main>
      {/* Hero */}
      <section style={{ position: "relative", marginTop: "-96px", paddingTop: "96px" }}>
        <Photo name="arrival-dusk" alt="Shantara at dusk" height={640} radius="0px" scrim="bottom">
          <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "flex-end" }}>
            <div style={{ maxWidth: "var(--layout-max)", width: "100%", margin: "0 auto", padding: "0 var(--layout-gutter-lg) var(--space-12)" }}>
              <span className="shantara-eyebrow" style={{ color: "var(--color-gold-crayola)" }}>{t("Kozhikode, Kerala · since 2000")}</span>
              <h1 style={{ font: "var(--type-display)", color: "var(--color-merino)", margin: "var(--space-5) 0 var(--space-6)", maxWidth: "22ch" }}>{t("A doctor-led naturopathy retreat in Kerala")}</h1>
              <p style={{ font: "var(--type-lead)", color: "color-mix(in srgb, var(--color-merino) 88%, transparent)", maxWidth: "48ch", margin: "0 0 var(--space-8)" }}>{t("Drug-free naturopathy on four hilltop acres above the Chennamangallur valley. Every stay begins with a consultation, and your programme is planned by our doctors.")}</p>
              <div style={{ display: "flex", gap: "var(--space-4)" }}>
                <Button size="lg" onClick={() => onNavigate("booking")}>{t("Book a Consultation")}</Button>
                <Button size="lg" variant="inverse" onClick={() => onNavigate("programme")} endIcon={<Icon name="arrow-right" size={17} />}>{t("View programs")}</Button>
              </div>
            </div>
          </div>
        </Photo>
      </section>

      {/* Intro */}
      <section style={{ maxWidth: "var(--layout-max)", margin: "0 auto", padding: "var(--section-y) var(--layout-gutter-lg)", display: "grid", gridTemplateColumns: "0.9fr 1.1fr", gap: "var(--space-11)", alignItems: "start" }}>
        <div>
          <span className="shantara-eyebrow">{t("Our approach")}</span>
          <h2 style={{ font: "var(--type-h2)", marginTop: "var(--space-5)", maxWidth: "18ch" }}>{t("How our doctors plan your programme")}</h2>
        </div>
        <div>
          <p style={{ font: "var(--type-lead)", margin: "0 0 var(--space-6)" }}>{t("Naturopathy treats the causes of a condition through diet, activity, therapies and rest rather than through medication.")}</p>
          <p style={{ color: "var(--text-secondary)", margin: 0 }}>{t("Your stay begins with a consultation. Our doctors review your medical history, current medications, daily habits and goals, then write a programme of therapies, meals, activity and rest. It is reviewed every morning and adjusted as your stay progresses. Protocols need time to take effect, which is why the minimum stay is seven nights.")}</p>
          <div style={{ display: "flex", gap: "var(--space-9)", marginTop: "var(--space-9)", flexWrap: "wrap" }}>
            {[["4", "hilltop acres"], ["52", "rooms, 5 categories"], ["25,000+", "patients since 2000"], ["7", "night minimum stay"]].map(([n, l]) => (
              <div key={l}>
                <div style={{ font: "var(--weight-light) var(--text-3xl)/1 var(--font-display)", fontVariantNumeric: "tabular-nums" }}>{n}</div>
                <div className="shantara-eyebrow" style={{ marginTop: "var(--space-3)" }}>{t(l)}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Statement — brand-deck slide 03 */}
      <section style={{ background: "var(--color-pearl-bush)" }}>
        <div style={{ maxWidth: "var(--layout-max)", margin: "0 auto", padding: "var(--section-y) var(--layout-gutter-lg)", textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center" }}>
          <Logo mark="icon" tone="olive" height={48} assetBase="../../assets" />
          <p style={{ font: "var(--weight-light) var(--text-3xl)/1.18 var(--font-display)", margin: "var(--space-8) 0 0", maxWidth: "28ch", color: "var(--text-primary)" }}>{t("Consultation first, then protocol, then quiet.")}</p>
          <span className="shantara-eyebrow" style={{ marginTop: "var(--space-8)" }}>{t("Our approach")}</span>
        </div>
      </section>

      {/* Programmes */}
      <section style={{ background: "var(--surface-sunken)" }}>
        <div style={{ maxWidth: "var(--layout-max)", margin: "0 auto", padding: "var(--section-y-sm) var(--layout-gutter-lg)" }}>
          <div style={{ display: "flex", alignItems: "flex-end", gap: "var(--space-7)", marginBottom: "var(--space-8)" }}>
            <div>
              <span className="shantara-eyebrow">{t("Programs")}</span>
              <h2 style={{ font: "var(--type-h2)", marginTop: "var(--space-4)" }}>{t("Eight programmes to choose from")}</h2>
            </div>
            <div style={{ marginInlineStart: "auto", display: "flex", gap: "var(--space-3)", flexWrap: "wrap" }}>
              {["All", "Mind", "Metabolic", "Clinical", "Rest"].map((key) => <Tag key={key} selected={focus === key} onClick={() => setFocus(key)}>{t(key)}</Tag>)}
            </div>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "var(--space-6)" }}>
            {shown.map((p) => (
              <Card key={p.name} interactive padding="md" onClick={() => onNavigate("programme")}>
                <Photo name={p.photo} alt={t(p.name)} height={150} radius="var(--radius-sm)" style={{ marginBottom: "var(--space-4)" }} />
                <div style={{ display: "flex", alignItems: "center", gap: "var(--space-4)" }}>
                  <Badge tone="outline">{t(p.focus)}</Badge>
                  <span style={{ fontSize: "var(--text-2xs)", color: "var(--text-muted)" }}>{t(p.nights)}</span>
                </div>
                <h3 style={{ font: "var(--type-h4)", fontSize: "var(--text-lg)", margin: "var(--space-2) 0 var(--space-2)" }}>{t(p.name)}</h3>
                <p style={{ font: "var(--type-body-sm)", color: "var(--text-secondary)", margin: 0 }}>{t(p.copy)}</p>
              </Card>
            ))}
          </div>
          <p style={{ marginTop: "var(--space-7)", fontSize: "var(--text-sm)", color: "var(--text-muted)", maxWidth: "72ch" }}>{t("Alongside these, Shantara runs condition-specific medical programmes across eleven categories, from metabolic and renal health to hormonal conditions. Every guest in a medical programme is under a doctor's direct care.")}</p>
          <Button variant="ghost" style={{ marginTop: "var(--space-5)" }} onClick={() => onNavigate("conditions")} endIcon={<Icon name="arrow-right" size={16} />}>{t("View conditions")}</Button>
        </div>
      </section>

      {/* Therapies band — flat olive. The page's one rosette band lives in the footer. */}
      <section style={{ background: "var(--color-himalaya)", color: "var(--text-on-inverse)" }}>
        <div style={{ maxWidth: "var(--layout-max)", margin: "0 auto", padding: "var(--section-y-sm) var(--layout-gutter-lg)", display: "grid", gridTemplateColumns: "0.85fr 1.15fr", gap: "var(--space-11)", alignItems: "start" }}>
          <div>
            <span className="shantara-eyebrow" style={{ color: "var(--color-gold-crayola)" }}>{t("Thirteen therapies")}</span>
            <h2 style={{ font: "var(--type-h2)", color: "var(--color-merino)", margin: "var(--space-5) 0 var(--space-6)", maxWidth: "22ch" }}>{t("Treatments and therapies your doctor may prescribe")}</h2>
            <p style={{ color: "color-mix(in srgb, var(--color-merino) 82%, transparent)", maxWidth: "40ch", margin: "0 0 var(--space-8)" }}>{t("Each therapy is prescribed as part of the programme your doctor writes for you. None of them can be booked separately.")}</p>
            <Button variant="accent" size="lg" onClick={() => onNavigate("programme")}>{t("What to expect during your stay")}</Button>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "var(--space-6) var(--space-8)" }}>
            {THERAPIES.map(([name, desc]) => (
              <div key={name}>
                <h3 style={{ font: "var(--type-h4)", fontSize: "var(--text-base)", color: "var(--color-merino)", margin: "0 0 var(--space-2)" }}>{t(name)}</h3>
                <p style={{ font: "var(--type-body-sm)", color: "color-mix(in srgb, var(--color-merino) 88%, transparent)", margin: 0 }}>{t(desc)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Rooms */}
      <section style={{ maxWidth: "var(--layout-max)", margin: "0 auto", padding: "var(--section-y) var(--layout-gutter-lg)" }}>
        <div style={{ display: "flex", alignItems: "flex-end", marginBottom: "var(--space-8)" }}>
          <div>
            <span className="shantara-eyebrow">{t("Accommodation")}</span>
            <h2 style={{ font: "var(--type-h2)", marginTop: "var(--space-4)" }}>{t("Rooms")}</h2>
          </div>
          <Button variant="ghost" style={{ marginInlineStart: "auto" }} onClick={() => onNavigate("tariffs")} endIcon={<Icon name="arrow-right" size={16} />}>{t("View the tariff card")}</Button>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "var(--space-7)" }}>
          {ROOMS.map((r) => (
            <div key={r.name}>
              <Photo name={r.photo} alt={t(r.name)} height={240} />
              <h3 style={{ font: "var(--type-h4)", fontSize: "var(--text-lg)", margin: "var(--space-5) 0 0" }}>{t(r.name)}</h3>
              <p style={{ font: "var(--type-body-sm)", color: "var(--text-secondary)", margin: "var(--space-2) 0 0" }}>{t(r.spec)}</p>
            </div>
          ))}
        </div>
        <Divider spacing="var(--space-8)" />
        <p style={{ fontSize: "var(--text-sm)", color: "var(--text-secondary)", margin: 0, maxWidth: "80ch" }}>{t("Fifty-two rooms across five categories. Rates and what a stay includes are on the tariff card.")}</p>
      </section>

      {/* Two-up — brand-deck slide 08 */}
      <section style={{ display: "grid", gridTemplateColumns: "1fr 1fr" }}>
        {[["water-wall", "Therapy wing", "Water at controlled temperatures"], ["grounds", "The grounds", "Four acres, walked slowly"]].map(([ph, eyebrow, title]) => (
          <Photo key={ph} name={ph} alt={t(title)} height={420} radius="0px" scrim="bottom">
            <div style={{ position: "absolute", insetInlineStart: "var(--space-8)", insetInlineEnd: "var(--space-8)", bottom: "var(--space-8)" }}>
              <span className="shantara-eyebrow" style={{ color: "var(--color-gold-crayola)", display: "block", marginBottom: "var(--space-3)" }}>{t(eyebrow)}</span>
              <h3 style={{ font: "var(--type-h3)", fontSize: "var(--text-2xl)", color: "var(--color-merino)", margin: 0, maxWidth: "16ch" }}>{t(title)}</h3>
            </div>
          </Photo>
        ))}
      </section>

      {/* Journal */}
      <section style={{ background: "var(--surface-raised)" }}>
        <div style={{ maxWidth: "var(--layout-max)", margin: "0 auto", padding: "var(--section-y-sm) var(--layout-gutter-lg)" }}>
          <div style={{ display: "flex", alignItems: "flex-end", marginBottom: "var(--space-8)" }}>
            <div>
              <span className="shantara-eyebrow">{t("Insights")}</span>
              <h2 style={{ font: "var(--type-h2)", marginTop: "var(--space-4)" }}>{t("Articles from our doctors and team")}</h2>
            </div>
            <Button variant="ghost" style={{ marginInlineStart: "auto" }} onClick={() => onNavigate("journal")} endIcon={<Icon name="arrow-right" size={16} />}>{t("View all articles")}</Button>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "var(--space-7)" }}>
            {[["Why seven nights is a clinical number, not a sales one", "Clinical Guides", "corridor"], ["What a supervised fast actually feels like", "Doctor Answers", "treatment"], ["Reading the valley: a week of monsoon light", "Guest Stories", "valley"]].map(([title, k, ph]) => (
              <a key={title} href="#" onClick={(e) => { e.preventDefault(); onNavigate("journal"); }} style={{ textDecoration: "none", color: "inherit" }}>
                <Photo name={ph} alt={t(title)} height={200} />
                <span className="shantara-eyebrow" style={{ display: "block", marginTop: "var(--space-5)" }}>{t(k)}</span>
                <h3 style={{ font: "var(--type-h4)", fontSize: "var(--text-lg)", margin: "var(--space-3) 0 0", maxWidth: "24ch" }}>{t(title)}</h3>
                <span style={{ display: "block", marginTop: "var(--space-3)", fontSize: "var(--text-2xs)", color: "var(--text-muted)" }}>{t("5 min read")}</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ + enquiry */}
      <section>
        <div style={{ maxWidth: "var(--layout-max)", margin: "0 auto", padding: "var(--section-y-sm) var(--layout-gutter-lg)", display: "grid", gridTemplateColumns: "1fr 0.85fr", gap: "var(--space-11)" }}>
          <div>
            <h2 style={{ font: "var(--type-h3)", marginBottom: "var(--space-6)" }}>{t("Before you arrive")}</h2>
            <Accordion items={[
              { title: t("Why is the minimum stay seven nights?"), content: t("Naturopathy protocols need this minimum duration to take effect. It is a clinical requirement rather than a booking policy — shorter stays cannot deliver a measurable result.") },
              { title: t("Can I leave the property during my stay?"), content: t("No, except for a genuine medical emergency and escorted by a doctor or designated team member. Treatment efficacy depends on controlled conditions: prescribed diets, structured routines and continuous monitoring.") },
              { title: t("How do meals work?"), content: t("Meals are part of the treatment rather than a restaurant menu. Diet therapy is personalised to your condition and goals, so there is no à la carte ordering and no outside food.") },
              { title: t("Is my booking confirmed straight away?"), content: t("Reservations are confirmed only after a mandatory preliminary consultation with our doctors. You will be asked to submit a Health Assessment Form, share relevant medical records and disclose all current medications first.") },
              { title: t("Who can be admitted?"), content: t("Guests aged 18 to 80 with chronic, lifestyle-driven conditions manageable through naturopathy. We cannot admit critical or acute conditions requiring emergency care or continuous monitoring.") },
            ]} />
          </div>
          <div style={{ background: "var(--surface-card)", borderRadius: "var(--radius-card)", padding: "var(--space-9)", alignSelf: "start", boxShadow: "var(--shadow-sm)" }}>
            <span className="shantara-eyebrow">{t("Book a Consultation")}</span>
            <h3 style={{ font: "var(--type-h4)", margin: "var(--space-4) 0 var(--space-4)" }}>{t("The same form everywhere")}</h3>
            <p style={{ font: "var(--type-body-sm)", color: "var(--text-secondary)", margin: "0 0 var(--space-6)" }}>{t("Name, mobile, optional email. Not a medical intake. Context from this page is attached automatically.")}</p>
            <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-5)" }}>
              <Input label={t("Name")} placeholder={t("Your name")} />
              <Input label={t("Mobile / WhatsApp number")} placeholder="+91" />
              <Button fullWidth onClick={() => onNavigate("booking")}>{t("Book a Consultation")}</Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

Object.assign(window, { HomeScreen, PROGRAMMES, THERAPIES, ROOMS });
