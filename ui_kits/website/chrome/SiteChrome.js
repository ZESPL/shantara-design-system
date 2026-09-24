const NAV = [
  { label: "Conditions", view: "conditions" },
  { label: "Programmes", view: "programme" },
  { label: "Experience", view: "experience" },
  { label: "About", view: "about" },
  { label: "Insights", view: "journal" },
  { label: "Contact", view: "contact" },
];

/* Views whose first section is a full-bleed photograph: the header starts transparent
   with Merino type over a subtle scrim, then turns solid Merino once the page scrolls. */
const PHOTO_HERO_VIEWS = ["home", "experience", "programme", "tariffs"];

const TEXT_SIZE_KEY = "shantara-text-size";
const TEXT_SIZES = [
  { id: "md", label: "Default" },
  { id: "lg", label: "Large" },
  { id: "xl", label: "Larger" },
];

function applyTextSize(size) {
  const next = TEXT_SIZES.some((s) => s.id === size) ? size : "md";
  if (typeof document !== "undefined") document.documentElement.setAttribute("data-text-size", next);
  try { localStorage.setItem(TEXT_SIZE_KEY, next); } catch (_) {}
  return next;
}

function readStoredTextSize() {
  try {
    const stored = localStorage.getItem(TEXT_SIZE_KEY);
    if (TEXT_SIZES.some((s) => s.id === stored)) return stored;
  } catch (_) {}
  return "md";
}

function siteContact() {
  const site = (window.ShantaraContent && window.ShantaraContent.site) || {};
  return { email: site.email || "heal@shantara.life", phones: site.phone || [] };
}

function telHref(phone) {
  return "tel:" + String(phone).replace(/[^\d+]/g, "");
}

function kitHref(locale, view) {
  return window.ShantaraLocales ? window.ShantaraLocales.kitHash(locale, view) : "#/en/";
}

/* The header overlays every page: it is sticky at the top of #kit-scroll and pulls the
   first section up underneath itself with a negative bottom margin of --header-h.
   HeroFullBleed / HeroStatement pad their tops for it. */
