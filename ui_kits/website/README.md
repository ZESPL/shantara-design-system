# Shantara — website kit

Builder notes and thin samples for the public marketing website. **Not a production site.** Content in the samples comes from the Property Handbook (draft, July 2026). Photography is the property shoot.

## Skills (canonical)

| File | Role |
| --- | --- |
| [`SKILL.md`](SKILL.md) | Agent skill — how to build and review the marketing website |
| [`skill-stack.md`](skill-stack.md) | Production stack for shantara.life (Astro, Keystatic, Netlify, …) |
| [skill-premium.md](skill-premium.md) | Premium design, build order, motion vocabulary |
| [`skill-ia.md`](skill-ia.md) | Nav, URL families, page inventory |
| [`skill-sections.md`](skill-sections.md) | Heroes, semantic sections, cards |
| [`skill-content.md`](skill-content.md) | CMS, publishing, leads, E-E-A-T |
| [`skill-copy.md`](skill-copy.md) | Public-facing language |
| [`skill-technical.md`](skill-technical.md) | Analytics, SEO, schema, a11y |
| [`skill-qa.md`](skill-qa.md) | Workflow and QA |

Internal ICP and marketing-audience strategy: [`docs/icp.md`](../../docs/icp.md). Need-led, not programme-led. Do not copy that file onto the public site.

In the catalog, open `index.html` for the sample, then the Website kit cards for the skills above.

Welnez is the former name. Use **Shantara** in all new public copy.

Primary visitor-facing action: **Book a Consultation**. Rates appear **only** in [`content/tariff.json`](../../content/tariff.json), the tariff card (`screens/TariffScreen.js`), brand-deck tariff slides, and the handbook tariff section.

Entity facts for kit screens: [`content/`](../../content/) (load `content/kit.js` → `window.ShantaraContent`). After editing facts, edit `content/` only. After editing `components/**`, sync `_ds_bundle.js` (components only — never for copy).

## Sample file map

```text
../../content/          ← entity JSON + generated kit.js
index.html
README.md
SKILL.md
skill-*.md
locales.js              ← central locale architecture (root locales.js is a shim)
chrome/Photo.js
chrome/SiteChrome.js
screens/*Screen.js
rtl-fixture.html
```

| File | Surface |
| --- | --- |
| `chrome/SiteChrome.js` | Skill nav + wordmark-only logo + Book a Consultation; LanguageSelector (hidden while only `en` is enabled) |
| `chrome/Photo.js` | Thin `<img>` wrapper over `assets/photos/*` |
| `screens/HomeScreen.js` | Immersive hero, approach + proof, programmes, insights, FAQ, consultation CTA |
| `screens/ConditionsScreen.js` | Condition listing — visual groups only |
| `screens/ProgrammeScreen.js` | Detox programme sample |
| `screens/ExperienceScreen.js` | What a stay includes |
| `screens/AboutScreen.js` | Story, approach, doctors, policy |
| `screens/JournalScreen.js` | Insights index |
| `screens/ContactScreen.js` | Location and directions |
| `screens/ConsultationScreen.js` | One short consultation form |
| `screens/TariffScreen.js` | Dedicated tariff card — only surface that quotes rates |

Locale config: `locales.js` (`window.ShantaraLocales`). Shared UI strings: root `i18n.js`. Sample routing uses locale-prefixed hashes (`#/en/`, `#/en/programs`).

**Deliberately not built in this kit:** individual condition/therapy/room pages; Keystatic/Astro app wiring; production analytics/SEO endpoints; multiple forms; stay-total calculators; translated AR/DE/FR/RU/HI/ML website content. Production stack lives in [`skill-stack.md`](skill-stack.md).

## Confirm before any real use

Tariffs (valid to 31 Dec 2026 and marked *to confirm* in the handbook — edit the tariff card only), the Monday-intake convention and monthly cap presentation, programme durations (indicative), and insights copy written for this kit rather than supplied.

The programme name “Diabetes Reversal” is approved for catalogue use; do not present reversal as a guaranteed outcome or invent rates.
