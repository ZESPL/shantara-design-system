---
name: shantara-design
description: Use this skill to generate well-branded interfaces and assets for Shantara, either for production or throwaway prototypes/mocks/etc. Contains essential design guidelines, colors, type, fonts, assets, and UI kit components for protoyping.
user-invocable: true
---

Read the readme.md file within this skill, and explore the other available files.
If creating visual artifacts (slides, mocks, throwaway prototypes, etc), copy assets out and create static HTML files for the user to view. If working on production code, you can copy assets and read the rules here to become an expert in designing with this brand.
If the user invokes this skill without any other guidance, ask them what they want to build or design, ask some questions, and act as an expert designer who outputs HTML artifacts _or_ production code, depending on the need.

Four things in this brand are non-obvious and easy to get wrong:

1. **Shantara is a clinical naturopathy retreat, not a spa.** Treatment is drug-free, doctor-prescribed and root-cause focused, with a seven-night minimum. Nothing is bookable on demand and nothing is ordered from a menu — enquiries end in *submitted for doctor review*, and a guest's only action on a prescribed therapy is to turn up. Never write copy that promises a clinical outcome.
2. **The rosette is a band on one edge — never a wash.** It runs flush to a single edge of a surface and bleeds off on its three outer sides: a vertical column down the right or left (22–38% of the width) or a strip along the top or bottom (8–18% of the height), drawn as visible line-art — Cotton Seed on neutral grounds, Merino/white on dark grounds and over photography. Keep type, cards and controls out of the band; **one band per view**. `assets/pattern-unit.png` is the 530×530 repeat cell — size it square — one value, both axes — at **half the band's cross-axis measure** (two rosettes across: 1280 slide → band 380 → cell 199; range band/1.5–band/3; floor 130px, so no band on a surface under ~880px) and rule the band's inner edge with a 1px hairline. Use `PatternPanel` or `.shantara-pattern` + `.shantara-pattern-band[data-edge]`. `pattern-motif.png` is a single motif — ornament only, never tiled.
3. **Guest privacy is a design constraint**, not a preference: no identifiable guests, no faces in therapy, no room numbers. Imagery shows rooms and architecture, never treatment in progress.
4. **Contrast is already solved — don't reintroduce the traps.** Use `--border-control` for anything interactive (`--border-default` is decorative and below 3:1), never set Gold Crayola or the six accents as text on light grounds, and always put a scrim or glass capsule behind type over photography. `guidelines/accessibility.html` audits this live.
