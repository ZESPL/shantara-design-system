---
name: shantara-website
description: >
  Build, extend, review, and manage Shantara's public marketing website.
  Use when working on information architecture, page composition, design-system
  sections, CMS modeling, content publishing, lead capture, analytics, SEO,
  schema, AEO/GEO, E-E-A-T, accessibility, performance, or website QA.
---

# Shantara Website Skill

This is the website-building skill. The Website Kit (`ui_kits/website/`) is the place humans and agents read it. Sample screens here illustrate composition — they are **not** a production site.

Read this file first. Open a sibling reference only when the task needs that inventory:

- [Information architecture](skill-ia.md) — nav, URLs, page inventory, publishing families
- [Sections and composition](skill-sections.md) — heroes, section library, cards, example pages
- [Content and leads](skill-content.md) — CMS entities, publishing, E-E-A-T, writing, consultation form
- [Technical](skill-technical.md) — analytics, SEO, schema, AEO/GEO, performance, accessibility
- [QA and workflow](skill-qa.md) — page workflow, checklists, what not to build, agent rules

Also read the design-system skill at the repo root (`SKILL.md`) and `readme.md` before inventing visual or clinical language.

## 1. Purpose

Shantara is a residential naturopathy and wellness retreat. **Welnez is the former name; use Shantara as the current brand name.** Do not introduce "Welnez" into new public-facing copy unless the task explicitly concerns legacy content, redirects, historical references, or migration.

The website is a **marketing, trust, education, and lead-generation website**, not a web application.

Prospective guests should answer, with minimum friction:

1. What is Shantara?
2. Can Shantara help with my need or condition?
3. What program or experience is relevant to me?
4. What actually happens during a stay?
5. Who is responsible for the clinical guidance?
6. Why should I trust Shantara?
7. What is included, how long does it take, and what may it cost?
8. What should I do next?

Primary business action:

> **Book a Consultation**

Make that action easy without becoming aggressive, cluttered, or sales-heavy.

Rates, currency amounts, “from …” figures, and stay totals appear **only** on dedicated tariff surfaces (`TariffScreen.js`, brand-deck tariff slides, handbook tariff). Program, condition, enquiry, and home pages **link** to the tariff card. Do not invent prices.

## 2. Operating principles

1. **Keep the architecture simple.** No generic page builder, no large backend for a marketing site, no CRM “just in case”, no dozens of analytics events, no hundreds of SEO landing pages, no parallel lead-capture flows, no one-component-per-page, no universal component with dozens of switches.
2. **Page type describes meaning, not layout.** Types: home, condition, program, experience, doctor, about, article, contact, consultation, policy. Use them for CMS, schema, analytics, breadcrumbs, indexing — not to force a fixed template. A Diabetes page and an Arthritis page may use different sections.
3. **Flexible pages, constrained sections.** Editors pick semantic sections (Process, FAQ, Expert, Gallery, Pricing, Feature Grid, Timeline) — not Spacer, Row, Column, Heading, Paragraph, Button, or 50/50 layout.
4. **One system wherever possible.** One consultation form, one lead entity, one analytics abstraction, one SEO metadata system, one schema generator, one type system, one spacing system, one section library.
5. **Evidence close to claims.** Medical claim → expert + source. Clinical process → doctor explanation. Program claim → inclusions/process. Guest experience → real photography/testimonial. Accreditation → exact credential. Facility claim → real facility photography.

## 3. Mental model

The site must not become a collection of page templates or a generic visual page builder.

It should become **a flexible publishing system built from a small, deliberate library of semantic components, with one lead journey, one content truth, and strong clinical trust.**

When uncertain, choose the simpler implementation that preserves that model.

Three layers:

```text
UI primitives  →  Semantic reusable sections  →  Flexible pages
```

Primitives are developer-level (Container, Heading, Button, Form Field, Accordion…). Sections are CMS-level and semantic. Pages assemble sections; they are not fixed templates.

## 4. Information architecture

Recommended top-level navigation:

- Conditions
- Programs
- Experience
- About
- Blog / Insights
- Contact
- **Book a Consultation** (primary CTA)

Do not create a mega-menu unless live page count genuinely requires it.

URL families (short, stable, human-readable):

```text
/conditions
/conditions/diabetes
/programs
/programs/[program-slug]
```

Do not invent condition-category SEO hubs (`/conditions/metabolic-lifestyle/diabetes`). Group visually on `/conditions` without creating indexable category pages.

Create a condition page only when Shantara can provide original content, a legitimate clinical perspective, a relevant program, medical review, and useful answers. Do not pre-build dozens of thin condition pages.

