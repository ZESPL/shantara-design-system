The consultation form on Merino beside a Stone panel that shows who will call and what happens next.

```jsx
<FormSplit aside={<>
  <PortraitFrame src="/assets/photos/doctor-bahja-janu-portrait-cropped.jpeg" name="Dr. Bahja Janu" role="Medical Director" />
  <Statement as="h3" size="title"
    sub="A member of the team will call you to understand what you need. A doctor then reviews whether a stay is the right next step.">
    We'll be in touch
  </Statement>
</>}>
  <Statement as="h2" size="title" eyebrow="Book a Consultation">Send your details</Statement>
  <Input label="Name" />
  <Input label="Mobile / WhatsApp number" placeholder="+91" />
  <Button size="lg">Send your details</Button>
</FormSplit>
```

**Content.** Fields follow `content/site.json` `form_field_keys`; the button reads “Send your details”. The aside names a real doctor from `content/doctors/` and says in plain sentences what happens next, as the consultation screen does. Do not narrate internal process as a numbered list (“1. We receive your details…”), and never promise a response time that is not confirmed.

**Responsive.** Under 1000px the form comes first at full width and the Stone panel follows it. From 1000px the form takes 7 of 12 columns and the panel 5, and the panel is sticky below the header while the form scrolls. The panel's padding is fluid (24→48px).
