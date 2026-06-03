import { cpSync, readdirSync, rmSync } from "node:fs";
import { join } from "node:path";

const distDir = "dist";
const protectedEntries = new Set([
  ".git",
  ".github",
  "node_modules",
  "src",
  "scripts",
  "public",
  "index.dev.html",
  "package.json",
  "package-lock.json",
  "components.json",
  "eslint.config.js",
  "tsconfig.json",
  "tsconfig.app.json",
  "tsconfig.node.json",
  "vite.config.ts",
  "vitest.config.ts",
  "tailwind.config.ts",
  "postcss.config.js",
  "logolysea.png",
  "photopro1.jpg",
  "Untitled",
  ".gitignore",
]);

for (const entry of readdirSync(distDir)) {
  if (protectedEntries.has(entry)) continue;

  const destination = join(".", entry);
  rmSync(destination, { recursive: true, force: true });
  cpSync(join(distDir, entry), destination, { recursive: true });
}

console.log("Production build synced to repository root.");
