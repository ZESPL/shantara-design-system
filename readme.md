# Shantara Design System

**Shantara Naturopathy** is a clinical naturopathy retreat on four hilltop acres above the Chennamangallur valley in Kozhikode, Kerala. It is the evolution of Hygiene Nature Cure Hospital, which has treated more than 25,000 people since 2000. Treatment is drug-free, doctor-guided and planned after consultation and assessment. Programme duration depends on the programme and the guest. Do not treat a single night count as a site-wide public policy unless Shantara has confirmed it for that programme.

The identity is built from one typeface (Diodrum Cyrillic), a deep olive/gold primary pair, a warm neutral field of stone and linen tones, six landscape accents, and a single ornamental asset: a sacred-geometry rosette pattern derived from the plumeria mark.

Foundations (colour, type, logo, pattern, voice, imagery, print) are **verbatim from the brand guidelines**. Components and UI kits are **extrapolations** in the brand's language — no product code, Figma file or live site was supplied — but all *content* in them now comes from the Property Handbook rather than invention.

## Sources given

| Source | Notes |
| --- | --- |
| `uploads/Compressed/Frame 1–5.jpg` | The five brand-guideline pages as images. **Read** — logo story, pattern structure, colour palette, tone of voice, typography, logo colourways, print rules, product applications, imagery direction. |
| `uploads/shantara_property_handbook.docx` | Property Handbook (draft, July 2026). Read in full: programmes, therapies, rooms and tariffs, admission and eligibility, house rules, privacy rules, team, contact. Source of all content in the UI kits. |
| `uploads/Compressed/TRD*.jpg` (45 frames) | The property shoot. 16 frames curated into `assets/photos/` at 1600px. |
| `uploads/Primary Colors.jpg`, `colors secondary.jpg`, `accent colors.jpg` | Colour boards. Hexes read from the labels; three mislabels corrected by sampling (below). |
| `uploads/Shantara - Full logo / Icon / wordmark` (.svg ×4 each, .pdf) | The numbered SVG copies are byte-identical monochrome artwork with no fill declared. Copied in and re-coloured programmatically into four brand tones. |
| `uploads/Pattern Single Tile.png`, `Pattern Seamless_SCALE ACCORDINGLY.png`, `pattern LOW Q White/Black.png` | Rosette artwork. The repeat cell was measured out of the seamless file — see **Pattern** below. |
| `uploads/DiodrumCyrillic-*.ttf` (6 weights) | Shipped as-is in `assets/fonts/`. No substitution needed. |
| `uploads/Shantara_Brand Guidelines HQ.pdf` | Superseded by the page images. Not parsed. |

## Content fundamentals

**Voice.** The guidelines name three words — **rejuvenation, belonging, hospitality** — and four sliders: formal over casual, serious over funny, respectful (never irreverent), and roughly halfway between matter-of-fact and enthusiastic. Shantara is positive, cheerful, honest, polite, caring, trustworthy, professional; never rude, toxic, passive-aggressive, stereotypical, slow to respond or cheap.

Shantara writes the way a good practitioner speaks: short declaratives, concrete nouns, no persuasion. **Marketing copy never promises a clinical outcome** — that is the doctors' to say. Describe what will physically happen and who oversees it.

**Clarity first, warmth second, brand expression third.** Shantara is a naturopathy retreat, not an abstract wellness brand. Public website language is governed by `ui_kits/website/skill-copy.md`. Headings, eyebrows, labels and CTAs state what the section or action *is*: "Naturopathy programmes", not "A journey back to balance"; "What your stay includes", not "Everything you need to restore"; "Meet our doctors", not "The people guiding your journey". A visitor scanning only the headings should understand the page. Never let "holistic", "transformative", "restorative", "healing" or "wellness" carry meaning that a concrete sentence could carry instead. Do not narrate information architecture, invent booking restrictions or a site-wide minimum stay, or explain why prices live on the tariff page. Inform before persuading. Catalog summary: `guidelines/brand-copywriting.html`.

