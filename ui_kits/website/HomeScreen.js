const PROGRAMMES = [
  { name: "Stress Management", photo: "balcony", focus: "Mind", copy: "Doctor-led routines, therapies and rest for guests managing sustained stress, poor sleep or fatigue.", nights: "7–14 nights" },
  { name: "Detox", photo: "water-wall", focus: "Metabolic", copy: "Your doctor may recommend a meal plan or supervised fasting based on your assessment. Therapies may also form part of your programme.", nights: "7–21 nights" },
  { name: "Weight Management", photo: "grounds", focus: "Metabolic", copy: "Meals, daily activity and therapies, with weight and vitals reviewed by a doctor each morning.", nights: "14–21 nights" },
  { name: "Diabetes Reversal", photo: "treatment", focus: "Clinical", copy: "Diet, activity and therapies planned around blood-sugar control, with medication reviewed by a doctor. Recommendations depend on your assessment.", nights: "14–28 nights" },
  { name: "Complete Healing", photo: "courtyard", focus: "Immersive", copy: "For guests managing several long-standing conditions at once, across metabolic, musculoskeletal and mental health.", nights: "21–28 nights" },
  { name: "Weekend Rejuvenation", photo: "lounge", focus: "Rest", copy: "A shorter stay for guests with limited time: rest, gentle therapies and meals planned for the programme.", nights: "7 nights" },
  { name: "Executive Wellness", photo: "library", focus: "Rest", copy: "A compact daily plan for guests who need to stay partly available for work.", nights: "7–10 nights" },
  { name: "Corporate Retreats", photo: "dining", focus: "Groups", copy: "Group programmes for teams, with therapies and schedule planned around group size and objectives.", nights: "By arrangement" },
];

