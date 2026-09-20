# Content model, publishing, and lead capture

Back to the [website skill](SKILL.md).

## CMS / content model

This model is instantiated in [`content/`](../../content/). Empty folders (`guest-stories/`, `events/`, `testimonials/`) mean the entity is not ready. Do not invent records to fill them. Stub conditions with `needs_original` and empty clinical bodies until medical review exists.

Model business/content entities, not layout hacks. One entity, then localized records per locale. Do not duplicate types as `ProgramEn` / `ProgramAr`. English is the only populated locale until a localisation project.

Every translatable record should carry: `locale`; `translation_status` (`draft` | `translated` | `review_required` | `published`); `source_version`; `last_translated_at`; `translation_reviewed_at`; `translation_reviewed_by`; `needs_translation_review`. Keep source medical review (`medical_reviewer`, `last_medically_reviewed`) distinct from language review and from localized clinical review.

A translation publishes on its own. It must not block English. When English changes materially, bump `source_version` so existing translations can be flagged stale.

Localized slugs are optional later. Until then, reuse the English slug under the locale prefix. Relationships use stable IDs, never URLs.

### Condition

name; slug; short summary; clinical content; relevant programs; relevant therapies; medical reviewer; last medically reviewed; references; FAQs; related content; SEO metadata; optional `icp_ids[]` referencing [`docs/icp.md`](../../docs/icp.md) (`weight_metabolic`, `pain_mobility`, `stress_sleep_burnout`, `digestive_inflammatory`, `hormonal_vitality`, `healthy_ageing_longevity`, `short_reset`). ICPs are not a second content type.

### Program

name; slug; proposition; durations; suitability; inclusions; pricing/package data (**figures live on the tariff surface**); related conditions; relevant therapies; clinicians; FAQs; SEO metadata; optional `icp_ids[]` (same taxonomy). Programmes reference ICPs. They do not define them.

### Doctor

full name; slug/internal identifier; photograph; qualification; role; area of practice; registration/licence information where appropriate; biography; professional memberships; publications/research if applicable; external profiles if appropriate.

### Therapy

name; short description; purpose; how used at Shantara; relevant programs; image.

### Room

name; summary; images; occupancy; amenities; size if relevant; commercial information if applicable (**rates only on the tariff card**).

### Article / Clinical Guide

title; slug; category; author; medical reviewer when required; date published; date modified; last medically reviewed; content; references; related conditions/programs; SEO metadata.

### Doctor Answer

question; slug; short answer; detailed answer; doctor; references when required; reviewed/updated date; related content.

### Guest Story

title; guest display name; consent status; program/stay context; story; images/video; publication status.

### Event

title; date/time; location; speakers; description; registration details; post-event assets; recording; key takeaways.

### Testimonial

quote; guest; context; consent; image/video; related program.

### FAQ

Use reusable FAQ records only if reuse is genuinely useful. Otherwise a structured FAQ list inside pages may be simpler.

## Site settings

Centralize: business name; contact information; physical address; social links; Google Maps/location data; primary CTA labels; consultation form settings; global SEO defaults; Organization/LocalBusiness schema data; analytics IDs; social share defaults.

## Page builder model

Use a controlled section list.

Each section must have: semantic type; defined fields; controlled variants; predictable responsive behavior; accessibility behavior.

Do not expose developer primitives to editors.

## Unified lead capture

Shantara should have **one lead-capture system**.

Primary visitor-facing CTA:

> **Book a Consultation**

Form chrome may use **Send your details**. Do not list **Enquire about a stay** or **Request a consultation** as equivalent primary CTAs. Visitor-facing language follows [skill-copy.md](skill-copy.md).

Avoid multiple equivalent CTAs such as Enquire Now, Request Callback, Know More, Get Quote, Start Journey unless a genuinely different action exists.

### Consultation form

Start simple.

Recommended fields:

- Name
- Mobile / WhatsApp number
- Email — optional
- Country
- Anything you'd like us to know? — optional

Do not turn first contact into a full medical intake form.

Do not ask questions merely because the CRM has fields for them.

Do not calculate stay totals on this form or on program pages.

### Capture context automatically

The visitor should not repeatedly select information the site already knows.

Automatically attach: **locale**; source page URL; page type; content ID/name; program/condition context where relevant; landing page; referrer; UTM source; UTM medium; UTM campaign; timestamp.

Visitor-facing labels translate. Internal field keys stay `full_name`, `phone`, `email`, `country`, `notes`.

Example: if a visitor submits from `/en/conditions/diabetes`, the lead context should reflect that without asking “Which condition are you interested in?”

### Presentation options

The same underlying form may appear as: dedicated `/en/book-consultation` page; modal; drawer; inline panel.

Do not maintain separate forms or separate field definitions.

### WhatsApp

WhatsApp is a secondary communication channel, not a separate lead architecture.

Track WhatsApp clicks, but keep Book a Consultation as the main structured lead path.

### Backend simplicity

Do not build a custom application backend purely because the marketing site has a form.

Use the simplest reliable submission destination available to the project: form service; serverless function; lightweight API; existing CRM endpoint.

The browser only needs a success/failure response.

### Validation and success

- validate clearly;
- preserve entered data after a validation error;
- show a meaningful success state;
- do not fire `generate_lead` before confirmed success.

Recommended success copy:

> Consultation request received. Our team will contact you to understand your requirements and guide you on the appropriate next step.

A secondary WhatsApp action may be offered after lead capture.

## Publishing strategy

Do not measure success by article volume.

Prioritize content that exposes Shantara’s actual expertise and experience.

