/* Real Shantara property photography, downscaled from the shoot supplied with the brand
   package. `src` is a filename inside assets/photos. Faces and guests are not shown
   close-up anywhere in this kit — per the handbook's guest-privacy rules.
   Ratio vocabulary (by job — pick what the frame needs):
     "4:3" (default) — listing / architectural landscape (`--media-ratio`)
     "16:9" | "wide" — wide editorial frames when a ratio crop is wanted (`--media-ratio-wide`)
     "3:4" | "portrait" — tall architectural frames (`--media-ratio-portrait`)
   Full-bleed page heroes usually pass an explicit `height` (e.g. 640 / 420) — they are not
   forced to 4:3 or 16:9. Optional `maxHeight` is a rare layout escape hatch. Object-fit is cover. */
const PHOTO_BASE = "../../assets/photos/";

const RATIO_TOKEN = {
  "4:3": "var(--media-ratio)",
  "16:9": "var(--media-ratio-wide)",
  wide: "var(--media-ratio-wide)",
  hero: "var(--media-ratio-wide)",
  "3:4": "var(--media-ratio-portrait)",
  portrait: "var(--media-ratio-portrait)",
};

function Photo({ name, alt = "", height, maxHeight, ratio = "4:3", radius = "var(--radius-media)", position = "center", scrim, children, style, ...rest }) {
  const box = {
    position: "relative",
    borderRadius: radius,
    overflow: "hidden",
    background: "var(--color-cotton-seed)",
    ...style,
  };
  if (height != null) {
    box.height = typeof height === "number" ? height + "px" : height;
  } else {
    box.aspectRatio = RATIO_TOKEN[ratio] || RATIO_TOKEN["4:3"];
    box.height = "auto";
  }
  if (maxHeight != null) {
    box.maxHeight = typeof maxHeight === "number" ? maxHeight + "px" : maxHeight;
  }
  return (
    <div style={box} {...rest}>
      <img src={PHOTO_BASE + name + ".jpg"} alt={alt} style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", objectPosition: position }} />
      {scrim ? <span style={{ position: "absolute", inset: 0, background: scrim === "bottom" ? "var(--scrim-bottom)" : "var(--scrim-full)" }} /> : null}
      {children}
    </div>
  );
}

Object.assign(window, { Photo });
