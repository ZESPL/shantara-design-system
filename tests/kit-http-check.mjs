const checks = [
  ["locales.js", "http://localhost:4173/ui_kits/website/locales.js"],
  ["kit", "http://localhost:4173/ui_kits/website/index.html"],
  ["chrome", "http://localhost:4173/ui_kits/website/chrome/SiteChrome.js"],
  ["nav card", "http://localhost:4173/components/navigation/navigation.card.html"],
  ["fixture", "http://localhost:4173/ui_kits/website/rtl-fixture.html"],
];

for (const [name, url] of checks) {
  const res = await fetch(url);
  const text = await res.text();
  console.log(name, res.status, text.length);
  if (name === "kit") {
    for (const needle of ["locales.js", "chrome/SiteChrome.js", "screens/ConsultationScreen.js", 'lang="en"', 'dir="ltr"', "rel=\"canonical\"", "fixtureRtl"]) {
      if (!text.includes(needle)) throw new Error("kit missing " + needle);
    }
    if (text.includes("EnquiryScreen.js")) throw new Error("kit still references EnquiryScreen.js");
    if (text.includes("#/ar/home")) throw new Error("kit contains fake ar home");
  }
  if (name === "chrome") {
    if (!text.includes("LanguageSelector")) throw new Error("chrome missing LanguageSelector");
  }
}
console.log("http checks ok");
