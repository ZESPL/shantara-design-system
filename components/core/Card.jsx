import React from "react";

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
export function Card({ tone = "default", padding = "md", media, mediaAlt = "", mediaHeight, interactive = false, footer, children, onClick, onKeyDown, ...rest }) {
  ensure();
  const activate = interactive && onClick
    ? (e) => {
        if (onKeyDown) onKeyDown(e);
        if (e.defaultPrevented) return;
        if (e.key === "Enter" || e.key === " " || e.key === "Spacebar") { e.preventDefault(); onClick(e); }
      }
    : onKeyDown;
  const mediaStyle = mediaHeight != null
    ? { height: typeof mediaHeight === "number" ? mediaHeight + "px" : mediaHeight, aspectRatio: "auto" }
    : undefined;
  return (
    <div
      className="sh-card"
      data-tone={tone}
      data-pad={padding}
      data-interactive={String(interactive)}
      onClick={onClick}
      onKeyDown={activate}
      role={interactive && onClick ? "button" : undefined}
      tabIndex={interactive && onClick ? 0 : undefined}
      {...rest}
    >
      {media ? <img className="sh-card-media" src={media} alt={mediaAlt} style={mediaStyle} /> : null}
      <div className="sh-card-body">{children}</div>
      {footer}
    </div>
  );
}