- **Tagline** *Finest hospitality by nature*. **Catchphrase** *Nurture in nature*. Imagery line *Blooming in nature*. Sign-off *always beyond!*
- **Person.** "We" for the retreat, "you" for the guest. *Guests*, never clients or patients in guest-facing copy.
- **Casing.** Sentence case everywhere: headlines, buttons, labels, nav. Uppercase is reserved for the 12px letterspaced eyebrow and the wordmark.
- **Punctuation.** Full stops in body copy and hints; none in buttons, badges or nav. Do not use em dashes in public website copy. The middle dot (`·`) is for meta strings such as `14 nights · Superior Room`. No exclamation marks in body copy. Do not build headings as a title, a colon and a subtitle.
- **Numbers.** Numerals always, tabular figures: `06:30`, `60,000 sq. ft.`, `4 acres`. 24-hour clock in the app, either in marketing copy. **Currency figures appear only on dedicated tariff documents** (the website tariff card, brand-deck tariff slides, handbook tariff section). When they do, Indian grouping and an attached rupee symbol — no space between ₹ and the figure. Never put a rate, “from …” amount, indicative total, or rate-validity date on any other surface.
- **Emoji.** Never.
- **Length.** Headlines under 8 words. Lead paragraphs one sentence. Body paragraphs under 4 sentences.
- **Buttons.** Verb + object, and the visitor must know what happens next: *Book a Consultation*, *View programmes*, *Meet our doctors*, *Check what is included*, *Speak to our team*, *Send your details*, *Submit for review*. Not *Learn more*, not *Submit*, not *Enquire about a stay* / *Request a consultation* as primary CTAs, and never *Begin your journey* / *Discover more* / *Start healing*.
- **Errors and confirmations.** State the fact, then the remedy, no apology theatre: "Guests must be 18–80." / "With the doctors now — we will call within two working days."
- **Clinical guardrails in copy.** Never diagnose, never promise a result, never contradict a doctor. Route uncertainty: *"Let me check with the doctor on that for you."* Guest identity, presence and dates of stay are confidential — this shapes imagery and product copy alike.

Example voice:

> **Doctor-led naturopathy in the Sahyadris**
> Your programme is planned by our doctors after a consultation on your health, medical history and goals.
> Meals are planned as part of your programme based on your doctor's recommendations and dietary needs.

Evocative language is allowed selectively in a hero, an introduction or a description of the setting, but the meaning must still be immediately understandable. Metaphorical register such as *"Nature leads. The body restores itself."* or *"Healing here begins by understanding what the body is asking for"* is ruled out; rewrite it on sight.

**Final test.** If the styling, photography and supporting paragraph disappeared, would the heading still tell the visitor what the section is about? If not, rewrite it.

## Visual foundations

**Colour.** Two primaries — **Himalaya #495213** (a dark olive that does all the work of a brand colour: buttons, links, selected states, success) and **Gold Crayola #DFC985** (warm secondary CTA, emphasis on dark grounds). The field is neutral: **Pine Tree #2D2926** for text and inverse surfaces, **Cotton Seed #C4BFB6** for lines, **Pearl Bush #E3DED1** for grouped panels, **Merino #F4F0E6** as the page ground. Accents — Sand, Ocean, Clay, Forest, Sky, Lavender — are landscape colours used one at a time as large calm areas, never as a rainbow set and never as text colour. There is **no red in the brand**; danger borrows Clay, darkened.

**Colour by application** (from the guidelines): primaries carry the *retreat* products — slippers, towels, mugs, soaps, creams, door hangers. Accents belong to the *store* range only, where variety is welcome. Accents never appear on clinical or wayfinding material.

*Correction on record:* the guideline deck printed `#3B6B7B` under Ocean, Clay **and** Lavender. Those values are sampled from the artwork instead: Ocean `#A0B1BB`, Clay `#E0A198`, Lavender `#C6C2D1`.