const CHROME_CSS = `
:root{--header-h:64px}
@media (min-width:1000px){:root{--header-h:72px}}
.sh-hdr{position:sticky;top:0;z-index:30;height:var(--header-h);margin-bottom:calc(-1 * var(--header-h));background:transparent;border-bottom:var(--border-width) solid transparent;transition:background-color var(--duration-base) var(--ease-standard),border-color var(--duration-base) var(--ease-standard)}
.sh-hdr[data-ground="photo"]{background:transparent;isolation:isolate}
/* Over photography the scrim runs past the header's own edge, so it never ends in a visible line. */
.sh-hdr[data-ground="photo"]::before{content:"";position:absolute;inset:0 0 auto 0;height:calc(var(--header-h) * 2);background:var(--scrim-header);pointer-events:none;z-index:-1}
.sh-hdr[data-scrolled="true"]{background:color-mix(in srgb, var(--color-merino) 88%, transparent);-webkit-backdrop-filter:var(--blur-glass);backdrop-filter:var(--blur-glass);border-bottom-color:var(--border-subtle)}
.sh-hdr-row{height:100%;display:flex;align-items:center;gap:var(--space-7)}
.sh-hdr-logo{display:flex;align-items:center;min-height:var(--tap-min);flex:0 0 auto}
.sh-hdr-logo:focus-visible,.sh-hdr-nav a:focus-visible{outline:none;box-shadow:var(--ring-focus)}
.sh-hdr-nav{display:none;align-items:center;gap:clamp(16px, 2.2vw - 6px, 32px)}
.sh-hdr-nav a{display:inline-flex;align-items:center;min-height:var(--tap-min);font-size:var(--text-sm);letter-spacing:var(--tracking-wide);white-space:nowrap;text-decoration:none;color:var(--text-secondary);transition:color var(--duration-fast) var(--ease-standard)}
.sh-hdr-nav a[aria-current="page"]{color:var(--text-primary);text-decoration:underline;text-decoration-thickness:1px;text-underline-offset:5px}
.sh-hdr-end{margin-inline-start:auto;display:flex;align-items:center;gap:var(--space-3)}
.sh-hdr-book-full{display:none}
.sh-hdr-menu .sh-ibtn{color:var(--text-primary)}
@media (hover: hover) and (pointer: fine){.sh-hdr-nav a:hover{color:var(--text-primary)}}
@media (max-width:379.98px){.sh-hdr-book-short{display:none}}
@media (min-width:1000px){
  .sh-hdr-row{gap:clamp(24px, 3vw - 6px, 48px)}
  .sh-hdr-nav{display:flex}
  .sh-hdr-book-full{display:block}
  .sh-hdr-book-short,.sh-hdr-menu{display:none}
}

.sh-menu{position:fixed;inset:0;z-index:60;display:flex;flex-direction:column;overflow-y:auto;overscroll-behavior:contain;animation:sh-menu-in var(--duration-base) var(--ease-out) both}
@keyframes sh-menu-in{from{opacity:0}to{opacity:1}}
.sh-menu-top{flex:0 0 auto;height:var(--header-h);display:flex;align-items:center;justify-content:space-between;gap:var(--space-5)}
.sh-menu-body{flex:1 0 auto;display:flex;flex-direction:column;gap:var(--stack-lg);padding-block:var(--space-8) var(--section-y-sm)}
.sh-menu-nav{list-style:none;margin:0;padding:0;display:flex;flex-direction:column}
.sh-menu-nav li{border-top:var(--border-width) solid var(--rule-color)}
.sh-menu-nav li:last-child{border-bottom:var(--border-width) solid var(--rule-color)}
.sh-menu-nav a{display:flex;align-items:center;min-height:var(--tap-min);padding-block:var(--space-4);font:var(--type-title);color:var(--text-primary);text-decoration:none}
.sh-menu-nav a[aria-current="page"]{color:var(--text-brand)}
.sh-menu-nav a:focus-visible,.sh-menu-contact a:focus-visible{outline:none;box-shadow:var(--ring-focus)}
.sh-menu-contact{display:flex;flex-direction:column;gap:var(--space-2);font:var(--type-body-sm);color:var(--text-secondary)}
.sh-menu-contact a{display:inline-flex;align-items:center;min-height:var(--tap-min);color:inherit;text-decoration:none}

.sh-foot{display:block}
/* With the rosette band showing, line the footer up with the page container's left edge (100cqw = the panel). */
.sh-foot .sh-pp-body>.sh-container{width:auto;margin-inline:max(0px, (100cqw - var(--layout-max)) / 2 - var(--layout-gutter)) 0}
.sh-foot-main{padding-block:var(--section-y-sm) var(--space-9)}
.sh-foot-grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:var(--space-9) var(--grid-gap)}
.sh-foot-brand{grid-column:1/-1;display:flex;flex-direction:column;align-items:flex-start;gap:var(--space-6);min-width:0}
.sh-foot-blurb{margin:0;font:var(--type-body-sm);color:var(--text-secondary);max-width:36ch}
.sh-foot-contact{display:flex;flex-direction:column;font:var(--type-body-sm);color:var(--text-secondary)}
.sh-foot-col{display:flex;flex-direction:column;gap:var(--space-1);min-width:0}
.sh-foot-col .shantara-eyebrow{margin:0 0 var(--space-3)}
.sh-foot a{display:inline-flex;align-items:center;min-height:var(--control-sm);font:var(--type-body-sm);color:var(--text-secondary);text-decoration:none;transition:color var(--duration-fast) var(--ease-standard)}
.sh-foot a:focus-visible,.sh-foot button:focus-visible{outline:none;box-shadow:var(--ring-focus)}
.sh-foot-bar{display:flex;flex-wrap:wrap;align-items:center;gap:var(--space-4) var(--space-7);padding-block:var(--space-6) var(--space-9);border-top:var(--border-width) solid var(--rule-color);font:var(--type-caption);color:var(--text-muted)}
.sh-foot-size{display:inline-flex;flex-wrap:wrap;align-items:center;gap:var(--space-3)}
.sh-foot-size button{appearance:none;display:inline-flex;align-items:center;min-height:var(--control-sm);padding:0 var(--space-4);border:var(--border-width) solid var(--rule-color);border-radius:var(--radius-sm);background:transparent;color:var(--text-primary);font:var(--type-label);letter-spacing:var(--tracking-wide);cursor:pointer;transition:var(--transition-control)}
.sh-foot-size button[aria-pressed="true"]{border-color:var(--text-primary);background:color-mix(in srgb, var(--color-merino) 14%, transparent)}
@media (pointer: coarse){.sh-foot a,.sh-foot-size button{min-height:var(--tap-min)}}
@media (hover: hover) and (pointer: fine){.sh-foot a:hover{color:var(--text-primary)}.sh-foot-size button:hover{border-color:var(--text-primary)}}
@media (min-width:760px){
  .sh-foot-grid{grid-template-columns:repeat(3,minmax(0,1fr))}
  .sh-foot-size{margin-inline-start:auto}
}
/* Brand column beside the three link columns once the band leaves them room. */
@media (min-width:1280px){
  .sh-foot-grid{grid-template-columns:minmax(0,1.4fr) repeat(3,minmax(0,1fr))}
  .sh-foot-brand{grid-column:auto}
}
`;

