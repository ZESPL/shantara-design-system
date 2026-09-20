function ConsultationScreen({ onNavigate, locale = "en", view = "booking" }) {
  const { t, track } = window.ShantaraI18n.useLocale();
  const L = window.ShantaraLocales;
  const keys = (L && L.FORM_FIELD_KEYS) || { full_name: "full_name", phone: "phone", email: "email", country: "country", notes: "notes" };
  const { Button, Input, Select, Textarea, Card, Icon, Dialog, Toast, Spinner } = window.ShantaraDesignSystem_45bbe4;
  const [started, setStarted] = React.useState(false);
  const [confirming, setConfirming] = React.useState(false);
  const [pending, setPending] = React.useState(false);
  const [done, setDone] = React.useState(false);

  const context = L ? L.leadContext({
    locale,
    source_page: L.localePath(locale, L.kitViewPath(view)),
    page_type: "consultation",
    content_id: "book-consultation",
    content_name: "Book a Consultation",
    landing_page: typeof location !== "undefined" ? location.hash : "",
    referrer: typeof document !== "undefined" ? document.referrer : "",
  }) : { locale };

  const markStart = () => {
    if (started) return;
    setStarted(true);
    if (track) track("form_start", { form_id: "consultation", page_type: "consultation" });
  };

  const submit = () => {
    setPending(true);
    setTimeout(() => {
      setPending(false);
      setConfirming(false);
      setDone(true);
      if (track) track("generate_lead", { form_id: "consultation", page_type: "consultation", source_page: context.source_page });
    }, 1400);
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
      <h1 style={{ font: "var(--type-h1)", fontSize: "var(--text-3xl)", margin: "var(--space-4) 0 var(--space-4)" }}>{t("Send your details")}</h1>
      <p style={{ font: "var(--type-lead)", color: "var(--text-secondary)", maxWidth: "52ch", margin: "0 0 var(--space-8)" }}>{t("Share your name and a number we can reach. Our team will contact you to arrange a consultation.")}</p>

      <div style={{ display: "grid", gridTemplateColumns: "1.2fr 0.8fr", gap: "var(--space-8)", alignItems: "start" }}>
        <Card padding="lg">
          <div style={{ display: "grid", gap: "var(--space-5)" }}>
            <Input name={keys.full_name} autoComplete="name" label={t("Name")} required onFocus={markStart} />
            <Input name={keys.phone} autoComplete="tel" label={t("Mobile / WhatsApp number")} required onFocus={markStart} />
            <Input name={keys.email} autoComplete="email" label={t("Email")} type="email" hint={t("Optional")} onFocus={markStart} />
            <Select name={keys.country} label={t("Country")} options={[{ value: "IN", label: t("India") }, { value: "AE", label: t("United Arab Emirates") }, { value: "GB", label: t("United Kingdom") }, { value: "OTHER", label: t("Other") }]} defaultValue="IN" onFocus={markStart} />
            <Textarea name={keys.notes} label={t("Anything you'd like us to know?")} hint={t("Optional")} maxLength={400} onFocus={markStart} />
            {Object.entries(context).map(([key, value]) => (
              <input key={key} type="hidden" name={key} value={value || ""} readOnly />
            ))}
          </div>
          <div style={{ display: "flex", justifyContent: "flex-end", marginTop: "var(--space-8)" }}>
            <Button size="lg" onClick={() => setConfirming(true)}>{t("Send your details")}</Button>
          </div>
        </Card>

        <Card tone="raised" padding="lg">
          <h2 style={{ font: "var(--type-h4)", margin: "0 0 var(--space-5)" }}>{t("We'll be in touch")}</h2>
          <p style={{ font: "var(--type-body-sm)", color: "var(--text-secondary)", margin: "0 0 var(--space-7)" }}>{t("A member of the team will call you to understand what you need. A doctor then reviews whether a stay is the right next step.")}</p>
          <Button variant="ghost" fullWidth onClick={() => onNavigate("tariffs")} endIcon={<Icon name="arrow-right" size={16} />}>{t("View tariffs")}</Button>
          <p style={{ font: "var(--type-body-sm)", color: "var(--text-muted)", margin: "var(--space-6) 0 0" }}>{t("A stay is confirmed after a doctor has spoken with you.")}</p>
        </Card>
      </div>

      <Dialog open={confirming} onClose={pending ? undefined : () => setConfirming(false)}
        title={t("Send your details?")}
        description={t("We will use these details only to contact you.")}
        footer={pending ? <Spinner /> : <><Button variant="secondary" onClick={() => setConfirming(false)}>{t("Not yet")}</Button><Button onClick={submit}>{t("Yes, send")}</Button></>} />

      {done ? <Toast fixed tone="success" title={t("Consultation request received")} message={t("Our team will contact you to understand your requirements and guide you on the appropriate next step.")} onClose={() => setDone(false)} /> : null}
    </main>
  );
}

Object.assign(window, { ConsultationScreen });
