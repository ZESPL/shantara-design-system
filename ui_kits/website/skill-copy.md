Back to the [website skill](SKILL.md).

# Shantara Website Language and Copywriting Skill

## Purpose

This skill governs all public-facing language written for the Shantara website.

It applies to:

* Page copy
* Headings
* Hero sections
* Programme pages
* Condition pages
* Treatment and therapy pages
* Accommodation pages
* Doctor and team pages
* About pages
* Editorial and research pages
* FAQs
* Navigation labels
* Calls to action
* Cards
* Forms
* Supporting text
* Empty states and informational messages visible to visitors

The objective is simple.

A visitor should understand Shantara without having to understand Shantara's website architecture, internal processes, clinical terminology, content system or business rules.

Public copy must sound like it was written for a prospective guest, not for the team building the website.

---

# Core principle

Clarity comes first.

Warmth comes second.

Brand expression comes third.

Shantara is a naturopathy retreat — a doctor-led residential clinic guests stay at.

Internally, treat it as a **clinical hotel**: a good hotel that happens to have a clinic, not a clinic that borrowed a restaurant, and not a hospital. **Clinical hotel** is the working model. It is not a public product name, H1, title fragment, or schema type. Do not call Shantara a hospital. Do not call it a hotel without the clinical frame.

It is not an abstract wellness brand. **Wellness** may appear as a discovery gloss in some markets; it is not the product type and must not replace “naturopathy retreat” in heroes, titles, or schema.

A visitor should quickly understand:

* What Shantara is
* What Shantara offers
* Who the programmes are for
* How programmes are planned
* What happens during a stay
* Who supervises the programme
* What accommodation is available
* What meals are like
* What to expect before arrival
* What to expect after the stay
* How to enquire

If a sentence does not help the visitor understand Shantara, make a decision or feel appropriately reassured, question whether it needs to exist.

---

# OpenSEO naming layers (20 Sep 2026)

Use three layers. Do not flatten them into one slogan or one H1 pattern.

### Layer 1 — Entity (lead with this)

What Shantara **is**, in public language:

> Shantara is a doctor-led residential naturopathy clinic you stay at in Kozhikode.

Short forms that remain accurate: **naturopathy retreat**; **doctor-led residential clinic**. Organization display name for NAP / schema / `og:site_name`: **Shantara Naturopathy Retreat** (see [skill-technical.md](skill-technical.md)).

Public pages lead with this positive clause. Do not open heroes with “not a spa,” “not a hospital,” “not a wellness brand,” or “clinical hotel.”

Hospitality leads the brand half of the voice. Belonging follows. Rejuvenation is not a voice word.

### Layer 2 — Need language

What people come for: validated condition, symptom, and stay language from research — not internal ICP names as H1s. Condition URLs and copy stay need-led (`diabetes`, `PCOS`, and so on). See [`docs/icp.md`](../../docs/icp.md).

**How a stay works** (care model — explain when the page job is the stay or programme path; not a slogan or hero tagline):

> Assessment → personalised plan → therapies and routines → measurable reassessment.

Public copy may describe that loop in plain language (consultation and assessment, a plan for this guest, treatments and daily routines, then reviewing progress). Do not turn it into a campaign slogan, a seventh audience, or a promise of specific clinical numbers.

### Layer 3 — Comparison / interception (GCC and West)

In UAE, UK, and US discovery, people often type Ayurveda, wellness retreat, or yoga retreat. Intercept that intent with an honest medically reviewed **Ayurveda vs naturopathy** article/guide and Experience / FAQ copy that explains a residential Kerala stay. Do **not** become an Ayurveda resort, wellness resort, or US ND clinic to win the query.

### Banned as product or hero language

Do not use these as product type, H1, title fragment, or primary CTA:

* Sanctuary
* Clinical wellness
* Nature cure (except accurate historical parent naming on About, e.g. Hygiene Nature Cure Hospital)
* Begin your wellness journey

Also keep existing bans on luxury-sanctuary clichés and spa repositioning. Internal negatives (“not a spa”, “not a hospital”, “not an Ayurveda resort”, “not a US naturopathic office”, “not Hygiene Nature Cure Hospital”) and the clinical-hotel model live in this skill, ICP, ad exclusions, and brand cards — not as visitor-facing argument copy.

---

# Write for the visitor

