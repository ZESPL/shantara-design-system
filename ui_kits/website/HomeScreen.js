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
  { name: "Executive Suite", spec: "530 sq.ft · balcony", single: "22,000", double: "28,000", photo: "room-premium" },
  { name: "Premium Room", spec: "460 sq.ft · balcony", single: "18,000", double: "24,000", photo: "room-twin" },
  { name: "Superior Room", spec: "300 sq.ft · balcony", single: "16,000", double: "22,000", photo: "balcony" },
];

function HomeScreen({ onNavigate }) {
  const { Button, Icon, Card, Badge, Tag, Accordion, Input, Divider } = window.ShantaraDesignSystem_45bbe4;
  const [focus, setFocus] = React.useState("All");
  const shown = focus === "All" ? PROGRAMMES : PROGRAMMES.filter((p) => p.focus === focus);
  return (
    <main>
      {/* Hero */}
      <section style={{ position: "relative", marginTop: "-96px", paddingTop: "96px" }}>
        <Photo name="arrival-dusk" alt="Shantara at dusk" height={640} radius="0px" scrim="bottom">
          <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "flex-end" }}>
            <div style={{ maxWidth: "var(--layout-max)", width: "100%", margin: "0 auto", padding: "0 var(--layout-gutter-lg) var(--space-12)" }}>
              <span className="shantara-eyebrow" style={{ color: "var(--color-gold-crayola)" }}>Kozhikode, Kerala · since 2000</span>
              <h1 style={{ font: "var(--type-display)", color: "var(--color-merino)", margin: "var(--space-5) 0 var(--space-6)", maxWidth: "22ch" }}>A doctor-led naturopathy retreat in Kerala</h1>
              <p style={{ font: "var(--type-lead)", color: "color-mix(in srgb, var(--color-merino) 88%, transparent)", maxWidth: "48ch", margin: "0 0 var(--space-8)" }}>Drug-free naturopathy on four hilltop acres above the Chennamangallur valley. Every stay begins with a consultation, and your programme is planned by our doctors.</p>
              <div style={{ display: "flex", gap: "var(--space-4)" }}>
                <Button size="lg" onClick={() => onNavigate("booking")}>Enquire about a stay</Button>
                <Button size="lg" variant="inverse" onClick={() => onNavigate("programme")} endIcon={<Icon name="arrow-right" size={17} />}>View programmes</Button>
              </div>
            </div>
          </div>
        </Photo>
      </section>

      {/* Intro */}
      <section style={{ maxWidth: "var(--layout-max)", margin: "0 auto", padding: "var(--section-y) var(--layout-gutter-lg)", display: "grid", gridTemplateColumns: "0.9fr 1.1fr", gap: "var(--space-11)", alignItems: "start" }}>
        <div>
          <span className="shantara-eyebrow">Our approach</span>
          <h2 style={{ font: "var(--type-h2)", marginTop: "var(--space-5)", maxWidth: "18ch" }}>How our doctors plan your programme</h2>
        </div>
        <div>
          <p style={{ font: "var(--type-lead)", margin: "0 0 var(--space-6)" }}>Naturopathy treats the causes of a condition through diet, activity, therapies and rest rather than through medication.</p>
          <p style={{ color: "var(--text-secondary)", margin: 0 }}>Your stay begins with a consultation. Our doctors review your medical history, current medications, daily habits and goals, then write a programme of therapies, meals, activity and rest. It is reviewed every morning and adjusted as your stay progresses. Protocols need time to take effect, which is why the minimum stay is seven nights.</p>
          <div style={{ display: "flex", gap: "var(--space-9)", marginTop: "var(--space-9)", flexWrap: "wrap" }}>
            {[["4", "hilltop acres"], ["52", "rooms, 5 categories"], ["25,000+", "patients since 2000"], ["7", "night minimum stay"]].map(([n, l]) => (
              <div key={l}>
                <div style={{ font: "var(--weight-light) var(--text-3xl)/1 var(--font-display)", fontVariantNumeric: "tabular-nums" }}>{n}</div>
                <div className="shantara-eyebrow" style={{ marginTop: "var(--space-3)" }}>{l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Programmes */}
      <section style={{ background: "var(--surface-sunken)" }}>
        <div style={{ maxWidth: "var(--layout-max)", margin: "0 auto", padding: "var(--section-y-sm) var(--layout-gutter-lg)" }}>
          <div style={{ display: "flex", alignItems: "flex-end", gap: "var(--space-7)", marginBottom: "var(--space-8)" }}>
            <div>
              <span className="shantara-eyebrow">Naturopathy programmes</span>
              <h2 style={{ font: "var(--type-h2)", marginTop: "var(--space-4)" }}>Eight programmes to choose from</h2>
            </div>
            <div style={{ marginLeft: "auto", display: "flex", gap: "var(--space-3)", flexWrap: "wrap" }}>
              {["All", "Mind", "Metabolic", "Clinical", "Rest"].map((t) => <Tag key={t} selected={focus === t} onClick={() => setFocus(t)}>{t}</Tag>)}
            </div>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "var(--space-6)" }}>
            {shown.map((p) => (
              <Card key={p.name} interactive padding="md" onClick={() => onNavigate("programme")}>
                <Photo name={p.photo} alt={p.name} height={150} radius="var(--radius-sm)" style={{ marginBottom: "var(--space-4)" }} />
                <div style={{ display: "flex", alignItems: "center", gap: "var(--space-4)" }}>
                  <Badge tone="outline">{p.focus}</Badge>
                  <span style={{ fontSize: "var(--text-2xs)", color: "var(--text-muted)" }}>{p.nights}</span>
                </div>
                <h3 style={{ font: "var(--type-h4)", fontSize: "var(--text-lg)", margin: "var(--space-2) 0 var(--space-2)" }}>{p.name}</h3>
                <p style={{ font: "var(--type-body-sm)", color: "var(--text-secondary)", margin: 0 }}>{p.copy}</p>
              </Card>
            ))}
          </div>
          <p style={{ marginTop: "var(--space-7)", fontSize: "var(--text-sm)", color: "var(--text-muted)", maxWidth: "72ch" }}>Alongside these, Shantara runs condition-specific medical programmes across eleven categories, from metabolic and renal health to hormonal conditions. Every guest in a medical programme is under a doctor's direct care.</p>
        </div>
      </section>

      {/* Therapies band — flat olive. The page's one rosette band lives in the footer. */}
      <section style={{ background: "var(--color-himalaya)", color: "var(--text-on-inverse)" }}>
        <div style={{ maxWidth: "var(--layout-max)", margin: "0 auto", padding: "var(--section-y-sm) var(--layout-gutter-lg)", display: "grid", gridTemplateColumns: "0.85fr 1.15fr", gap: "var(--space-11)", alignItems: "start" }}>
          <div>
            <span className="shantara-eyebrow" style={{ color: "var(--color-gold-crayola)" }}>Thirteen therapies</span>
            <h2 style={{ font: "var(--type-h2)", color: "var(--color-merino)", margin: "var(--space-5) 0 var(--space-6)", maxWidth: "22ch" }}>Treatments and therapies your doctor may prescribe</h2>
            <p style={{ color: "color-mix(in srgb, var(--color-merino) 82%, transparent)", maxWidth: "40ch", margin: "0 0 var(--space-8)" }}>Each therapy is prescribed as part of the programme your doctor writes for you. None of them can be booked separately.</p>
            <Button variant="accent" size="lg" onClick={() => onNavigate("programme")}>What to expect during your stay</Button>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "var(--space-6) var(--space-8)" }}>
            {THERAPIES.map(([t, d]) => (
              <div key={t}>
                <h3 style={{ font: "var(--type-h4)", fontSize: "var(--text-base)", color: "var(--color-merino)", margin: "0 0 var(--space-2)" }}>{t}</h3>
                <p style={{ font: "var(--type-body-sm)", color: "color-mix(in srgb, var(--color-merino) 88%, transparent)", margin: 0 }}>{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Rooms */}
      <section style={{ maxWidth: "var(--layout-max)", margin: "0 auto", padding: "var(--section-y) var(--layout-gutter-lg)" }}>
        <div style={{ display: "flex", alignItems: "flex-end", marginBottom: "var(--space-8)" }}>
          <div>
            <span className="shantara-eyebrow">Accommodation</span>
            <h2 style={{ font: "var(--type-h2)", marginTop: "var(--space-4)" }}>Rooms and tariffs</h2>
          </div>
          <Button variant="ghost" style={{ marginLeft: "auto" }} endIcon={<Icon name="arrow-right" size={16} />}>View all five categories</Button>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "var(--space-7)" }}>
          {ROOMS.map((r) => (
            <div key={r.name}>
              <Photo name={r.photo} alt={r.name} height={240} />
              <div style={{ display: "flex", alignItems: "baseline", gap: "var(--space-4)", marginTop: "var(--space-5)" }}>
                <h3 style={{ font: "var(--type-h4)", fontSize: "var(--text-lg)", margin: 0 }}>{r.name}</h3>
                <span style={{ marginLeft: "auto", fontSize: "var(--text-sm)", fontVariantNumeric: "tabular-nums" }}>₹{r.single}<span style={{ color: "var(--text-muted)" }}> / night</span></span>
              </div>
              <p style={{ font: "var(--type-body-sm)", color: "var(--text-secondary)", margin: "var(--space-2) 0 0" }}>{r.spec} · double occupancy ₹{r.double}</p>
            </div>
          ))}
        </div>
        <Divider spacing="var(--space-8)" />
        <p style={{ fontSize: "var(--text-sm)", color: "var(--text-secondary)", margin: 0, maxWidth: "80ch" }}>Every tariff includes daily doctor consultation, prescribed naturopathy treatments, yoga and meditation, diet therapy, wellness attire with daily laundry, airport and railway transfers, and all applicable taxes. Rates valid to 31 December 2026.</p>
      </section>

      {/* Journal */}
      <section style={{ background: "var(--surface-raised)" }}>
        <div style={{ maxWidth: "var(--layout-max)", margin: "0 auto", padding: "var(--section-y-sm) var(--layout-gutter-lg)" }}>
          <div style={{ display: "flex", alignItems: "flex-end", marginBottom: "var(--space-8)" }}>
            <div>
              <span className="shantara-eyebrow">Journal</span>
              <h2 style={{ font: "var(--type-h2)", marginTop: "var(--space-4)" }}>Articles from our doctors and team</h2>
            </div>
            <Button variant="ghost" style={{ marginLeft: "auto" }} onClick={() => onNavigate("journal")} endIcon={<Icon name="arrow-right" size={16} />}>View all articles</Button>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "var(--space-7)" }}>
            {[["Why seven nights is a clinical number, not a sales one", "Treatment", "corridor"], ["What a supervised fast actually feels like", "Therapy", "treatment"], ["Reading the valley: a week of monsoon light", "The property", "valley"]].map(([t, k, ph]) => (
              <a key={t} href="#" onClick={(e) => { e.preventDefault(); onNavigate("journal"); }} style={{ textDecoration: "none", color: "inherit" }}>
                <Photo name={ph} alt={t} height={200} />
                <span className="shantara-eyebrow" style={{ display: "block", marginTop: "var(--space-5)" }}>{k}</span>
                <h3 style={{ font: "var(--type-h4)", fontSize: "var(--text-lg)", margin: "var(--space-3) 0 0", maxWidth: "24ch" }}>{t}</h3>
                <span style={{ display: "block", marginTop: "var(--space-3)", fontSize: "var(--text-2xs)", color: "var(--text-muted)" }}>5 min read</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ + enquiry */}
      <section>
        <div style={{ maxWidth: "var(--layout-max)", margin: "0 auto", padding: "var(--section-y-sm) var(--layout-gutter-lg)", display: "grid", gridTemplateColumns: "1fr 0.85fr", gap: "var(--space-11)" }}>
          <div>
            <h2 style={{ font: "var(--type-h3)", marginBottom: "var(--space-6)" }}>Before you arrive</h2>
            <Accordion items={[
              { title: "Why is the minimum stay seven nights?", content: "Naturopathy protocols need this minimum duration to take effect. It is a clinical requirement rather than a booking policy — shorter stays cannot deliver a measurable result." },
              { title: "Can I leave the property during my stay?", content: "No, except for a genuine medical emergency and escorted by a doctor or designated team member. Treatment efficacy depends on controlled conditions: prescribed diets, structured routines and continuous monitoring." },
              { title: "How do meals work?", content: "Meals are part of the treatment rather than a restaurant menu. Diet therapy is personalised to your condition and goals, so there is no à la carte ordering and no outside food." },
              { title: "Is my booking confirmed straight away?", content: "Reservations are confirmed only after a mandatory preliminary consultation with our doctors. You will be asked to submit a Health Assessment Form, share relevant medical records and disclose all current medications first." },
              { title: "Who can be admitted?", content: "Guests aged 18 to 80 with chronic, lifestyle-driven conditions manageable through naturopathy. We cannot admit critical or acute conditions requiring emergency care or continuous monitoring." },
            ]} />
          </div>
          <div style={{ background: "var(--surface-card)", borderRadius: "var(--radius-card)", padding: "var(--space-9)", alignSelf: "start", boxShadow: "var(--shadow-sm)" }}>
            <span className="shantara-eyebrow">Enquiries</span>
            <h3 style={{ font: "var(--type-h4)", margin: "var(--space-4) 0 var(--space-4)" }}>Request a consultation</h3>
            <p style={{ font: "var(--type-body-sm)", color: "var(--text-secondary)", margin: "0 0 var(--space-6)" }}>Send your details and our clinical team will arrange your preliminary consultation. We accept one hundred bookings a month, no more.</p>
            <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-5)" }}>
              <Input label="Full name" placeholder="Your name" />
              <Input label="Email" type="email" placeholder="you@example.com" />
              <Button fullWidth onClick={() => onNavigate("booking")}>Request a consultation</Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

Object.assign(window, { HomeScreen, PROGRAMMES, THERAPIES, ROOMS });
