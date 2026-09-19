# Shantara — website kit

Marketing-site surfaces for Shantara Naturopathy, Kozhikode. **This is an extrapolation**, not a recreation: no website code or Figma file was supplied, so the layouts are new work built from the brand foundations. All *content* — programmes, therapies, room categories, tariffs, policies, contact details — comes from the Shantara Property Handbook (draft, July 2026). Photography is the property shoot supplied with the brand package.

Open `index.html`. The header nav is live: **Programmes** → programme detail, **Journal** → journal index, **Enquire about a stay** → the three-step enquiry flow.

| File | Surface |
| --- | --- |
| `SiteChrome.js` | Sticky glass header + Pine Tree footer under a top-edge rosette band (the page's one band), with real contact details |
| `HomeScreen.js` | Scrim hero on the tagline, approach split with property stats, filterable programme grid, flat olive therapies band, rooms & tariffs, journal teasers, house-rules FAQ, consultation card |
| `ProgrammeScreen.js` | Detox programme detail: media set, who-it-suits, day shape accordion, sticky tariff/length panel |
| `JournalScreen.js` | Editorial index with lead story and category tabs |
| `EnquiryScreen.js` | Three-step flow — intake Monday + nights, Health Assessment Form, submitted-for-review — with dialog, pending spinner and toast |
| `Photo.js` | Thin `<img>` wrapper over `assets/photos/*`, with the brand scrim tokens |

Every visible control comes from the design system bundle (`Button`, `Card`, `Tag`, `Tabs`, `Accordion`, `Input`, `Select`, `Checkbox`, `Textarea`, `Radio`, `Dialog`, `Toast`, `Spinner`, `Badge`, `Divider`, `Breadcrumbs`, `Tooltip`, `IconButton`, `Icon`, `Logo`, `PatternPanel`). Nothing is re-implemented locally except `Photo`.

**Confirm before any real use:** tariffs (valid to 31 Dec 2026 and marked *to confirm* in the handbook), the Monday-intake convention and monthly cap presentation, programme durations (indicative — the handbook does not fix nights per programme), and journal copy, which is written for this kit rather than supplied.
