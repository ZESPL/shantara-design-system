/* @ds-bundle: {"format":4,"namespace":"ShantaraDesignSystem_45bbe4","components":[{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"Divider","sourcePath":"components/core/Divider.jsx"},{"name":"Icon","sourcePath":"components/core/Icon.jsx"},{"name":"IconButton","sourcePath":"components/core/IconButton.jsx"},{"name":"Logo","sourcePath":"components/core/Logo.jsx"},{"name":"PatternPanel","sourcePath":"components/core/PatternPanel.jsx"},{"name":"Tag","sourcePath":"components/core/Tag.jsx"},{"name":"Dialog","sourcePath":"components/feedback/Dialog.jsx"},{"name":"Spinner","sourcePath":"components/feedback/Spinner.jsx"},{"name":"Toast","sourcePath":"components/feedback/Toast.jsx"},{"name":"Tooltip","sourcePath":"components/feedback/Tooltip.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Radio","sourcePath":"components/forms/Radio.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Switch","sourcePath":"components/forms/Switch.jsx"},{"name":"Textarea","sourcePath":"components/forms/Textarea.jsx"},{"name":"Accordion","sourcePath":"components/navigation/Accordion.jsx"},{"name":"Breadcrumbs","sourcePath":"components/navigation/Breadcrumbs.jsx"},{"name":"Tabs","sourcePath":"components/navigation/Tabs.jsx"}],"sourceHashes":{"components/core/Badge.jsx":"fb19c27b963b","components/core/Button.jsx":"fadc38647b84","components/core/Card.jsx":"83bd31a530b9","components/core/Divider.jsx":"a024dde18521","components/core/Icon.jsx":"96f71088e126","components/core/IconButton.jsx":"3b4f9946cca0","components/core/Logo.jsx":"1b29cec98534","components/core/PatternPanel.jsx":"49039059e82a","components/core/Tag.jsx":"bf30857d1572","components/feedback/Dialog.jsx":"c766c86fc48e","components/feedback/Spinner.jsx":"eea928aeb58d","components/feedback/Toast.jsx":"f9ba0b4bf6a2","components/feedback/Tooltip.jsx":"87b2122dbf40","components/forms/Checkbox.jsx":"2cc18599252e","components/forms/Input.jsx":"680b4cb7f0d7","components/forms/Radio.jsx":"f40331f08715","components/forms/Select.jsx":"1558fc066750","components/forms/Switch.jsx":"68ad689b1b4c","components/forms/Textarea.jsx":"431669dfdbed","components/navigation/Accordion.jsx":"e3d6e9b2ff9e","components/navigation/Breadcrumbs.jsx":"06a3073446f3","components/navigation/Tabs.jsx":"41a537e9121e","ui_kits/app/Shell.js":"1ac0f8b7e277","ui_kits/app/TherapySheet.js":"15a04b9b93ef","ui_kits/app/TodayScreen.js":"1175ec77a03c","ui_kits/website/EnquiryScreen.js":"9b66d9bcfdd1","ui_kits/website/HomeScreen.js":"e91d0b72a08c","ui_kits/website/JournalScreen.js":"681c24cf919e","ui_kits/website/Photo.js":"8f87718ed7ee","ui_kits/website/ProgrammeScreen.js":"6c6a0184b971","ui_kits/website/SiteChrome.js":"55ecf2db6cc1"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.ShantaraDesignSystem_45bbe4 = window.ShantaraDesignSystem_45bbe4 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const CSS = `
.sh-badge{display:inline-flex;align-items:center;gap:var(--space-2);height:22px;padding:0 var(--space-4);border-radius:var(--radius-pill);font-family:var(--font-body);font-size:var(--text-3xs);font-weight:var(--weight-semibold);letter-spacing:var(--tracking-eyebrow);text-transform:uppercase;background:var(--surface-raised);color:var(--text-secondary);white-space:nowrap}
.sh-badge[data-tone="brand"]{background:var(--surface-brand);color:var(--text-on-brand)}
.sh-badge[data-tone="accent"]{background:var(--surface-accent);color:var(--text-on-accent)}
.sh-badge[data-tone="success"]{background:var(--status-success-soft);color:var(--status-success)}
.sh-badge[data-tone="info"]{background:var(--status-info-soft);color:var(--color-pine-tree)}
.sh-badge[data-tone="warning"]{background:var(--status-warning-soft);color:var(--status-warning)}
.sh-badge[data-tone="danger"]{background:var(--status-danger-soft);color:var(--status-danger)}
.sh-badge[data-tone="outline"]{background:transparent;box-shadow:inset 0 0 0 var(--border-width) var(--border-control);color:var(--text-secondary)}
`;
function ensure() {
  if (typeof document === "undefined" || document.getElementById("sh-badge-css")) return;
  const el = document.createElement("style");
  el.id = "sh-badge-css";
  el.textContent = CSS;
  document.head.appendChild(el);
}
function Badge({
  tone = "neutral",
  icon,
  children,
  ...rest
}) {
  ensure();
  return /*#__PURE__*/React.createElement("span", _extends({
    className: "sh-badge",
    "data-tone": tone
  }, rest), icon, children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const CSS = `
.sh-btn{--_bg:var(--surface-brand);--_fg:var(--text-on-brand);--_bd:transparent;display:inline-flex;align-items:center;justify-content:center;gap:var(--space-3);font-family:var(--font-body);font-weight:var(--weight-medium);letter-spacing:var(--tracking-wide);text-decoration:none;white-space:nowrap;border:var(--border-width) solid var(--_bd);border-radius:var(--radius-control);background:var(--_bg);color:var(--_fg);cursor:pointer;transition:var(--transition-control)}
.sh-btn:focus-visible{outline:none;box-shadow:var(--ring-focus)}
.sh-btn:active:not(:disabled){transform:scale(var(--press-scale))}
.sh-btn:disabled{opacity:.42;cursor:not-allowed}
.sh-btn[data-size="sm"]{height:var(--control-sm);padding:0 var(--space-5);font-size:var(--text-xs)}
.sh-btn[data-size="md"]{height:var(--control-md);padding:0 var(--space-6);font-size:var(--text-sm)}
.sh-btn[data-size="lg"]{height:var(--control-lg);padding:0 var(--space-8);font-size:var(--text-base)}
.sh-btn[data-full="true"]{width:100%}
.sh-btn[data-variant="primary"]:hover:not(:disabled){--_bg:var(--color-himalaya-800)}
.sh-btn[data-variant="accent"]{--_bg:var(--surface-accent);--_fg:var(--text-on-accent);--_bd:var(--color-gold-800)}
.sh-btn[data-variant="accent"]:hover:not(:disabled){--_bg:var(--color-gold-200)}
.sh-btn[data-variant="secondary"]{--_bg:transparent;--_fg:var(--text-primary);--_bd:var(--border-control)}
.sh-btn[data-variant="secondary"]:hover:not(:disabled){--_bg:var(--surface-raised);--_bd:var(--border-strong)}
.sh-btn[data-variant="ghost"]{--_bg:transparent;--_fg:var(--text-brand)}
.sh-btn[data-variant="ghost"]:hover:not(:disabled){--_bg:var(--surface-brand-soft)}
.sh-btn[data-variant="inverse"]{--_bg:var(--color-merino);--_fg:var(--color-pine-tree)}
.sh-btn[data-variant="inverse"]:hover:not(:disabled){--_bg:var(--color-white)}
.sh-btn[data-variant="inverse"]:focus-visible{box-shadow:var(--ring-focus-inverse)}
`;
function ensure() {
  if (typeof document === "undefined" || document.getElementById("sh-btn-css")) return;
  const el = document.createElement("style");
  el.id = "sh-btn-css";
  el.textContent = CSS;
  document.head.appendChild(el);
}
function Button({
  variant = "primary",
  size = "md",
  fullWidth = false,
  startIcon,
  endIcon,
  as,
  children,
  style,
  ...rest
}) {
  ensure();
  const Tag = as || (rest.href ? "a" : "button");
  return /*#__PURE__*/React.createElement(Tag, _extends({
    className: "sh-btn",
    "data-variant": variant,
    "data-size": size,
    "data-full": String(fullWidth),
    style: style
  }, rest), startIcon, children ? /*#__PURE__*/React.createElement("span", null, children) : null, endIcon);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const CSS = `
.sh-card{position:relative;display:flex;flex-direction:column;background:var(--surface-card);border-radius:var(--radius-card);border:var(--border-width) solid var(--border-subtle);box-shadow:var(--shadow-sm);overflow:hidden;transition:box-shadow var(--duration-base) var(--ease-out), transform var(--duration-base) var(--ease-out)}
.sh-card[data-tone="raised"]{background:var(--surface-raised);border-color:transparent;box-shadow:none}
.sh-card[data-tone="sunken"]{background:var(--surface-sunken);border-color:transparent;box-shadow:none}
.sh-card[data-tone="brand"]{background:var(--surface-brand);border-color:transparent;color:var(--text-on-brand)}
.sh-card[data-tone="inverse"]{background:var(--surface-inverse);border-color:transparent;color:var(--text-on-inverse)}
.sh-card[data-tone="outline"]{background:transparent;border-color:var(--border-control);box-shadow:none}
.sh-card[data-pad="sm"] .sh-card-body{padding:var(--space-5)}
.sh-card[data-pad="md"] .sh-card-body{padding:var(--space-7)}
.sh-card[data-pad="lg"] .sh-card-body{padding:var(--space-9)}
.sh-card[data-pad="none"] .sh-card-body{padding:0}
.sh-card-body{display:flex;flex-direction:column;gap:var(--space-3)}
.sh-card-media{display:block;width:100%;object-fit:cover;background:var(--surface-sunken)}
.sh-card[data-interactive="true"]{cursor:pointer}
.sh-card[data-interactive="true"]:hover{box-shadow:var(--shadow-lg);transform:translateY(-2px)}
.sh-card[data-interactive="true"]:active{transform:translateY(0)}
.sh-card[data-interactive="true"]:focus-visible{outline:none;box-shadow:var(--ring-focus)}
`;
function ensure() {
  if (typeof document === "undefined" || document.getElementById("sh-card-css")) return;
  const el = document.createElement("style");
  el.id = "sh-card-css";
  el.textContent = CSS;
  document.head.appendChild(el);
}

/* An interactive Card is operable by keyboard as well as pointer (2.1.1): it takes a
   button role, enters the tab order, and responds to Enter and Space. Pass `mediaAlt`
   whenever the image carries meaning; it stays alt="" when purely decorative. */
function Card({
  tone = "default",
  padding = "md",
  media,
  mediaAlt = "",
  mediaHeight = 180,
  interactive = false,
  footer,
  children,
  onClick,
  onKeyDown,
  ...rest
}) {
  ensure();
  const activate = interactive && onClick ? e => {
    if (onKeyDown) onKeyDown(e);
    if (e.defaultPrevented) return;
    if (e.key === "Enter" || e.key === " " || e.key === "Spacebar") {
      e.preventDefault();
      onClick(e);
    }
  } : onKeyDown;
  return /*#__PURE__*/React.createElement("div", _extends({
    className: "sh-card",
    "data-tone": tone,
    "data-pad": padding,
    "data-interactive": String(interactive),
    onClick: onClick,
    onKeyDown: activate,
    role: interactive && onClick ? "button" : undefined,
    tabIndex: interactive && onClick ? 0 : undefined
  }, rest), media ? /*#__PURE__*/React.createElement("img", {
    className: "sh-card-media",
    src: media,
    alt: mediaAlt,
    style: {
      height: typeof mediaHeight === "number" ? mediaHeight + "px" : mediaHeight
    }
  }) : null, /*#__PURE__*/React.createElement("div", {
    className: "sh-card-body"
  }, children), footer);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/Divider.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Divider({
  tone = "subtle",
  spacing = "var(--space-7)",
  label,
  orientation = "horizontal",
  style,
  ...rest
}) {
  const color = tone === "strong" ? "var(--border-strong)" : tone === "default" ? "var(--border-default)" : "var(--border-subtle)";
  if (orientation === "vertical") {
    return /*#__PURE__*/React.createElement("span", _extends({
      "aria-hidden": "true",
      style: {
        display: "inline-block",
        width: "1px",
        alignSelf: "stretch",
        background: color,
        margin: `0 ${spacing}`,
        ...style
      }
    }, rest));
  }
  if (label) {
    return /*#__PURE__*/React.createElement("div", _extends({
      style: {
        display: "flex",
        alignItems: "center",
        gap: "var(--space-5)",
        margin: `${spacing} 0`,
        ...style
      }
    }, rest), /*#__PURE__*/React.createElement("span", {
      style: {
        flex: 1,
        height: "1px",
        background: color
      }
    }), /*#__PURE__*/React.createElement("span", {
      className: "shantara-eyebrow"
    }, label), /*#__PURE__*/React.createElement("span", {
      style: {
        flex: 1,
        height: "1px",
        background: color
      }
    }));
  }
  return /*#__PURE__*/React.createElement("hr", _extends({
    style: {
      border: 0,
      height: "1px",
      background: color,
      margin: `${spacing} 0`,
      ...style
    }
  }, rest));
}
Object.assign(__ds_scope, { Divider });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Divider.jsx", error: String((e && e.message) || e) }); }

// components/core/Icon.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const BASE = "https://unpkg.com/lucide-static@0.544.0/icons/";

/* Lucide is a documented substitution: the Shantara brand package ships no icon set.
   Glyphs are painted as masks so they inherit currentColor and the 1.5px brand stroke feel. */
function Icon({
  name,
  size = 20,
  strokeWidth,
  color = "currentColor",
  style,
  ...rest
}) {
  const px = typeof size === "number" ? size + "px" : size;
  return /*#__PURE__*/React.createElement("span", _extends({
    "aria-hidden": "true",
    "data-icon": name,
    style: {
      display: "inline-block",
      width: px,
      height: px,
      flex: "0 0 auto",
      background: color,
      WebkitMaskImage: `url(${BASE}${name}.svg)`,
      maskImage: `url(${BASE}${name}.svg)`,
      WebkitMaskRepeat: "no-repeat",
      maskRepeat: "no-repeat",
      WebkitMaskPosition: "center",
      maskPosition: "center",
      WebkitMaskSize: "contain",
      maskSize: "contain",
      ...style
    }
  }, rest));
}
Object.assign(__ds_scope, { Icon });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Icon.jsx", error: String((e && e.message) || e) }); }

// components/core/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const CSS = `
.sh-ibtn{display:inline-grid;place-items:center;border-radius:var(--radius-pill);border:var(--border-width) solid transparent;background:transparent;color:var(--text-primary);cursor:pointer;transition:var(--transition-control)}
.sh-ibtn:hover:not(:disabled){background:var(--surface-raised)}
.sh-ibtn:active:not(:disabled){transform:scale(var(--press-scale))}
.sh-ibtn:focus-visible{outline:none;box-shadow:var(--ring-focus)}
.sh-ibtn:disabled{opacity:.42;cursor:not-allowed}
.sh-ibtn[data-size="sm"]{width:var(--control-sm);height:var(--control-sm)}
.sh-ibtn[data-size="md"]{width:var(--control-md);height:var(--control-md)}
.sh-ibtn[data-size="lg"]{width:var(--control-lg);height:var(--control-lg)}
.sh-ibtn[data-variant="solid"]{background:var(--surface-brand);color:var(--text-on-brand)}
.sh-ibtn[data-variant="solid"]:hover:not(:disabled){background:var(--color-himalaya-800)}
.sh-ibtn[data-variant="outline"]{border-color:var(--border-control)}
.sh-ibtn[data-variant="glass"]{background:var(--glass-fill);backdrop-filter:var(--blur-glass);-webkit-backdrop-filter:var(--blur-glass)}
.sh-ibtn[data-variant="inverse"]{color:var(--color-merino)}
.sh-ibtn[data-variant="inverse"]:hover:not(:disabled){background:color-mix(in srgb, var(--color-merino) 18%, transparent)}
`;
function ensure() {
  if (typeof document === "undefined" || document.getElementById("sh-ibtn-css")) return;
  const el = document.createElement("style");
  el.id = "sh-ibtn-css";
  el.textContent = CSS;
  document.head.appendChild(el);
}
function IconButton({
  variant = "ghost",
  size = "md",
  label,
  children,
  ...rest
}) {
  ensure();
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    className: "sh-ibtn",
    "data-variant": variant,
    "data-size": size,
    "aria-label": label,
    title: label
  }, rest), children);
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/core/Logo.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Resolves the brand asset folder from wherever _ds_bundle.js was loaded from,
   so <Logo /> works in cards, kits and consuming projects without configuration. */
function resolveBase() {
  if (typeof document === "undefined") return "assets";
  const s = document.querySelector('script[src$="_ds_bundle.js"]');
  if (s) return s.getAttribute("src").replace(/_ds_bundle\.js$/, "assets");
  return "assets";
}
const FILE = {
  full: "logo",
  icon: "icon",
  wordmark: "wordmark"
};
function Logo({
  mark = "full",
  tone = "dark",
  height,
  assetBase,
  style,
  ...rest
}) {
  const base = assetBase || resolveBase();
  const h = height || (mark === "icon" ? 40 : mark === "wordmark" ? 22 : 56);
  return /*#__PURE__*/React.createElement("img", _extends({
    src: `${base}/${FILE[mark] || "logo"}-${tone}.svg`,
    alt: "Shantara",
    style: {
      height: typeof h === "number" ? h + "px" : h,
      width: "auto",
      display: "block",
      ...style
    }
  }, rest));
}
Object.assign(__ds_scope, { Logo });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Logo.jsx", error: String((e && e.message) || e) }); }

// components/core/PatternPanel.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function resolveBase() {
  if (typeof document === "undefined") return "assets";
  const s = document.querySelector('script[src$="_ds_bundle.js"]');
  if (s) return s.getAttribute("src").replace(/_ds_bundle\.js$/, "assets");
  return "assets";
}
const BG = {
  merino: "var(--color-merino)",
  pearl: "var(--color-pearl-bush)",
  sand: "var(--color-sand)",
  olive: "var(--color-himalaya)",
  pine: "var(--color-pine-tree)",
  gold: "var(--color-gold-crayola)",
  none: "transparent"
};

/* The rosette never washes a whole surface — it is a BAND flush to one edge,
   bleeding off on three sides, ruled with a hairline on its inner side, with the
   content kept clear of it. `scale` sets one square cell edge (applied to both
   axes, so the geometry can never be stretched) and is PROPORTIONAL to the band:
   half the band's width by default, so two rosettes read across it. */
function PatternPanel({
  tone = "merino",
  edge = "right",
  band,
  scale,
  intensity,
  ink,
  rule,
  reserve = true,
  radius = "0px",
  children,
  style,
  ...rest
}) {
  const base = resolveBase();
  const vertical = edge === "right" || edge === "left";
  const dark = tone === "olive" || tone === "pine" || tone === "none";
  const size = band || (vertical ? "var(--pattern-band-md)" : "var(--pattern-strip)");
  /* cell = band / 2. Only computable when the band is an absolute length; a
     percentage band must pass `scale` itself (see PatternPanel.prompt.md). */
  const cell = scale || (/^[\d.]+(px|rem|em|pt|in|mm|cm)$/.test(String(size).trim()) ? `calc(${size} / 2)` : "var(--pattern-scale-2xs)");
  const op = intensity != null ? intensity : tone === "none" ? 0.5 : dark ? 0.4 : 0.9;
  const tint = ink || (dark ? "var(--pattern-ink-dark)" : "var(--pattern-ink-light)");
  const line = rule || (dark ? "var(--pattern-rule-dark)" : "var(--pattern-rule-light)");
  const pad = reserve ? {
    right: {
      paddingRight: size
    },
    left: {
      paddingLeft: size
    },
    top: {
      paddingTop: size
    },
    bottom: {
      paddingBottom: size
    }
  }[edge] : null;
  const ruleSide = {
    right: "borderLeft",
    left: "borderRight",
    top: "borderBottom",
    bottom: "borderTop"
  }[edge];
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      position: "relative",
      isolation: "isolate",
      background: BG[tone] || tone,
      color: dark && tone !== "none" ? "var(--text-on-inverse)" : "var(--text-primary)",
      borderRadius: radius,
      overflow: "hidden",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      position: "absolute",
      boxSizing: "border-box",
      top: edge === "bottom" ? "auto" : 0,
      bottom: edge === "top" ? "auto" : 0,
      left: edge === "right" ? "auto" : 0,
      right: edge === "left" ? "auto" : 0,
      width: vertical ? size : "auto",
      height: vertical ? "auto" : size,
      [ruleSide]: `1px solid ${line}`,
      pointerEvents: "none",
      zIndex: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      inset: 0,
      backgroundColor: tint,
      WebkitMaskImage: `url(${base}/pattern-unit.png)`,
      maskImage: `url(${base}/pattern-unit.png)`,
      WebkitMaskRepeat: "repeat",
      maskRepeat: "repeat",
      WebkitMaskSize: `${cell} ${cell}`,
      maskSize: `${cell} ${cell}`,
      opacity: op
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      zIndex: 1,
      ...pad
    }
  }, children));
}
Object.assign(__ds_scope, { PatternPanel });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/PatternPanel.jsx", error: String((e && e.message) || e) }); }

// components/core/Tag.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const CSS = `
.sh-tag{display:inline-flex;align-items:center;gap:var(--space-3);height:32px;padding:0 var(--space-5);border-radius:var(--radius-pill);border:var(--border-width) solid var(--border-control);background:transparent;color:var(--text-primary);font-family:var(--font-body);font-size:var(--text-xs);font-weight:var(--weight-regular);cursor:pointer;transition:var(--transition-control)}
.sh-tag:hover{background:var(--surface-raised)}
.sh-tag:focus-visible{outline:none;box-shadow:var(--ring-focus)}
.sh-tag[data-selected="true"]{background:var(--surface-brand);border-color:var(--surface-brand);color:var(--text-on-brand)}
.sh-tag[data-selected="true"]:hover{background:var(--color-himalaya-800)}
.sh-tag[data-static="true"]{cursor:default}
.sh-tag-x{display:inline-grid;place-items:center;width:24px;height:24px;margin:0 -4px 0 -2px;border:0;border-radius:var(--radius-pill);background:transparent;color:inherit;opacity:.6;cursor:pointer;padding:0;line-height:1}
.sh-tag-x:focus-visible{outline:none;box-shadow:var(--ring-focus);opacity:1}
.sh-tag-x:hover{opacity:1}
`;
function ensure() {
  if (typeof document === "undefined" || document.getElementById("sh-tag-css")) return;
  const el = document.createElement("style");
  el.id = "sh-tag-css";
  el.textContent = CSS;
  document.head.appendChild(el);
}
function Tag({
  selected = false,
  onRemove,
  icon,
  children,
  ...rest
}) {
  ensure();
  const interactive = Boolean(rest.onClick || onRemove);
  return /*#__PURE__*/React.createElement("span", _extends({
    className: "sh-tag",
    "data-selected": String(selected),
    "data-static": String(!interactive),
    role: rest.onClick ? "button" : undefined,
    tabIndex: rest.onClick ? 0 : undefined
  }, rest), icon, children, onRemove ? /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "sh-tag-x",
    "aria-label": "Remove",
    onClick: e => {
      e.stopPropagation();
      onRemove(e);
    }
  }, "\xD7") : null);
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Tag.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Dialog.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const CSS = `
.sh-dlg-scrim{position:fixed;inset:0;background:var(--surface-overlay);backdrop-filter:blur(3px);display:grid;place-items:center;padding:var(--space-7);z-index:1000;animation:sh-dlg-fade var(--duration-base) var(--ease-out)}
.sh-dlg{position:relative;width:100%;max-width:520px;background:var(--surface-card);border-radius:var(--radius-xl);box-shadow:var(--shadow-xl);padding:var(--space-9);font-family:var(--font-body);animation:sh-dlg-rise var(--duration-slow) var(--ease-out)}
.sh-dlg[data-size="sm"]{max-width:400px}
.sh-dlg[data-size="lg"]{max-width:720px}
.sh-dlg-title{font:var(--type-h3);margin:0 var(--space-9) var(--space-4) 0}
.sh-dlg-desc{color:var(--text-secondary);font-size:var(--text-sm);line-height:var(--leading-relaxed);margin:0}
.sh-dlg-foot{display:flex;justify-content:flex-end;gap:var(--space-4);margin-top:var(--space-8)}
.sh-dlg-x{position:absolute;top:var(--space-6);right:var(--space-6);width:36px;height:36px;display:grid;place-items:center;border:0;border-radius:var(--radius-pill);background:transparent;color:var(--text-secondary);font-size:18px;cursor:pointer;transition:var(--transition-control)}
.sh-dlg-x:hover{background:var(--surface-raised);color:var(--text-primary)}
@keyframes sh-dlg-fade{from{opacity:0}to{opacity:1}}
@keyframes sh-dlg-rise{from{opacity:0;transform:translateY(12px)}to{opacity:1;transform:none}}
`;
function ensure() {
  if (typeof document === "undefined" || document.getElementById("sh-dlg-css")) return;
  const el = document.createElement("style");
  el.id = "sh-dlg-css";
  el.textContent = CSS;
  document.head.appendChild(el);
}
let dlgSeq = 0;
const FOCUSABLE = 'a[href],button:not([disabled]),input:not([disabled]),select:not([disabled]),textarea:not([disabled]),[tabindex]:not([tabindex="-1"])';
function Dialog({
  open = false,
  title,
  description,
  size = "md",
  onClose,
  footer,
  children,
  ...rest
}) {
  ensure();
  const box = React.useRef(null);
  const returnTo = React.useRef(null);
  const uid = React.useMemo(() => "sh-dlg-" + ++dlgSeq, []);
  React.useEffect(() => {
    if (!open) return;
    returnTo.current = document.activeElement;
    const node = box.current;
    if (node) {
      const first = node.querySelector(FOCUSABLE);
      (first || node).focus({
        preventScroll: true
      });
    }
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = e => {
      if (e.key === "Escape" && onClose) {
        e.stopPropagation();
        onClose();
        return;
      }
      if (e.key !== "Tab" || !node) return;
      const items = Array.from(node.querySelectorAll(FOCUSABLE)).filter(el => el.offsetParent !== null || el === node);
      if (!items.length) return;
      const first = items[0],
        last = items[items.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };
    document.addEventListener("keydown", onKey, true);
    return () => {
      document.removeEventListener("keydown", onKey, true);
      document.body.style.overflow = prevOverflow;
      const back = returnTo.current;
      if (back && back.focus) back.focus({
        preventScroll: true
      });
    };
  }, [open, onClose]);
  if (!open) return null;
  return /*#__PURE__*/React.createElement("div", {
    className: "sh-dlg-scrim",
    onClick: onClose ? e => {
      if (e.target === e.currentTarget) onClose();
    } : undefined
  }, /*#__PURE__*/React.createElement("div", _extends({
    ref: box,
    className: "sh-dlg",
    role: "dialog",
    "aria-modal": "true",
    tabIndex: -1,
    "aria-labelledby": title ? uid + "-t" : undefined,
    "aria-describedby": description ? uid + "-d" : undefined,
    "data-size": size
  }, rest), onClose ? /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "sh-dlg-x",
    "aria-label": "Close",
    onClick: onClose
  }, "\xD7") : null, title ? /*#__PURE__*/React.createElement("h3", {
    className: "sh-dlg-title",
    id: uid + "-t"
  }, title) : null, description ? /*#__PURE__*/React.createElement("p", {
    className: "sh-dlg-desc",
    id: uid + "-d"
  }, description) : null, children, footer ? /*#__PURE__*/React.createElement("div", {
    className: "sh-dlg-foot"
  }, footer) : null));
}
Object.assign(__ds_scope, { Dialog });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Dialog.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Spinner.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const CSS = `
@keyframes sh-breathe{0%,100%{transform:scale(0.82);opacity:.45}50%{transform:scale(1);opacity:1}}
.sh-spinner{display:inline-grid;place-items:center}
.sh-spinner span{display:block;border-radius:var(--radius-pill);background:currentColor;animation:sh-breathe var(--duration-ambient) var(--ease-breath) infinite}
.sh-spinner-row{display:inline-flex;align-items:center;gap:0.4em}
.sh-spinner-row span:nth-child(2){animation-delay:180ms}
.sh-spinner-row span:nth-child(3){animation-delay:360ms}
`;
function ensure() {
  if (typeof document === "undefined" || document.getElementById("sh-spinner-css")) return;
  const el = document.createElement("style");
  el.id = "sh-spinner-css";
  el.textContent = CSS;
  document.head.appendChild(el);
}
function Spinner({
  size = 8,
  color = "var(--text-brand)",
  label = "Loading",
  style,
  ...rest
}) {
  ensure();
  const px = size + "px";
  return /*#__PURE__*/React.createElement("span", _extends({
    className: "sh-spinner",
    role: "status",
    "aria-label": label,
    style: {
      color,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    className: "sh-spinner-row",
    style: {
      fontSize: px
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: px,
      height: px
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      width: px,
      height: px
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      width: px,
      height: px
    }
  })));
}
Object.assign(__ds_scope, { Spinner });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Spinner.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Toast.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const CSS = `
.sh-toast{display:flex;align-items:flex-start;gap:var(--space-4);min-width:300px;max-width:420px;padding:var(--space-5) var(--space-6);background:var(--surface-inverse);color:var(--text-on-inverse);border-radius:var(--radius-md);box-shadow:var(--shadow-lg);font-family:var(--font-body);font-size:var(--text-sm);animation:sh-toast-in var(--duration-slow) var(--ease-out)}
.sh-toast[data-tone="success"]{background:var(--color-himalaya)}
.sh-toast[data-tone="warning"]{background:var(--color-gold-crayola);color:var(--text-on-accent)}
.sh-toast[data-tone="danger"]{background:var(--status-danger);color:var(--color-merino)}
.sh-toast-body{flex:1}
.sh-toast-title{font-weight:var(--weight-medium)}
.sh-toast-msg{opacity:.82;margin-top:2px}
.sh-toast-x{border:0;background:transparent;color:inherit;opacity:.6;font-size:16px;cursor:pointer;padding:0 2px}
.sh-toast-x:hover{opacity:1}
@keyframes sh-toast-in{from{opacity:0;transform:translateY(8px)}to{opacity:1;transform:none}}
.sh-toast-region{position:fixed;bottom:var(--space-8);left:50%;transform:translateX(-50%);display:flex;flex-direction:column;gap:var(--space-4);z-index:1100}
`;
function ensure() {
  if (typeof document === "undefined" || document.getElementById("sh-toast-css")) return;
  const el = document.createElement("style");
  el.id = "sh-toast-css";
  el.textContent = CSS;
  document.head.appendChild(el);
}
function Toast({
  tone = "neutral",
  title,
  message,
  icon,
  onClose,
  fixed = false,
  style,
  ...rest
}) {
  ensure();
  const node = /*#__PURE__*/React.createElement("div", _extends({
    className: "sh-toast",
    "data-tone": tone,
    role: "status",
    style: style
  }, rest), icon, /*#__PURE__*/React.createElement("div", {
    className: "sh-toast-body"
  }, title ? /*#__PURE__*/React.createElement("div", {
    className: "sh-toast-title"
  }, title) : null, message ? /*#__PURE__*/React.createElement("div", {
    className: "sh-toast-msg"
  }, message) : null), onClose ? /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "sh-toast-x",
    "aria-label": "Dismiss",
    onClick: onClose
  }, "\xD7") : null);
  return fixed ? /*#__PURE__*/React.createElement("div", {
    className: "sh-toast-region"
  }, node) : node;
}
Object.assign(__ds_scope, { Toast });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Toast.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Tooltip.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const CSS = `
.sh-tip{position:relative;display:inline-flex}
.sh-tip-bubble{position:absolute;z-index:900;padding:var(--space-3) var(--space-4);background:var(--surface-inverse);color:var(--text-on-inverse);border-radius:var(--radius-xs);font-family:var(--font-body);font-size:var(--text-2xs);line-height:1.4;white-space:nowrap;pointer-events:none;opacity:0;transition:opacity var(--duration-fast) var(--ease-standard)}
.sh-tip[data-open="true"] .sh-tip-bubble{opacity:1}
.sh-tip-bubble[data-side="top"]{bottom:calc(100% + 6px);left:50%;transform:translateX(-50%)}
.sh-tip-bubble[data-side="bottom"]{top:calc(100% + 6px);left:50%;transform:translateX(-50%)}
.sh-tip-bubble[data-side="left"]{right:calc(100% + 6px);top:50%;transform:translateY(-50%)}
.sh-tip-bubble[data-side="right"]{left:calc(100% + 6px);top:50%;transform:translateY(-50%)}
`;
function ensure() {
  if (typeof document === "undefined" || document.getElementById("sh-tip-css")) return;
  const el = document.createElement("style");
  el.id = "sh-tip-css";
  el.textContent = CSS;
  document.head.appendChild(el);
}
let tipSeq = 0;
function Tooltip({
  label,
  side = "top",
  children,
  style,
  ...rest
}) {
  ensure();
  const [open, setOpen] = React.useState(false);
  const uid = React.useMemo(() => "sh-tip-" + ++tipSeq, []);
  /* 1.4.13 Content on hover or focus: dismissible without moving the pointer. */
  React.useEffect(() => {
    if (!open) return;
    const onKey = e => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);
  return /*#__PURE__*/React.createElement("span", _extends({
    className: "sh-tip",
    "data-open": String(open),
    "aria-describedby": uid,
    onMouseEnter: () => setOpen(true),
    onMouseLeave: () => setOpen(false),
    onFocus: () => setOpen(true),
    onBlur: () => setOpen(false),
    style: style
  }, rest), children, /*#__PURE__*/React.createElement("span", {
    className: "sh-tip-bubble",
    id: uid,
    "data-side": side,
    role: "tooltip"
  }, label));
}
Object.assign(__ds_scope, { Tooltip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Tooltip.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const CSS = `
.sh-check{display:inline-flex;align-items:flex-start;gap:var(--space-4);min-height:24px;font-family:var(--font-body);font-size:var(--text-sm);color:var(--text-primary);cursor:pointer;line-height:1.35}
.sh-check input{position:absolute;opacity:0;width:0;height:0}
.sh-check-box{flex:0 0 auto;display:grid;place-items:center;width:20px;height:20px;margin-top:1px;background:var(--surface-card);border:var(--border-width-strong) solid var(--border-control);border-radius:var(--radius-xs);transition:var(--transition-control)}
.sh-check:hover .sh-check-box{border-color:var(--border-strong)}
.sh-check input:focus-visible + .sh-check-box{box-shadow:var(--ring-focus)}
.sh-check input:checked + .sh-check-box{background:var(--surface-brand);border-color:var(--surface-brand)}
.sh-check input:disabled ~ *{opacity:.45}
.sh-check-tick{width:11px;height:6px;border-left:1.5px solid var(--color-merino);border-bottom:1.5px solid var(--color-merino);transform:translateY(-1px) rotate(-45deg);opacity:0;transition:opacity var(--duration-fast) var(--ease-standard)}
.sh-check input:checked + .sh-check-box .sh-check-tick{opacity:1}
.sh-check-dash{width:10px;height:1.5px;background:var(--color-merino);opacity:0}
.sh-check input:indeterminate + .sh-check-box{background:var(--surface-brand);border-color:var(--surface-brand)}
.sh-check input:indeterminate + .sh-check-box .sh-check-dash{opacity:1}
.sh-check input:indeterminate + .sh-check-box .sh-check-tick{opacity:0}
.sh-check-desc{display:block;color:var(--text-muted);font-size:var(--text-2xs);margin-top:2px}
`;
function ensure() {
  if (typeof document === "undefined" || document.getElementById("sh-check-css")) return;
  const el = document.createElement("style");
  el.id = "sh-check-css";
  el.textContent = CSS;
  document.head.appendChild(el);
}
function Checkbox({
  label,
  description,
  indeterminate = false,
  style,
  ...rest
}) {
  ensure();
  const ref = React.useRef(null);
  React.useEffect(() => {
    if (ref.current) ref.current.indeterminate = indeterminate;
  }, [indeterminate]);
  return /*#__PURE__*/React.createElement("label", {
    className: "sh-check",
    style: style
  }, /*#__PURE__*/React.createElement("input", _extends({
    ref: ref,
    type: "checkbox"
  }, rest)), /*#__PURE__*/React.createElement("span", {
    className: "sh-check-box"
  }, /*#__PURE__*/React.createElement("span", {
    className: "sh-check-tick"
  }), /*#__PURE__*/React.createElement("span", {
    className: "sh-check-dash"
  })), /*#__PURE__*/React.createElement("span", null, label, description ? /*#__PURE__*/React.createElement("span", {
    className: "sh-check-desc"
  }, description) : null));
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const CSS = `
.sh-field{display:flex;flex-direction:column;gap:var(--space-3);font-family:var(--font-body)}
.sh-field-label{font:var(--type-label);letter-spacing:var(--tracking-wide);color:var(--text-secondary)}
.sh-field-req{color:var(--status-danger)}
.sh-field-hint{font-size:var(--text-2xs);color:var(--text-muted)}
.sh-field-error{font-size:var(--text-2xs);color:var(--status-danger)}
.sh-input-wrap{display:flex;align-items:center;gap:var(--space-3);height:var(--control-md);padding:0 var(--space-5);background:var(--surface-card);border:var(--border-width) solid var(--border-control);border-radius:var(--radius-input);color:var(--text-primary);transition:var(--transition-control)}
.sh-input-wrap:hover{border-color:var(--border-strong)}
.sh-input-wrap:focus-within{border-color:var(--border-focus);box-shadow:0 0 0 3px var(--surface-brand-soft)}
.sh-input-wrap[data-invalid="true"]{border-color:var(--status-danger)}
.sh-input-wrap[data-size="lg"]{height:var(--control-lg);padding:0 var(--space-6)}
.sh-input-wrap[data-size="sm"]{height:var(--control-sm)}
.sh-input-wrap[data-disabled="true"]{background:var(--surface-raised);opacity:.6}
.sh-input{flex:1;min-width:0;border:0;background:transparent;color:inherit;font-family:var(--font-body);font-size:var(--text-sm);outline:none}
.sh-input::placeholder{color:var(--text-muted)}
.sh-input-affix{color:var(--text-muted);display:inline-flex;align-items:center;font-size:var(--text-xs)}
`;
function ensure() {
  if (typeof document === "undefined" || document.getElementById("sh-input-css")) return;
  const el = document.createElement("style");
  el.id = "sh-input-css";
  el.textContent = CSS;
  document.head.appendChild(el);
}
function Input({
  label,
  hint,
  error,
  required,
  size = "md",
  startIcon,
  endIcon,
  id,
  style,
  ...rest
}) {
  ensure();
  const fid = id || `sh-in-${label ? label.replace(/\W+/g, "-").toLowerCase() : "field"}`;
  return /*#__PURE__*/React.createElement("div", {
    className: "sh-field",
    style: style
  }, label ? /*#__PURE__*/React.createElement("label", {
    className: "sh-field-label",
    htmlFor: fid
  }, label, required ? /*#__PURE__*/React.createElement("span", {
    className: "sh-field-req"
  }, " *") : null) : null, /*#__PURE__*/React.createElement("span", {
    className: "sh-input-wrap",
    "data-size": size,
    "data-invalid": String(Boolean(error)),
    "data-disabled": String(Boolean(rest.disabled))
  }, startIcon ? /*#__PURE__*/React.createElement("span", {
    className: "sh-input-affix"
  }, startIcon) : null, /*#__PURE__*/React.createElement("input", _extends({
    id: fid,
    className: "sh-input",
    "aria-invalid": error ? "true" : undefined
  }, rest)), endIcon ? /*#__PURE__*/React.createElement("span", {
    className: "sh-input-affix"
  }, endIcon) : null), error ? /*#__PURE__*/React.createElement("span", {
    className: "sh-field-error"
  }, error) : hint ? /*#__PURE__*/React.createElement("span", {
    className: "sh-field-hint"
  }, hint) : null);
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Radio.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const CSS = `
.sh-radio{display:inline-flex;align-items:flex-start;gap:var(--space-4);min-height:24px;font-family:var(--font-body);font-size:var(--text-sm);color:var(--text-primary);cursor:pointer;line-height:1.35}
.sh-radio input{position:absolute;opacity:0;width:0;height:0}
.sh-radio-dot{flex:0 0 auto;display:grid;place-items:center;width:20px;height:20px;margin-top:1px;background:var(--surface-card);border:var(--border-width-strong) solid var(--border-control);border-radius:var(--radius-pill);transition:var(--transition-control)}
.sh-radio:hover .sh-radio-dot{border-color:var(--border-strong)}
.sh-radio input:focus-visible + .sh-radio-dot{box-shadow:var(--ring-focus)}
.sh-radio input:checked + .sh-radio-dot{border-color:var(--surface-brand)}
.sh-radio-dot::after{content:"";width:10px;height:10px;border-radius:var(--radius-pill);background:var(--surface-brand);transform:scale(0);transition:transform var(--duration-fast) var(--ease-out)}
.sh-radio input:checked + .sh-radio-dot::after{transform:scale(1)}
.sh-radio input:disabled ~ *{opacity:.45}
.sh-radio-desc{display:block;color:var(--text-muted);font-size:var(--text-2xs);margin-top:2px}
.sh-radio-card{padding:var(--space-5);border:var(--border-width) solid var(--border-control);border-radius:var(--radius-md);background:var(--surface-card);width:100%}
.sh-radio-card:has(input:checked){border-color:var(--surface-brand);background:var(--surface-brand-soft)}
`;
function ensure() {
  if (typeof document === "undefined" || document.getElementById("sh-radio-css")) return;
  const el = document.createElement("style");
  el.id = "sh-radio-css";
  el.textContent = CSS;
  document.head.appendChild(el);
}
function Radio({
  label,
  description,
  card = false,
  style,
  ...rest
}) {
  ensure();
  return /*#__PURE__*/React.createElement("label", {
    className: "sh-radio" + (card ? " sh-radio-card" : ""),
    style: style
  }, /*#__PURE__*/React.createElement("input", _extends({
    type: "radio"
  }, rest)), /*#__PURE__*/React.createElement("span", {
    className: "sh-radio-dot"
  }), /*#__PURE__*/React.createElement("span", null, label, description ? /*#__PURE__*/React.createElement("span", {
    className: "sh-radio-desc"
  }, description) : null));
}
Object.assign(__ds_scope, { Radio });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Radio.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const CSS = `
.sh-sel-wrap{display:flex;flex-direction:column;gap:var(--space-3);font-family:var(--font-body)}
.sh-sel-box{position:relative;display:flex;align-items:center}
.sh-sel{appearance:none;width:100%;height:var(--control-md);padding:0 var(--space-9) 0 var(--space-5);background:var(--surface-card);border:var(--border-width) solid var(--border-control);border-radius:var(--radius-input);color:var(--text-primary);font-family:var(--font-body);font-size:var(--text-sm);outline:none;cursor:pointer;transition:var(--transition-control)}
.sh-sel:hover{border-color:var(--border-strong)}
.sh-sel:focus{border-color:var(--border-focus);box-shadow:0 0 0 3px var(--surface-brand-soft)}
.sh-sel[data-size="lg"]{height:var(--control-lg)}
.sh-sel[data-size="sm"]{height:var(--control-sm)}
.sh-sel:disabled{background:var(--surface-raised);opacity:.6;cursor:not-allowed}
.sh-sel-caret{position:absolute;right:var(--space-5);width:8px;height:8px;border-right:1.5px solid var(--text-secondary);border-bottom:1.5px solid var(--text-secondary);transform:translateY(-2px) rotate(45deg);pointer-events:none}
`;
function ensure() {
  if (typeof document === "undefined" || document.getElementById("sh-sel-css")) return;
  const el = document.createElement("style");
  el.id = "sh-sel-css";
  el.textContent = CSS;
  document.head.appendChild(el);
}
function Select({
  label,
  hint,
  error,
  required,
  size = "md",
  options = [],
  placeholder,
  children,
  id,
  style,
  ...rest
}) {
  ensure();
  const fid = id || `sh-sel-${label ? label.replace(/\W+/g, "-").toLowerCase() : "field"}`;
  return /*#__PURE__*/React.createElement("div", {
    className: "sh-sel-wrap",
    style: style
  }, label ? /*#__PURE__*/React.createElement("label", {
    className: "sh-field-label",
    htmlFor: fid
  }, label, required ? /*#__PURE__*/React.createElement("span", {
    className: "sh-field-req"
  }, " *") : null) : null, /*#__PURE__*/React.createElement("span", {
    className: "sh-sel-box"
  }, /*#__PURE__*/React.createElement("select", _extends({
    id: fid,
    className: "sh-sel",
    "data-size": size,
    "aria-invalid": error ? "true" : undefined
  }, rest), placeholder ? /*#__PURE__*/React.createElement("option", {
    value: ""
  }, placeholder) : null, options.map(o => {
    const v = typeof o === "string" ? o : o.value;
    const l = typeof o === "string" ? o : o.label;
    return /*#__PURE__*/React.createElement("option", {
      key: v,
      value: v
    }, l);
  }), children), /*#__PURE__*/React.createElement("span", {
    className: "sh-sel-caret"
  })), error ? /*#__PURE__*/React.createElement("span", {
    className: "sh-field-error"
  }, error) : hint ? /*#__PURE__*/React.createElement("span", {
    className: "sh-field-hint"
  }, hint) : null);
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/forms/Switch.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const CSS = `
.sh-switch{display:inline-flex;align-items:center;gap:var(--space-4);font-family:var(--font-body);font-size:var(--text-sm);color:var(--text-primary);cursor:pointer}
.sh-switch input{position:absolute;opacity:0;width:0;height:0}
.sh-switch-track{position:relative;flex:0 0 auto;width:44px;height:26px;border-radius:var(--radius-pill);background:var(--color-cotton-seed);transition:background-color var(--duration-base) var(--ease-out)}
.sh-switch-knob{position:absolute;top:3px;left:3px;width:20px;height:20px;border-radius:var(--radius-pill);background:var(--color-white);box-shadow:var(--shadow-sm);transition:transform var(--duration-base) var(--ease-out)}
.sh-switch input:checked + .sh-switch-track{background:var(--surface-brand)}
.sh-switch input:checked + .sh-switch-track .sh-switch-knob{transform:translateX(18px)}
.sh-switch input:focus-visible + .sh-switch-track{box-shadow:var(--ring-focus)}
.sh-switch input:disabled ~ *{opacity:.45}
.sh-switch[data-reverse="true"]{flex-direction:row-reverse;justify-content:space-between;width:100%}
`;
function ensure() {
  if (typeof document === "undefined" || document.getElementById("sh-switch-css")) return;
  const el = document.createElement("style");
  el.id = "sh-switch-css";
  el.textContent = CSS;
  document.head.appendChild(el);
}
function Switch({
  label,
  labelFirst = false,
  style,
  ...rest
}) {
  ensure();
  return /*#__PURE__*/React.createElement("label", {
    className: "sh-switch",
    "data-reverse": String(labelFirst),
    style: style
  }, /*#__PURE__*/React.createElement("input", _extends({
    type: "checkbox",
    role: "switch"
  }, rest)), /*#__PURE__*/React.createElement("span", {
    className: "sh-switch-track"
  }, /*#__PURE__*/React.createElement("span", {
    className: "sh-switch-knob"
  })), label ? /*#__PURE__*/React.createElement("span", null, label) : null);
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Switch.jsx", error: String((e && e.message) || e) }); }

// components/forms/Textarea.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const CSS = `
.sh-ta-wrap{display:flex;flex-direction:column;gap:var(--space-3);font-family:var(--font-body)}
.sh-ta{min-height:104px;padding:var(--space-5);background:var(--surface-card);border:var(--border-width) solid var(--border-control);border-radius:var(--radius-input);color:var(--text-primary);font-family:var(--font-body);font-size:var(--text-sm);line-height:var(--leading-normal);resize:vertical;outline:none;transition:var(--transition-control)}
.sh-ta:hover{border-color:var(--border-strong)}
.sh-ta:focus{border-color:var(--border-focus);box-shadow:0 0 0 3px var(--surface-brand-soft)}
.sh-ta::placeholder{color:var(--text-muted)}
.sh-ta[aria-invalid="true"]{border-color:var(--status-danger)}
.sh-ta:disabled{background:var(--surface-raised);opacity:.6}
.sh-ta-foot{display:flex;justify-content:space-between;gap:var(--space-4)}
`;
function ensure() {
  if (typeof document === "undefined" || document.getElementById("sh-ta-css")) return;
  const el = document.createElement("style");
  el.id = "sh-ta-css";
  el.textContent = CSS;
  document.head.appendChild(el);
}
function Textarea({
  label,
  hint,
  error,
  required,
  maxLength,
  value,
  id,
  style,
  ...rest
}) {
  ensure();
  const fid = id || `sh-ta-${label ? label.replace(/\W+/g, "-").toLowerCase() : "field"}`;
  const count = typeof value === "string" ? value.length : null;
  return /*#__PURE__*/React.createElement("div", {
    className: "sh-ta-wrap",
    style: style
  }, label ? /*#__PURE__*/React.createElement("label", {
    className: "sh-field-label",
    htmlFor: fid
  }, label, required ? /*#__PURE__*/React.createElement("span", {
    className: "sh-field-req"
  }, " *") : null) : null, /*#__PURE__*/React.createElement("textarea", _extends({
    id: fid,
    className: "sh-ta",
    "aria-invalid": error ? "true" : undefined,
    maxLength: maxLength,
    value: value
  }, rest)), /*#__PURE__*/React.createElement("span", {
    className: "sh-ta-foot"
  }, error ? /*#__PURE__*/React.createElement("span", {
    className: "sh-field-error"
  }, error) : /*#__PURE__*/React.createElement("span", {
    className: "sh-field-hint"
  }, hint || ""), maxLength && count != null ? /*#__PURE__*/React.createElement("span", {
    className: "sh-field-hint"
  }, count, "/", maxLength) : null));
}
Object.assign(__ds_scope, { Textarea });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Textarea.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Accordion.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const CSS = `
.sh-acc{border-top:var(--border-width) solid var(--border-subtle);font-family:var(--font-body)}
.sh-acc-item{border-bottom:var(--border-width) solid var(--border-subtle)}
.sh-acc-btn{display:flex;align-items:center;justify-content:space-between;gap:var(--space-5);width:100%;padding:var(--space-6) 0;border:0;background:transparent;text-align:left;font:var(--type-h4);font-size:var(--text-lg);color:var(--text-primary);cursor:pointer}
.sh-acc-btn:focus-visible{outline:none;box-shadow:var(--ring-focus);border-radius:var(--radius-xs)}
.sh-acc-sign{position:relative;flex:0 0 auto;width:14px;height:14px}
.sh-acc-sign::before,.sh-acc-sign::after{content:"";position:absolute;background:var(--text-secondary);transition:transform var(--duration-base) var(--ease-out), opacity var(--duration-base) var(--ease-out)}
.sh-acc-sign::before{top:6px;left:0;width:14px;height:1.5px}
.sh-acc-sign::after{left:6px;top:0;width:1.5px;height:14px}
.sh-acc-item[data-open="true"] .sh-acc-sign::after{transform:rotate(90deg);opacity:0}
.sh-acc-panel{overflow:hidden;max-height:0;transition:max-height var(--duration-slow) var(--ease-out)}
.sh-acc-panel[hidden]{display:block;max-height:0}
.sh-acc-item[data-open="true"] .sh-acc-panel{max-height:none}
.sh-acc-inner{padding:0 var(--space-9) var(--space-7) 0;color:var(--text-secondary);font-size:var(--text-sm);line-height:var(--leading-relaxed)}
`;
function ensure() {
  if (typeof document === "undefined" || document.getElementById("sh-acc-css")) return;
  const el = document.createElement("style");
  el.id = "sh-acc-css";
  el.textContent = CSS;
  document.head.appendChild(el);
}
let accSeq = 0;
function Accordion({
  items = [],
  defaultOpen = 0,
  allowMultiple = false,
  style,
  ...rest
}) {
  ensure();
  const [open, setOpen] = React.useState(defaultOpen == null ? [] : [defaultOpen]);
  const uid = React.useMemo(() => "sh-acc-" + ++accSeq, []);
  const toggle = i => setOpen(cur => cur.includes(i) ? cur.filter(x => x !== i) : allowMultiple ? [...cur, i] : [i]);
  return /*#__PURE__*/React.createElement("div", _extends({
    className: "sh-acc",
    style: style
  }, rest), items.map((it, i) => {
    const on = open.includes(i);
    const pid = `${uid}-p${i}`,
      bid = `${uid}-b${i}`;
    return /*#__PURE__*/React.createElement("div", {
      className: "sh-acc-item",
      key: it.title + i,
      "data-open": String(on)
    }, /*#__PURE__*/React.createElement("button", {
      type: "button",
      className: "sh-acc-btn",
      id: bid,
      "aria-expanded": on,
      "aria-controls": pid,
      onClick: () => toggle(i)
    }, it.title, /*#__PURE__*/React.createElement("span", {
      className: "sh-acc-sign",
      "aria-hidden": "true"
    })), /*#__PURE__*/React.createElement("div", {
      className: "sh-acc-panel",
      id: pid,
      role: "region",
      "aria-labelledby": bid,
      hidden: !on
    }, /*#__PURE__*/React.createElement("div", {
      className: "sh-acc-inner"
    }, it.content)));
  }));
}
Object.assign(__ds_scope, { Accordion });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Accordion.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Breadcrumbs.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Breadcrumbs({
  items = [],
  separator = "/",
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("nav", _extends({
    "aria-label": "Breadcrumb",
    style: {
      display: "flex",
      alignItems: "center",
      gap: "var(--space-4)",
      fontFamily: "var(--font-body)",
      fontSize: "var(--text-xs)",
      color: "var(--text-muted)",
      ...style
    }
  }, rest), items.map((it, i) => {
    const last = i === items.length - 1;
    const label = typeof it === "string" ? it : it.label;
    const href = typeof it === "string" ? undefined : it.href;
    return /*#__PURE__*/React.createElement(React.Fragment, {
      key: label + i
    }, last || !href ? /*#__PURE__*/React.createElement("span", {
      "aria-current": last ? "page" : undefined,
      style: {
        color: last ? "var(--text-primary)" : undefined
      }
    }, label) : /*#__PURE__*/React.createElement("a", {
      href: href,
      style: {
        color: "inherit",
        textDecoration: "none"
      }
    }, label), last ? null : /*#__PURE__*/React.createElement("span", {
      "aria-hidden": "true",
      style: {
        opacity: 0.5
      }
    }, separator));
  }));
}
Object.assign(__ds_scope, { Breadcrumbs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Breadcrumbs.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Tabs.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const CSS = `
.sh-tabs{display:flex;align-items:center;gap:var(--space-7);border-bottom:var(--border-width) solid var(--border-subtle);font-family:var(--font-body)}
.sh-tab{position:relative;appearance:none;border:0;background:transparent;padding:var(--space-4) 0;min-height:32px;font-size:var(--text-sm);font-weight:var(--weight-regular);color:var(--text-secondary);cursor:pointer;transition:color var(--duration-fast) var(--ease-standard)}
.sh-tab:hover{color:var(--text-primary)}
.sh-tab:focus-visible{outline:none;box-shadow:var(--ring-focus);border-radius:var(--radius-xs)}
.sh-tab[aria-selected="true"]{color:var(--text-primary);font-weight:var(--weight-medium)}
.sh-tab[aria-selected="true"]::after{content:"";position:absolute;left:0;right:0;bottom:-1px;height:1.5px;background:var(--surface-brand)}
.sh-tabs[data-variant="pill"]{border-bottom:0;gap:var(--space-2);background:var(--surface-raised);padding:var(--space-2);border-radius:var(--radius-pill);display:inline-flex}
.sh-tabs[data-variant="pill"] .sh-tab{padding:0 var(--space-6);height:34px;border-radius:var(--radius-pill)}
.sh-tabs[data-variant="pill"] .sh-tab[aria-selected="true"]{background:var(--surface-card);box-shadow:var(--shadow-sm)}
.sh-tabs[data-variant="pill"] .sh-tab[aria-selected="true"]::after{display:none}
`;
function ensure() {
  if (typeof document === "undefined" || document.getElementById("sh-tabs-css")) return;
  const el = document.createElement("style");
  el.id = "sh-tabs-css";
  el.textContent = CSS;
  document.head.appendChild(el);
}
function Tabs({
  items = [],
  value,
  onChange,
  variant = "underline",
  style,
  ...rest
}) {
  ensure();
  const [internal, setInternal] = React.useState(value != null ? value : items[0] && (items[0].value || items[0]) || "");
  const active = value != null ? value : internal;
  const pick = v => {
    setInternal(v);
    if (onChange) onChange(v);
  };
  const list = React.useRef(null);
  const keys = items.map(it => typeof it === "string" ? it : it.value);
  /* ARIA tablist keyboard contract: arrows move and select, Home/End jump to the ends.
     Only the selected tab is in the tab order (roving tabindex). */
  const onKeyDown = e => {
    const i = keys.indexOf(active);
    let next = null;
    if (e.key === "ArrowRight" || e.key === "ArrowDown") next = (i + 1) % keys.length;else if (e.key === "ArrowLeft" || e.key === "ArrowUp") next = (i - 1 + keys.length) % keys.length;else if (e.key === "Home") next = 0;else if (e.key === "End") next = keys.length - 1;
    if (next == null) return;
    e.preventDefault();
    pick(keys[next]);
    const btns = list.current ? list.current.querySelectorAll('[role="tab"]') : [];
    if (btns[next]) btns[next].focus();
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    ref: list,
    className: "sh-tabs",
    "data-variant": variant,
    role: "tablist",
    onKeyDown: onKeyDown,
    style: style
  }, rest), items.map(it => {
    const v = typeof it === "string" ? it : it.value;
    const l = typeof it === "string" ? it : it.label;
    const on = active === v;
    return /*#__PURE__*/React.createElement("button", {
      key: v,
      type: "button",
      role: "tab",
      className: "sh-tab",
      "aria-selected": on,
      tabIndex: on ? 0 : -1,
      onClick: () => pick(v)
    }, l, typeof it === "object" && it.count != null ? /*#__PURE__*/React.createElement("span", {
      style: {
        color: "var(--text-muted)",
        marginLeft: "var(--space-3)"
      }
    }, it.count) : null);
  }));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Tabs.jsx", error: String((e && e.message) || e) }); }

// ui_kits/app/Shell.js
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Real property photography from the brand package. `name` maps to assets/photos/<name>.jpg */
function Photo({
  name,
  alt = "",
  height = 160,
  radius = "var(--radius-media)",
  position = "center",
  scrim,
  children,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      position: "relative",
      height: typeof height === "number" ? height + "px" : height,
      borderRadius: radius,
      overflow: "hidden",
      background: "var(--color-cotton-seed)",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("img", {
    src: "../../assets/photos/" + name + ".jpg",
    alt: alt,
    style: {
      position: "absolute",
      inset: 0,
      width: "100%",
      height: "100%",
      objectFit: "cover",
      objectPosition: position
    }
  }), scrim ? /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      inset: 0,
      background: scrim === "bottom" ? "var(--scrim-bottom)" : "var(--scrim-top)"
    }
  }) : null, children);
}
function Phone({
  children,
  tab,
  onTab
}) {
  const {
    Icon
  } = window.ShantaraDesignSystem_45bbe4;
  const tabs = [["Today", "sun"], ["Programme", "flower"], ["Notes", "notebook-pen"], ["You", "user-round"]];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: 390,
      height: 844,
      borderRadius: 44,
      background: "var(--surface-page)",
      boxShadow: "var(--shadow-xl)",
      overflow: "hidden",
      position: "relative",
      display: "flex",
      flexDirection: "column",
      border: "1px solid var(--border-subtle)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: 52,
      flex: "0 0 auto",
      display: "flex",
      alignItems: "flex-end",
      justifyContent: "space-between",
      padding: "0 26px 6px",
      fontSize: 12,
      fontWeight: "var(--weight-medium)",
      fontVariantNumeric: "tabular-nums"
    }
  }, /*#__PURE__*/React.createElement("span", null, "6:15"), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "flex",
      gap: 5
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "signal",
    size: 13
  }), /*#__PURE__*/React.createElement(Icon, {
    name: "wifi",
    size: 13
  }), /*#__PURE__*/React.createElement(Icon, {
    name: "battery-full",
    size: 13
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflowY: "auto",
      padding: "0 20px 20px"
    }
  }, children), /*#__PURE__*/React.createElement("nav", {
    style: {
      flex: "0 0 auto",
      height: 78,
      display: "grid",
      gridTemplateColumns: "repeat(4,1fr)",
      alignItems: "center",
      borderTop: "1px solid var(--border-subtle)",
      background: "color-mix(in srgb, var(--color-merino) 92%, transparent)",
      backdropFilter: "var(--blur-glass)",
      paddingBottom: 14
    }
  }, tabs.map(([l, ic]) => /*#__PURE__*/React.createElement("button", {
    key: l,
    type: "button",
    onClick: () => onTab(l),
    style: {
      border: 0,
      background: "transparent",
      display: "grid",
      justifyItems: "center",
      gap: 5,
      cursor: "pointer",
      minHeight: 44,
      color: tab === l ? "var(--text-brand)" : "var(--text-muted)"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: ic,
    size: 21
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 10,
      letterSpacing: "0.04em",
      fontFamily: "var(--font-body)"
    }
  }, l)))));
}
Object.assign(window, {
  Photo,
  Phone
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/app/Shell.js", error: String((e && e.message) || e) }); }

// ui_kits/app/TherapySheet.js
try { (() => {
function TherapySheet({
  onClose
}) {
  const {
    Button,
    Badge,
    Divider,
    Icon,
    IconButton,
    Toast,
    Accordion
  } = window.ShantaraDesignSystem_45bbe4;
  const [confirmed, setConfirmed] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      background: "var(--surface-page)",
      display: "flex",
      flexDirection: "column",
      zIndex: 40,
      animation: "sh-sheet var(--duration-slow) var(--ease-out)"
    }
  }, /*#__PURE__*/React.createElement("style", null, "@keyframes sh-sheet{from{transform:translateY(24px);opacity:0}to{transform:none;opacity:1}}"), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflowY: "auto"
    }
  }, /*#__PURE__*/React.createElement(Photo, {
    name: "treatment",
    alt: "Therapy room",
    height: 280,
    radius: "0px",
    scrim: "top"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      top: 52,
      left: 16,
      right: 16,
      display: "flex",
      justifyContent: "space-between"
    }
  }, /*#__PURE__*/React.createElement(IconButton, {
    variant: "glass",
    label: "Back",
    onClick: onClose
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "chevron-left",
    size: 19
  })), /*#__PURE__*/React.createElement(IconButton, {
    variant: "glass",
    label: "Ask the care team"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "message-circle",
    size: 18
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "var(--space-7) 20px var(--space-8)"
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: "brand"
  }, "Prescribed therapy"), /*#__PURE__*/React.createElement("h1", {
    style: {
      font: "var(--weight-light) var(--text-2xl)/1.15 var(--font-display)",
      margin: "var(--space-4) 0 var(--space-3)"
    }
  }, "Mud therapy"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "var(--space-5)",
      fontSize: "var(--text-2xs)",
      color: "var(--text-muted)",
      fontVariantNumeric: "tabular-nums"
    }
  }, /*#__PURE__*/React.createElement("span", null, "10:30 today"), /*#__PURE__*/React.createElement("span", null, "45 minutes"), /*#__PURE__*/React.createElement("span", null, "Therapy wing")), /*#__PURE__*/React.createElement("p", {
    style: {
      font: "var(--type-body-sm)",
      color: "var(--text-secondary)",
      marginTop: "var(--space-5)"
    }
  }, "Mineral-rich earth applied to calm inflammation, improve circulation and ease physical tension. Part of your Detox programme from day four."), /*#__PURE__*/React.createElement(Divider, {
    spacing: "var(--space-6)"
  }), /*#__PURE__*/React.createElement("span", {
    className: "shantara-eyebrow"
  }, "Before you come"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-4)",
      marginTop: "var(--space-4)"
    }
  }, [["shirt", "Wear the wellness attire in your room"], ["droplet", "Rinse in the changing wing first"], ["clock", "Arrive five minutes early — sessions start on the hour"]].map(([ic, t]) => /*#__PURE__*/React.createElement("div", {
    key: t,
    style: {
      display: "flex",
      gap: "var(--space-4)",
      alignItems: "flex-start"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: ic,
    size: 17,
    color: "var(--text-brand)"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--text-sm)",
      flex: 1
    }
  }, t)))), /*#__PURE__*/React.createElement(Divider, {
    spacing: "var(--space-6)"
  }), /*#__PURE__*/React.createElement(Accordion, {
    defaultOpen: null,
    items: [{
      title: "What it feels like",
      content: "Cool at first, then warm as the application settles. The session ends with ten minutes of rest before you rinse."
    }, {
      title: "If something feels wrong",
      content: "Tell your therapist immediately. Any symptom, pain or discomfort during a session is escalated to a doctor — never waited out."
    }, {
      title: "Changing your protocol",
      content: "Requests to stop, extend or modify a therapy go to your doctor rather than the therapy team."
    }]
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: "0 0 auto",
      padding: "var(--space-5) 20px var(--space-8)",
      borderTop: "1px solid var(--border-subtle)",
      background: "var(--surface-card)",
      display: "flex",
      alignItems: "center",
      gap: "var(--space-5)"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--weight-light) var(--text-xl)/1 var(--font-display)",
      fontVariantNumeric: "tabular-nums"
    }
  }, "10:30"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 10,
      color: "var(--text-muted)"
    }
  }, "in 45 minutes")), /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    fullWidth: true,
    onClick: () => setConfirmed(true)
  }, "I'll be there")), confirmed ? /*#__PURE__*/React.createElement(Toast, {
    fixed: true,
    tone: "success",
    title: "Noted",
    message: "Your therapist has been told to expect you.",
    onClose: () => {
      setConfirmed(false);
      onClose();
    }
  }) : null);
}
function ProfileScreen() {
  const {
    Card,
    Divider,
    Switch,
    Button,
    Badge,
    Icon,
    Tag
  } = window.ShantaraDesignSystem_45bbe4;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-6)",
      paddingTop: "var(--space-5)"
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      font: "var(--weight-light) var(--text-2xl)/1.1 var(--font-display)"
    }
  }, "You"), /*#__PURE__*/React.createElement(Card, {
    padding: "md"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "var(--space-5)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 56,
      height: 56,
      flex: "0 0 56px",
      borderRadius: 999,
      background: "var(--surface-brand-soft)",
      display: "grid",
      placeItems: "center",
      font: "var(--weight-light) var(--text-lg)/1 var(--font-display)",
      color: "var(--text-brand)"
    }
  }, "AM"), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "var(--text-base)",
      fontWeight: "var(--weight-medium)"
    }
  }, "Anjali Menon"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "var(--text-2xs)",
      color: "var(--text-muted)"
    }
  }, "Superior Room 412 \xB7 Detox, 14 nights")), /*#__PURE__*/React.createElement(Badge, {
    tone: "brand"
  }, "In stay")), /*#__PURE__*/React.createElement(Divider, {
    spacing: "var(--space-5)"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      textAlign: "center"
    }
  }, [["Day 6", "of 14"], ["58", "therapies done"], ["12 Oct", "arrived"]].map(([n, l]) => /*#__PURE__*/React.createElement("div", {
    key: l
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--weight-light) var(--text-xl)/1 var(--font-display)",
      fontVariantNumeric: "tabular-nums"
    }
  }, n), /*#__PURE__*/React.createElement("div", {
    className: "shantara-eyebrow",
    style: {
      marginTop: 6
    }
  }, l))))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    className: "shantara-eyebrow"
  }, "On your file"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "var(--space-3)",
      flexWrap: "wrap",
      marginTop: "var(--space-4)"
    }
  }, ["Type 2 diabetes", "Low back pain", "No dairy", "Left knee — no deep pressure"].map(t => /*#__PURE__*/React.createElement(Tag, {
    key: t,
    selected: true
  }, t))), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: "var(--text-2xs)",
      color: "var(--text-muted)",
      marginTop: "var(--space-4)"
    }
  }, "Visible to your care team only. Ask a doctor to change anything here.")), /*#__PURE__*/React.createElement(Card, {
    padding: "md",
    tone: "raised"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-5)"
    }
  }, /*#__PURE__*/React.createElement(Switch, {
    labelFirst: true,
    label: "Therapy reminders",
    defaultChecked: true
  }), /*#__PURE__*/React.createElement(Switch, {
    labelFirst: true,
    label: "Morning vitals prompt",
    defaultChecked: true
  }), /*#__PURE__*/React.createElement(Switch, {
    labelFirst: true,
    label: "Share progress with family"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-2)"
    }
  }, [["My programme & tariff", "receipt-text"], ["Health assessment form", "clipboard-list"], ["House rules", "scroll-text"], ["Care team", "life-buoy"]].map(([l, ic]) => /*#__PURE__*/React.createElement("button", {
    key: l,
    type: "button",
    style: {
      display: "flex",
      alignItems: "center",
      gap: "var(--space-5)",
      minHeight: 48,
      border: 0,
      borderBottom: "1px solid var(--border-subtle)",
      background: "transparent",
      cursor: "pointer",
      fontFamily: "var(--font-body)",
      fontSize: "var(--text-sm)",
      color: "var(--text-primary)",
      textAlign: "left"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: ic,
    size: 18,
    color: "var(--text-secondary)"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1
    }
  }, l), /*#__PURE__*/React.createElement(Icon, {
    name: "chevron-right",
    size: 16,
    color: "var(--text-muted)"
  })))), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    fullWidth: true
  }, "Sign out"));
}
function NotesScreen() {
  const {
    Card,
    Textarea,
    Button,
    Icon,
    Divider,
    Badge
  } = window.ShantaraDesignSystem_45bbe4;
  const vitals = [["Weight", "71.4 kg", "−1.8 since day 1"], ["Fasting glucose", "112 mg/dL", "−26 since day 1"], ["Blood pressure", "128 / 82", "steady"], ["Sleep", "7h 10m", "+1h 20m"]];
  const entries = [["Day 5", "Woke before the alarm for the first time. The 6:30 session felt easier on the knees."], ["Day 3", "Headache through the afternoon — mentioned it to Dr. Janu, who adjusted the evening meal."], ["Day 1", "Long drive up. The valley is louder than I expected: birds, not traffic."]];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-6)",
      paddingTop: "var(--space-5)"
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      font: "var(--weight-light) var(--text-2xl)/1.1 var(--font-display)"
    }
  }, "Notes"), /*#__PURE__*/React.createElement(Card, {
    padding: "md",
    tone: "raised"
  }, /*#__PURE__*/React.createElement("span", {
    className: "shantara-eyebrow"
  }, "This morning's readings"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "var(--space-4)"
    }
  }, vitals.map(([l, v, d], i) => /*#__PURE__*/React.createElement("div", {
    key: l,
    style: {
      display: "flex",
      alignItems: "baseline",
      gap: "var(--space-4)",
      padding: "var(--space-4) 0",
      borderBottom: i < vitals.length - 1 ? "1px solid var(--border-subtle)" : "none"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--text-sm)",
      flex: 1
    }
  }, l), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--text-sm)",
      fontWeight: "var(--weight-medium)",
      fontVariantNumeric: "tabular-nums"
    }
  }, v), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--text-3xs)",
      color: "var(--text-muted)",
      width: 108,
      textAlign: "right"
    }
  }, d)))), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: "var(--text-2xs)",
      color: "var(--text-muted)",
      margin: "var(--space-5) 0 0"
    }
  }, "Recorded by the nursing team. Trends are for your doctor to interpret, not to act on alone.")), /*#__PURE__*/React.createElement(Card, {
    padding: "md"
  }, /*#__PURE__*/React.createElement(Textarea, {
    label: "How was today?",
    hint: "Your doctor reads this before the morning consultation.",
    maxLength: 300,
    value: "",
    onChange: () => {}
  }), /*#__PURE__*/React.createElement(Button, {
    fullWidth: true,
    style: {
      marginTop: "var(--space-5)"
    },
    startIcon: /*#__PURE__*/React.createElement(Icon, {
      name: "check",
      size: 16
    })
  }, "Save today's note")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    className: "shantara-eyebrow"
  }, "Earlier"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "var(--space-4)",
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-4)"
    }
  }, entries.map(([d, t]) => /*#__PURE__*/React.createElement(Card, {
    key: d,
    padding: "md",
    tone: "sunken"
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: "outline"
  }, d), /*#__PURE__*/React.createElement("p", {
    style: {
      font: "var(--type-body-sm)",
      margin: "var(--space-3) 0 0"
    }
  }, t))))));
}
Object.assign(window, {
  TherapySheet,
  ProfileScreen,
  NotesScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/app/TherapySheet.js", error: String((e && e.message) || e) }); }

// ui_kits/app/TodayScreen.js
try { (() => {
const SCHEDULE = [{
  time: "06:30",
  title: "Yoga therapy",
  where: "Yoga hall",
  kind: "Movement",
  state: "done"
}, {
  time: "08:00",
  title: "Prescribed breakfast",
  where: "Dining hall",
  kind: "Diet therapy",
  state: "done"
}, {
  time: "09:15",
  title: "Doctor consultation",
  where: "Consultation room 2",
  kind: "Clinical",
  state: "now",
  who: "Dr. Bahja Janu"
}, {
  time: "10:30",
  title: "Mud therapy",
  where: "Therapy wing, lower level",
  kind: "Therapy",
  state: "next"
}, {
  time: "12:30",
  title: "Prescribed lunch",
  where: "Dining hall",
  kind: "Diet therapy",
  state: "later"
}, {
  time: "16:00",
  title: "Hydrotherapy",
  where: "Therapy wing",
  kind: "Therapy",
  state: "later"
}, {
  time: "18:30",
  title: "Mind-body session",
  where: "Library terrace",
  kind: "Movement",
  state: "later"
}];
const STATE_TONE = {
  done: "var(--color-cotton-seed)",
  now: "var(--surface-brand)",
  next: "var(--color-gold-crayola)",
  later: "var(--color-pearl-bush)"
};
function TodayScreen({
  onTab,
  onOpen
}) {
  const {
    Logo,
    Card,
    Badge,
    Button,
    Icon,
    IconButton,
    Divider
  } = window.ShantaraDesignSystem_45bbe4;
  const now = SCHEDULE.find(s => s.state === "now");
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-6)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      paddingTop: "var(--space-4)"
    }
  }, /*#__PURE__*/React.createElement(Logo, {
    mark: "icon",
    tone: "olive",
    height: 30,
    assetBase: "../../assets"
  }), /*#__PURE__*/React.createElement(IconButton, {
    label: "Messages from the care team"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "bell",
    size: 19
  }))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    className: "shantara-eyebrow"
  }, "Day 6 of 14 \xB7 Detox"), /*#__PURE__*/React.createElement("h1", {
    style: {
      font: "var(--weight-light) var(--text-3xl)/1.1 var(--font-display)",
      margin: "var(--space-4) 0 0"
    }
  }, "Good morning,", /*#__PURE__*/React.createElement("br", null), "Anjali")), /*#__PURE__*/React.createElement(Card, {
    padding: "md",
    tone: "brand",
    style: {
      color: "var(--text-on-brand)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "shantara-eyebrow",
    style: {
      color: "var(--color-gold-crayola)"
    }
  }, "Now \xB7 ", now.time), /*#__PURE__*/React.createElement("h3", {
    style: {
      font: "var(--type-h4)",
      fontSize: "var(--text-lg)",
      color: "var(--text-on-brand)",
      margin: "var(--space-3) 0 var(--space-2)"
    }
  }, now.title), /*#__PURE__*/React.createElement("p", {
    style: {
      font: "var(--type-body-sm)",
      color: "color-mix(in srgb, var(--color-merino) 78%, transparent)",
      margin: 0
    }
  }, now.who, " \xB7 ", now.where), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "var(--space-3)",
      marginTop: "var(--space-5)"
    }
  }, /*#__PURE__*/React.createElement(Button, {
    size: "sm",
    variant: "inverse"
  }, "Directions"), /*#__PURE__*/React.createElement(Button, {
    size: "sm",
    variant: "accent",
    onClick: () => onTab("Programme")
  }, "My protocol"))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "baseline",
      justifyContent: "space-between",
      marginBottom: "var(--space-4)"
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      font: "var(--type-h4)",
      fontSize: "var(--text-lg)"
    }
  }, "Today"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--text-2xs)",
      color: "var(--text-muted)"
    }
  }, "Set by your doctor")), /*#__PURE__*/React.createElement(Card, {
    padding: "md",
    tone: "raised"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column"
    }
  }, SCHEDULE.map((s, i) => /*#__PURE__*/React.createElement("button", {
    key: s.time,
    type: "button",
    onClick: onOpen,
    style: {
      display: "flex",
      gap: "var(--space-5)",
      alignItems: "flex-start",
      textAlign: "left",
      border: 0,
      background: "transparent",
      cursor: "pointer",
      padding: "var(--space-4) 0",
      borderBottom: i < SCHEDULE.length - 1 ? "1px solid var(--border-subtle)" : "none",
      fontFamily: "var(--font-body)",
      minHeight: 44
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--text-sm)",
      fontVariantNumeric: "tabular-nums",
      color: s.state === "done" ? "var(--text-muted)" : "var(--text-primary)",
      width: 44,
      flex: "0 0 44px"
    }
  }, s.time), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 8,
      height: 8,
      borderRadius: 999,
      background: STATE_TONE[s.state],
      marginTop: 6,
      flex: "0 0 8px"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "block",
      fontSize: "var(--text-sm)",
      fontWeight: "var(--weight-medium)",
      color: s.state === "done" ? "var(--text-muted)" : "var(--text-primary)"
    }
  }, s.title), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "block",
      fontSize: "var(--text-3xs)",
      color: "var(--text-muted)",
      marginTop: 2
    }
  }, s.kind, " \xB7 ", s.where))))))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", {
    style: {
      font: "var(--type-h4)",
      fontSize: "var(--text-lg)",
      marginBottom: "var(--space-4)"
    }
  }, "Open to you today"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "var(--space-4)",
      overflowX: "auto",
      paddingBottom: 4
    }
  }, [["Library", "library", "Quiet, all day"], ["Walking trails", "grounds", "Cooler after 5pm"], ["Courtyard", "courtyard", "Heliotherapy 7–9am"]].map(([n, ph, m]) => /*#__PURE__*/React.createElement("div", {
    key: n,
    style: {
      flex: "0 0 168px"
    }
  }, /*#__PURE__*/React.createElement(Photo, {
    name: ph,
    alt: n,
    height: 120,
    radius: "var(--radius-sm)"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "var(--text-sm)",
      fontWeight: "var(--weight-medium)",
      marginTop: "var(--space-3)"
    }
  }, n), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "var(--text-2xs)",
      color: "var(--text-muted)"
    }
  }, m))))), /*#__PURE__*/React.createElement(Card, {
    padding: "md"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "var(--space-4)"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "stethoscope",
    size: 22,
    color: "var(--text-brand)"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "var(--text-sm)",
      fontWeight: "var(--weight-medium)"
    }
  }, "Feeling unwell or unsure?"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "var(--text-2xs)",
      color: "var(--text-muted)"
    }
  }, "Any symptom during a therapy goes to a doctor")), /*#__PURE__*/React.createElement(Badge, {
    tone: "info"
  }, "Call"))));
}
function ProtocolScreen({
  onOpen
}) {
  const {
    Tabs,
    Card,
    Badge,
    Icon,
    Divider
  } = window.ShantaraDesignSystem_45bbe4;
  const [view, setView] = React.useState("Therapies");
  const therapies = [["Mud therapy", "Daily, 10:30", "treatment"], ["Hydrotherapy", "Daily, 16:00", "water-wall"], ["Yoga therapy", "Daily, 06:30", "courtyard"], ["Fasting therapy", "Days 8–10, supervised", "grounds"], ["Massage therapy", "Alternate days", "treatment"]];
  const diet = [["06:00", "Warm water with lime"], ["08:00", "Steamed millet, seasonal fruit"], ["11:00", "Tender coconut water"], ["12:30", "Brown rice, greens, buttermilk"], ["16:00", "Herbal infusion"], ["19:00", "Vegetable broth, sprouts"]];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-5)",
      paddingTop: "var(--space-5)"
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      font: "var(--weight-light) var(--text-2xl)/1.1 var(--font-display)"
    }
  }, "Your protocol"), /*#__PURE__*/React.createElement(Card, {
    padding: "md",
    tone: "sunken"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      textAlign: "center"
    }
  }, [["Detox", "programme"], ["14", "nights"], ["Day 6", "today"]].map(([n, l]) => /*#__PURE__*/React.createElement("div", {
    key: l
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--weight-light) var(--text-lg)/1 var(--font-display)"
    }
  }, n), /*#__PURE__*/React.createElement("div", {
    className: "shantara-eyebrow",
    style: {
      marginTop: 6
    }
  }, l)))), /*#__PURE__*/React.createElement(Divider, {
    spacing: "var(--space-5)"
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      font: "var(--type-body-sm)",
      color: "var(--text-secondary)",
      margin: 0
    }
  }, "Written by Dr. Bahja Janu after your consultation, reviewed every morning. Nothing here is chosen from a list.")), /*#__PURE__*/React.createElement(Tabs, {
    variant: "pill",
    items: ["Therapies", "Diet"],
    value: view,
    onChange: setView
  }), view === "Therapies" ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-4)"
    }
  }, therapies.map(([n, when, ph]) => /*#__PURE__*/React.createElement(Card, {
    key: n,
    padding: "sm",
    interactive: true,
    onClick: onOpen
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "var(--space-5)",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement(Photo, {
    name: ph,
    alt: "",
    height: 76,
    radius: "var(--radius-sm)",
    style: {
      width: 76,
      flex: "0 0 76px"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: "outline"
  }, "Prescribed"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "var(--text-base)",
      fontWeight: "var(--weight-medium)",
      margin: "var(--space-2) 0 2px"
    }
  }, n), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "var(--text-2xs)",
      color: "var(--text-muted)"
    }
  }, when)), /*#__PURE__*/React.createElement(Icon, {
    name: "chevron-right",
    size: 18,
    color: "var(--text-muted)"
  }))))) : /*#__PURE__*/React.createElement(Card, {
    padding: "md"
  }, diet.map(([t, d], i) => /*#__PURE__*/React.createElement("div", {
    key: t,
    style: {
      display: "flex",
      gap: "var(--space-5)",
      padding: "var(--space-4) 0",
      borderBottom: i < diet.length - 1 ? "1px solid var(--border-subtle)" : "none"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--text-sm)",
      fontVariantNumeric: "tabular-nums",
      color: "var(--text-muted)",
      width: 44,
      flex: "0 0 44px"
    }
  }, t), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--text-sm)"
    }
  }, d))), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: "var(--text-2xs)",
      color: "var(--text-muted)",
      margin: "var(--space-5) 0 0"
    }
  }, "Meals are part of the treatment. Please do not request substitutions or outside food.")));
}
Object.assign(window, {
  TodayScreen,
  ProtocolScreen,
  SCHEDULE
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/app/TodayScreen.js", error: String((e && e.message) || e) }); }

// ui_kits/website/EnquiryScreen.js
try { (() => {
function EnquiryScreen({
  onNavigate
}) {
  const {
    Button,
    Input,
    Select,
    Checkbox,
    Textarea,
    Card,
    Badge,
    Divider,
    Icon,
    Dialog,
    Toast,
    Spinner
  } = window.ShantaraDesignSystem_45bbe4;
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
    setTimeout(() => {
      setPending(false);
      setConfirming(false);
      setDone(true);
      setStep(3);
    }, 1400);
  };
  return /*#__PURE__*/React.createElement("main", {
    style: {
      maxWidth: "980px",
      margin: "0 auto",
      padding: "var(--space-9) var(--layout-gutter-lg) var(--section-y)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "shantara-eyebrow"
  }, "Enquiry"), /*#__PURE__*/React.createElement("h1", {
    style: {
      font: "var(--type-h1)",
      fontSize: "var(--text-3xl)",
      margin: "var(--space-4) 0 var(--space-8)"
    }
  }, "Detox programme"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "var(--space-6)",
      marginBottom: "var(--space-8)"
    }
  }, ["Dates", "Health assessment", "Submitted"].map((l, i) => /*#__PURE__*/React.createElement("div", {
    key: l,
    style: {
      display: "flex",
      alignItems: "center",
      gap: "var(--space-4)",
      opacity: step >= i + 1 ? 1 : 0.4
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 26,
      height: 26,
      borderRadius: "999px",
      display: "grid",
      placeItems: "center",
      fontSize: "var(--text-2xs)",
      background: step >= i + 1 ? "var(--surface-brand)" : "var(--surface-raised)",
      color: step >= i + 1 ? "var(--text-on-brand)" : "var(--text-secondary)"
    }
  }, step > i + 1 ? "✓" : i + 1), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--text-sm)"
    }
  }, l), i < 2 ? /*#__PURE__*/React.createElement("span", {
    style: {
      width: 40,
      height: 1,
      background: "var(--border-default)"
    }
  }) : null))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1.2fr 0.8fr",
      gap: "var(--space-8)",
      alignItems: "start"
    }
  }, /*#__PURE__*/React.createElement(Card, {
    padding: "lg"
  }, step === 1 ? /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", {
    style: {
      font: "var(--type-h4)",
      margin: "0 0 var(--space-3)"
    }
  }, "When would you like to arrive?"), /*#__PURE__*/React.createElement("p", {
    style: {
      font: "var(--type-body-sm)",
      color: "var(--text-secondary)",
      margin: "0 0 var(--space-6)"
    }
  }, "Programmes begin on Mondays so the clinical team can hold one intake a week. We accept a hundred bookings a month."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(5,1fr)",
      gap: "var(--space-3)"
    }
  }, days.map(([d, n]) => /*#__PURE__*/React.createElement("button", {
    key: d,
    type: "button",
    onClick: () => n !== "full" && setArrival(d),
    disabled: n === "full",
    style: {
      padding: "var(--space-5) var(--space-3)",
      borderRadius: "var(--radius-md)",
      cursor: n === "full" ? "not-allowed" : "pointer",
      textAlign: "center",
      border: `1px solid ${arrival === d ? "var(--border-brand)" : "var(--border-default)"}`,
      background: arrival === d ? "var(--surface-brand-soft)" : "var(--surface-card)",
      opacity: n === "full" ? 0.45 : 1,
      fontFamily: "var(--font-body)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "var(--text-sm)",
      fontWeight: "var(--weight-medium)"
    }
  }, d), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "var(--text-3xs)",
      color: "var(--text-muted)",
      marginTop: 4
    }
  }, n)))), /*#__PURE__*/React.createElement(Divider, {
    spacing: "var(--space-7)",
    label: "nights"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(5,1fr)",
      gap: "var(--space-3)"
    }
  }, stays.map(s => /*#__PURE__*/React.createElement("button", {
    key: s,
    type: "button",
    onClick: () => setNights(s),
    style: {
      height: "var(--control-lg)",
      borderRadius: "var(--radius-pill)",
      cursor: "pointer",
      fontVariantNumeric: "tabular-nums",
      fontFamily: "var(--font-body)",
      fontSize: "var(--text-sm)",
      border: `1px solid ${nights === s ? "transparent" : "var(--border-default)"}`,
      background: nights === s ? "var(--surface-brand)" : "transparent",
      color: nights === s ? "var(--text-on-brand)" : "var(--text-primary)"
    }
  }, s))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "flex-end",
      marginTop: "var(--space-8)"
    }
  }, /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    onClick: () => setStep(2),
    endIcon: /*#__PURE__*/React.createElement(Icon, {
      name: "arrow-right",
      size: 17
    })
  }, "Continue"))) : step === 2 ? /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", {
    style: {
      font: "var(--type-h4)",
      margin: "0 0 var(--space-3)"
    }
  }, "Health assessment"), /*#__PURE__*/React.createElement("p", {
    style: {
      font: "var(--type-body-sm)",
      color: "var(--text-secondary)",
      margin: "0 0 var(--space-6)"
    }
  }, "Our doctors read this before your preliminary consultation. Nothing is confirmed until they have."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: "var(--space-5)"
    }
  }, /*#__PURE__*/React.createElement(Input, {
    label: "Full name",
    defaultValue: "Anjali Menon",
    required: true
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Age",
    defaultValue: "47",
    hint: "Guests must be 18\u201380",
    required: true
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Email",
    type: "email",
    defaultValue: "anjali@example.com",
    required: true
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Mobile",
    defaultValue: "+91 98470 00000",
    required: true
  }), /*#__PURE__*/React.createElement(Select, {
    label: "Room category",
    options: ["Standard Room", "Superior Room", "Premium Room", "Junior Suite", "Executive Suite"],
    defaultValue: "Superior Room"
  }), /*#__PURE__*/React.createElement(Select, {
    label: "Occupancy",
    options: ["Single", "Double"],
    defaultValue: "Single"
  })), /*#__PURE__*/React.createElement(Textarea, {
    style: {
      marginTop: "var(--space-5)"
    },
    label: "Conditions being managed",
    hint: "Diagnoses, duration, and anything a doctor should see first.",
    maxLength: 400,
    value: "",
    onChange: () => {},
    required: true
  }), /*#__PURE__*/React.createElement(Textarea, {
    style: {
      marginTop: "var(--space-5)"
    },
    label: "Current medications",
    hint: "All medications must be declared \u2014 naturopathy treatments can interact with them.",
    maxLength: 400,
    value: "",
    onChange: () => {},
    required: true
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-4)",
      marginTop: "var(--space-6)"
    }
  }, /*#__PURE__*/React.createElement(Checkbox, {
    label: "I will upload my medical records",
    description: "Reports from the last 12 months, if you have them",
    defaultChecked: true
  }), /*#__PURE__*/React.createElement(Checkbox, {
    label: "I have read the house rules",
    description: "Including that guests remain on the property for the duration of the stay",
    defaultChecked: true
  }), /*#__PURE__*/React.createElement(Checkbox, {
    label: "Arrange airport or railway transfer",
    description: "Included in every tariff",
    defaultChecked: true
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      marginTop: "var(--space-8)"
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    onClick: () => setStep(1)
  }, "Back"), /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    onClick: () => setConfirming(true)
  }, "Submit for review"))) : /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: "center",
      padding: "var(--space-8) 0"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 56,
      height: 56,
      borderRadius: "999px",
      background: "var(--status-success-soft)",
      display: "grid",
      placeItems: "center",
      margin: "0 auto var(--space-6)"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "check",
    size: 26,
    color: "var(--status-success)"
  })), /*#__PURE__*/React.createElement("h3", {
    style: {
      font: "var(--type-h3)",
      fontSize: "var(--text-2xl)",
      margin: "0 0 var(--space-4)"
    }
  }, "With the doctors now"), /*#__PURE__*/React.createElement("p", {
    style: {
      color: "var(--text-secondary)",
      margin: "0 auto var(--space-8)",
      maxWidth: "40ch"
    }
  }, "We will call within two working days to arrange your preliminary consultation for ", arrival, ", ", nights, " nights. Your room is held until then."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "var(--space-4)",
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    onClick: () => onNavigate("home")
  }, "Back to home"), /*#__PURE__*/React.createElement(Button, {
    onClick: () => onNavigate("programme")
  }, "Read the programme again")))), /*#__PURE__*/React.createElement(Card, {
    tone: "raised",
    padding: "lg"
  }, /*#__PURE__*/React.createElement("span", {
    className: "shantara-eyebrow"
  }, "Your enquiry"), /*#__PURE__*/React.createElement(Photo, {
    name: "room-twin",
    alt: "Superior room",
    height: 120,
    radius: "var(--radius-sm)",
    style: {
      margin: "var(--space-5) 0"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-4)",
      fontSize: "var(--text-sm)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--text-secondary)"
    }
  }, "Programme"), /*#__PURE__*/React.createElement("span", null, "Detox")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--text-secondary)"
    }
  }, "Arrival"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontVariantNumeric: "tabular-nums"
    }
  }, arrival)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--text-secondary)"
    }
  }, "Nights"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontVariantNumeric: "tabular-nums"
    }
  }, nights)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--text-secondary)"
    }
  }, "Room"), /*#__PURE__*/React.createElement("span", null, "Superior \xB7 single")), /*#__PURE__*/React.createElement(Divider, {
    spacing: "var(--space-2)",
    tone: "default"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "baseline"
    }
  }, /*#__PURE__*/React.createElement("span", null, "Indicative total"), /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--weight-light) var(--text-2xl)/1 var(--font-display)",
      fontVariantNumeric: "tabular-nums"
    }
  }, "\u20B9", (16000 * Number(nights)).toLocaleString("en-IN")))), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: "var(--text-2xs)",
      color: "var(--text-muted)",
      margin: "var(--space-5) 0 0"
    }
  }, "Includes daily consultation, all prescribed therapies, diet therapy, wellness attire, transfers and taxes."), /*#__PURE__*/React.createElement(Badge, {
    tone: "outline",
    style: {
      marginTop: "var(--space-6)"
    }
  }, "Confirmed only after doctor review"))), /*#__PURE__*/React.createElement(Dialog, {
    open: confirming,
    onClose: pending ? undefined : () => setConfirming(false),
    title: "Send this to the clinical team?",
    description: "Our doctors will review your assessment and call to arrange the preliminary consultation. Your room is held meanwhile.",
    footer: pending ? /*#__PURE__*/React.createElement(Spinner, null) : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Button, {
      variant: "secondary",
      onClick: () => setConfirming(false)
    }, "Not yet"), /*#__PURE__*/React.createElement(Button, {
      onClick: submit
    }, "Yes, submit"))
  }), done ? /*#__PURE__*/React.createElement(Toast, {
    fixed: true,
    tone: "success",
    title: "Assessment received",
    message: `${arrival} · ${nights} nights held for review.`,
    onClose: () => setDone(false)
  }) : null);
}
Object.assign(window, {
  EnquiryScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/EnquiryScreen.js", error: String((e && e.message) || e) }); }

// ui_kits/website/HomeScreen.js
try { (() => {
const PROGRAMMES = [{
  name: "Stress Management",
  photo: "balcony",
  focus: "Mind",
  copy: "Doctor-led routines, therapies and rest for guests managing sustained stress, poor sleep or fatigue.",
  nights: "7–14 nights"
}, {
  name: "Detox",
  photo: "water-wall",
  focus: "Metabolic",
  copy: "Prescribed diet, supervised fasting where appropriate, and therapies that support digestion and elimination.",
  nights: "7–21 nights"
}, {
  name: "Weight Management",
  photo: "grounds",
  focus: "Metabolic",
  copy: "Prescribed meals, daily activity and therapies, with weight and vitals reviewed by a doctor each morning.",
  nights: "14–21 nights"
}, {
  name: "Diabetes Reversal",
  photo: "treatment",
  focus: "Clinical",
  copy: "Diet, activity and therapies aimed at improving blood-sugar control, with medication reviewed daily by a doctor.",
  nights: "14–28 nights"
}, {
  name: "Complete Healing",
  photo: "courtyard",
  focus: "Immersive",
  copy: "For guests managing several long-standing conditions at once, across metabolic, musculoskeletal and mental health.",
  nights: "21–28 nights"
}, {
  name: "Weekend Rejuvenation",
  photo: "lounge",
  focus: "Rest",
  copy: "A shorter stay for guests with limited time: rest, gentle therapies and prescribed meals.",
  nights: "7 nights"
}, {
  name: "Executive Wellness",
  photo: "library",
  focus: "Rest",
  copy: "A compact daily schedule for guests who need to stay partly available for work.",
  nights: "7–10 nights"
}, {
  name: "Corporate Retreats",
  photo: "dining",
  focus: "Groups",
  copy: "Group programmes for teams, with therapies and schedule planned around group size and objectives.",
  nights: "By arrangement"
}];
const THERAPIES = [["Mud Therapy", "Mineral-rich earth applied to calm inflammation and ease physical tension."], ["Yoga Therapy", "Gentle movement and breathwork adapted to the individual."], ["Hydrotherapy", "Water at controlled temperatures to move circulation."], ["Fasting Therapy", "Introduced gradually and supervised by a doctor throughout."], ["Acupuncture", "Fine needles to stimulate energy pathways and ease pain."], ["Hijama", "Traditional cupping, delivered under medical supervision."], ["Diet Therapy", "Meals prescribed to your condition, reviewed as your programme progresses."], ["Heliotherapy", "Controlled sunlight exposure, scheduled in the early morning."]];
const ROOMS = [{
  name: "Executive Suite",
  spec: "530 sq.ft · balcony",
  single: "22,000",
  double: "28,000",
  photo: "room-premium"
}, {
  name: "Premium Room",
  spec: "460 sq.ft · balcony",
  single: "18,000",
  double: "24,000",
  photo: "room-twin"
}, {
  name: "Superior Room",
  spec: "300 sq.ft · balcony",
  single: "16,000",
  double: "22,000",
  photo: "balcony"
}];
function HomeScreen({
  onNavigate
}) {
  const {
    Button,
    Icon,
    Card,
    Badge,
    Tag,
    Accordion,
    Input,
    Divider
  } = window.ShantaraDesignSystem_45bbe4;
  const [focus, setFocus] = React.useState("All");
  const shown = focus === "All" ? PROGRAMMES : PROGRAMMES.filter(p => p.focus === focus);
  return /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement("section", {
    style: {
      position: "relative",
      marginTop: "-96px",
      paddingTop: "96px"
    }
  }, /*#__PURE__*/React.createElement(Photo, {
    name: "arrival-dusk",
    alt: "Shantara at dusk",
    height: 640,
    radius: "0px",
    scrim: "bottom"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      display: "flex",
      alignItems: "flex-end"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--layout-max)",
      width: "100%",
      margin: "0 auto",
      padding: "0 var(--layout-gutter-lg) var(--space-12)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "shantara-eyebrow",
    style: {
      color: "var(--color-gold-crayola)"
    }
  }, "Kozhikode, Kerala \xB7 since 2000"), /*#__PURE__*/React.createElement("h1", {
    style: {
      font: "var(--type-display)",
      color: "var(--color-merino)",
      margin: "var(--space-5) 0 var(--space-6)",
      maxWidth: "22ch"
    }
  }, "A doctor-led naturopathy retreat in Kerala"), /*#__PURE__*/React.createElement("p", {
    style: {
      font: "var(--type-lead)",
      color: "color-mix(in srgb, var(--color-merino) 88%, transparent)",
      maxWidth: "48ch",
      margin: "0 0 var(--space-8)"
    }
  }, "Drug-free naturopathy on four hilltop acres above the Chennamangallur valley. Every stay begins with a consultation, and your programme is planned by our doctors."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "var(--space-4)"
    }
  }, /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    onClick: () => onNavigate("booking")
  }, "Enquire about a stay"), /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    variant: "inverse",
    onClick: () => onNavigate("programme"),
    endIcon: /*#__PURE__*/React.createElement(Icon, {
      name: "arrow-right",
      size: 17
    })
  }, "View programmes")))))), /*#__PURE__*/React.createElement("section", {
    style: {
      maxWidth: "var(--layout-max)",
      margin: "0 auto",
      padding: "var(--section-y) var(--layout-gutter-lg)",
      display: "grid",
      gridTemplateColumns: "0.9fr 1.1fr",
      gap: "var(--space-11)",
      alignItems: "start"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    className: "shantara-eyebrow"
  }, "Our approach"), /*#__PURE__*/React.createElement("h2", {
    style: {
      font: "var(--type-h2)",
      marginTop: "var(--space-5)",
      maxWidth: "18ch"
    }
  }, "How our doctors plan your programme")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    style: {
      font: "var(--type-lead)",
      margin: "0 0 var(--space-6)"
    }
  }, "Naturopathy treats the causes of a condition through diet, activity, therapies and rest rather than through medication."), /*#__PURE__*/React.createElement("p", {
    style: {
      color: "var(--text-secondary)",
      margin: 0
    }
  }, "Your stay begins with a consultation. Our doctors review your medical history, current medications, daily habits and goals, then write a programme of therapies, meals, activity and rest. It is reviewed every morning and adjusted as your stay progresses. Protocols need time to take effect, which is why the minimum stay is seven nights."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "var(--space-9)",
      marginTop: "var(--space-9)",
      flexWrap: "wrap"
    }
  }, [["4", "hilltop acres"], ["52", "rooms, 5 categories"], ["25,000+", "patients since 2000"], ["7", "night minimum stay"]].map(([n, l]) => /*#__PURE__*/React.createElement("div", {
    key: l
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--weight-light) var(--text-3xl)/1 var(--font-display)",
      fontVariantNumeric: "tabular-nums"
    }
  }, n), /*#__PURE__*/React.createElement("div", {
    className: "shantara-eyebrow",
    style: {
      marginTop: "var(--space-3)"
    }
  }, l)))))), /*#__PURE__*/React.createElement("section", {
    style: {
      background: "var(--surface-sunken)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--layout-max)",
      margin: "0 auto",
      padding: "var(--section-y-sm) var(--layout-gutter-lg)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "flex-end",
      gap: "var(--space-7)",
      marginBottom: "var(--space-8)"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    className: "shantara-eyebrow"
  }, "Naturopathy programmes"), /*#__PURE__*/React.createElement("h2", {
    style: {
      font: "var(--type-h2)",
      marginTop: "var(--space-4)"
    }
  }, "Eight programmes to choose from")), /*#__PURE__*/React.createElement("div", {
    style: {
      marginLeft: "auto",
      display: "flex",
      gap: "var(--space-3)",
      flexWrap: "wrap"
    }
  }, ["All", "Mind", "Metabolic", "Clinical", "Rest"].map(t => /*#__PURE__*/React.createElement(Tag, {
    key: t,
    selected: focus === t,
    onClick: () => setFocus(t)
  }, t)))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(4, 1fr)",
      gap: "var(--space-6)"
    }
  }, shown.map(p => /*#__PURE__*/React.createElement(Card, {
    key: p.name,
    interactive: true,
    padding: "md",
    onClick: () => onNavigate("programme")
  }, /*#__PURE__*/React.createElement(Photo, {
    name: p.photo,
    alt: p.name,
    height: 150,
    radius: "var(--radius-sm)",
    style: {
      marginBottom: "var(--space-4)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "var(--space-4)"
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: "outline"
  }, p.focus), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--text-2xs)",
      color: "var(--text-muted)"
    }
  }, p.nights)), /*#__PURE__*/React.createElement("h3", {
    style: {
      font: "var(--type-h4)",
      fontSize: "var(--text-lg)",
      margin: "var(--space-2) 0 var(--space-2)"
    }
  }, p.name), /*#__PURE__*/React.createElement("p", {
    style: {
      font: "var(--type-body-sm)",
      color: "var(--text-secondary)",
      margin: 0
    }
  }, p.copy)))), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: "var(--space-7)",
      fontSize: "var(--text-sm)",
      color: "var(--text-muted)",
      maxWidth: "72ch"
    }
  }, "Alongside these, Shantara runs condition-specific medical programmes across eleven categories, from metabolic and renal health to hormonal conditions. Every guest in a medical programme is under a doctor's direct care."))), /*#__PURE__*/React.createElement("section", {
    style: {
      background: "var(--color-himalaya)",
      color: "var(--text-on-inverse)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--layout-max)",
      margin: "0 auto",
      padding: "var(--section-y-sm) var(--layout-gutter-lg)",
      display: "grid",
      gridTemplateColumns: "0.85fr 1.15fr",
      gap: "var(--space-11)",
      alignItems: "start"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    className: "shantara-eyebrow",
    style: {
      color: "var(--color-gold-crayola)"
    }
  }, "Thirteen therapies"), /*#__PURE__*/React.createElement("h2", {
    style: {
      font: "var(--type-h2)",
      color: "var(--color-merino)",
      margin: "var(--space-5) 0 var(--space-6)",
      maxWidth: "22ch"
    }
  }, "Treatments and therapies your doctor may prescribe"), /*#__PURE__*/React.createElement("p", {
    style: {
      color: "color-mix(in srgb, var(--color-merino) 82%, transparent)",
      maxWidth: "40ch",
      margin: "0 0 var(--space-8)"
    }
  }, "Each therapy is prescribed as part of the programme your doctor writes for you. None of them can be booked separately."), /*#__PURE__*/React.createElement(Button, {
    variant: "accent",
    size: "lg",
    onClick: () => onNavigate("programme")
  }, "What to expect during your stay")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: "var(--space-6) var(--space-8)"
    }
  }, THERAPIES.map(([t, d]) => /*#__PURE__*/React.createElement("div", {
    key: t
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      font: "var(--type-h4)",
      fontSize: "var(--text-base)",
      color: "var(--color-merino)",
      margin: "0 0 var(--space-2)"
    }
  }, t), /*#__PURE__*/React.createElement("p", {
    style: {
      font: "var(--type-body-sm)",
      color: "color-mix(in srgb, var(--color-merino) 88%, transparent)",
      margin: 0
    }
  }, d)))))), /*#__PURE__*/React.createElement("section", {
    style: {
      maxWidth: "var(--layout-max)",
      margin: "0 auto",
      padding: "var(--section-y) var(--layout-gutter-lg)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "flex-end",
      marginBottom: "var(--space-8)"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    className: "shantara-eyebrow"
  }, "Accommodation"), /*#__PURE__*/React.createElement("h2", {
    style: {
      font: "var(--type-h2)",
      marginTop: "var(--space-4)"
    }
  }, "Rooms and tariffs")), /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    style: {
      marginLeft: "auto"
    },
    endIcon: /*#__PURE__*/React.createElement(Icon, {
      name: "arrow-right",
      size: 16
    })
  }, "View all five categories")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3, 1fr)",
      gap: "var(--space-7)"
    }
  }, ROOMS.map(r => /*#__PURE__*/React.createElement("div", {
    key: r.name
  }, /*#__PURE__*/React.createElement(Photo, {
    name: r.photo,
    alt: r.name,
    height: 240
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "baseline",
      gap: "var(--space-4)",
      marginTop: "var(--space-5)"
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      font: "var(--type-h4)",
      fontSize: "var(--text-lg)",
      margin: 0
    }
  }, r.name), /*#__PURE__*/React.createElement("span", {
    style: {
      marginLeft: "auto",
      fontSize: "var(--text-sm)",
      fontVariantNumeric: "tabular-nums"
    }
  }, "\u20B9", r.single, /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--text-muted)"
    }
  }, " / night"))), /*#__PURE__*/React.createElement("p", {
    style: {
      font: "var(--type-body-sm)",
      color: "var(--text-secondary)",
      margin: "var(--space-2) 0 0"
    }
  }, r.spec, " \xB7 double occupancy \u20B9", r.double)))), /*#__PURE__*/React.createElement(Divider, {
    spacing: "var(--space-8)"
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: "var(--text-sm)",
      color: "var(--text-secondary)",
      margin: 0,
      maxWidth: "80ch"
    }
  }, "Every tariff includes daily doctor consultation, prescribed naturopathy treatments, yoga and meditation, diet therapy, wellness attire with daily laundry, airport and railway transfers, and all applicable taxes. Rates valid to 31 December 2026.")), /*#__PURE__*/React.createElement("section", {
    style: {
      background: "var(--surface-raised)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--layout-max)",
      margin: "0 auto",
      padding: "var(--section-y-sm) var(--layout-gutter-lg)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "flex-end",
      marginBottom: "var(--space-8)"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    className: "shantara-eyebrow"
  }, "Journal"), /*#__PURE__*/React.createElement("h2", {
    style: {
      font: "var(--type-h2)",
      marginTop: "var(--space-4)"
    }
  }, "Articles from our doctors and team")), /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    style: {
      marginLeft: "auto"
    },
    onClick: () => onNavigate("journal"),
    endIcon: /*#__PURE__*/React.createElement(Icon, {
      name: "arrow-right",
      size: 16
    })
  }, "View all articles")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3, 1fr)",
      gap: "var(--space-7)"
    }
  }, [["Why seven nights is a clinical number, not a sales one", "Treatment", "corridor"], ["What a supervised fast actually feels like", "Therapy", "treatment"], ["Reading the valley: a week of monsoon light", "The property", "valley"]].map(([t, k, ph]) => /*#__PURE__*/React.createElement("a", {
    key: t,
    href: "#",
    onClick: e => {
      e.preventDefault();
      onNavigate("journal");
    },
    style: {
      textDecoration: "none",
      color: "inherit"
    }
  }, /*#__PURE__*/React.createElement(Photo, {
    name: ph,
    alt: t,
    height: 200
  }), /*#__PURE__*/React.createElement("span", {
    className: "shantara-eyebrow",
    style: {
      display: "block",
      marginTop: "var(--space-5)"
    }
  }, k), /*#__PURE__*/React.createElement("h3", {
    style: {
      font: "var(--type-h4)",
      fontSize: "var(--text-lg)",
      margin: "var(--space-3) 0 0",
      maxWidth: "24ch"
    }
  }, t), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "block",
      marginTop: "var(--space-3)",
      fontSize: "var(--text-2xs)",
      color: "var(--text-muted)"
    }
  }, "5 min read")))))), /*#__PURE__*/React.createElement("section", null, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--layout-max)",
      margin: "0 auto",
      padding: "var(--section-y-sm) var(--layout-gutter-lg)",
      display: "grid",
      gridTemplateColumns: "1fr 0.85fr",
      gap: "var(--space-11)"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", {
    style: {
      font: "var(--type-h3)",
      marginBottom: "var(--space-6)"
    }
  }, "Before you arrive"), /*#__PURE__*/React.createElement(Accordion, {
    items: [{
      title: "Why is the minimum stay seven nights?",
      content: "Naturopathy protocols need this minimum duration to take effect. It is a clinical requirement rather than a booking policy — shorter stays cannot deliver a measurable result."
    }, {
      title: "Can I leave the property during my stay?",
      content: "No, except for a genuine medical emergency and escorted by a doctor or designated team member. Treatment efficacy depends on controlled conditions: prescribed diets, structured routines and continuous monitoring."
    }, {
      title: "How do meals work?",
      content: "Meals are part of the treatment rather than a restaurant menu. Diet therapy is personalised to your condition and goals, so there is no à la carte ordering and no outside food."
    }, {
      title: "Is my booking confirmed straight away?",
      content: "Reservations are confirmed only after a mandatory preliminary consultation with our doctors. You will be asked to submit a Health Assessment Form, share relevant medical records and disclose all current medications first."
    }, {
      title: "Who can be admitted?",
      content: "Guests aged 18 to 80 with chronic, lifestyle-driven conditions manageable through naturopathy. We cannot admit critical or acute conditions requiring emergency care or continuous monitoring."
    }]
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--surface-card)",
      borderRadius: "var(--radius-card)",
      padding: "var(--space-9)",
      alignSelf: "start",
      boxShadow: "var(--shadow-sm)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "shantara-eyebrow"
  }, "Enquiries"), /*#__PURE__*/React.createElement("h3", {
    style: {
      font: "var(--type-h4)",
      margin: "var(--space-4) 0 var(--space-4)"
    }
  }, "Request a consultation"), /*#__PURE__*/React.createElement("p", {
    style: {
      font: "var(--type-body-sm)",
      color: "var(--text-secondary)",
      margin: "0 0 var(--space-6)"
    }
  }, "Send your details and our clinical team will arrange your preliminary consultation. We accept one hundred bookings a month, no more."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-5)"
    }
  }, /*#__PURE__*/React.createElement(Input, {
    label: "Full name",
    placeholder: "Your name"
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Email",
    type: "email",
    placeholder: "you@example.com"
  }), /*#__PURE__*/React.createElement(Button, {
    fullWidth: true,
    onClick: () => onNavigate("booking")
  }, "Request a consultation"))))));
}
Object.assign(window, {
  HomeScreen,
  PROGRAMMES,
  THERAPIES,
  ROOMS
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/HomeScreen.js", error: String((e && e.message) || e) }); }

// ui_kits/website/JournalScreen.js
try { (() => {
function JournalScreen({
  onNavigate
}) {
  const {
    Tabs,
    Card,
    Badge,
    Button,
    Icon,
    Divider
  } = window.ShantaraDesignSystem_45bbe4;
  const [cat, setCat] = React.useState("All");
  const posts = [{
    t: "Why seven nights is a clinical number, not a sales one",
    k: "Treatment",
    photo: "corridor",
    read: 5,
    lead: "What naturopathy protocols actually need to take effect."
  }, {
    t: "What a supervised fast actually feels like",
    k: "Therapy",
    photo: "treatment",
    read: 7,
    lead: "How a supervised fast is introduced, monitored and ended."
  }, {
    t: "Food as prescription: inside diet therapy",
    k: "Kitchen",
    photo: "dining",
    read: 4,
    lead: "How meals are prescribed, and why there is no menu."
  }, {
    t: "Reading the valley: a week of monsoon light",
    k: "The property",
    photo: "valley",
    read: 6,
    lead: "Four acres above Chennamangallur, hour by hour."
  }, {
    t: "Twenty-six years of treating the cause",
    k: "Treatment",
    photo: "library",
    read: 3,
    lead: "Dr. P.A. Kareem on drug-free practice since 2000."
  }, {
    t: "Designing rooms that ask nothing of you",
    k: "The property",
    photo: "room-premium",
    read: 5,
    lead: "Why the rooms are quiet, plain and easy to rest in."
  }];
  const shown = cat === "All" ? posts : posts.filter(p => p.k === cat);
  const [lead, ...rest] = shown;
  return /*#__PURE__*/React.createElement("main", {
    style: {
      maxWidth: "var(--layout-max)",
      margin: "0 auto",
      padding: "var(--space-9) var(--layout-gutter-lg) var(--section-y)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "shantara-eyebrow"
  }, "Journal"), /*#__PURE__*/React.createElement("h1", {
    style: {
      font: "var(--type-h1)",
      margin: "var(--space-5) 0 var(--space-8)",
      maxWidth: "26ch"
    }
  }, "Articles from our doctors and team"), /*#__PURE__*/React.createElement(Tabs, {
    items: ["All", "Treatment", "Therapy", "Kitchen", "The property"],
    value: cat,
    onChange: setCat
  }), lead ? /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => e.preventDefault(),
    style: {
      display: "grid",
      gridTemplateColumns: "1.15fr 0.85fr",
      gap: "var(--space-9)",
      alignItems: "center",
      textDecoration: "none",
      color: "inherit",
      margin: "var(--space-9) 0"
    }
  }, /*#__PURE__*/React.createElement(Photo, {
    name: lead.photo,
    alt: lead.t,
    height: 380
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Badge, {
    tone: "brand"
  }, lead.k), /*#__PURE__*/React.createElement("h2", {
    style: {
      font: "var(--type-h2)",
      fontSize: "var(--text-3xl)",
      margin: "var(--space-5) 0 var(--space-4)"
    }
  }, lead.t), /*#__PURE__*/React.createElement("p", {
    style: {
      font: "var(--type-lead)",
      color: "var(--text-secondary)",
      margin: "0 0 var(--space-6)"
    }
  }, lead.lead), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--text-2xs)",
      color: "var(--text-muted)"
    }
  }, lead.read, " min read \xB7 by the clinical team"))) : null, /*#__PURE__*/React.createElement(Divider, {
    spacing: "var(--space-2)"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3,1fr)",
      gap: "var(--space-7)",
      marginTop: "var(--space-9)"
    }
  }, rest.map(p => /*#__PURE__*/React.createElement("a", {
    key: p.t,
    href: "#",
    onClick: e => e.preventDefault(),
    style: {
      textDecoration: "none",
      color: "inherit"
    }
  }, /*#__PURE__*/React.createElement(Photo, {
    name: p.photo,
    alt: p.t,
    height: 190
  }), /*#__PURE__*/React.createElement("span", {
    className: "shantara-eyebrow",
    style: {
      display: "block",
      marginTop: "var(--space-5)"
    }
  }, p.k), /*#__PURE__*/React.createElement("h3", {
    style: {
      font: "var(--type-h4)",
      fontSize: "var(--text-lg)",
      margin: "var(--space-3) 0 var(--space-3)",
      maxWidth: "24ch"
    }
  }, p.t), /*#__PURE__*/React.createElement("p", {
    style: {
      font: "var(--type-body-sm)",
      color: "var(--text-secondary)",
      margin: 0
    }
  }, p.lead), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "block",
      marginTop: "var(--space-4)",
      fontSize: "var(--text-2xs)",
      color: "var(--text-muted)"
    }
  }, p.read, " min read")))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "center",
      marginTop: "var(--space-10)"
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    endIcon: /*#__PURE__*/React.createElement(Icon, {
      name: "arrow-down",
      size: 16
    })
  }, "Show older articles")));
}
Object.assign(window, {
  JournalScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/JournalScreen.js", error: String((e && e.message) || e) }); }

// ui_kits/website/Photo.js
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Real Shantara property photography, downscaled from the shoot supplied with the brand
   package. `src` is a filename inside assets/photos. Faces and guests are not shown
   close-up anywhere in this kit — per the handbook's guest-privacy rules. */
const PHOTO_BASE = "../../assets/photos/";
function Photo({
  name,
  alt = "",
  height = 200,
  radius = "var(--radius-media)",
  position = "center",
  scrim,
  children,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      position: "relative",
      height: typeof height === "number" ? height + "px" : height,
      borderRadius: radius,
      overflow: "hidden",
      background: "var(--color-cotton-seed)",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("img", {
    src: PHOTO_BASE + name + ".jpg",
    alt: alt,
    style: {
      position: "absolute",
      inset: 0,
      width: "100%",
      height: "100%",
      objectFit: "cover",
      objectPosition: position
    }
  }), scrim ? /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      inset: 0,
      background: scrim === "bottom" ? "var(--scrim-bottom)" : "var(--scrim-full)"
    }
  }) : null, children);
}
Object.assign(window, {
  Photo
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Photo.js", error: String((e && e.message) || e) }); }

// ui_kits/website/ProgrammeScreen.js
try { (() => {
function ProgrammeScreen({
  onNavigate
}) {
  const {
    Button,
    Badge,
    Tag,
    Radio,
    Breadcrumbs,
    Divider,
    Card,
    Icon,
    Tooltip,
    IconButton,
    Accordion
  } = window.ShantaraDesignSystem_45bbe4;
  const [len, setLen] = React.useState("14");
  const rooms = {
    7: "1,26,000",
    14: "2,52,000",
    21: "3,78,000"
  };
  return /*#__PURE__*/React.createElement("main", {
    style: {
      maxWidth: "var(--layout-max)",
      margin: "0 auto",
      padding: "var(--space-8) var(--layout-gutter-lg) var(--section-y)"
    }
  }, /*#__PURE__*/React.createElement(Breadcrumbs, {
    items: [{
      label: "Programmes",
      href: "#"
    }, {
      label: "Wellness",
      href: "#"
    }, "Detox"]
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1.25fr 0.75fr",
      gap: "var(--space-10)",
      marginTop: "var(--space-7)"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Photo, {
    name: "water-wall",
    alt: "Water wall at the therapy wing",
    height: 420
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3,1fr)",
      gap: "var(--space-4)",
      marginTop: "var(--space-4)"
    }
  }, /*#__PURE__*/React.createElement(Photo, {
    name: "treatment",
    alt: "Treatment room",
    height: 96,
    radius: "var(--radius-sm)"
  }), /*#__PURE__*/React.createElement(Photo, {
    name: "courtyard",
    alt: "Planted courtyard",
    height: 96,
    radius: "var(--radius-sm)"
  }), /*#__PURE__*/React.createElement(Photo, {
    name: "grounds",
    alt: "Grounds and walking paths",
    height: 96,
    radius: "var(--radius-sm)"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "var(--space-9)",
      maxWidth: "62ch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "shantara-eyebrow"
  }, "Naturopathy programme"), /*#__PURE__*/React.createElement("h1", {
    style: {
      font: "var(--type-h1)",
      fontSize: "var(--text-3xl)",
      margin: "var(--space-4) 0 var(--space-6)"
    }
  }, "Detox"), /*#__PURE__*/React.createElement("p", {
    style: {
      font: "var(--type-lead)",
      margin: "0 0 var(--space-6)"
    }
  }, "Prescribed meals, supervised fasting where your doctor considers it appropriate, and therapies that support digestion and elimination."), /*#__PURE__*/React.createElement("p", {
    style: {
      color: "var(--text-secondary)"
    }
  }, "Your programme is written after the preliminary consultation and reviewed by a doctor every morning. If fasting is part of it, it is introduced gradually and supervised throughout. Diet therapy runs alongside: meals are prescribed to your condition rather than chosen from a menu."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "var(--space-3)",
      marginTop: "var(--space-7)",
      flexWrap: "wrap"
    }
  }, ["Doctor-guided", "Drug-free", "Supervised fasting", "7-night minimum"].map(t => /*#__PURE__*/React.createElement(Tag, {
    key: t
  }, t))), /*#__PURE__*/React.createElement(Divider, {
    spacing: "var(--space-9)"
  }), /*#__PURE__*/React.createElement("h3", {
    style: {
      font: "var(--type-h4)",
      marginBottom: "var(--space-5)"
    }
  }, "Who it suits"), /*#__PURE__*/React.createElement("ul", {
    style: {
      margin: 0,
      paddingLeft: "1.1em",
      color: "var(--text-secondary)",
      display: "grid",
      gap: "var(--space-3)"
    }
  }, /*#__PURE__*/React.createElement("li", null, "Feeling persistently heavy, sluggish or fatigued"), /*#__PURE__*/React.createElement("li", null, "Digestive discomfort or an irregular appetite"), /*#__PURE__*/React.createElement("li", null, "Wanting a supervised reset after a long period of irregular eating, travel or sleep")), /*#__PURE__*/React.createElement("h3", {
    style: {
      font: "var(--type-h4)",
      margin: "var(--space-8) 0 var(--space-5)"
    }
  }, "What guests commonly report"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: "var(--space-4)"
    }
  }, ["Feeling lighter and more alert", "Easier digestion and clearer appetite", "Better sleep and morning energy", "Less bloating"].map(s => /*#__PURE__*/React.createElement("div", {
    key: s,
    style: {
      display: "flex",
      gap: "var(--space-3)",
      alignItems: "flex-start",
      fontSize: "var(--text-sm)"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "leaf",
    size: 16,
    color: "var(--text-brand)"
  }), /*#__PURE__*/React.createElement("span", null, s)))), /*#__PURE__*/React.createElement(Divider, {
    spacing: "var(--space-9)"
  }), /*#__PURE__*/React.createElement("h3", {
    style: {
      font: "var(--type-h4)",
      marginBottom: "var(--space-4)"
    }
  }, "What a day includes"), /*#__PURE__*/React.createElement(Accordion, {
    defaultOpen: null,
    items: [{
      title: "Morning · consultation and movement",
      content: "Vitals and a short doctor review, then yoga therapy in the hall: gentle movement and breathwork adapted to what you can manage that day."
    }, {
      title: "Midday · prescribed therapies",
      content: "Two therapy slots drawn from mud therapy, hydrotherapy, massage or acupuncture, sequenced by the clinical team rather than chosen from a list."
    }, {
      title: "Afternoon · rest and heliotherapy",
      content: "Controlled sunlight, walking on the grounds, or the library. Rest is scheduled into the day rather than left to chance."
    }, {
      title: "Evening · diet therapy and quiet",
      content: "Your prescribed meal, a mind-body session and an early night. Meals are part of the treatment, not a menu choice."
    }]
  }))), /*#__PURE__*/React.createElement("aside", {
    style: {
      position: "sticky",
      top: "104px",
      alignSelf: "start"
    }
  }, /*#__PURE__*/React.createElement(Card, {
    padding: "lg"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between"
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: "info"
  }, "Consultation required"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "var(--space-2)"
    }
  }, /*#__PURE__*/React.createElement(Tooltip, {
    label: "Save this programme"
  }, /*#__PURE__*/React.createElement(IconButton, {
    label: "Save"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "bookmark",
    size: 17
  }))), /*#__PURE__*/React.createElement(Tooltip, {
    label: "Share",
    side: "left"
  }, /*#__PURE__*/React.createElement(IconButton, {
    label: "Share"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "share-2",
    size: 17
  }))))), /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--weight-light) var(--text-3xl)/1 var(--font-display)",
      fontVariantNumeric: "tabular-nums",
      margin: "var(--space-5) 0 var(--space-2)"
    }
  }, "\u20B9", rooms[len]), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--text-2xs)",
      color: "var(--text-muted)"
    }
  }, "Superior Room, single occupancy \xB7 all treatment, meals and taxes included"), /*#__PURE__*/React.createElement(Divider, {
    spacing: "var(--space-6)"
  }), /*#__PURE__*/React.createElement("span", {
    className: "shantara-eyebrow",
    style: {
      marginBottom: "var(--space-4)",
      display: "block"
    }
  }, "Length of stay"), /*#__PURE__*/React.createElement("div", {
    role: "radiogroup",
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-3)"
    }
  }, [["7", "7 nights", "the clinical minimum"], ["14", "14 nights", "recommended for detox"], ["21", "21 nights", "for long-standing conditions"]].map(([v, l, d]) => /*#__PURE__*/React.createElement(Radio, {
    key: v,
    card: true,
    name: "len",
    value: v,
    label: l,
    description: d,
    checked: len === v,
    onChange: () => setLen(v)
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-4)",
      marginTop: "var(--space-7)"
    }
  }, /*#__PURE__*/React.createElement(Button, {
    fullWidth: true,
    size: "lg",
    onClick: () => onNavigate("booking")
  }, "Request a consultation"), /*#__PURE__*/React.createElement(Button, {
    fullWidth: true,
    variant: "secondary",
    onClick: () => onNavigate("booking")
  }, "Speak to our team")), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: "var(--text-2xs)",
      color: "var(--text-muted)",
      margin: "var(--space-6) 0 0"
    }
  }, "Your stay is confirmed only after a doctor reviews your Health Assessment Form. Tariffs valid to 31 December 2026.")))));
}
Object.assign(window, {
  ProgrammeScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/ProgrammeScreen.js", error: String((e && e.message) || e) }); }

// ui_kits/website/SiteChrome.js
try { (() => {
const NAV = [{
  label: "Programmes",
  view: "programme"
}, {
  label: "Therapies",
  view: "home"
}, {
  label: "The Property",
  view: "home"
}, {
  label: "Journal",
  view: "journal"
}];
function SiteHeader({
  view,
  onNavigate
}) {
  const {
    Button,
    IconButton,
    Icon,
    Logo,
    Divider
  } = window.ShantaraDesignSystem_45bbe4;
  const [scrolled, setScrolled] = React.useState(false);
  React.useEffect(() => {
    const el = document.getElementById("kit-scroll");
    if (!el) return;
    const onScroll = () => setScrolled(el.scrollTop > 8);
    el.addEventListener("scroll", onScroll);
    return () => el.removeEventListener("scroll", onScroll);
  }, []);
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: "sticky",
      top: 0,
      zIndex: 30,
      background: scrolled ? "color-mix(in srgb, var(--color-merino) 88%, transparent)" : "transparent",
      backdropFilter: scrolled ? "var(--blur-glass)" : "none",
      WebkitBackdropFilter: scrolled ? "var(--blur-glass)" : "none",
      borderBottom: `1px solid ${scrolled ? "var(--border-subtle)" : "transparent"}`,
      transition: "background-color var(--duration-base) var(--ease-standard), border-color var(--duration-base) var(--ease-standard)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--layout-max)",
      margin: "0 auto",
      padding: "var(--space-6) var(--layout-gutter-lg)",
      display: "flex",
      alignItems: "center",
      gap: "var(--space-9)"
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => {
      e.preventDefault();
      onNavigate("home");
    },
    style: {
      display: "block"
    }
  }, /*#__PURE__*/React.createElement(Logo, {
    mark: "full",
    tone: "dark",
    height: 40,
    assetBase: "../../assets"
  })), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "var(--space-7)"
    }
  }, NAV.map(n => /*#__PURE__*/React.createElement("a", {
    key: n.label,
    href: "#",
    onClick: e => {
      e.preventDefault();
      onNavigate(n.view);
    },
    "aria-current": view === n.view && n.view !== "home" ? "page" : undefined,
    style: {
      fontSize: "var(--text-sm)",
      letterSpacing: "var(--tracking-wide)",
      whiteSpace: "nowrap",
      textDecoration: "none",
      textDecorationLine: view === n.view && n.view !== "home" ? "underline" : "none",
      textUnderlineOffset: "5px",
      textDecorationThickness: "1px",
      color: view === n.view && n.view !== "home" ? "var(--text-primary)" : "var(--text-secondary)"
    }
  }, n.label))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginLeft: "auto",
      display: "flex",
      alignItems: "center",
      gap: "var(--space-4)"
    }
  }, /*#__PURE__*/React.createElement(IconButton, {
    label: "Search"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "search",
    size: 18
  })), /*#__PURE__*/React.createElement(IconButton, {
    label: "Call the retreat"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "phone",
    size: 18
  })), /*#__PURE__*/React.createElement(Divider, {
    orientation: "vertical",
    spacing: "var(--space-2)"
  }), /*#__PURE__*/React.createElement(Button, {
    size: "sm",
    onClick: () => onNavigate("booking")
  }, "Enquire about a stay"))));
}
function SiteFooter() {
  const {
    Logo
  } = window.ShantaraDesignSystem_45bbe4;
  const cols = [{
    title: "Programmes",
    links: ["Wellness programmes", "Medical programmes", "Therapies", "Diet therapy"]
  }, {
    title: "Stay",
    links: ["Rooms & tariffs", "Facilities", "The property", "Getting here"]
  }, {
    title: "Before you come",
    links: ["Health assessment", "Admission & eligibility", "House rules", "Cancellation policy"]
  }];
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      position: "relative",
      background: "var(--surface-inverse)",
      color: "var(--text-on-inverse)",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      position: "absolute",
      left: 0,
      right: 0,
      top: 0,
      height: 264,
      boxSizing: "border-box",
      borderBottom: "1px solid var(--pattern-rule-dark)",
      pointerEvents: "none"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      inset: 0,
      backgroundColor: "var(--pattern-ink-dark)",
      WebkitMaskImage: "url(../../assets/pattern-unit.png)",
      maskImage: "url(../../assets/pattern-unit.png)",
      WebkitMaskRepeat: "repeat",
      maskRepeat: "repeat",
      WebkitMaskSize: "132px 132px",
      maskSize: "132px 132px",
      opacity: 0.4
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      maxWidth: "var(--layout-max)",
      margin: "0 auto",
      padding: "calc(264px + var(--space-11)) var(--layout-gutter-lg) var(--space-8)",
      display: "grid",
      gridTemplateColumns: "1.4fr repeat(3, 1fr)",
      gap: "var(--space-9)"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Logo, {
    mark: "full",
    tone: "cream",
    height: 44,
    assetBase: "../../assets"
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: "var(--space-6)",
      color: "var(--color-cotton-seed)",
      fontSize: "var(--text-sm)",
      lineHeight: "var(--leading-relaxed)",
      maxWidth: "32ch"
    }
  }, "A naturopathy retreat on four hilltop acres above the Chennamangallur valley, Kozhikode. An evolution of Hygiene Nature Cure Hospital, caring for guests since 2000."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "var(--space-7)",
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-2)",
      fontSize: "var(--text-sm)",
      color: "var(--color-cotton-seed)"
    }
  }, /*#__PURE__*/React.createElement("span", null, "heal@shantara.life"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontVariantNumeric: "tabular-nums"
    }
  }, "+91 9553 600 100 \xB7 +91 9553 700 100"))), cols.map(c => /*#__PURE__*/React.createElement("div", {
    key: c.title,
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-4)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "shantara-eyebrow",
    style: {
      color: "var(--color-gold-crayola)"
    }
  }, c.title), c.links.map(l => /*#__PURE__*/React.createElement("a", {
    key: l,
    href: "#",
    onClick: e => e.preventDefault(),
    style: {
      fontSize: "var(--text-sm)",
      color: "var(--color-cotton-seed)",
      textDecoration: "none"
    }
  }, l))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      maxWidth: "var(--layout-max)",
      margin: "0 auto",
      padding: "var(--space-6) var(--layout-gutter-lg) var(--space-9)",
      borderTop: "1px solid color-mix(in srgb, var(--color-merino) 14%, transparent)",
      display: "flex",
      gap: "var(--space-7)",
      fontSize: "var(--text-2xs)",
      color: "color-mix(in srgb, var(--color-cotton-seed) 70%, transparent)"
    }
  }, /*#__PURE__*/React.createElement("span", null, "\xA9 2026 Shantara Naturopathy"), /*#__PURE__*/React.createElement("span", null, "Privacy"), /*#__PURE__*/React.createElement("span", null, "Terms"), /*#__PURE__*/React.createElement("span", {
    style: {
      marginLeft: "auto"
    }
  }, "Kozhikode \xB7 Kerala \xB7 India")));
}
Object.assign(window, {
  SiteHeader,
  SiteFooter
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/SiteChrome.js", error: String((e && e.message) || e) }); }

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Divider = __ds_scope.Divider;

__ds_ns.Icon = __ds_scope.Icon;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Logo = __ds_scope.Logo;

__ds_ns.PatternPanel = __ds_scope.PatternPanel;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.Dialog = __ds_scope.Dialog;

__ds_ns.Spinner = __ds_scope.Spinner;

__ds_ns.Toast = __ds_scope.Toast;

__ds_ns.Tooltip = __ds_scope.Tooltip;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Radio = __ds_scope.Radio;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Switch = __ds_scope.Switch;

__ds_ns.Textarea = __ds_scope.Textarea;

__ds_ns.Accordion = __ds_scope.Accordion;

__ds_ns.Breadcrumbs = __ds_scope.Breadcrumbs;

__ds_ns.Tabs = __ds_scope.Tabs;

})();
