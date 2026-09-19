(() => {
  const GROUP_ORDER = [
    "Brand",
    "Colors",
    "Type",
    "Spacing",
    "Foundations",
    "Components",
    "Website",
    "App",
    "Templates",
  ];

  const GROUP_META = {
    Brand: { label: "Brand", blurb: "Voice, lockups, pattern, imagery and print" },
    Colors: { label: "Colour", blurb: "Primaries, neutrals, accents and the pairs that are allowed" },
    Type: { label: "Type", blurb: "Diodrum Cyrillic — one family, six weights" },
    Spacing: { label: "Spacing", blurb: "Scale, rhythm, radius, elevation, motion, lines" },
    Foundations: { label: "Accessibility", blurb: "Live contrast audit and the component contract" },
    Components: { label: "Components", blurb: "Core, forms, navigation and feedback" },
    Website: { label: "Website kit", blurb: "Marketing site — home, programme, journal, enquiry" },
    App: { label: "Guest app", blurb: "In-stay companion — schedule, protocol, notes" },
    Templates: { label: "Templates", blurb: "Presentation deck in the guideline style" },
  };

  const els = {
    body: document.body,
    navTree: document.querySelector("[data-nav-tree]"),
    navCount: document.querySelector("[data-nav-count]"),
    catalog: document.querySelector("[data-catalog]"),
    homeMeta: document.querySelector("[data-home-meta]"),
    home: document.querySelector("[data-panel=home]"),
    viewer: document.querySelector("[data-panel=viewer]"),
    empty: document.querySelector("[data-empty]"),
    search: document.querySelector("[data-search]"),
    viewGroup: document.querySelector("[data-view-group]"),
    viewName: document.querySelector("[data-view-name]"),
    viewSub: document.querySelector("[data-view-sub]"),
    viewOpen: document.querySelector("[data-view-open]"),
    viewSize: document.querySelector("[data-view-size]"),
    frame: document.querySelector("[data-frame]"),
    frameWrap: document.querySelector("[data-frame-wrap]"),
    stage: document.querySelector("[data-stage]"),
    navToggle: document.querySelector("[data-nav-toggle]"),
    navClose: document.querySelector("[data-nav-close]"),
  };

  let cards = [];
  let query = "";

  function parseHash() {
    const raw = decodeURIComponent(location.hash.replace(/^#\/?/, "")).trim();
    return raw || "";
  }

  function cardHref(card) {
    return `#/${card.path}`;
  }

  function matches(card) {
    if (!query) return true;
    const hay = [card.name, card.subtitle, card.group, GROUP_META[card.group]?.label, card.path]
      .join(" ")
      .toLowerCase();
    return hay.includes(query);
  }

  function grouped(list) {
    const map = new Map();
    for (const key of GROUP_ORDER) map.set(key, []);
    for (const card of list) {
      if (!map.has(card.group)) map.set(card.group, []);
      map.get(card.group).push(card);
    }
    return [...map.entries()].filter(([, items]) => items.length);
  }

  function parseViewport(card) {
    const [w, h] = String(card.viewport || "960x600").split("x").map(Number);
    return { w: w || 960, h: h || 600 };
  }

  function closeNav() {
    els.body.classList.remove("nav-open");
    els.navToggle?.setAttribute("aria-expanded", "false");
    if (els.navClose) els.navClose.hidden = true;
  }

  function openNav() {
    els.body.classList.add("nav-open");
    els.navToggle?.setAttribute("aria-expanded", "true");
    if (els.navClose) els.navClose.hidden = false;
  }

  function renderNav(activePath) {
    const visible = cards.filter(matches);
    els.navCount.textContent = query
      ? `${visible.length} of ${cards.length} cards`
      : `${cards.length} cards`;

    els.navTree.innerHTML = grouped(visible).map(([group, items]) => {
      const meta = GROUP_META[group] || { label: group };
      const links = items.map((card) => {
        const current = card.path === activePath;
        return `<a class="nav-link" href="${cardHref(card)}"${current ? ' aria-current="page"' : ""}>${card.name}</a>`;
      }).join("");
      return `<div class="nav-group"><span class="nav-group-label">${meta.label}</span>${links}</div>`;
    }).join("");
  }

  function renderHome() {
    const visible = cards.filter(matches);
    const guidelineCount = cards.filter((c) => c.path.startsWith("guidelines/")).length;
    const componentCount = cards.filter((c) => c.group === "Components").length;
    const kitCount = cards.filter((c) => c.group === "Website" || c.group === "App").length;
    els.homeMeta.textContent = `${guidelineCount} guideline cards · ${componentCount} component families · ${kitCount} kits`;

    if (!visible.length) {
      els.catalog.innerHTML = "";
      return;
    }

    els.catalog.innerHTML = grouped(visible).map(([group, items]) => {
      const meta = GROUP_META[group] || { label: group, blurb: "" };
      const tiles = items.map((card) => {
        const { w, h } = parseViewport(card);
        return `<a class="card-link" href="${cardHref(card)}">
          <div>
            <h3>${card.name}</h3>
            <p>${card.subtitle || ""}</p>
          </div>
          <span class="card-meta">${w} × ${h}</span>
        </a>`;
      }).join("");
      return `<section class="section">
        <div class="section-head">
          <h2>${meta.label}</h2>
          <p>${meta.blurb}</p>
        </div>
        <div class="card-grid">${tiles}</div>
      </section>`;
    }).join("");
  }

  function fitFrame(card) {
    const { w, h } = parseViewport(card);
    const max = Math.max(320, els.stage.clientWidth - 8);
    const scale = Math.min(1, max / w);
    els.frameWrap.style.width = `${w}px`;
    els.frameWrap.style.height = `${h}px`;
    els.frameWrap.style.transform = scale < 1 ? `scale(${scale})` : "none";
    els.frameWrap.style.marginBottom = scale < 1 ? `${h * scale - h}px` : "0";
    els.frame.width = w;
    els.frame.height = h;
  }

  function showHome() {
    els.body.dataset.view = "home";
    els.home.hidden = false;
    els.viewer.hidden = true;
    els.empty.hidden = cards.filter(matches).length > 0;
    els.frame.removeAttribute("src");
    document.title = "Shantara design system";
    renderNav("");
    renderHome();
  }

  function showCard(card) {
    const { w, h } = parseViewport(card);
    const meta = GROUP_META[card.group] || { label: card.group };
    els.body.dataset.view = "viewer";
    els.home.hidden = true;
    els.viewer.hidden = false;
    els.empty.hidden = true;
    els.viewGroup.textContent = meta.label;
    els.viewName.textContent = card.name;
    els.viewSub.textContent = card.subtitle || "";
    els.viewOpen.href = card.path;
    els.viewOpen.textContent = card.group === "Website" || card.group === "App"
      ? "Open kit"
      : "Open full page";
    els.viewSize.textContent = `${w} × ${h}`;
    els.frame.title = card.name;
    if (els.frame.getAttribute("src") !== card.path) els.frame.src = card.path;
    document.title = `${card.name} · Shantara design system`;
    renderNav(card.path);
    requestAnimationFrame(() => fitFrame(card));
  }

  function route() {
    const path = parseHash();
    const card = cards.find((c) => c.path === path);
    if (card) showCard(card);
    else showHome();
    closeNav();
    if (!path) window.scrollTo(0, 0);
  }

  function collectCards(manifest) {
    const fromCards = (manifest.cards || []).map((card) => ({
      path: card.path,
      group: card.group,
      name: card.name,
      subtitle: card.subtitle,
      viewport: card.viewport,
    }));
    const fromTemplates = (manifest.templates || []).map((tpl) => ({
      path: tpl.entryPath,
      group: "Templates",
      name: tpl.name,
      subtitle: tpl.description,
      viewport: "1280x720",
    }));
    return [...fromCards, ...fromTemplates];
  }

  els.search.addEventListener("input", () => {
    query = els.search.value.trim().toLowerCase();
    const path = parseHash();
    const card = cards.find((c) => c.path === path);
    renderNav(card ? card.path : "");
    if (!card) {
      renderHome();
      els.empty.hidden = cards.filter(matches).length > 0;
    }
  });

  els.navToggle.addEventListener("click", () => {
    if (els.body.classList.contains("nav-open")) closeNav();
    else openNav();
  });
  els.navClose.addEventListener("click", closeNav);
  window.addEventListener("hashchange", route);
  window.addEventListener("resize", () => {
    const card = cards.find((c) => c.path === parseHash());
    if (card) fitFrame(card);
  });

  fetch("_ds_manifest.json")
    .then((res) => {
      if (!res.ok) throw new Error("Could not read the design-system index");
      return res.json();
    })
    .then((manifest) => {
      cards = collectCards(manifest);
      route();
    })
    .catch((err) => {
      els.homeMeta.textContent = "The card index could not be loaded. Serve this folder over http, not as a file.";
      els.empty.hidden = false;
      els.empty.textContent = err.message;
    });
})();
