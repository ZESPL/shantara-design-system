# Shantara Premium Design Rules

Back to the [website skill](SKILL.md).

Design and motion rules for the Shantara public marketing website (Astro + Tailwind). Use this whenever building, styling, reviewing, or changing any page, component, layout, image treatment, typography, animation, hover state, transition, or “premium feel.” Also use it when anyone asks to make the site feel more premium, luxurious, polished, or high-end, or suggests adding an animation library, UI component library, scroll effect, parallax, carousel, or preloader. Apply it even if the request only mentions one small component.

Shantara is a **52-room naturopathy retreat** — a doctor-led residential clinic guests stay at in Kozhikode. Visitors are deciding whether to trust Shantara with their health and a costly stay, often from the Gulf and often on a phone. The site must feel calm, confident, and trustworthy before it feels impressive.

**Wellness** is a discovery gloss in some markets; it is not the product type. Public naming follows [skill-copy.md](skill-copy.md). Do not describe the product as a “wellness retreat” in heroes, titles, or schema.

Stack locks (Astro, Tailwind, no Motion/GSAP, no UI kits): [skill-stack.md](skill-stack.md). Brand tokens, type, and accessibility live in the design system (`tokens/`, root `SKILL.md`).

## Core principle

> Premium = restraint + confidence + sensory quality. It does not come from more interface behaviour.

Premium feel is a product of five things working together:

Photography × Typography × Layout × Copy × Performance

If any one of these is weak, the whole site feels cheap. Motion cannot fix a weak one. Copy and information structure matter as much as visuals here, because visitors are judging a health-related stay, not just a pretty resort.

## Build order (project rule)

Work in this order. Do not start a later step while an earlier one is still undecided.

1. Content architecture (pages, collections, hierarchy, what each page must answer)
2. Photography and video (selection, cropping, art direction)
3. Typography (typefaces, scale, line height, measure)
4. Layout and whitespace
5. Colour and material language
6. Responsive behaviour
7. Performance
8. Motion

**Motion comes last.** Do not add reveal effects, scroll animations, or transitions while typography, content hierarchy, or image treatment are still being decided. If asked to add motion early, say so and point back to this order.

## Stack constraints

- Use CSS, Tailwind transitions, and native browser features first.
- Use Astro View Transitions for page changes.
- Do not add Motion, GSAP, Framer Motion, Lenis, AOS, or any animation library.
- Do not add SmoothUI, Amicro, Bencho, MUI, Chakra, shadcn, or any UI component library.
- Do not introduce React for ordinary UI. React islands only when an interaction genuinely requires it.
- An animation library may be proposed only when a specific, named interaction cannot be built cleanly without one. Write down the interaction, why CSS fails, and the added bundle size before adding it.

Why: adding one small dependency later is trivial. Removing an animation ecosystem after it has spread across 40 components is not.

Full stack table: [skill-stack.md](skill-stack.md).

## Photography and video

- Real property, treatments, food, people, and landscape. Avoid generic stock wellness imagery.
- Prefer frames without identifiable guests where public marketing allows; never show faces in therapy or room numbers (guest privacy — root `SKILL.md`).
- One strong image per section beats a grid of weak ones.
- Always use Astro Image with correct `sizes`, width and height set, and modern formats.
- Hero video: optional, short (10 to 15 seconds), muted, looped, compressed, with a still poster image that loads first. Never autoplay audio.
- The LCP image (usually the hero) must not be lazy-loaded and should be prioritised.

## Typography

Shantara ships **one typeface for Latin/Cyrillic: Diodrum** (weights via design-system tokens). Display and body are the same family at different sizes and weights — do **not** introduce a separate “premium serif” for headings.

- Self-host fonts. Subset them. Use `font-display: swap` (already set on Diodrum faces).
- Generous heading sizes, comfortable body line height (about 1.6 to 1.75), body line length around 60 to 75 characters.
- Use type tokens (`--type-display`, `--type-body`, …) and the spacing/type scale — no one-off font stacks in components.
- Arabic: **IBM Plex Sans Arabic** pairing under `[dir=rtl]` (see `tokens/rtl.css`). Do not use a system fallback as the Arabic display face.

## Layout and whitespace

- Fewer elements per section: typically one image, one heading, a short paragraph, one action.
- Use whitespace to create pacing. Do not fill space because it is empty.
- Keep a consistent spacing scale from design tokens / Tailwind mapped to those tokens. No one-off magic numbers.
- Build every layout to work in right-to-left for `/ar/` using logical properties and Tailwind `rtl:` variants.
- Heroes: full-bleed dominant image plane; brand-first; no card chrome in the hero; no floating badges on media. Composition rules in [skill-sections.md](skill-sections.md) and the website skill.

