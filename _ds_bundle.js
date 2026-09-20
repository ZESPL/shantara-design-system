/* @ds-bundle: {"format":4,"namespace":"ShantaraDesignSystem_45bbe4","components":[{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"Divider","sourcePath":"components/core/Divider.jsx"},{"name":"Icon","sourcePath":"components/core/Icon.jsx"},{"name":"IconButton","sourcePath":"components/core/IconButton.jsx"},{"name":"Logo","sourcePath":"components/core/Logo.jsx"},{"name":"PatternPanel","sourcePath":"components/core/PatternPanel.jsx"},{"name":"Tag","sourcePath":"components/core/Tag.jsx"},{"name":"Dialog","sourcePath":"components/feedback/Dialog.jsx"},{"name":"Spinner","sourcePath":"components/feedback/Spinner.jsx"},{"name":"Toast","sourcePath":"components/feedback/Toast.jsx"},{"name":"Tooltip","sourcePath":"components/feedback/Tooltip.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Radio","sourcePath":"components/forms/Radio.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Switch","sourcePath":"components/forms/Switch.jsx"},{"name":"Textarea","sourcePath":"components/forms/Textarea.jsx"},{"name":"Accordion","sourcePath":"components/navigation/Accordion.jsx"},{"name":"Breadcrumbs","sourcePath":"components/navigation/Breadcrumbs.jsx"},{"name":"Tabs","sourcePath":"components/navigation/Tabs.jsx"}],"sourceHashes":{"components/core/Badge.jsx":"fb19c27b963b","components/core/Button.jsx":"fadc38647b84","components/core/Card.jsx":"83bd31a530b9","components/core/Divider.jsx":"a024dde18521","components/core/Icon.jsx":"96f71088e126","components/core/IconButton.jsx":"3b4f9946cca0","components/core/Logo.jsx":"1b29cec98534","components/core/PatternPanel.jsx":"49039059e82a","components/core/Tag.jsx":"bf30857d1572","components/feedback/Dialog.jsx":"c766c86fc48e","components/feedback/Spinner.jsx":"eea928aeb58d","components/feedback/Toast.jsx":"f9ba0b4bf6a2","components/feedback/Tooltip.jsx":"87b2122dbf40","components/forms/Checkbox.jsx":"2cc18599252e","components/forms/Input.jsx":"680b4cb7f0d7","components/forms/Radio.jsx":"f40331f08715","components/forms/Select.jsx":"1558fc066750","components/forms/Switch.jsx":"68ad689b1b4c","components/forms/Textarea.jsx":"431669dfdbed","components/navigation/Accordion.jsx":"e3d6e9b2ff9e","components/navigation/Breadcrumbs.jsx":"06a3073446f3","components/navigation/Tabs.jsx":"41a537e9121e"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.ShantaraDesignSystem_45bbe4 = window.ShantaraDesignSystem_45bbe4 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const CSS = `
.sh-badge{display:inline-flex;align-items:center;gap:var(--space-2);height:22px;padding:0 var(--space-4);border-radius:var(--radius-pill);font-family:var(--font-body);font-size:var(--text-3xs);font-weight:var(--weight-semibold);letter-spacing:var(--tracking-eyebrow);text-transform:uppercase;background:var(--surface-raised);color:var(--text-secondary);white-space:nowrap;transition:background-color var(--duration-fast) var(--ease-standard),color var(--duration-fast) var(--ease-standard),box-shadow var(--duration-fast) var(--ease-standard)}
.sh-badge[data-tone="brand"]{background:var(--surface-brand);color:var(--text-on-brand)}
.sh-badge[data-tone="accent"]{background:var(--surface-accent);color:var(--text-on-accent)}
.sh-badge[data-tone="success"]{background:var(--status-success-soft);color:var(--status-success)}
.sh-badge[data-tone="info"]{background:var(--status-info-soft);color:var(--color-pine-tree)}
.sh-badge[data-tone="warning"]{background:var(--status-warning-soft);color:var(--status-warning)}
.sh-badge[data-tone="danger"]{background:var(--status-danger-soft);color:var(--status-danger)}
.sh-badge[data-tone="outline"]{background:transparent;box-shadow:inset 0 0 0 var(--border-width) var(--border-control);color:var(--text-secondary)}
`
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
.sh-btn[data-size="sm"]{min-height:var(--control-sm);height:auto;padding:0 var(--space-5);font-size:var(--text-xs)}
.sh-btn[data-size="md"]{min-height:var(--control-md);height:auto;padding:0 var(--space-6);font-size:var(--text-sm)}
.sh-btn[data-size="lg"]{min-height:var(--control-lg);height:auto;padding:0 var(--space-8);font-size:var(--text-base)}
.sh-btn[data-full="true"]{width:100%}
.sh-btn[data-variant="accent"]{--_bg:var(--surface-accent);--_fg:var(--text-on-accent);--_bd:var(--color-gold-800)}
.sh-btn[data-variant="secondary"]{--_bg:transparent;--_fg:var(--text-primary);--_bd:var(--border-control)}
.sh-btn[data-variant="ghost"]{--_bg:transparent;--_fg:var(--text-brand)}
.sh-btn[data-variant="inverse"]{--_bg:var(--color-merino);--_fg:var(--color-pine-tree)}
.sh-btn[data-variant="inverse"]:focus-visible{box-shadow:var(--ring-focus-inverse)}
@media (hover: hover) and (pointer: fine){
  .sh-btn[data-variant="primary"]:hover:not(:disabled){--_bg:var(--color-himalaya-800)}
  .sh-btn[data-variant="accent"]:hover:not(:disabled){--_bg:var(--color-gold-200)}
  .sh-btn[data-variant="secondary"]:hover:not(:disabled){--_bg:var(--surface-raised);--_bd:var(--border-strong)}
  .sh-btn[data-variant="ghost"]:hover:not(:disabled){--_bg:var(--surface-brand-soft)}
  .sh-btn[data-variant="inverse"]:hover:not(:disabled){--_bg:var(--color-white)}
}
`
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
.sh-card-media{display:block;width:100%;height:auto;aspect-ratio:var(--card-media-ratio);object-fit:cover;background:var(--surface-sunken)}
.sh-card[data-interactive="true"]{cursor:pointer}
.sh-card[data-interactive="true"]:active{transform:translateY(0)}
.sh-card[data-interactive="true"]:focus-visible{outline:none;box-shadow:var(--ring-focus)}
@media (hover: hover) and (pointer: fine){
  .sh-card[data-interactive="true"]:hover{box-shadow:var(--shadow-lg);transform:translateY(var(--lift-hover))}
}
`
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
  mediaHeight,
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
    style: mediaHeight != null ? {
      height: typeof mediaHeight === "number" ? mediaHeight + "px" : mediaHeight,
      aspectRatio: "auto"
    } : undefined
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
.sh-ibtn:active:not(:disabled){transform:scale(var(--press-scale))}
.sh-ibtn:focus-visible{outline:none;box-shadow:var(--ring-focus)}
.sh-ibtn:disabled{opacity:.42;cursor:not-allowed}
.sh-ibtn[data-size="sm"]{width:var(--control-sm);height:var(--control-sm)}
.sh-ibtn[data-size="md"]{width:var(--control-md);height:var(--control-md)}
.sh-ibtn[data-size="lg"]{width:var(--control-lg);height:var(--control-lg)}
.sh-ibtn[data-variant="solid"]{background:var(--surface-brand);color:var(--text-on-brand)}
.sh-ibtn[data-variant="outline"]{border-color:var(--border-control)}
.sh-ibtn[data-variant="glass"]{background:var(--glass-fill);backdrop-filter:var(--blur-glass);-webkit-backdrop-filter:var(--blur-glass)}
.sh-ibtn[data-variant="inverse"]{color:var(--color-merino)}
@media (hover: hover) and (pointer: fine){
  .sh-ibtn:hover:not(:disabled){background:var(--surface-raised)}
  .sh-ibtn[data-variant="solid"]:hover:not(:disabled){background:var(--color-himalaya-800)}
  .sh-ibtn[data-variant="inverse"]:hover:not(:disabled){background:color-mix(in srgb, var(--color-merino) 18%, transparent)}
}
`
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
.sh-tag:active:not([data-static="true"]){transform:scale(var(--press-scale))}
.sh-tag:focus-visible{outline:none;box-shadow:var(--ring-focus)}
.sh-tag[data-selected="true"]{background:var(--surface-brand);border-color:var(--surface-brand);color:var(--text-on-brand)}
.sh-tag[data-static="true"]{cursor:default}
.sh-tag-x{display:inline-grid;place-items:center;width:24px;height:24px;margin-block:0;margin-inline:-2px -4px;border:0;border-radius:var(--radius-pill);background:transparent;color:inherit;opacity:.6;cursor:pointer;padding:0;line-height:1;transition:opacity var(--duration-fast) var(--ease-standard),box-shadow var(--duration-fast) var(--ease-standard)}
.sh-tag-x:focus-visible{outline:none;box-shadow:var(--ring-focus);opacity:1}
@media (hover: hover) and (pointer: fine){
  .sh-tag:hover{background:var(--surface-raised)}
  .sh-tag[data-selected="true"]:hover{background:var(--color-himalaya-800)}
  .sh-tag-x:hover{opacity:1}
}
`
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
.sh-dlg-scrim{position:fixed;inset:0;background:var(--surface-overlay);backdrop-filter:blur(3px);display:grid;place-items:center;padding:var(--space-7);z-index:1000;opacity:1;transition:opacity var(--duration-base) var(--ease-out)}
.sh-dlg-scrim[data-phase="enter"],.sh-dlg-scrim[data-phase="exit"]{opacity:0}
.sh-dlg{position:relative;width:100%;max-width:520px;background:var(--surface-card);border-radius:var(--radius-xl);box-shadow:var(--shadow-xl);padding:var(--space-9);font-family:var(--font-body);transform-origin:center;opacity:1;transform:scale(1);transition:opacity var(--duration-slow) var(--ease-out),transform var(--duration-slow) var(--ease-out)}
.sh-dlg-scrim[data-phase="enter"] .sh-dlg,.sh-dlg-scrim[data-phase="exit"] .sh-dlg{opacity:0;transform:scale(0.96)}
.sh-dlg-scrim[data-phase="exit"] .sh-dlg{transition-duration:var(--duration-fast)}
.sh-dlg[data-size="sm"]{max-width:400px}
.sh-dlg[data-size="lg"]{max-width:720px}
.sh-dlg-title{font:var(--type-h3);margin:0;margin-inline-end:var(--space-9);margin-block-end:var(--space-4)}
.sh-dlg-desc{color:var(--text-secondary);font-size:var(--text-sm);line-height:var(--leading-relaxed);margin:0}
.sh-dlg-foot{display:flex;justify-content:flex-end;gap:var(--space-4);margin-top:var(--space-8)}
.sh-dlg-x{position:absolute;top:var(--space-6);inset-inline-end:var(--space-6);width:36px;height:36px;display:grid;place-items:center;border:0;border-radius:var(--radius-pill);background:transparent;color:var(--text-secondary);font-size:18px;cursor:pointer;transition:var(--transition-control)}
@media (hover: hover) and (pointer: fine){
  .sh-dlg-x:hover{background:var(--surface-raised);color:var(--text-primary)}
}
@media (prefers-reduced-motion: reduce){
  .sh-dlg-scrim[data-phase="enter"] .sh-dlg,.sh-dlg-scrim[data-phase="exit"] .sh-dlg{transform:none}
}
`
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
  const [shown, setShown] = React.useState(open);
  const [phase, setPhase] = React.useState(open ? "enter" : "exit");
  const shownRef = React.useRef(open);
  shownRef.current = shown;
  React.useEffect(() => {
    if (open) {
      setShown(true);
      setPhase("enter");
      let nested = 0;
      const id = requestAnimationFrame(() => {
        nested = requestAnimationFrame(() => setPhase("open"));
      });
      return () => {
        cancelAnimationFrame(id);
        cancelAnimationFrame(nested);
      };
    }
    if (!shownRef.current) return;
    setPhase("exit");
    const t = setTimeout(() => setShown(false), 180);
    return () => clearTimeout(t);
  }, [open]);
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
  if (!shown) return null;
  return /*#__PURE__*/React.createElement("div", {
    className: "sh-dlg-scrim",
    "data-phase": phase,
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
@media (prefers-reduced-motion: reduce){.sh-spinner span{animation:none;opacity:.7;transform:none}}
`
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
.sh-toast{display:flex;align-items:flex-start;gap:var(--space-4);min-width:300px;max-width:420px;padding:var(--space-5) var(--space-6);background:var(--surface-inverse);color:var(--text-on-inverse);border-radius:var(--radius-md);box-shadow:var(--shadow-lg);font-family:var(--font-body);font-size:var(--text-sm);opacity:1;transform:translateY(0);transition:opacity var(--duration-slow) var(--ease-standard),transform var(--duration-slow) var(--ease-standard)}
@starting-style{.sh-toast{opacity:0;transform:translateY(100%)}}
.sh-toast[data-tone="success"]{background:var(--color-himalaya)}
.sh-toast[data-tone="warning"]{background:var(--color-gold-crayola);color:var(--text-on-accent)}
.sh-toast[data-tone="danger"]{background:var(--status-danger);color:var(--color-merino)}
.sh-toast-body{flex:1}
.sh-toast-title{font-weight:var(--weight-medium)}
.sh-toast-msg{opacity:.82;margin-top:2px}
.sh-toast-x{border:0;background:transparent;color:inherit;opacity:.6;font-size:16px;cursor:pointer;padding:0 2px;transition:opacity var(--duration-fast) var(--ease-standard)}
@media (hover: hover) and (pointer: fine){
  .sh-toast-x:hover{opacity:1}
}
.sh-toast-region{position:fixed;bottom:var(--space-8);left:50%;transform:translateX(-50%);display:flex;flex-direction:column;gap:var(--space-4);z-index:1100;padding-bottom:env(safe-area-inset-bottom, 0px)}
@media (prefers-reduced-motion: reduce){
  .sh-toast{transform:none}
  @starting-style{.sh-toast{transform:none}}
}
`
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
.sh-tip-bubble{position:absolute;z-index:900;padding:var(--space-3) var(--space-4);background:var(--surface-inverse);color:var(--text-on-inverse);border-radius:var(--radius-xs);font-family:var(--font-body);font-size:var(--text-2xs);line-height:1.4;white-space:nowrap;pointer-events:none;opacity:0;transition:opacity 125ms var(--ease-out),transform 125ms var(--ease-out)}
.sh-tip[data-instant="true"] .sh-tip-bubble{transition-duration:0ms}
.sh-tip[data-open="true"] .sh-tip-bubble{opacity:1}
.sh-tip-bubble[data-side="top"]{bottom:calc(100% + 6px);left:50%;transform:translateX(-50%) translateY(4px) scale(0.97);transform-origin:bottom center}
.sh-tip[data-open="true"] .sh-tip-bubble[data-side="top"]{transform:translateX(-50%) translateY(0) scale(1)}
.sh-tip-bubble[data-side="bottom"]{top:calc(100% + 6px);left:50%;transform:translateX(-50%) translateY(-4px) scale(0.97);transform-origin:top center}
.sh-tip[data-open="true"] .sh-tip-bubble[data-side="bottom"]{transform:translateX(-50%) translateY(0) scale(1)}
.sh-tip-bubble[data-side="left"]{right:calc(100% + 6px);top:50%;transform:translateY(-50%) translateX(4px) scale(0.97);transform-origin:right center}
.sh-tip[data-open="true"] .sh-tip-bubble[data-side="left"]{transform:translateY(-50%) translateX(0) scale(1)}
.sh-tip-bubble[data-side="right"]{left:calc(100% + 6px);top:50%;transform:translateY(-50%) translateX(-4px) scale(0.97);transform-origin:left center}
.sh-tip[data-open="true"] .sh-tip-bubble[data-side="right"]{transform:translateY(-50%) translateX(0) scale(1)}
.sh-tip-bubble[data-side="start"]{inset-inline-end:calc(100% + 6px);top:50%;transform:translateY(-50%) scale(0.97);transform-origin:var(--tip-logical-origin, right center)}
.sh-tip[data-open="true"] .sh-tip-bubble[data-side="start"]{transform:translateY(-50%) scale(1)}
.sh-tip-bubble[data-side="end"]{inset-inline-start:calc(100% + 6px);top:50%;transform:translateY(-50%) scale(0.97);transform-origin:var(--tip-logical-origin, left center)}
.sh-tip[data-open="true"] .sh-tip-bubble[data-side="end"]{transform:translateY(-50%) scale(1)}
[dir="rtl"] .sh-tip-bubble[data-side="start"]{--tip-logical-origin:left center}
[dir="rtl"] .sh-tip-bubble[data-side="end"]{--tip-logical-origin:right center}
@media (prefers-reduced-motion: reduce){
  .sh-tip-bubble{transform:none !important}
}
`
function ensure() {
  if (typeof document === "undefined" || document.getElementById("sh-tip-css")) return;
  const el = document.createElement("style");
  el.id = "sh-tip-css";
  el.textContent = CSS;
  document.head.appendChild(el);
}
let tipSeq = 0;
let lastTipAt = 0;
const TIP_RECENT_MS = 400;
const TIP_DELAY_MS = 280;
function Tooltip({
  label,
  side = "top",
  children,
  style,
  ...rest
}) {
  ensure();
  const [open, setOpen] = React.useState(false);
  const [instant, setInstant] = React.useState(false);
  const uid = React.useMemo(() => "sh-tip-" + ++tipSeq, []);
  const delayRef = React.useRef(0);
  const show = () => {
    clearTimeout(delayRef.current);
    const now = Date.now();
    const skip = now - lastTipAt < TIP_RECENT_MS;
    setInstant(skip);
    if (skip) {
      setOpen(true);
      lastTipAt = now;
      return;
    }
    delayRef.current = setTimeout(() => {
      setOpen(true);
      lastTipAt = Date.now();
    }, TIP_DELAY_MS);
  };
  const hide = () => {
    clearTimeout(delayRef.current);
    if (open) lastTipAt = Date.now();
    setOpen(false);
  };
  React.useEffect(() => () => clearTimeout(delayRef.current), []);
  /* 1.4.13 Content on hover or focus: dismissible without moving the pointer. */
  React.useEffect(() => {
    if (!open) return;
    const onKey = e => {
      if (e.key === "Escape") hide();
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);
  return /*#__PURE__*/React.createElement("span", _extends({
    className: "sh-tip",
    "data-open": String(open),
    "data-instant": String(instant),
    "aria-describedby": uid,
    onMouseEnter: show,
    onMouseLeave: hide,
    onFocus: show,
    onBlur: hide,
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
.sh-check:active .sh-check-box{transform:scale(var(--press-scale))}
@media (hover: hover) and (pointer: fine){
  .sh-check:hover .sh-check-box{border-color:var(--border-strong)}
}
.sh-check input:focus-visible + .sh-check-box{box-shadow:var(--ring-focus)}
.sh-check input:checked + .sh-check-box{background:var(--surface-brand);border-color:var(--surface-brand)}
.sh-check input:disabled ~ *{opacity:.45}
.sh-check-tick{width:11px;height:6px;border-left:1.5px solid var(--color-merino);border-bottom:1.5px solid var(--color-merino);transform:translateY(-1px) rotate(-45deg) scale(.6);opacity:0;transition:opacity var(--duration-fast) var(--ease-out),transform var(--duration-fast) var(--ease-out)}
.sh-check input:checked + .sh-check-box .sh-check-tick{opacity:1;transform:translateY(-1px) rotate(-45deg) scale(1)}
.sh-check-dash{width:10px;height:1.5px;background:var(--color-merino);opacity:0;transition:opacity var(--duration-fast) var(--ease-standard)}
.sh-check input:indeterminate + .sh-check-box{background:var(--surface-brand);border-color:var(--surface-brand)}
.sh-check input:indeterminate + .sh-check-box .sh-check-dash{opacity:1}
.sh-check input:indeterminate + .sh-check-box .sh-check-tick{opacity:0}
.sh-check-desc{display:block;color:var(--text-muted);font-size:var(--text-xs);margin-top:2px}
`
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
.sh-field-hint{font-size:var(--text-xs);color:var(--text-muted)}
.sh-field-error{font-size:var(--text-xs);color:var(--status-danger);animation:sh-enter-up var(--duration-base) var(--ease-out)}
.sh-input-wrap{display:flex;align-items:center;gap:var(--space-3);height:var(--control-md);padding:0 var(--space-5);background:var(--surface-card);border:var(--border-width) solid var(--border-control);border-radius:var(--radius-input);color:var(--text-primary);transition:var(--transition-control)}
.sh-input-wrap:focus-within{border-color:var(--border-focus);box-shadow:0 0 0 3px var(--surface-brand-soft)}
@media (hover: hover) and (pointer: fine){
  .sh-input-wrap:hover{border-color:var(--border-strong)}
}
.sh-input-wrap[data-invalid="true"]{border-color:var(--status-danger)}
.sh-input-wrap[data-size="lg"]{height:var(--control-lg);padding:0 var(--space-6)}
.sh-input-wrap[data-size="sm"]{height:var(--control-sm)}
.sh-input-wrap[data-disabled="true"]{background:var(--surface-raised);opacity:.6}
.sh-input{flex:1;min-width:0;border:0;background:transparent;color:inherit;font-family:var(--font-body);font-size:var(--text-sm);outline:none}
.sh-input::placeholder{color:var(--text-muted)}
.sh-input-affix{color:var(--text-muted);display:inline-flex;align-items:center;font-size:var(--text-xs)}
`
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
.sh-radio input:focus-visible + .sh-radio-dot{box-shadow:var(--ring-focus)}
.sh-radio input:checked + .sh-radio-dot{border-color:var(--surface-brand)}
.sh-radio-dot::after{content:"";width:10px;height:10px;border-radius:var(--radius-pill);background:var(--surface-brand);opacity:0;transform:scale(0.5);transition:transform var(--duration-fast) var(--ease-out),opacity var(--duration-fast) var(--ease-out)}
.sh-radio input:checked + .sh-radio-dot::after{opacity:1;transform:scale(1)}
.sh-radio input:disabled ~ *{opacity:.45}
.sh-radio-desc{display:block;color:var(--text-muted);font-size:var(--text-xs);margin-top:2px}
.sh-radio:active .sh-radio-dot{transform:scale(var(--press-scale))}
.sh-radio-card{padding:var(--space-5);border:var(--border-width) solid var(--border-control);border-radius:var(--radius-md);background:var(--surface-card);width:100%;transition:var(--transition-control)}
.sh-radio-card:has(input:checked){border-color:var(--surface-brand);background:var(--surface-brand-soft)}
@media (hover: hover) and (pointer: fine){
  .sh-radio:hover .sh-radio-dot{border-color:var(--border-strong)}
  .sh-radio-card:hover{border-color:var(--border-strong)}
}
`
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
.sh-sel{appearance:none;width:100%;height:var(--control-md);padding-block:0;padding-inline:var(--space-5) var(--space-9);background:var(--surface-card);border:var(--border-width) solid var(--border-control);border-radius:var(--radius-input);color:var(--text-primary);font-family:var(--font-body);font-size:var(--text-sm);outline:none;cursor:pointer;transition:var(--transition-control)}
.sh-sel:focus{border-color:var(--border-focus);box-shadow:0 0 0 3px var(--surface-brand-soft)}
@media (hover: hover) and (pointer: fine){
  .sh-sel:hover{border-color:var(--border-strong)}
}
.sh-sel[data-size="lg"]{height:var(--control-lg)}
.sh-sel[data-size="sm"]{height:var(--control-sm)}
.sh-sel:disabled{background:var(--surface-raised);opacity:.6;cursor:not-allowed}
.sh-sel-caret{position:absolute;inset-inline-end:var(--space-5);width:8px;height:8px;border-inline-end:1.5px solid var(--text-secondary);border-bottom:1.5px solid var(--text-secondary);transform:translateY(-2px) rotate(45deg);pointer-events:none;transition:border-color var(--duration-fast) var(--ease-standard),transform var(--duration-fast) var(--ease-out)}
.sh-sel-box:focus-within .sh-sel-caret{border-color:var(--text-brand);transform:translateY(1px) rotate(45deg)}
`
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
.sh-switch-track{position:relative;flex:0 0 auto;width:44px;height:26px;border-radius:var(--radius-pill);background:var(--color-cotton-seed);transition:background-color var(--duration-base) var(--ease-out),box-shadow var(--duration-base) var(--ease-out)}
.sh-switch-knob{position:absolute;inset-block-start:3px;inset-inline-start:3px;width:20px;height:20px;border-radius:var(--radius-pill);background:var(--color-white);box-shadow:var(--shadow-sm);transition:transform var(--duration-base) var(--ease-out)}
.sh-switch input:checked + .sh-switch-track{background:var(--surface-brand)}
@media (hover: hover) and (pointer: fine){
  .sh-switch:hover input:not(:checked):not(:disabled) + .sh-switch-track{background:var(--color-line-600)}
}
.sh-switch input:checked + .sh-switch-track .sh-switch-knob{transform:translateX(18px)}
[dir="rtl"] .sh-switch input:checked + .sh-switch-track .sh-switch-knob{transform:translateX(-18px)}
.sh-switch input:focus-visible + .sh-switch-track{box-shadow:var(--ring-focus)}
.sh-switch input:disabled ~ *{opacity:.45}
.sh-switch[data-reverse="true"]{flex-direction:row-reverse;justify-content:space-between;width:100%}
`
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
.sh-ta:focus{border-color:var(--border-focus);box-shadow:0 0 0 3px var(--surface-brand-soft)}
@media (hover: hover) and (pointer: fine){
  .sh-ta:hover{border-color:var(--border-strong)}
}
.sh-ta::placeholder{color:var(--text-muted)}
.sh-ta[aria-invalid="true"]{border-color:var(--status-danger)}
.sh-ta:disabled{background:var(--surface-raised);opacity:.6}
.sh-ta-foot{display:flex;justify-content:space-between;gap:var(--space-4)}
`
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
.sh-acc-btn{display:flex;align-items:center;justify-content:space-between;gap:var(--space-5);width:100%;padding:var(--space-6) 0;border:0;background:transparent;text-align:start;font:var(--type-h4);font-size:var(--text-lg);color:var(--text-primary);cursor:pointer;transition:color var(--duration-fast) var(--ease-standard)}
.sh-acc-btn:focus-visible{outline:none;box-shadow:var(--ring-focus);border-radius:var(--radius-xs)}
@media (hover: hover) and (pointer: fine){
  .sh-acc-btn:hover{color:var(--text-brand)}
}
.sh-acc-sign{position:relative;flex:0 0 auto;width:14px;height:14px}
.sh-acc-sign::before,.sh-acc-sign::after{content:"";position:absolute;background:var(--text-secondary);transition:transform var(--duration-base) var(--ease-out), opacity var(--duration-base) var(--ease-out)}
.sh-acc-sign::before{top:6px;left:0;width:14px;height:1.5px}
.sh-acc-sign::after{left:6px;top:0;width:1.5px;height:14px}
.sh-acc-item[data-open="true"] .sh-acc-sign::after{transform:rotate(90deg);opacity:0}
.sh-acc-panel{display:grid;grid-template-rows:0fr;transition:grid-template-rows var(--duration-base) var(--ease-out)}
.sh-acc-item[data-open="true"] .sh-acc-panel{grid-template-rows:1fr}
.sh-acc-clip{overflow:hidden;min-height:0}
.sh-acc-inner{padding-block:0 var(--space-7);padding-inline:0 var(--space-9);color:var(--text-secondary);font-size:var(--text-sm);line-height:var(--leading-relaxed)}
`
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
      "aria-hidden": !on,
      inert: on ? undefined : true
    }, /*#__PURE__*/React.createElement("div", {
      className: "sh-acc-clip"
    }, /*#__PURE__*/React.createElement("div", {
      className: "sh-acc-inner"
    }, it.content))));
  }));
}
Object.assign(__ds_scope, { Accordion });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Accordion.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Breadcrumbs.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const CSS = `
.sh-bc{display:flex;align-items:center;gap:var(--space-4);font-family:var(--font-body);font-size:var(--text-xs);color:var(--text-muted)}
.sh-bc-link{color:inherit;text-decoration:none;transition:color var(--duration-fast) var(--ease-standard)}
.sh-bc-link:focus-visible{outline:none;box-shadow:var(--ring-focus);border-radius:var(--radius-xs)}
@media (hover: hover) and (pointer: fine){
  .sh-bc-link:hover{color:var(--text-primary);text-decoration:underline;text-underline-offset:3px;text-decoration-color:var(--border-default)}
}
.sh-bc-current{color:var(--text-primary)}
.sh-bc-sep{opacity:.5}
`;
function ensure() {
  if (typeof document === "undefined" || document.getElementById("sh-bc-css")) return;
  const el = document.createElement("style");
  el.id = "sh-bc-css";
  el.textContent = CSS;
  document.head.appendChild(el);
}
function Breadcrumbs({
  items = [],
  separator = "/",
  style,
  "aria-label": ariaLabel = "Breadcrumb",
  ...rest
}) {
  ensure();
  return /*#__PURE__*/React.createElement("nav", _extends({
    className: "sh-bc",
    "aria-label": ariaLabel,
    style: style
  }, rest), items.map((it, i) => {
    const last = i === items.length - 1;
    const label = typeof it === "string" ? it : it.label;
    const href = typeof it === "string" ? undefined : it.href;
    return /*#__PURE__*/React.createElement(React.Fragment, {
      key: label + i
    }, last || !href ? /*#__PURE__*/React.createElement("span", {
      className: last ? "sh-bc-current" : undefined,
      "aria-current": last ? "page" : undefined
    }, label) : /*#__PURE__*/React.createElement("a", {
      className: "sh-bc-link",
      href: href
    }, label), last ? null : /*#__PURE__*/React.createElement("span", {
      className: "sh-bc-sep",
      "aria-hidden": "true"
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
.sh-tab{position:relative;appearance:none;border:0;background:transparent;padding:var(--space-4) 0;min-height:32px;font-size:var(--text-sm);font-weight:var(--weight-regular);color:var(--text-secondary);cursor:pointer;transition:color var(--duration-fast) var(--ease-standard),background-color var(--duration-fast) var(--ease-standard),box-shadow var(--duration-fast) var(--ease-standard),transform var(--duration-fast) var(--ease-standard)}
.sh-tab:active{transform:scale(var(--press-scale))}
@media (hover: hover) and (pointer: fine){
  .sh-tab:hover{color:var(--text-primary)}
}
.sh-tab:focus-visible{outline:none;box-shadow:var(--ring-focus);border-radius:var(--radius-xs)}
.sh-tab::after{content:"";position:absolute;inset-inline:0;bottom:-1px;height:1.5px;background:var(--surface-brand);transform:scaleX(0);transform-origin:left center;transition:transform var(--duration-base) var(--ease-out)}
[dir="rtl"] .sh-tab::after{transform-origin:right center}
.sh-tab[aria-selected="true"]{color:var(--text-primary);font-weight:var(--weight-medium)}
.sh-tab[aria-selected="true"]::after{transform:scaleX(1)}
.sh-tabs[data-variant="pill"]{border-bottom:0;gap:var(--space-2);background:var(--surface-raised);padding:var(--space-2);border-radius:var(--radius-pill);display:inline-flex}
.sh-tabs[data-variant="pill"] .sh-tab{padding:0 var(--space-6);height:34px;border-radius:var(--radius-pill)}
.sh-tabs[data-variant="pill"] .sh-tab::after{display:none}
.sh-tabs[data-variant="pill"] .sh-tab[aria-selected="true"]{background:var(--surface-card);box-shadow:var(--shadow-sm)}
`
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

// components/navigation/LanguageSelector.jsx
try { (() => {
function LanguageSelector({
  locale,
  pageTranslations,
  rest = "",
  onSelect,
  compact = true,
  label,
  options: optionsProp,
  style,
  ...restProps
}) {
  const api = typeof window !== "undefined" ? window.ShantaraLocales : null;
  const i18n = (typeof window !== "undefined" && window.ShantaraI18n) || { t: (s) => s };
  const t = i18n.t || ((s) => s);
  const current = (api && api.localeRecord(locale)) || { code: "en", compact: "EN", nativeName: "English" };
  const options = optionsProp || (api ? api.languageSelectorOptions({ currentLocale: current.code, pageTranslations, rest }) : []);
  const [open, setOpen] = React.useState(false);
  const root = React.useRef(null);
  React.useEffect(() => {
    if (!open) return undefined;
    const onDoc = (event) => {
      if (root.current && !root.current.contains(event.target)) setOpen(false);
    };
    const onKey = (event) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.addEventListener("mousedown", onDoc);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDoc);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);
  if (!options.length) return null;
  const accessibleName = label || t("Language");
  const triggerLabel = compact ? current.compact : current.nativeName;
  return React.createElement("div", { ref: root, className: "sh-lang", style, ...restProps },
    React.createElement("button", {
      type: "button",
      className: "sh-lang-btn",
      "aria-label": accessibleName + ": " + current.nativeName,
      "aria-haspopup": "listbox",
      "aria-expanded": open,
      onClick: () => setOpen((value) => !value)
    }, triggerLabel),
    open ? React.createElement("ul", { className: "sh-lang-list", role: "listbox", "aria-label": t("Choose language") },
      options.map((opt) => {
        const selected = opt.current;
        const disabled = opt.available === false;
        const Tag = opt.href && !disabled && !onSelect ? "a" : "button";
        return React.createElement("li", { key: opt.code, role: "none" },
          React.createElement(Tag, {
            className: "sh-lang-opt",
            role: "option",
            lang: opt.code,
            href: Tag === "a" ? opt.href : undefined,
            hrefLang: Tag === "a" ? opt.code : undefined,
            "aria-selected": selected,
            "aria-current": selected ? "true" : undefined,
            "aria-disabled": disabled || undefined,
            disabled: Tag === "button" ? disabled : undefined,
            type: Tag === "button" ? "button" : undefined,
            onClick: (event) => {
              if (disabled) { event.preventDefault(); return; }
              setOpen(false);
              if (onSelect) { event.preventDefault(); onSelect(opt.code, opt); }
            }
          }, opt.nativeName)
        );
      })
    ) : null
  );
}
Object.assign(__ds_scope, { LanguageSelector });
__ds_ns.LanguageSelector = LanguageSelector;
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/LanguageSelector.jsx", error: String((e && e.message) || e) }); }

})();
