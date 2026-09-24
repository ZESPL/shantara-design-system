/* @ds-bundle: {"format":4,"namespace":"ShantaraDesignSystem_45bbe4","components":[{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"Divider","sourcePath":"components/core/Divider.jsx"},{"name":"Icon","sourcePath":"components/core/Icon.jsx"},{"name":"IconButton","sourcePath":"components/core/IconButton.jsx"},{"name":"Logo","sourcePath":"components/core/Logo.jsx"},{"name":"PatternPanel","sourcePath":"components/core/PatternPanel.jsx"},{"name":"Tag","sourcePath":"components/core/Tag.jsx"},{"name":"Dialog","sourcePath":"components/feedback/Dialog.jsx"},{"name":"Spinner","sourcePath":"components/feedback/Spinner.jsx"},{"name":"Toast","sourcePath":"components/feedback/Toast.jsx"},{"name":"Tooltip","sourcePath":"components/feedback/Tooltip.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Radio","sourcePath":"components/forms/Radio.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Switch","sourcePath":"components/forms/Switch.jsx"},{"name":"Textarea","sourcePath":"components/forms/Textarea.jsx"},{"name":"Accordion","sourcePath":"components/navigation/Accordion.jsx"},{"name":"Breadcrumbs","sourcePath":"components/navigation/Breadcrumbs.jsx"},{"name":"LanguageSelector","sourcePath":"components/navigation/LanguageSelector.jsx"},{"name":"Tabs","sourcePath":"components/navigation/Tabs.jsx"},{"name":"Eyebrow","sourcePath":"components/editorial/Eyebrow.jsx"},{"name":"GroupedList","sourcePath":"components/editorial/GroupedList.jsx"},{"name":"Media","sourcePath":"components/editorial/Media.jsx"},{"name":"NumberedSteps","sourcePath":"components/editorial/NumberedSteps.jsx"},{"name":"Numeral","sourcePath":"components/editorial/Numeral.jsx"},{"name":"PlainList","sourcePath":"components/editorial/PlainList.jsx"},{"name":"PortraitFrame","sourcePath":"components/editorial/PortraitFrame.jsx"},{"name":"QuoteBlock","sourcePath":"components/editorial/QuoteBlock.jsx"},{"name":"SpecTable","sourcePath":"components/editorial/SpecTable.jsx"},{"name":"Statement","sourcePath":"components/editorial/Statement.jsx"},{"name":"TextLink","sourcePath":"components/editorial/TextLink.jsx"},{"name":"Tile","sourcePath":"components/editorial/Tile.jsx"},{"name":"TimeTable","sourcePath":"components/editorial/TimeTable.jsx"},{"name":"BandStatement","sourcePath":"components/sections/BandStatement.jsx"},{"name":"ClosingCTA","sourcePath":"components/sections/ClosingCTA.jsx"},{"name":"FormSplit","sourcePath":"components/sections/FormSplit.jsx"},{"name":"HeroFullBleed","sourcePath":"components/sections/HeroFullBleed.jsx"},{"name":"HeroStatement","sourcePath":"components/sections/HeroStatement.jsx"},{"name":"IndexList","sourcePath":"components/sections/IndexList.jsx"},{"name":"NumeralsSplit","sourcePath":"components/sections/NumeralsSplit.jsx"},{"name":"PanoramaCaption","sourcePath":"components/sections/PanoramaCaption.jsx"},{"name":"PeopleRow","sourcePath":"components/sections/PeopleRow.jsx"},{"name":"Section","sourcePath":"components/sections/Section.jsx"},{"name":"SplitSection","sourcePath":"components/sections/SplitSection.jsx"},{"name":"TileGrid","sourcePath":"components/sections/TileGrid.jsx"}],"sourceHashes":{"components/core/Badge.jsx":"4c091fbe0d3b","components/core/Button.jsx":"ccbb8e62496a","components/core/Card.jsx":"c3ac5f51d5c7","components/core/Divider.jsx":"a024dde18521","components/core/Icon.jsx":"96f71088e126","components/core/IconButton.jsx":"f7b966b11b0b","components/core/Logo.jsx":"1b29cec98534","components/core/PatternPanel.jsx":"14cafd69e5f2","components/core/Tag.jsx":"0b4b76318b5c","components/feedback/Dialog.jsx":"512c0d79f6d1","components/feedback/Spinner.jsx":"0f9568799636","components/feedback/Toast.jsx":"8d42d4bc2a68","components/feedback/Tooltip.jsx":"44d4ba5fbfba","components/forms/Checkbox.jsx":"6a215923c22a","components/forms/Input.jsx":"436a3eedc79f","components/forms/Radio.jsx":"c4f894458efa","components/forms/Select.jsx":"6e338f36a6b2","components/forms/Switch.jsx":"3cb874f879cf","components/forms/Textarea.jsx":"7a36d58cfdeb","components/navigation/Accordion.jsx":"ddca9d95100a","components/navigation/Breadcrumbs.jsx":"44a3d3ddfa08","components/navigation/LanguageSelector.jsx":"b43bdf24de69","components/navigation/Tabs.jsx":"09a29bdaebe0","components/editorial/Eyebrow.jsx":"69252124a876","components/editorial/GroupedList.jsx":"3dca175406e0","components/editorial/Media.jsx":"9e3d53718f8f","components/editorial/NumberedSteps.jsx":"5c4aaa7cc4d0","components/editorial/Numeral.jsx":"ae37b54c7766","components/editorial/PlainList.jsx":"035bff57c640","components/editorial/PortraitFrame.jsx":"e26309076320","components/editorial/QuoteBlock.jsx":"c77cb4a58867","components/editorial/SpecTable.jsx":"d717038ddfde","components/editorial/Statement.jsx":"8d738fa131fe","components/editorial/TextLink.jsx":"ac26e52447e0","components/editorial/Tile.jsx":"54d593fc8eeb","components/editorial/TimeTable.jsx":"17f200c9d612","components/sections/BandStatement.jsx":"9834d2c9dbdd","components/sections/ClosingCTA.jsx":"f8e27175dff8","components/sections/FormSplit.jsx":"e0345eb414f1","components/sections/HeroFullBleed.jsx":"06320decf846","components/sections/HeroStatement.jsx":"4e72c2afb7a7","components/sections/IndexList.jsx":"df5230516e5b","components/sections/NumeralsSplit.jsx":"d0bc9d663f42","components/sections/PanoramaCaption.jsx":"5360c4724936","components/sections/PeopleRow.jsx":"2cc545e3cc4e","components/sections/Section.jsx":"27bf2da1e0e9","components/sections/SplitSection.jsx":"33dda9a102eb","components/sections/TileGrid.jsx":"a9623545ceb3"},"inlinedExternals":[],"unexposedExports":[]} */

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
/* Three variants, one shape. Colour follows the ground (tokens/layout.css):
   on Merino/Stone the primary is Himalaya olive; inside a himalaya, pine or photo
   ground it becomes Gold with Pine ink — the brand deck's closing-slide button.
   `accent`, `ghost` and `inverse` survive as aliases for the app kit only. */