Experience pages (typical, not mandatory as individual URLs): Therapies, Rooms & Suites, Amenities & Activities, Farm & Dining, A Day at Shantara. Do not create a page per therapy or room category by default.

About: Our Story, Our Approach, Our Doctors, Medical Editorial Policy.

Utility: Book Consultation, Contact, Resident Policies, Cancellation Policy, Privacy Policy, Terms of Service.

Full inventory, publishing families, and URL rules: [skill-ia.md](skill-ia.md).

## 5. Compose a page

Every flexible content page conceptually contains title, slug, `page_type`, navigation metadata, SEO/social metadata, medical/editorial metadata when applicable, and `sections[]`.

Before composing:

1. Audience
2. Intent
3. Primary action
4. Proof required
5. Objections
6. Information priority

Then choose sections. Do not start by copying another page’s layout.

Heroes are a **family**, not one universal Hero with 30 props, and not 12 variants:

| Hero | Job | Typical uses |
| --- | --- | --- |
| Immersive | Place, emotion, photography | Home, Our Story, Farm & Dining, A Day at Shantara |
| Editorial | Topic + readability | Conditions, Therapies, Approach, Guides, Articles |
| Program | Commercial program, high intent | Program pages (duration/options, suitability, Book Consultation — **no invented price**) |
| Compact / utility | Minimal context | Contact, policies, listings |

Section library and example compositions: [skill-sections.md](skill-sections.md).

Cards are separate semantic components sharing type, spacing, radii, image behavior, and focus: `ConditionCard`, `ProgramCard`, `TherapyCard`, `RoomCard`, `DoctorCard`, `ArticleCard`, `GuestStoryCard`, `EventCard`. Do not make one `Card` with dozens of conditional fields.

Visual direction: calm, premium, natural, clinically credible, spacious, human, restrained. Prefer real Shantara photography. Avoid crowded cards, excessive badges/gradients, decorative animation, wellness clichés, unrelated stock, and oversized “premium” chrome.

## 6. Lead capture

**One** consultation form. Primary CTA is **Book a Consultation**.

Avoid parallel CTAs (Enquire Now, Request Callback, Know More, Get Quote, Start Journey) unless a genuinely different action exists.

Recommended fields:

- Name
- Mobile / WhatsApp number
- Email — optional
- Country
- Anything you'd like us to know? — optional

Do not turn first contact into a medical intake. Do not ask questions merely because a CRM has fields. Do not calculate stay totals on this form.

Automatically attach source URL, page type, content id/name, program/condition context, landing page, referrer, UTMs, timestamp. If the visitor submits from `/conditions/diabetes`, do not ask “Which condition?”.

Same form may appear as `/book-consultation`, modal, drawer, or inline panel. WhatsApp is a secondary channel, not a second lead architecture.

Success copy:

> Consultation request received. Our team will contact you to understand your requirements and guide you on the appropriate next step.

Fire `generate_lead` **only after** the destination confirms success. A button click is not a lead.

## 7. Analytics

One internal `track("event_name", properties)` abstraction. May forward to OpenPanel and GA4. Do not scatter `gtag` / `openpanel.track` in components.

Launch custom events only:

| Event | When | Properties |
| --- | --- | --- |
| `consultation_cta_click` | Book Consultation CTA clicked | `page_type`, `content_id`, `content_name`, `cta_location` (`header` / `hero` / `inline` / `bottom` / `sticky`) |
| `form_start` | Form genuinely started | `form_id`, `page_type` |
| `generate_lead` | Submission confirmed | `form_id`, `page_type`, `source_page` |
| `contact_click` | WhatsApp / phone / email | `contact_method`, `page_type`, `cta_location` |

Never send name, email, phone, free text, diagnosis, symptoms, medication, or medical history to GA4 or OpenPanel.

Primary funnel: Page View → Consultation CTA Click → Form Start → Generate Lead.

## 8. SEO, schema, AEO

SEO is part of the page system. Every indexable page: unique title, meta description, canonical, OG title/description/image, index/noindex, correct H1, crawlable internal links.

Prefer `/conditions/diabetes` and `/programs/weight-management`. Avoid keyword-variation pages and invented hub depth.

Generate schema from visible entity data. Do not add invisible claims. Do not ask editors to write JSON-LD. `Offer` only where real visible commercial information exists — in this repo, that means the tariff card, not invented program prices.

Do not create separate “AEO pages” or “GEO pages”. Answer real questions first, then expand. Prefer first-party facts over generic wellness copy. Do not treat `llms.txt` as a major SEO project.