## Colour and material

- Use the design-system palette: deep olive / gold primary pair, stone and linen neutrals, landscape accents — defined once as tokens. No hard-coded hex values in components.
- The rosette is a **band on one edge**, never a page wash (root `SKILL.md`).
- Subtle texture is allowed only if it does not hurt contrast or performance.
- Meet WCAG AA contrast for all text. Type on photography sits on a bottom scrim with solid Merino — see accessibility guidelines.

## Copy

Headings, labels, navigation, and buttons are direct and literal. A visitor scanning only the headings should understand the page.

- Good: “Our treatment programmes”, “Book a consultation”, “Plan your stay”
- Avoid: “Where healing begins”, “A journey within”, “Discover more”

Calm, specific, factual tone. No hype.

**All public-facing language follows [skill-copy.md](skill-copy.md).** Do not invent parallel voice rules here. Health content must not claim cures or guaranteed outcomes; prefer careful wording such as “supports” or “may help”; flag medical pages for human review before publishing. India’s Drugs and Magic Remedies (Objectionable Advertisements) Act, 1954 applies. The programme name **Diabetes Reversal** is approved for catalogue use — do not present reversal as a guaranteed outcome.

## Motion vocabulary

Motion should make Shantara feel calm, continuous, and intentional. It must never be the first thing a visitor notices.

Not every section animates. Use only this vocabulary:

- **Hero:** one subtle entrance on first load (for example, a gentle fade and small upward settle of the heading). Once only.
- **Major editorial images:** an occasional reveal as they enter the viewport. Not every image. At most one or two per page.
- **Buttons, links and cards:** subtle hover and focus states (colour, underline, slight image scale around 1.02 to 1.04). Interactive cards lift without media zoom as the primary pattern in the kit.
- **Page changes:** a restrained Astro View Transition. Shared-element transitions (for example, a programme card image becoming the programme page hero) are allowed where they help continuity.
- **Long-form, programme, therapy and clinical content:** mostly static. Reading pages should not move.

Prefer design-system motion tokens (`--ease-out`, `--ease-drawer`, `--duration-*`) over local curves.

### Timing

- Hover and focus: 150 to 250 ms
- Normal UI transitions (menus, accordions, tabs): 250 to 400 ms
- Large image or editorial reveals: 500 to 800 ms
- Page transitions: about 400 to 700 ms
- Easing: gentle ease-out curves. No bounce, spring, or elastic effects.

Calm does not mean slow. Interactions must still feel responsive.

### Reduced motion (required)

Every animation must respect the user’s reduced-motion setting:

```css
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
```

Content must be fully visible with motion disabled. Never hide content with `opacity: 0` in a way that depends on JavaScript to reveal it. Prefer keeping colour and opacity changes; drop movement.

## Do not use

- Smooth-scroll hijacking or custom scroll libraries
- Parallax on multiple sections (one restrained use at most, only if it performs well on mobile)
- Loading screens or preloaders
- Homepage image carousels or auto-rotating sliders
- Custom cursors
- Scroll-triggered animation on every section
- Text that types, scrambles, or splits letter by letter
- Autoplaying audio

## Performance guardrail

- The site must pass Core Web Vitals on mobile (LCP, INP, CLS) while keeping visual quality.
- Test on a mid-range Android phone over 4G, not only on a desktop.
- Premium visuals are not an excuse for slow pages. If a visual choice breaks Core Web Vitals, change the visual choice.

More performance detail: [skill-technical.md](skill-technical.md).

## Business measure

Visual quality serves one journey:

Programme exploration → Enquiry / WhatsApp / Booking intent

Primary visitor-facing CTA remains **Book a Consultation**. When choosing between two design options, prefer the one that makes this journey clearer.

## Review checklist

Before marking any page or component done, check:

- [ ] The build order was followed. Motion was not added before layout and typography were settled.
- [ ] No new animation or UI component library was added.
- [ ] Headings and buttons are direct and literal ([skill-copy.md](skill-copy.md)).
- [ ] No health claim says “cure” or guarantees an outcome. Health pages are flagged for review.
- [ ] Images use Astro Image with correct sizes. The hero image is not lazy-loaded.
- [ ] Motion uses only the vocabulary above, with the stated timings.
- [ ] Reduced-motion is respected, and content is visible without JavaScript.
- [ ] Layout works in right-to-left.
- [ ] Text contrast meets WCAG AA.
- [ ] Mobile Core Web Vitals still pass.
- [ ] No rates or “from …” amounts except on a dedicated tariff surface.