const CSS = `
.sh-btn{--_bg:var(--btn-primary-bg);--_fg:var(--btn-primary-fg);--_bd:transparent;display:inline-flex;align-items:center;justify-content:center;gap:var(--space-3);max-width:100%;font-family:var(--font-body);font-weight:var(--weight-medium);letter-spacing:var(--tracking-wide);line-height:1.2;text-align:center;text-decoration:none;white-space:nowrap;border:var(--border-width) solid var(--_bd);border-radius:var(--radius-control);background:var(--_bg);color:var(--_fg);cursor:pointer;transition:var(--transition-control)}
.sh-btn>span{min-width:0}
.sh-btn:focus-visible{outline:none;box-shadow:var(--ring-focus)}
.sh-btn:active:not(:disabled){transform:scale(var(--press-scale))}
.sh-btn:disabled{opacity:.42;cursor:not-allowed}
.sh-btn[data-size="sm"]{min-height:var(--control-sm);padding:0 var(--space-5);font-size:var(--text-xs)}
.sh-btn[data-size="md"]{min-height:var(--control-md);padding:0 var(--space-6);font-size:var(--text-sm)}
.sh-btn[data-size="lg"]{min-height:var(--control-lg);padding:0 var(--space-8);font-size:var(--text-base)}
.sh-btn[data-full="true"]{width:100%}
/* Touch: every size reaches the 44px target; long labels may wrap on narrow phones. */
@media (pointer: coarse){.sh-btn[data-size="sm"]{min-height:var(--tap-min)}}
@media (max-width:519.98px){.sh-btn{white-space:normal;padding-block:var(--space-3)}.sh-btn[data-size="lg"]{padding-inline:var(--space-7)}}
.sh-btn[data-variant="secondary"]{--_bg:transparent;--_fg:var(--text-primary);--_bd:var(--border-control)}
/* link — text with a hairline and an arrow; zero inline padding so it sits on the grid. */
.sh-btn[data-variant="link"],.sh-btn[data-variant="ghost"]{--_bg:transparent;--_fg:var(--text-link);padding-inline:0!important;min-height:var(--tap-min);border:0;gap:var(--space-3);letter-spacing:var(--tracking-wide)}
.sh-btn[data-variant="link"]>span,.sh-btn[data-variant="ghost"]>span{background:linear-gradient(currentColor,currentColor) 0 100% / 100% 1px no-repeat;padding-bottom:3px}
.sh-btn[data-variant="link"] [data-icon],.sh-btn[data-variant="ghost"] [data-icon]{transition:transform var(--duration-fast) var(--ease-out)}
.sh-btn[data-variant="link"]:active:not(:disabled),.sh-btn[data-variant="ghost"]:active:not(:disabled){transform:none}
.sh-btn[data-variant="accent"]{--_bg:var(--surface-accent);--_fg:var(--text-on-accent)}
.sh-btn[data-variant="inverse"]{--_bg:var(--color-merino);--_fg:var(--color-pine-tree)}
.sh-btn[data-variant="inverse"]:focus-visible{box-shadow:var(--ring-focus-inverse)}
@media (hover: hover) and (pointer: fine){
  .sh-btn[data-variant="primary"]:hover:not(:disabled){--_bg:var(--btn-primary-bg-hover)}
  .sh-btn[data-variant="accent"]:hover:not(:disabled){--_bg:var(--color-gold-200)}
  .sh-btn[data-variant="secondary"]:hover:not(:disabled){--_bd:var(--text-primary);--_bg:color-mix(in srgb, var(--text-primary) 6%, transparent)}
  .sh-btn[data-variant="link"]:hover:not(:disabled),.sh-btn[data-variant="ghost"]:hover:not(:disabled){--_fg:var(--text-link-hover)}
  .sh-btn[data-variant="link"]:hover:not(:disabled) [data-icon],.sh-btn[data-variant="ghost"]:hover:not(:disabled) [data-icon]{transform:translateX(3px)}
  [dir="rtl"] .sh-btn[data-variant="link"]:hover:not(:disabled) [data-icon]{transform:translateX(-3px) scaleX(-1)}
  .sh-btn[data-variant="inverse"]:hover:not(:disabled){--_bg:var(--color-white)}
}
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
  const type = Tag === "button" && !rest.type ? "button" : rest.type;
  return /*#__PURE__*/React.createElement(Tag, _extends({
    className: "sh-btn",
    "data-variant": variant,
    "data-size": size,
    "data-full": String(fullWidth),
    style: style
  }, rest, {
    type: type
  }), startIcon, children ? /*#__PURE__*/React.createElement("span", null, children) : null, endIcon);
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
.sh-card[data-pad="md"] .sh-card-body{padding:clamp(20px, 0.8vw + 17px, 28px)}
.sh-card[data-pad="lg"] .sh-card-body{padding:clamp(24px, 2vw + 16px, 40px)}
.sh-card[data-pad="none"] .sh-card-body{padding:0}
.sh-card-body{display:flex;flex-direction:column;gap:var(--space-3)}
.sh-card-media{display:block;width:100%;height:auto;aspect-ratio:var(--card-media-ratio);object-fit:cover;background:var(--surface-sunken)}
.sh-card[data-interactive="true"]{cursor:pointer}
.sh-card[data-interactive="true"]:active{transform:translateY(0)}
.sh-card[data-interactive="true"]:focus-visible{outline:none;box-shadow:var(--ring-focus)}
@media (hover: hover) and (pointer: fine){
  .sh-card[data-interactive="true"]:hover{box-shadow:var(--shadow-lg);transform:translateY(var(--lift-hover))}
}
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
  const mediaStyle = mediaHeight != null ? {
    height: typeof mediaHeight === "number" ? mediaHeight + "px" : mediaHeight,
    aspectRatio: "auto"
  } : undefined;
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
    style: mediaStyle
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
/* Responsive floor (tokens/pattern.css): the cell cannot go under 130px, so a SURFACE under
   ~880px (a container query, not the viewport) loses its band and the space it reserved goes back to the content. */
const CSS = `.sh-pp{container-type:inline-size}
@container (max-width:879.98px){.sh-pp-band{display:none}.sh-pp-body[data-pattern-reserve]{padding:0!important}}`;
function ensure() {
  if (typeof document === "undefined" || document.getElementById("sh-pp-css")) return;
  const el = document.createElement("style");
  el.id = "sh-pp-css";
  el.textContent = CSS;
  document.head.appendChild(el);
}
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
  ensure();
  const base = resolveBase();
  const vertical = edge === "right" || edge === "left" || edge === "start" || edge === "end";
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
    },
    start: {
      paddingInlineStart: size
    },
    end: {
      paddingInlineEnd: size
    }
  }[edge] : null;
  const bandBox = {
    right: {
      top: 0,
      bottom: 0,
      right: 0,
      width: size,
      borderLeft: `1px solid ${line}`
    },
    left: {
      top: 0,
      bottom: 0,
      left: 0,
      width: size,
      borderRight: `1px solid ${line}`
    },
    top: {
      left: 0,
      right: 0,
      top: 0,
      height: size,
      borderBottom: `1px solid ${line}`
    },
    bottom: {
      left: 0,
      right: 0,
      bottom: 0,
      height: size,
      borderTop: `1px solid ${line}`
    },
    start: {
      top: 0,
      bottom: 0,
      insetInlineStart: 0,
      width: size,
      borderInlineEnd: `1px solid ${line}`
    },
    end: {
      top: 0,
      bottom: 0,
      insetInlineEnd: 0,
      width: size,
      borderInlineStart: `1px solid ${line}`
    }
  }[edge] || {
    top: 0,
    bottom: 0,
    right: 0,
    width: size,
    borderLeft: `1px solid ${line}`
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    className: "sh-pp",
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
    className: "sh-pp-band",
    style: {
      position: "absolute",
      boxSizing: "border-box",
      pointerEvents: "none",
      zIndex: 0,
      ...bandBox
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
    className: "sh-pp-body",
    "data-pattern-reserve": pad ? "" : undefined,
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
  onClick,
  onKeyDown,
  ...rest
}) {
  ensure();
  const interactive = Boolean(onClick || onRemove);
  const activate = onClick ? e => {
    if (onKeyDown) onKeyDown(e);
    if (e.defaultPrevented) return;
    if (e.key === "Enter" || e.key === " " || e.key === "Spacebar") {
      e.preventDefault();
      onClick(e);
    }
  } : onKeyDown;
  return /*#__PURE__*/React.createElement("span", _extends({
    className: "sh-tag",
    "data-selected": String(selected),
    "data-static": String(!interactive),
    role: onClick ? "button" : undefined,
    tabIndex: onClick ? 0 : undefined,
    onClick: onClick,
    onKeyDown: activate
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
`;
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
.sh-radio input:focus-visible + .sh-radio-dot{box-shadow:var(--ring-focus)}
.sh-radio input:checked + .sh-radio-dot{border-color:var(--surface-brand)}
.sh-radio-dot::after{content:"";width:10px;height:10px;border-radius:var(--radius-pill);background:var(--surface-brand);opacity:0;transform:scale(0.5);transition:transform var(--duration-fast) var(--ease-out),opacity var(--duration-fast) var(--ease-out)}
.sh-radio input:checked + .sh-radio-dot::after{opacity:1;transform:scale(1)}
.sh-radio input:disabled ~ *{opacity:.45}
.sh-radio-desc{display:block;color:var(--text-muted);font-size:var(--text-xs);margin-top:2px}
.sh-radio:active .sh-radio-dot{transform:scale(var(--press-scale))}
.sh-radio-card{padding:var(--space-5);border:var(--border-width) solid var(--border-control);border-radius:var(--radius-sm);background:var(--surface-card);width:100%;transition:var(--transition-control)}
.sh-radio-card:has(input:checked){border-color:var(--surface-brand);background:var(--surface-brand-soft)}
@media (hover: hover) and (pointer: fine){
  .sh-radio:hover .sh-radio-dot{border-color:var(--border-strong)}
  .sh-radio-card:hover{border-color:var(--border-strong)}
}
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
.sh-ta:focus{border-color:var(--border-focus);box-shadow:0 0 0 3px var(--surface-brand-soft)}
@media (hover: hover) and (pointer: fine){
  .sh-ta:hover{border-color:var(--border-strong)}
}
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
.sh-acc{border-top:var(--border-width) solid var(--rule-color);font-family:var(--font-body)}
.sh-acc-item{border-bottom:var(--border-width) solid var(--rule-color)}
.sh-acc-btn{display:flex;align-items:center;justify-content:space-between;gap:var(--space-5);width:100%;padding:var(--space-6) 0;border:0;background:transparent;text-align:start;min-height:var(--tap-min);font-family:inherit;font-weight:var(--weight-light);font-size:calc(clamp(18px, 0.4vw + 16.5px, 22px) * var(--text-scale));line-height:1.3;color:var(--text-primary);cursor:pointer;transition:color var(--duration-fast) var(--ease-standard)}
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
.sh-acc-inner{padding-block:0 var(--space-7);padding-inline:0 var(--space-9);color:var(--text-secondary);font-size:var(--text-base);line-height:var(--leading-body);max-width:var(--measure-body)}
@media (max-width:519.98px){.sh-acc-inner{padding-inline:0}}
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
      "aria-hidden": !on,
      inert: on ? undefined : ""
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

