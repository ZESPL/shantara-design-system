# Shantara — in-stay guest companion

A companion app for guests **during** their stay, in a 390×844 frame. **Extrapolation**, not a recreation — no app design was supplied with the brand package. Content follows the Shantara Property Handbook: prescribed schedules, doctor-written protocols, diet therapy, escalation rules.

Open `index.html`. The tab bar switches Today / Programme / Notes / You; tapping any scheduled item or prescribed therapy opens the therapy sheet.

| File | Surface |
| --- | --- |
| `Shell.js` | Phone frame, status bar, glass tab bar (44px minimum targets) + `Photo` wrapper over `assets/photos` |
| `TodayScreen.js` | Today: day-of-programme greeting, current session on Himalaya, the doctor-set day timeline, open facilities rail, escalation card — plus the protocol screen (therapies / diet tabs) |
| `TherapySheet.js` | Full-screen therapy sheet with pre-session guidance and escalation notes — plus Notes (vitals + journal) and You |

Design decisions specific to this surface: nothing is bookable or cancellable by the guest, because therapies are prescribed rather than ordered; the primary action on a session is only "I'll be there". Display type drops to 30px Light, cards keep the 16px radius, the tab bar uses `--glass-fill` + `--blur-glass`, and the sheet enters with a 24px rise over 420ms.

**Confirm before any real use:** whether guests get an app at all (the handbook does not mention one), whether vitals should be visible to guests, and the escalation contact route shown on the Today screen.
