# Shantara — website kit

Builder notes for the public marketing website. **This kit is guidance plus thin samples**, not a production site. All *content* that appears in the samples — programmes, therapies, room categories, tariffs, policies, contact — comes from the Shantara Property Handbook (draft, July 2026). Photography is the property shoot supplied with the brand package.

The website-building skill lives here:

- Agent skill: [`SKILL.md`](SKILL.md)
- Information architecture: [`skill-ia.md`](skill-ia.md)
- Heroes, sections, cards: [`skill-sections.md`](skill-sections.md)
- CMS, publishing, leads, E-E-A-T: [`skill-content.md`](skill-content.md)
- Analytics, SEO, schema, a11y: [`skill-technical.md`](skill-technical.md)
- Workflow and QA: [`skill-qa.md`](skill-qa.md)

In the catalog, those files are the **Website kit** cards. Open `index.html` for sample screens.

Welnez is the former name. Use **Shantara** in all new public copy.

## 1. What the site must do

The site is a marketing, trust, education, and lead-generation website — not a web application.

A prospective guest should be able to answer:

1. What is Shantara?
2. Can Shantara help with my need or condition?
3. What program or experience is relevant to me?
4. What actually happens during a stay?
5. Who is responsible for the clinical guidance?
6. Why should I trust Shantara?
7. What is included, how long does it take, and what may it cost?
8. What should I do next?

The primary action is **Book a Consultation**. Make it easy without becoming sales-heavy.

Rates and stay totals appear **only** on the tariff card (`TariffScreen.js`), brand-deck tariff slides, and the handbook tariff section. Every other surface links to the tariff card.

## 2. Operating principles

- Keep the architecture simple. No generic page builder, no large backend for a marketing site, no parallel lead flows, no one-component-per-page.
- Page type (home, condition, program, experience, doctor, about, article, contact, consultation, policy) describes meaning — CMS, schema, analytics, breadcrumbs — **not** a fixed layout.
- Pages are assembled from a curated library of **semantic sections**. Editors pick Process, FAQ, Expert, Gallery — not Spacer, Row, Column.
- One consultation form, one lead entity, one analytics abstraction, one SEO/schema system, one type and spacing system.
- Put proof next to the claim it supports. Do not rely on a single “Why Shantara” block.

Mental model: a flexible publishing system built from a small library of semantic components, with one lead journey, one content truth, and strong clinical trust.

## 3. Information architecture

Recommended top-level navigation:

| Nav item | Role | Kit sample |
| --- | --- | --- |
| Conditions | Condition listing (visual groups only — no SEO category URLs) | `ConditionsScreen.js` |
| Programs | Program listing / detail | Home grid + `ProgrammeScreen.js` |
| Experience | Therapies, rooms, amenities, farm, a day | `ExperienceScreen.js` |
| About | Story, approach, doctors, editorial policy | `AboutScreen.js` |
| Insights | Publishing families (not a generic blog mill) | `JournalScreen.js` |
| Contact | Location and directions | `ContactScreen.js` |
| Book a Consultation | Primary CTA | `ConsultationScreen.js` |

Do not add a mega-menu unless live page count requires it.

### URL families

```text
/conditions
/conditions/diabetes
/programs
/programs/[program-slug]
/book-consultation
/contact
```

Do not create `/conditions/metabolic-lifestyle/diabetes` hubs. Do not pre-build dozens of thin condition pages. Do not create a page per therapy or room category by default.

Utility pages to plan (not all sampled): Resident Policies, Cancellation Policy, Privacy Policy, Terms of Service.

Full inventory: [`skill-ia.md`](skill-ia.md).

## 4. Page composition

Every flexible page: title, slug, `page_type`, nav metadata, SEO/social metadata, medical/editorial metadata when needed, and `sections[]`.

Before composing, write down audience, intent, one primary action, proof, objections, and what must appear before the fold. Then choose sections. Do not copy another page’s layout.

### Hero family

Do not build one Hero with 30 props, or 12 variants.

| Hero | Job | Sample |
| --- | --- | --- |
| Immersive | Place, photography, short CTA | Home |
| Editorial | Topic + readability | Conditions, Insights |
| Program | Commercial program, duration, suitability, Book Consultation | Programme (Detox) |
| Compact / utility | Minimal context | Contact, Consultation, tariff |

### Section library

Section Intro · Rich Content · Media + Content · Full-width Media · Card Collection · Feature Grid · Key Facts · Stats / Proof · Process / Steps · Timeline · Table · Pricing / Package Options (tariff only) · Gallery · Expert / Doctor · Medical Reviewer · Expert Quote · Accreditation · Testimonial · Testimonial Collection · Evidence / References · FAQ · Related Content · Callout · Contact / Location · Lead / Consultation CTA.

Good CMS sections are semantic. Bad ones are layout mechanics (Spacer, Row, Column, Heading, Paragraph, Button).

Example compositions (Diabetes ≠ Arthritis; Weight Management ≠ Executive Wellness) live in [`skill-sections.md`](skill-sections.md).

### Cards

Separate semantic cards sharing type, spacing, radii, image behavior, and focus: Condition, Program, Therapy, Room, Doctor, Article, Guest Story, Event. Do not make one `Card` with dozens of conditional fields. Kit samples compose the design-system `Card` primitive to show those jobs.

## 5. Copy tone

Calm, clear, warm, specific, clinically responsible, human.