Never write public copy from the perspective of the website team, developer, designer, content strategist or CMS.

The visitor should never be told how the website itself is organised.

Do not write things such as:

> This listing groups conditions visually.

> It does not create category URLs.

> A full condition page is added only when there is original content.

> This kit does not create a page per therapy.

> Rates and inclusions live on the tariff card, not on this hub.

> This hub is a sample, not four finished pages.

These are internal implementation notes.

They belong in:

* Design specifications
* CMS documentation
* Developer comments
* Content planning documents
* Design system documentation
* Internal editorial guidelines
* Internal ICP and marketing-audience strategy (`docs/icp.md`)

They never belong in public website copy.

Internal ICP names (for example “Weight & Metabolic Health”, “Short Health Reset”, CRM keys such as `weight_metabolic`) are strategy labels. They are not automatically headings, keywords, or ad copy. Customer language must be validated. See [`docs/icp.md`](../../docs/icp.md).

## Rule

Do not explain why something is or is not displayed on the website.

Simply present the information that is useful to the visitor.

---

# Do not narrate the information architecture

Avoid language such as:

* This page
* This hub
* This listing
* This section groups
* This card shows
* This kit
* These pages
* The website contains
* A page will be created
* Visit this page for
* Rates live on
* Content lives on
* Categories are grouped by
* This does not create

There are occasional legitimate reasons to say "this page", particularly in accessibility, privacy or legal contexts.

Otherwise, write about Shantara itself.

Bad:

> Rates and inclusions live on the tariff card, not on this hub.

Better:

> View tariffs

Bad:

> This listing groups conditions visually.

Better:

Simply display the relevant conditions with an appropriate heading.

No explanatory sentence is required.

---

# Do not narrate internal process

Visitor-facing copy must not describe ticket queues, CRM steps, or confirmation badges that exist for the operations team.

Bad:

> What happens next

> 1. We receive your details. 2. A team member contacts you… 3. A doctor reviews…

> Confirmed after doctor review

Better:

> We'll be in touch

> A member of the team will call you to understand what you need. A doctor then reviews whether a stay is the right next step.

> A stay is confirmed after a doctor has spoken with you.

---

# Calls to action stay short

