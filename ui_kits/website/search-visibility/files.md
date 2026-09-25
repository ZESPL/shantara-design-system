# 14. Files (FILE)

Part of the [search and AI visibility rules](overview.md). Priorities, owner tags and recorded decisions are in the overview.

- **FILE-01 (P2) [Build]** Any published PDF (brochure, resident policies) is text-based, has a document title in its metadata, is tagged for screen readers, stays under 2 MB, and contains no rates unless it is the tariff. The link text states the file type and size, for example "Download resident policies (PDF, 240 KB)". A PDF that repeats a web page sends `Link: <https://shantara.life/en/…>; rel="canonical"`. **Check:** open the PDF, select text, check document properties and run `curl -I`.
