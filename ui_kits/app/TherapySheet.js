function TherapySheet({ onClose }) {
  const { Button, Badge, Divider, Icon, IconButton, Toast, Accordion } = window.ShantaraDesignSystem_45bbe4;
  const [confirmed, setConfirmed] = React.useState(false);
  return (
    <div style={{ position: "absolute", inset: 0, background: "var(--surface-page)", display: "flex", flexDirection: "column", zIndex: 40, animation: "sh-sheet var(--duration-slow) var(--ease-out)" }}>
      <style>{"@keyframes sh-sheet{from{transform:translateY(24px);opacity:0}to{transform:none;opacity:1}}"}</style>
      <div style={{ flex: 1, overflowY: "auto" }}>
        <Photo name="treatment" alt="Therapy room" height={280} radius="0px" scrim="top">
          <div style={{ position: "absolute", top: 52, left: 16, right: 16, display: "flex", justifyContent: "space-between" }}>
            <IconButton variant="glass" label="Back" onClick={onClose}><Icon name="chevron-left" size={19} /></IconButton>
            <IconButton variant="glass" label="Ask the care team"><Icon name="message-circle" size={18} /></IconButton>
          </div>
        </Photo>
        <div style={{ padding: "var(--space-7) 20px var(--space-8)" }}>
          <Badge tone="brand">Prescribed therapy</Badge>
          <h1 style={{ font: "var(--weight-light) var(--text-2xl)/1.15 var(--font-display)", margin: "var(--space-4) 0 var(--space-3)" }}>Mud therapy</h1>
          <div style={{ display: "flex", gap: "var(--space-5)", fontSize: "var(--text-2xs)", color: "var(--text-muted)", fontVariantNumeric: "tabular-nums" }}>
            <span>10:30 today</span><span>45 minutes</span><span>Therapy wing</span>
          </div>
          <p style={{ font: "var(--type-body-sm)", color: "var(--text-secondary)", marginTop: "var(--space-5)" }}>Mineral-rich earth applied to calm inflammation, improve circulation and ease physical tension. Part of your Detox programme from day four.</p>
          <Divider spacing="var(--space-6)" />
          <span className="shantara-eyebrow">Before you come</span>
          <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-4)", marginTop: "var(--space-4)" }}>
            {[["shirt", "Wear the wellness attire in your room"], ["droplet", "Rinse in the changing wing first"], ["clock", "Arrive five minutes early — sessions start on the hour"]].map(([ic, t]) => (
              <div key={t} style={{ display: "flex", gap: "var(--space-4)", alignItems: "flex-start" }}>
                <Icon name={ic} size={17} color="var(--text-brand)" />
                <span style={{ fontSize: "var(--text-sm)", flex: 1 }}>{t}</span>
              </div>
            ))}
          </div>
          <Divider spacing="var(--space-6)" />
          <Accordion defaultOpen={null} items={[
            { title: "What it feels like", content: "Cool at first, then warm as the application settles. The session ends with ten minutes of rest before you rinse." },
            { title: "If something feels wrong", content: "Tell your therapist immediately. Any symptom, pain or discomfort during a session is escalated to a doctor — never waited out." },
            { title: "Changing your protocol", content: "Requests to stop, extend or modify a therapy go to your doctor rather than the therapy team." },
          ]} />
        </div>
      </div>
      <div style={{ flex: "0 0 auto", padding: "var(--space-5) 20px var(--space-8)", borderTop: "1px solid var(--border-subtle)", background: "var(--surface-card)", display: "flex", alignItems: "center", gap: "var(--space-5)" }}>
        <div>
          <div style={{ font: "var(--weight-light) var(--text-xl)/1 var(--font-display)", fontVariantNumeric: "tabular-nums" }}>10:30</div>
          <div style={{ fontSize: 10, color: "var(--text-muted)" }}>in 45 minutes</div>
        </div>
        <Button size="lg" fullWidth onClick={() => setConfirmed(true)}>I'll be there</Button>
      </div>
      {confirmed ? <Toast fixed tone="success" title="Noted" message="Your therapist has been told to expect you." onClose={() => { setConfirmed(false); onClose(); }} /> : null}
    </div>
  );
}

