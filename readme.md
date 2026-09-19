# Shantara Design System

**Shantara Naturopathy** is a clinical naturopathy retreat on four hilltop acres above the Chennamangallur valley in Kozhikode, Kerala — the evolution of Hygiene Nature Cure Hospital, which has treated more than 25,000 patients since 2000. It is not a spa. Treatment is drug-free, doctor-guided and root-cause focused; the minimum stay is seven nights because that is what naturopathy protocols need to work.

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

**Clarity first, warmth second, brand expression third.** Shantara is a naturopathy retreat, not an abstract wellness brand. Headings, eyebrows, labels and CTAs state what the section or action *is*: "Naturopathy programmes", not "A journey back to balance"; "What your stay includes", not "Everything you need to restore"; "Meet our doctors", not "The people guiding your journey". A visitor scanning only the headings should understand the page. Never let "holistic", "transformative", "restorative", "healing" or "wellness" carry meaning that a concrete sentence could carry instead — "Your programme is planned by our doctors based on your health, medical history and goals." Avoid metaphorical headings, spiritual language, generic luxury language, and repeated *journey / balance / transformation / healing / reconnection*. Inform before persuading: answer what naturopathy is, what programmes exist, who they are for, what happens before, during and after a stay, what is included, and what happens to existing medication. Full guidance: `guidelines/brand-copywriting.html`.

- **Tagline** *Finest hospitality by nature*. **Catchphrase** *Nurture in nature*. Imagery line *Blooming in nature*. Sign-off *always beyond!*
- **Person.** "We" for the retreat, "you" for the guest. *Guests*, never clients or patients in guest-facing copy.
- **Casing.** Sentence case everywhere: headlines, buttons, labels, nav. Uppercase is reserved for the 12px letterspaced eyebrow and the wordmark.
- **Punctuation.** Full stops in body copy and hints; none in buttons, badges or nav. Em dashes and the middle dot (`·`) for meta strings — `14 nights · Superior Room`. No exclamation marks in body copy.
- **Numbers.** Numerals always, tabular figures, Indian grouping for currency: `₹22,000`, `06:30`, `60,000 sq. ft.`, `4 acres`. 24-hour clock in the app, either in marketing copy.
- **Emoji.** Never.
- **Length.** Headlines under 8 words. Lead paragraphs one sentence. Body paragraphs under 4 sentences.
- **Buttons.** Verb + object, and the visitor must know what happens next: *Enquire about a stay*, *Request a consultation*, *View programmes*, *Meet our doctors*, *Check what is included*, *Speak to our team*, *Submit for review*. Not *Learn more*, not *Submit*, and never *Begin your journey* / *Discover more* / *Start healing*.
- **Errors and confirmations.** State the fact, then the remedy, no apology theatre: "Guests must be 18–80." / "With the doctors now — we will call within two working days."
- **Clinical guardrails in copy.** Never diagnose, never promise a result, never contradict a doctor. Route uncertainty: *"Let me check with the doctor on that for you."* Guest identity, presence and dates of stay are confidential — this shapes imagery and product copy alike.

Example voice:

> **Doctor-led naturopathy in the Sahyadris**
> Your programme is planned by our doctors after a consultation on your health, medical history and goals.
> Meals are prescribed as part of your programme, not chosen from a menu.

Evocative language is allowed selectively — hero, introduction, descriptions of the setting — but the meaning must still be immediately understandable. Earlier kit copy such as *"Nature leads. The body restores itself."* / *"Healing here begins by understanding what the body is asking for"* is the metaphorical register the copywriting guideline now rules out; rewrite it on sight.

**Final test.** If the styling, photography and supporting paragraph disappeared, would the heading still tell the visitor what the section is about? If not, rewrite it.

## Visual foundations

**Colour.** Two primaries — **Himalaya #495213** (a dark olive that does all the work of a brand colour: buttons, links, selected states, success) and **Gold Crayola #DFC985** (warm secondary CTA, emphasis on dark grounds). The field is neutral: **Pine Tree #2D2926** for text and inverse surfaces, **Cotton Seed #C4BFB6** for lines, **Pearl Bush #E3DED1** for grouped panels, **Merino #F4F0E6** as the page ground. Accents — Sand, Ocean, Clay, Forest, Sky, Lavender — are landscape colours used one at a time as large calm areas, never as a rainbow set and never as text colour. There is **no red in the brand**; danger borrows Clay, darkened.

**Colour by application** (from the guidelines): primaries carry the *retreat* products — slippers, towels, mugs, soaps, creams, door hangers. Accents belong to the *store* range only, where variety is welcome. Accents never appear on clinical or wayfinding material.