Map publishing effort to need-led ICPs and intent stages in [`docs/icp.md`](../../docs/icp.md). Do not build a content calendar around programme names. SEO demand must not determine clinical truth.

### Doctor Answers

High-priority recurring format.

Examples:

- Can I continue my existing medication during a naturopathy stay?
- How long should a residential weight-management program be?
- What happens in the first naturopathy consultation?

Recommended structure: question; short answer; detailed answer; doctor; credentials; sources where required; reviewed/updated date; related program/guide.

### Clinical Guides

Longer evergreen resources.

Examples:

- Understanding Insulin Resistance
- Managing PCOS Through Lifestyle Change
- What Happens During a Naturopathy Assessment?
- Therapeutic Fasting: What Patients Should Know

Must prioritize education over promotion.

### Evidence Notes

Short expert interpretation of new research, guidelines, or relevant medical developments.

Prefer expert commentary over generic SEO summarization.

### Guest Stories

Strong first-hand Experience signal.

May include: why guest came; arrival; stay; food; therapies; environment; what surprised them; follow-up experience.

Do not imply guaranteed clinical outcomes.

### Clinical Journeys

Potentially strong E-E-A-T content if handled carefully.

Examples: how a 21-day stay is structured; assessment → plan → stay → review → discharge.

Use consent/anonymization appropriately.

### Food & Recipes

Use real Shantara dishes and practice.

Include: real photography; ingredients; method; when/how served; nutrition notes from qualified team members where appropriate.

Avoid generic recipe SEO filler.

### Events / Doctor Talks

Before event: information; speaker; date; registration.

After event: photos; recording; key takeaways; related guides/answers.

Do not discard event pages immediately after the event if they can become useful authority content.

### Media / Authority

Publish: legitimate press coverage; interviews; conference participation; publications; accreditation milestones.

Do not manufacture news solely to appear active.

## E-E-A-T and medical content governance

Health-related content must meet a higher standard.

Treat E-E-A-T as an architectural/content requirement, not a badge. It applies independently to each translation. An English medical review does not make a poor translation trustworthy. Translations must not strengthen or weaken claims, change certainty, medication, terminology, or contraindications.

### Experience

Show first-hand Shantara reality: real facility photography; real therapy spaces; actual program process; actual food; actual rooms; actual day schedule; real clinicians; real guest stories.

### Expertise

Medical/health content should identify: author where relevant; medical reviewer; qualifications; last medically reviewed date; references.

The doctor's profile should make their background verifiable.

### Authority

Support authority with real-world evidence: legitimate professional credentials; accreditations; medical registrations; professional memberships; publications; talks; media coverage; institutional history.

Do not manufacture authority.

### Trust

Trust is the highest priority.

Clearly expose: about Shantara; contact details; real physical location; clinical team; policies; pricing/inclusions where possible (**via the tariff card**); relationship to associated organizations if relevant; terms/cancellation rules; privacy practices. Do not use internal labels such as “trust pages” or “who operates Shantara” in public copy.

### Medical claims

Avoid unsupported language such as: cures diabetes; guarantees reversal; eliminates hypertension; permanent cure; guaranteed detoxification claims.

Any significant clinical claim must have evidence, appropriate qualification, and clinical review.

The programme name **Diabetes Reversal** is approved for catalogue use. Do not present reversal as guaranteed efficacy or invent clinical rates.

### References

Preferred sources may include, as appropriate: government health bodies; Ministry of AYUSH; WHO; ICMR; recognized clinical guidelines; peer-reviewed research; relevant professional bodies.

Use the source that actually supports the statement.

### Testimonials

Testimonials may describe: experience; stay; food; service; how the guest felt; the journey.

Do not use a guest testimonial as proof of clinical efficacy.

Maintain consent internally.

### Medical Editorial Policy

Maintain a public Medical Editorial Policy explaining: who writes health content; who reviews it; acceptable sources; how claims are checked; review/update cycle; corrections; how AI is used; that AI-generated medical content is not published without qualified human review.

### Content dates

Support: Published; Updated; Medically Reviewed; internal next-review date.

Do not fake freshness by automatically changing dates on every deployment.

## Content writing standards

**All public-facing language follows [skill-copy.md](skill-copy.md).** That file is the writing skill. This section only records CMS and publishing constraints.

### Tone

Use language that is: calm; clear; warm; specific; clinically responsible; human.

Avoid: exaggerated luxury copy; mystical language; medical certainty; corporate jargon; generic AI phrasing; excessive adjectives; information-architecture commentary; invented booking or duration rules.

Clarity first, warmth second, brand expression third. Marketing copy never promises a clinical outcome.

### Prefer concrete details

Weak:

> A transformative holistic wellness experience.

Better:

> Your programme is planned by our doctors based on your assessment, health history and goals.

Use only facts Shantara can verify.

### Separate education from selling

A clinical guide should educate.

A program page should explain Shantara’s offering.

Link them rather than disguising a sales page as neutral medical information.

### Keep page introductions useful

The first screen should quickly establish: what the page is; why it matters; what the visitor can do next.

Do not waste the hero on vague slogans. Do not use the hero to explain how the website is organised.

## Schema-aware CMS

Do not ask editors to manually write JSON-LD.

Generate structured data from fields already required for the visible site.

Medical review fields (`medical_reviewer`, `last_medically_reviewed`) should generate visible attribution and the appropriate schema relationship.

Program pricing fields should power both visible pricing and `Offer` data where appropriate — **one source of truth, and in this repo that source is the tariff card.**
