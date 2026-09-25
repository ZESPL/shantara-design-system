A `TileGrid` preset for the end of an article: heading, 2–3 article tiles (title, then "Category · 4 min read" below it), and one link to the index.

```jsx
<Section ground="stone">
  <RelatedArticles
    articles={[
      { title: "How programme duration is decided", href: "/en/journal/how-programme-duration-is-decided", src: p1, alt: "…", category: "Clinical Guides", readTime: "5 min read" },
      { title: "Managing PCOS through lifestyle", href: "/en/journal/managing-pcos-lifestyle", src: p2, alt: "…", category: "Clinical Guides", readTime: "6 min read" },
      { title: "How rooms are designed", href: "/en/journal/how-rooms-are-designed", src: p3, alt: "…", category: "Life at Shantara", readTime: "3 min read" },
    ]}
    action={<TextLink href="/en/journal">All articles</TextLink>} />
</Section>
```

**Use** after `AuthorCard`, inside a `Section` (Stone reads as "the end of the article"). Same category first, then most recent. Never one tile; never the article itself.

**Content.** Titles as published; category and read time from `content/articles/`. `icons` for the index page's scanned lists.

**Responsive.** As `TileGrid`: stacked on phones, two across from 760px (an odd first tile spans), three from 1000px.
