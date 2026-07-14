import { copyFile, mkdir } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const projectRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const webDir = path.join(projectRoot, "www");
const files = [
  "index.html",
  "styles.css",
  "app.js",
  "manifest.webmanifest",
  "icon.svg",
  "sw.js",
];

await mkdir(webDir, { recursive: true });

for (const file of files) {
  await copyFile(path.join(projectRoot, file), path.join(webDir, file));
}

console.log(`Synced ${files.length} web files to ${path.relative(projectRoot, webDir)}`);
