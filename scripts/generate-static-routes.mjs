import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";

const siteUrl = "https://klyon.fr";
const distDir = path.resolve("dist");
const indexPath = path.join(distDir, "index.html");

const routes = [
  {
    path: "/",
    title: "Klyon — Agence informatique premium · IA, Dev & Support",
    description:
      "Klyon, agence informatique premium basée dans le Sud. IA, développement sur mesure, maintenance, support et automatisation pour entreprises, associations et collectivités.",
    robots: "index,follow",
  },
  {
    path: "/services",
    title: "Services numériques et informatiques — Klyon",
    description:
      "Développement, automatisations, services informatiques et infrastructure: Klyon regroupe ses services dans une offre claire et structurée.",
    robots: "index,follow",
  },
  {
    path: "/developpement",
    title: "Développement sur mesure — Klyon",
    description:
      "Sites web, applications mobiles, backend et outils métier sur mesure. Klyon développe des solutions fiables adaptées à vos besoins.",
    robots: "index,follow",
  },
  {
    path: "/automatisations",
    title: "Automatisations métier — Klyon",
    description:
      "Automatisations Zapier, N8N, Make et scripts Python sur mesure. Klyon met en place des workflows fiables pour réduire les tâches répétitives.",
    robots: "index,follow",
  },
  {
    path: "/services-info",
    title: "Services informatiques et maintenance — Klyon",
    description:
      "Support informatique, montage PC, installation systèmes et logiciels, maintenance et accompagnement technique avec Klyon.",
    robots: "index,follow",
  },
  {
    path: "/infrastructure",
    title: "Infrastructure, NAS et téléphonie — Klyon",
    description:
      "NAS, sauvegardes, synchronisation, infrastructure interne, DNS et téléphonie: Klyon conçoit et maintient des bases techniques fiables.",
    robots: "index,follow",
  },
  {
    path: "/realisations",
    title: "Réalisations, projets et avis clients — Klyon",
    description:
      "Les dernières réalisations Klyon, les projets archivés et les avis clients sont regroupés ici dans une page dédiée.",
    robots: "index,follow",
  },
  {
    path: "/devis",
    title: "Demander un devis — Klyon",
    description:
      "Demandez un devis Klyon pour un projet en IA, développement, automatisation, maintenance, formation ou support informatique.",
    robots: "index,follow",
  },
  {
    path: "/outils",
    title: "Outils et technologies maîtrisés — Klyon",
    description:
      "Tous les outils et technologies manipulés par Klyon, classés par thèmes: IA, développement, automatisation, Microsoft et infrastructure.",
    robots: "index,follow",
  },
  {
    path: "/ia",
    title: "Intelligence artificielle pour entreprises — Klyon",
    description:
      "Klyon conçoit des assistants IA, intègre ChatGPT, Claude, Gemini ou Copilot dans vos usages métier et forme vos équipes.",
    robots: "index,follow",
  },
  {
    path: "/a-propos",
    title: "À propos de Klyon — Lorenzo Fortini",
    description:
      "Klyon, c'est une approche directe, technique et suivie: un interlocuteur unique pour résoudre des besoins concrets en IA, développement, support et infrastructure.",
    robots: "index,follow",
  },
  {
    path: "/offres",
    title: "Offres Klyon — packs et bases tarifaires",
    description:
      "Découvrez les offres Klyon: KlySync, KlyGuard, journées d'intervention, formations sur mesure et solutions techniques sur devis.",
    robots: "index,follow",
  },
  {
    path: "/faq",
    title: "FAQ Klyon — questions fréquentes",
    description:
      "Délais, devis, déplacements, maintenance, automatisations, IA, services informatiques et infrastructure: les réponses aux questions fréquentes.",
    robots: "index,follow",
  },
  {
    path: "/formations",
    title: "Formations sur mesure — Klyon",
    description:
      "Formations sur mesure en IA, ChatGPT, Microsoft 365, SharePoint, Copilot et automatisation, en présentiel ou à distance.",
    robots: "index,follow",
  },
  {
    path: "/mentions-legales",
    title: "Mentions légales — Klyon",
    description:
      "Mentions légales du site Klyon: éditeur, responsable, SIRET, contact et informations générales.",
    robots: "index,follow",
  },
  {
    path: "/politique-confidentialite",
    title: "Politique de confidentialité — Klyon",
    description:
      "Politique de confidentialité du site Klyon: données collectées, finalités, conservation et contact pour exercer vos droits.",
    robots: "index,follow",
  },
  {
    path: "/realisations/integration-shopify-crm",
    title: "Intégration Shopify – CRM sur-mesure — Klyon",
    description:
      "Flux Shopify → CRM automatisé pour fiabiliser les commandes et supprimer la ressaisie manuelle.",
    robots: "index,follow",
  },
  {
    path: "/realisations/autoproposal-automatisation-pdf",
    title: "AutoProposal – Automatisation propales — Klyon",
    description:
      "Lecture PDF, génération et intégration métier pour accélérer les propales sans sacrifier le contrôle.",
    robots: "index,follow",
  },
  {
    path: "/realisations/gestion-stock-automatique",
    title: "Gestion stock automatique — Klyon",
    description:
      "Outil métier connecté pour piloter les stocks, les alertes et les commandes sans friction.",
    robots: "index,follow",
  },
  {
    path: "/realisations/optimisation-postgresql-30s-02s",
    title: "Optimisation PostgreSQL – 30s à 0.2s — Klyon",
    description:
      "Audit SQL, indexation et vues matérialisées pour transformer une base lente en base exploitable.",
    robots: "index,follow",
  },
  {
    path: "/realisations/chatgpt-entreprise-cas-usage",
    title: "ChatGPT en entreprise – cas d'usage — Klyon",
    description:
      "Des usages IA cadrés, utiles et directement exploitables côté entreprise.",
    robots: "index,follow",
  },
  {
    path: "/realisations/formation-ia-gpt-personnalises",
    title: "Formation IA – Création de GPT persos — Klyon",
    description:
      "Formation sur mesure pour passer de la découverte IA à des assistants métier réellement utilisés.",
    robots: "index,follow",
  },
  {
    path: "/realisations/formation-prompt-engineering",
    title: "Formation Prompt Engineering — Klyon",
    description:
      "Montée en niveau sur les prompts pour obtenir des usages fiables, répétables et mesurables.",
    robots: "index,follow",
  },
  {
    path: "/realisations/interface-gestion-produits-reseau",
    title: "Interface gestion produits réseau — Klyon",
    description:
      "Refonte d'une interface interne pour gagner en vitesse, lisibilité et fiabilité opérationnelle.",
    robots: "index,follow",
  },
  {
    path: "/realisations/ctf-cybersecurite",
    title: "CTF cybersécurité — Klyon",
    description:
      "Veille active et entraînement sécurité pour garder une culture technique solide.",
    robots: "index,follow",
  },
  {
    path: "/realisations/outil-systeme-cpp-optimisation",
    title: "Outil système C++ – Optimisation perf — Klyon",
    description:
      "Optimisation bas niveau pour redonner de la marge à un outil critique.",
    robots: "index,follow",
  },
  {
    path: "/realisations/configuration-dns-migration-domaine",
    title: "Configuration DNS – Migration domaine — Klyon",
    description:
      "Migration de domaine maîtrisée avec continuité de service.",
    robots: "index,follow",
  },
  {
    path: "/realisations/montage-pc-sur-mesure",
    title: "Montage PC sur-mesure — Klyon",
    description:
      "Montage et configuration de postes adaptés à l'usage réel, sans surcoût inutile.",
    robots: "index,follow",
  },
  {
    path: "/realisations/installation-os-windows-linux",
    title: "Installation OS – Windows & Linux — Klyon",
    description:
      "Installation propre, paramétrage et accompagnement pour remettre un poste au bon niveau.",
    robots: "index,follow",
  },
  {
    path: "/realisations/recuperation-donnees-mac-hdd",
    title: "Récupération données – Mac & HDD — Klyon",
    description:
      "Intervention orientée récupération et sécurisation après incident.",
    robots: "index,follow",
  },
  {
    path: "/realisations/serveur-vocal-automatise-klyon",
    title: "Serveur vocal automatisé Klyon — Klyon",
    description:
      "Premier serveur vocal Klyon avec trunk SIP, PBX open source et scénarios de réception sur mesure.",
    robots: "index,follow",
  },
  {
    path: "/realisations/site-association-lysea",
    title: "Site, hébergement et maintenance Lysea — Klyon",
    description:
      "Accompagnement technique global pour Lysea, du site à l'hébergement et à la maintenance.",
    robots: "index,follow",
  },
];