const THERAPIES = [
  ["Mud Therapy", "Mineral-rich earth applied to calm inflammation and ease physical tension."],
  ["Yoga Therapy", "Gentle movement and breathwork adapted to the individual."],
  ["Hydrotherapy", "Water at controlled temperatures to support circulation."],
  ["Fasting Therapy", "Introduced gradually and supervised by a doctor throughout."],
  ["Acupuncture", "Fine needles used to ease pain, when recommended by your doctor."],
  ["Hijama", "Traditional cupping, delivered under medical supervision."],
  ["Diet Therapy", "Meals planned for your programme and reviewed as your stay progresses."],
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
              <p style={{ font: "var(--type-lead)", color: "var(--color-merino)", maxWidth: "48ch", margin: "0 0 var(--space-8)" }}>{t("Drug-free naturopathy on four hilltop acres above the Chennamangallur valley. Every stay begins with a consultation, and your programme is planned by our doctors.")}</p>
              <div style={{ display: "flex", gap: "var(--space-4)" }}>
                <Button size="lg" onClick={() => onNavigate("booking")}>{t("Book a Consultation")}</Button>
                <Button size="lg" variant="inverse" onClick={() => onNavigate("programme")} endIcon={<Icon name="arrow-right" size={17} />}>{t("View programmes")}</Button>
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
          <p style={{ color: "var(--text-secondary)", margin: 0 }}>{t("Your programme begins with a consultation and assessment. Our doctors consider your medical history, current health, lifestyle and goals. They then plan your treatments, meals, activity and rest. The plan is reviewed during your stay and adjusted where necessary.")}</p>
          <div style={{ display: "flex", gap: "var(--space-9)", marginTop: "var(--space-9)", flexWrap: "wrap" }}>
            {[["4", "hilltop acres"], ["52", "rooms, 5 categories"], ["25,000+", "guests since 2000"], ["13", "therapies"]].map(([n, l]) => (
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
          <p style={{ font: "var(--weight-light) var(--text-3xl)/1.18 var(--font-display)", margin: "var(--space-8) 0 0", maxWidth: "28ch", color: "var(--text-primary)" }}>{t("Your programme is planned after consultation and assessment.")}</p>
          <span className="shantara-eyebrow" style={{ marginTop: "var(--space-8)" }}>{t("Our approach")}</span>
        </div>
      </section>

      {/* Programmes */}
      <section style={{ background: "var(--surface-sunken)" }}>
        <div style={{ maxWidth: "var(--layout-max)", margin: "0 auto", padding: "var(--section-y-sm) var(--layout-gutter-lg)" }}>
          <div style={{ display: "flex", alignItems: "flex-end", gap: "var(--space-7)", marginBottom: "var(--space-8)" }}>
            <div>
              <span className="shantara-eyebrow">{t("Programmes")}</span>
              <h2 style={{ font: "var(--type-h2)", marginTop: "var(--space-4)" }}>{t("Naturopathy programmes")}</h2>
            </div>
            <div style={{ marginInlineStart: "auto", display: "flex", gap: "var(--space-3)", flexWrap: "wrap" }}>
              {["All", "Mind", "Metabolic", "Clinical", "Rest"].map((key) => <Tag key={key} selected={focus === key} onClick={() => setFocus(key)}>{t(key)}</Tag>)}
            </div>
          </div>
          <div key={focus} className="sh-page-enter" style={{ display: "grid", gridTemplateColumns: "repeat(3, minmax(0,1fr))", gap: "var(--space-7)" }}>
            {shown.map((p) => (
              <Card
                key={p.name}
                interactive
                padding="md"
                media={"../../assets/photos/" + p.photo + ".jpg"}
                mediaAlt={t(p.name)}
                onClick={() => onNavigate("programme")}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "var(--space-4)" }}>
                  <Badge tone="outline">{t(p.focus)}</Badge>
                  <span style={{ fontSize: "var(--text-xs)", color: "var(--text-muted)" }}>{t(p.nights)}</span>
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

      {/* Therapies — warm neutral ground. Himalaya stays under ~10% of the page (controls, links, accents), not a full-bleed wash. */}
      <section style={{ background: "var(--color-pearl-bush)" }}>
        <div style={{ maxWidth: "var(--layout-max)", margin: "0 auto", padding: "var(--section-y-sm) var(--layout-gutter-lg)", display: "grid", gridTemplateColumns: "0.85fr 1.15fr", gap: "var(--space-11)", alignItems: "start" }}>
          <div>
            <span className="shantara-eyebrow" style={{ color: "var(--text-brand)" }}>{t("Thirteen therapies")}</span>
            <h2 style={{ font: "var(--type-h2)", color: "var(--text-primary)", margin: "var(--space-5) 0 var(--space-6)", maxWidth: "22ch" }}>{t("Naturopathy treatments and therapies")}</h2>
            <p style={{ color: "var(--text-secondary)", maxWidth: "40ch", margin: "0 0 var(--space-8)" }}>{t("Your doctor may recommend specific therapies based on your assessment and programme.")}</p>
            <Button variant="accent" size="lg" onClick={() => onNavigate("programme")}>{t("Read what to expect")}</Button>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "var(--space-6) var(--space-8)" }}>
            {THERAPIES.map(([name, desc]) => (
              <div key={name}>
                <h3 style={{ font: "var(--type-h4)", fontSize: "var(--text-base)", color: "var(--text-primary)", margin: "0 0 var(--space-2)" }}>{t(name)}</h3>
                <p style={{ font: "var(--type-body-sm)", color: "var(--text-secondary)", margin: 0 }}>{t(desc)}</p>
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
            <h2 style={{ font: "var(--type-h2)", marginTop: "var(--space-4)" }}>{t("Accommodation")}</h2>
          </div>
          <Button variant="ghost" style={{ marginInlineStart: "auto" }} onClick={() => onNavigate("tariffs")} endIcon={<Icon name="arrow-right" size={16} />}>{t("View tariffs")}</Button>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "var(--space-7)" }}>
          {ROOMS.map((r) => (
            <div key={r.name}>
              <Photo name={r.photo} alt={t(r.name)} />
              <h3 style={{ font: "var(--type-h4)", fontSize: "var(--text-lg)", margin: "var(--space-5) 0 0" }}>{t(r.name)}</h3>
              <p style={{ font: "var(--type-body-sm)", color: "var(--text-secondary)", margin: "var(--space-2) 0 0" }}>{t(r.spec)}</p>
            </div>
          ))}
        </div>
        <Divider spacing="var(--space-8)" />
        <p style={{ fontSize: "var(--text-sm)", color: "var(--text-secondary)", margin: 0, maxWidth: "80ch" }}>{t("Shantara has 52 rooms across five accommodation categories, designed for comfortable residential stays.")}</p>
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
            {[["How programme duration is decided", "Clinical Guides", "corridor"], ["What a supervised fast actually feels like", "Doctor Answers", "treatment"], ["A week of monsoon light", "Guest Stories", "valley"]].map(([title, k, ph]) => (
              <a key={title} href="#" onClick={(e) => { e.preventDefault(); onNavigate("journal"); }} style={{ textDecoration: "none", color: "inherit" }}>
                <Photo name={ph} alt={t(title)} />
                <span className="shantara-eyebrow" style={{ display: "block", marginTop: "var(--space-5)" }}>{t(k)}</span>
                <h3 style={{ font: "var(--type-h4)", fontSize: "var(--text-lg)", margin: "var(--space-3) 0 0", maxWidth: "24ch" }}>{t(title)}</h3>
                <span style={{ display: "block", marginTop: "var(--space-3)", fontSize: "var(--text-xs)", color: "var(--text-muted)" }}>{t("5 min read")}</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ + enquiry */}
      <section>
        <div style={{ maxWidth: "var(--layout-max)", margin: "0 auto", padding: "var(--section-y-sm) var(--layout-gutter-lg)", display: "grid", gridTemplateColumns: "1fr 0.85fr", gap: "var(--space-11)" }}>
          <div>
            <h2 style={{ font: "var(--type-h3)", marginBottom: "var(--space-6)" }}>{t("Preparing for your stay")}</h2>
            <Accordion items={[
              { title: t("How long should I stay?"), content: t("Duration depends on the programme and your assessment. Your doctor advises a typical duration after consultation.") },
              { title: t("Can I leave the property during my stay?"), content: t("Guests usually remain at the retreat during the programme so meals, therapies and reviews can follow the plan. Leaving for a medical emergency is arranged with the team.") },
              { title: t("How do meals work?"), content: t("Meals are planned as part of your programme, taking into account your doctor's recommendations and dietary requirements.") },
              { title: t("Is my booking confirmed straight away?"), content: t("A stay is confirmed after a preliminary consultation with our doctors. You will be asked to share a health assessment, relevant medical records and your current medication first.") },
              { title: t("Who can stay?"), content: t("Shantara accepts guests aged 18 to 80 with conditions that can be managed through residential naturopathy. Acute or emergency care is outside what we provide.") },
            ]} />
          </div>
          <div style={{ background: "var(--surface-card)", borderRadius: "var(--radius-card)", padding: "var(--space-9)", alignSelf: "start", boxShadow: "var(--shadow-sm)" }}>
            <span className="shantara-eyebrow">{t("Book a Consultation")}</span>
            <h3 style={{ font: "var(--type-h4)", margin: "var(--space-4) 0 var(--space-4)" }}>{t("Send your details")}</h3>
            <p style={{ font: "var(--type-body-sm)", color: "var(--text-secondary)", margin: "0 0 var(--space-6)" }}>{t("Share your name and a number we can reach. Our team will contact you to arrange a consultation.")}</p>
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
