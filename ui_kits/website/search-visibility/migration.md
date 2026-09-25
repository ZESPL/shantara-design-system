# 7. Migration from the current site (MIG)

Part of the [search and AI visibility rules](overview.md). Priorities, owner tags and recorded decisions are in the overview.

- **MIG-01 (P0) [Ops]** Crawl and export every URL of every site being replaced: the current shantara.life and any former addresses confirmed under [Still open](overview.md#still-open). Include PDFs and images with traffic or backlinks. Add URLs from Search Console (Pages report and 16 months of Performance data) and from OpenSEO backlink data. Do not guess mappings. **Check:** the export is saved in the website repo.
- **MIG-02 (P0) [Build]** Every old URL is loaded as a redirect to its true equivalent page, or returns 410 when none exists. Do not redirect to the homepage, a listing hub or a merely similar page. **Check:** every URL in the export has a redirect or a recorded 410 decision.
- **MIG-03 (P0) [Content]** The top 20 old pages by Search Console clicks over the last 12 months keep their topic, main facts and answers on the new URL. **Check:** a side-by-side review before launch.
- **MIG-04 (P0) [Ops]** On launch day, update the website link on every listing Shantara controls (Google Business Profile, social profiles, directories) to the new URL. **Check:** a dated checklist of listings with their new links.
- **MIG-05 (P1) [Ops]** For 8 weeks after launch, check Search Console and Bing Webmaster Tools weekly for redirect errors, 404 spikes and drops in indexed pages. **Check:** a weekly note with the indexed page count.
