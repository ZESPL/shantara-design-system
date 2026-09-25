# 10. Rates (RATE)

Part of the [search and AI visibility rules](overview.md). Priorities, owner tags and recorded decisions are in the overview.

Rates appear only on tariff surfaces ([SKILL.md §1](../SKILL.md)).

- **RATE-01 (P0) [Build]** Rates appear only on the tariff page. Every other page links to it. **Check:** a build step searches `dist/` outside the tariff page for `₹`, `INR` and rate figures, and fails on a match.
- **RATE-02 (P0) [Content]** Each rate states its currency (ISO code), its unit (per night, per person or per stay, and the room category) and the label "incl. GST", because every tariff rate includes GST. It is visible server-rendered text, never an image, tooltip or something that needs a click. A figure still marked `[TO CONFIRM]` is not published. **Check:** `curl` the tariff page. Every rate, currency, unit and "incl. GST" label appears as text.
- **RATE-03 (P0) [Build]** Every visitor sees the same rates. They never change with IP address, locale, cookie or device. Locale is not currency. **Check:** load the tariff page from two countries and two devices. Same figures.
- **RATE-04 (P1) [Build]** If the tariff page emits JSON-LD `Offer` nodes, each `price` is a plain number that equals the visible figure, with an ISO `priceCurrency` and a `priceSpecification` with `valueAddedTaxIncluded: true`. No other page emits `Offer`. Visible figures carry a `data-rate` attribute so tests can read them. **Check:** an automated test compares each visible `data-rate` value with the JSON-LD price.
