import React from "react";

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
  "21:9": "var(--media-ratio-panorama)",
};

const SCRIM = {
  hero: "var(--scrim-hero)",
  bottom: "var(--scrim-bottom)",
  top: "var(--scrim-top)",
  full: "var(--scrim-full)",
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

export function Media({ src, alt = "", ratio = "4:3", mobileRatio, position = "center", mobilePosition, priority = false, sizes = "100vw", srcSet, scrim, children, className, style, ...rest }) {
  ensure();
  const vars = {};
  if (ratio !== "fill") vars["--_r"] = RATIO[ratio] || ratio;
  if (mobileRatio) vars["--_rm"] = RATIO[mobileRatio] || mobileRatio;
  vars["--_pos"] = position;
  if (mobilePosition) vars["--_posm"] = mobilePosition;
  return (
    <figure
      className={"sh-media" + (className ? " " + className : "")}
      data-ratio={ratio === "fill" ? "fill" : undefined}
      data-mobile-ratio={mobileRatio ? "" : undefined}
      data-mobile-pos={mobilePosition ? "" : undefined}
      style={{ ...vars, ...style }}
      {...rest}
    >
      {src ? (
        <img
          src={src}
          srcSet={srcSet}
          sizes={srcSet ? sizes : undefined}
          alt={alt}
          loading={priority ? "eager" : "lazy"}
          decoding={priority ? "sync" : "async"}
          fetchpriority={priority ? "high" : undefined}
        />
      ) : null}
      {scrim ? <span className="sh-media-scrim" aria-hidden="true" style={{ background: SCRIM[scrim] || scrim }} /> : null}
      {children ? <div className="sh-media-over">{children}</div> : null}
    </figure>
  );
}