Details: [skill-technical.md](skill-technical.md).

## 9. E-E-A-T and copy

Health content is an architectural requirement, not a badge.

- Identify author/reviewer, qualifications, last medically reviewed date, and references on medical pages.
- Maintain a public Medical Editorial Policy.
- Do not fake freshness by changing dates on every deploy.
- Testimonials describe experience, stay, food, service, how the guest felt — never clinical efficacy.
- Avoid “cures diabetes”, “guarantees reversal”, “eliminates hypertension”, “permanent cure”, guaranteed detox claims. If a program name contains a strong outcome claim such as “reversal”, flag it for clinical/legal review.

Tone: calm, clear, warm, specific, clinically responsible, human. Prefer concrete, verifiable details. Separate education (guides) from selling (program pages); link them.

Do not invent content, credentials, prices, medical facts, or program details. Flag missing facts.

## 10. Performance and accessibility

Marketing site: prefer static generation / prerendering. Minimize client JS. Hydrate only forms, navigation, gallery, accordion, modal/drawer, analytics, video.

Accessibility is baseline: semantic headings, keyboard access, visible focus, meaningful alt, labelled fields, associated errors, contrast, 44px touch targets, reduced-motion, correct ARIA on accordion/dialog, captions/transcripts when needed. Do not rely on color alone.

This kit follows the design-system accessibility contract in `guidelines/accessibility.html`.

## 11. Page workflow

1. Define the page job (audience, intent, one primary action, page type, proof).
2. Reuse existing semantic sections.
3. Order content from the visitor’s decision backward.
4. Use real, verified Shantara information; flag gaps.
5. Add medical governance if the page is health/condition content.
6. Add SEO metadata.
7. Verify schema matches visible content.
8. Verify only meaningful analytics events fire.
9. Run the QA checklists in [skill-qa.md](skill-qa.md).

## 12. What not to build

Do not introduce without a demonstrated need: rigid templates per content family; condition-category SEO hubs; individual therapy/room pages by default; multiple consultation forms or synonymous primary CTAs; drag-and-drop spacers/rows; one universal card or hero with dozens of props; 10+ hero variants; separate AEO/GEO systems; separate GA4 and OpenPanel implementations; CRM lifecycle analytics at launch; custom backend only for analytics; excessive events; fake E-E-A-T badges or review schema; unsupported medical claims; automatically refreshed dates; hundreds of generic AI articles; keyword-variation landers; complex personalization before traffic exists.

Do not build the entire production website inside this kit. Samples stay thin.

## 13. Agent behavior

When asked to modify Shantara’s website:

1. Inspect the existing implementation before changing architecture.
2. Preserve working patterns unless there is a clear reason to replace them.
3. Make the least invasive change that solves the task.
4. Reuse existing sections/components.
5. Do not invent content, credentials, prices, medical facts, or program details.
6. Flag missing information explicitly.
7. Do not introduce dependencies casually.
8. Do not redesign unrelated pages.
9. Do not create a new abstraction for a one-off case unless it is clearly reusable.
10. Preserve accessibility, SEO, analytics, and schema behavior during changes.
11. Test responsive behavior.
12. Verify no health/PII data is sent to analytics.
13. Prefer clear implementation over clever implementation.
14. If requirements conflict, prioritize: factual/clinical safety → user clarity → conversion simplicity → maintainability → design consistency → implementation elegance.

A change is done only when it is visually integrated, mobile-responsive, accessible, performant, content-complete, SEO-complete, schema-correct, analytics-aware, privacy-safe, medically governed where relevant, tested, and not unnecessarily complex. “Code compiles” is not done.

## 14. Sample kit map

These files are **previews** of the skill, not the live site:

| Sample | Skill page type | Notes |
| --- | --- | --- |
| `HomeScreen.js` | home | Immersive hero, approach, program cards, experience teasers |
| `ConditionsScreen.js` | condition listing | Visual grouping only — no category URLs |
| `ProgrammeScreen.js` | program | Program hero composition; tariff link, no rates |
| `ExperienceScreen.js` | experience hub | Therapies, rooms, farm, a day — not one page per room |
| `AboutScreen.js` | about hub | Story, approach, doctors, editorial policy |
| `JournalScreen.js` | article listing | Insights / publishing families |
| `ContactScreen.js` | contact | Compact hero + location |
| `ConsultationScreen.js` | consultation | One short form |
| `TariffScreen.js` | pricing surface | **Only** place rates appear |
| `SiteChrome.js` | chrome | Skill nav + wordmark-only logo + Book a Consultation |

Kit notes for humans: [README.md](README.md).
