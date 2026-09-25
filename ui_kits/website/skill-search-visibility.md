# Search and AI visibility rules

Back to the [website skill](SKILL.md).

Version 1.1. Updated 25 September 2026. Adapted from the Zarnik Marketplace checklist "Search and AI Visibility" version 6.2 (frozen 24 September 2026), with every Zarnik rule reviewed for **shantara.life**.

This is the checkable rule list for search engines, AI answer engines (ChatGPT, Perplexity, Claude, Gemini, Google AI Overviews), AI browsing agents and accessibility on Shantara's public website. The reasoning and the locked decisions stay in [skill-technical.md](skill-technical.md), [skill-ia.md](skill-ia.md), [SKILL.md §15](SKILL.md#section-15) and [skill-stack.md](skill-stack.md). This file turns them into rules with IDs and checks. It does not replace them.

## How to use these rules

- Every rule has a stable ID, such as `REN-01`. Use the ID in pull requests, tickets and AI prompts. The IDs belong to Shantara. `REN-01` here is not Zarnik's `REN-01`.
- **P0** is a launch blocker. A rule is P0 when missing it would lose traffic or leads from the current site, break the consultation form, publish wrong medical, rate or contact information, expose personal or health data, cause a serious accessibility failure, stop Google from indexing the site, or be expensive to change after launch (URLs, locale structure, schema `@id` values).
- **P1** is done within 30 days of launch. **P2** is done once P0 and P1 are stable.
- Owner tags say who builds or maintains the rule. **[Build]** is the Astro website code: templates, metadata and JSON-LD generators, sitemap, robots.txt, redirect file and tests. **[Infra]** is Netlify and DNS: domains, HTTPS, headers and deploy contexts. **[Content]** is Keystatic records, copy, photography and alt text. **[Clinical]** is a named Shantara doctor who reviews medical content. **[Ops]** is Search Console, Bing Webmaster Tools, Google Business Profile, OpenPanel, Google Tag and OpenSEO.
- Every rule ends with a **Check**. A rule without a way to check it is not finished.
- Shantara has no backend, no shop, no cart, no site search and no product feed. Zarnik rules that only exist because of those were dropped. The [rule map](#where-every-zarnik-rule-went) at the end lists every Zarnik rule and where it went.
- Change a rule only when a real problem on the site, or a documented change by Google, Bing or a browser, requires it. Record every change in the [change log](#change-log).

## Decisions

Recorded on 25 September 2026. The rules below already follow them.

| Decision | Outcome |
| --- | --- |
| Canonical host | `https://shantara.life`. Every other host and protocol 301s to it. `content/site.json` updated to match. |
| Organisation schema type | `MedicalClinic`. `content/site.json` and the kit's schema helper in `locales.js` updated to match. |
| Lodging companion type | Still open in [skill-technical.md](skill-technical.md). Emit `MedicalClinic` only until it is decided. |
| AI crawlers, including training crawlers (GPTBot, ClaudeBot, Google-Extended, CCBot) | Allowed. robots.txt has no named groups that block any AI crawler. |
| Tax on rates | Tariff rates include GST. Each rate is labelled "incl. GST". |
| OpenPanel address | `https://openpanel.zescloud.net/`. [skill-stack.md](skill-stack.md) updated. |
| Google Business Profile | Shantara has its own profile, linked only to Shantara. It is not merged with, or managed as part of, the Hygiene Nature Cure Hospital listing. |
| Page size | Every page's HTML stays below 2 MB. |
| FAQ rich results | Google removed FAQ rich results in May 2026. `FAQPage` markup brings no Google benefit. |

### Still open

| Decision | Why it matters |
| --- | --- |
| Former web addresses | Migration (MIG-01) needs the full list of old domains, for example any Welnez domain, and a decision on whether any Hygiene Nature Cure Hospital pages move. |

## 1. One content truth (DATA)

- **DATA-01 (P0) [Build]** One content source feeds every public output. Keystatic collections (conditions, programmes, therapies, doctors, articles, rooms) and the site record generate the page HTML, title and description, JSON-LD, Open Graph tags, sitemap and hreflang. No template keeps its own copy of a name, phone number, programme duration or rate. **Check:** rename a test programme in Keystatic. After the next deploy the H1, title, JSON-LD `name`, `og:title` and internal link text all show the new name.
- **DATA-02 (P0) [Build]** One generator builds each page's JSON-LD, for example `buildSchemaGraph({ pageType, entity, locale, breadcrumbs })`, and returns a single `@graph`. Page components and Markdoc content never write JSON-LD. **Check:** a code search finds `application/ld+json` in one component only.
- **DATA-03 (P0) [Build]** One metadata generator per page type builds the title, meta description, canonical, robots tag, hreflang links and Open Graph tags. **Check:** a code search finds no hand-written `<title>`, `rel="canonical"` or `hreflang` in page files.
- **DATA-04 (P0) [Build]** Business facts are stored once: business name, the one phone number (+91 9553 700 100, for calls and WhatsApp), email, address, map location, contact hours, social profiles and the Hygiene Nature Cure Hospital history line. The header phone dropdown, footer, Contact page and JSON-LD all read that record. **Check:** change the email in the record. Header, footer, Contact page and JSON-LD all change after the next deploy.
- **DATA-05 (P1) [Build]** Publishing a content change rebuilds everything that shows it. A Keystatic commit triggers a Netlify build. Nobody edits built HTML by hand, and HTML pages do not carry a long `Cache-Control` lifetime. **Check:** change a tariff figure. After the deploy, the tariff page text and any `Offer` in its JSON-LD show the new figure, and the HTML response has no long `max-age`.

## 2. Rendering (REN)

- **REN-01 (P0) [Build]** Every public page is prerendered by Astro. Text inside accordions, tabs and galleries is in the first HTML response (accordions hide content with `aria-hidden` or `inert`, not by leaving it out). React islands are used only where [skill-stack.md](skill-stack.md) allows them. **Check:** load a condition page, a programme page, an article and the tariff page with JavaScript turned off. The H1, body copy, FAQ answers, medical reviewer line and rates (on the tariff page) are all visible.
- **REN-02 (P0) [Build]** The title, meta description, canonical, robots tag, hreflang links and JSON-LD are in the first HTML response. JavaScript never adds, changes or removes them. **Check:** compare `curl` output with the rendered DOM. The canonical, robots and hreflang tags match.
- **REN-03 (P1) [Build]** The 404 and 410 pages are static HTML with the site header, a link to `/en/` and the contact options. Google does not render JavaScript on error pages. **Check:** request a URL that never existed. It returns 404 with the message visible and JavaScript turned off.
- **REN-04 (P1) [Build]** Every page's HTML is below 2 MB uncompressed. Googlebot stops reading after the first 2 MB. Watch inline SVG (the rosette) and props serialised into islands. **Check:** a build step measures every HTML file in `dist/` and fails on any file of 2 MB or more.
- **REN-05 (P1) [Build]** One `<h1>` per page. Headings follow order (H2 under H1, H3 under H2). Section components take a heading level instead of hard-coding one. **Check:** an automated test on each page type.

## 3. Crawling and sitemaps (CRAWL)

- **CRAWL-01 (P0) [Build]** robots.txt is short. It allows every public page, CSS, JavaScript, image and font. It disallows only the Keystatic admin and any API routes, if they are deployed, and it lists the sitemap index. **Check:** test `/en/`, a condition page, a programme page and a `/_astro/` CSS file in Search Console's robots.txt report. All are allowed.

```
User-agent: *
Disallow: /keystatic
Disallow: /api/

Sitemap: https://shantara.life/sitemap-index.xml
```

- **CRAWL-02 (P0) [Build]** Private or utility-only pages are protected by login or `noindex`, not by robots.txt. The Keystatic admin requires a GitHub login. A separate form confirmation page, if one exists, is `noindex` and left out of the sitemap. **Check:** open `/keystatic` logged out and get a login screen. The confirmation page source shows `noindex`.
- **CRAWL-03 (P0) [Infra]** Only the production domain is indexable. Deploy previews, branch deploys and the `*.netlify.app` address either 301 to the canonical host or send `X-Robots-Tag: noindex`. **Check:** `curl -I` a deploy preview URL and the site's `netlify.app` address.
- **CRAWL-04 (P0) [Build]** Every crawler reaches public pages through the `User-agent: *` group, including Googlebot, Bingbot, OAI-SearchBot, ChatGPT-User, PerplexityBot, Claude-SearchBot and Claude-User. Training crawlers (GPTBot, ClaudeBot, Google-Extended, CCBot) are allowed too, so robots.txt has no named groups. If a named group is ever added, repeat every shared rule inside it, because a crawler with its own group ignores the `*` group. **Check:** robots.txt contains only the `*` group, and no rule blocks any AI crawler.
- **CRAWL-05 (P1) [Infra]** robots.txt always returns 200, and no Netlify firewall, bot or rate-limit rule blocks or challenges verified search and AI crawlers on public pages. A 5xx on robots.txt makes crawlers treat the whole site as blocked. **Check:** an uptime monitor on `/robots.txt`, and a review of any Netlify traffic rules in the first week after launch.
- **CRAWL-06 (P0) [Build]** `@astrojs/sitemap` generates the sitemap at build time. The sitemap index is listed in robots.txt. It lists only published, canonical, indexable URLs that return 200, in enabled locales. It never lists drafts, `noindex` pages, redirected URLs, the confirmation page, the root `/` or URLs in a disabled locale. Alternate-language entries appear only for published equivalents. **Check:** an automated script requests every sitemap URL and fails on any non-200, redirect, query string or `noindex`.
- **CRAWL-07 (P1) [Build]** Each sitemap `lastmod` comes from the content record's real modified date, not the build time. **Check:** two builds with no content change produce identical `lastmod` values.
- **CRAWL-08 (P2) [Build]** After each production deploy, a small post-deploy script submits the URLs whose content changed to IndexNow. Bing uses it, and Bing is one of the search providers behind ChatGPT search. No backend is needed. **Check:** deploy a content change. The build log shows the IndexNow submission.
- **CRAWL-09 (P2) [Infra]** Non-HTML files that should stay out of search get the `X-Robots-Tag: noindex` header through `netlify.toml`. **Check:** `curl -I` on the file.

## 4. Languages (LANG)

Zarnik has no equivalent section. These rules make [SKILL.md §15](SKILL.md#section-15) checkable.

- **LANG-01 (P0) [Build]** Every published URL has a locale prefix, including English (`/en/…`). The root `/` is not an indexable page. It redirects to `/en/`: a 301 while English is the only enabled locale, and a 302 once the target depends on a remembered locale. **Check:** `curl -I /` shows the redirect. `/en/` returns 200 with a self-referencing canonical.
- **LANG-02 (P0) [Build]** hreflang links connect only published equivalents, include the page itself, are reciprocal, and add `x-default` pointing to `/`. **Check:** an automated test confirms every hreflang target returns 200 and links back.
- **LANG-03 (P0) [Build]** Disabled locales publish nothing. While Arabic is disabled, `/ar/` and every `/ar/…` path return 404. No page ever shows an English body under another locale's prefix. **Check:** request `/ar/` and `/ar/programs`. Both return 404.
- **LANG-04 (P0) [Build]** Each translation has its own self-referencing canonical and never points its canonical to English. `html lang`, `dir`, `og:locale` and JSON-LD `inLanguage` match the locale. **Check:** an automated test per enabled locale.
- **LANG-05 (P1) [Clinical]** A translated medical page names who reviewed the translation. JSON-LD `reviewedBy` on a translation names only the people who reviewed that translation, never the English reviewer by default. **Check:** content review of every translated medical page before it publishes.

## 5. URLs (URL)

- **URL-01 (P0) [Build]** Slugs are short and readable: lowercase letters, numbers and hyphens only, one level under each family (`/en/conditions/{slug}`, `/en/programs/{slug}`, `/en/insights/{slug}`). No category hubs, no ICP segments, no location doorways. Slugs are unique within each family, and page identity is the internal ID, not the slug. **Check:** the build fails on a duplicate slug or a slug with an uppercase letter, underscore or space.
- **URL-02 (P1) [Build]** `/en/` keeps its trailing slash. Every other path has none. Uppercase and trailing-slash variants 301 to the correct URL in one hop. **Check:** request `/en/Conditions/Diabetes/`. One 301 to `/en/conditions/diabetes`.
- **URL-03 (P0) [Build]** Every indexable page has a self-referencing canonical with the absolute URL on the canonical host and no query string, so `utm_`, `gclid` and `fbclid` never reach a canonical. **Check:** open a page with `?utm_source=test`. The canonical has no query string.
- **URL-04 (P0) [Build]** URLs that never existed return a real 404. No page returns 200 with "not found" text, and no unknown URL redirects to the homepage. **Check:** request `/en/conditions/this-does-not-exist`. Status is 404.
- **URL-05 (P1) [Build]** The Insights listing paginates with real `<a href>` links (`/en/insights/2`, `/en/insights/3`). Each page has a canonical to itself. Page 2 is never canonicalised to page 1. Insights category tabs either link to real category URLs or filter the list already on the page, and never create indexable parameter combinations. **Check:** crawl Insights with JavaScript turned off. Every article is reachable.
- **URL-06 (P1) [Build]** Internal links, canonicals, hreflang, sitemap and JSON-LD always use the current URL through the central `localePath` helper. Internal links never rely on a redirect. **Check:** a crawl report shows zero internal links that redirect.

## 6. Redirects and retired pages (REDIR)

- **REDIR-01 (P0) [Build]** A slug change adds its redirect in the same commit. Each content record keeps `previous_slugs[]`, and the build generates Netlify redirects from every previous slug straight to the current URL. The build fails if a URL from the last production sitemap disappears without a redirect or a recorded 410. A retired slug can never be reused. **Check:** rename a test entry and the old URL 301s to the new one after deploy. Delete a test page without a decision and the build fails.
- **REDIR-02 (P0) [Build]** Every redirect is a single 301 to a URL that returns 200. There are no chains or loops, and no redirect has a live page as its source. **Check:** an automated test runs every redirect rule, including the legacy list from MIG-02, and fails on any response that redirects again.
- **REDIR-03 (P1) [Infra]** Protocol and host clean-up (`http://` to `https://`, the non-canonical host to the canonical host) happen in the same hop as any slug redirect. If Netlify cannot combine the bare-root `/` to `/en/` step into that hop, record the result. **Check:** request `http://www.shantara.life/en/programs/{old-slug}`. One 301 to `https://shantara.life/en/programs/{current-slug}`.
- **REDIR-04 (P1) [Build]** Redirects keep the query string, so `utm_` and `gclid` survive. **Check:** request an old slug with `?utm_source=test`. The final URL still has it.
- **REDIR-05 (P1) [Content]** Retiring a page is a recorded decision. A true replacement (the same programme under a new name, a merged duplicate) gets a 301. With no true replacement the page returns 410. Never redirect a retired page to something only similar, to a listing hub, or to the homepage. Pages are never simply deleted. **Check:** retire a test programme each way once and confirm the status code.

## 7. Migration from the current site (MIG)

- **MIG-01 (P0) [Ops]** Crawl and export every URL of every site being replaced: the current shantara.life and any former addresses confirmed under [Still open](#still-open). Include PDFs and images with traffic or backlinks. Add URLs from Search Console (Pages report and 16 months of Performance data) and from OpenSEO backlink data. Do not guess mappings. **Check:** the export is saved in the website repo.
- **MIG-02 (P0) [Build]** Every old URL is loaded as a redirect to its true equivalent page, or returns 410 when none exists. Do not redirect to the homepage, a listing hub or a merely similar page. **Check:** every URL in the export has a redirect or a recorded 410 decision.
- **MIG-03 (P0) [Content]** The top 20 old pages by Search Console clicks over the last 12 months keep their topic, main facts and answers on the new URL. **Check:** a side-by-side review before launch.
- **MIG-04 (P0) [Ops]** On launch day, update the website link on every listing Shantara controls (Google Business Profile, social profiles, directories) to the new URL. **Check:** a dated checklist of listings with their new links.
- **MIG-05 (P1) [Ops]** For 8 weeks after launch, check Search Console and Bing Webmaster Tools weekly for redirect errors, 404 spikes and drops in indexed pages. **Check:** a weekly note with the indexed page count.

## 8. Pages (PAGE)

- **PAGE-01 (P1) [Content]** Every page has a unique title (about 60 characters or fewer) and meta description (about 155 characters or fewer), written as plain, literal descriptions. Titles use `{Page} | Shantara Naturopathy Retreat` or another approved form that keeps the full name. Never use "Shantara Naturopathy" alone. The generator supplies a fallback, but editors write the real ones. **Check:** a crawl report shows zero duplicate titles and descriptions.
- **PAGE-02 (P1) [Build]** Every page except the homepage shows breadcrumbs that follow the logical path, for example Home → Conditions → Diabetes, or Home → Insights → Article. Never invent hub pages to deepen a breadcrumb. **Check:** template review on each page type.
- **PAGE-03 (P1) [Content]** No orphan pages. Every published page is within 3 clicks of `/en/`. Links follow [skill-ia.md](skill-ia.md): condition ↔ programme, programme → therapy, clinical guide → condition or programme, doctor answer → guide. **Check:** a crawl report of click depth and pages with no internal links.
- **PAGE-04 (P0) [Build]** Internal-only facts never reach a page or its code. That includes HTML, JSON-LD, alt text, data attributes and island props. Internal facts are ICP names and IDs, the acreage, `[TO CONFIRM]` markers, the handbook §15 line, `*_note` fields, and any mention of the room count beyond the one allowed in [naming and NAP](copy/naming-and-nap.md). **Check:** a build step searches `dist/` for `TO CONFIRM`, `icp_`, `acre` and `_note`, and fails on a match.
- **PAGE-05 (P1) [Content]** Copy is original and first-party: real programme structure, real doctors, real therapies, real schedules. No generic AI-written wellness copy and no word-count targets. **Check:** content review before each page publishes.
- **PAGE-06 (P0) [Content]** One page per real thing: one per programme, condition and doctor. No pages for keyword variations (for example both `obesity` and `weight-loss`) and no location doorway pages. **Check:** a review of the page inventory before launch and at every new page.
- **PAGE-07 (P1) [Content]** Facts are text, not images: programme inclusions, durations, schedules, therapy lists, travel distances, and rates on the tariff page. Use `SpecTable` and `TimeTable`. **Check:** the facts are selectable text on the page.
- **PAGE-08 (P1) [Content]** Trust pages are public and linked from the footer on every page: About (including the Hygiene Nature Cure Hospital history), Our Doctors, Medical Editorial Policy, Contact with the full business name, address, phone and email, Resident Policies, Cancellation Policy, Privacy Policy and Terms of Service. **Check:** every page loads without login and the footer links to all of them.

## 9. Medical content (MED)

Zarnik has no equivalent section. Shantara publishes health information, so Google holds it to the higher "Your Money or Your Life" standard. These rules make [SKILL.md §9](SKILL.md#section-9) and the [health claims rules](copy/health-claims-and-compliance.md) checkable.

- **MED-01 (P0) [Clinical]** Medical pages publish only after review by a named Shantara doctor. Medical pages are condition pages, Clinical Guides, Doctor Answers, Evidence Notes and any article that states a health fact. The page shows the reviewer's name, qualification and last medically reviewed date in the server HTML. An unreviewed page stays a draft. It does not go live as `noindex`. **Check:** the build fails when a published medical entry lacks `medical_reviewer` or `last_medically_reviewed`.
- **MED-02 (P0) [Clinical]** Every medical claim and statistic names its source and date in a reference list. Unsourced numbers are removed. **Check:** content review before publishing.
- **MED-03 (P0) [Build]** The health-claims rules cover metadata as well as body copy: titles, meta descriptions, Open Graph text, alt text, JSON-LD `description` and image filenames. **Check:** a build step searches `dist/` for the banned claim words in [words to avoid](copy/words-to-avoid.md) and [health claims](copy/health-claims-and-compliance.md) (for example "cure", "guaranteed") and fails on a match.
- **MED-04 (P0) [Content]** Testimonials and guest stories are real, used with consent, and describe the stay, food, service and how the guest felt, never clinical results. The site never emits `Review` or `AggregateRating` markup for Shantara itself. Google does not show review stars for a business's reviews of itself. **Check:** every testimonial record links to a consent record, and the JSON-LD generator has no review output.
- **MED-05 (P1) [Build]** Dates are honest. `datePublished`, `dateModified` and `lastReviewed` come from the content record. A deploy never changes them. Visible dates equal the schema dates. **Check:** two builds with no content change produce identical dates in HTML and JSON-LD.

## 10. Rates (RATE)

Adapted from Zarnik's price rules. Rates appear only on tariff surfaces ([SKILL.md §1](SKILL.md)).

- **RATE-01 (P0) [Build]** Rates appear only on the tariff page. Every other page links to it. **Check:** a build step searches `dist/` outside the tariff page for `₹`, `INR` and rate figures, and fails on a match.
- **RATE-02 (P0) [Content]** Each rate states its currency (ISO code), its unit (per night, per person or per stay, and the room category) and the label "incl. GST", because every tariff rate includes GST. It is visible server-rendered text, never an image, tooltip or something that needs a click. A figure still marked `[TO CONFIRM]` is not published. **Check:** `curl` the tariff page. Every rate, currency, unit and "incl. GST" label appears as text.
- **RATE-03 (P0) [Build]** Every visitor sees the same rates. They never change with IP address, locale, cookie or device. Locale is not currency. **Check:** load the tariff page from two countries and two devices. Same figures.
- **RATE-04 (P1) [Build]** If the tariff page emits JSON-LD `Offer` nodes, each `price` is a plain number that equals the visible figure, with an ISO `priceCurrency` and a `priceSpecification` with `valueAddedTaxIncluded: true`. No other page emits `Offer`. Visible figures carry a `data-rate` attribute so tests can read them. **Check:** an automated test compares each visible `data-rate` value with the JSON-LD price.

## 11. Structured data (SCHEMA)

- **SCHEMA-01 (P0) [Build]** All JSON-LD is in the prerendered HTML, never added by client-side JavaScript. **Check:** JSON-LD is present in `curl` output.
- **SCHEMA-02 (P0) [Build]** Every page outputs one connected `@graph` (DATA-02). Nodes refer to each other by absolute `@id` values. Never use a bare fragment such as `#organization`. Entity `@id` values do not contain a locale, so the same doctor or programme keeps one identity in every language. **Check:** Schema Markup Validator shows one graph and no duplicate Shantara entities.

```
https://shantara.life/#organization
https://shantara.life/#website
https://shantara.life/#doctor-{internal-id}
https://shantara.life/#program-{internal-id}
https://shantara.life/#condition-{internal-id}
{page URL}#webpage   and   {page URL}#breadcrumb
```

- **SCHEMA-03 (P1) [Build]** Shantara is one `MedicalClinic` named "Shantara Naturopathy Retreat". Never use `Hospital`, spa types or `HealthAndBeautyBusiness`. The full node appears only on each published locale's homepage. It carries name, url, logo, image, description, telephone, email, address, geo, sameAs and contactPoint from DATA-04. Every other page references it by `@id`. **Check:** Rich Results Test on `/en/`. Other pages contain only an `@id` reference.
- **SCHEMA-04 (P1) [Build]** A `WebSite` node on every page has `@id`, `url`, `name`, `inLanguage` and `publisher` pointing to the organisation. No `SearchAction`: Shantara has no site search, and Google retired the sitelinks search box in November 2024. **Check:** no `potentialAction` in the WebSite node.
- **SCHEMA-05 (P1) [Build]** Every indexable page has a page node of the most specific type in the [schema map](#schema-map-by-page-type), with `url`, `inLanguage`, `isPartOf` pointing to the website and `breadcrumb` pointing to its BreadcrumbList. **Check:** an automated test on each page type.
- **SCHEMA-06 (P0) [Build]** Structured data describes only what is visible and public. Never put form data, health information or a guest's identity in JSON-LD unless the guest consented and the details are visible on the page. **Check:** code review of the generator. The consultation page emits only `WebPage`.
- **SCHEMA-07 (P1) [Build]** A `BreadcrumbList` appears on every page that shows breadcrumbs and matches the visible trail. **Check:** Rich Results Test.
- **SCHEMA-08 (P1) [Build]** Medical pages use `MedicalWebPage` with `about` pointing to a `MedicalCondition` (name and only what is visible), `reviewedBy` pointing to the doctor's `@id`, and `lastReviewed` equal to the visible date. **Check:** Schema Markup Validator on one condition page.
- **SCHEMA-09 (P1) [Build]** Doctors are `Person` nodes with name, jobTitle, image, `worksFor` pointing to the organisation, and qualifications and `sameAs` links only when they are public and visible. A doctor profile page is `ProfilePage` with `mainEntity` pointing to that Person. Do not use `Physician` for an individual: Schema.org defines `Physician` as a medical business type, not a person. **Check:** the generator outputs `ProfilePage` only on doctor pages.
- **SCHEMA-10 (P1) [Build]** Programme pages use `Service` with name, description and `provider` pointing to the organisation. No `offers` on programme pages (RATE-04). **Check:** Schema Markup Validator on one programme page.
- **SCHEMA-11 (P1) [Build]** Listing pages (`/en/conditions`, `/en/programs`, `/en/insights`) use `CollectionPage` with an `ItemList` of the URLs shown. Condition and programme nodes live only on their own pages. **Check:** Schema Markup Validator shows no `Service` or `MedicalCondition` nodes on listing pages.
- **SCHEMA-12 (P1) [Build]** Articles use `Article` or `BlogPosting` with headline, image, datePublished, dateModified, `author` pointing to a doctor's or writer's Person `@id`, and `publisher` pointing to the organisation. Medical articles also follow SCHEMA-08. **Check:** Rich Results Test.
- **SCHEMA-13 (P2) [Build]** `FAQPage` markup is optional and used only when the questions and answers are visible on the page. Google removed FAQ rich results in May 2026, so the markup brings no Google benefit. Never use `HowTo`. **Check:** none needed.
- **SCHEMA-14 (P1) [Build]** No empty values: omit an optional property instead of sending an empty string or "N/A". URLs are absolute, dates are ISO 8601, and the phone number is `+919553700100`. **Check:** an automated JSON-LD lint in CI.
- **SCHEMA-15 (P1) [Build]** Only add schema that states something true and useful, or that a known consumer (Google, Bing, AI tools) reads. Do not chase schema coverage. **Check:** every type in the generator is listed in the map below.

### Schema map by page type

Every indexable page also gets the `WebSite` node and a reference to `https://shantara.life/#organization`.

| Page type | Nodes |
| --- | --- |
| Home (each published locale) | Full `MedicalClinic` + `WebSite` + `WebPage` |
| Condition | `MedicalWebPage` + `MedicalCondition` + `BreadcrumbList`, with `reviewedBy` and `lastReviewed` |
| Programme | `WebPage` + `Service` + `BreadcrumbList` |
| Tariff | `WebPage` + `BreadcrumbList`, and `Offer` nodes only for visible, confirmed rates |
| Experience pages | `WebPage` + `BreadcrumbList` |
| Doctor profile | `ProfilePage` + `Person` + `BreadcrumbList` |
| Article, Clinical Guide, Doctor Answer | `Article` or `BlogPosting` + `BreadcrumbList`, and `MedicalWebPage` fields when medical |
| Conditions, Programmes and Insights listings | `CollectionPage` + `ItemList` + `BreadcrumbList` |
| About | `AboutPage` with `about` pointing to the organisation |
| Contact | `ContactPage` with `about` pointing to the organisation |
| Book a Consultation, policies, terms, privacy | `WebPage` only |
| Form confirmation, 404, 410 | No structured data |

## 12. Link previews (SOCIAL)

Shantara pages are shared on WhatsApp, Instagram, Facebook, LinkedIn and email. These tags control how the preview looks.

- **SOCIAL-01 (P1) [Build]** Every public page has `og:title`, `og:description`, `og:url` (the canonical URL), `og:type`, `og:site_name` ("Shantara Naturopathy Retreat"), `og:locale` and `og:image`, all from the metadata generator. **Check:** paste a programme URL into WhatsApp. The preview shows the right title and image.
- **SOCIAL-02 (P1) [Build]** `og:image` is a 1200 × 630 crop of the page's real hero photograph, around 300 KB or less, because some apps skip large preview images. **Check:** the `og:image` URL returns an image of the right size.
- **SOCIAL-03 (P1) [Build]** `twitter:card` is `summary_large_image`. **Check:** view the page source.
- **SOCIAL-04 (P1) [Content]** Pages without their own photograph (policies, terms) use one approved default share image. **Check:** paste the privacy policy URL into WhatsApp.

## 13. Images (IMG)

- **IMG-01 (P1) [Build]** Images go through Astro Image as AVIF or WebP, with `srcset`, width and height, so the layout does not jump. **Check:** Lighthouse shows no image-size or layout-shift warnings.
- **IMG-02 (P1) [Build]** The hero image, which is usually the largest element on screen, is not lazy-loaded and is the only image with `fetchpriority="high"`. **Check:** the Lighthouse LCP element is the hero image and it is not lazy-loaded.
- **IMG-03 (P1) [Build]** Every other image is lazy-loaded. **Check:** the network panel shows those images load only when scrolled near.
- **IMG-04 (P0) [Content]** Alt text describes what the photograph really shows, for example "Guest room with a private balcony overlooking the valley". It never carries health claims or keyword lists. Decorative images, including the rosette, use `alt=""`. **Check:** a crawl report shows no missing alt text on content images.
- **IMG-05 (P2) [Content]** Source image files have descriptive names (`hydrotherapy-room.jpg`, not `TRD0142.jpg`), because Astro keeps the base name in the published file. **Check:** review the image folder in the website repo.
- **IMG-06 (P1) [Content]** Real Shantara photography shows the place, rooms, food, therapies, guests and doctors. AI-generated images never depict any of them. Any AI-generated image used elsewhere carries the IPTC `DigitalSourceType` value `trainedAlgorithmicMedia` in its metadata. **Check:** inspect the metadata of any AI-generated image before upload.

## 14. Files (FILE)

- **FILE-01 (P2) [Build]** Any published PDF (brochure, resident policies) is text-based, has a document title in its metadata, is tagged for screen readers, stays under 2 MB, and contains no rates unless it is the tariff. The link text states the file type and size, for example "Download resident policies (PDF, 240 KB)". A PDF that repeats a web page sends `Link: <https://shantara.life/en/…>; rel="canonical"`. **Check:** open the PDF, select text, check document properties and run `curl -I`.

## 15. Accessibility (ACC)

The target is WCAG 2.2 AA. The component contract is `guidelines/accessibility.html` (catalog card: Accessibility). AI browsing agents (ChatGPT, Gemini in Chrome, Claude in Chrome) read the same accessibility information screen readers use, so these rules also decide whether an agent can find a programme and book a consultation.

- **ACC-01 (P0) [Build]** Native HTML first. Navigation is `<a href>`, actions are `<button>`, and phone, WhatsApp and email use real `tel:`, `https://wa.me/` and `mailto:` links. Tiles that navigate are links. Add ARIA only when no native element does the job. **Check:** code review. No `<div>` or `<span>` with click handlers.
- **ACC-02 (P1) [Build]** Every page has `<header>`, `<nav>`, one `<main>` and `<footer>`. Each extra `<nav>` has a label (Main, Footer, Breadcrumb, Pagination). A "Skip to main content" link is the first focusable element. **Check:** press Tab once on any page and the skip link appears. An axe audit shows no landmark errors.
- **ACC-03 (P0) [Build]** Everything works by keyboard: the menu sheet, phone dropdown, language selector, accordions, gallery and the consultation form in every form it takes (page, modal, drawer). Focus is always visible (`--ring-focus`). **Check:** submit a test consultation from a condition page using only the keyboard.
- **ACC-04 (P0) [Build]** The phone dropdown, language selector and menu button open on click or Enter, not only on hover, and expose `aria-expanded`. Site navigation never uses `role="menu"`. **Check:** open each with the keyboard. A screen reader announces expanded and collapsed.
- **ACC-05 (P0) [Build]** The consultation modal or drawer and the mobile menu sheet are modal dialogs. They take focus on open, keep focus inside, close on Escape and return focus to the button that opened them. **Check:** open and close each with the keyboard.
- **ACC-06 (P0) [Build]** Every form field has a visible label. Placeholder text is not a label. Errors appear as text next to the field, are linked with `aria-describedby`, and set `aria-invalid="true"`. Errors never rely on colour alone. **Check:** submit an empty consultation form with a screen reader on. Each error is read.
- **ACC-07 (P1) [Build]** The form result is announced in a live region: the success copy from [SKILL.md §6](SKILL.md#section-6), or a failure message that offers phone and WhatsApp. **Check:** submit a test form with a screen reader on.
- **ACC-08 (P1) [Build]** Tables (tariff, `TimeTable`, `SpecTable`) use `<th scope>`. A screen reader reads each rate with its currency and unit. **Check:** screen reader review of the tariff page.
- **ACC-09 (P1) [Build]** Gallery thumbnails are labelled buttons ("View image 2 of 6") with the current one marked `aria-current="true"`. Nothing auto-rotates. **Check:** screen reader review of a gallery.
- **ACC-10 (P1) [Build]** Breadcrumbs and pagination sit in labelled `<nav>` elements, and the current item has `aria-current="page"`. **Check:** template review.
- **ACC-11 (P0) [Build]** Icon-only controls (phone, WhatsApp, menu, close, language) have an accessible name, and the icon is `aria-hidden="true"`. **Check:** an axe audit shows no empty buttons or links.
- **ACC-12 (P0) [Build]** Contrast meets the contract: 4.5:1 for body text and 3:1 for large text and control borders, with text on photography judged against the scrimmed photograph. **Check:** an axe audit shows no contrast errors.
- **ACC-13 (P1) [Build]** Targets are at least 24 × 24 pixels everywhere and 44 × 44 pixels on mobile. Pages work at 200% browser zoom and at 320 pixels wide without horizontal scrolling. **Check:** zoom and narrow-screen tests on each page type.
- **ACC-14 (P1) [Build]** Animations and Astro View Transitions respect `prefers-reduced-motion`. **Check:** turn on reduced motion in the OS. Movement stops and colour and opacity changes remain.
- **ACC-15 (P1) [Build]** axe-core runs inside the existing Playwright smoke tests on each page type, and any serious or critical issue fails CI. This adds `@axe-core/playwright` as a development dependency, so record it in [skill-stack.md](skill-stack.md) under change control. **Check:** CI shows the accessibility results on every pull request.
- **ACC-16 (P1) [Ops]** Before launch and every quarter, run one full consultation journey with only a keyboard and one with a screen reader (NVDA on Windows or VoiceOver on Mac or iPhone). **Check:** a dated test note.
- **ACC-17 (P2) [Build]** Now and then, run Lighthouse's experimental "Agentic Browsing" audit on the homepage, a programme page and Book a Consultation. Fix accessibility and HTML findings. **Check:** a saved Lighthouse report.

## 16. Performance (PERF)

- **PERF-01 (P1) [Build]** Core Web Vitals on mobile at the 75th percentile: LCP under 2.5 seconds, INP under 200 milliseconds, CLS under 0.1. **Check:** PageSpeed Insights before launch. After launch, CrUX field data once the site has enough traffic to appear there.
- **PERF-02 (P0) [Infra]** Netlify's CDN serves every page and file with Brotli or gzip compression over HTTP/2 or HTTP/3. Hashed `/_astro/` files and fonts are cached as immutable. HTML is cached briefly so a deploy shows at once. Server response time for cached pages is under 200 milliseconds. **Check:** response headers and PageSpeed Insights TTFB on a programme page.
- **PERF-03 (P1) [Build]** Preload only the Diodrum weights used above the fold, with `font-display: swap`. OpenPanel and Google Tag load deferred, after the page is usable. **Check:** Lighthouse shows no render-blocking resources.
- **PERF-04 (P1) [Build]** No full-screen pop-ups on entry: no consultation modal, WhatsApp takeover or newsletter prompt. A cookie notice, if needed, is a banner that does not cover the content. **Check:** load a programme page on mobile. The content is visible without closing anything.
- **PERF-05 (P2) [Build]** Pages work with the browser's back/forward cache: no `unload` handlers and no `Cache-Control: no-store` on public pages. **Check:** Lighthouse back/forward cache audit.
- **PERF-06 (P2) [Build]** Astro's link prefetch may prefetch internal pages. It never prefetches the form endpoint or Keystatic routes. **Check:** Chrome DevTools network panel while hovering links.

## 17. Security and hosts (SEC)

- **SEC-01 (P0) [Infra]** HTTPS everywhere. Both `http://` and the non-canonical host 301 to the canonical host in one hop (REDIR-03). **Check:** request the four variants of the homepage. All land on one URL.
- **SEC-02 (P0) [Infra]** The HSTS header is set and there is no mixed content, which includes loading OpenPanel from `https://openpanel.zescloud.net/`. **Check:** response headers and the browser console on a page with analytics running.
- **SEC-03 (P0) [Infra]** No exposed `.env`, `.git`, Keystatic secrets or raw uploads. **Check:** request `/.env` and `/.git/config`. Both return 404.
- **SEC-04 (P1) [Infra]** A Content-Security-Policy header allows only the site itself, OpenPanel, Google Tag and the Web3Forms endpoint. **Check:** response headers, and the browser console shows no CSP errors during a test consultation.

## 18. AI answers, AI agents and local presence (AI)

Google says there is no separate trick for AI answers: pages first need to be indexed and good in normal search. These rules make pages easier to quote and Shantara easier to recognise as one entity.

- **AI-01 (P1) [Content]** Guides and FAQ answers start with a direct one- or two-sentence answer. Each section under a question heading makes sense if quoted alone. **Check:** read each section out of context. It still answers its heading.
- **AI-02 (P1) [Content]** Headings are written as the plain questions guests ask, for example "Can I continue my medication during a stay?". **Check:** content review.
- **AI-03 (P1) [Content]** Pages give specific, checkable facts (programme durations, what is included, who the doctors are, distance from Calicut airport, meals) instead of general claims, using only verified facts. **Check:** content review against `content/` and the handbook.
- **AI-04 (P1) [Content]** Each guide covers its topic, including the follow-up questions a guest needs answered before deciding. AI search tools split one question into several related searches. The brief lists those questions before writing. Do not pad a guide to reach a question count. **Check:** each guide brief lists its related questions.
- **AI-05 (P0) [Ops]** Name, address, phone and email are identical everywhere Shantara controls: the website, Google Business Profile, every social profile and every directory listing. Use "Shantara Naturopathy Retreat", +91 9553 700 100 and heal@shantara.life. Those profiles are also the JSON-LD `sameAs` list. **Check:** a quarterly review of every listing.
- **AI-06 (P1) [Ops]** Shantara has its own claimed and verified Google Business Profile, linked only to Shantara. It is never merged with, or managed as part of, the Hygiene Nature Cure Hospital listing. Its category fits a medical clinic, its website link is `https://shantara.life/en/`, and its photos are real. **Check:** Google Business Profile shows the profile as verified, with Shantara's name, phone, address and website link.
- **AI-07 (P1) [Build]** AI browsing agents can use the site: the ACC rules cover it. The consultation form also submits as a plain HTML form POST when JavaScript fails. **Check:** submit the form with JavaScript turned off. The submission arrives and the visitor sees a confirmation.
- **AI-08 (P2) [Build]** `llms.txt` is optional. Google Search ignores it and no major AI search engine has confirmed using it. Add it only because it is cheap. **Check:** none needed.
- **AI-09 (P2) [Build]** Do not build AI booking integrations (Universal Commerce Protocol, WebMCP, agent checkout). Shantara takes consultations, not online bookings. **Check:** none needed.
- **AI-10 (P2) [Content]** Publish original first-party material others can cite: a sample daily schedule, menus, therapy explanations by Shantara's doctors, recordings of doctor talks. Any outcome statistic goes through [health claims](copy/health-claims-and-compliance.md) first. **Check:** each piece is published and linked from the relevant pages.
- **AI-11 (P2) [Ops]** Build real mentions of Shantara on trusted sites: media coverage, doctor talks and events, the Hygiene Nature Cure Hospital history, and credible health and travel publications. No paid link schemes. This builds authority over time. It is not a formula for AI recommendations. **Check:** a quarterly review.

## 19. Measurement (MEAS)

- **MEAS-01 (P0) [Ops]** A Google Search Console domain property and Bing Webmaster Tools are verified before launch, with the sitemap submitted to both. **Check:** both show the property as verified and the sitemap as read.
- **MEAS-02 (P0) [Build]** The launch events in [skill-technical.md](skill-technical.md) fire correctly: `consultation_cta_click`, `form_start`, `generate_lead` (only after the form destination confirms success) and `contact_click`. **Check:** OpenPanel live view and GA4 DebugView during a test consultation.
- **MEAS-03 (P0) [Build]** Personal and health data never appears in URLs, page titles, analytics or JSON-LD. The form posts its data. The confirmation URL carries no field values. **Check:** submit a test form with a unique word in the notes field. That word appears in no URL and no analytics request in the network panel.
- **MEAS-04 (P1) [Ops]** Referrals from chatgpt.com, perplexity.ai, gemini.google.com, copilot.microsoft.com and claude.ai are grouped as their own "AI assistants" channel in GA4 and as a saved referrer filter in OpenPanel. **Check:** the channel report shows "AI assistants".
- **MEAS-05 (P1) [Ops]** Measure AI visibility mainly with data: Search Console, Bing Webmaster Tools, OpenSEO and the "AI assistants" channel. Once a month, also ask ChatGPT, Perplexity and Google AI Mode Shantara's core guest questions once each, for each market (India, UAE, UK). Record whether Shantara is cited, which URL, and which competitors appear. **Check:** a monthly note combining the numbers and the manual check.
- **MEAS-06 (P0) [Ops]** In Search Console, set "Search generative AI" to Include, so pages can appear in AI Overviews and AI Mode. Google documents the setting in [Search Console Help](https://support.google.com/webmasters/answer/16908024?hl=en). **Check:** a settings screenshot saved at launch.
- **MEAS-07 (P1) [Ops]** Failures alert a person: failed Netlify deploys, IndexNow errors, and form delivery. A monthly test submission confirms Web3Forms still delivers to the inbox. **Check:** force a test deploy to fail. An alert arrives.

## 20. Do not do this

Some SEO tools and older guides still recommend these. Do not follow them.

- Do not create separate "AI versions" of pages, micro-Q&A pages, or pages chopped into fragments for AI. Google treats this as scaled content abuse.
- Do not create keyword-variation pages, location doorway pages, ICP-named hubs or condition-category hubs.
- Do not canonicalise a translation to English, or emit hreflang for a page that is not published.
- Do not leave both `/` and `/en/` indexable.
- Do not canonicalise page 2 of a listing to page 1, and do not use `rel="next"` or `rel="prev"`.
- Do not change a slug without a redirect, reuse a retired slug, or send visitors through more than one redirect.
- Do not redirect a retired page to the homepage, a listing hub or a merely similar page.
- Do not use robots.txt to keep pages out of the index. It controls crawling only, and Google cannot read a `noindex` tag on a blocked page.
- Do not block AI search crawlers by accident when blocking training crawlers. Blocking GPTBot or ClaudeBot does not stop ChatGPT or Claude search citations. OAI-SearchBot and Claude-SearchBot control those.
- Do not add `SearchAction`, `Review` or `AggregateRating` for Shantara itself, `HowTo`, `Hospital`, spa types or `HealthAndBeautyBusiness`.
- Do not use bare `#fragment` values as `@id`, or put a locale inside an entity `@id`.
- Do not write JSON-LD by hand in page components or Markdoc.
- Do not add FAQ content to chase rich results.
- Do not show rates outside the tariff page, or change rates by location, locale or device.
- Do not put health claims in titles, meta descriptions, alt text or schema.
- Do not change published, modified or reviewed dates on a deploy.
- Do not inject canonical, robots, hreflang or JSON-LD with client-side JavaScript.
- Do not lazy-load the hero image.
- Do not use `<div>` or `<span>` as buttons, or `role="menu"` for site navigation.
- Do not treat `llms.txt` as an SEO or AI citation lever.
- Do not set word-count targets.

## Where every Zarnik rule went

Every rule in Zarnik's "Search and AI Visibility" version 6.2 was reviewed. "Dropped" means the reason behind the rule does not exist at Shantara.

| Zarnik section | Zarnik rules | Shantara rule or reason |
| --- | --- | --- |
| DATA | DATA-01, DATA-02, DATA-03, DATA-04, DATA-07 | DATA-01, DATA-02, DATA-03, DATA-04 (raised to P0 because of the one-number rule), DATA-05 |
| DATA | DATA-05 | Covered by the one consultation form and one `track()` abstraction in [SKILL.md §6–7](SKILL.md#section-6) |
| DATA | DATA-06 | Dropped. No product feeds. |
| REN | REN-01 to REN-05 | REN-01 to REN-05. REN-04 now fails the build on any page of 2 MB or more. |
| CRAWL | CRAWL-01 | CRAWL-01. No cart, account, search or filter URLs to block. |
| CRAWL | CRAWL-02 | Dropped. No variant parameters. Pagination moved to URL-05. |
| CRAWL | CRAWL-03, CRAWL-08 | CRAWL-05 |
| CRAWL | CRAWL-04 | CRAWL-02 (Keystatic admin, confirmation page) |
| CRAWL | CRAWL-05 | CRAWL-03. The Netlify equivalent of an admin subdomain is deploy previews and the `netlify.app` address. |
| CRAWL | CRAWL-06, CRAWL-07 | CRAWL-04 |
| CRAWL | CRAWL-09, CRAWL-11 | CRAWL-06, CRAWL-07 |
| CRAWL | CRAWL-10 | Dropped. The site has far fewer than 10,000 URLs. |
| CRAWL | CRAWL-12 | CRAWL-09 |
| CRAWL | CRAWL-13 | CRAWL-08, lowered to P2 and run after deploys because there is no backend |
| URL | URL-01, URL-02 | Dropped. Product and category ID suffixes solve a catalogue problem Shantara does not have. Identity is the internal ID ([SKILL.md §15](SKILL.md#section-15)). |
| URL | URL-03, URL-04 | URL-01, URL-02 |
| URL | URL-05, URL-06 | Dropped. No listing filters or sorting. Insights tabs are handled in URL-05. |
| URL | URL-07 | Dropped. No product variants. |
| URL | URL-08, URL-09, URL-10, URL-11 | URL-08 → URL-03, URL-09 → URL-05, URL-10 → URL-04, URL-11 → URL-06 |
| REDIR | REDIR-01, REDIR-02, REDIR-05 | REDIR-01 (`previous_slugs[]` generate the redirects, so every old slug points to the current URL) |
| REDIR | REDIR-03, REDIR-04, REDIR-06 | REDIR-02 |
| REDIR | REDIR-07, REDIR-08 | REDIR-03, REDIR-04 |
| REDIR | REDIR-09 | REDIR-05 |
| REDIR | REDIR-10, REDIR-11 | Dropped. Netlify serves redirects at the edge with no database to cache or log, and Shantara URLs carry no IDs to fall back on. |
| MIG | MIG-01 to MIG-05 | MIG-01 → MIG-01, MIG-02 → MIG-02, MIG-03 → REDIR-02, MIG-04 → MIG-03 (top 20 instead of top 50, for a smaller site), MIG-05 → MIG-05. Shantara MIG-04 is new: update external listings on launch day. |
| PAGE | PAGE-01, PAGE-02, PAGE-03 | PAGE-01, PAGE-02, PAGE-03 |
| PAGE | PAGE-04 | PAGE-04, adapted from supplier names to Shantara's internal-only facts |
| PAGE | PAGE-05, PAGE-06, PAGE-08 | PAGE-05, PAGE-06, PAGE-07 |
| PAGE | PAGE-07, PAGE-18 | MED-01. Shantara does not publish thin or unreviewed pages at all. |
| PAGE | PAGE-09, PAGE-11 | REDIR-05 |
| PAGE | PAGE-10 | Dropped. No stock. |
| PAGE | PAGE-12 | MED-04 |
| PAGE | PAGE-13 | Covered by PAGE-05 and [skill-content.md](skill-content.md) |
| PAGE | PAGE-14 to PAGE-17 | Dropped. No brand or collection pages. [skill-ia.md](skill-ia.md) rules out hubs. |
| PAGE | PAGE-19 | Dropped. Legal Metrology applies to packaged goods. Shantara's equivalent trust duty is medical review (MED-01). |
| PRICE | PRICE-01, PRICE-02, PRICE-05 | RATE-02 |
| PRICE | PRICE-03, PRICE-06 | RATE-04 |
| PRICE | PRICE-04 | RATE-03 |
| PRICE | PRICE-07, PRICE-08 | Dropped. No cart, checkout or Merchant Center. |
| SCHEMA | SCHEMA-01, 02, 04, 14, 16, 17, 18 | SCHEMA-01 → SCHEMA-01, SCHEMA-02 → SCHEMA-02, SCHEMA-04 → SCHEMA-07, SCHEMA-14 → SCHEMA-14, SCHEMA-16 → SCHEMA-05, SCHEMA-17 → SCHEMA-06, SCHEMA-18 → SCHEMA-15 |
| SCHEMA | SCHEMA-03 | SCHEMA-03 (`MedicalClinic` instead of `OnlineStore`) |
| SCHEMA | SCHEMA-15 | SCHEMA-04 |
| SCHEMA | SCHEMA-05, SCHEMA-09 | SCHEMA-10 (`Service` for programmes) |
| SCHEMA | SCHEMA-06, SCHEMA-07 | RATE-04 |
| SCHEMA | SCHEMA-08 | Dropped. No shipping or returns. |
| SCHEMA | SCHEMA-10, 11, 12, 13 | SCHEMA-10 → SCHEMA-11, SCHEMA-11 → MED-04, SCHEMA-12 → SCHEMA-12, SCHEMA-13 → SCHEMA-13 |
| SCHEMA | SCHEMA-19 | SCHEMA-09 (`ProfilePage` for doctor pages only) |
| SOCIAL | SOCIAL-01 to SOCIAL-04 | SOCIAL-01 to SOCIAL-04 |
| SEARCH | SEARCH-01 to SEARCH-05 | Dropped. Shantara has no site search. Revisit if Insights grows large enough to need it. |
| ORDER | ORDER-01, ORDER-02 | Dropped. No orders or shipments. |
| GMC | GMC-02 | PAGE-08 |
| GMC | GMC-14, GMC-15 | IMG-06 |
| GMC | GMC-01, 03 to 13, 16 | Dropped. Shantara sells nothing through Google Merchant Center. |
| IMG | IMG-01, 02, 03, 06 | IMG-01, 02, 03, 04 |
| IMG | IMG-04 | IMG-05, lowered to P2 |
| IMG | IMG-05 | Dropped. Astro hashes image URLs, and image search matters little for a retreat. |
| IMG | IMG-07 | Dropped as a rule. [skill-premium.md](skill-premium.md) already asks for real photography. |
| FILE | FILE-01 to FILE-07 | FILE-01. Shantara has no spec sheets; the parts that apply to any PDF were kept. |
| ACC | ACC-01, 05, 06, 08, 09, 10, 23, 24 | ACC-01 → ACC-01, ACC-05 and ACC-06 → ACC-03, ACC-08 → ACC-05, ACC-09 and ACC-10 → ACC-06, ACC-23 → ACC-11, ACC-24 → ACC-12 |
| ACC | ACC-02 | LANG-04 (`lang` and `dir`) and PAGE-01 (unique title) |
| ACC | ACC-03, ACC-04 | ACC-02 |
| ACC | ACC-07 | ACC-04 |
| ACC | ACC-11, 12, 13, 14, 15, 18 | Dropped. No filters, variants, quantity or stock. |
| ACC | ACC-16, ACC-20 | ACC-08 |
| ACC | ACC-17 | ACC-07 (form result instead of add to cart) |
| ACC | ACC-19, ACC-27 | ACC-09, ACC-14 |
| ACC | ACC-21, ACC-22 | ACC-10 |
| ACC | ACC-25, ACC-26 | ACC-13 |
| ACC | ACC-28, ACC-29, ACC-30 | ACC-15 (P1, inside the existing smoke tests), ACC-16, ACC-17 |
| PERF | PERF-01 to PERF-07 | PERF-01 → PERF-01, PERF-02 and PERF-03 → PERF-02, PERF-04 → PERF-03, PERF-05 → PERF-04, PERF-06 → PERF-05, PERF-07 → PERF-06 |
| SEC | SEC-01 to SEC-04 | SEC-01 to SEC-04 |
| AI | AI-01, 02, 03, 12 | AI-01, AI-02, AI-03, AI-04 |
| AI | AI-04, AI-13 | MED-01, MED-02 (P0 for medical content) |
| AI | AI-05 | AI-05 (raised to P0 because of the one-number rule) |
| AI | AI-06, AI-14 | AI-10, AI-11 |
| AI | AI-07, AI-09, AI-10 | AI-07, AI-08, AI-09 |
| AI | AI-08 | MEAS-01 |
| AI | AI-11 | Dropped. The OpenAI product feed is for products. |
| MEAS | MEAS-01 to MEAS-06 | MEAS-01 → MEAS-01, MEAS-02 → MEAS-02 (Shantara's four events), MEAS-03 → MEAS-04, MEAS-04 → MEAS-05, MEAS-05 → MEAS-06, MEAS-06 → MEAS-07 |
| Do not do this | 28 items | Section 20 keeps the ones that apply and adds Shantara's own |

New at Shantara, with no Zarnik source: LANG-01 to LANG-05, MED-01 to MED-05 (partly from Zarnik AI-04 and AI-13), RATE-01, MIG-04, AI-06 and MEAS-03.

## Change log

- **1.1, 25 September 2026.** Recorded the decisions: canonical host `https://shantara.life`, `MedicalClinic`, all AI crawlers allowed, rates include GST, OpenPanel over HTTPS, Shantara's own Google Business Profile, pages below 2 MB, FAQ rich results removed in May 2026, and the Search Console Help source for MEAS-06. Changed CRAWL-04, REN-04 (now P1 with a build check), REDIR-03, RATE-02, RATE-04, SCHEMA-13, SEC-02, AI-06 and MEAS-06.
- **1.0, 25 September 2026.** First version. Adapted from Zarnik "Search and AI Visibility" version 6.2.
