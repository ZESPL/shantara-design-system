const NAV = [
  { label: "Programmes", view: "programme" },
  { label: "Therapies", view: "home" },
  { label: "The Property", view: "home" },
  { label: "Journal", view: "journal" },
];

function SiteHeader({ view, onNavigate }) {
  const { Button, IconButton, Icon, Logo, Divider } = window.ShantaraDesignSystem_45bbe4;
  const [scrolled, setScrolled] = React.useState(false);
  React.useEffect(() => {
    const el = document.getElementById("kit-scroll");
    if (!el) return;
    const onScroll = () => setScrolled(el.scrollTop > 8);
    el.addEventListener("scroll", onScroll);
    return () => el.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <header style={{ position: "sticky", top: 0, zIndex: 30, background: scrolled ? "color-mix(in srgb, var(--color-merino) 88%, transparent)" : "transparent", backdropFilter: scrolled ? "var(--blur-glass)" : "none", WebkitBackdropFilter: scrolled ? "var(--blur-glass)" : "none", borderBottom: `1px solid ${scrolled ? "var(--border-subtle)" : "transparent"}`, transition: "background-color var(--duration-base) var(--ease-standard), border-color var(--duration-base) var(--ease-standard)" }}>
      <div style={{ maxWidth: "var(--layout-max)", margin: "0 auto", padding: "var(--space-6) var(--layout-gutter-lg)", display: "flex", alignItems: "center", gap: "var(--space-9)" }}>
        <a href="#" onClick={(e) => { e.preventDefault(); onNavigate("home"); }} style={{ display: "block" }}><Logo mark="full" tone="dark" height={40} assetBase="../../assets" /></a>
        <nav style={{ display: "flex", alignItems: "center", gap: "var(--space-7)" }}>
          {NAV.map((n) => (
            <a key={n.label} href="#" onClick={(e) => { e.preventDefault(); onNavigate(n.view); }}
              aria-current={view === n.view && n.view !== "home" ? "page" : undefined}
              style={{ fontSize: "var(--text-sm)", letterSpacing: "var(--tracking-wide)", whiteSpace: "nowrap", textDecoration: "none", textDecorationLine: view === n.view && n.view !== "home" ? "underline" : "none", textUnderlineOffset: "5px", textDecorationThickness: "1px", color: view === n.view && n.view !== "home" ? "var(--text-primary)" : "var(--text-secondary)" }}>{n.label}</a>
          ))}
        </nav>
        <div style={{ marginLeft: "auto", display: "flex", alignItems: "center", gap: "var(--space-4)" }}>
          <IconButton label="Search"><Icon name="search" size={18} /></IconButton>
          <IconButton label="Call the retreat"><Icon name="phone" size={18} /></IconButton>
          <Divider orientation="vertical" spacing="var(--space-2)" />
          <Button size="sm" onClick={() => onNavigate("booking")}>Enquire about a stay</Button>
        </div>
      </div>
    </header>
  );
}

function SiteFooter() {
  const { Logo } = window.ShantaraDesignSystem_45bbe4;
  const cols = [
    { title: "Programmes", links: ["Wellness programmes", "Medical programmes", "Therapies", "Diet therapy"] },
    { title: "Stay", links: ["Rooms & tariffs", "Facilities", "The property", "Getting here"] },
    { title: "Before you come", links: ["Health assessment", "Admission & eligibility", "House rules", "Cancellation policy"] },
  ];
  return (
    <footer style={{ position: "relative", background: "var(--surface-inverse)", color: "var(--text-on-inverse)", overflow: "hidden" }}>
      <span aria-hidden="true" style={{ position: "absolute", left: 0, right: 0, top: 0, height: 264, boxSizing: "border-box", borderBottom: "1px solid var(--pattern-rule-dark)", pointerEvents: "none" }}>
        <span style={{ position: "absolute", inset: 0, backgroundColor: "var(--pattern-ink-dark)", WebkitMaskImage: "url(../../assets/pattern-unit.png)", maskImage: "url(../../assets/pattern-unit.png)", WebkitMaskRepeat: "repeat", maskRepeat: "repeat", WebkitMaskSize: "132px 132px", maskSize: "132px 132px", opacity: 0.4 }} />
      </span>
      <div style={{ position: "relative", maxWidth: "var(--layout-max)", margin: "0 auto", padding: "calc(264px + var(--space-11)) var(--layout-gutter-lg) var(--space-8)", display: "grid", gridTemplateColumns: "1.4fr repeat(3, 1fr)", gap: "var(--space-9)" }}>
        <div>
          <Logo mark="full" tone="cream" height={44} assetBase="../../assets" />
          <p style={{ marginTop: "var(--space-6)", color: "var(--color-cotton-seed)", fontSize: "var(--text-sm)", lineHeight: "var(--leading-relaxed)", maxWidth: "32ch" }}>A naturopathy retreat on four hilltop acres above the Chennamangallur valley, Kozhikode. An evolution of Hygiene Nature Cure Hospital, caring for guests since 2000.</p>
          <div style={{ marginTop: "var(--space-7)", display: "flex", flexDirection: "column", gap: "var(--space-2)", fontSize: "var(--text-sm)", color: "var(--color-cotton-seed)" }}>
            <span>heal@shantara.life</span>
            <span style={{ fontVariantNumeric: "tabular-nums" }}>+91 9553 600 100 · +91 9553 700 100</span>
          </div>
        </div>
        {cols.map((c) => (
          <div key={c.title} style={{ display: "flex", flexDirection: "column", gap: "var(--space-4)" }}>
            <span className="shantara-eyebrow" style={{ color: "var(--color-gold-crayola)" }}>{c.title}</span>
            {c.links.map((l) => <a key={l} href="#" onClick={(e) => e.preventDefault()} style={{ fontSize: "var(--text-sm)", color: "var(--color-cotton-seed)", textDecoration: "none" }}>{l}</a>)}
          </div>
        ))}
      </div>
      <div style={{ position: "relative", maxWidth: "var(--layout-max)", margin: "0 auto", padding: "var(--space-6) var(--layout-gutter-lg) var(--space-9)", borderTop: "1px solid color-mix(in srgb, var(--color-merino) 14%, transparent)", display: "flex", gap: "var(--space-7)", fontSize: "var(--text-2xs)", color: "color-mix(in srgb, var(--color-cotton-seed) 70%, transparent)" }}>
        <span>© 2026 Shantara Naturopathy</span><span>Privacy</span><span>Terms</span><span style={{ marginLeft: "auto" }}>Kozhikode · Kerala · India</span>
      </div>
    </footer>
  );
}

Object.assign(window, { SiteHeader, SiteFooter });