Prefer concrete, verifiable details over “transformative holistic wellness”. Separate education (guides) from selling (program pages). The first screen should say what the page is, why it matters, and what to do next.

Never promise a clinical outcome. If a program name contains a strong claim such as “reversal”, flag it for clinical/legal review.

Do not invent facts, credentials, prices, or program details. Flag gaps.

Also follow `guidelines/brand-copywriting.html` and the five non-obvious rules in the root `SKILL.md`.

## 6. Lead capture

**One** form. Fields: Name; Mobile / WhatsApp; Email (optional); Country; Anything you'd like us to know? (optional).

Do not turn first contact into a Health Assessment. Do not calculate stay totals. Attach source page, page type, content id/name, and UTMs automatically.

Same form as `/book-consultation`, modal, drawer, or inline panel. WhatsApp is a secondary channel.

Success: *Consultation request received. Our team will contact you to understand your requirements and guide you on the appropriate next step.*

`generate_lead` fires only after the destination confirms success.

## 7. Analytics, SEO, schema

One `track(name, props)` abstraction. Launch events only: `consultation_cta_click`, `form_start`, `generate_lead`, `contact_click`. Never send PII or health data to GA4 or OpenPanel.

Every indexable page: unique title, meta, canonical, OG, correct H1, crawlable links. Generate schema from visible entity data. `Offer` only where real commercial figures are published (the tariff card).

Do not create separate AEO/GEO page systems. Answer real questions first, then expand. Prefer first-party Shantara facts.

Details: [`skill-technical.md`](skill-technical.md).

## 8. E-E-A-T and publishing

Health content needs author/reviewer, qualifications, last medically reviewed date, and references. Maintain a public Medical Editorial Policy. Do not fake freshness by changing dates on every deploy. Testimonials describe a stay — never clinical efficacy.

Publishing families (not article volume):

- Clinical knowledge — Doctor Answers, Clinical Guides, Evidence Notes
- Real experience — Guest Stories, Clinical Journeys, Food & Recipes
- Authority — Doctor Talks, Events, Research, Media, Accreditations

## 9. i18n, routing, components

The kit uses `i18n.js` (`t()` English keys, Arabic under `[dir=rtl]`). Add keys for new sample copy; do not embed prices in non-tariff keys.

Routing in the sample is an in-page `view` switch, not production URLs. Name views after the skill: `home`, `conditions`, `programme`, `experience`, `about`, `journal`, `contact`, `booking`, `tariffs`.

Every visible control comes from the design-system bundle (`Button`, `Card`, `Tag`, `Tabs`, `Accordion`, `Input`, `Select`, `Checkbox`, `Textarea`, `Radio`, `Dialog`, `Toast`, `Spinner`, `Badge`, `Divider`, `Breadcrumbs`, `Tooltip`, `IconButton`, `Icon`, `Logo`, `PatternPanel`). Nothing is re-implemented locally except `Photo`.

Primitives recommended by the skill that are not yet first-class components (Container, Stack, Cluster, Video) should be composed from existing tokens and markup — do not invent a second component set in the kit.

## 10. Sample screens

| File | Surface |
| --- | --- |
| `SiteChrome.js` | Skill nav + wordmark-only logo + Book a Consultation; Pine Tree footer under one top-edge rosette band (full lockup) |
| `HomeScreen.js` | Immersive hero, approach + proof, statement band, program cards, two-up photos, insights, FAQ, consultation CTA |
| `ConditionsScreen.js` | Compact/editorial listing — visual groups as deck-style tiles, no category URLs |
| `ProgrammeScreen.js` | Detox program hero: who it suits, two-route comparison, day shape, sticky panel linking to the tariff card |
| `ExperienceScreen.js` | Thin hub — four-movement day, photo mosaic, therapies / rooms / farm / a day |
| `AboutScreen.js` | Thin hub — olive PatternPanel break, stats strip, statement, story / approach / doctors / policy |
| `JournalScreen.js` | Insights index with publishing-family tabs |
| `ContactScreen.js` | Compact hero, photo + caption, distances, consultation CTA |
| `ConsultationScreen.js` | One short consultation form + numbered process + success state |
| `TariffScreen.js` | Dedicated tariff card — the only website surface that quotes rates |
| `Photo.js` | Thin `<img>` wrapper over `assets/photos/*` |

**Deliberately not built:** individual condition, therapy, or room pages; a CMS; analytics/SEO/schema implementation; multiple forms; stay-total calculators; a complete sitemap.

## 11. Do / don’t

**Do**

- Reuse semantic sections before inventing new ones.
- Use Book a Consultation as the primary CTA.
- Link to the tariff card for cost.
- Put medical review next to health claims.
- Prefer real photography and verified handbook facts.
- Keep samples thin.

**Don’t**

- Scatter ₹ / $ / £ or “from …” amounts.
- Ask medical-intake questions on first contact.
- Promise clinical outcomes.
- Introduce Welnez in new copy.
- Build condition-category SEO hubs.
- Create one universal Hero or Card with dozens of props.
- Expand this kit into the production website.

## 12. Confirm before any real use

Tariffs (valid to 31 Dec 2026 and marked *to confirm* in the handbook — edit the tariff card only), the Monday-intake convention and monthly cap presentation, programme durations (indicative — the handbook does not fix nights per programme), and insights copy, which is written for this kit rather than supplied.

The program name “Diabetes Reversal” is handbook wording. Flag it for clinical/legal review; do not present reversal as a guaranteed outcome.