// components/navigation/LanguageSelector.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const CSS_ID = "sh-lang-css";
function localesApi() {
  return typeof window !== "undefined" && window.ShantaraLocales || null;
}
function i18n() {
  return typeof window !== "undefined" && window.ShantaraI18n || {
    t: s => s
  };
}
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
  const api = localesApi();
  const {
    t
  } = i18n();
  const current = api && api.localeRecord(locale) || {
    code: "en",
    compact: "EN",
    nativeName: "English"
  };
  const options = optionsProp || (api ? api.languageSelectorOptions({
    currentLocale: current.code,
    pageTranslations,
    rest
  }) : []);
  const [open, setOpen] = React.useState(false);
  const root = React.useRef(null);
  React.useEffect(() => {
    if (!open) return undefined;
    const onDoc = event => {
      if (root.current && !root.current.contains(event.target)) setOpen(false);
    };
    const onKey = event => {
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
  return /*#__PURE__*/React.createElement("div", _extends({
    ref: root,
    className: "sh-lang",
    style: style
  }, restProps), /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "sh-lang-btn",
    "aria-label": `${accessibleName}: ${current.nativeName}`,
    "aria-haspopup": "listbox",
    "aria-expanded": open,
    onClick: () => setOpen(value => !value)
  }, triggerLabel), open ? /*#__PURE__*/React.createElement("ul", {
    className: "sh-lang-list",
    role: "listbox",
    "aria-label": t("Choose language")
  }, options.map(opt => {
    const selected = opt.current;
    const disabled = opt.available === false;
    const Tag = opt.href && !disabled && !onSelect ? "a" : "button";
    return /*#__PURE__*/React.createElement("li", {
      key: opt.code,
      role: "none"
    }, /*#__PURE__*/React.createElement(Tag, {
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
      onClick: event => {
        if (disabled) {
          event.preventDefault();
          return;
        }
        setOpen(false);
        if (onSelect) {
          event.preventDefault();
          onSelect(opt.code, opt);
        }
      }
    }, opt.nativeName));
  })) : null);
}
if (typeof window !== "undefined") {
  const ns = window.ShantaraDesignSystem_45bbe4 || (window.ShantaraDesignSystem_45bbe4 = {});
  ns.LanguageSelector = LanguageSelector;
}
Object.assign(__ds_scope, { LanguageSelector });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/LanguageSelector.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Tabs.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const CSS = `
.sh-tabs{display:flex;align-items:center;gap:var(--space-7);border-bottom:var(--border-width) solid var(--border-subtle);font-family:var(--font-body);overflow-x:auto;overscroll-behavior-x:contain;scrollbar-width:none;-webkit-overflow-scrolling:touch}
.sh-tabs::-webkit-scrollbar{display:none}
@media (max-width:759.98px){.sh-tabs{gap:var(--space-6);margin-inline:calc(-1 * var(--layout-gutter));padding-inline:var(--layout-gutter);scroll-padding-inline:var(--layout-gutter)}}
.sh-tab{position:relative;flex:0 0 auto;white-space:nowrap;appearance:none;border:0;background:transparent;padding:var(--space-4) 0;min-height:var(--tap-min);font-family:inherit;font-size:var(--text-sm);font-weight:var(--weight-regular);color:var(--text-secondary);cursor:pointer;transition:color var(--duration-fast) var(--ease-standard),background-color var(--duration-fast) var(--ease-standard),box-shadow var(--duration-fast) var(--ease-standard),transform var(--duration-fast) var(--ease-standard)}
.sh-tab:active{transform:scale(var(--press-scale))}
@media (hover: hover) and (pointer: fine){
  .sh-tab:hover{color:var(--text-primary)}
}
.sh-tab:focus-visible{outline:none;box-shadow:var(--ring-focus);border-radius:var(--radius-xs)}
.sh-tab::after{content:"";position:absolute;inset-inline:0;bottom:-1px;height:1.5px;background:var(--surface-brand);transform:scaleX(0);transform-origin:left center;transition:transform var(--duration-base) var(--ease-out)}
[dir="rtl"] .sh-tab::after{transform-origin:right center}
.sh-tab[aria-selected="true"]{color:var(--text-primary);font-weight:var(--weight-medium)}
.sh-tab[aria-selected="true"]::after{transform:scaleX(1)}
.sh-tabs[data-variant="pill"]{border-bottom:0;gap:var(--space-2);background:var(--surface-raised);padding:var(--space-2);border-radius:var(--radius-pill);display:inline-flex;max-width:100%;margin-inline:0}
.sh-tabs[data-variant="pill"] .sh-tab{padding:0 var(--space-6);height:34px;border-radius:var(--radius-pill)}
.sh-tabs[data-variant="pill"] .sh-tab::after{display:none}
.sh-tabs[data-variant="pill"] .sh-tab[aria-selected="true"]{background:var(--surface-card);box-shadow:var(--shadow-sm)}
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
    const rtl = list.current && getComputedStyle(list.current).direction === "rtl";
    if (e.key === "ArrowDown" || (rtl ? e.key === "ArrowLeft" : e.key === "ArrowRight")) next = (i + 1) % keys.length;else if (e.key === "ArrowUp" || (rtl ? e.key === "ArrowRight" : e.key === "ArrowLeft")) next = (i - 1 + keys.length) % keys.length;else if (e.key === "Home") next = 0;else if (e.key === "End") next = keys.length - 1;
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
        marginInlineStart: "var(--space-3)"
      }
    }, it.count) : null);
  }));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Tabs.jsx", error: String((e && e.message) || e) }); }

// components/editorial/Eyebrow.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* The deck's small tracked label. Colour comes from the ground (--eyebrow-color):
   Himalaya on Merino/Stone, Gold on flat dark grounds, Merino on photography.
   It must add information — never repeat the heading beneath it. */
function Eyebrow({
  as: Tag = "p",
  children,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement(Tag, _extends({
    className: "shantara-eyebrow",
    style: {
      margin: 0,
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Eyebrow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/editorial/Eyebrow.jsx", error: String((e && e.message) || e) }); }

// components/editorial/GroupedList.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Small olive group labels with their items inline, separated by a middot — the deck's
   therapy slide. Groups stack on phones and sit in columns from 760px. */
const CSS = `
.sh-glist{display:grid;grid-template-columns:minmax(0,1fr);gap:var(--space-7) var(--grid-gap);margin:0}
.sh-glist-group{min-width:0}
.sh-glist-label{margin:0 0 var(--space-3)}
.sh-glist-items{margin:0;padding:0;list-style:none;display:flex;flex-wrap:wrap;font:var(--type-body);color:var(--text-primary)}
.sh-glist-items>li:not(:last-child)::after{content:"·";margin-inline:0.5em;color:var(--text-muted)}
@media (min-width:760px){.sh-glist[data-columns="2"],.sh-glist[data-columns="3"]{grid-template-columns:repeat(2,minmax(0,1fr))}}
@media (min-width:1000px){.sh-glist[data-columns="3"]{grid-template-columns:repeat(3,minmax(0,1fr))}}
`;
function ensure() {
  if (typeof document === "undefined" || document.getElementById("sh-glist-css")) return;
  const el = document.createElement("style");
  el.id = "sh-glist-css";
  el.textContent = CSS;
  document.head.appendChild(el);
}
function GroupedList({
  groups = [],
  columns = 1,
  style,
  ...rest
}) {
  ensure();
  return /*#__PURE__*/React.createElement("div", _extends({
    className: "sh-glist",
    "data-columns": String(columns),
    style: style
  }, rest), groups.map(g => /*#__PURE__*/React.createElement("div", {
    className: "sh-glist-group",
    key: g.label
  }, /*#__PURE__*/React.createElement("p", {
    className: "shantara-eyebrow sh-glist-label"
  }, g.label), /*#__PURE__*/React.createElement("ul", {
    className: "sh-glist-items"
  }, g.items.map(it => /*#__PURE__*/React.createElement("li", {
    key: it
  }, it))))));
}
Object.assign(__ds_scope, { GroupedList });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/editorial/GroupedList.jsx", error: String((e && e.message) || e) }); }

// components/editorial/Media.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Every photograph on the website goes through Media: square-cut (--radius-media: 0),
   object-fit cover, lazy unless it is the LCP image, optional scrim for type on top.
   `ratio` can change under 760px with `mobileRatio`, so a 21:9 panorama becomes a
   readable 4:3 on a phone instead of a sliver. `ratio="fill"` fills a positioned parent
   (heroes, bleeding split halves). */
const RATIO = {
  "1:1": "1 / 1",
  "4:3": "var(--media-ratio)",
  "3:2": "3 / 2",
  "16:9": "var(--media-ratio-wide)",
  "4:5": "var(--media-ratio-portrait)",
  "3:4": "var(--media-ratio-tall)",
  "21:9": "var(--media-ratio-panorama)"
};
const SCRIM = {
  hero: "var(--scrim-hero)",
  bottom: "var(--scrim-bottom)",
  top: "var(--scrim-top)",
  full: "var(--scrim-full)"
};
const CSS = `
.sh-media{position:relative;display:block;margin:0;overflow:hidden;border-radius:var(--radius-media);background:var(--color-cotton-seed);aspect-ratio:var(--_r,var(--media-ratio))}
.sh-media[data-ratio="fill"]{position:absolute;inset:0;aspect-ratio:auto;height:100%}
.sh-media>img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;object-position:var(--_pos,center)}
.sh-media-scrim{position:absolute;inset:0;pointer-events:none}
.sh-media-over{position:absolute;inset:0}
@media (max-width:759.98px){
  .sh-media[data-mobile-ratio]{aspect-ratio:var(--_rm)}
  .sh-media[data-mobile-pos]>img{object-position:var(--_posm)}
}
`;
function ensure() {
  if (typeof document === "undefined" || document.getElementById("sh-media-css")) return;
  const el = document.createElement("style");
  el.id = "sh-media-css";
  el.textContent = CSS;
  document.head.appendChild(el);
}
function Media({
  src,
  alt = "",
  ratio = "4:3",
  mobileRatio,
  position = "center",
  mobilePosition,
  priority = false,
  sizes = "100vw",
  srcSet,
  scrim,
  children,
  className,
  style,
  ...rest
}) {
  ensure();
  const vars = {};
  if (ratio !== "fill") vars["--_r"] = RATIO[ratio] || ratio;
  if (mobileRatio) vars["--_rm"] = RATIO[mobileRatio] || mobileRatio;
  vars["--_pos"] = position;
  if (mobilePosition) vars["--_posm"] = mobilePosition;
  return /*#__PURE__*/React.createElement("figure", _extends({
    className: "sh-media" + (className ? " " + className : ""),
    "data-ratio": ratio === "fill" ? "fill" : undefined,
    "data-mobile-ratio": mobileRatio ? "" : undefined,
    "data-mobile-pos": mobilePosition ? "" : undefined,
    style: {
      ...vars,
      ...style
    }
  }, rest), src ? /*#__PURE__*/React.createElement("img", {
    src: src,
    srcSet: srcSet,
    sizes: srcSet ? sizes : undefined,
    alt: alt,
    loading: priority ? "eager" : "lazy",
    decoding: priority ? "sync" : "async",
    fetchpriority: priority ? "high" : undefined
  }) : null, scrim ? /*#__PURE__*/React.createElement("span", {
    className: "sh-media-scrim",
    "aria-hidden": "true",
    style: {
      background: SCRIM[scrim] || scrim
    }
  }) : null, children ? /*#__PURE__*/React.createElement("div", {
    className: "sh-media-over"
  }, children) : null);
}
Object.assign(__ds_scope, { Media });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/editorial/Media.jsx", error: String((e && e.message) || e) }); }

// components/editorial/NumberedSteps.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Muted 01–04 numerals, a Medium item title and one line — the deck's process slide.
   One column on phones, two from 760px, `columns` from 1000px. */
const CSS = `
.sh-steps{list-style:none;margin:0;padding:0;display:grid;grid-template-columns:minmax(0,1fr);gap:var(--space-8) var(--grid-gap);counter-reset:none}
.sh-step{display:grid;grid-template-columns:3ch minmax(0,1fr);gap:var(--space-5);align-items:baseline;padding-top:var(--space-5);border-top:var(--border-width) solid var(--rule-color)}
.sh-step-n{font:var(--weight-light) var(--text-lg)/1 var(--font-display);color:var(--text-brand);font-variant-numeric:tabular-nums}
.sh-step-title{margin:0;font:var(--type-item);color:var(--text-primary)}
.sh-step-text{margin:var(--space-3) 0 0;font:var(--type-body-sm);color:var(--text-secondary);max-width:48ch}
.sh-steps[data-rules="false"] .sh-step{border-top:0;padding-top:0}
@media (min-width:760px){.sh-steps[data-columns="2"],.sh-steps[data-columns="3"],.sh-steps[data-columns="4"]{grid-template-columns:repeat(2,minmax(0,1fr))}}
@media (min-width:1000px){.sh-steps[data-columns="3"]{grid-template-columns:repeat(3,minmax(0,1fr))}.sh-steps[data-columns="4"]{grid-template-columns:repeat(4,minmax(0,1fr))}.sh-steps[data-columns="4"] .sh-step{grid-template-columns:minmax(0,1fr);gap:var(--space-4)}}
`;
function ensure() {
  if (typeof document === "undefined" || document.getElementById("sh-steps-css")) return;
  const el = document.createElement("style");
  el.id = "sh-steps-css";
  el.textContent = CSS;
  document.head.appendChild(el);
}
function NumberedSteps({
  items = [],
  columns = 1,
  start = 1,
  rules = true,
  headingLevel = 3,
  style,
  ...rest
}) {
  ensure();
  const H = "h" + headingLevel;
  return /*#__PURE__*/React.createElement("ol", _extends({
    className: "sh-steps",
    "data-columns": String(columns),
    "data-rules": String(rules),
    style: style
  }, rest), items.map((item, i) => /*#__PURE__*/React.createElement("li", {
    className: "sh-step",
    key: item.title || i
  }, /*#__PURE__*/React.createElement("span", {
    className: "sh-step-n",
    "aria-hidden": "true"
  }, String(start + i).padStart(2, "0")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(H, {
    className: "sh-step-title"
  }, item.title), item.text ? /*#__PURE__*/React.createElement("p", {
    className: "sh-step-text"
  }, item.text) : null))));
}
Object.assign(__ds_scope, { NumberedSteps });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/editorial/NumberedSteps.jsx", error: String((e && e.message) || e) }); }

// components/editorial/Numeral.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* One large Light figure with a small caption. Two or three per row, never four.
   Tabular figures so a row of numbers lines up. */
const CSS = `
.sh-num{display:flex;flex-direction:column;gap:var(--space-4);min-width:0}
.sh-num-value{font:var(--type-numeral);font-variant-numeric:tabular-nums;font-feature-settings:"tnum" 1;color:var(--text-primary);letter-spacing:-0.01em}
.sh-num-label{font:var(--type-body-sm);color:var(--text-secondary);max-width:24ch}
`;
function ensure() {
  if (typeof document === "undefined" || document.getElementById("sh-num-css")) return;
  const el = document.createElement("style");
  el.id = "sh-num-css";
  el.textContent = CSS;
  document.head.appendChild(el);
}
function Numeral({
  value,
  label,
  style,
  ...rest
}) {
  ensure();
  return /*#__PURE__*/React.createElement("div", _extends({
    className: "sh-num",
    style: style
  }, rest), /*#__PURE__*/React.createElement("span", {
    className: "sh-num-value"
  }, value), label ? /*#__PURE__*/React.createElement("span", {
    className: "sh-num-label"
  }, label) : null);
}
Object.assign(__ds_scope, { Numeral });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/editorial/Numeral.jsx", error: String((e && e.message) || e) }); }

// components/editorial/PlainList.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Plain text in columns — no bullets, no icons, no ticks (the deck's list style).
   Items are strings, or { title, text } pairs. One column under 520px. */
const CSS = `
.sh-plist{list-style:none;margin:0;padding:0;display:grid;grid-template-columns:minmax(0,1fr);gap:var(--space-5) var(--grid-gap)}
.sh-plist>li{min-width:0;font:var(--type-body);color:var(--text-primary)}
.sh-plist[data-size="sm"]>li{font:var(--type-body-sm)}
.sh-plist[data-rules="true"]>li{padding-top:var(--space-4);border-top:var(--border-width) solid var(--rule-color)}
.sh-plist-title{display:block;font:var(--type-item);font-size:var(--text-base);color:var(--text-primary)}
.sh-plist-text{display:block;margin-top:var(--space-2);font:var(--type-body-sm);color:var(--text-secondary);max-width:44ch}
@media (min-width:520px){.sh-plist[data-columns="2"],.sh-plist[data-columns="3"]{grid-template-columns:repeat(2,minmax(0,1fr))}}
@media (min-width:1000px){.sh-plist[data-columns="3"]{grid-template-columns:repeat(3,minmax(0,1fr))}}
`;
function ensure() {
  if (typeof document === "undefined" || document.getElementById("sh-plist-css")) return;
  const el = document.createElement("style");
  el.id = "sh-plist-css";
  el.textContent = CSS;
  document.head.appendChild(el);
}
function PlainList({
  items = [],
  columns = 2,
  size = "md",
  rules = false,
  style,
  ...rest
}) {
  ensure();
  return /*#__PURE__*/React.createElement("ul", _extends({
    className: "sh-plist",
    "data-columns": String(columns),
    "data-size": size,
    "data-rules": String(rules),
    style: style
  }, rest), items.map((item, i) => /*#__PURE__*/React.createElement("li", {
    key: typeof item === "string" ? item : item.title || i
  }, typeof item === "string" ? item : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("span", {
    className: "sh-plist-title"
  }, item.title), item.text ? /*#__PURE__*/React.createElement("span", {
    className: "sh-plist-text"
  }, item.text) : null))));
}
Object.assign(__ds_scope, { PlainList });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/editorial/PlainList.jsx", error: String((e && e.message) || e) }); }

// components/editorial/PortraitFrame.jsx
try { (() => {
const { Media } = __ds_scope;
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* One framing for every doctor: 4:5, neutral ground, same crop, then name (Regular),
   role (small) and an optional qualification line. With no photograph yet it shows the
   person's initials on the same ground — never a stock face, never an empty box. */
const CSS = `
.sh-portrait{display:flex;flex-direction:column;gap:var(--space-5);min-width:0;margin:0}
.sh-portrait-empty{position:relative;aspect-ratio:var(--media-ratio-portrait);background:color-mix(in srgb, var(--color-pearl-bush) 82%, var(--color-pine-tree));display:grid;place-items:center}
.sh-portrait-initials{font:var(--weight-light) calc(clamp(40px, 2vw + 32px, 64px) * var(--text-scale))/1 var(--font-display);letter-spacing:var(--tracking-wide);color:color-mix(in srgb, var(--color-pine-tree) 55%, transparent)}
.sh-portrait .sh-media{background:color-mix(in srgb, var(--color-pearl-bush) 82%, var(--color-pine-tree))}
.sh-portrait-name{margin:0;font:var(--weight-regular) var(--text-lg)/1.3 var(--font-display);color:var(--text-primary)}
.sh-portrait-role{margin:var(--space-2) 0 0;font:var(--type-body-sm);color:var(--text-secondary)}
.sh-portrait-detail{margin:var(--space-3) 0 0;font:var(--type-caption);color:var(--text-muted);max-width:36ch}
`;
function ensure() {
  if (typeof document === "undefined" || document.getElementById("sh-portrait-css")) return;
  const el = document.createElement("style");
  el.id = "sh-portrait-css";
  el.textContent = CSS;
  document.head.appendChild(el);
}

/* First and last initial: "Dr. P.A. Kareem" → "PK", "Dr. Bahja Janu" → "BJ". */
function initialsOf(name) {
  const parts = String(name || "").replace(/^(Dr\.?|Mr\.?|Ms\.?|Mrs\.?)\s+/i, "").split(/[\s.]+/).filter(Boolean);
  if (!parts.length) return "";
  const picked = parts.length > 1 ? [parts[0], parts[parts.length - 1]] : [parts[0]];
  return picked.map(p => p[0]).join("").toUpperCase();
}
function PortraitFrame({
  src,
  media,
  alt,
  name,
  role,
  detail,
  headingLevel = 3,
  position = "center top",
  style,
  ...rest
}) {
  ensure();
  const H = "h" + headingLevel;
  const frame = media || (src ? /*#__PURE__*/React.createElement(Media, {
    src: src,
    alt: alt || name,
    ratio: "4:5",
    position: position
  }) : /*#__PURE__*/React.createElement("div", {
    className: "sh-portrait-empty",
    role: "img",
    "aria-label": name
  }, /*#__PURE__*/React.createElement("span", {
    className: "sh-portrait-initials",
    "aria-hidden": "true"
  }, initialsOf(name))));
  return /*#__PURE__*/React.createElement("figure", _extends({
    className: "sh-portrait",
    style: style
  }, rest), frame, /*#__PURE__*/React.createElement("figcaption", null, /*#__PURE__*/React.createElement(H, {
    className: "sh-portrait-name"
  }, name), role ? /*#__PURE__*/React.createElement("p", {
    className: "sh-portrait-role"
  }, role) : null, detail ? /*#__PURE__*/React.createElement("p", {
    className: "sh-portrait-detail"
  }, detail) : null));
}
Object.assign(__ds_scope, { PortraitFrame });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/editorial/PortraitFrame.jsx", error: String((e && e.message) || e) }); }

// components/editorial/QuoteBlock.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* A large Light quote, left-aligned, with small labelled facts beneath (deck slides
   16–17). Only real, consented words go here — never a composed testimonial. */
const CSS = `
.sh-quote{margin:0;display:flex;flex-direction:column;gap:var(--stack-lg);min-width:0}
.sh-quote-text{margin:0;font:var(--type-statement);color:var(--text-primary);max-width:var(--measure-statement);quotes:"\\201C" "\\201D"}
.sh-quote-text::before{content:open-quote}
.sh-quote-text::after{content:close-quote}
.sh-quote-cite{font:var(--type-body-sm);font-style:normal;color:var(--text-secondary)}
.sh-quote-facts{display:grid;grid-template-columns:minmax(0,1fr);gap:var(--space-6);margin:0}
.sh-quote-facts dt{margin:0 0 var(--space-2)}
.sh-quote-facts dd{margin:0;font:var(--type-body-sm);color:var(--text-secondary);max-width:44ch}
@media (min-width:760px){.sh-quote-facts{grid-template-columns:repeat(2,minmax(0,1fr))}}
`;
function ensure() {
  if (typeof document === "undefined" || document.getElementById("sh-quote-css")) return;
  const el = document.createElement("style");
  el.id = "sh-quote-css";
  el.textContent = CSS;
  document.head.appendChild(el);
}
function QuoteBlock({
  quote,
  cite,
  facts = [],
  style,
  ...rest
}) {
  ensure();
  return /*#__PURE__*/React.createElement("figure", _extends({
    className: "sh-quote",
    style: style
  }, rest), /*#__PURE__*/React.createElement("blockquote", {
    className: "sh-quote-text"
  }, quote), cite ? /*#__PURE__*/React.createElement("figcaption", {
    className: "sh-quote-cite"
  }, cite) : null, facts.length ? /*#__PURE__*/React.createElement("dl", {
    className: "sh-quote-facts"
  }, facts.map(f => /*#__PURE__*/React.createElement("div", {
    key: f.label
  }, /*#__PURE__*/React.createElement("dt", {
    className: "shantara-eyebrow"
  }, f.label), /*#__PURE__*/React.createElement("dd", null, f.text)))) : null);
}
Object.assign(__ds_scope, { QuoteBlock });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/editorial/QuoteBlock.jsx", error: String((e && e.message) || e) }); }

// components/editorial/SpecTable.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Name, figure, attributes — no borders, the accent column in olive (deck slide 13).
   A real <table> for screen readers. Under 520px each row becomes a small block:
   the name on its own line, the other cells inline beneath it with their labels. */
const CSS = `
.sh-spec{width:100%;border-collapse:collapse;font:var(--type-body);color:var(--text-primary)}
.sh-spec th,.sh-spec td{padding:var(--space-4) 0;padding-inline-end:var(--space-7);text-align:start;vertical-align:baseline;font-weight:var(--weight-regular)}
.sh-spec th:last-child,.sh-spec td:last-child{padding-inline-end:0}
.sh-spec thead th{font:var(--type-eyebrow);letter-spacing:var(--tracking-eyebrow);text-transform:uppercase;color:var(--eyebrow-color);padding-bottom:var(--space-3)}
.sh-spec tbody th{font:var(--type-body);color:var(--text-primary)}
.sh-spec td{color:var(--text-secondary);font:var(--type-body-sm)}
.sh-spec td[data-accent="true"]{color:var(--text-brand);font:var(--type-body);font-variant-numeric:tabular-nums}
.sh-spec td[data-align="end"],.sh-spec th[data-align="end"]{text-align:end}
.sh-spec[data-rules="true"] tbody tr{border-top:var(--border-width) solid var(--rule-color)}
.sh-spec[data-size="lg"] tbody th{font:var(--type-item)}
.sh-spec[data-size="lg"] td[data-accent="true"]{font:var(--type-title);font-variant-numeric:tabular-nums}
@media (max-width:519.98px){
  .sh-spec thead{position:absolute;width:1px;height:1px;overflow:hidden;clip:rect(0 0 0 0)}
  .sh-spec,.sh-spec tbody,.sh-spec tr{display:block}
  .sh-spec tr{display:flex;flex-wrap:wrap;gap:var(--space-2) var(--space-5);padding:var(--space-5) 0}
  .sh-spec th,.sh-spec td{display:block;padding:0}
  .sh-spec tbody th{flex:1 0 100%}
  .sh-spec td[data-label]::before{content:attr(data-label) " ";color:var(--text-muted);font:var(--type-caption)}
  .sh-spec td[data-align="end"]{text-align:start}
}
`;
function ensure() {
  if (typeof document === "undefined" || document.getElementById("sh-spec-css")) return;
  const el = document.createElement("style");
  el.id = "sh-spec-css";
  el.textContent = CSS;
  document.head.appendChild(el);
}

/* columns: [{ key, label, accent?, align? }] — the first column is the row header. */
function SpecTable({
  columns = [],
  rows = [],
  caption,
  showHeader = false,
  rules = true,
  size = "md",
  style,
  ...rest
}) {
  ensure();
  const [head, ...cells] = columns;
  return /*#__PURE__*/React.createElement("table", _extends({
    className: "sh-spec",
    "data-rules": String(rules),
    "data-size": size,
    style: style
  }, rest), caption ? /*#__PURE__*/React.createElement("caption", {
    className: "sh-visually-hidden"
  }, caption) : null, /*#__PURE__*/React.createElement("thead", {
    style: showHeader ? undefined : {
      position: "absolute",
      width: 1,
      height: 1,
      overflow: "hidden",
      clip: "rect(0 0 0 0)"
    }
  }, /*#__PURE__*/React.createElement("tr", null, columns.map(c => /*#__PURE__*/React.createElement("th", {
    key: c.key,
    scope: "col",
    "data-align": c.align
  }, c.label)))), /*#__PURE__*/React.createElement("tbody", null, rows.map((r, i) => /*#__PURE__*/React.createElement("tr", {
    key: r[head.key] || i
  }, /*#__PURE__*/React.createElement("th", {
    scope: "row"
  }, r[head.key]), cells.map(c => /*#__PURE__*/React.createElement("td", {
    key: c.key,
    "data-accent": c.accent ? "true" : undefined,
    "data-align": c.align,
    "data-label": c.mobileLabel ? c.label : undefined
  }, r[c.key]))))));
}
Object.assign(__ds_scope, { SpecTable });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/editorial/SpecTable.jsx", error: String((e && e.message) || e) }); }

// components/editorial/Statement.jsx
try { (() => {
const { Eyebrow } = __ds_scope;
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Eyebrow → full-sentence headline in Light → one quiet supporting line.
   The deck's heading block. Sizes are fluid (tokens/typography.css), so the same
   block reads at 28px on a phone and 48px on a desktop without breakpoints. */
const SIZE = {
  display: "var(--type-display)",
  h1: "var(--type-h1)",
  statement: "var(--type-statement)",
  title: "var(--type-title)"
};
const CSS = `
.sh-stmt{display:flex;flex-direction:column;gap:var(--stack-md);min-width:0}
.sh-stmt-title{margin:0;max-width:var(--_m,var(--measure-statement));color:var(--text-primary)}
.sh-stmt-sub{margin:0;max-width:var(--measure-body);font:var(--type-body);color:var(--text-secondary)}
.sh-stmt[data-size="display"] .sh-stmt-sub,.sh-stmt[data-size="h1"] .sh-stmt-sub{font-size:calc(clamp(17px, 0.3vw + 16px, 20px) * var(--text-scale))}
.sh-stmt-actions{margin-top:var(--space-3)}
`;
function ensure() {
  if (typeof document === "undefined" || document.getElementById("sh-stmt-css")) return;
  const el = document.createElement("style");
  el.id = "sh-stmt-css";
  el.textContent = CSS;
  document.head.appendChild(el);
}
function Statement({
  eyebrow,
  children,
  sub,
  actions,
  as: Tag = "h2",
  size = "statement",
  measure,
  className,
  style,
  ...rest
}) {
  ensure();
  return /*#__PURE__*/React.createElement("div", _extends({
    className: "sh-stmt" + (className ? " " + className : ""),
    "data-size": size,
    style: style
  }, rest), eyebrow ? /*#__PURE__*/React.createElement(Eyebrow, null, eyebrow) : null, /*#__PURE__*/React.createElement(Tag, {
    className: "sh-stmt-title",
    style: {
      font: SIZE[size] || SIZE.statement,
      ...(measure ? {
        "--_m": measure
      } : null)
    }
  }, children), sub ? /*#__PURE__*/React.createElement("p", {
    className: "sh-stmt-sub"
  }, sub) : null, actions ? /*#__PURE__*/React.createElement("div", {
    className: "sh-actions sh-stmt-actions",
    "data-stack": "mobile"
  }, actions) : null);
}
Object.assign(__ds_scope, { Statement });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/editorial/Statement.jsx", error: String((e && e.message) || e) }); }

// components/editorial/TextLink.jsx
try { (() => {
const { Button, Icon } = __ds_scope;
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* A grid-aligned text link with a hairline and an arrow — the only "more" link on the
   website. It is Button variant="link" with the arrow built in. */
function TextLink({
  children,
  arrow = true,
  ...rest
}) {
  return /*#__PURE__*/React.createElement(Button, _extends({
    variant: "link",
    endIcon: arrow ? /*#__PURE__*/React.createElement(Icon, {
      name: "arrow-right",
      size: 16
    }) : undefined
  }, rest), children);
}
Object.assign(__ds_scope, { TextLink });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/editorial/TextLink.jsx", error: String((e && e.message) || e) }); }

// components/editorial/Tile.jsx
try { (() => {
const { Media } = __ds_scope;
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Replaces the white card on linen. Photograph and text sit directly on the ground —
   no border, shadow or radius. Hover: the photograph scales to 1.02 inside its frame and
   the title takes a hairline underline. The whole tile is one link. */
const CSS = `
.sh-tile{display:flex;flex-direction:column;gap:var(--space-5);min-width:0;color:inherit;text-decoration:none}
.sh-tile[data-href]{cursor:pointer}
.sh-tile .sh-media>img{transition:transform var(--duration-reveal) var(--ease-out)}
.sh-tile-body{display:flex;flex-direction:column;gap:var(--space-3);min-width:0}
.sh-tile-title{margin:0;font:var(--type-item);color:var(--text-primary);text-wrap:balance}
.sh-tile-title>span{background:linear-gradient(currentColor,currentColor) 0 100% / 0 1px no-repeat;transition:background-size var(--duration-base) var(--ease-out);padding-bottom:2px}
.sh-tile-text{margin:0;font:var(--type-body-sm);color:var(--text-secondary);max-width:48ch}
.sh-tile-meta{margin:0;font:var(--type-caption);color:var(--text-muted);font-variant-numeric:tabular-nums}
.sh-tile[data-size="lg"] .sh-tile-title{font:var(--type-title)}
.sh-tile[data-size="lg"] .sh-tile-text{font:var(--type-body);max-width:56ch}
.sh-tile:focus-visible{outline:none;box-shadow:var(--ring-focus)}
@media (hover: hover) and (pointer: fine){
  .sh-tile[data-href]:hover .sh-media>img{transform:scale(var(--tile-media-scale))}
  .sh-tile[data-href]:hover .sh-tile-title>span{background-size:100% 1px}
}
/* layout="row": photograph beside text from 760px — for lists of articles or rooms. */
@media (min-width:760px){
  .sh-tile[data-layout="row"]{display:grid;grid-template-columns:minmax(0,5fr) minmax(0,7fr);gap:var(--grid-gap);align-items:center}
}
`;
function ensure() {
  if (typeof document === "undefined" || document.getElementById("sh-tile-css")) return;
  const el = document.createElement("style");
  el.id = "sh-tile-css";
  el.textContent = CSS;
  document.head.appendChild(el);
}
function Tile({
  media,
  src,
  alt = "",
  ratio = "4:3",
  eyebrow,
  title,
  text,
  meta,
  href,
  onClick,
  size = "md",
  layout = "stack",
  headingLevel = 3,
  style,
  ...rest
}) {
  ensure();
  const interactive = !!(href || onClick);
  const Tag = href ? "a" : interactive ? "a" : "div";
  const H = "h" + headingLevel;
  const figure = media || (src ? /*#__PURE__*/React.createElement(Media, {
    src: src,
    alt: alt,
    ratio: ratio
  }) : null);
  return /*#__PURE__*/React.createElement(Tag, _extends({
    className: "sh-tile",
    "data-size": size,
    "data-layout": layout,
    "data-href": interactive ? "" : undefined,
    href: interactive ? href || "#" : undefined,
    onClick: onClick ? e => {
      if (!href) e.preventDefault();
      onClick(e);
    } : undefined,
    style: style
  }, rest), figure, /*#__PURE__*/React.createElement("div", {
    className: "sh-tile-body"
  }, eyebrow ? /*#__PURE__*/React.createElement("p", {
    className: "shantara-eyebrow",
    style: {
      margin: 0
    }
  }, eyebrow) : null, /*#__PURE__*/React.createElement(H, {
    className: "sh-tile-title"
  }, /*#__PURE__*/React.createElement("span", null, title)), text ? /*#__PURE__*/React.createElement("p", {
    className: "sh-tile-text"
  }, text) : null, meta ? /*#__PURE__*/React.createElement("p", {
    className: "sh-tile-meta"
  }, meta) : null));
}
Object.assign(__ds_scope, { Tile });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/editorial/Tile.jsx", error: String((e && e.message) || e) }); }

// components/editorial/TimeTable.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* A time column in olive, then a title and a line (deck slide 15). The time can be a
   clock range or a part of the day. Under 760px the time sits above the title. */
const CSS = `
.sh-time{list-style:none;margin:0;padding:0}
.sh-time-row{display:grid;grid-template-columns:minmax(0,1fr);gap:var(--space-2);padding:var(--space-5) 0;border-top:var(--border-width) solid var(--rule-color)}
.sh-time-row:last-child{border-bottom:var(--border-width) solid var(--rule-color)}
.sh-time-when{font:var(--type-body-sm);color:var(--text-brand);font-variant-numeric:tabular-nums}
.sh-time-title{margin:0;font:var(--type-item);font-size:var(--text-base);color:var(--text-primary)}
.sh-time-text{margin:var(--space-2) 0 0;font:var(--type-body-sm);color:var(--text-secondary);max-width:56ch}
@media (min-width:760px){.sh-time-row{grid-template-columns:minmax(9rem,2fr) minmax(0,5fr);gap:var(--grid-gap);align-items:baseline}}
`;
function ensure() {
  if (typeof document === "undefined" || document.getElementById("sh-time-css")) return;
  const el = document.createElement("style");
  el.id = "sh-time-css";
  el.textContent = CSS;
  document.head.appendChild(el);
}
function TimeTable({
  rows = [],
  headingLevel = 3,
  style,
  ...rest
}) {
  ensure();
  const H = "h" + headingLevel;
  return /*#__PURE__*/React.createElement("ol", _extends({
    className: "sh-time",
    style: style
  }, rest), rows.map((r, i) => /*#__PURE__*/React.createElement("li", {
    className: "sh-time-row",
    key: r.time + i
  }, /*#__PURE__*/React.createElement("span", {
    className: "sh-time-when"
  }, r.time), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(H, {
    className: "sh-time-title"
  }, r.title), r.text ? /*#__PURE__*/React.createElement("p", {
    className: "sh-time-text"
  }, r.text) : null))));
}
Object.assign(__ds_scope, { TimeTable });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/editorial/TimeTable.jsx", error: String((e && e.message) || e) }); }

// components/sections/BandStatement.jsx
try { (() => {
const { PatternPanel } = __ds_scope;
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Deck slide 3. Solid Himalaya with the rosette band on one edge (30% of the surface,
   cell = 15cqw so it is always band/2 and never under 130px). Gold eyebrow, Merino
   Light statement, optional plain list. One per page at most — it is the page's accent.
   Under 880px the band disappears (PatternPanel's container query). */
const CSS = `
.sh-band-body{padding-block:var(--section-y)}
/* Align the text with the page container's left edge (100cqw = the panel's width). */
.sh-band-body>.sh-container{display:flex;flex-direction:column;gap:var(--stack-lg);max-width:calc(52rem + 2 * var(--layout-gutter));margin-inline:max(0px, (100cqw - var(--layout-max)) / 2 - var(--layout-gutter)) 0}
`;
function ensure() {
  if (typeof document === "undefined" || document.getElementById("sh-band-css")) return;
  const el = document.createElement("style");
  el.id = "sh-band-css";
  el.textContent = CSS;
  document.head.appendChild(el);
}
function BandStatement({
  edge = "end",
  ground = "himalaya",
  children,
  style,
  ...rest
}) {
  ensure();
  return /*#__PURE__*/React.createElement(PatternPanel, _extends({
    tone: ground === "pine" ? "pine" : "olive",
    edge: edge,
    band: "30%",
    scale: "15cqw",
    "data-ground": ground,
    style: style
  }, rest), /*#__PURE__*/React.createElement("div", {
    className: "sh-band-body"
  }, /*#__PURE__*/React.createElement("div", {
    className: "sh-container"
  }, children)));
}
Object.assign(__ds_scope, { BandStatement });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/sections/BandStatement.jsx", error: String((e && e.message) || e) }); }

// components/sections/ClosingCTA.jsx
try { (() => {
const { Media, Statement } = __ds_scope;
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Deck slide 18. A full-bleed dark photograph (or the Pine ground when `src` is omitted)
   with a statement, ONE Gold primary button and contact lines in small type. Ends every
   marketing page. 72svh on desktop, content-height with a 520px floor on phones. */
const CSS = `
.sh-close{position:relative;display:flex;align-items:flex-end;min-height:clamp(520px, 72svh, 860px);overflow:hidden;isolation:isolate}
.sh-close>.sh-media{position:absolute;inset:0;z-index:-1;aspect-ratio:auto;height:100%}
.sh-close-body{width:100%;padding-block:var(--section-y)}
.sh-close-contact{display:flex;flex-wrap:wrap;gap:0 var(--space-8);margin-top:var(--stack-lg);padding-top:var(--space-4);border-top:var(--border-width) solid var(--rule-color);font:var(--type-body-sm);color:var(--text-secondary)}
.sh-close-contact a{display:inline-flex;align-items:center;min-height:var(--tap-min);color:inherit;text-decoration:none}
@media (hover: hover) and (pointer: fine){.sh-close-contact a:hover{color:var(--text-primary)}}
`;
function ensure() {
  if (typeof document === "undefined" || document.getElementById("sh-close-css")) return;
  const el = document.createElement("style");
  el.id = "sh-close-css";
  el.textContent = CSS;
  document.head.appendChild(el);
}
function ClosingCTA({
  src,
  alt = "",
  position,
  eyebrow,
  title,
  sub,
  action,
  contact,
  style,
  ...rest
}) {
  ensure();
  return /*#__PURE__*/React.createElement("section", _extends({
    className: "sh-close",
    "data-ground": src ? "photo" : "pine",
    style: style
  }, rest), src ? /*#__PURE__*/React.createElement(Media, {
    src: src,
    alt: alt,
    ratio: "fill",
    scrim: "hero",
    position: position
  }) : null, /*#__PURE__*/React.createElement("div", {
    className: "sh-close-body"
  }, /*#__PURE__*/React.createElement("div", {
    className: "sh-container"
  }, /*#__PURE__*/React.createElement(Statement, {
    eyebrow: eyebrow,
    sub: sub,
    actions: action
  }, title), contact ? /*#__PURE__*/React.createElement("div", {
    className: "sh-close-contact"
  }, contact) : null)));
}
Object.assign(__ds_scope, { ClosingCTA });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/sections/ClosingCTA.jsx", error: String((e && e.message) || e) }); }

// components/sections/FormSplit.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* The consultation form on Merino with square fields, beside a Stone panel that shows who
   will call (a doctor portrait) and what happens next. The form comes first on phones.
   ≥1000px: form 7 columns, panel 5 columns, the panel sticky while the form scrolls. */
const CSS = `
.sh-fsplit{display:grid;grid-template-columns:minmax(0,1fr);gap:var(--stack-lg);align-items:start}
.sh-fsplit-form{min-width:0;display:flex;flex-direction:column;gap:var(--space-6)}
.sh-fsplit-aside{min-width:0;background:var(--ground-stone);padding:clamp(24px, 2.2vw + 16px, 48px);display:flex;flex-direction:column;gap:var(--space-7)}
@media (min-width:1000px){
  .sh-fsplit{grid-template-columns:minmax(0,7fr) minmax(0,5fr);gap:calc(var(--grid-gap) * 2.5)}
  .sh-fsplit-aside{position:sticky;top:calc(var(--space-12) + 16px)}
}
`;
function ensure() {
  if (typeof document === "undefined" || document.getElementById("sh-fsplit-css")) return;
  const el = document.createElement("style");
  el.id = "sh-fsplit-css";
  el.textContent = CSS;
  document.head.appendChild(el);
}
function FormSplit({
  children,
  aside,
  style,
  ...rest
}) {
  ensure();
  return /*#__PURE__*/React.createElement("div", _extends({
    className: "sh-fsplit",
    style: style
  }, rest), /*#__PURE__*/React.createElement("div", {
    className: "sh-fsplit-form"
  }, children), aside ? /*#__PURE__*/React.createElement("aside", {
    className: "sh-fsplit-aside",
    "data-ground": "stone"
  }, aside) : null);
}
Object.assign(__ds_scope, { FormSplit });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/sections/FormSplit.jsx", error: String((e && e.message) || e) }); }

// components/sections/HeroFullBleed.jsx
try { (() => {
const { Media, Statement } = __ds_scope;
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Deck slide 1. A photograph fills the screen (100svh, floor 560px), the transparent
   header sits over it, and the text block sits bottom-left inside a scrim that covers
   all of it. Merino type, Light headline, one Gold primary button. `height="tall"` is
   the 72svh inner-page version with an h1-size headline. */
const CSS = `
.sh-hero{position:relative;display:flex;align-items:flex-end;min-height:clamp(560px, 100svh, 1080px);overflow:hidden;isolation:isolate}
.sh-hero[data-height="tall"]{min-height:clamp(480px, 72svh, 820px)}
.sh-hero[data-height="short"]{min-height:clamp(400px, 56svh, 620px)}
.sh-hero>.sh-media{position:absolute;inset:0;z-index:-1;aspect-ratio:auto;height:100%}
.sh-hero-body{width:100%;padding-block:calc(var(--space-12) + 24px) var(--section-y-sm)}
.sh-hero-body .sh-stmt{max-width:min(100%, 44rem)}
.sh-hero-meta{margin-top:var(--stack-md);font:var(--type-caption);letter-spacing:var(--tracking-wide);color:var(--text-secondary)}
`;
function ensure() {
  if (typeof document === "undefined" || document.getElementById("sh-hero-css")) return;
  const el = document.createElement("style");
  el.id = "sh-hero-css";
  el.textContent = CSS;
  document.head.appendChild(el);
}
function HeroFullBleed({
  media,
  src,
  alt = "",
  position,
  mobilePosition,
  eyebrow,
  title,
  sub,
  actions,
  meta,
  height = "full",
  titleAs = "h1",
  style,
  ...rest
}) {
  ensure();
  const figure = media || /*#__PURE__*/React.createElement(Media, {
    src: src,
    alt: alt,
    ratio: "fill",
    scrim: "hero",
    priority: true,
    position: position,
    mobilePosition: mobilePosition
  });
  return /*#__PURE__*/React.createElement("section", _extends({
    className: "sh-hero",
    "data-ground": "photo",
    "data-height": height,
    style: style
  }, rest), figure, /*#__PURE__*/React.createElement("div", {
    className: "sh-hero-body"
  }, /*#__PURE__*/React.createElement("div", {
    className: "sh-container"
  }, /*#__PURE__*/React.createElement(Statement, {
    as: titleAs,
    size: height === "full" ? "display" : "h1",
    eyebrow: eyebrow,
    sub: sub,
    actions: actions,
    measure: "20ch"
  }, title), meta ? /*#__PURE__*/React.createElement("p", {
    className: "sh-hero-meta"
  }, meta) : null)));
}
Object.assign(__ds_scope, { HeroFullBleed });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/sections/HeroFullBleed.jsx", error: String((e && e.message) || e) }); }

// components/sections/HeroStatement.jsx
try { (() => {
const { Statement } = __ds_scope;
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Deck slide 2. No photograph: a Merino (or Stone) ground with the eyebrow and a large
   Light statement placed LOW, with open space above it. For inner pages that do not need
   a picture — conditions, about, insights, booking. Breadcrumbs sit above the eyebrow. */
const CSS = `
.sh-hstmt{padding-block:calc(var(--space-12) + var(--section-y-sm)) var(--section-y-sm)}
.sh-hstmt[data-tall="true"]{min-height:clamp(420px, 62svh, 720px);display:flex;align-items:flex-end}
.sh-hstmt>.sh-container{width:100%}
.sh-hstmt-crumbs{margin-bottom:var(--stack-lg)}
.sh-hstmt-grid{display:grid;grid-template-columns:minmax(0,1fr);gap:var(--stack-lg);align-items:end}
@media (min-width:1000px){.sh-hstmt-grid[data-aside="true"]{grid-template-columns:minmax(0,7fr) minmax(0,4fr);gap:var(--grid-gap) calc(var(--grid-gap) * 2)}}
`;
function ensure() {
  if (typeof document === "undefined" || document.getElementById("sh-hstmt-css")) return;
  const el = document.createElement("style");
  el.id = "sh-hstmt-css";
  el.textContent = CSS;
  document.head.appendChild(el);
}
function HeroStatement({
  eyebrow,
  title,
  sub,
  actions,
  breadcrumbs,
  aside,
  ground = "merino",
  tall = true,
  size = "h1",
  titleAs = "h1",
  measure = "22ch",
  style,
  ...rest
}) {
  ensure();
  return /*#__PURE__*/React.createElement("section", _extends({
    className: "sh-hstmt",
    "data-ground": ground,
    "data-tall": String(tall),
    style: style
  }, rest), /*#__PURE__*/React.createElement("div", {
    className: "sh-container"
  }, breadcrumbs ? /*#__PURE__*/React.createElement("div", {
    className: "sh-hstmt-crumbs"
  }, breadcrumbs) : null, /*#__PURE__*/React.createElement("div", {
    className: "sh-hstmt-grid",
    "data-aside": aside ? "true" : "false"
  }, /*#__PURE__*/React.createElement(Statement, {
    as: titleAs,
    size: size,
    eyebrow: eyebrow,
    sub: sub,
    actions: actions,
    measure: measure
  }, title), aside ? /*#__PURE__*/React.createElement("div", null, aside) : null)));
}
Object.assign(__ds_scope, { HeroStatement });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/sections/HeroStatement.jsx", error: String((e && e.message) || e) }); }

// components/sections/IndexList.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* A text-only index for lists too long for photographs (conditions, the full programme
   list). Group label on the left (3 of 12 columns) and hairline rows on the right in one
   or two columns; each row is a title, one line and an arrow when it links somewhere.
   Phones: the label sits above its rows. */
const CSS = `
.sh-index{display:flex;flex-direction:column;gap:var(--section-y-sm)}
.sh-index-group{display:grid;grid-template-columns:minmax(0,1fr);gap:var(--space-6) var(--grid-gap)}
.sh-index-label{margin:0;font:var(--type-title);color:var(--text-primary)}
.sh-index-items{list-style:none;margin:0;padding:0;display:grid;grid-template-columns:minmax(0,1fr);column-gap:var(--grid-gap)}
.sh-index-item{border-top:var(--border-width) solid var(--rule-color)}
.sh-index-link{display:grid;grid-template-columns:minmax(0,1fr) auto;gap:var(--space-2) var(--space-5);align-items:baseline;padding:var(--space-6) 0;color:inherit;text-decoration:none;min-height:var(--tap-min)}
.sh-index-title{font:var(--type-item);color:var(--text-primary)}
.sh-index-text{grid-column:1;font:var(--type-body-sm);color:var(--text-secondary);max-width:52ch}
.sh-index-arrow{grid-column:2;grid-row:1;color:var(--text-brand);transition:transform var(--duration-fast) var(--ease-out)}
[dir="rtl"] .sh-index-arrow{transform:scaleX(-1)}
.sh-index-link:focus-visible{outline:none;box-shadow:var(--ring-focus)}
@media (hover: hover) and (pointer: fine){
  a.sh-index-link:hover .sh-index-title{text-decoration:underline;text-decoration-thickness:1px;text-underline-offset:4px}
  a.sh-index-link:hover .sh-index-arrow{transform:translateX(3px)}
}
@media (min-width:760px){.sh-index-items[data-columns="2"]{grid-template-columns:repeat(2,minmax(0,1fr))}}
@media (min-width:1000px){.sh-index-group{grid-template-columns:minmax(0,3fr) minmax(0,9fr)}}
`;
function ensure() {
  if (typeof document === "undefined" || document.getElementById("sh-index-css")) return;
  const el = document.createElement("style");
  el.id = "sh-index-css";
  el.textContent = CSS;
  document.head.appendChild(el);
}

/* groups: [{ label, items: [{ title, text?, href?, onClick? }] }] */
function IndexList({
  groups = [],
  columns = 2,
  headingLevel = 2,
  style,
  ...rest
}) {
  ensure();
  const H = "h" + headingLevel;
  const I = "h" + Math.min(6, headingLevel + 1);
  return /*#__PURE__*/React.createElement("div", _extends({
    className: "sh-index",
    style: style
  }, rest), groups.map(g => /*#__PURE__*/React.createElement("section", {
    className: "sh-index-group",
    key: g.label
  }, /*#__PURE__*/React.createElement(H, {
    className: "sh-index-label"
  }, g.label), /*#__PURE__*/React.createElement("ul", {
    className: "sh-index-items",
    "data-columns": String(columns)
  }, g.items.map(it => {
    const linked = !!(it.href || it.onClick);
    const Tag = linked ? "a" : "div";
    return /*#__PURE__*/React.createElement("li", {
      className: "sh-index-item",
      key: it.title
    }, /*#__PURE__*/React.createElement(Tag, {
      className: "sh-index-link",
      href: linked ? it.href || "#" : undefined,
      onClick: it.onClick ? e => {
        if (!it.href) e.preventDefault();
        it.onClick(e);
      } : undefined
    }, /*#__PURE__*/React.createElement(I, {
      className: "sh-index-title",
      style: {
        margin: 0
      }
    }, it.title), linked ? /*#__PURE__*/React.createElement("span", {
      className: "sh-index-arrow",
      "aria-hidden": "true"
    }, "\u2192") : null, it.text ? /*#__PURE__*/React.createElement("span", {
      className: "sh-index-text"
    }, it.text) : null));
  })))));
}
Object.assign(__ds_scope, { IndexList });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/sections/IndexList.jsx", error: String((e && e.message) || e) }); }

// components/sections/NumeralsSplit.jsx
try { (() => {
const { Statement, Numeral } = __ds_scope;
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Deck slide 8. A statement beside two (at most three) large numerals. Stacked on
   phones with the numerals side by side while they fit; 5/7 columns from 1000px. */
const CSS = `
.sh-nsplit{display:grid;grid-template-columns:minmax(0,1fr);gap:var(--stack-lg);align-items:end}
/* Equal columns while the figures fit; a figure never shrinks below its own width, so a
   long value ("25,000+") wraps to the next row instead of running into its neighbour. */
