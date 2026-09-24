import React from "react";
import { Statement } from "../editorial/Statement.jsx";

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

export function TileGrid({ eyebrow, title, sub, action, layout = "3", footnote, children, style, ...rest }) {
  ensure();
  const items = React.Children.toArray(children).filter(Boolean);
  return (
    <div className="sh-tgrid" style={style} {...rest}>
      {title || action ? (
        <div className="sh-tgrid-head">
          {title ? <Statement eyebrow={eyebrow} sub={sub}>{title}</Statement> : <span />}
          {action ? <div>{action}</div> : null}
        </div>
      ) : null}
      <div className="sh-tgrid-items" data-layout={layout} data-odd={String(items.length % 2 === 1)} style={{ "--_rest": String(Math.max(1, items.length - 1)) }}>
        {items}
      </div>
      {footnote ? <p className="sh-tgrid-foot">{footnote}</p> : null}
    </div>
  );
}
