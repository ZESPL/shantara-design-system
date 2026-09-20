# Workflow, QA, and what not to build

Back to the [website skill](SKILL.md).

## Page creation workflow

When adding or rebuilding a page, follow this sequence.

### Step 1 — Define the page job

Write down: audience; search/user intent; one primary action; page type; main proof needed.

### Step 2 — Check existing components

Use existing semantic sections first.

Do not create a new component just because a design mockup looks slightly different.

### Step 3 — Decide content order

Work backward from the visitor’s decision.

Ask: What must they understand first? What must they trust before the CTA? What objections remain?

### Step 4 — Build content

Use real, verified Shantara information.

Flag missing facts instead of inventing them.

### Step 5 — Add medical governance if required

For health/condition content ensure: reviewer; date; evidence; safe claims; author where appropriate.

### Step 6 — Add SEO metadata

Check: title; description; canonical; H1; OG; internal links.

### Step 7 — Verify schema

Validate that generated schema: matches visible content; references correct entities; contains no invented values.

### Step 8 — Verify analytics

Only meaningful interactions should fire custom events.

### Step 9 — QA

Complete the checklists below.

## QA Checklist — Every page

Before publishing:

- [ ] Page has a clear purpose.
- [ ] Exactly one dominant next action is obvious.
- [ ] H1 is unique and descriptive.
- [ ] Hero variant fits the page job.
- [ ] First screen communicates useful information.
- [ ] Copy contains no invented Shantara facts.
- [ ] Images are real/relevant where possible.
- [ ] Layout works at mobile, tablet, and desktop widths.
- [ ] Heading hierarchy is logical.
- [ ] Links are crawlable anchors.
- [ ] No unnecessary component or decorative clutter.
- [ ] Consultation CTA uses the unified flow.
- [ ] Analytics context is correct.
- [ ] SEO title/meta/canonical are set.
- [ ] OG image is appropriate.
- [ ] Schema matches visible content.
- [ ] Page is keyboard accessible.
- [ ] Images have correct alt behavior.
- [ ] Performance has not materially regressed.
- [ ] No console errors.
- [ ] No broken links.
- [ ] No legacy “Welnez” branding remains accidentally.
- [ ] No rates, “from …” amounts, or stay totals appear except on a dedicated tariff surface.

## QA Checklist — Medical / condition content

Additionally verify:

- [ ] Medical reviewer is real and linked correctly.
- [ ] Qualifications are accurate.
- [ ] Last medically reviewed date is present.
- [ ] Material claims are supported by appropriate references.
- [ ] No unsupported cure/reversal guarantee exists.
- [ ] Medication advice is clinically safe and appropriately qualified.
- [ ] Testimonials are not presented as clinical proof.
- [ ] Relevant sources are displayed.
- [ ] Schema correctly links reviewer/condition/page.
- [ ] Content is educational, not disguised advertising.

## QA Checklist — Program pages

Verify:

- [ ] What the program is is immediately clear.
- [ ] Intended audience is clear.
- [ ] Duration/options are clear.
- [ ] Inclusions are clear.
- [ ] Pricing is clear if the business has chosen to publish it — **via the tariff card, not copied onto the program page**.
- [ ] Clinical oversight is explained.
- [ ] Stay/experience is tangible.
- [ ] Relevant conditions/therapies are linked appropriately.
- [ ] FAQs address real booking concerns.
- [ ] Book Consultation is the primary action.
- [ ] No clinical result is guaranteed.

## QA Checklist — Lead capture

Verify:

- [ ] Same consultation fields are used everywhere.
- [ ] Form does not ask unnecessary medical questions.
- [ ] Source page/context is captured automatically.
- [ ] Form success is confirmed before `generate_lead`.
- [ ] GA4/OpenPanel receive no PII or health data.
- [ ] CTA click is not counted as a successful lead.
- [ ] WhatsApp/phone/email use `contact_click`.
- [ ] Success state tells the visitor what happens next.
- [ ] No stay totals are calculated on the form.

## QA Checklist — Analytics

Verify event naming exactly:

```text
consultation_cta_click
form_start
generate_lead
contact_click
```

Verify controlled properties.

Do not create new event names unless the event will answer a real business question.

## QA Checklist — Publishing

Before publishing recurring content:

- [ ] Why does this content deserve to exist?
- [ ] Is it original to Shantara or its experts?
- [ ] Is the author/reviewer appropriate?
- [ ] Does it add first-hand experience, expertise, or authority?
- [ ] Is it more useful than a generic search result?
- [ ] Are claims supported?
- [ ] Does it connect to a relevant core page?
- [ ] Does it have an appropriate next action?
- [ ] Is there a reason to keep it updated?

If the answer is mostly “we need more SEO content”, do not publish it.

## What not to build

Do not introduce these without a demonstrated need:

- rigid page templates for every content family;
- condition-category SEO hubs;
- individual therapy pages by default;
- individual room pages by default;
- multiple consultation forms;
- multiple synonymous primary CTAs;
- generic drag-and-drop rows/columns/spacers;
- one universal card with dozens of props;
- one universal hero with dozens of props;
- 10+ hero variants;
- separate AEO/GEO content systems;
- separate analytics implementations for GA4 and OpenPanel;
- CRM lifecycle analytics at launch;
- custom backend only for analytics;
- excessive tracking events;
- fake E-E-A-T badges;
- fake review schema;
- unsupported medical claims;
- automatically refreshed content dates;
- hundreds of generic AI-written articles;
- keyword-variation landing pages;
- complex personalization before sufficient traffic exists;
- a complete production website inside this design-system kit.

## Migration / legacy brand rules

Because Welnez is the former name:

- use Shantara in all new visible copy;
- inspect legacy URLs before changing them;
- preserve valuable inbound URLs with permanent redirects;
- update canonical tags;
- update Organization/entity references;
- update sitemap and social metadata;
- update business listings where part of the migration plan;
- do not mass-delete old URLs without checking traffic/backlinks;
- do not leave both brands as competing page titles unless there is a deliberate transitional requirement.

## Definition of done

A website change is complete only when it is:

- visually integrated with the design system;
- mobile-responsive;
- accessible;
- performant;
- content-complete;
- SEO-complete;
- schema-correct where relevant;
- analytics-aware where relevant;
- privacy-safe;
- medically governed where relevant;
- tested;
- not unnecessarily complex.

“Code compiles” is not the definition of done.

## Agent behavior

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
14. If requirements conflict, prioritize:
    - factual/clinical safety;
    - user clarity;
    - conversion simplicity;
    - maintainability;
    - design consistency;
    - implementation elegance.
