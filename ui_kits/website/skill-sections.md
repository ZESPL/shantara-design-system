# Sections, heroes, and cards

Back to the [website skill](SKILL.md).

## Design-system layers

```text
UI primitives
    ↓
Semantic reusable sections
    ↓
Flexible pages
```

### UI primitives

Developer-level components, not CMS sections. Recommended:

- Container
- Section shell
- Stack
- Cluster / inline layout
- Heading
- Text
- Link
- Button
- Badge
- Icon
- Image
- Video
- Divider
- Breadcrumb
- Form Field
- Select
- Textarea
- Checkbox
- Dialog / Drawer
- Accordion primitives

Keep design tokens centralized: color, typography, spacing, width, radius, shadows, borders, animation, breakpoints.

Do not use arbitrary spacing or one-off styling on individual pages. In this repo, primitives live in `components/` and tokens in `tokens/`.

### Visual direction

Shantara should feel: calm, premium, natural, clinically credible, spacious, human, restrained.

Avoid: crowded cards; excessive badges; excessive gradients; decorative animations that slow reading; wellness clichés that undermine clinical credibility; stock photography that looks unrelated to the actual retreat; excessive text on top of imagery; oversized components simply because they look “premium”.

Real Shantara photography should be preferred wherever possible.

## Page composition model

Every flexible content page should conceptually contain:

```text
Page
├── title
├── slug
├── page_type
├── navigation metadata
├── SEO/social metadata
├── medical/editorial metadata when applicable
└── sections[]
```

The `sections[]` array is flexible.

Do not make fixed condition/program/experience/story/contact templates.

### Before composing any page

Determine:

1. **Audience:** Who is this page for?
2. **Intent:** What are they trying to understand or decide?
3. **Primary action:** What should they do next?
4. **Proof:** What must they see before trusting the page?
5. **Objections/questions:** What may stop them?
6. **Information priority:** What must appear before they scroll far?

Then choose sections. Do not start by copying another page layout.

## Hero component family

Do not force every page into one universal hero.

Build multiple intentionally designed hero components. These should be separate purposeful components or strongly separated variants with distinct schemas.

Do not create a single Hero with 30 props. Do not create 12 hero variants.

### Immersive Hero

Purpose: emotion; sense of place; brand positioning; strong photography/video.

Typical uses: Home; Our Story; Farm & Dining; A Day at Shantara; possibly Rooms & Suites.

Typical fields: eyebrow (optional); title; supporting text (short); primary CTA (optional); secondary CTA (optional); image/video; optional short trust cue.

Do not overload it with program tables, long copy, or multiple data points.

### Editorial Hero

Purpose: establish topic clearly; support educational/medical content; prioritize readability.

Typical uses: Conditions; Therapies; Our Approach; Clinical Guides; Doctor Answers; Articles.

Typical fields: eyebrow/category; title; summary; optional image; optional author/reviewer metadata; optional updated/reviewed date.

### Program Hero

Purpose: immediately explain a commercial program; communicate high-intent information.

Typical fields: program title; concise proposition; optional image; duration/options; optional starting price (**only if already published on the tariff card — never invent**); short suitability statement; Book Consultation CTA.

Do not require every field if it is not relevant.

### Compact / Utility Hero

Purpose: establish page context with minimal vertical space.

Typical uses: Contact; Policies; Blog listing; utility pages; simple directory/listing pages.

Typical fields: title; optional short description; optional breadcrumb.

## Reusable section library

Build a curated library. Add a new section only when a recurring need cannot be met cleanly by the existing library.

Good CMS sections: Process; FAQ; Expert; Gallery; Pricing; Feature Grid; Timeline.

Bad CMS sections: Spacer; Row; Column; Heading; Paragraph; Button; 50/50 layout.

Editors should select **what the section means**, not manually recreate layout mechanics.

### Section Intro

Eyebrow; heading; short introduction. Do not use it as a substitute for long content.

### Rich Content

Long-form text; headings; lists; quotes; inline links; simple inline media. Must support good editorial typography. Do not allow arbitrary visual layout construction inside the rich text editor.

### Media + Content

When text and media need equal emphasis. Limited variants: media left; media right; media top on mobile.

Fields: optional eyebrow; title; content; image/video; optional CTA.

### Full-width Media

Retreat photography; facility visual; landscape; meaningful video. May optionally include a short caption.

### Card Collection

Collections of entities: conditions; programs; therapies; rooms; doctors; articles; guest stories.

The section controls heading, introduction, selected items or a controlled query, and layout. Entity-specific cards remain separate components.

### Feature Grid

Program inclusions; facilities; amenities; principles; benefits; capabilities. Keep individual items short. Do not place paragraphs inside every feature tile.

### Key Facts

3–6 scannable data points. Examples: program duration; consultation type; room occupancy; supervision; meal plan; typical stay. Use for facts, not promotional slogans.

### Stats / Proof Strip

Concrete, verifiable numbers or credentials. Do not use invented or unverified metrics.

### Process / Steps

Sequential processes: inquiry → consultation → assessment → plan → stay → follow-up; arrival process; booking process. Keep steps concise.

### Timeline

Chronological content: A Day at Shantara; company history; guest journey; program schedule. Do not build a separate schedule component when Timeline can do the job.

### Table

One general controlled table section for: room comparison; program comparison; sample menu; schedule; package comparison.

Display modes may include: standard; comparison; schedule. Do not create a new component for every table use case.

### Pricing / Package Options

Use when commercial options need stronger presentation than a generic table.

Typical fields: package/duration; price or “from” price; inclusions summary; occupancy/room assumptions if necessary; CTA.

