Photograph-free page opening: a large Light statement placed low on Merino or Stone, with breadcrumbs above (deck slide 2).

```jsx
<HeroStatement
  breadcrumbs={<Breadcrumbs items={[{ label: "Home", href: "/en/" }, "Conditions"]} />}
  eyebrow="Conditions"
  title="Conditions we commonly see"
  sub="Our doctors see guests with a range of long-standing conditions. Programmes are planned after consultation and assessment."
/>
```

**Use** for inner pages that do not need a picture — conditions, about, insights, booking, contact. It gives the page the deck's open space without borrowing a photograph that belongs elsewhere.

**Content.** One full-sentence title. `aside` holds something small and factual (a text link, two or three plain facts) — never a form or a second heading.

**Responsive.** Phone: statement and aside stack, with the fluid top padding clearing the header. `tall` (default) keeps a 420–720px floor (62svh) and sits the text at the bottom of it. From 1000px an `aside` takes a 4-column right column (7/4 split), bottom-aligned with the statement. The headline wraps at 22ch; pass `measure` to change it.