*Correction on record:* the guideline deck printed `#3B6B7B` under Ocean, Clay **and** Lavender. Those values are sampled from the artwork instead: Ocean `#A0B1BB`, Clay `#E0A198`, Lavender `#C6C2D1`.

**Type.** Diodrum Cyrillic only, six weights (Extralight → Bold). Display and H1 are set **Light (300)** at 84/64/48px with 1.06 leading — the brand gets its authority from air and scale, never from weight. H2 Regular, H3/H4 Medium. Body 17px/1.45 Regular, lead 20px/1.65 Light, measure capped at 68ch. Micro-type is the one place with tracking: eyebrow 12px Semibold uppercase at 0.18em, wordmark at 0.22em. Body copy never exceeds 0.06em. Tariffs, times and durations use tabular numerals.

**Spacing & layout.** 4px-quantised scale (2 → 128). Cards pad 24, sections breathe at 96 (`--section-y`), content maxes at 1240 with 48px gutters, prose at 720. Control heights 32/40/48/56; mobile hit targets never below 44.

**Backgrounds.** Three legitimate grounds: flat warm neutral (Merino / Pearl Bush / Sand), full-bleed photography with a scrim, and a flat neutral or olive ground carrying one rosette band on a single edge. No gradients as decoration — the only gradients in the system are the protection scrims. No noise or grain overlays in product UI (the guideline boards carry a paper grain; that is print, not screen).

**Pattern.** The rosette appears as a **band flush to one edge** of a surface — a vertical column down the right or left edge (22–38% of the width), or a horizontal strip along the top or bottom (8–18% of the height), bleeding off on its three outer sides. It is drawn line-art at readable strength — Cotton Seed on neutral grounds, Merino/white over dark grounds and photography — never a faint wash across a whole surface, never a field behind headlines, body copy, cards or controls. Over photography is allowed; **one band per screen, spread or slide**. `assets/pattern-unit.png` is the exact repeat cell measured out of the supplied seamless artwork — **530 × 530, tiling seamlessly in both axes**. It carries two interlocking layers (the eight-petal rosette and the crossed square), so the single motif on its own is **not** the repeat unit and must never be tiled; `assets/pattern-motif.png` is for standalone ornament only. And the guidelines' own filename is the second rule: *scale accordingly* — the cell is not a free choice but a **ratio to the band's cross-axis measure: cell = band / 2** (two rosettes across; usable range band/1.5–band/3), always square, always both axes. 1440 page → band 432 → cell 216; 1280 slide → band 380 → cell 199 (`--pattern-scale-2xs`); 1440×1800 post, 15% strip → strip 270 → cell 135. Floor 130px, which makes ~880px the smallest patterned surface — under that the strokes close into grey, so a small card gets no band at all. The band's inner edge is always ruled with a 1px hairline (Cotton Seed on light, Merino 34% on dark); the three outer sides bleed off unruled. Never a two-value background size. Colour comes from `--pattern-ink` through the `.shantara-pattern-band` mask layer (or `PatternPanel`), so the band can take any brand tone without new artwork.

**Corners & borders.** Buttons, tags and toggles are **pill** (999px). Inputs 8px. Cards 16px. Dialogs 24px. Media 16px. Lines are 1px warm grey, and the token split is an accessibility decision: `--border-subtle` (Pine Tree 10%) and `--border-default` (Cotton Seed) are *decorative* hairlines for dividers and card edges — both sit below 3:1 and may never draw the boundary that identifies a control. Every control uses `--border-control`, which clears 3:1 on all three light grounds. Active tab underlines and selected cards are 1.5px Himalaya.

**Cards.** White on Merino, 16px radius, 1px hairline border, and a whisper of warm shadow (`--shadow-sm`, Pine Tree at 6%). Grouped panels drop the shadow and switch to Pearl Bush. Interactive cards lift 2px into `--shadow-lg` over 240ms; they do not scale.

**Shadows.** Warm, low-contrast, Pine-Tree-tinted at 6–14%. Five steps: xs resting, sm cards, md popovers, lg hover, xl dialogs. No coloured or glow shadows.

**Transparency & blur.** Two uses only: the sticky header and media-overlay controls (`--glass-fill` Merino 72% + `--blur-glass` 16px), and the dialog scrim (Pine Tree 55% + 3px blur). Type over photography gets a **scrim gradient** (`--scrim-bottom`) when it sits in a corner, or a **glass capsule** when it floats mid-image — never bare text on an image.

**Motion.** Breath-paced and unshowy: 160ms for control states, 240ms for surfaces, 420ms for entrances, one 1200ms ambient loop (the three-dot Spinner). Easing is `--ease-out` (0.16,1,0.3,1) for entrances, standard for states. **Nothing bounces, nothing overshoots, nothing spins.** Press is `scale(0.98)`, hover is a one-step colour shift, focus is a 2+2px Himalaya ring offset by the page colour.

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

