/* Real property photography from the brand package. `name` maps to assets/photos/<name>.jpg */
function Photo({ name, alt = "", height = 160, radius = "var(--radius-media)", position = "center", scrim, children, style, ...rest }) {
  return (
    <div style={{ position: "relative", height: typeof height === "number" ? height + "px" : height, borderRadius: radius, overflow: "hidden", background: "var(--color-cotton-seed)", ...style }} {...rest}>
      <img src={"../../assets/photos/" + name + ".jpg"} alt={alt} style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", objectPosition: position }} />
      {scrim ? <span style={{ position: "absolute", inset: 0, background: scrim === "bottom" ? "var(--scrim-bottom)" : "var(--scrim-top)" }} /> : null}
      {children}
    </div>
  );
}

function Phone({ children, tab, onTab }) {
  const { t } = window.ShantaraI18n.useLocale();
  const { Icon } = window.ShantaraDesignSystem_45bbe4;
  const tabs = [["Today", "sun"], ["Programme", "flower"], ["Notes", "notebook-pen"], ["You", "user-round"]];
  return (
    <div style={{ width: 390, height: 844, borderRadius: 44, background: "var(--surface-page)", boxShadow: "var(--shadow-xl)", overflow: "hidden", position: "relative", display: "flex", flexDirection: "column", border: "1px solid var(--border-subtle)" }}>
      <div style={{ height: 52, flex: "0 0 auto", display: "flex", alignItems: "flex-end", justifyContent: "space-between", padding: "0 26px 6px", fontSize: 12, fontWeight: "var(--weight-medium)", fontVariantNumeric: "tabular-nums" }}>
        <span>6:15</span><span style={{ display: "flex", gap: 5 }}><Icon name="signal" size={13} /><Icon name="wifi" size={13} /><Icon name="battery-full" size={13} /></span>
      </div>
      <div style={{ flex: 1, overflowY: "auto", padding: "0 20px 20px" }}>{children}</div>
      <nav style={{ flex: "0 0 auto", height: 78, display: "grid", gridTemplateColumns: "repeat(4,1fr)", alignItems: "center", borderTop: "1px solid var(--border-subtle)", background: "color-mix(in srgb, var(--color-merino) 92%, transparent)", backdropFilter: "var(--blur-glass)", paddingBottom: "calc(14px + env(safe-area-inset-bottom, 0px))" }}>
        {tabs.map(([l, ic]) => (
          <button key={l} type="button" onClick={() => onTab(l)} style={{ border: 0, background: "transparent", display: "grid", justifyItems: "center", gap: 5, cursor: "pointer", minHeight: 44, color: tab === l ? "var(--text-brand)" : "var(--text-muted)", transition: "color var(--duration-fast) var(--ease-standard), transform var(--duration-fast) var(--ease-out)", touchAction: "manipulation", userSelect: "none", WebkitUserSelect: "none" }} onPointerDown={(e) => { e.currentTarget.style.transform = "scale(var(--press-scale))"; }} onPointerUp={(e) => { e.currentTarget.style.transform = "none"; }} onPointerLeave={(e) => { e.currentTarget.style.transform = "none"; }}>
            <Icon name={ic} size={21} />
            <span style={{ fontSize: 10, letterSpacing: "0.04em", fontFamily: "var(--font-body)" }}>{t(l)}</span>
          </button>
        ))}
      </nav>
    </div>
  );
}

Object.assign(window, { Photo, Phone });
