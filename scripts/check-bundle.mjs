/**
 * Fail if _ds_bundle.js still embeds kit-screen copy that contradicts the skills.
 * Bundle must stay components-only. Kit screens load via Babel from ui_kits/.
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const bundlePath = path.join(root, "_ds_bundle.js");

const FORBIDDEN = [
  "EnquiryScreen",
  "PROGRAMMES",
  "₹",
  "Begin an enquiry",
  "patients since 2000",
];

if (!fs.existsSync(bundlePath)) {
  console.error("check-bundle: missing _ds_bundle.js");
  process.exit(1);
}

const text = fs.readFileSync(bundlePath, "utf8");
const hits = FORBIDDEN.filter((marker) => text.includes(marker));

if (hits.length) {
  console.error("check-bundle: _ds_bundle.js still contains kit-screen markers:");
  for (const h of hits) console.error(`  - ${JSON.stringify(h)}`);
  console.error("Strip ui_kits screen blocks from the bundle (components only).");
  process.exit(1);
}

console.log("check-bundle: ok (components-only markers clear)");