**Type.** Diodrum Cyrillic only, six weights (Extralight → Bold). Display and H1 are set **Light (300)** at 84/64/48px with 1.06 leading — the brand gets its authority from air and scale, never from weight. H2 Regular, H3/H4 Medium. Body 17px/1.45 Regular, lead 20px/1.65 Light, measure capped at 68ch. Micro-type is the one place with tracking: eyebrow 12px Semibold uppercase at 0.18em, wordmark at 0.22em. Body copy never exceeds 0.06em. Times, durations and — on dedicated tariff cards only — rates use tabular numerals.

**Spacing & layout.** 4px-quantised scale (2 → 128). Cards pad 24, sections breathe at 96 (`--section-y`), content maxes at 1240 with 48px gutters, prose at 720. Control heights 32/40/48/56; mobile hit targets never below 44.

**Backgrounds.** Three legitimate grounds: flat warm neutral (Merino / Pearl Bush / Sand), full-bleed photography with a scrim, and a flat neutral or olive ground carrying one rosette band on a single edge. No gradients as decoration — the only gradients in the system are the protection scrims. No noise or grain overlays in product UI (the guideline boards carry a paper grain; that is print, not screen).

**Pattern.** The rosette appears as a **band flush to one edge** of a surface — a vertical column down the right or left edge (22–38% of the width), or a horizontal strip along the top or bottom (8–18% of the height), bleeding off on its three outer sides. It is drawn line-art at readable strength — Cotton Seed on neutral grounds, Merino/white over dark grounds and photography — never a faint wash across a whole surface, never a field behind headlines, body copy, cards or controls. Over photography is allowed; **one band per screen, spread or slide**. `assets/pattern-unit.png` is the exact repeat cell measured out of the supplied seamless artwork — **530 × 530, tiling seamlessly in both axes**. It carries two interlocking layers (the eight-petal rosette and the crossed square), so the single motif on its own is **not** the repeat unit and must never be tiled; `assets/pattern-motif.png` is for standalone ornament only. And the guidelines' own filename is the second rule: *scale accordingly* — the cell is not a free choice but a **ratio to the band's cross-axis measure: cell = band / 2** (two rosettes across; usable range band/1.5–band/3), always square, always both axes. 1440 page → band 432 → cell 216; 1280 slide → band 380 → cell 199 (`--pattern-scale-2xs`); 1440×1800 post, 15% strip → strip 270 → cell 135. Floor 130px, which makes ~880px the smallest patterned surface — under that the strokes close into grey, so a small card gets no band at all. The band's inner edge is always ruled with a 1px hairline (Cotton Seed on light, Merino 34% on dark); the three outer sides bleed off unruled. Never a two-value background size. Colour comes from `--pattern-ink` through the `.shantara-pattern-band` mask layer (or `PatternPanel`), so the band can take any brand tone without new artwork.

**Corners & borders.** Buttons, tags and toggles are **pill** (999px). Inputs 8px. Cards 8px. Dialogs 24px. Media 8px. Lines are 1px warm grey, and the token split is an accessibility decision: `--border-subtle` (Pine Tree 10%) and `--border-default` (Cotton Seed) are *decorative* hairlines for dividers and card edges — both sit below 3:1 and may never draw the boundary that identifies a control. Every control uses `--border-control`, which clears 3:1 on all three light grounds. Active tab underlines and selected cards are 1.5px Himalaya.

**Cards.** White on Merino, 8px radius, 1px hairline border, and a whisper of warm shadow (`--shadow-sm`, Pine Tree at 6%). Listing photography is flush at **4:3** (`--card-media-ratio` / `--media-ratio`) — never a small inset crop. Wide editorial frames may use **16:9** (`--media-ratio-wide`); tall mosaic tiles **3:4** (`--media-ratio-portrait`). Full-bleed page heroes use an explicit height (typically 640 / 420), not a forced listing ratio. Grouped panels drop the shadow and switch to Pearl Bush. Interactive cards lift 4px into `--shadow-lg` over 240ms; they do not scale, and media does not zoom on hover.

**Shadows.** Warm, low-contrast, Pine-Tree-tinted at 6–14%. Five steps: xs resting, sm cards, md popovers, lg hover, xl dialogs. No coloured or glow shadows.

