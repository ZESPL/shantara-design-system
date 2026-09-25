# 13. Images (IMG)

Part of the [search and AI visibility rules](overview.md). Priorities, owner tags and recorded decisions are in the overview.

- **IMG-01 (P1) [Build]** Images go through Astro Image as AVIF or WebP, with `srcset`, width and height, so the layout does not jump. **Check:** Lighthouse shows no image-size or layout-shift warnings.
- **IMG-02 (P1) [Build]** The hero image, which is usually the largest element on screen, is not lazy-loaded and is the only image with `fetchpriority="high"`. **Check:** the Lighthouse LCP element is the hero image and it is not lazy-loaded.
- **IMG-03 (P1) [Build]** Every other image is lazy-loaded. **Check:** the network panel shows those images load only when scrolled near.
- **IMG-04 (P0) [Content]** Alt text describes what the photograph really shows, for example "Guest room with a private balcony overlooking the valley". It never carries health claims or keyword lists. Decorative images, including the rosette, use `alt=""`. **Check:** a crawl report shows no missing alt text on content images.
- **IMG-05 (P2) [Content]** Source image files have descriptive names (`hydrotherapy-room.jpg`, not `TRD0142.jpg`), because Astro keeps the base name in the published file. **Check:** review the image folder in the website repo.
- **IMG-06 (P1) [Content]** Real Shantara photography shows the place, rooms, food, therapies, guests and doctors. AI-generated images never depict any of them. Any AI-generated image used elsewhere carries the IPTC `DigitalSourceType` value `trainedAlgorithmicMedia` in its metadata. **Check:** inspect the metadata of any AI-generated image before upload.