const escapeHtml = (value) =>
  value
    .replaceAll("&", "&amp;")
    .replaceAll('"', "&quot;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");

const replaceMeta = (html, route) => {
  const canonical = new URL(route.path, siteUrl).toString();
  const title = escapeHtml(route.title);
  const description = escapeHtml(route.description);

  return html
    .replace(/<title>.*?<\/title>/, `<title>${title}</title>`)
    .replace(/<meta name="description" content=".*?" \/>/, `<meta name="description" content="${description}" />`)
    .replace(/<meta name="robots" content=".*?" \/>/, `<meta name="robots" content="${route.robots}" />`)
    .replace(/<link rel="canonical" href=".*?" \/>/, `<link rel="canonical" href="${canonical}" />`)
    .replace(/<meta property="og:title" content=".*?" \/>/, `<meta property="og:title" content="${title}" />`)
    .replace(/<meta property="og:description" content=".*?" \/>/, `<meta property="og:description" content="${description}" />`)
    .replace(/<meta property="og:url" content=".*?" \/>/, `<meta property="og:url" content="${canonical}" />`)
    .replace(/<meta name="twitter:title" content=".*?" \/>/, `<meta name="twitter:title" content="${title}" />`)
    .replace(/<meta name="twitter:description" content=".*?" \/>/, `<meta name="twitter:description" content="${description}" />`);
};

const source = await readFile(indexPath, "utf8");

for (const route of routes) {
  if (route.path === "/") {
    await writeFile(indexPath, replaceMeta(source, route), "utf8");
    continue;
  }

  const targetDir = path.join(distDir, route.path.slice(1));
  await mkdir(targetDir, { recursive: true });
  await writeFile(path.join(targetDir, "index.html"), replaceMeta(source, route), "utf8");
}

await writeFile(
  path.join(distDir, "404.html"),
  replaceMeta(source, {
    path: "/404",
    title: "Page introuvable — Klyon",
    description: "La page demandée n'existe pas ou n'est plus disponible.",
    robots: "noindex,nofollow",
  }),
  "utf8",
);
