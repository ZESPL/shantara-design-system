# Technical: analytics, SEO, schema, performance, accessibility

Back to the [website skill](SKILL.md).

## Analytics: OpenPanel + GA4

Use one internal tracking abstraction.

Application code should call:

```js
track("event_name", properties)
```

The abstraction may forward to OpenPanel and GA4.

Do not scatter `gtag(...)` and `openpanel.track(...)` across components.

### Automatic / basic tracking

Use platform/native tracking where available for: page_view; scroll; outbound clicks; file downloads.

Do not recreate automatically captured events unless required.

### Custom events

Keep the launch event model small.

#### `consultation_cta_click`

Fire when the main Book Consultation CTA is clicked.

Properties: `page_type`; `content_id`; `content_name`; `cta_location`.

Allowed `cta_location` values should remain controlled, for example: header; hero; inline; bottom; sticky.

#### `form_start`

Fire when the consultation form is genuinely started.

Properties: `form_id`; `page_type`.

#### `generate_lead`

This is the primary conversion.

Fire **only after the form destination confirms successful submission**.

Properties: `form_id`; `page_type`; `source_page`.

Do not treat a button click as a successful lead.

#### `contact_click`

Use one event for alternate contact channels.

Properties: `contact_method` (`whatsapp` | `phone` | `email`); `page_type`; `cta_location`.

### Optional events

Only implement if a clear business question exists: `video_start`; `video_complete`.

Avoid tracking every FAQ open, menu open, card hover, image click, navigation click, or doctor card click.

Page paths and standard analytics already answer many of these questions.

### Privacy

Never send to GA4 or OpenPanel: name; email; phone; consultation free text; diagnosis; symptoms; medication; medical history; other health information.

If identity linkage is ever required, use opaque internal identifiers.

Analytics is not the CRM.

### Initial funnel

Primary funnel:

```text
Page View
→ Consultation CTA Click
→ Form Start
→ Generate Lead
```

Secondary action reporting:

```text
Contact Click
→ WhatsApp / Phone / Email
```

Do not add CRM lifecycle events until a real need exists to measure lead quality or booking revenue.

### Analytics-aware component design

Components that create meaningful business actions must expose consistent analytics context.

**CTA** should know: page type; content ID; CTA location.

**Consultation form** should know: source page; page type; content context.

**Contact links** should know: method; location.

Do not make analytics code part of every visual component if a shared abstraction can handle it.

## Technical SEO

Implement SEO as part of the page system, not as manual aftercare.

### Every indexable page

Support: unique SEO title; meta description; canonical URL; Open Graph title; Open Graph description; Open Graph image; index/noindex setting; correct H1; crawlable internal links.

### URL principles

Use short, stable, human-readable URLs.

Prefer `/conditions/diabetes` and `/programs/weight-management`.

Avoid unnecessary hierarchy and keyword repetition.

Do not create multiple pages targeting trivial keyword variations.

### XML sitemap

Generate automatically from indexable content.

Use accurate modification dates.

Do not update `lastmod` on every build unless the page actually changed.

### robots.txt

Keep simple.

Do not accidentally block important content, CSS/JS required for rendering, or images that should be discoverable.

### Redirects

When URLs or brand naming change: use permanent redirects where appropriate; do not leave duplicate indexable legacy URLs; preserve inbound equity.

Do not guess legacy URL mappings. Inspect the actual existing site before migration.

### Internal linking

Create meaningful relationships: Condition → relevant Program; Program → Condition; Program → Therapy; Clinical Guide → Condition/Program; Doctor Answer → deeper Guide; Article → relevant core page.

Do not insert links solely for keyword density.

### Search tools

Connect: Google Search Console; Bing Webmaster Tools; IndexNow where appropriate.

### SEO-aware component design

Sections should render crawlable semantic HTML.

- headings use actual heading levels;
- tabs/accordions must not hide content from initial HTML when SEO-critical;
- links use anchors rather than click handlers;
- images use meaningful alt/caption fields;
- structured content remains available without client-side-only fetching where possible.

Do not build SEO-critical text as canvas, image, or animation-only content.

## Structured data / schema

Generate schema automatically from the actual page/entity data.

Schema must match visible content.

Do not add invisible claims or data solely for search engines.

Do not ask editors to manually write JSON-LD.

### Site / business entity

Use the most accurate entity type available.

Possible types may include: Organization; LocalBusiness; MedicalClinic only if Shantara legitimately meets the definition.

