function EnquiryScreen({ onNavigate }) {
  const { Button, Input, Select, Checkbox, Textarea, Card, Badge, Divider, Icon, Dialog, Toast, Spinner } = window.ShantaraDesignSystem_45bbe4;
  const [step, setStep] = React.useState(1);
  const [arrival, setArrival] = React.useState("Mon 12 Oct");
  const [nights, setNights] = React.useState("14");
  const [confirming, setConfirming] = React.useState(false);
  const [pending, setPending] = React.useState(false);
  const [done, setDone] = React.useState(false);
  const days = [["Mon 5 Oct", "3 rooms"], ["Mon 12 Oct", "7 rooms"], ["Mon 19 Oct", "2 rooms"], ["Mon 26 Oct", "full"], ["Mon 2 Nov", "6 rooms"]];
  const stays = ["7", "10", "14", "21", "28"];

  const submit = () => {
    setPending(true);
    setTimeout(() => { setPending(false); setConfirming(false); setDone(true); setStep(3); }, 1400);
  };

  return (
    <main style={{ maxWidth: "980px", margin: "0 auto", padding: "var(--space-9) var(--layout-gutter-lg) var(--section-y)" }}>
      <span className="shantara-eyebrow">Enquiry</span>
      <h1 style={{ font: "var(--type-h1)", fontSize: "var(--text-3xl)", margin: "var(--space-4) 0 var(--space-8)" }}>Detox programme</h1>
      <div style={{ display: "flex", gap: "var(--space-6)", marginBottom: "var(--space-8)" }}>
        {["Dates", "Health assessment", "Submitted"].map((l, i) => (
          <div key={l} style={{ display: "flex", alignItems: "center", gap: "var(--space-4)", opacity: step >= i + 1 ? 1 : 0.4 }}>
            <span style={{ width: 26, height: 26, borderRadius: "999px", display: "grid", placeItems: "center", fontSize: "var(--text-2xs)", background: step >= i + 1 ? "var(--surface-brand)" : "var(--surface-raised)", color: step >= i + 1 ? "var(--text-on-brand)" : "var(--text-secondary)" }}>{step > i + 1 ? "✓" : i + 1}</span>
            <span style={{ fontSize: "var(--text-sm)" }}>{l}</span>
            {i < 2 ? <span style={{ width: 40, height: 1, background: "var(--border-default)" }} /> : null}
          </div>
        ))}
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1.2fr 0.8fr", gap: "var(--space-8)", alignItems: "start" }}>
        <Card padding="lg">
          {step === 1 ? (
            <div>
              <h3 style={{ font: "var(--type-h4)", margin: "0 0 var(--space-3)" }}>When would you like to arrive?</h3>
              <p style={{ font: "var(--type-body-sm)", color: "var(--text-secondary)", margin: "0 0 var(--space-6)" }}>Programmes begin on Mondays so the clinical team can hold one intake a week. We accept a hundred bookings a month.</p>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(5,1fr)", gap: "var(--space-3)" }}>
                {days.map(([d, n]) => (
                  <button key={d} type="button" onClick={() => n !== "full" && setArrival(d)} disabled={n === "full"}
                    style={{ padding: "var(--space-5) var(--space-3)", borderRadius: "var(--radius-md)", cursor: n === "full" ? "not-allowed" : "pointer", textAlign: "center", border: `1px solid ${arrival === d ? "var(--border-brand)" : "var(--border-default)"}`, background: arrival === d ? "var(--surface-brand-soft)" : "var(--surface-card)", opacity: n === "full" ? 0.45 : 1, fontFamily: "var(--font-body)" }}>
                    <div style={{ fontSize: "var(--text-sm)", fontWeight: "var(--weight-medium)" }}>{d}</div>
                    <div style={{ fontSize: "var(--text-3xs)", color: "var(--text-muted)", marginTop: 4 }}>{n}</div>
                  </button>
                ))}
              </div>
              <Divider spacing="var(--space-7)" label="nights" />
              <div style={{ display: "grid", gridTemplateColumns: "repeat(5,1fr)", gap: "var(--space-3)" }}>
                {stays.map((s) => (
                  <button key={s} type="button" onClick={() => setNights(s)}
                    style={{ height: "var(--control-lg)", borderRadius: "var(--radius-pill)", cursor: "pointer", fontVariantNumeric: "tabular-nums", fontFamily: "var(--font-body)", fontSize: "var(--text-sm)", border: `1px solid ${nights === s ? "transparent" : "var(--border-default)"}`, background: nights === s ? "var(--surface-brand)" : "transparent", color: nights === s ? "var(--text-on-brand)" : "var(--text-primary)" }}>{s}</button>
                ))}
              </div>
              <div style={{ display: "flex", justifyContent: "flex-end", marginTop: "var(--space-8)" }}>
                <Button size="lg" onClick={() => setStep(2)} endIcon={<Icon name="arrow-right" size={17} />}>Continue</Button>
              </div>
            </div>
          ) : step === 2 ? (
            <div>
              <h3 style={{ font: "var(--type-h4)", margin: "0 0 var(--space-3)" }}>Health assessment</h3>
              <p style={{ font: "var(--type-body-sm)", color: "var(--text-secondary)", margin: "0 0 var(--space-6)" }}>Our doctors read this before your preliminary consultation. Nothing is confirmed until they have.</p>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "var(--space-5)" }}>
                <Input label="Full name" defaultValue="Anjali Menon" required />
                <Input label="Age" defaultValue="47" hint="Guests must be 18–80" required />
                <Input label="Email" type="email" defaultValue="anjali@example.com" required />
                <Input label="Mobile" defaultValue="+91 98470 00000" required />
                <Select label="Room category" options={["Standard Room", "Superior Room", "Premium Room", "Junior Suite", "Executive Suite"]} defaultValue="Superior Room" />
                <Select label="Occupancy" options={["Single", "Double"]} defaultValue="Single" />
              </div>
              <Textarea style={{ marginTop: "var(--space-5)" }} label="Conditions being managed" hint="Diagnoses, duration, and anything a doctor should see first." maxLength={400} value="" onChange={() => {}} required />
              <Textarea style={{ marginTop: "var(--space-5)" }} label="Current medications" hint="All medications must be declared — naturopathy treatments can interact with them." maxLength={400} value="" onChange={() => {}} required />
              <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-4)", marginTop: "var(--space-6)" }}>
                <Checkbox label="I will upload my medical records" description="Reports from the last 12 months, if you have them" defaultChecked />
                <Checkbox label="I have read the house rules" description="Including that guests remain on the property for the duration of the stay" defaultChecked />
                <Checkbox label="Arrange airport or railway transfer" description="Included in every tariff" defaultChecked />
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", marginTop: "var(--space-8)" }}>
                <Button variant="secondary" onClick={() => setStep(1)}>Back</Button>
                <Button size="lg" onClick={() => setConfirming(true)}>Submit for review</Button>
              </div>
            </div>
          ) : (
            <div style={{ textAlign: "center", padding: "var(--space-8) 0" }}>
              <div style={{ width: 56, height: 56, borderRadius: "999px", background: "var(--status-success-soft)", display: "grid", placeItems: "center", margin: "0 auto var(--space-6)" }}>
                <Icon name="check" size={26} color="var(--status-success)" />
              </div>
              <h3 style={{ font: "var(--type-h3)", fontSize: "var(--text-2xl)", margin: "0 0 var(--space-4)" }}>With the doctors now</h3>
              <p style={{ color: "var(--text-secondary)", margin: "0 auto var(--space-8)", maxWidth: "40ch" }}>We will call within two working days to arrange your preliminary consultation for {arrival}, {nights} nights. Your room is held until then.</p>
              <div style={{ display: "flex", gap: "var(--space-4)", justifyContent: "center" }}>
                <Button variant="secondary" onClick={() => onNavigate("home")}>Back to home</Button>
                <Button onClick={() => onNavigate("programme")}>Read the programme again</Button>
              </div>
            </div>
          )}
        </Card>

        <Card tone="raised" padding="lg">
          <span className="shantara-eyebrow">Your enquiry</span>
          <Photo name="room-twin" alt="Superior room" height={120} radius="var(--radius-sm)" style={{ margin: "var(--space-5) 0" }} />
          <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-4)", fontSize: "var(--text-sm)" }}>
            <div style={{ display: "flex", justifyContent: "space-between" }}><span style={{ color: "var(--text-secondary)" }}>Programme</span><span>Detox</span></div>
            <div style={{ display: "flex", justifyContent: "space-between" }}><span style={{ color: "var(--text-secondary)" }}>Arrival</span><span style={{ fontVariantNumeric: "tabular-nums" }}>{arrival}</span></div>
            <div style={{ display: "flex", justifyContent: "space-between" }}><span style={{ color: "var(--text-secondary)" }}>Nights</span><span style={{ fontVariantNumeric: "tabular-nums" }}>{nights}</span></div>
            <div style={{ display: "flex", justifyContent: "space-between" }}><span style={{ color: "var(--text-secondary)" }}>Room</span><span>Superior · single</span></div>
            <Divider spacing="var(--space-2)" tone="default" />
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}><span>Indicative total</span><span style={{ font: "var(--weight-light) var(--text-2xl)/1 var(--font-display)", fontVariantNumeric: "tabular-nums" }}>₹{(16000 * Number(nights)).toLocaleString("en-IN")}</span></div>
          </div>
          <p style={{ fontSize: "var(--text-2xs)", color: "var(--text-muted)", margin: "var(--space-5) 0 0" }}>Includes daily consultation, all prescribed therapies, diet therapy, wellness attire, transfers and taxes.</p>
          <Badge tone="outline" style={{ marginTop: "var(--space-6)" }}>Confirmed only after doctor review</Badge>
        </Card>
      </div>

      <Dialog open={confirming} onClose={pending ? undefined : () => setConfirming(false)}
        title="Send this to the clinical team?"
        description="Our doctors will review your assessment and call to arrange the preliminary consultation. Your room is held meanwhile."
        footer={pending ? <Spinner /> : <><Button variant="secondary" onClick={() => setConfirming(false)}>Not yet</Button><Button onClick={submit}>Yes, submit</Button></>} />

      {done ? <Toast fixed tone="success" title="Assessment received" message={`${arrival} · ${nights} nights held for review.`} onClose={() => setDone(false)} /> : null}
    </main>
  );
}

Object.assign(window, { EnquiryScreen });