**Transparency & blur.** Two uses only: the sticky header and media-overlay controls (`--glass-fill` Merino 72% + `--blur-glass` 16px), and the dialog scrim (Pine Tree 55% + 3px blur). Type over photography always sits on a **scrim gradient** (`--scrim-bottom` — solid protection in the lower third, tapering clear so the photo stays readable above) or a **glass capsule** — never bare text, never a thin wash, never a second manual scrim on top of `scrim="bottom"`. Contrast is judged against the scrimmed photograph (body/lead 4.5:1; large display 3:1). Use solid Merino / `--text-on-inverse` for overlay body; gold eyebrows may sit on a strong bottom scrim. Himalaya is the primary brand colour — keep full-bleed Himalaya section washes rare (aim under ~10% of a page’s surface). Prefer Pearl Bush / Merino for large content bands; Pine Tree inverse, gold accents, buttons and links are normal.

**Motion.** Restrained and unshowy: 160ms for control states, 240ms for surfaces and accordion, 420ms for dialog/toast/drawer, one 1200ms ambient loop (the three-dot Spinner). Entrances use `--ease-out` (`cubic-bezier(0.23, 1, 0.32, 1)`); drawers use `--ease-drawer`; hover/colour uses `ease`. **Nothing bounces, nothing overshoots, nothing spins, no `ease-in` on UI.** Press is `scale(0.96)`, hover is a one-step colour shift or a 4px card lift (fine pointers only), focus is a 2+2px Himalaya ring offset by the page colour. Catalog tiles stagger on first paint; website pages and app tab panels enter with `sh-enter-up`. `prefers-reduced-motion: reduce` keeps colour and opacity, drops movement, and freezes the Spinner. The mark, the rosette, dividers and badges do not move. Full mapping: `guidelines/motion.html`.

**Imagery.** Tone of imagery is *Blooming in nature*: architecture read against weather and planting — deep greens, warm concrete, monsoon light, wide unhurried frames with real air in them. Never a stock-wellness close-up, never a saturated grade, no filters, no b&w. Pattern and photography do not share a surface: one or the other.

**The privacy rule is a design constraint.** A guest's identity, presence and dates of stay are confidential. So: no identifiable guests, no faces in therapy, no room numbers, no arrival shots. Figures appear at distance or as scale, or not at all. The therapy imagery in this system shows rooms, never treatment in progress.

**Print rules** (verbatim): matte over glossy; gold foil on envelopes; gold foil or raised UV on the business-card icon; premium papers. The wordmark is preferred everywhere — the full lockup is for covers, packaging and signage.

## Iconography

The brand package ships **no icon set**. Substitution, flagged for review: **Lucide** (`lucide-static@0.544.0`, from CDN), chosen for its 2px rounded-cap geometric stroke, closest to Diodrum's geometric humanist construction.

- Icons render through `Icon` as CSS masks so they inherit `currentColor`.
- Sizes: 16 inside 32px controls, 18 inside 40px, 20–22 standalone, 26 in confirmation states.
- Always paired with a label except in `IconButton` (which requires an accessible `label`).
- Preferred vocabulary: `leaf`, `flower`, `sun`, `stethoscope`, `clipboard-list`, `notebook-pen`, `calendar-days`, `map-pin`, `clock`, `user-round`, `search`, `arrow-right`, `chevron-right`.
- **No emoji, ever.** Unicode is typographic, not iconographic: `·` in meta strings, `×` for dismiss, `°` for temperature, `✓` inside brand-filled shapes.
- The plumeria mark is **not** an icon: never inline in a sentence, never a bullet, never a favicon substitute.

## Accessibility — WCAG 2.2 Level AA

`guidelines/accessibility.html` is a **live audit**, not a claim: it resolves every semantic token — including the `oklch()` ramp and the `color-mix()` transparencies — and measures 29 in-use pairs on render, so it fails visibly if a token is ever changed. All 29 pass at the level they need (text 4.5:1, large text and non-text 3:1). Lowest passing pair is 3.46:1. The same page carries the component guarantees, the deliberate exceptions and the known gaps.

Fixes the audit forced, on record:

- **Muted and secondary text were too light.** `--color-stone-500`/`-400` moved to L 0.42/0.48, so hints and captions clear 4.5:1 on page, card *and* Pearl Bush rather than only on white.
- **Control borders failed 3:1.** Added `--border-control` and switched every control to it — Input, Select, Textarea, Checkbox, Radio, Tag, Button secondary, IconButton, Card outline, Badge outline. Cotton Seed stays for decoration only.
- **The status `*-soft` fills were full-strength accents**, so paired text on them failed. They are now pale tints of the same hue, and every badge foreground clears 4.5:1.
- **`--color-gold-700` and `--color-clay-700` were too light** for text on their own tints; both were darkened to fixed L values.
- **The Gold Crayola button fill is 1.4:1 against the page** — an unavoidable brand fact. It now carries a `--color-gold-800` hairline, so the button's *boundary* meets 3:1 instead of relying on the fill.
- **`Card interactive` was a `div` with `onClick`** — pointer-only. With `onClick` it now takes `role="button"`, enters the tab order, and fires on Enter and Space.
- **`Dialog`** now takes focus on open, traps Tab, closes on Escape, locks body scroll, and returns focus to the invoker; title and description are wired via `aria-labelledby`/`aria-describedby`.
- **`Tabs`** implements the full ARIA tablist keyboard contract (arrows select, Home/End, roving tabindex).
- **`Accordion`** panels are `role="region"` linked by `aria-controls`/`aria-labelledby`, and are `hidden` when closed so collapsed content leaves the tab order.
- **`Tooltip`** is dismissible with Escape and linked by `aria-describedby` (1.4.13).
- **Target size (2.5.8)** — the tag remove control was a 16px hit area; it is now a 24px target around the same 16px glyph, and checkbox/radio rows are floored at 24px.
- **Reflow (1.4.10)** — both kits carry a responsive layer down to 320px with no horizontal scroll.
- **Active nav** no longer signals by colour alone: `aria-current="page"` plus an underline.

Deliberately below 3:1, and load-bearing nowhere: the two decorative border tokens, the Gold Crayola fill (see above), and the `--surface-brand-soft` focus halo that sits behind the real 2+2px Himalaya ring. Gold Crayola and the six accents are **never text colours on light grounds** — the audit records that prohibition rather than hiding it.

Remaining gaps are listed on the contract card: the kits' reflow layer uses overrides rather than authored breakpoints; `--control-sm` at 32px meets AA's 24px but not AAA's 44px (desktop toolbars only, never mobile); form error identification and prevention (3.3.1/3.3.3/3.3.4) belong to the implementation; and nothing here substitutes for a real screen-reader pass with NVDA, JAWS and VoiceOver.

## Two ways to use this

This folder is the design system. Browse it. Copy it into another repo. Same files, both jobs. Full walkthrough: `docs/use.md` (also a card in the catalog).

### Browse it

```
npx --yes serve -l 4173
```

Then open `http://localhost:4173`. The catalog lists notes (system write-up, skill, component prompts, handbook extract, sources), every guideline card, component family, UI kit and the brand deck.

Cards can also be opened as their own pages — `docs/readme.html`, `guidelines/colors.html`, `ui_kits/website/index.html`. Opening the folder as a `file://` path will not work.

Netlify publishes a `dist/` copy. Raw `uploads/` stay off the public site (large, internal). They remain in this folder locally; `docs/sources.html` lists them and links any file that is present. The handbook extract and all markdown notes **are** published.

### Add it to another repo

Copy **this entire folder** to `.cursor/skills/shantara-design/`, or keep it at the repo root. Do not pick files out.

- Agents start at `SKILL.md`, then `readme.md`, then the `*.prompt.md` beside a component. For the public marketing website, also read `ui_kits/website/SKILL.md` (Website Kit in this catalog).
- Production pages link `styles.css` and keep `tokens/` + `assets/` next to it.
- Import components from `components/`. Start from `ui_kits/website/` or `ui_kits/app/` if you need those surfaces.

## Foundations, files & index

