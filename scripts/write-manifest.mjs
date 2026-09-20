import { readFileSync, writeFileSync, readdirSync, existsSync } from "node:fs";
import { dirname, join, relative, sep } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const manifestPath = join(root, "_ds_manifest.json");

const FAMILY_LABEL = {
  core: "Core",
  forms: "Forms",
  navigation: "Navigation",
  feedback: "Feedback",
};

function walk(dir, out = []) {
  if (!existsSync(dir)) return out;
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const full = join(dir, entry.name);
    if (entry.isDirectory()) walk(full, out);
    else out.push(full);
  }
  return out;
}

function parseAttrs(raw) {
  const attrs = {};
  const re = /(\w+)="([^"]*)"/g;
  let match;
  while ((match = re.exec(raw))) attrs[match[1]] = match[2];
  return attrs;
}

function toPosix(path) {
  return path.split(sep).join("/");
}

function collectDsCards() {
  const roots = ["guidelines", "docs", "ui_kits", "components"].map((d) => join(root, d));
  const files = roots.flatMap((dir) => walk(dir)).filter((f) => {
    const rel = toPosix(relative(root, f));
    const parts = rel.split("/");
    if (rel.endsWith(".card.html")) return true;
    if (rel.endsWith("index.html") && rel.startsWith("ui_kits/")) return true;
    if (parts[0] === "docs" && parts.length === 2 && rel.endsWith(".html")) {
      const name = parts[1];
      return name !== "notes.html" && name !== "component.html" && !name.startsWith("accessibility-contract");
    }
    if (parts[0] === "guidelines" && parts.length === 2 && rel.endsWith(".html") && !parts[1].startsWith("_")) return true;
    return false;
  });

  const cards = [];
  for (const file of files) {
    const text = readFileSync(file, "utf8");
    const match = /<!--\s*@dsCard\s+([^>]+?)-->/.exec(text);
    if (!match) continue;
    const attrs = parseAttrs(match[1]);
    if (!attrs.group || !attrs.name) continue;
    const path = toPosix(relative(root, file));
    const card = {
      path,
      group: attrs.group,
      viewport: attrs.viewport || "960x600",
      subtitle: attrs.subtitle || "",
      name: attrs.name,
    };
    if (attrs.kind) card.kind = attrs.kind;
    else if (attrs.viewport === "doc") card.kind = "doc";
    cards.push(card);
  }
  return cards;
}

function firstSentence(text) {
  const body = String(text).replace(/^---[\s\S]*?---\s*/, "").trim();
  const line = body.split(/\n/).find((l) => l.trim() && !l.trim().startsWith("```")) || "";
  return line.replace(/\s+/g, " ").trim().slice(0, 140);
}

function collectComponentPages() {
  const componentsDir = join(root, "components");
  const prompts = walk(componentsDir).filter((f) => f.endsWith(".prompt.md"));
  return prompts.map((file) => {
    const rel = toPosix(relative(root, file));
    const parts = rel.split("/");
    const folder = parts[1];
    const name = parts[2].replace(/\.prompt\.md$/, "");
    const family = FAMILY_LABEL[folder] || folder;
    const subtitle = firstSentence(readFileSync(file, "utf8"));
    return {
      path: `docs/component?c=${name}`,
      group: "Components",
      family,
      kind: "doc",
      viewport: "doc",
      name,
      subtitle,
    };
  });
}

function sortCards(cards) {
  const groupOrder = ["Start", "Brand", "Foundations", "Components", "Website", "App", "Templates", "Content"];
  return [...cards].sort((a, b) => {
    const ag = groupOrder.indexOf(a.group);
    const bg = groupOrder.indexOf(b.group);
    if (ag !== bg) return (ag === -1 ? 99 : ag) - (bg === -1 ? 99 : bg);
    return a.path.localeCompare(b.path);
  });
}

const existing = JSON.parse(readFileSync(manifestPath, "utf8"));
const scanned = collectDsCards();
const componentPages = collectComponentPages();
const cards = sortCards([...scanned, ...componentPages]);

const next = {
  ...existing,
  cards,
  templates: existing.templates || [],
  components: existing.components || [],
  tokens: existing.tokens || [],
  fonts: existing.fonts || [],
  brandFonts: existing.brandFonts || [],
  themes: existing.themes || [],
  startingPoints: existing.startingPoints || [],
  globalCssPaths: existing.globalCssPaths || [],
  hasThumbnailHtml: existing.hasThumbnailHtml,
  source: existing.source,
};

writeFileSync(manifestPath, JSON.stringify(next) + "\n");
console.log(`Wrote ${cards.length} cards (${scanned.length} @dsCard, ${componentPages.length} component pages) → _ds_manifest.json`);