Button labels describe one action — roughly 20 characters in English. Extra meaning lives in nearby text or on the destination page. Buttons may wrap; they must not become captions. Prefer **View tariffs** and **Read what to expect** over longer caption-buttons. The full preferred / avoid lists are under [Calls to action](#calls-to-action) below.

Do not use Badge or static Tag as decorative pills next to actions. Interactive filter Tags stay — those are controls.

`--text-2xs` / `--text-3xs` are for eyebrows and catalog specimen notes. Guest-readable helper copy is at least `--text-sm` (`--text-xs` only for true captions). Field hints stay short (“Optional”), never essay paragraphs.

---

# Say what the thing is

A visitor scanning only the headings should understand the structure and substance of the page.

Prefer literal, informative headings.

Use:

> Naturopathy programmes

Instead of:

> A journey back to balance

Use:

> What your stay includes

Instead of:

> Everything you need to restore

Use:

> Naturopathy treatments and therapies

Instead of:

> Healing through nature

Use:

> Meals during your stay

Instead of:

> Food that heals

Use:

> Meet our doctors

Instead of:

> The people guiding your journey

Use:

> Accommodation

Instead of:

> Rest in nature

Use:

> Who our programmes are for

Instead of:

> Is Shantara right for you?

Use:

> What to expect during your stay

Instead of:

> Your journey at Shantara

Use:

> Book a Consultation

Instead of:

> Begin your transformation

Brand expression can appear in supporting copy when appropriate.

It should not replace information.

---

# Do not write internal-document language

Website copy should not read like a specification, report or operating document.

Bad:

> Fifty-two rooms across five categories. Rates and what a stay includes are on the tariff card.

Better:

> Shantara has 52 rooms across five accommodation categories designed for restful residential stays.

Then allow the accommodation page and tariff page to perform their respective functions.

Do not explain where information has been stored.

Bad:

> Trust pages include our story, approach, doctors and public medical editorial policy.

Better:

Use separate navigation links or sections such as:

* About Shantara
* Our approach
* Meet our doctors
* Medical Editorial Policy

The visitor does not need to know that these are internally classified as "trust pages".

---

# Pricing must remain controlled

Pricing requires a single source of truth.

Do not place individual rates casually throughout the marketing website.

Do not write:

> Deluxe Room from ₹8,500

> Detox Programme ₹12,000 per night

> Consultation ₹2,000

> Therapy package ₹4,500

Prices should appear only on designated pricing surfaces that present the relevant pricing structure together.

Suitable places include:

* Official tariff page
* Complete pricing page
* Official tariff document
* Booking or transactional interface where applicable
* Other specifically approved pricing documents

Programme cards, accommodation cards, treatment pages, articles and general marketing pages must not contain isolated prices.

This avoids:

* Conflicting rates
* Outdated rates
* Prices being copied into uncontrolled locations
* Difficulty updating tariffs
* Inconsistent inclusions
* Confusion about taxes or packages

## Public copy

Do not explain this pricing governance rule to visitors.

Bad:

> Rates and inclusions are available on the tariff card because individual prices are not displayed here.

Better:

> View tariffs

The governance rule remains internal.

---

# Do not invent booking restrictions

Never create booking restrictions merely because they make the content easier to structure.

Avoid unsupported statements such as:

> None of these can be booked separately.

This is unnecessarily absolute.

It may also become incorrect if Shantara changes how a service is offered.

When explaining therapies, focus on how they are normally used.

Better:

> Therapies may be recommended as part of your programme following assessment by the clinical team.

Or:

> Your doctor may recommend therapies based on your assessment, health needs and programme.

Only mention an actual booking restriction when:

1. The restriction genuinely exists.
2. It matters to the visitor at that point.
3. The rule has been confirmed by Shantara.

---

# Do not invent global minimum stays

Do not enforce a universal minimum number of nights across Shantara.

Programme duration depends on the programme and the guest.

Some programmes may be short.

Others may require longer residential stays.

A basic detox programme, for example, may not require the same duration as a programme designed for a longer-term health objective.

A site-wide 7-night minimum is **not** an approved rule. See [`docs/icp.md`](../../docs/icp.md). Typical or recommended duration for a named programme is still allowed when Shantara has defined it.

Therefore, never automatically write:

> Minimum stay 7 nights

> All programmes require at least 14 nights

> Guests must stay a minimum of 7 nights

unless the statement is factually confirmed for that specific programme.

Prefer programme-specific language such as:

> Recommended duration

> Typical duration

> Duration is advised following consultation

Use the exact programme duration when Shantara has defined one.

Do not turn programme duration into a site-wide policy.

---

# Avoid unnecessary absolutes

Words such as these require particular care:

* Always
* Never
* None
* Only
* Every
* Must
* Cannot
* Minimum
* Guaranteed
* Required

Do not introduce an absolute rule unless it comes from a verified clinical, operational, legal or commercial policy.

AI-generated copy must not turn an observation into a policy.

---

# Use positive framing

Explain what Shantara does rather than defining everything by what Shantara does not do.

Bad:

> Meals are prescribed diet therapy, not a restaurant menu.

Better:

> Meals are planned as part of your programme based on your doctor's recommendations and dietary needs.

Bad:

> A day is a timeline, not a separate schedule component.

Better:

> A typical day may include consultations, therapies, meals, physical activity, rest and time for yourself.

Bad:

> Nothing here is ordered from a list.

Better:

> Your programme is planned following consultation and assessment.

Positive framing does not mean hiding important limitations.

When a restriction, safety warning or exclusion genuinely matters, state it clearly and directly.

---

# Do not make the website argue with an imaginary visitor

Avoid sentences structured around correcting assumptions that the visitor has not expressed.

Examples:

> This is not a spa.

> Meals are not a restaurant menu.

> Treatments are not selected from a list.

> A programme is not a package of therapies.

> A day is not a schedule component.

These sentences often expose internal positioning discussions instead of helping the visitor.

Explain the actual experience instead.

Use:

> Programmes are planned by Shantara's doctors following consultation and assessment.

Use:

> Meals are planned according to your programme and dietary requirements.

Use:

> Your daily plan may include consultations, therapies, movement, meals and rest.

---

# Do not personify systems, protocols or processes

Do not extend this ban to “the body.” “Reconnect with your body's ability to heal” is a bad *claim*, not a personification error.

Bad:

> The protocol does the deciding; the guest only has to arrive.

A protocol cannot literally decide.

It also makes the guest sound passive and removes the role of doctors, assessment and individual circumstances.

Better:

> Your programme is planned by the clinical team following your consultation and assessment.

Or:

> The clinical team plans your programme and adjusts it where necessary during your stay.

Name the person, team or process that actually performs the action.

---

# Prefer human language over clinical compression

Clinical accuracy matters.

Clinical complexity does not need to be transferred directly into website language.

Bad:

> Prescribed meals, supervised fasting where your doctor considers it appropriate, and therapies that support digestion and elimination.

This puts several clinical concepts into one sentence and expects the visitor to interpret them.

Better:

> Your doctor may recommend a specific meal plan or supervised fasting based on your assessment. Therapies may also be included as part of your programme.

When a technical term is necessary:

1. Use the recognised term.
2. Explain it in ordinary language.
3. Keep the explanation short.
4. Do not overstate its effect.

---

# Prefer short sentences

When one sentence contains several different ideas, divide it.

Bad:

> Based on your medical history, current symptoms, lifestyle, dietary habits and health goals, our doctors develop a personalised programme that combines naturopathy treatments, therapeutic meals, physical activity, rest and ongoing monitoring throughout your stay.

Better:

> Your programme begins with a consultation and assessment. Our doctors consider your medical history, current health, lifestyle and goals. They then plan your treatments, meals, activity and rest.

Short does not mean abrupt.

Aim for natural spoken English.

---

# Be specific

Do not allow broad wellness vocabulary to carry the meaning.

Words requiring caution include:

* Holistic
* Transformative
* Rejuvenating
* Restorative
* Natural
* Wellness
* Balance
* Healing
* Reconnection
* Journey

These words are not automatically prohibited.

They simply cannot substitute for information. A sentence may use one of them only if it still tells the visitor something useful after the word is removed. Do not use them as the heading or the point of the section.

Bad:

> Experience a transformative journey towards holistic wellbeing.

Better:

> Your programme is planned by our doctors based on your assessment, health history and goals.

Bad:

> Reconnect with your body's natural ability to heal.

Better:

> Your stay may combine doctor-led naturopathy, nutrition, physical activity, therapies and rest.

---

# Inform before persuading

Practical information should appear before promotional language.

A prospective guest should be able to answer questions such as:

* What is naturopathy?
* What programmes are available?
* Who are they intended for?
* How is a programme selected?
* What happens before arrival?
* What happens during the stay?
* Who supervises the programme?
* What treatments may be included?
* What will I eat?
* How are existing medications handled?
* How long should I stay?
* What does the tariff include?
* Can someone accompany me?
* What accommodation is available?
* What happens after I leave?
* How do I book a consultation?

Never hide the useful answer underneath atmospheric copy.

---

# Voice

Write like a knowledgeable practitioner and an attentive hotelier. That is the clinical-hotel voice: calm and warm, serious about care, never resort-cheerful and never hospital-solemn.

The voice should be:

* Calm
* Clear
* Respectful
* Reassuring
* Specific
* Positive, honest, polite, caring, trustworthy, professional
* Warm without being sentimental
* Clinical when necessary
* Hospitable without sounding luxurious for its own sake

Do not write Cheerful. That is spa-bright, not a hotel with doctors.

Hospitality leads. Belonging follows. Rejuvenation is not a voice word; *rejuvenating* stays on the caution list above.

**Who we are:** Positive, Calm, Honest, Polite, Caring, Trustworthy, Professional.

**Who we are not:** Rude, Toxic, Passive-aggressive, Gender-negative, Stereotypical, Slow to respond. Do not add Cheap (that invites luxury language) or Cheerful (that is spa-bright).

Register for writers: spoken-formal, serious about the medicine, fully respectful, warmly hospitable. A little warmth is hospitality. Spa enthusiasm is not.

| Pole | Position | Meaning |
| --- | --- | --- |
| Formal → Casual | near Formal | Spoken-formal, not stiff |
| Serious → Funny | near Serious | Serious about care, not grave |
| Respectful → Irreverent | Respectful | Fully respectful |
| Matter-of-fact → Enthusiastic | just short of halfway | Hotel warmth, not spa hype |

Use:

> We

for Shantara.

Use:

> You

for the guest.

Prefer:

> Guest

over:

> Client

or:

> Patient

**Guest** is the default public noun for the person staying. Do not call them a patient on marketing pages, heroes, CTAs, or testimonials. Use **patient** only when a clinical, medical, regulatory, or handbook context specifically requires that term.

---

# Avoid generic luxury language

Shantara is a retreat with hospitality standards.

That does not require conventional luxury-hotel language.

Avoid phrases such as:

* Unparalleled luxury
* World-class luxury
* Opulent rooms
* Exquisite accommodation
* Indulgent experiences
* Lavish comfort
* Ultimate escape
* Luxurious sanctuary
* Sanctuary (as a product label)
* Clinical wellness
* Bespoke experience

Describe the actual accommodation and experience instead.

For example:

> Rooms are designed for comfortable residential stays, with quiet interiors and easy access to the retreat's treatment and common areas.

---

# Avoid mystical and spiritual claims

Do not write Shantara as if it promises spiritual transformation.

Avoid:

* Awaken your inner self
* Restore your energy
* Realign your body
* Cleanse your energy
* Unlock your body's wisdom
* Return to your true self
* Heal from within
* Reset your life
* Transform your being

Unless Shantara explicitly offers a spiritual practice and the copy accurately describes that practice, keep the language grounded.

---

# Clinical claims

Health copy must describe the programme without promising outcomes that cannot be guaranteed.

Describe:

* What doctors assess
* What the programme may include
* How treatments are recommended
* How progress is monitored
* How plans may be adjusted
* What follow-up may be provided

Never promise or imply that Shantara will:

* Cure a condition
* Reverse a condition
* Heal a condition
* Eliminate disease
* Make someone medication-free
* Guarantee weight loss
* Guarantee symptom improvement
* Guarantee a particular clinical result

Where outcomes vary, make that clear.

Use:

> Recommendations depend on your assessment and individual health needs.

Medication should be described carefully.

Prefer:

> Our doctors review your current medication as part of your assessment. Any change should be considered individually and only when medically appropriate.

Do not present medication reduction as an expected or intended outcome.

Never encourage visitors to alter prescribed medication without appropriate medical supervision.

---

# Treatments and therapies

Treatments should be described in relation to assessment and programme planning.

Avoid presenting Shantara as a menu of therapies that visitors simply assemble themselves unless that is actually how the service operates.

Prefer:

> Your doctor may recommend specific therapies based on your assessment and programme.

Do not write:

> Choose from our range of therapies.

unless guests genuinely select treatments independently.

Do not make blanket statements that therapies can never be booked separately unless that is a verified commercial rule that needs to be communicated.

---

# Meals

Meals should sound appetising, understandable and clinically appropriate.

Do not frame the food primarily through restriction.

Avoid:

> This is not a restaurant menu.

> You cannot choose what you eat.

> Food is prescribed rather than selected.

Prefer:

> Meals are planned as part of your programme, taking into account your doctor's recommendations and dietary requirements.

Where useful, explain what guests can expect:

> Meals are prepared using fresh ingredients and are planned around the requirements of your programme.

Do not call food "healing" or claim that individual dishes treat disease.

---

# Daily experience

Describe a guest's day naturally.

Do not describe the underlying content component or schedule architecture.

Bad:

> A day is a timeline, not a separate schedule component.

Better:

> A typical day may include a consultation, therapies, meals, physical activity, rest and personal time.

Do not imply that every guest follows an identical schedule.

Use words such as:

* May
* Typically
* Depending on your programme
* Based on your doctor's recommendations

when appropriate.

---

# Accommodation

Describe:

* Room categories
* Space
* Features
* Environment
* Suitability for residential stays
* Accessibility where relevant
* What guests can expect

Do not insert isolated accommodation rates.

Do not write internal inventory language unless visitors need it.

Bad:

> Fifty-two rooms across five categories. Rates and what a stay includes are on the tariff card.

Better:

> Shantara has 52 rooms across five accommodation categories, designed for comfortable residential stays.

If a tariff link is useful, use a simple CTA:

> View tariffs

There is no need to explain why the rates are located there.

---

# Organisation and ownership

Avoid awkward headings such as:

> Who operates Shantara

unless the purpose of the page is specifically corporate or regulatory.

For most visitors, use:

> About Shantara

> Our story

> Our team

> Meet our doctors

> Leadership

If legal ownership needs to be disclosed, state it plainly within the relevant legal or company information.

---

# Former names and internal migration notes

Do not publish content migration instructions.

Never write public copy such as:

> Welnez is the former name. Do not use it in new public copy.

That is an internal editorial rule.

Internally:

* Use Shantara in all new public-facing copy.
* Replace legacy Welnez references where appropriate.
* Preserve the old name only where there is a legitimate historical, legal, SEO migration or citation reason.

Public visitors should not see editorial instructions.

---

# Headings

Headings should work even if all supporting copy disappears.

Good headings:

> Naturopathy programmes

> What to expect during your stay

> Meet our doctors

> Treatments and therapies

> Meals during your stay

> Accommodation

> Who our programmes are for

> Preparing for your stay

> After your stay

> Frequently asked questions

Avoid headings that rely on metaphors or slogans to explain the section.

Avoid:

> Find your balance

> Return to yourself

> The path ahead

> Healing from within

> Where nature restores

---

# Punctuation

Do not use em dashes.

Rewrite using:

* A full stop
* A comma
* Parentheses where genuinely useful
* A semicolon sparingly
* Two sentences

Do not construct headings using a title followed by a colon and subtitle.

Avoid:

> Detox Programme: A complete reset

> Accommodation: Rest in nature

> Our Approach: Science meets nature

Use a single clear heading instead.

> Detox Programme

> Accommodation

> Our approach

Colons may still be used where grammatically functional in tables, form labels, structured data or other utility interfaces.

---

# Do not expose content-production terminology

The following language is normally internal and should not appear in marketing copy:

* Component
* Module
* Template
* Hub
* Content type
* Listing
* Collection
* CMS
* Schema
* URL structure
* Category URL
* Page type
* Kit
* Content block
* Card variant
* Sample page
* Finished page
* Placeholder
* Editorial workflow
* Design system

There can be legitimate exceptions when an article is genuinely discussing one of these subjects.

Otherwise, keep them internal.

---

# Calls to action

Calls to action should describe the next action accurately.

Preferred:

* Book a Consultation
* View programmes
* View accommodation
* Meet our doctors
* View tariffs
* Check what is included
* Speak to our team
* Send your details
* Learn about the programme
* Read what to expect

Avoid:

* Enquire about a stay
* Request a consultation
* Begin your transformation
* Start healing
* Discover more
* Transform your health
* Change your life
* Discover a new you
* Begin your wellness journey
* Take the first step
* Take the first step towards healing

The CTA should describe an action rather than promise an outcome. Keep labels short. Do not use Badge or static Tag as decorative pills next to actions.

---

# Brand language

Taglines are brand devices for designated placements, not a vocabulary source for ordinary website copy.

Use this rank. Do not treat the four lines as interchangeable.

* **Tagline:** Finest hospitality by nature
* **Catchphrase:** Nurture in nature
* **Imagery:** Blooming in nature
* **Sign-off:** always beyond!

A page should remain completely understandable if every tagline is removed.

---

# Do not turn design rationale into copy

During design, the team may make decisions such as:

* Conditions should be grouped visually.
* Only conditions with sufficient original content should receive dedicated pages.
* Treatments should not each become separate pages.
* Pricing should have one source of truth.
* Certain trust content should have independent pages.
* Some page structures should be reused.

These are valid product and content decisions.

They must remain invisible to the visitor.

Never convert the rationale behind a design decision into explanatory website copy.

The visitor needs the result of the decision, not the reasoning behind the website architecture.

---

# Rewrite patterns

When encountering internal or awkward copy, use these transformations.

## Internal explanation to visitor information

Before:

> Rates and inclusions live on the tariff card.

After:

> View tariffs.

## Negative framing to positive explanation

Before:

> Meals are prescribed diet therapy, not a restaurant menu.

After:

> Meals are planned as part of your programme based on your doctor's recommendations and dietary needs.

## System language to human language

Before:

> The protocol does the deciding.

After:

> Your clinical team plans your programme following consultation and assessment.

## Architecture commentary to no copy

Before:

> This kit does not create a page per therapy.

After:

Delete the sentence.

No replacement is required.

## Overly clinical sentence to plain language

Before:

> Prescribed meals, supervised fasting where your doctor considers it appropriate, and therapies that support digestion and elimination.

After:

> Your doctor may recommend a specific meal plan or supervised fasting based on your assessment. Therapies may also form part of your programme.

## Unsupported absolute to qualified explanation

Before:

> None of the treatments can be booked separately.

After:

> Treatments are recommended according to your programme and assessment.

## Negative experience description to useful description

Before:

> Nothing here is ordered from a list.

After:

> Your programme is planned after consultation and assessment.

---

# When deletion is better than rewriting

Not every bad sentence needs a better sentence.

Delete copy when it exists only to explain:

* Why a page exists
* Why another page does not exist
* Where the CMS stores something
* How categories were created
* How the design system works
* Why pricing is centralised
* Why a content type has no dedicated URL
* What the team intends to build later
* What a component is supposed to demonstrate

A clean page with less copy is better than a page that explains itself.

---

# AI authoring rules

When generating Shantara copy, do not infer business, clinical or operational policies.

If information is missing:

1. Write around the missing fact when possible.
2. Use neutral language.
3. Mark the factual point for internal verification if necessary.
4. Never invent a restriction, duration, price, treatment effect or clinical claim to complete the design.

For example, if minimum programme duration is unknown, do not invent one.

If therapies can or cannot be booked independently is unknown, do not decide.

If inclusions are unknown, do not generate generic inclusions.

If the clinical effect of a treatment is uncertain, describe what the treatment involves rather than promising what it achieves.

---

# Public copy versus internal notes

Before finalising text, classify every sentence.

## Public copy

Useful to the guest.

Examples:

> Your programme begins with a consultation and assessment.

> Meals are planned according to your programme and dietary requirements.

> Shantara has 52 rooms across five accommodation categories.

## Internal note

Useful to the Shantara team or website team.

Examples:

> Do not create individual therapy pages.

> Pricing must come from the tariff data source.

> This component is reused on programme pages.

> Welnez should no longer be used in public copy.

Never allow internal notes to appear in the rendered website.

---

# Final review

Before approving any public copy, ask the following.

### Visitor usefulness

Does this tell the visitor something useful about Shantara?

If not, delete it.

### Plain language

Would an intelligent person unfamiliar with naturopathy understand this on the first read?

If not, simplify it.

### Internal language

Could this sentence have appeared in a design specification, CMS brief or developer ticket?

If yes, rewrite or remove it.

### Architecture leakage

Does the sentence explain how the website is structured rather than explaining Shantara?

If yes, remove it.

### Negative framing

Does the sentence mainly tell the visitor what Shantara is not?

If yes, explain what Shantara actually does.

### Policy invention

Has the copy created a rule about pricing, bookings, programme duration, treatments or clinical practice that was not explicitly provided?

If yes, remove the rule.

### Pricing

Does this introduce an individual price outside an approved consolidated pricing surface?

If yes, remove the price.

### Clinical claims

Does the sentence promise an outcome or pre-empt the doctor's assessment?

If yes, rewrite it.

### Heading test

If the photography, styling and paragraph disappeared, would the heading still explain what the section is about?

If not, rewrite it.

### Brand test

Does the sentence provide information, or does it merely make Shantara sound like a wellness brand?

If it only creates atmosphere, cut it or make it specific.

### Simplicity test

Can this be said more directly with fewer words?

If yes, simplify it.

---

# Definition of good Shantara copy

Good Shantara copy should feel as though a thoughtful member of the Shantara team is explaining the retreat to a prospective guest.

It should never feel like:

* A design-system demonstration
* A CMS specification
* An SEO exercise
* An internal operating document
* A clinical research paper
* A luxury resort brochure
* A spiritual wellness advertisement

The visitor should understand the retreat without noticing the content system behind it.

That is the standard.

---

# Languages

English is the published source. Planned localisation order is `en ar de fr ru hi ml` — see [`docs/icp.md`](../../docs/icp.md) and [SKILL.md §15](SKILL.md#15-multilingual-architecture). Do not invent Arabic, German, French, Russian, Hindi, or Malayalam public copy in this kit. Do not machine-translate health content and present it as authoritative. UI chrome may use the catalog Arabic fixture under `dir=rtl` for visual QA only — that is not a published translation. Italian and Spanish are not current marketing-localisation priorities.

When a localisation project writes real copy, it follows this skill in that language: clarity first, warmth second, brand expression third. A translation must not strengthen or weaken a clinical claim. Locale is not currency.