```
styles.css              → the single entry point consumers link (imports only)
tokens/                 → fonts, colors, typography, spacing, radius, elevation, motion, pattern, base
assets/                 → logo / icon / wordmark in 4 colourways each, pattern cell + motif, Diodrum TTFs
assets/photos/          → 16 curated frames from the property shoot
guidelines/             → specimen cards (Brand, Spacing, Foundations)
components/             → core, forms, navigation, feedback — jsx, d.ts, prompt.md
docs/                   → browsable notes: use, readme, skill, prompts, handbook, ICP / marketing audience, sources
scraps/                 → working extracts (handbook.txt, accessibility contract source)
uploads/                → original boards, handbook .docx, raw shoot (local; not published)
ui_kits/website/        → marketing site kit + website skill (`SKILL.md`) and copy skill (`skill-copy.md`)
ui_kits/app/            → in-stay guest companion kit
templates/brand-deck/   → presentation template
thumbnail.html          → homepage tile
SKILL.md                → Agent-Skills wrapper — drop this folder into another repo
```

### Components

**core** — `Button`, `IconButton`, `Icon`, `Logo`, `Card`, `Badge`, `Tag`, `Divider`, `PatternPanel`
**forms** — `Input`, `Textarea`, `Select`, `Checkbox`, `Radio`, `Switch`
**navigation** — `Tabs`, `Breadcrumbs`, `Accordion`
**feedback** — `Dialog`, `Toast`, `Tooltip`, `Spinner`

Each directory holds `<Name>.jsx`, `<Name>.d.ts` (props contract) and `<Name>.prompt.md`, plus one `@dsCard` HTML showing the family's states.

**Intentional additions.** The brand package defines no component inventory, so this is a standard set sized to the brand's needs. Two entries exist for brand reasons rather than convention: `Icon` (wrapper over the substituted Lucide set) and `PatternPanel` (the only sanctioned way to place the rosette). `Spinner` is deliberately a breathing three-dot, not a rotating ring, to stay inside the brand's motion rules.

### UI kits

- `ui_kits/website/` — builder skill plus thin samples of the marketing site: home, conditions listing, one program, experience, about, insights, contact, one consultation form, and the dedicated tariff card. Primary CTA is *Book a Consultation*. Public copy follows `skill-copy.md`. Internal audience strategy lives in `docs/icp.md` — do not treat programme names as ICPs. Rates appear only on the tariff card. This is not a production website.
- `ui_kits/app/` — in-stay guest companion, 390×844: Today's doctor-set schedule, protocol (therapies / diet), a therapy sheet whose only action is *I'll be there*, notes and vitals, You. Tab bar is live.

### Templates

- `templates/brand-deck/` — presentation template in the guideline-deck style (grained neutral ground, one edge-flush rosette band per section divider, Light display type, olive/gold section breaks).

## Caveats

1. **No product UI or copy deck was supplied.** Both kits are extrapolations of surfaces Shantara may or may not want. The handbook never mentions a guest app; if there is no app, that kit is a proposal.
2. **Tariffs and timings are handbook figures marked `[TO CONFIRM]`** at source, and the handbook itself flags two internal conflicts (built-up area, check-in/out times). Confirm with Azhar / Dr. P.A. Kareem / Dr. Bahja Janu before anything is published. When a rate changes, edit only the dedicated tariff surfaces (`ui_kits/website/TariffScreen.js`, brand-deck tariff slides). Do not scatter the new figure.
3. **Ocean / Clay / Lavender hexes were sampled**, not read, because the source printed the same value for all three.
4. **Programme durations in the kits are indicative.** The handbook does not fix nights per programme. Do not present a single night count as a site-wide public policy. Use typical or recommended duration for a specific programme, or say duration is advised following consultation.
5. **Journal copy is written for these kits**, not supplied.
6. **Lucide stands in for a real icon set.**
7. **Clear-space and minimum-size numbers** in `guidelines/logo.html` are conventions consistent with the guideline artwork, not quoted brand law — confirm or correct.
8. `Welnez Pattern.ai` was named in an earlier brief but is not on disk; the name suggests a sibling brand ("Welnez") — unexplored.
