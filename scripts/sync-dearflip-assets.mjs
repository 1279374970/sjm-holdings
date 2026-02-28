import { access, cp, mkdir, rm } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const currentFile = fileURLToPath(import.meta.url);
const scriptsDir = path.dirname(currentFile);
const rootDir = path.resolve(scriptsDir, "..");

const sourceDir = path.join(
  rootDir,
  "node_modules",
  "@dearhive",
  "dearflip-jquery-flipbook",
  "dflip",
);
const targetDir = path.join(rootDir, "public", "vendor", "dearflip");

try {
  await access(sourceDir);
} catch {
  console.error("Cannot find DearFlip package files.");
  console.error(
    "Run `pnpm add @dearhive/dearflip-jquery-flipbook` first, then rerun this script.",
  );
  process.exit(1);
}

await rm(targetDir, { recursive: true, force: true });
await mkdir(path.dirname(targetDir), { recursive: true });
await cp(sourceDir, targetDir, { recursive: true });

console.log(`DearFlip assets synced to ${targetDir}`);
