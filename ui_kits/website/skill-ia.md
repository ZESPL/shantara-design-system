# Information architecture

Back to the [website skill](SKILL.md).

The site architecture should remain simple and expandable.

## Primary navigation

Recommended top-level structure:

- Conditions
- Programs
- Experience
- About
- Blog / Insights
- Contact
- Book a Consultation

The primary CTA is **Book a Consultation**.

Do not create a mega-menu unless the number of live pages genuinely makes normal navigation difficult.

## Conditions

Use:

```text
/conditions
/conditions/diabetes
/conditions/obesity
/conditions/pcos
...
```

Do not create condition-category hub pages solely for SEO such as:

```text
/conditions/metabolic-lifestyle/diabetes
```

Conditions may be visually grouped on `/conditions` without creating indexable category pages.

Create a condition page only when Shantara can provide:

- meaningful original content;
- a legitimate clinical perspective;
- a relevant program or approach;
- medical review;
- useful answers to prospective guests.

Do not create dozens of thin condition pages in advance.

## Programs

Use:

```text
/programs
/programs/[program-slug]
```

Program pages are commercially important and should explain:

- what the program is;
- who it is intended for;
- duration/options;
- inclusions;
- clinical supervision;
- experience;
- price or pricing approach when available — **in this repo, link to the tariff card; do not invent or copy rates**;
- next step.

## Experience

Typical pages may include:

- Therapies
- Rooms & Suites
- Amenities & Activities
- Farm & Dining
- A Day at Shantara

Do not create individual pages for every therapy or every room category unless future content volume or search intent justifies it.

## About

Typical pages:

- Our Story
- Our Approach
- Our Doctors
- Medical Editorial Policy

## Publishing families

Traditional blog articles may continue to exist, but do not make generic blog production the center of the content strategy.

### Clinical Knowledge

- Doctor Answers
- Clinical Guides
- Evidence Notes

### Real Shantara Experience

- Guest Stories
- Clinical Journeys
- Food & Recipes

### Authority

- Doctor Talks
- Events
- Research/publications
- Media coverage
- Accreditations/milestones

## Utility pages

- Book Consultation
- Contact
- Resident Policies
- Cancellation Policy
- Privacy Policy
- Terms of Service

## Page types

A page may be classified as:

- home
- condition
- program
- experience
- doctor
- about
- article
- contact
- consultation
- policy

This classification may control CMS organization, schema, analytics context, breadcrumbs, search indexing behavior, and editorial requirements.

It must **not** force a fixed page layout.

## URL principles

Use short, stable, human-readable URLs.

Prefer:

```text
/conditions/diabetes
/programs/weight-management
```

Avoid unnecessary hierarchy and keyword repetition.

Do not create multiple pages targeting trivial keyword variations.

When URLs or brand naming change:

- use permanent redirects where appropriate;
- do not leave duplicate indexable legacy URLs;
- preserve inbound equity.

Do not guess legacy URL mappings. Inspect the actual existing site before migration.

## Internal linking

Create meaningful relationships:

- Condition → relevant Program
- Program → Condition
- Program → Therapy
- Clinical Guide → Condition/Program
- Doctor Answer → deeper Guide
- Article → relevant core page

Do not insert links solely for keyword density.

## Kit samples

The Website Kit shows **one thin sample per family**, not every URL above.

| Skill URL family | Kit sample |
| --- | --- |
| `/` | `HomeScreen.js` |
| `/conditions` | `ConditionsScreen.js` |
| `/programs/[slug]` | `ProgrammeScreen.js` (Detox) |
| Experience hub | `ExperienceScreen.js` |
| About hub | `AboutScreen.js` |
| Insights listing | `JournalScreen.js` |
| `/contact` | `ContactScreen.js` |
| `/book-consultation` | `ConsultationScreen.js` |
| Tariff / pricing | `TariffScreen.js` |

Do not expand the kit into the full production sitemap.
