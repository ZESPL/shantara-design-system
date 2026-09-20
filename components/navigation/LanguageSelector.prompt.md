Locale switcher for the public website header and mobile nav. Catalog documentation for this control is English.

```jsx
<LanguageSelector locale="en" rest="programs" onSelect={(code) => navigate(code)} />
```

Do not use flags. The trigger shows a compact code (`EN`). The list uses native language names.

Locale policy — planned languages, enabled vs published, page-level availability, and hiding the control while only English is enabled — lives in `ui_kits/website/SKILL.md` §15, not in this catalog.

**Motion.** Open/close is instant plus the existing focus ring.

**Accessibility.** The button name is “Language: English” (or the current native name). The list is a `listbox`. Escape and outside click close it. Visible focus uses `--ring-focus`.