Do not choose a medical schema type merely because it sounds advantageous.

Use a stable canonical `@id`.

Typical data: name; URL; logo; telephone; email; address; geo; opening hours; sameAs; contactPoint.

### Condition content

Where appropriate: `MedicalWebPage`; `MedicalCondition`; `BreadcrumbList`; reviewer/author relationships; `lastReviewed`.

### Programs

Where appropriate: `WebPage`; `Service`; `Offer` only where real visible commercial information exists; `BreadcrumbList`.

In this repo, visible commercial figures exist on the tariff card. Do not emit `Offer` amounts that are not on that surface.

### Doctors

Use the most accurate person/medical professional representation supported by the data, such as `Person` or `Physician` where appropriate.

Reference the same doctor entity consistently across pages.

### Articles / Guides

Use: `Article` or `BlogPosting`; headline; description; image; datePublished; dateModified; author; publisher.

### Breadcrumbs

Generate `BreadcrumbList` from the logical user path.

Do not invent extra hub pages just to deepen breadcrumbs.

### FAQ

FAQ content is useful.

Do not make FAQ rich-result eligibility the reason for creating FAQ content.

## AEO and GEO

Do not create separate “AEO pages” or “GEO pages”.

Use one high-quality content system.

### Answer-first structure

When a page contains a real question, answer it clearly before expanding.

Example:

```text
Can I continue my medication during a naturopathy stay?

[Concise clinically reviewed answer.]

[Detailed explanation.]
```

### Make facts explicit

Prefer:

> The 14-night program includes an initial doctor consultation, accommodation, prescribed therapies, meals according to the program plan, yoga sessions, and periodic review.

over:

> Experience our holistic journey to total wellness.

Specific information is more useful to visitors, search engines, answer engines, and generative systems.

Do not invent the facts in that example if they have not been verified.

### Prioritize first-party information

Strong content includes: actual program structure; actual clinicians; actual therapies; actual equipment; real sample schedules; real room categories; real dietary practices; real guest journeys; real travel information.

Avoid generic AI-written wellness content that could belong to any retreat.

### Entity consistency

Use consistent names for: Shantara; doctors; programs; therapies; locations; credentials.

Do not rename the same program or doctor differently across pages without reason.

### Avoid pseudo-GEO hacks

Do not prioritize: special “AI versions” of pages; dozens of micro-Q&A pages; artificial content chunking; keyword-generated location pages; `llms.txt` as a major SEO project.

Build a clear, crawlable, trustworthy website first.

## Performance and rendering

This is a marketing site. Keep the technology stack simple.

### Rendering

Prefer: static generation; prerendering; SSR/SSG hybrid where useful.

Do not introduce a persistent application backend unless a real requirement needs it.

Analytics can run client-side after a prerendered page loads.

### JavaScript

Minimize client-side JavaScript.

Use hydration only where necessary for: form interactions; navigation; gallery; accordion; modal/drawer; analytics; video controls.

Static content should remain static.

### Images

- use responsive sizes;
- modern formats;
- explicit width/height;
- lazy-load below-fold imagery;
- preload only truly important hero media;
- avoid uploading unnecessarily huge files.

### Fonts

- keep families/weights limited;
- preload only required files;
- use sensible fallbacks;
- avoid layout shift.

This system ships Diodrum Cyrillic only. Do not add a second display face.

### Third-party scripts

Every third-party script must justify: business value; performance cost; privacy cost.

Do not install multiple overlapping analytics/heatmap/chat tools without a clear reason.

## Accessibility

Accessibility is a baseline requirement.

Ensure:

- semantic headings;
- keyboard access;
- visible focus states;
- meaningful alt text;
- decorative images marked appropriately;
- accessible form labels;
- error messages associated with fields;
- sufficient contrast;
- touch targets large enough;
- reduced-motion support where appropriate;
- accordions/dialogs use correct ARIA patterns;
- videos have captions/transcripts when needed.

Do not rely on color alone to communicate state.

This design system’s live audit is `guidelines/accessibility.html`. Active nav uses `aria-current="page"` plus an underline. Interactive cards take a button role when they have `onClick`.

## Managing technical growth

Before introducing a service or dependency, ask:

1. What current problem does it solve?
2. Can an existing service solve it?
3. Does it add persistent operational work?
4. Does it hurt performance/privacy?
5. Can it be deferred?

For this site, default toward fewer services.
