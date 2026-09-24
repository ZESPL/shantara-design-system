Full-screen photographic hero with the statement bottom-left inside a scrim and one Gold primary button (deck slide 1).

```jsx
<HeroFullBleed
  src="/assets/photos/arrival-dusk.jpg" alt="Shantara at dusk"
  eyebrow="Kozhikode, Kerala · since 2000"
  title="A doctor-led naturopathy retreat in Kerala"
  sub="Drug-free naturopathy on four hilltop acres above the Chennamangallur valley. Every stay begins with a consultation, and your programme is planned by our doctors."
  actions={<>
    <Button size="lg">Book a Consultation</Button>
    <TextLink>View programmes</TextLink>
  </>}
/>
```

**Use** once per page, first. `height="full"` for the home page (display-size headline); `height="tall"` for inner pages that earn a photograph (programme, experience) with an h1-size headline; `short` for secondary pages. The transparent site header sits over it.

**Content.** The eyebrow adds information (place, since-year) and never repeats the headline. The headline is one sentence and leads with what Shantara is — never “not a spa” or “wellness retreat”. One primary button; a second action is a `TextLink`, not a second filled button. The photograph is the LCP image, so the hero passes `priority` for you; choose a frame with dark, quiet space bottom-left.

**Responsive.** Phone (<520px): at least 560px tall (100svh up to 1080px), the headline wraps at 20ch in the fluid display size (40px on a 360px phone), actions stack full width. Tablet: same layout, the scrim still covers the whole text block. Desktop: the statement caps at 44rem inside the 1240px container, bottom-left. Pass `mobilePosition` when the subject of the photograph moves out of a portrait crop.
