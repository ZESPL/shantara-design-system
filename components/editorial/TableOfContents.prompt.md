"On this page" for articles with four or more h2 sections.

```jsx
<div className="article-grid">{/* ≥1000px: body 8 cols (start) | TOC 3 cols (end) */}
  <Prose html={body} />
  <TableOfContents items={[
    { id: "how-meals-are-planned", label: "How meals are planned" },
    { id: "supervised-fasting", label: "Supervised fasting" },
    { id: "dietary-requirements", label: "Dietary requirements" },
  ]} />
</div>
```

**Desktop (≥1000px).** A sticky list on a hairline rail in the side column (start side, 3 of 12 columns, or end side after the body). The section in view is marked with a 1px brand bar; `track` follows the scroll with IntersectionObserver, or pass `activeId`.

**Phones and tablets.** A collapsed "On this page" row with a chevron, placed between `ArticleHeader` and the body (render it first in the DOM on phones, or render two instances and hide one per breakpoint); tapping opens the list in place. Not sticky.

**Content.** Labels are the h2 texts, shortened if long. Level 3 only when a section is long. Skip the TOC for articles under ~800 words.
