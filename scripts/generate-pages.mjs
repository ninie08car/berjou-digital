import { readFileSync, writeFileSync, mkdirSync } from "node:fs";

import { join } from "node:path";

const domaine = "https://berjoudigital.fr";

// Récupération du HTML généré par Vite
const modele = readFileSync("dist/index.html", "utf8");

// Informations SEO pour chaque page
const pages = [
  {
    path: "/",
    title: "Création de sites internet à Agen 47 | BerjouDigital",
    description:
      "BerjouDigital crée des sites internet professionnels pour les artisans, commerçants et petites entreprises à Agen et dans le Lot-et-Garonne.",
  },
  {
    path: "/services/",
    title: "Création de sites vitrines et SEO | BerjouDigital",
    description:
      "Découvrez nos services de création de sites vitrines, de référencement local et d'accompagnement web pour développer votre activité.",
  },
  {
    path: "/modeles/",
    title: "Modèles de sites internet | BerjouDigital",
    description:
      "Découvrez des modèles de sites internet adaptés aux artisans, commerçants et associations. Inspirez-vous pour votre futur site web.",
  },
  {
    path: "/devis/",
    title: "Devis de création de site internet | BerjouDigital",
    description:
      "Demandez un devis pour la création de votre site internet professionnel. BerjouDigital vous accompagne dans votre projet web.",
  },
  {
    path: "/contact/",
    title: "Contacter BerjouDigital | Développeuse web",
    description:
      "Contactez BerjouDigital pour discuter de votre projet de site internet, de référencement local ou de développement web.",
  },
  {
    path: "/mentions-legales/",
    title: "Mentions légales | BerjouDigital",
    description: "Consultez les mentions légales du site BerjouDigital.",
  },
  {
    path: "/politiques/",
    title: "Politique de confidentialité | BerjouDigital",
    description:
      "Découvrez comment BerjouDigital traite et protège les données personnelles des visiteurs de son site.",
  },
];

// Protection des caractères spéciaux dans le HTML
function escapeHtml(value) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll('"', "&quot;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");
}

// Génération des fichiers HTML
for (const page of pages) {
  const url = `${domaine}${page.path}`;

  let html = modele
    .replace(
      /<title>[\s\S]*?<\/title>/i,
      `<title>${escapeHtml(page.title)}</title>`,
    )
    .replace(
      /<meta\s+name=["']description["'][^>]*>/i,
      `<meta name="description" content="${escapeHtml(page.description)}" />`,
    )
    .replace(/<link\s+rel=["']canonical["'][^>]*>/gi, "")
    .replace(/<\/head>/i, `  <link rel="canonical" href="${url}" />\n</head>`);

  const dossier = page.path === "/" ? "dist" : join("dist", page.path.slice(1));

  mkdirSync(dossier, { recursive: true });

  writeFileSync(join(dossier, "index.html"), html, "utf8");

  console.log(`SEO généré : ${page.path}`);
}

console.log("Toutes les pages SEO sont prêtes !");
