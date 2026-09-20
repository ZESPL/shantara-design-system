# Content — entity source of truth

JSON records matching [`ui_kits/website/skill-content.md`](../ui_kits/website/skill-content.md). English only. Relationships use stable IDs, not URLs.

## How to read

1. Prefer these files over inventing programmes, rooms, NAP, or rates in kit screens or consumer apps.
2. `publication_status`: `published` | `kit_sample` | `draft` | `needs_original`.
3. `source`: `handbook` | `kit` | `gap`.
4. Empty directories (`guest-stories/`, `events/`, `testimonials/`) mean the entity is **not ready**. Do not invent consent, quotes, or events.
5. Conditions with `needs_original` have empty `clinical` / `faqs` — listing summaries only until medical review.
6. Rates live **only** in [`tariff.json`](tariff.json). Room specs are in `rooms/` without prices.
7. `icp_ids` reference [`docs/icp.md`](../docs/icp.md). Never use those IDs as URL segments or public headings.
8. Never quote handbook §15 as public copy.

## Generate the kit script

```
node scripts/write-content-kit.mjs
```

Writes [`kit.js`](kit.js) as `window.ShantaraContent`. JSON stays the source; regenerate after editing JSON.

## What is not invented

- Clinical article bodies, guest stories, testimonials, or doctor bios marked `[TO CONFIRM]` in the handbook.
- Outcome-shaped public copy (“improved blood sugar regulation”) — public fields follow kit-compliant language.
