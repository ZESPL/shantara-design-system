---
name: shantara-design
description: Use this skill to generate well-branded interfaces and assets for Shantara, either for production or throwaway prototypes/mocks/etc. Contains essential design guidelines, colors, type, fonts, assets, and UI kit components for protoyping. Use when designing Shantara pages, copying this folder into another repo, or browsing the design system.
user-invocable: true
---

This folder is the design system. It works two ways:

1. **Browse it.** Serve the folder (`npx --yes serve -l 4173`) and open `index.html`. Notes, guideline cards, components and kits are all in the catalog.
2. **Add it to another repo.** Copy this entire folder to `.cursor/skills/shantara-design/` (or keep it at the repo root). Do not pick files out — tokens, assets, components and notes resolve relative to each other.

Read `readme.md` next, then the `*.prompt.md` beside any component you use. For programmes, rooms, rules and contact, read `docs/handbook.txt` (also `scraps/handbook.txt`). For marketing audience and ICP strategy, read `docs/icp.md`. For the original boards and shoot, see `docs/sources.md` and `uploads/` if present.

If creating visual artifacts (slides, mocks, throwaway prototypes), copy assets out and create static HTML. If working on production code, link `styles.css` (keep `tokens/` and `assets/` next to it) and import from `components/`.

If the user invokes this skill without other guidance, ask what they want to build, then output HTML artifacts or production code as needed.

Five things in this brand are non-obvious and easy to get wrong:

1. **Shantara is a clinical naturopathy retreat.** Treatment is drug-free, doctor-guided and planned after consultation and assessment. Never write copy that promises a clinical outcome. Public website language follows `ui_kits/website/skill-copy.md`: write for a prospective guest, do not narrate information architecture, do not invent booking restrictions or a site-wide minimum stay, and do not convert design rationale into page copy. Internal positioning such as “not a spa” or “not a menu” stays out of visitor-facing sentences.
2. **The rosette is a band on one edge — never a wash.** It runs flush to a single edge of a surface and bleeds off on its three outer sides: a vertical column down the right or left (22–38% of the width) or a strip along the top or bottom (8–18% of the height), drawn as visible line-art — Cotton Seed on neutral grounds, Merino/white on dark grounds and over photography. Keep type, cards and controls out of the band; **one band per view**. `assets/pattern-unit.png` is the 530×530 repeat cell — size it square — one value, both axes — at **half the band's cross-axis measure** (two rosettes across: 1280 slide → band 380 → cell 199; range band/1.5–band/3; floor 130px, so no band on a surface under ~880px) and rule the band's inner edge with a 1px hairline. Use `PatternPanel` or `.shantara-pattern` + `.shantara-pattern-band[data-edge]`. `pattern-motif.png` is a single motif — ornament only, never tiled.
3. **Guest privacy is a design constraint**, not a preference: no identifiable guests, no faces in therapy, no room numbers. Imagery shows rooms and architecture, never treatment in progress.
4. **Contrast is already solved — don't reintroduce the traps.** Use `--border-control` for anything interactive (`--border-default` is decorative and below 3:1), never set Gold Crayola or the six accents as text on light grounds, and always put a scrim or glass capsule behind type over photography. On photography use solid Merino / `--text-on-inverse` — not Gold, not faded Merino mixes. Gold eyebrows stay on flat dark grounds only. The rosette is never a field behind type; below ~880px drop the band. `guidelines/accessibility.html` audits this live.
5. **Pricing lives on dedicated tariff surfaces only.** No rupee, dollar, or “from …” amounts, no indicative totals, no per-night figures, and no rate-validity dates on home, programme, enquiry, journal, app, component demos or type specimens. Link to the tariff card (`ui_kits/website/TariffScreen.js`, brand-deck tariff slides, handbook tariff section). Never quote it elsewhere — rates become unmanageable the moment they are copied.

If building the **public marketing website**, also read `ui_kits/website/SKILL.md` (Website Kit) and `ui_kits/website/skill-copy.md` before writing visitor-facing copy. Those skills cover information architecture, page composition, language, the section library, one consultation form, analytics, SEO, schema, E-E-A-T, and QA. Website locale architecture lives in that skill and in `locales.js` — this design system stays English. The catalog’s Website kit section is the browsing surface. Sample screens illustrate the skill — they are not a production site.

If the work is **who Shantara is trying to reach** (SEO, campaigns, content strategy, CRM, analytics taxonomy, agency briefs), read `docs/icp.md`. That file is the internal ICP source of truth. Do not copy internal ICP names onto the public site. Do not invent search volume or outcomes to fill gaps.

How to consume in production, and what was in the original pack: `docs/use.md` and `docs/sources.md`.