`guidelines/accessibility.html` is a **live audit**, not a claim: it resolves every semantic token — including the `oklch()` ramp and the `color-mix()` transparencies — and measures 29 in-use pairs on render, so it fails visibly if a token is ever changed. All 29 pass at the level they need (text 4.5:1, large text and non-text 3:1). Lowest passing pair is 3.46:1. `guidelines/accessibility-contract.html` carries the component guarantees, the deliberate exceptions and the known gaps.

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

## Browse it

The system is a static site. `index.html` is a catalog of every guideline card, component family, UI kit and the brand deck.

```
npx --yes serve -l 4173
```

Then open `http://localhost:4173`. Cards can also be opened as their own pages — `guidelines/colors-primary.html`, `ui_kits/website/index.html`.

Netlify: `netlify.toml` publishes a `dist/` copy that **excludes** `uploads/` (source boards, handbook, raw shoot). Connect the repo or run `node scripts/prepare-dist.mjs` and deploy `dist/`.

## Foundations, files & index

```
styles.css              → the single entry point consumers link (imports only)
tokens/                 → fonts, colors, typography, spacing, radius, elevation, motion, pattern, base
assets/                 → logo / icon / wordmark in 4 colourways each, pattern cell + motif, Diodrum TTFs
assets/photos/          → 16 curated frames from the property shoot
guidelines/               → 28 specimen cards (Colors, Type, Spacing, Brand, Foundations)
components/             → core, forms, navigation, feedback
ui_kits/website/        → marketing site kit
ui_kits/app/            → in-stay guest companion kit
templates/brand-deck/   → presentation template
thumbnail.html          → homepage tile
SKILL.md                → Agent-Skills wrapper for use outside this project
```

### Components

**core** — `Button`, `IconButton`, `Icon`, `Logo`, `Card`, `Badge`, `Tag`, `Divider`, `PatternPanel`
**forms** — `Input`, `Textarea`, `Select`, `Checkbox`, `Radio`, `Switch`
**navigation** — `Tabs`, `Breadcrumbs`, `Accordion`
**feedback** — `Dialog`, `Toast`, `Tooltip`, `Spinner`

Each directory holds `<Name>.jsx`, `<Name>.d.ts` (props contract) and `<Name>.prompt.md`, plus one `@dsCard` HTML showing the family's states.

**Intentional additions.** The brand package defines no component inventory, so this is a standard set sized to the brand's needs. Two entries exist for brand reasons rather than convention: `Icon` (wrapper over the substituted Lucide set) and `PatternPanel` (the only sanctioned way to place the rosette). `Spinner` is deliberately a breathing three-dot, not a rotating ring, to stay inside the brand's motion rules.

### UI kits

- `ui_kits/website/` — home (tagline hero, approach, eight wellness programmes with filters, olive therapies band, rooms & tariffs, journal, house-rules FAQ), Detox programme detail with sticky tariff panel, journal index, and a three-step enquiry flow ending in *submitted for doctor review*. Nothing is instantly bookable, because nothing is.
- `ui_kits/app/` — in-stay guest companion, 390×844: Today's doctor-set schedule, protocol (therapies / diet), a therapy sheet whose only action is *I'll be there*, notes and vitals, You. Tab bar is live.

### Templates

- `templates/brand-deck/` — presentation template in the guideline-deck style (grained neutral ground, one edge-flush rosette band per section divider, Light display type, olive/gold section breaks).

## Caveats

1. **No product UI or copy deck was supplied.** Both kits are extrapolations of surfaces Shantara may or may not want. The handbook never mentions a guest app; if there is no app, that kit is a proposal.
2. **Tariffs and timings are handbook figures marked `[TO CONFIRM]`** at source, and the handbook itself flags two internal conflicts (built-up area, check-in/out times). Confirm with Azhar / Dr. P.A. Kareem / Dr. Bahja Janu before anything is published.
3. **Ocean / Clay / Lavender hexes were sampled**, not read, because the source printed the same value for all three.
4. **Programme durations in the kits are indicative.** The handbook does not fix nights per programme beyond the 7-night minimum.
5. **Journal copy is written for these kits**, not supplied.
6. **Lucide stands in for a real icon set.**
7. **Clear-space and minimum-size numbers** in `guidelines/brand-clearspace.html` are conventions consistent with the guideline artwork, not quoted brand law — confirm or correct.
8. `Welnez Pattern.ai` was named in an earlier brief but is not on disk; the name suggests a sibling brand ("Welnez") — unexplored.