function ensureChromeCss() {
  if (typeof document === "undefined" || document.getElementById("sh-chrome-css")) return;
  const el = document.createElement("style");
  el.id = "sh-chrome-css";
  el.textContent = CHROME_CSS;
  document.head.appendChild(el);
}

function MenuSheet({ view, locale, onNavigate, onClose, onBook }) {
  const { t } = window.ShantaraI18n.useLocale();
  const { Button, IconButton, Icon, Logo } = window.ShantaraDesignSystem_45bbe4;
  const ref = React.useRef(null);
  const contact = siteContact();

  React.useEffect(() => {
    const root = ref.current;
    const first = root && root.querySelector("[data-autofocus]");
    if (first) first.focus();
    const onKey = (e) => {
      if (e.key === "Escape") { e.preventDefault(); onClose(true); return; }
      if (e.key !== "Tab" || !root) return;
      const items = [...root.querySelectorAll('a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])')];
      if (!items.length) return;
      const a = items[0];
      const z = items[items.length - 1];
      if (e.shiftKey && document.activeElement === a) { e.preventDefault(); z.focus(); }
      else if (!e.shiftKey && document.activeElement === z) { e.preventDefault(); a.focus(); }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  const go = (v) => { onClose(false); onNavigate(v); };

  return ReactDOM.createPortal(
    <div ref={ref} id="sh-site-menu" className="sh-menu" data-ground="merino" role="dialog" aria-modal="true" aria-label={t("Menu")}>
      <div className="sh-container sh-menu-top">
        <a className="sh-hdr-logo" href={kitHref(locale, "home")} onClick={(e) => { e.preventDefault(); go("home"); }}><Logo mark="wordmark" tone="dark" height={22} assetBase="../../assets" /></a>
        <IconButton label={t("Close menu")} onClick={() => onClose(true)} data-autofocus=""><Icon name="x" size={22} /></IconButton>
      </div>
      <div className="sh-container sh-menu-body">
        <nav aria-label={t("Main")}>
          <ul className="sh-menu-nav">
            {NAV.map((n) => (
              <li key={n.view}>
                <a href={kitHref(locale, n.view)} aria-current={view === n.view ? "page" : undefined} onClick={(e) => { e.preventDefault(); go(n.view); }}>{t(n.label)}</a>
              </li>
            ))}
          </ul>
        </nav>
        <Button size="lg" fullWidth onClick={() => { onClose(false); onBook("menu"); }}>{t("Book a Consultation")}</Button>
        <div className="sh-menu-contact">
          {contact.phones.map((p) => <a key={p} className="shantara-dir-ltr" href={telHref(p)} style={{ fontVariantNumeric: "tabular-nums" }}>{p}</a>)}
          <a className="shantara-dir-ltr" href={"mailto:" + contact.email}>{contact.email}</a>
        </div>
      </div>
    </div>,
    document.body
  );
}

function SiteHeader({ view, onNavigate, locale = "en", onLocaleChange }) {
  const { t } = window.ShantaraI18n.useLocale();
  const { Button, IconButton, Icon, Logo, LanguageSelector } = window.ShantaraDesignSystem_45bbe4;
  ensureChromeCss();
  const [scrolled, setScrolled] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const menuBtn = React.useRef(null);

  React.useEffect(() => {
    const el = document.getElementById("kit-scroll");
    const read = () => setScrolled((el ? el.scrollTop : 0) > 8 || window.scrollY > 8);
    read();
    if (el) el.addEventListener("scroll", read, { passive: true });
    window.addEventListener("scroll", read, { passive: true });
    return () => {
      if (el) el.removeEventListener("scroll", read);
      window.removeEventListener("scroll", read);
    };
  }, [view]);

  /* Lock the page scroller while the menu sheet is open; close it if the viewport grows
     past the breakpoint where the full navigation shows. */
  React.useEffect(() => {
    if (!open) return undefined;
    const el = document.getElementById("kit-scroll");
    const prev = el ? el.style.overflow : "";
    if (el) el.style.overflow = "hidden";
    const mq = window.matchMedia("(min-width: 1000px)");
    const onMq = () => { if (mq.matches) setOpen(false); };
    mq.addEventListener ? mq.addEventListener("change", onMq) : mq.addListener(onMq);
    return () => {
      if (el) el.style.overflow = prev;
      mq.removeEventListener ? mq.removeEventListener("change", onMq) : mq.removeListener(onMq);
    };
  }, [open]);

  const closeMenu = (returnFocus) => {
    setOpen(false);
    if (returnFocus && menuBtn.current) setTimeout(() => { const b = menuBtn.current && menuBtn.current.querySelector("button"); if (b) b.focus(); }, 0);
  };

  const book = (where) => {
    if (window.ShantaraLocales) window.ShantaraLocales.track("consultation_cta_click", { page_type: view, content_id: view, content_name: view, cta_location: where }, { locale });
    onNavigate("booking");
  };

  const overPhoto = PHOTO_HERO_VIEWS.includes(view) && !scrolled;

  return (
    <header className="sh-hdr" data-scrolled={String(scrolled)} data-ground={overPhoto ? "photo" : undefined}>
      <div className="sh-container sh-hdr-row">
        <a className="sh-hdr-logo" href={kitHref(locale, "home")} onClick={(e) => { e.preventDefault(); onNavigate("home"); }}>
          <Logo mark="wordmark" tone={overPhoto ? "cream" : "dark"} height={22} assetBase="../../assets" />
        </a>
        <nav className="sh-hdr-nav" aria-label={t("Main")}>
          {NAV.map((n) => (
            <a key={n.view} href={kitHref(locale, n.view)} onClick={(e) => { e.preventDefault(); onNavigate(n.view); }} aria-current={view === n.view ? "page" : undefined}>{t(n.label)}</a>
          ))}
        </nav>
        <div className="sh-hdr-end">
          {LanguageSelector ? <LanguageSelector locale={locale} rest={window.ShantaraLocales ? window.ShantaraLocales.kitViewPath(view) : ""} onSelect={onLocaleChange} /> : null}
          <span className="sh-hdr-book-full"><Button size="md" onClick={() => book("header")}>{t("Book a Consultation")}</Button></span>
          <span className="sh-hdr-book-short"><Button size="md" onClick={() => book("header")}>{t("Book")}</Button></span>
          <span className="sh-hdr-menu" ref={menuBtn}>
            <IconButton label={t("Open menu")} aria-expanded={open} aria-controls="sh-site-menu" aria-haspopup="dialog" onClick={() => setOpen(true)}><Icon name="menu" size={22} /></IconButton>
          </span>
        </div>
      </div>
      {open ? <MenuSheet view={view} locale={locale} onNavigate={onNavigate} onClose={closeMenu} onBook={book} /> : null}
    </header>
  );
}

function SiteFooter({ onNavigate, locale = "en" }) {
  const { t } = window.ShantaraI18n.useLocale();
  const { Logo, PatternPanel } = window.ShantaraDesignSystem_45bbe4;
  ensureChromeCss();
  const [textSize, setTextSize] = React.useState(() => readStoredTextSize());
  React.useEffect(() => { applyTextSize(textSize); }, [textSize]);
  const contact = siteContact();
  const cols = [
    { title: "Explore", links: [
      { label: "Conditions", view: "conditions" },
      { label: "Programmes", view: "programme" },
      { label: "Experience", view: "experience" },
      { label: "Insights", view: "journal" },
    ] },
    { title: "About", links: [
      { label: "Our story", view: "about" },
      { label: "Our approach", view: "about" },
      { label: "Meet our doctors", view: "about" },
      { label: "Medical Editorial Policy", view: "about" },
    ] },
    { title: "Visit", links: [
      { label: "Contact", view: "contact" },
      { label: "Rooms & tariffs", view: "tariffs" },
      { label: "Book a Consultation", view: "booking" },
      { label: "Cancellation policy", view: "contact" },
    ] },
  ];
  return (
    <footer className="sh-foot">
      <PatternPanel tone="pine" edge="end" band="30%" scale="15cqw" data-ground="pine">
        <div className="sh-container sh-foot-main">
          <div className="sh-foot-grid">
            <div className="sh-foot-brand">
              <Logo mark="full" tone="cream" height={44} assetBase="../../assets" />
              <p className="sh-foot-blurb">{t("A naturopathy retreat on four hilltop acres above the Chennamangallur valley, Kozhikode. An evolution of Hygiene Nature Cure Hospital, caring for guests since 2000.")}</p>
              <div className="sh-foot-contact">
                <a className="shantara-dir-ltr" href={"mailto:" + contact.email}>{contact.email}</a>
                {contact.phones.map((p) => <a key={p} className="shantara-dir-ltr" href={telHref(p)} style={{ fontVariantNumeric: "tabular-nums" }}>{p}</a>)}
              </div>
            </div>
            {cols.map((c) => (
              <div key={c.title} className="sh-foot-col">
                <p className="shantara-eyebrow">{t(c.title)}</p>
                {c.links.map((l) => (
                  <a key={l.label} href={kitHref(locale, l.view)} onClick={(e) => { e.preventDefault(); if (l.view && onNavigate) onNavigate(l.view); }}>{t(l.label)}</a>
                ))}
              </div>
            ))}
          </div>
        </div>
        <div className="sh-container">
          <div className="sh-foot-bar">
            <span>{t("© 2026 Shantara Naturopathy")}</span>
            <span>{t("Privacy")}</span>
            <span>{t("Terms")}</span>
            <span>{t("Kozhikode · Kerala · India")}</span>
            <div className="sh-foot-size" role="group" aria-label={t("Text size")}>
              <span>{t("Text size")}</span>
              {TEXT_SIZES.map((s) => (
                <button key={s.id} type="button" aria-pressed={textSize === s.id} onClick={() => setTextSize(applyTextSize(s.id))}>{t(s.label)}</button>
              ))}
            </div>
          </div>
        </div>
      </PatternPanel>
    </footer>
  );
}

Object.assign(window, { SiteHeader, SiteFooter, applyTextSize, readStoredTextSize });
