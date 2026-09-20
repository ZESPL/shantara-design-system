function ConsultationScreen({ onNavigate }) {
  const { t } = window.ShantaraI18n.useLocale();
  const { Button, Input, Select, Textarea, Card, Badge, Divider, Icon, Dialog, Toast, Spinner } = window.ShantaraDesignSystem_45bbe4;
  const [started, setStarted] = React.useState(false);
  const [confirming, setConfirming] = React.useState(false);
  const [pending, setPending] = React.useState(false);
  const [done, setDone] = React.useState(false);

  const markStart = () => { if (!started) setStarted(true); };

  const submit = () => {
    setPending(true);
    setTimeout(() => { setPending(false); setConfirming(false); setDone(true); }, 1400);
  };

  if (done) {
    return (
      <main style={{ maxWidth: "720px", margin: "0 auto", padding: "var(--space-9) var(--layout-gutter-lg) var(--section-y)" }}>
        <div style={{ textAlign: "center", padding: "var(--space-11) 0" }}>
          <div style={{ width: 56, height: 56, borderRadius: "999px", background: "var(--status-success-soft)", display: "grid", placeItems: "center", margin: "0 auto var(--space-6)" }}>
            <Icon name="check" size={26} color="var(--status-success)" />
          </div>
          <h1 style={{ font: "var(--type-h2)", fontSize: "var(--text-3xl)", margin: "0 0 var(--space-5)" }}>{t("Consultation request received")}</h1>
          <p style={{ color: "var(--text-secondary)", margin: "0 auto var(--space-8)", maxWidth: "46ch" }}>{t("Our team will contact you to understand your requirements and guide you on the appropriate next step.")}</p>
          <div style={{ display: "flex", gap: "var(--space-4)", justifyContent: "center", flexWrap: "wrap" }}>
            <Button variant="secondary" onClick={() => onNavigate("home")}>{t("Back to home")}</Button>
            <Button variant="secondary" onClick={() => onNavigate("contact")}>{t("Contact")}</Button>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main style={{ maxWidth: "980px", margin: "0 auto", padding: "var(--space-9) var(--layout-gutter-lg) var(--section-y)" }}>
      <span className="shantara-eyebrow">{t("Book a Consultation")}</span>
      <h1 style={{ font: "var(--type-h1)", fontSize: "var(--text-3xl)", margin: "var(--space-4) 0 var(--space-4)" }}>{t("Tell us how to reach you")}</h1>
      <p style={{ font: "var(--type-lead)", color: "var(--text-secondary)", maxWidth: "52ch", margin: "0 0 var(--space-8)" }}>{t("One form. Our team uses this to arrange a consultation. It is not a medical intake, and nothing is confirmed until a doctor has spoken with you.")}</p>

      <div style={{ display: "grid", gridTemplateColumns: "1.2fr 0.8fr", gap: "var(--space-8)", alignItems: "start" }}>
        <Card padding="lg">
          <div style={{ display: "grid", gap: "var(--space-5)" }}>
            <Input label={t("Name")} required onFocus={markStart} />
            <Input label={t("Mobile / WhatsApp number")} required onFocus={markStart} />
            <Input label={t("Email")} type="email" hint={t("Optional")} onFocus={markStart} />
            <Select label={t("Country")} options={["India", "United Arab Emirates", "United Kingdom", "Other"].map((r) => ({ value: r, label: t(r) }))} defaultValue="India" onFocus={markStart} />
            <Textarea label={t("Anything you'd like us to know?")} hint={t("Optional — program, condition, or timing if you already know it.")} maxLength={400} onFocus={markStart} />
          </div>
          <div style={{ display: "flex", justifyContent: "flex-end", marginTop: "var(--space-8)" }}>
            <Button size="lg" onClick={() => setConfirming(true)}>{t("Book a Consultation")}</Button>
          </div>
        </Card>

        <Card tone="raised" padding="lg">
          <span className="shantara-eyebrow">{t("What happens next")}</span>
          <h2 style={{ font: "var(--type-h4)", margin: "var(--space-4) 0 var(--space-5)" }}>{t("A short sequence")}</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-3)" }}>
            {[
              ["1", "We receive this request and the page you came from."],
              ["2", "A team member contacts you to understand what you need."],
              ["3", "A doctor reviews whether a stay is appropriate."],
            ].map(([n, line]) => (
              <div key={n} style={{ display: "flex", gap: "var(--space-4)", alignItems: "center", background: "var(--color-pearl-bush)", padding: "var(--space-4)" }}>
                <span style={{ flex: "none", width: 36, height: 36, background: "var(--color-himalaya)", color: "var(--color-merino)", display: "grid", placeItems: "center", fontSize: "var(--text-lg)", fontWeight: "var(--weight-medium)", fontVariantNumeric: "tabular-nums" }}>{n}</span>
                <span style={{ fontSize: "var(--text-sm)", color: "var(--text-secondary)" }}>{t(line)}</span>
              </div>
            ))}
          </div>
          <Divider spacing="var(--space-6)" />
          <Button variant="ghost" fullWidth onClick={() => onNavigate("tariffs")} endIcon={<Icon name="arrow-right" size={16} />}>{t("View the tariff card")}</Button>
          <p style={{ fontSize: "var(--text-2xs)", color: "var(--text-muted)", margin: "var(--space-5) 0 0" }}>{t("Rates are quoted only on the tariff card. Your stay is confirmed after doctor review.")}</p>
          <Badge tone="outline" style={{ marginTop: "var(--space-6)" }}>{t("Confirmed only after doctor review")}</Badge>
        </Card>
      </div>

      <Dialog open={confirming} onClose={pending ? undefined : () => setConfirming(false)}
        title={t("Send this consultation request?")}
        description={t("We will use these details only to contact you. This is not yet a booking.")}
        footer={pending ? <Spinner /> : <><Button variant="secondary" onClick={() => setConfirming(false)}>{t("Not yet")}</Button><Button onClick={submit}>{t("Yes, send")}</Button></>} />

      {done ? <Toast fixed tone="success" title={t("Consultation request received")} message={t("Our team will contact you to understand your requirements and guide you on the appropriate next step.")} onClose={() => setDone(false)} /> : null}
    </main>
  );
}

Object.assign(window, { ConsultationScreen, EnquiryScreen: ConsultationScreen });
