(() => {
  function escapeHtml(value) {
    return String(value)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function inline(text) {
    let out = escapeHtml(text);
    out = out.replace(/`([^`]+)`/g, "<code>$1</code>");
    out = out.replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>");
    out = out.replace(/(^|[\s(])\*([^*\n]+)\*(?=[\s).,;:!?]|$)/g, "$1<em>$2</em>");
    out = out.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2">$1</a>');
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
    ["Technical", "website-technical.html"],
    ["QA", "website-qa.html"],
  ];

  const KIT_MD_HREF = {
    "skill-ia.md": "website-ia.html",
    "skill-sections.md": "website-sections.html",
    "skill-content.md": "website-content.html",
    "skill-technical.md": "website-technical.html",
    "skill-qa.md": "website-qa.html",
    "SKILL.md": "website-skill.html",
    "README.md": "website-kit.html",
  };

  function rewriteKitLinks(el, sourcePath) {
    const fromWebsite = /ui_kits\/website\//.test(String(sourcePath || ""));
    el.querySelectorAll("a[href]").forEach((a) => {
      const href = a.getAttribute("href") || "";
      if (/^https?:/i.test(href) || href.startsWith("#")) return;
      const file = href.replace(/^\.\//, "").split("/").pop();
      const next = KIT_MD_HREF[file];
      if (!next) return;
      const bare = !href.includes("/") || href.startsWith("./");
      if (!bare) return;
      if ((file === "SKILL.md" || file === "README.md") && !fromWebsite) return;
      a.setAttribute("href", next);
    });
  }

  function currentKitPage() {
    const fromId = document.querySelector("article[id^='website-']")?.id;
    if (fromId) return `${fromId}.html`;
    const file = decodeURIComponent(location.pathname || "").split("/").pop() || "";
    return file.split("?")[0];
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

    const toc = document.querySelector("[data-toc]");
    if (toc) {
      const heads = [...el.querySelectorAll("h2")];
      const wide = window.matchMedia("(min-width: 960px)");
      toc.innerHTML = `<details class="ds-toc-box"${wide.matches ? " open" : ""}><summary class="shantara-eyebrow">Contents</summary><ol class="ds-toc-list">${heads.map((heading) => {
        const raw = heading.textContent.trim();
        const num = /^(\d+)\.\s+(.*)$/.exec(raw);
        const label = num ? num[2] : raw;
        const index = num ? `<span class="ds-toc-n">${String(num[1]).padStart(2, "0")}</span>` : "";
        return `<li><a href="#${heading.id}">${index}<span>${escapeHtml(label)}</span></a></li>`;
      }).join("")}</ol></details>`;
      wide.addEventListener("change", () => {
        const box = toc.querySelector(".ds-toc-box");
        if (box) box.open = wide.matches;
      });

      const links = [...toc.querySelectorAll("a")];
      const map = new Map(heads.map((heading, idx) => [heading, links[idx]]));
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