Prices must match visible commercial information and current policy. **In this design system, publish figures only on the tariff card / handbook tariff / brand-deck tariff slides.** Elsewhere, link to that surface.

### Gallery

Rooms; therapies; food; retreat environment; facilities. Prefer real photography. Support captions only when useful.

### Expert / Doctor Section

Full doctor/expert profile within a page. Typical fields: photo; name; qualifications; role; area of practice; short biography; relevant link/CTA.

### Medical Reviewer

A compact attribution component, kept separate from a full doctor profile.

Typical output:

```text
Medically reviewed by Dr. X, BNYS
Last medically reviewed: 12 September 2026
```

### Expert Quote

Concise clinician commentary embedded near a relevant claim. The quote must be attributable to a real expert.

### Accreditation / Credential Strip

Use only for legitimate, current credentials. Prefer exact credential name; issuing organization; registration/accreditation number where appropriate; validity when relevant.

Do not show logos without context if the visitor cannot understand what they mean.

### Testimonial

One significant guest story/testimonial. Support: real name when consented; anonymized presentation when required; photo/video when consented; context of stay; quote/story.

Do not turn testimonials into unsupported medical efficacy claims.

### Testimonial Collection

A set of shorter testimonials. Do not overload pages with large carousels.

### Evidence / References

Clinical sources; research references; guidelines; authoritative health references. Prefer direct source links where appropriate. Do not add references decoratively. Every reference should support actual content.

### FAQ

Contextual FAQs. Good examples: How long should I stay?; Can a companion stay with me?; What happens before arrival?; Should I bring my existing medicines?; What is included in the program?

Do not create a separate giant FAQ architecture unless needed.

### Related Content

Connect: condition → relevant program; program → relevant condition/therapy; article → condition/program; doctor answer → deeper clinical guide.

Keep relevance high. Do not use random “you may also like” content.

### Callout

Use sparingly for: important clinical note; caution; policy; important takeaway; critical booking condition.

### Contact / Location

Address; map; travel directions; telephone; email; WhatsApp; airport/railway directions.

### Lead / Consultation CTA

A unified CTA system. May render as: CTA banner; inline CTA panel; modal/drawer trigger; sticky mobile CTA.

All should lead to the same underlying consultation mechanism.

## Card component family

Use shared design language but separate semantic card components.

Recommended cards:

- ConditionCard
- ProgramCard
- TherapyCard
- RoomCard
- DoctorCard
- ArticleCard
- GuestStoryCard
- EventCard

Do not create one `Card` component with dozens of conditional fields.

Cards should share: typography; spacing; radii; image behavior; interaction; focus states.

Each card should present information appropriate to its entity.

Example ProgramCard:

```text
image
program name
one-line proposition
duration
CTA
```

Example DoctorCard:

```text
photo
name
qualification
area of practice
```

In this kit, cards are composed from the design-system `Card` primitive plus type, photo, and badge — they are samples of the semantic jobs, not a production card library.

## Example page compositions

These are examples, not templates.

### Diabetes

```text
Editorial Hero
Rich Content
Expert Quote
Media + Content
Feature Grid
Related Program
Medical Reviewer
FAQ
Evidence / References
Related Content
Consultation CTA
```

### Arthritis

```text
Editorial Hero
Key Facts
Rich Content
Media + Content
Therapy Card Collection
Expert Section
FAQ
Evidence / References
Consultation CTA
```

The Arthritis page does not need to copy Diabetes.

### Weight Management Program

```text
Program Hero
Key Facts
Rich Content: Who This Is For
Feature Grid: Inclusions
Package / Pricing Options   ← link to tariff card; do not invent rates
Process
Timeline: Typical Day
Therapy Card Collection
Doctor / Expert Section
Gallery
Testimonials
FAQ
Consultation CTA
```

### Executive Wellness

```text
Program Hero
Rich Content
Feature Grid
Package Table               ← tariff card if figures are required
Media + Content
FAQ
Consultation CTA
```

### Therapies

```text
Editorial Hero
Rich Content
Therapy Card Collection
Media + Content
FAQ
Consultation CTA
```

### Rooms & Suites

```text
Immersive or Editorial Hero
Room Card Collection
Comparison Table
Gallery
Feature Grid
Consultation CTA
```

### Farm & Dining

```text
Immersive Hero
Media + Content
Feature Grid
Full-width Media
Table: Sample Menu
Gallery
FAQ
Consultation CTA
```

### A Day at Shantara

```text
Immersive Hero
Rich Content
Timeline
Gallery
Consultation CTA
```

### Our Story

```text
Immersive Hero
Media + Content
Timeline
Stats / Proof
Gallery
Rich Content
Consultation CTA
```

### Our Approach

```text
Editorial Hero
Rich Content
Feature Grid
Process
Media + Content
Expert Section
FAQ
Consultation CTA
```

### Book Consultation

```text
Compact or Conversion-focused Hero
Rich Content
Consultation Form
Process: What Happens Next
Trust / Credentials
FAQ
```

### Contact

```text
Compact Hero
Contact / Location
Directions
Media + Content if useful
FAQ
Consultation CTA
```

### Policy

```text
Compact Hero
Rich Content
optional Table/Callout
```

## Managing design-system growth

When a new design requirement appears:

1. Try an existing section unchanged.
2. Try a small, broadly useful variant.
3. Only then create a new section.

Create a new section when the semantic job is genuinely different, it will likely recur, and forcing it into an existing section creates confusing fields or conditionals.

Do not create a new section when spacing is slightly different, one page wants an image on the opposite side, the heading is shorter, or one designer wants a novel decorative treatment.
