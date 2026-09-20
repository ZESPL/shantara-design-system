# Use it both ways

This folder is the design system. Serve it and browse it. Copy it into another repo and build with it. Same files, both jobs.

## Browse it

From this folder:

```
npx --yes serve -l 4173
```

Open `http://localhost:4173`. The catalog lists every guideline card, component family, UI kit, the brand deck, and these notes.

Cards also open as their own pages — `guidelines/colors.html`, `ui_kits/website/index.html`, `docs/readme.html`. Opening the folder as a `file://` path will not work; the catalog and the markdown notes need http.

Netlify publishes a `dist/` copy. Raw `uploads/` (boards, handbook `.docx`, full shoot) stay off the public site because they are large and internal. They remain in this folder locally; the [Sources](sources.html) page lists them and links any file that is present.

## Add it to another repo

Copy **this entire folder**. Do not pick files out. Tokens, assets, components, kits, notes and the skill wrapper all resolve relative to each other.

### As a Cursor skill

Copy the folder to:

```
.cursor/skills/shantara-design/
```

Cursor will load `SKILL.md`. Agents then read `readme.md`, the component `*.prompt.md` files, and the kits. That is the intended path for “design something in this brand.”

You can also keep the folder at the repo root (as it is here) and treat `SKILL.md` as the project skill.

### As production code

1. Link the single CSS entry. Paths inside it are relative, so keep `styles.css`, `tokens/` and `assets/` together.

```html
<link rel="stylesheet" href="vendor/shantara-design/styles.css">
```

2. Copy or import the components you need from `components/` (`*.jsx` + `*.d.ts`). Read the matching `*.prompt.md` before using a control.
3. Use `assets/` as shipped — logos, pattern cell, fonts, the 16 curated photos. Do not retile `pattern-motif.png`. Do not invent a new icon set without replacing Lucide on purpose.
4. For a marketing page, start from `ui_kits/website/`. Read `ui_kits/website/SKILL.md` (also the Website kit cards in this catalog) before composing pages, forms, or SEO. For an in-stay surface, start from `ui_kits/app/`. Both kits are extrapolations; read their READMEs.

The consumer contract is:

| Take | Leave unless you need it |
| --- | --- |
| `styles.css`, `tokens/`, `assets/` | `uploads/` (raw boards and shoot) |
| `components/` | `catalog.js`, `index.html` (browse-only chrome) |
| `SKILL.md`, `readme.md`, `*.prompt.md`, `ui_kits/website/SKILL.md` | `dist/`, `.netlify/` |
| `ui_kits/` if you are shipping those surfaces | |

## Where this lives

| Fact | Canonical file | Do not restate in |
| --- | --- | --- |
| Voice / public language | [`ui_kits/website/skill-copy.md`](../ui_kits/website/skill-copy.md) (browsed as [`docs/website-copy.html`](website-copy.html)) | long essays in `readme.md`; do not keep a second brand-copy card |
| Colour, type, logo, pattern | the matching `guidelines/*.html` card | |
| Contrast | [`guidelines/accessibility.html`](../guidelines/accessibility.html) | a11y changelog in `readme.md` |
| How to consume | `docs/use.md` | |
| Website IA / CMS / QA | `ui_kits/website/skill-*.md` | overlapping `README.md` chapters |
| Audience | `docs/icp.md` | |
| Property facts | `docs/handbook.txt` | |

## What an agent should read

1. `SKILL.md` — the five non-obvious rules
2. `readme.md` — orientation, file map, caveats, on-record corrections
3. `ui_kits/website/SKILL.md` when the work is the public marketing website
4. The `*.prompt.md` next to the component being used (or the catalog component page)
5. `docs/handbook.txt` (or this catalog’s handbook page) for programmes, rooms, rules and contact — not for inventing copy
6. `docs/icp.md` (or this catalog’s ICP page) when the work is audience, SEO, campaigns, CRM, or content strategy — internal only; do not paste ICP names into public copy
7. `guidelines/accessibility.html` before changing a colour token

## What this folder is not

It is not an npm package and not a Figma library. There is no install command beyond copying the folder. There is no product codebase behind the kits.

Rates live only on the tariff card and in the handbook tariff section. Do not copy them onto home, programme, enquiry, journal, app or type specimens.
