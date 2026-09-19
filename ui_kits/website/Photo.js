/* Real Shantara property photography, downscaled from the shoot supplied with the brand
   package. `src` is a filename inside assets/photos. Faces and guests are not shown
   close-up anywhere in this kit — per the handbook's guest-privacy rules. */
const PHOTO_BASE = "../../assets/photos/";

function Photo({ name, alt = "", height = 200, radius = "var(--radius-media)", position = "center", scrim, children, style, ...rest }) {
  return (
    <div style={{ position: "relative", height: typeof height === "number" ? height + "px" : height, borderRadius: radius, overflow: "hidden", background: "var(--color-cotton-seed)", ...style }} {...rest}>
      <img src={PHOTO_BASE + name + ".jpg"} alt={alt} style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", objectPosition: position }} />
      {scrim ? <span style={{ position: "absolute", inset: 0, background: scrim === "bottom" ? "var(--scrim-bottom)" : "var(--scrim-full)" }} /> : null}
      {children}
    </div>
  );
}

Object.assign(window, { Photo });
