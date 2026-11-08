import { mkdirSync, copyFileSync } from "node:fs";
import { join } from "node:path";

const routes = [
  "services",
  "modeles",
  "devis",
  "contact",
  "mentions-legales",
  "politiques",
];

for (const route of routes) {
  const dossier = join("dist", route);

  mkdirSync(dossier, { recursive: true });

  copyFileSync(join("dist", "index.html"), join(dossier, "index.html"));

  console.log(`Page créée : /${route}/`);
}

console.log("Toutes les pages sont prêtes !");
