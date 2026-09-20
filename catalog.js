(() => {
  const GROUP_ORDER = [
    "Start",
    "Brand",
    "Foundations",
    "Components",
    "Website",
    "App",
    "Templates",
    "Content",
  ];

  const BRAND_LEAD = ["guidelines/colors.html", "guidelines/type.html", "guidelines/logo.html"];
  const START_LEAD = ["docs/use.html", "docs/skill.html", "docs/readme.html"];
  const WEBSITE_LEAD = ["ui_kits/website/index.html"];
  const APP_LEAD = ["ui_kits/app/index.html"];
  const CONTENT_LEAD = ["docs/handbook.html", "docs/icp.html", "docs/sources.html"];
  const FAMILY_ORDER = ["Core", "Forms", "Navigation", "Feedback"];

  const RTL_GROUPS = new Set(["Components", "Website", "App", "Templates"]);

  const GROUP_META = {
    Start: { label: "Start here", blurb: "How to browse this folder, how to drop it into another repo, and the agent skill" },
    Brand: { label: "Brand", blurb: "Colour, type, logo, voice, pattern, imagery and print" },
    Foundations: { label: "Foundations", blurb: "Scale, rhythm, radius, elevation, motion, borders, accessibility" },
    Components: { label: "Components", blurb: "Core, forms, navigation and feedback — family overviews and per-component notes" },
    Website: { label: "Website kit", blurb: "Sample site first, then builder skill, IA, sections, leads, and QA" },
    App: { label: "Guest app", blurb: "In-stay companion — schedule, protocol, notes" },
    Templates: { label: "Templates", blurb: "Presentation deck in the guideline style" },
    Content: { label: "Content", blurb: "Property handbook, ICP, and sources" },
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
    viewOpens: document.querySelectorAll("[data-view-open]"),
    viewSize: document.querySelector("[data-view-size]"),
    frame: document.querySelector("[data-frame]"),
    frameWrap: document.querySelector("[data-frame-wrap]"),
    stage: document.querySelector("[data-stage]"),
    navToggle: document.querySelector("[data-nav-toggle]"),
    navClose: document.querySelector("[data-nav-close]"),
  };

  let cards = [];
  let query = "";
  let dir = "ltr";

  try {
    if (localStorage.getItem("shantara-dir") === "rtl") dir = "rtl";
  } catch (err) {
    dir = "ltr";
  }

  function parseHash() {
    const raw = decodeURIComponent(location.hash.replace(/^#\/?/, "")).trim();
    return raw || "";
  }

  function cardHref(card) {
    return `#/${card.path}`;
  }

  function matches(card) {
    if (!query) return true;
    const hay = [card.name, card.subtitle, card.group, card.family, GROUP_META[card.group]?.label, card.path]
      .join(" ")
      .toLowerCase();
    return hay.includes(query);
  }

  function leadIndex(list, path) {
    const i = list.indexOf(path);
    return i === -1 ? list.length : i;
  }

  function sortGroup(group, items) {
    const lead =
      group === "Brand" ? BRAND_LEAD :
      group === "Start" ? START_LEAD :
      group === "Website" ? WEBSITE_LEAD :
      group === "App" ? APP_LEAD :
      group === "Content" ? CONTENT_LEAD :
      null;
    if (!lead) return items;
    return [...items].sort((a, b) => {
      const ao = leadIndex(lead, a.path);
      const bo = leadIndex(lead, b.path);
      if (ao !== bo) return ao - bo;
      return a.path.localeCompare(b.path);
    });
  }

  function homeCards(list) {
    return list.filter((card) => !card.family);
  }

  function grouped(list, { home = false } = {}) {
    const source = home ? homeCards(list) : list;
    const map = new Map();
    for (const key of GROUP_ORDER) map.set(key, []);
    for (const card of source) {
      if (!map.has(card.group)) map.set(card.group, []);
      map.get(card.group).push(card);
    }
    return [...map.entries()]
      .map(([group, items]) => [group, sortGroup(group, items)])
      .filter(([, items]) => items.length);
  }

  function familyLabel(family) {
    if (family === "Navigation") return "Navigation & disclosure";
    return family;
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

  function navLink(card, activePath) {
    const current = card.path === activePath;
    return `<a class="nav-link" href="${cardHref(card)}"${current ? ' aria-current="page"' : ""}>${card.name}</a>`;
  }

  function renderComponentsNav(items, activePath) {
    const families = new Map();
    for (const key of FAMILY_ORDER) families.set(key, { overview: null, children: [] });
    for (const card of items) {
      if (card.family) {
        if (!families.has(card.family)) families.set(card.family, { overview: null, children: [] });
        families.get(card.family).children.push(card);
        continue;
      }
      const key = FAMILY_ORDER.find((f) => card.name === f || card.name === familyLabel(f)) || card.name;
      if (!families.has(key)) families.set(key, { overview: null, children: [] });
      families.get(key).overview = card;
    }
    return [...families.entries()]
      .filter(([, pack]) => pack.overview || pack.children.length)
      .map(([family, pack]) => {
        const label = pack.overview ? navLink(pack.overview, activePath) : `<span class="nav-link nav-family">${familyLabel(family)}</span>`;
        const kids = pack.children
          .sort((a, b) => a.name.localeCompare(b.name))
          .map((card) => navLink(card, activePath))
          .join("");
        return `<div class="nav-family-block">${label}${kids ? `<div class="nav-children">${kids}</div>` : ""}</div>`;
      })
      .join("");
  }

  function renderNav(activePath) {
    const visible = cards.filter(matches);
    els.navCount.textContent = query
      ? `${visible.length} of ${cards.length} cards`
      : `${cards.length} cards`;

    els.navTree.innerHTML = grouped(visible).map(([group, items]) => {
      const meta = GROUP_META[group] || { label: group };
      const links = group === "Components"
        ? renderComponentsNav(items, activePath)
        : items.map((card) => navLink(card, activePath)).join("");
      return `<div class="nav-group"><span class="nav-group-label">${meta.label}</span>${links}</div>`;
    }).join("");
  }

  function renderHome() {
    const visible = cards.filter(matches);
    const guidelineCount = cards.filter((c) => c.path.startsWith("guidelines/")).length;
    const startCount = cards.filter((c) => c.group === "Start" || c.group === "Content").length;
    const familyCount = cards.filter((c) => c.group === "Components" && !c.family).length;
    const componentCount = cards.filter((c) => c.group === "Components" && c.family).length;
    const kitCount = cards.filter((c) => c.group === "Website" || c.group === "App").length;
    els.homeMeta.textContent = `${startCount} start & content notes · ${guidelineCount} guideline cards · ${familyCount} component families · ${componentCount} components · ${kitCount} kit cards`;

    const homeVisible = homeCards(visible);
    if (!homeVisible.length) {
      els.catalog.innerHTML = "";
      return;
    }

    els.catalog.innerHTML = grouped(visible, { home: true }).map(([group, items]) => {
      const meta = GROUP_META[group] || { label: group, blurb: "" };
      const tiles = items.map((card, i) => {
        const { w, h } = parseViewport(card);
        const metaLabel = card.kind === "doc" ? "Notes" : `${w} × ${h}`;
        return `<a class="card-link" href="${cardHref(card)}" style="--stagger:${i}">
          <div>
            <h3>${card.name}</h3>
            <p>${card.subtitle || ""}</p>
          </div>
          <span class="card-meta">${metaLabel}</span>
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

  function activeCard() {
    return cards.find((c) => c.path === parseHash()) || null;
  }

  function allowsRtl(card) {
    return !!(card && RTL_GROUPS.has(card.group));
  }

  function frameDir(card) {
    return allowsRtl(card) && dir === "rtl" ? "rtl" : "ltr";
  }

  function syncDirChrome(card) {
    const on = allowsRtl(card);
    const toggle = document.querySelector(".dir-toggle");
    if (toggle) toggle.hidden = !on;
    document.querySelectorAll("[data-dir]").forEach((btn) => {
      btn.setAttribute("aria-pressed", String(btn.dataset.dir === dir));
      btn.disabled = !on;
    });
  }

  function applyDir() {
    const card = activeCard();
    const next = frameDir(card);
    syncDirChrome(card);
    const doc = els.frame.contentDocument;
    if (!doc || !doc.documentElement) return;
    doc.documentElement.dir = next;
    doc.documentElement.lang = next === "rtl" ? "ar" : "en";
    if (next === "rtl") doc.documentElement.setAttribute("data-rtl-fixture", "1");
    else doc.documentElement.removeAttribute("data-rtl-fixture");
    if (doc.body) {
      doc.body.dir = next;
      doc.body.lang = next === "rtl" ? "ar" : "en";
    }
    const win = doc.defaultView;
    if (win) win.dispatchEvent(new CustomEvent("shantara:dir", { detail: { dir: next } }));
  }

  function setDir(next) {
    dir = next === "rtl" ? "rtl" : "ltr";
    try { localStorage.setItem("shantara-dir", dir); } catch (err) { /* private mode */ }
    applyDir();
  }

  function fitFrame(card) {
    if (card.kind === "doc") {
      els.frameWrap.style.width = "100%";
      els.frameWrap.style.height = "100%";
      els.frameWrap.style.transform = "none";
      els.frameWrap.style.marginBottom = "0";
      els.frame.removeAttribute("width");
      els.frame.removeAttribute("height");
      return;
    }
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
    els.body.dataset.kind = "";
    els.home.hidden = false;
    els.viewer.hidden = true;
    els.empty.hidden = cards.filter(matches).length > 0;
    els.frame.removeAttribute("src");
    document.title = "Shantara design system";
    renderNav("");
    renderHome();
    syncDirChrome(null);
  }

  function showCard(card) {
    const { w, h } = parseViewport(card);
    const meta = GROUP_META[card.group] || { label: card.group };
    els.body.dataset.view = "viewer";
    els.body.dataset.kind = card.kind || "card";
    els.home.hidden = true;
    els.viewer.hidden = false;
    els.empty.hidden = true;
    els.viewGroup.textContent = meta.label;
    els.viewName.textContent = card.name;
    els.viewSub.textContent = card.subtitle || "";
    const openLabel = card.kind === "doc"
      ? "Open note"
      : card.group === "Website" || card.group === "App"
        ? "Open kit"
        : "Open full page";
    els.viewOpens.forEach((link) => {
      link.href = card.path;
      link.textContent = openLabel;
    });
    els.viewSize.textContent = card.kind === "doc" ? "Document" : `${w} × ${h}`;
    els.frame.title = card.name;
    if (els.frame.getAttribute("src") !== card.path) els.frame.src = card.path;
    else applyDir();
    document.title = `${card.name} · Shantara design system`;
    renderNav(card.path);
    requestAnimationFrame(() => {
      fitFrame(card);
      applyDir();
    });
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
      kind: card.kind || (card.viewport === "doc" ? "doc" : "card"),
      family: card.family || "",
    }));
    const fromTemplates = (manifest.templates || []).map((tpl) => ({
      path: tpl.entryPath,
      group: "Templates",
      name: tpl.name,
      subtitle: tpl.description,
      viewport: "1280x720",
    }));
    const copyCard = fromCards.find((card) => card.path === "docs/website-copy.html");
    const brandCopy = copyCard
      ? [{
          ...copyCard,
          group: "Brand",
          name: "Voice & copywriting",
          subtitle: "Clarity first, warmth second, brand expression third",
        }]
      : [];
    return [...fromCards, ...brandCopy, ...fromTemplates];
  }

  document.querySelectorAll("[data-dir]").forEach((btn) => {
    btn.addEventListener("click", () => setDir(btn.dataset.dir));
  });
  els.frame.addEventListener("load", applyDir);
  syncDirChrome(null);

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
