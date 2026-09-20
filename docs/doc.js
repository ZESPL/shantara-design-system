(() => {
  function escapeHtml(value) {
    return String(value)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  const STATUS_LABELS = [
    "Seed terms requiring research",
    "Customer-data validated",
    "Clinically validated",
    "Agency validated",
    "Not researched",
    "In progress",
    "Hypothesis",
    "Provisional",
    "Experimental",
    "Secondary",
    "Validated",
    "Approved",
    "Core",
  ];

  const STATUS_RE = new RegExp("\\{(" + STATUS_LABELS.map((s) => s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")).join("|") + ")\\}", "g");

  function statusSlug(label) {
    return String(label).toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
  }

  function inline(text) {
    let out = escapeHtml(text);
    out = out.replace(/`([^`]+)`/g, "<code>$1</code>");
    out = out.replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>");
    out = out.replace(/(^|[\s(])\*([^*\n]+)\*(?=[\s).,;:!?]|$)/g, "$1<em>$2</em>");
    out = out.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2">$1</a>');
    out = out.replace(STATUS_RE, (_, label) => `<span class="ds-status" data-status="${statusSlug(label)}">${label}</span>`);
    return out;
  }

  function slugify(text) {
    return String(text)
      .toLowerCase()
      .replace(/['"]/g, "")
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "") || "section";
  }

  function headingId(text) {
    const numbered = /^(\d+)\.\s+/.exec(String(text).trim());
    return numbered ? `section-${numbered[1]}` : slugify(text);
  }

  function renderMarkdown(src) {
    const text = String(src).replace(/\r\n/g, "\n").replace(/^---\n[\s\S]*?\n---\n/, "");
    const fences = [];
    const body = text.replace(/```(\w*)\n([\s\S]*?)```/g, (_, lang, code) => {
      const i = fences.length;
      fences.push(`<pre><code class="lang-${escapeHtml(lang)}">${escapeHtml(code.replace(/\n$/, ""))}</code></pre>`);
      return `\n%%FENCE${i}%%\n`;
    });

    const lines = body.split("\n");
    const html = [];
    let i = 0;

    function flushPara(buf) {
      const joined = buf.join(" ").trim();
      if (!joined) {
        buf.length = 0;
        return;
      }
      const note = /\[TO CONFIRM/.test(joined);
      html.push(`<p${note ? ' class="note"' : ""}>${inline(joined)}</p>`);
      buf.length = 0;
    }

    while (i < lines.length) {
      const line = lines[i];

      if (/^%%FENCE\d+%%$/.test(line.trim())) {
        html.push(fences[Number(line.trim().slice(7, -2))]);
        i += 1;
        continue;
      }

      if (!line.trim()) {
        i += 1;
        continue;
      }

      if (/^---+$/.test(line.trim())) {
        html.push("<hr>");
        i += 1;
        continue;
      }

      const heading = /^(#{1,4})\s+(.*)$/.exec(line);
      if (heading) {
        const level = heading[1].length;
        const title = heading[2];
        html.push(`<h${level} id="${escapeHtml(headingId(title))}">${inline(title)}</h${level}>`);
        i += 1;
        continue;
      }

      if (/^>\s?/.test(line)) {
        const quote = [];
        while (i < lines.length && /^>\s?/.test(lines[i])) {
          quote.push(lines[i].replace(/^>\s?/, ""));
          i += 1;
        }
        html.push(`<blockquote>${inline(quote.join(" "))}</blockquote>`);
        continue;
      }

      if (/^\|/.test(line) && i + 1 < lines.length && /^\|\s*:?-/.test(lines[i + 1])) {
        const header = line.split("|").slice(1, -1).map((c) => c.trim());
        i += 2;
        const rows = [];
        while (i < lines.length && /^\|/.test(lines[i])) {
          rows.push(lines[i].split("|").slice(1, -1).map((c) => c.trim()));
          i += 1;
        }
        html.push("<table><thead><tr>" + header.map((c) => `<th>${inline(c)}</th>`).join("") + "</tr></thead><tbody>" +
          rows.map((r) => "<tr>" + r.map((c) => {
            const confirm = /\[TO CONFIRM/.test(c);
            return `<td${confirm ? ' class="is-confirm"' : ""}>${inline(c)}</td>`;
          }).join("") + "</tr>").join("") +
          "</tbody></table>");
        continue;
      }

      if (/^[-*]\s+/.test(line)) {
        html.push("<ul>");
        while (i < lines.length && /^[-*]\s+/.test(lines[i])) {
          html.push(`<li>${inline(lines[i].replace(/^[-*]\s+/, ""))}</li>`);
          i += 1;
        }
        html.push("</ul>");
        continue;
      }

      if (/^\d+\.\s+/.test(line)) {
        html.push("<ol>");
        while (i < lines.length && /^\d+\.\s+/.test(lines[i])) {
          html.push(`<li>${inline(lines[i].replace(/^\d+\.\s+/, ""))}</li>`);
          i += 1;
        }
        html.push("</ol>");
        continue;
      }

      const para = [];
      while (i < lines.length && lines[i].trim() && !/^(#{1,4}\s|[-*]\s|\d+\.\s|>\s?|\|)/.test(lines[i]) && !/^%%FENCE/.test(lines[i].trim())) {
        para.push(lines[i]);
        i += 1;
      }
      flushPara(para);
    }

    return html.join("\n");
  }

  const KIT_DOCS = [
    ["Notes", "website-kit.html"],
    ["Skill", "website-skill.html"],
    ["IA", "website-ia.html"],
    ["Sections", "website-sections.html"],
    ["Content", "website-content.html"],
    ["Copy", "website-copy.html"],
    ["Technical", "website-technical.html"],
    ["QA", "website-qa.html"],
    ["ICP", "icp.html"],
  ];

  const KIT_MD_HREF = {
    "skill-ia.md": "website-ia.html",
    "skill-sections.md": "website-sections.html",
    "skill-content.md": "website-content.html",
    "skill-copy.md": "website-copy.html",
    "skill-technical.md": "website-technical.html",
    "skill-qa.md": "website-qa.html",
    "SKILL.md": "website-skill.html",
    "README.md": "website-kit.html",
    "icp.md": "icp.html",
  };

  function rewriteKitLinks(el, sourcePath) {
    const fromWebsite = /ui_kits\/website\//.test(String(sourcePath || ""));
    el.querySelectorAll("a[href]").forEach((a) => {
      const href = a.getAttribute("href") || "";
      if (/^https?:/i.test(href) || href.startsWith("#")) return;
      const hashIndex = href.search(/[?#]/);
      const pathPart = hashIndex === -1 ? href : href.slice(0, hashIndex);
      const suffix = hashIndex === -1 ? "" : href.slice(hashIndex);
      const file = pathPart.replace(/^\.\//, "").split("/").pop();
      if (file === "icp.md" || file === "icp.html") {
        a.setAttribute("href", "icp.html" + suffix);
        return;
      }
      const next = KIT_MD_HREF[file];
      if (!next) return;
      if ((file === "SKILL.md" || file === "README.md") && !fromWebsite) return;
      a.setAttribute("href", next + suffix);
    });
  }

  function currentKitPage() {
    const fromId = document.querySelector("article[id^='website-']")?.id;
    if (fromId) return `${fromId}.html`;
    const file = decodeURIComponent(location.pathname || "").split("/").pop() || "";
    const bare = file.split("?")[0];
    if (!bare) return "";
    return bare.endsWith(".html") ? bare : `${bare}.html`;
  }

  function mountKitNav() {
    const page = currentKitPage();
    if (!KIT_DOCS.some(([, href]) => href === page)) return;
    const inner = document.querySelector(".ds-handbook-mast-inner");
    if (!inner || inner.querySelector("[data-kit-nav]")) return;
    const nav = document.createElement("nav");
    nav.className = "ds-handbook-meta";
    nav.setAttribute("data-kit-nav", "");
    nav.setAttribute("aria-label", "Website kit");
    nav.innerHTML = KIT_DOCS.map(([label, href]) => {
      const current = href === page;
      return `<a href="${href}"${current ? ' aria-current="page"' : ""}>${label}</a>`;
    }).join("");
    inner.appendChild(nav);
  }

  const TOC_GROUPS = {
    icp: [
      { label: "Using this system", from: 1, to: 6 },
      { label: "Audience profiles", from: 7, to: 13 },
      { label: "How to operate", from: 14, to: 26 },
    ],
    handbook: [
      { label: "Orientation", from: 1, to: 4 },
      { label: "Clinical", from: 5, to: 9 },
      { label: "The stay", from: 10, to: 13 },
      { label: "Operations", from: 14, to: 16 },
    ],
    "website-skill": [
      { label: "Foundations", from: 1, to: 5 },
      { label: "Site systems", from: 6, to: 10 },
      { label: "Workflow", from: 11, to: 15 },
    ],
    "website-kit": [
      { label: "Purpose", from: 1, to: 4 },
      { label: "Systems", from: 5, to: 9 },
      { label: "Using the kit", from: 10, to: 12 },
    ],
  };

  function parseTocHeading(heading) {
    if (heading && heading.dataset && heading.dataset.tocLabel) {
      return {
        section: heading.dataset.tocSection ? Number(heading.dataset.tocSection) : null,
        tocNum: heading.dataset.tocNum || "",
        label: heading.dataset.tocLabel,
      };
    }
    const raw = String(heading?.textContent ?? heading).trim();
    const numbered = /^(\d+)\.\s+(.*)$/.exec(raw);
    const section = numbered ? Number(numbered[1]) : null;
    const rest = numbered ? numbered[2] : raw;
    const icp = /^ICP\s+(\d+)\s+(.*)$/i.exec(rest);
    if (icp) {
      return { section, tocNum: String(icp[1]).padStart(2, "0"), label: icp[2] };
    }
    if (/short health reset/i.test(rest)) {
      return { section, tocNum: "SR", label: rest };
    }
    return {
      section,
      tocNum: section != null ? String(section).padStart(2, "0") : "",
      label: rest,
    };
  }

  function tocItemHtml(heading) {
    const parsed = parseTocHeading(heading);
    const target = heading.closest(".ds-icp-profile")?.id || heading.id;
    const num = parsed.tocNum ? `<span class="ds-toc-n">${escapeHtml(parsed.tocNum)}</span>` : "";
    return `<li><a href="#${target}" title="${escapeHtml(parsed.label)}">${num}<span>${escapeHtml(parsed.label)}</span></a></li>`;
  }

  function buildToc(toc, heads, articleId) {
    const wide = window.matchMedia("(min-width: 1100px)");
    const groups = TOC_GROUPS[articleId];
    let inner;
    if (groups) {
      inner = `<div class="ds-toc-groups">${groups.map((group) => {
        const grouped = heads.filter((heading) => {
          const n = parseTocHeading(heading).section;
          return n != null && n >= group.from && n <= group.to;
        });
        if (!grouped.length) return "";
        return `<details class="ds-toc-group" open><summary class="ds-toc-group-label">${escapeHtml(group.label)}</summary><ol class="ds-toc-list">${grouped.map(tocItemHtml).join("")}</ol></details>`;
      }).join("")}</div>`;
    } else {
      inner = `<ol class="ds-toc-list">${heads.map(tocItemHtml).join("")}</ol>`;
    }
    toc.innerHTML = `<details class="ds-toc-box"${wide.matches ? " open" : ""}><summary>On this page</summary>${inner}</details>`;
    wide.addEventListener("change", () => {
      const box = toc.querySelector(".ds-toc-box");
      if (box) box.open = wide.matches;
    });
  }

  function cellText(cell) {
    return (cell?.textContent || "").trim();
  }

  function moveChildren(from, to) {
    while (from.firstChild) to.appendChild(from.firstChild);
  }

  function restyleFlow(el) {
    el.querySelectorAll("pre").forEach((pre) => {
      const text = pre.textContent || "";
      if (!text.includes("→")) return;
      const steps = text.split("→").map((s) => s.trim()).filter(Boolean);
      if (steps.length < 2) return;
      const ol = document.createElement("ol");
      ol.className = "ds-flow";
      if (/programme\s*→\s*icp/i.test(text.replace(/\s+/g, " "))) ol.classList.add("is-wrong");
      steps.forEach((step) => {
        const li = document.createElement("li");
        li.innerHTML = `<span>${escapeHtml(step)}</span>`;
        ol.appendChild(li);
      });
      pre.replaceWith(ol);
    });
  }

  function restyleFunnel(el) {
    const heading = el.querySelector("#section-15");
    if (!heading) return;
    let node = heading.nextElementSibling;
    while (node && node.tagName !== "TABLE" && !(node.classList && node.classList.contains("ds-table-wrap"))) {
      node = node.nextElementSibling;
    }
    const table = node?.tagName === "TABLE" ? node : node?.querySelector("table");
    if (!table) return;
    const wrap = table.closest(".ds-table-wrap") || table;
    const ol = document.createElement("ol");
    ol.className = "ds-funnel";
    [...table.tBodies[0]?.rows || []].forEach((row, idx) => {
      const stage = (row.cells[0]?.innerHTML || "").replace(/^\d+\.\s+/, "");
      const li = document.createElement("li");
      li.innerHTML = `<span class="ds-funnel-n">${String(idx + 1).padStart(2, "0")}</span><div><h4>${stage}</h4><p>${row.cells[1]?.innerHTML || ""}</p><p>${row.cells[2]?.innerHTML || ""}</p></div>`;
      ol.appendChild(li);
    });
    wrap.replaceWith(ol);
  }

  function restyleLanguagePriority(el) {
    const tables = [...el.querySelectorAll("table")];
    const table = tables.find((t) => /Why it belongs/i.test(t.tHead?.textContent || ""));
    if (!table) return;
    const wrap = table.closest(".ds-table-wrap") || table;
    const ol = document.createElement("ol");
    ol.className = "ds-lang-priority";
    [...table.tBodies[0]?.rows || []].forEach((row) => {
      const li = document.createElement("li");
      const order = cellText(row.cells[0]).padStart(2, "0");
      const lang = row.cells[1]?.innerHTML || "";
      const code = row.cells[2]?.innerHTML || "";
      const why = row.cells[3]?.innerHTML || "";
      li.innerHTML = `<span class="ds-lang-n">${escapeHtml(order)}</span><div><h4>${lang} ${code}</h4><p>${why}</p></div>`;
      ol.appendChild(li);
    });
    wrap.replaceWith(ol);
  }

  function restyleWorkingArea(box) {
    const table = box.querySelector("table");
    if (!table) return;
    const dl = document.createElement("dl");
    dl.className = "ds-icp-workgrid";
    [...table.tBodies[0]?.rows || []].forEach((row) => {
      const item = document.createElement("div");
      const dt = document.createElement("dt");
      const dd = document.createElement("dd");
      dt.innerHTML = row.cells[0]?.innerHTML || "";
      const status = row.cells[1]?.innerHTML || "";
      const record = row.cells[2]?.innerHTML || "";
      dd.innerHTML = `${status}<span> · ${record}</span>`;
      item.append(dt, dd);
      dl.appendChild(item);
    });
    const wrap = table.closest(".ds-table-wrap") || table;
    wrap.replaceWith(dl);
  }

  function promoteProfileChrome(article) {
    const heading = article.querySelector("h2");
    const table = article.querySelector("table");
    if (!heading || !table) return;

    const meta = {};
    [...table.tBodies[0]?.rows || []].forEach((row) => {
      meta[cellText(row.cells[0]).toLowerCase()] = row.cells[1];
    });

    const head = document.createElement("header");
    head.className = "ds-icp-head";
    const kicker = document.createElement("p");
    kicker.className = "ds-icp-kicker";
    const idCell = meta.id;
    const crm = meta["crm key"];
    const bits = [];
    if (idCell) bits.push(`<span class="ds-icp-card-id">${idCell.innerHTML}</span>`);
    if (crm) bits.push(crm.innerHTML);
    if (article.dataset.icp && !idCell) bits.push(`<span class="ds-icp-card-id">${escapeHtml(article.dataset.icp)}</span>`);
    kicker.innerHTML = bits.join('<span aria-hidden="true"> · </span>');
    const chips = document.createElement("div");
    chips.className = "ds-icp-chips";
    ["strategic role", "validation"].forEach((key) => {
      if (meta[key]) moveChildren(meta[key], chips);
    });
    head.append(kicker, heading, chips);
    const parsedTitle = parseTocHeading(heading);
    heading.dataset.tocSection = parsedTitle.section != null ? String(parsedTitle.section) : "";
    heading.dataset.tocNum = parsedTitle.tocNum || "";
    heading.dataset.tocLabel = parsedTitle.label;
    heading.innerHTML = inline(parsedTitle.label);

    const thoughtCell = meta["internal thought"] || meta["typical duration"];
    if (thoughtCell) {
      const fig = document.createElement("figure");
      fig.className = "ds-icp-thought";
      const cap = document.createElement("figcaption");
      cap.textContent = meta["internal thought"] ? "Typical internal thought · not public copy" : "Stay length";
      const quote = document.createElement("blockquote");
      moveChildren(thoughtCell, quote);
      fig.append(cap, quote);
      head.appendChild(fig);
    }

    const wrap = table.closest(".ds-table-wrap") || table;
    wrap.remove();
    article.insertBefore(head, article.firstChild);

    const letters = [...article.querySelectorAll("h3")].filter((h) => /^[A-P]\.\s/.test(h.textContent.trim()));
    if (letters.length) {
      const nav = document.createElement("nav");
      nav.className = "ds-icp-letters";
      nav.setAttribute("aria-label", "Profile sections");
      nav.innerHTML = letters.map((h) => {
        const letter = h.textContent.trim()[0];
        return `<a href="#${h.id}" title="${escapeHtml(h.textContent.trim())}">${letter}</a>`;
      }).join("");
      head.after(nav);
    }

    const body = document.createElement("div");
    body.className = "ds-icp-body";
    const working = article.querySelector(".ds-icp-working");
    const nav = article.querySelector(".ds-icp-letters");
    [...article.children].forEach((node) => {
      if (node === head || node === nav || node === working) return;
      body.appendChild(node);
    });
    if (working) article.insertBefore(body, working);
    else article.appendChild(body);

    let section = null;
    [...body.children].forEach((node) => {
      if (node.tagName === "H3" && /^[A-P]\.\s/.test(node.textContent.trim())) {
        section = document.createElement("section");
        section.className = "ds-icp-section";
        const letter = node.textContent.trim()[0];
        node.innerHTML = `<span class="ds-icp-letter">${letter}</span><span>${inline(node.textContent.replace(/^[A-P]\.\s+/, ""))}</span>`;
        body.insertBefore(section, node);
        section.appendChild(node);
      } else if (section && node.tagName !== "H3") {
        section.appendChild(node);
      } else if (node.tagName === "H3" && /agency working/i.test(node.textContent || "")) {
        section = null;
      }
    });
  }

  function buildOverviewCards(el) {
    const heading = el.querySelector("#section-4");
    if (!heading) return;
    let wrap = heading.nextElementSibling;
    while (wrap && !wrap.querySelector?.("table") && wrap.tagName !== "TABLE") wrap = wrap.nextElementSibling;
    const table = wrap?.tagName === "TABLE" ? wrap : wrap?.querySelector("table");
    if (!table) return;
    const grid = document.createElement("div");
    grid.className = "ds-icp-index";
    [...table.tBodies[0]?.rows || []].forEach((row) => {
      const id = cellText(row.cells[0]);
      const name = cellText(row.cells[1]);
      const need = row.cells[2]?.innerHTML || "";
      const role = row.cells[4]?.innerHTML || "";
      const validation = row.cells[5]?.innerHTML || "";
      const profile = [...el.querySelectorAll(".ds-icp-profile")].find((article) => {
        const title = article.querySelector("h2")?.textContent || "";
        return title.includes(name) || (id.startsWith("ICP") && title.includes(id));
      });
      const href = profile?.id || profile?.querySelector("h2")?.id;
      const a = document.createElement("a");
      a.className = "ds-icp-card";
      a.dataset.role = /secondary/i.test(row.cells[4]?.textContent || "") ? "secondary" : "core";
      if (href) a.href = `#${href}`;
      a.innerHTML = `<div class="ds-icp-card-top"><span class="ds-icp-card-id">${escapeHtml(id === "—" ? "Secondary" : id)}</span></div><h3>${escapeHtml(name)}</h3><p>${need}</p><div class="ds-icp-card-chips">${role} ${validation}</div>`;
      grid.appendChild(a);
    });
    (wrap.classList?.contains("ds-table-wrap") ? wrap : table).replaceWith(grid);
  }

  function wrapIcpProfiles(el) {
    if (el.id !== "icp") return;
    const nodes = [...el.children];
    let bucket = [];

    function flush() {
      if (!bucket.length) return;
      const first = bucket[0];
      const title = first.textContent || "";
      const article = document.createElement("article");
      article.className = "ds-icp-profile";
      if (/^(\d+\.\s+)?ICP\s+01/i.test(title)) article.dataset.icp = "weight_metabolic";
      else if (/^(\d+\.\s+)?ICP\s+02/i.test(title)) article.dataset.icp = "pain_mobility";
      else if (/^(\d+\.\s+)?ICP\s+03/i.test(title)) article.dataset.icp = "stress_sleep_burnout";
      else if (/^(\d+\.\s+)?ICP\s+04/i.test(title)) article.dataset.icp = "digestive_inflammatory";
      else if (/^(\d+\.\s+)?ICP\s+05/i.test(title)) article.dataset.icp = "hormonal_vitality";
      else if (/^(\d+\.\s+)?ICP\s+06/i.test(title)) article.dataset.icp = "healthy_ageing_longevity";
      else if (/short health reset/i.test(title)) article.dataset.icp = "short_reset";
      article.dataset.role = article.dataset.icp === "short_reset" ? "secondary" : "core";
      if (article.dataset.icp) article.id = `icp-${article.dataset.icp}`;
      first.parentNode.insertBefore(article, first);
      bucket.forEach((node) => article.appendChild(node));

      const working = [...article.children].find((node) => node.tagName === "H3" && /agency working/i.test(node.textContent || ""));
      if (working) {
        const box = document.createElement("div");
        box.className = "ds-icp-working";
        const from = [...article.children].indexOf(working);
        const rest = [...article.children].slice(from);
        working.parentNode.insertBefore(box, working);
        rest.forEach((node) => box.appendChild(node));
        restyleWorkingArea(box);
      }
      promoteProfileChrome(article);
      bucket = [];
    }

    function isProfileHeading(node) {
      if (node.tagName !== "H2") return false;
      const t = node.textContent || "";
      return /^(\d+\.\s+)?ICP\s+\d+/i.test(t) || /short health reset/i.test(t);
    }

    for (const node of nodes) {
      if (isProfileHeading(node)) {
        flush();
        bucket = [node];
      } else if (bucket.length) {
        if (node.tagName === "H2") flush();
        else bucket.push(node);
      }
    }
    flush();
    restyleFlow(el);
    buildOverviewCards(el);
    restyleFunnel(el);
    restyleLanguagePriority(el);
  }

  function decorate(el) {
    const used = new Set();
    el.querySelectorAll("h1, h2, h3, h4").forEach((heading) => {
      if (!heading.id) heading.id = headingId(heading.textContent.trim());
      let id = heading.id;
      const base = id;
      let n = 2;
      while (used.has(id)) id = `${base}-${n++}`;
      used.add(id);
      heading.id = id;
    });

    el.querySelectorAll("p.note").forEach((p) => {
      p.innerHTML = p.innerHTML.replace(/^\[TO CONFIRM[^\]]*\]\s*/i, "");
    });

    el.querySelectorAll("li").forEach((node) => {
      if (/\[TO CONFIRM/.test(node.textContent)) node.classList.add("is-confirm");
    });

    el.querySelectorAll("table").forEach((table) => {
      if (table.parentElement?.classList.contains("ds-table-wrap")) return;
      const wrap = document.createElement("div");
      wrap.className = "ds-table-wrap";
      table.parentNode.insertBefore(wrap, table);
      wrap.appendChild(table);
      if (table.querySelectorAll("thead th").length === 2) table.classList.add("ds-table-pair");
    });

    wrapIcpProfiles(el);

    const toc = document.querySelector("[data-toc]");
    if (toc) {
      const heads = [...el.querySelectorAll("h2")];
      buildToc(toc, heads, el.id);

      const links = [...toc.querySelectorAll("a[href^='#']")];
      const map = new Map();
      heads.forEach((heading) => {
        const id = heading.closest(".ds-icp-profile")?.id || heading.id;
        const link = links.find((a) => a.getAttribute("href") === `#${id}`);
        if (link) map.set(heading, link);
      });
      const observer = new IntersectionObserver((entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (!visible.length) return;
        links.forEach((a) => a.removeAttribute("aria-current"));
        const link = map.get(visible[0].target);
        if (link) link.setAttribute("aria-current", "true");
      }, { rootMargin: "-18% 0px -70% 0px", threshold: 0 });
      heads.forEach((heading) => observer.observe(heading));
    }

    const countEl = document.querySelector("[data-confirm-count]");
    if (countEl) {
      const n = el.querySelectorAll(".note, .is-confirm").length;
      countEl.textContent = n ? `${n} items still to confirm` : "No open confirmations";
    }

    const id = decodeURIComponent(location.hash.replace(/^#/, ""));
    if (id) {
      const target = document.getElementById(id);
      if (target) requestAnimationFrame(() => target.scrollIntoView());
    }

    mountKitNav();
  }

  const NOTES = [
    ["Button", "../components/core/Button.prompt.md"],
    ["IconButton", "../components/core/IconButton.prompt.md"],
    ["Icon", "../components/core/Icon.prompt.md"],
    ["Logo", "../components/core/Logo.prompt.md"],
    ["Card", "../components/core/Card.prompt.md"],
    ["Badge", "../components/core/Badge.prompt.md"],
    ["Tag", "../components/core/Tag.prompt.md"],
    ["Divider", "../components/core/Divider.prompt.md"],
    ["PatternPanel", "../components/core/PatternPanel.prompt.md"],
    ["Input", "../components/forms/Input.prompt.md"],
    ["Textarea", "../components/forms/Textarea.prompt.md"],
    ["Select", "../components/forms/Select.prompt.md"],
    ["Checkbox", "../components/forms/Checkbox.prompt.md"],
    ["Radio", "../components/forms/Radio.prompt.md"],
    ["Switch", "../components/forms/Switch.prompt.md"],
    ["Tabs", "../components/navigation/Tabs.prompt.md"],
    ["Breadcrumbs", "../components/navigation/Breadcrumbs.prompt.md"],
    ["Accordion", "../components/navigation/Accordion.prompt.md"],
    ["Dialog", "../components/feedback/Dialog.prompt.md"],
    ["Toast", "../components/feedback/Toast.prompt.md"],
    ["Tooltip", "../components/feedback/Tooltip.prompt.md"],
    ["Spinner", "../components/feedback/Spinner.prompt.md"],
    ["Website kit", "../ui_kits/website/README.md"],
    ["Website skill", "../ui_kits/website/SKILL.md"],
    ["Website IA", "../ui_kits/website/skill-ia.md"],
    ["Website sections", "../ui_kits/website/skill-sections.md"],
    ["Website content", "../ui_kits/website/skill-content.md"],
    ["Website copy", "../ui_kits/website/skill-copy.md"],
    ["Website technical", "../ui_kits/website/skill-technical.md"],
    ["Website QA", "../ui_kits/website/skill-qa.md"],
    ["Guest app kit", "../ui_kits/app/README.md"],
  ];

  const SOURCE_PROBES = [
    "uploads/shantara_property_handbook.docx",
    "uploads/Shantara_Brand Guidelines HQ.pdf",
    "uploads/Primary Colors.jpg",
    "uploads/colors secondary.jpg",
    "uploads/accent colors.jpg",
    "uploads/Compressed/Frame 1.jpg",
    "uploads/Pattern Single Tile.png",
    "uploads/Pattern Seamless_SCALE ACCORDINGLY.png",
    "uploads/DiodrumCyrillic-Regular.ttf",
  ];

  async function probe(path) {
    try {
      const res = await fetch("../" + path, { method: "HEAD" });
      return res.ok;
    } catch {
      return false;
    }
  }

  async function fill(el) {
    const md = el.getAttribute("data-md");
    const notes = el.hasAttribute("data-notes");
    const sources = el.hasAttribute("data-sources");

    if (md) {
      const res = await fetch(md);
      if (!res.ok) throw new Error("Could not read " + md);
      el.innerHTML = renderMarkdown(await res.text());
      rewriteKitLinks(el, md);
      decorate(el);
      return;
    }

    if (notes) {
      const blocks = await Promise.all(NOTES.map(async ([name, path]) => {
        const res = await fetch(path);
        const body = res.ok ? renderMarkdown(await res.text()) : `<p class="err">Missing ${escapeHtml(path)}</p>`;
        return `<section class="prompt" id="${name.toLowerCase().replace(/\s+/g, "-")}"><p class="shantara-eyebrow">${escapeHtml(path.replace("../", ""))}</p><h2>${escapeHtml(name)}</h2>${body}</section>`;
      }));
      el.innerHTML = `<p class="shantara-eyebrow">Notes</p><h1>Component and kit notes</h1><p>Every <code>*.prompt.md</code> and both UI-kit READMEs, as shipped. These are the files an agent reads when this folder is added to another repo.</p>` + blocks.join("");
      el.querySelectorAll("section.prompt").forEach((section) => {
        if (section.id.startsWith("website-")) rewriteKitLinks(section, "ui_kits/website/");
      });
      decorate(el);
      return;
    }

    if (sources) {
      const res = await fetch("sources.md");
      if (!res.ok) throw new Error("Could not read sources.md");
      el.innerHTML = renderMarkdown(await res.text());
      const rows = await Promise.all(SOURCE_PROBES.map(async (path) => {
        const ok = await probe(path);
        return `<tr><td><code>${escapeHtml(path)}</code></td><td class="status" data-ok="${ok ? "1" : "0"}">${ok ? "On disk" : "Not in this copy"}</td>${ok ? `<td><a href="../${encodeURI(path)}">Open</a></td>` : "<td></td>"}</tr>`;
      }));
      el.insertAdjacentHTML("beforeend", `<h2 id="local-probe">Local probe</h2><p>Checked from this page. A public Netlify copy will show “Not in this copy” because <code>uploads/</code> is not published.</p><table><thead><tr><th>Path</th><th>Status</th><th></th></tr></thead><tbody>${rows.join("")}</tbody></table>`);
      decorate(el);
    }
  }

  mountKitNav();

  document.querySelectorAll("[data-md],[data-notes],[data-sources]").forEach((el) => {
    fill(el).catch((err) => {
      el.innerHTML = `<p class="err">${escapeHtml(err.message)}. Serve this folder over http.</p>`;
    });
  });
})();