.sh-nsplit-nums{display:flex;flex-wrap:wrap;gap:var(--space-8) calc(var(--grid-gap) * 2)}
.sh-nsplit-nums>.sh-num{flex:1 1 0;min-width:max-content}
@media (min-width:1000px){.sh-nsplit{grid-template-columns:minmax(0,5fr) minmax(0,7fr);gap:calc(var(--grid-gap) * 2)}}
.sh-nsplit-foot{grid-column:1/-1;margin:0;font:var(--type-body-sm);color:var(--text-secondary);max-width:var(--measure-body)}
`;
function ensure() {
  if (typeof document === "undefined" || document.getElementById("sh-nsplit-css")) return;
  const el = document.createElement("style");
  el.id = "sh-nsplit-css";
  el.textContent = CSS;
  document.head.appendChild(el);
}

/* numerals: [{ value, label }] — two or three. */
function NumeralsSplit({
  eyebrow,
  title,
  sub,
  numerals = [],
  footnote,
  style,
  ...rest
}) {
  ensure();
  const shown = numerals.slice(0, 3);
  return /*#__PURE__*/React.createElement("div", _extends({
    className: "sh-nsplit",
    style: style
  }, rest), /*#__PURE__*/React.createElement(Statement, {
    eyebrow: eyebrow,
    sub: sub
  }, title), /*#__PURE__*/React.createElement("div", {
    className: "sh-nsplit-nums",
    "data-count": String(shown.length)
  }, shown.map(n => /*#__PURE__*/React.createElement(Numeral, {
    key: n.label,
    value: n.value,
    label: n.label
  }))), footnote ? /*#__PURE__*/React.createElement("p", {
    className: "sh-nsplit-foot"
  }, footnote) : null);
}
Object.assign(__ds_scope, { NumeralsSplit });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/sections/NumeralsSplit.jsx", error: String((e && e.message) || e) }); }

// components/sections/PanoramaCaption.jsx
try { (() => {
const { Media } = __ds_scope;
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Deck slide 5. A full-width photograph with a short caption bottom-left and no button —
   the pause between dense sections. 21:9 on desktop, 4:5 on phones so the frame keeps
   its height; the caption always sits inside a bottom scrim. */
const CSS = `
.sh-pano{position:relative}
.sh-pano .sh-media-over{display:flex;align-items:flex-end}
.sh-pano-cap{width:100%;padding-block:var(--section-y-sm)}
.sh-pano-cap .sh-container{display:flex;flex-direction:column;gap:var(--space-4)}
.sh-pano-title{margin:0;font:var(--type-title);color:var(--text-primary);max-width:26ch}
@media (min-width:1000px){.sh-pano-title{font:var(--type-statement);max-width:24ch}}
`;
function ensure() {
  if (typeof document === "undefined" || document.getElementById("sh-pano-css")) return;
  const el = document.createElement("style");
  el.id = "sh-pano-css";
  el.textContent = CSS;
  document.head.appendChild(el);
}
function PanoramaCaption({
  src,
  alt = "",
  position,
  mobilePosition,
  eyebrow,
  title,
  ratio = "21:9",
  mobileRatio = "4:5",
  headingLevel = 2,
  style,
  ...rest
}) {
  ensure();
  const H = "h" + headingLevel;
  return /*#__PURE__*/React.createElement("section", _extends({
    className: "sh-pano",
    "data-ground": "photo",
    style: style
  }, rest), /*#__PURE__*/React.createElement(Media, {
    src: src,
    alt: alt,
    ratio: ratio,
    mobileRatio: mobileRatio,
    position: position,
    mobilePosition: mobilePosition,
    scrim: "hero"
  }, title || eyebrow ? /*#__PURE__*/React.createElement("div", {
    className: "sh-pano-cap"
  }, /*#__PURE__*/React.createElement("div", {
    className: "sh-container"
  }, eyebrow ? /*#__PURE__*/React.createElement("p", {
    className: "shantara-eyebrow",
    style: {
      margin: 0
    }
  }, eyebrow) : null, title ? /*#__PURE__*/React.createElement(H, {
    className: "sh-pano-title"
  }, title) : null)) : null));
}
Object.assign(__ds_scope, { PanoramaCaption });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/sections/PanoramaCaption.jsx", error: String((e && e.message) || e) }); }

// components/sections/PeopleRow.jsx
try { (() => {
const { Statement, PortraitFrame } = __ds_scope;
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Deck slide 7. A statement, then 2–4 doctors in the same 4:5 framing. Columns are
   auto-filled at a fixed portrait width (150→280px), so two doctors stay portrait-sized
   on a desktop instead of stretching, and two sit side by side on a 360px phone. */
const CSS = `
.sh-people{display:flex;flex-direction:column;gap:var(--stack-lg)}
.sh-people-grid{display:grid;grid-template-columns:repeat(auto-fill, minmax(clamp(140px, 18vw + 70px, 280px), 1fr));gap:var(--space-8) var(--grid-gap);max-width:calc(4 * 280px + 3 * var(--grid-gap))}
.sh-people-note{margin:0;font:var(--type-body-sm);color:var(--text-secondary);max-width:var(--measure-body)}
@media (max-width:519.98px){.sh-people-grid{gap:var(--space-7) var(--space-5)}}
`;
function ensure() {
  if (typeof document === "undefined" || document.getElementById("sh-people-css")) return;
  const el = document.createElement("style");
  el.id = "sh-people-css";
  el.textContent = CSS;
  document.head.appendChild(el);
}

/* people: [{ name, role, detail?, src? }] */
function PeopleRow({
  eyebrow,
  title,
  sub,
  people = [],
  note,
  action,
  style,
  ...rest
}) {
  ensure();
  return /*#__PURE__*/React.createElement("div", _extends({
    className: "sh-people",
    style: style
  }, rest), title ? /*#__PURE__*/React.createElement(Statement, {
    eyebrow: eyebrow,
    sub: sub
  }, title) : null, /*#__PURE__*/React.createElement("div", {
    className: "sh-people-grid"
  }, people.map(p => /*#__PURE__*/React.createElement(PortraitFrame, _extends({
    key: p.name
  }, p)))), note ? /*#__PURE__*/React.createElement("p", {
    className: "sh-people-note"
  }, note) : null, action ? /*#__PURE__*/React.createElement("div", null, action) : null);
}
Object.assign(__ds_scope, { PeopleRow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/sections/PeopleRow.jsx", error: String((e && e.message) || e) }); }

// components/sections/Section.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* The shell every website section sits in: one ground, the fluid section rhythm and the
   centred container with a fluid 20→48px gutter. Nothing on a page paints its own
   background or side padding — it chooses a Section. */
function Section({
  ground = "merino",
  space = "md",
  width = "default",
  as: Tag = "section",
  bleed = false,
  children,
  className,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement(Tag, _extends({
    className: "sh-section" + (className ? " " + className : ""),
    "data-ground": ground,
    "data-space": space === "md" ? undefined : space,
    style: style
  }, rest), bleed ? children : /*#__PURE__*/React.createElement("div", {
    className: "sh-container",
    "data-width": width === "default" ? undefined : width
  }, children));
}
Object.assign(__ds_scope, { Section });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/sections/Section.jsx", error: String((e && e.message) || e) }); }

// components/sections/SplitSection.jsx
try { (() => {
const { Media } = __ds_scope;
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Deck slides 4, 6, 13. A photograph on one side that runs to the edge of the screen,
   text on the other, bottom-aligned with open space above.
   ≥1000px: two columns (50/50 or 40/60 with `split`), the photo fills its column's full
   height, the text column aligns to the page container on its outer edge.
   <1000px: the photo goes first, full width at `mobileRatio`, then the text with the
   normal gutter. `bleed={false}` keeps the photo inside the container instead. */
const CSS = `
.sh-split{container-type:inline-size;position:relative}
.sh-split-grid{display:grid;grid-template-columns:minmax(0,1fr)}
.sh-split-media{position:relative;min-width:0}
.sh-split-media .sh-media{aspect-ratio:var(--_mr,var(--media-ratio))}
.sh-split-text{min-width:0;padding:var(--section-y-sm) var(--layout-gutter);display:flex;flex-direction:column;gap:var(--stack-lg)}
.sh-split[data-bleed="false"] .sh-split-grid{max-width:calc(var(--layout-max) + 2 * var(--layout-gutter));margin-inline:auto;padding-inline:var(--layout-gutter);padding-block:var(--section-y-sm)}
.sh-split[data-bleed="false"] .sh-split-text{padding-inline:0;padding-block:var(--stack-lg) 0}
@media (min-width:1000px){
  .sh-split{--_outer:max(var(--layout-gutter), (100cqw - var(--layout-max)) / 2)}
  .sh-split-grid{grid-template-columns:minmax(0,1fr) minmax(0,1fr);min-height:var(--_minh,clamp(560px, 48vw, 820px))}
  .sh-split[data-split="40"] .sh-split-grid{grid-template-columns:minmax(0,2fr) minmax(0,3fr)}
  .sh-split[data-split="60"] .sh-split-grid{grid-template-columns:minmax(0,3fr) minmax(0,2fr)}
  .sh-split[data-side="end"] .sh-split-media{order:2}
  .sh-split[data-side="end"][data-split="40"] .sh-split-grid{grid-template-columns:minmax(0,3fr) minmax(0,2fr)}
  .sh-split[data-side="end"][data-split="60"] .sh-split-grid{grid-template-columns:minmax(0,2fr) minmax(0,3fr)}
  .sh-split[data-bleed="true"] .sh-split-media .sh-media{position:absolute;inset:0;aspect-ratio:auto;height:100%}
  .sh-split-text{padding-block:var(--section-y);justify-content:var(--_align,flex-end)}
  .sh-split[data-side="start"] .sh-split-text{padding-inline:calc(var(--grid-gap) * 2.5) var(--_outer)}
  .sh-split[data-side="end"] .sh-split-text{padding-inline:var(--_outer) calc(var(--grid-gap) * 2.5)}
  .sh-split[data-bleed="false"] .sh-split-grid{min-height:0;gap:calc(var(--grid-gap) * 2.5);padding-block:var(--section-y)}
  .sh-split[data-bleed="false"] .sh-split-text{padding:0}
  .sh-split-sticky{position:sticky;top:calc(var(--space-12) + 16px)}
}
`;
function ensure() {
  if (typeof document === "undefined" || document.getElementById("sh-split-css")) return;
  const el = document.createElement("style");
  el.id = "sh-split-css";
  el.textContent = CSS;
  document.head.appendChild(el);
}
function SplitSection({
  media,
  src,
  alt = "",
  position,
  mediaSide = "start",
  split = "50",
  bleed = true,
  align = "end",
  mobileRatio = "4:3",
  minHeight,
  ground = "merino",
  children,
  style,
  ...rest
}) {
  ensure();
  const figure = media || /*#__PURE__*/React.createElement(Media, {
    src: src,
    alt: alt,
    position: position
  });
  const vars = {
    "--_mr": {
      "4:3": "var(--media-ratio)",
      "4:5": "var(--media-ratio-portrait)",
      "3:4": "var(--media-ratio-tall)",
      "16:9": "var(--media-ratio-wide)",
      "1:1": "1 / 1"
    }[mobileRatio] || mobileRatio,
    "--_align": align === "center" ? "center" : align === "start" ? "flex-start" : "flex-end"
  };
  if (minHeight) vars["--_minh"] = minHeight;
  return /*#__PURE__*/React.createElement("section", _extends({
    className: "sh-split",
    "data-ground": ground,
    "data-side": mediaSide,
    "data-split": split,
    "data-bleed": String(bleed),
    style: {
      ...vars,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    className: "sh-split-grid"
  }, /*#__PURE__*/React.createElement("div", {
    className: "sh-split-media"
  }, figure), /*#__PURE__*/React.createElement("div", {
    className: "sh-split-text"
  }, children)));
}
Object.assign(__ds_scope, { SplitSection });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/sections/SplitSection.jsx", error: String((e && e.message) || e) }); }

// components/sections/TileGrid.jsx
try { (() => {
const { Statement } = __ds_scope;
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Deck slide 11. A heading row (statement + one text link on the right), then tiles.
   layout "3": three across from 1000px. layout "feature": one large tile (7 columns) and
   the rest stacked beside it (5 columns). layout "2": two across.
   Never an uneven last row: on tablets (760–999px) an odd count makes the first tile span
   both columns; on phones tiles stack. Keep counts to multiples of the column count. */
const CSS = `
.sh-tgrid{display:flex;flex-direction:column;gap:var(--stack-lg)}
.sh-tgrid-head{display:flex;flex-direction:column;gap:var(--space-5)}
.sh-tgrid-items{display:grid;grid-template-columns:minmax(0,1fr);gap:var(--space-10) var(--grid-gap)}
.sh-tgrid-foot{margin:0;font:var(--type-body-sm);color:var(--text-secondary);max-width:var(--measure-body)}
@media (min-width:760px){
  .sh-tgrid-head{flex-direction:row;align-items:flex-end;justify-content:space-between;gap:var(--grid-gap)}
  .sh-tgrid-head>:last-child:not(:first-child){flex:0 0 auto}
  .sh-tgrid-items{grid-template-columns:repeat(2,minmax(0,1fr))}
  .sh-tgrid-items[data-odd="true"]>:first-child{grid-column:1/-1}
}
@media (min-width:1000px){
  .sh-tgrid-items[data-layout="3"]{grid-template-columns:repeat(3,minmax(0,1fr))}
  .sh-tgrid-items[data-layout="3"][data-odd="true"]>:first-child{grid-column:auto}
  .sh-tgrid-items[data-layout="2"][data-odd="true"]>:first-child{grid-column:1/-1}
  .sh-tgrid-items[data-layout="feature"]{grid-template-columns:minmax(0,7fr) minmax(0,5fr);grid-auto-flow:dense}
  .sh-tgrid-items[data-layout="feature"]>:first-child{grid-column:1;grid-row:1 / span var(--_rest,2)}
  .sh-tgrid-items[data-layout="feature"]>:not(:first-child){grid-column:2}
  .sh-tgrid-items[data-layout="feature"][data-odd="true"]>:first-child{grid-column:1}
}
`;
function ensure() {
  if (typeof document === "undefined" || document.getElementById("sh-tgrid-css")) return;
  const el = document.createElement("style");
  el.id = "sh-tgrid-css";
  el.textContent = CSS;
  document.head.appendChild(el);
}
function TileGrid({
  eyebrow,
  title,
  sub,
  action,
  layout = "3",
  footnote,
  children,
  style,
  ...rest
}) {
  ensure();
  const items = React.Children.toArray(children).filter(Boolean);
  return /*#__PURE__*/React.createElement("div", _extends({
    className: "sh-tgrid",
    style: style
  }, rest), title || action ? /*#__PURE__*/React.createElement("div", {
    className: "sh-tgrid-head"
  }, title ? /*#__PURE__*/React.createElement(Statement, {
    eyebrow: eyebrow,
    sub: sub
  }, title) : /*#__PURE__*/React.createElement("span", null), action ? /*#__PURE__*/React.createElement("div", null, action) : null) : null, /*#__PURE__*/React.createElement("div", {
    className: "sh-tgrid-items",
    "data-layout": layout,
    "data-odd": String(items.length % 2 === 1),
    style: {
      "--_rest": String(Math.max(1, items.length - 1))
    }
  }, items), footnote ? /*#__PURE__*/React.createElement("p", {
    className: "sh-tgrid-foot"
  }, footnote) : null);
}
Object.assign(__ds_scope, { TileGrid });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/sections/TileGrid.jsx", error: String((e && e.message) || e) }); }

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
__ds_ns.LanguageSelector = __ds_scope.LanguageSelector;
__ds_ns.Tabs = __ds_scope.Tabs;
__ds_ns.Eyebrow = __ds_scope.Eyebrow;
__ds_ns.GroupedList = __ds_scope.GroupedList;
__ds_ns.Media = __ds_scope.Media;
__ds_ns.NumberedSteps = __ds_scope.NumberedSteps;
__ds_ns.Numeral = __ds_scope.Numeral;
__ds_ns.PlainList = __ds_scope.PlainList;
__ds_ns.PortraitFrame = __ds_scope.PortraitFrame;
__ds_ns.QuoteBlock = __ds_scope.QuoteBlock;
__ds_ns.SpecTable = __ds_scope.SpecTable;
__ds_ns.Statement = __ds_scope.Statement;
__ds_ns.TextLink = __ds_scope.TextLink;
__ds_ns.Tile = __ds_scope.Tile;
__ds_ns.TimeTable = __ds_scope.TimeTable;
__ds_ns.BandStatement = __ds_scope.BandStatement;
__ds_ns.ClosingCTA = __ds_scope.ClosingCTA;
__ds_ns.FormSplit = __ds_scope.FormSplit;
__ds_ns.HeroFullBleed = __ds_scope.HeroFullBleed;
__ds_ns.HeroStatement = __ds_scope.HeroStatement;
__ds_ns.IndexList = __ds_scope.IndexList;
__ds_ns.NumeralsSplit = __ds_scope.NumeralsSplit;
__ds_ns.PanoramaCaption = __ds_scope.PanoramaCaption;
__ds_ns.PeopleRow = __ds_scope.PeopleRow;
__ds_ns.Section = __ds_scope.Section;
__ds_ns.SplitSection = __ds_scope.SplitSection;
__ds_ns.TileGrid = __ds_scope.TileGrid;

})();
