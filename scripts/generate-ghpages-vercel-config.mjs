import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const distDir = join(__dirname, "..", "dist");

mkdirSync(distDir, { recursive: true });

const config = {
  $schema: "https://openapi.vercel.sh/vercel.json",
  buildCommand: "echo 'Skip build: using prebuilt gh-pages artifacts'",
  installCommand: "echo 'Skip install'",
  outputDirectory: ".",
  rewrites: [{ source: "/(.*)", destination: "/index.html" }]
};

writeFileSync(join(distDir, "vercel.json"), JSON.stringify(config, null, 2) + "\n", "utf8");
console.log("✅ dist/vercel.json generated for gh-pages static deploy");
