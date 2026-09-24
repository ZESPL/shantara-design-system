Ends every marketing page: a full-bleed dark photograph (or Pine) with a statement, one Gold primary button and contact lines (deck slide 18).

```jsx
<ClosingCTA
  src="/assets/photos/exterior-entrance-dusk-lit-canopy.jpg" alt="The entrance at dusk"
  eyebrow="Book a Consultation"
  title="A stay is confirmed after a doctor has spoken with you."
  sub="Share your name and a number we can reach. Our team will contact you to arrange a consultation."
  action={<Button size="lg">Book a Consultation</Button>}
  contact={<>
    <a href="tel:+919553600100">+91 9553 600 100</a>
    <a href="mailto:heal@shantara.life">heal@shantara.life</a>
    <span>Kozhikode (Calicut), Kerala</span>
  </>}
/>
```

**Content.** One button, labelled with the site's primary CTA (“Book a Consultation”). Contact lines come from `content/site.json` — phone, email, place. No rates, no second button. Without `src` the section paints the Pine ground, which is right for pages that already carry several photographs.

**Responsive.** Phone: content-height with a 520px floor, the statement bottom-left, the button full width, contact lines wrapping one per line. Desktop: 72svh (520–860px), the statement inside the 1240px container over a scrim that covers the whole text block. Contact lines sit above a hairline and wrap as the width allows.