function ProfileScreen() {
  const { Card, Divider, Switch, Button, Badge, Icon, Tag } = window.ShantaraDesignSystem_45bbe4;
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-6)", paddingTop: "var(--space-5)" }}>
      <h1 style={{ font: "var(--weight-light) var(--text-2xl)/1.1 var(--font-display)" }}>You</h1>
      <Card padding="md">
        <div style={{ display: "flex", alignItems: "center", gap: "var(--space-5)" }}>
          <span style={{ width: 56, height: 56, flex: "0 0 56px", borderRadius: 999, background: "var(--surface-brand-soft)", display: "grid", placeItems: "center", font: "var(--weight-light) var(--text-lg)/1 var(--font-display)", color: "var(--text-brand)" }}>AM</span>
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: "var(--text-base)", fontWeight: "var(--weight-medium)" }}>Anjali Menon</div>
            <div style={{ fontSize: "var(--text-2xs)", color: "var(--text-muted)" }}>Superior Room 412 · Detox, 14 nights</div>
          </div>
          <Badge tone="brand">In stay</Badge>
        </div>
        <Divider spacing="var(--space-5)" />
        <div style={{ display: "flex", justifyContent: "space-between", textAlign: "center" }}>
          {[["Day 6", "of 14"], ["58", "therapies done"], ["12 Oct", "arrived"]].map(([n, l]) => (
            <div key={l}><div style={{ font: "var(--weight-light) var(--text-xl)/1 var(--font-display)", fontVariantNumeric: "tabular-nums" }}>{n}</div><div className="shantara-eyebrow" style={{ marginTop: 6 }}>{l}</div></div>
          ))}
        </div>
      </Card>
      <div>
        <span className="shantara-eyebrow">On your file</span>
        <div style={{ display: "flex", gap: "var(--space-3)", flexWrap: "wrap", marginTop: "var(--space-4)" }}>
          {["Type 2 diabetes", "Low back pain", "No dairy", "Left knee — no deep pressure"].map((t) => <Tag key={t} selected>{t}</Tag>)}
        </div>
        <p style={{ fontSize: "var(--text-2xs)", color: "var(--text-muted)", marginTop: "var(--space-4)" }}>Visible to your care team only. Ask a doctor to change anything here.</p>
      </div>
      <Card padding="md" tone="raised">
        <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-5)" }}>
          <Switch labelFirst label="Therapy reminders" defaultChecked />
          <Switch labelFirst label="Morning vitals prompt" defaultChecked />
          <Switch labelFirst label="Share progress with family" />
        </div>
      </Card>
      <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-2)" }}>
        {[["My programme & tariff", "receipt-text"], ["Health assessment form", "clipboard-list"], ["House rules", "scroll-text"], ["Care team", "life-buoy"]].map(([l, ic]) => (
          <button key={l} type="button" style={{ display: "flex", alignItems: "center", gap: "var(--space-5)", minHeight: 48, border: 0, borderBottom: "1px solid var(--border-subtle)", background: "transparent", cursor: "pointer", fontFamily: "var(--font-body)", fontSize: "var(--text-sm)", color: "var(--text-primary)", textAlign: "left" }}>
            <Icon name={ic} size={18} color="var(--text-secondary)" />
            <span style={{ flex: 1 }}>{l}</span>
            <Icon name="chevron-right" size={16} color="var(--text-muted)" />
          </button>
        ))}
      </div>
      <Button variant="secondary" fullWidth>Sign out</Button>
    </div>
  );
}

function NotesScreen() {
  const { Card, Textarea, Button, Icon, Divider, Badge } = window.ShantaraDesignSystem_45bbe4;
  const vitals = [["Weight", "71.4 kg", "−1.8 since day 1"], ["Fasting glucose", "112 mg/dL", "−26 since day 1"], ["Blood pressure", "128 / 82", "steady"], ["Sleep", "7h 10m", "+1h 20m"]];
  const entries = [
    ["Day 5", "Woke before the alarm for the first time. The 6:30 session felt easier on the knees."],
    ["Day 3", "Headache through the afternoon — mentioned it to Dr. Janu, who adjusted the evening meal."],
    ["Day 1", "Long drive up. The valley is louder than I expected: birds, not traffic."],
  ];
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-6)", paddingTop: "var(--space-5)" }}>
      <h1 style={{ font: "var(--weight-light) var(--text-2xl)/1.1 var(--font-display)" }}>Notes</h1>
      <Card padding="md" tone="raised">
        <span className="shantara-eyebrow">This morning's readings</span>
        <div style={{ marginTop: "var(--space-4)" }}>
          {vitals.map(([l, v, d], i) => (
            <div key={l} style={{ display: "flex", alignItems: "baseline", gap: "var(--space-4)", padding: "var(--space-4) 0", borderBottom: i < vitals.length - 1 ? "1px solid var(--border-subtle)" : "none" }}>
              <span style={{ fontSize: "var(--text-sm)", flex: 1 }}>{l}</span>
              <span style={{ fontSize: "var(--text-sm)", fontWeight: "var(--weight-medium)", fontVariantNumeric: "tabular-nums" }}>{v}</span>
              <span style={{ fontSize: "var(--text-3xs)", color: "var(--text-muted)", width: 108, textAlign: "right" }}>{d}</span>
            </div>
          ))}
        </div>
        <p style={{ fontSize: "var(--text-2xs)", color: "var(--text-muted)", margin: "var(--space-5) 0 0" }}>Recorded by the nursing team. Trends are for your doctor to interpret, not to act on alone.</p>
      </Card>
      <Card padding="md">
        <Textarea label="How was today?" hint="Your doctor reads this before the morning consultation." maxLength={300} value="" onChange={() => {}} />
        <Button fullWidth style={{ marginTop: "var(--space-5)" }} startIcon={<Icon name="check" size={16} />}>Save today's note</Button>
      </Card>
      <div>
        <span className="shantara-eyebrow">Earlier</span>
        <div style={{ marginTop: "var(--space-4)", display: "flex", flexDirection: "column", gap: "var(--space-4)" }}>
          {entries.map(([d, t]) => (
            <Card key={d} padding="md" tone="sunken">
              <Badge tone="outline">{d}</Badge>
              <p style={{ font: "var(--type-body-sm)", margin: "var(--space-3) 0 0" }}>{t}</p>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}

Object.assign(window, { TherapySheet, ProfileScreen, NotesScreen });
