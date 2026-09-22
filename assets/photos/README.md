# `assets/photos/` — agent index

Flat folder. No subfolders. `Photo` / content `photo` fields use the **filename without `.jpg`**.

Most kit defaults are short slugs (`lobby`, `dining`, `arrival-dusk`, …). Extra frames use longer descriptive names. Prefer short slugs unless you need a specific alternate angle.

Web size: new shoot frames are **2880px on the long edge** (retina-ready). `library.jpg` remains the earlier 1600px kit frame (no replacement in the new shoot).

## Kit defaults (keep these for samples)

`arrival-dusk` · `balcony` · `corridor` · `courtyard` · `dining` · `exterior-day` · `grounds` · `library` · `lobby` · `lounge` · `reception` · `room-premium` · `room-twin` · `treatment` · `valley` · `water-wall`

## Doctors

Full seated studio shots (`*-portrait`) and matching square close-ups (`*-profile`, 1200×1200, head-and-shoulders, same crop for every doctor).

| Portrait (full) | Profile (close-up) | Who |
| --- | --- | --- |
| `doctor-bahja-janu-portrait` | `doctor-bahja-janu-profile` | Dr. Bahja Janu (Medical Director; content id `bahja-janu`) |
| `doctor-gangrei-gangmei-portrait` | `doctor-gangrei-gangmei-profile` | Dr. Gangrei Gangmei |
| `doctor-keerthana-portrait` | `doctor-keerthana-profile` | Dr. Keerthana |
| `doctor-sara-portrait` | `doctor-sara-profile` | Dr. Sara |

Use `photo` for editorial / full portraits; use `photo_profile` (or the `*-profile` filename) for avatars, team grids, and circular crops.

## Extra property frames (by prefix)

| Prefix | Use for |
| --- | --- |
| `room-bedroom-*` | Alternate bedroom angles |
| `suite-living-*` | Suite living + balcony |
| `dining-*` | Restaurant alternates / table detail |
| `reception-*` / `lobby-*` | Reception & waiting |
| `lounge-*` | Lounge alternates |
| `balcony-*` / `terrace-*` | Balcony / café terrace |
| `courtyard-*` / `water-wall-*` / `grounds-*` / `patio-*` | Courtyard, water, grounds |
| `exterior-*` | Façade & dusk arrival alternates |
| `treatment-*` | Therapy / bath corridor / waiting |
| `activity-hall-*` | Yoga / multi-purpose hall |

## Privacy

Prefer frames **without** `-guest` for public marketing. Doctor portraits are intentional for About / Meet the doctors. See handbook guest-privacy rules and `ui_kits/website/chrome/Photo.js`.
