export type ProjectCategory =
  | "Web"
  | "IA"
  | "Base de données"
  | "Infrastructure"
  | "Support IT";

export type ProjectRecord = {
  id: number;
  slug: string;
  title: string;
  cat: ProjectCategory;
  client: string;
  year: number;
  context: string;
  solution: string;
  techs: string[];
  results: string[];
  teaser: string;
  featured?: boolean;
};

export const projects: ProjectRecord[] = [
  {
    id: 1,
    slug: "integration-shopify-crm",
    title: "Intégration Shopify – CRM sur-mesure",
    cat: "Web",
    client: "PME — e-commerce",
    year: 2026,
    context:
      "Synchronisation manuelle des commandes Shopify vers un CRM interne, source d'erreurs et de délais.",
    solution:
      "Intégration via webhooks JSON et traitement automatique des commandes en temps réel avec validation métier.",
    techs: ["Python", "Flask", "API REST", "Webhooks"],
    results: ["Synchro automatique", "Réduction des erreurs", "Mise en prod rapide"],
    teaser:
      "Flux Shopify → CRM automatisé pour fiabiliser les commandes et supprimer la ressaisie manuelle.",
    featured: true,
  },
  {
    id: 2,
    slug: "autoproposal-automatisation-pdf",
    title: "AutoProposal – Automatisation propositions commerciales",
    cat: "Web",
    client: "PME — distribution",
    year: 2024,
    context:
      "Saisie répétitive des propositions commerciales PDF dans le CRM, source d'erreurs et de perte de temps.",
    solution:
      "Interface web automatisant l'extraction PDF avec validation avant intégration CRM et extension vers la facturation.",
    techs: ["Python", "HTML/CSS", "JavaScript", "SQL", "PDF"],
    results: ["+80% gain de temps", "-95% d'erreurs", "V2 facturation fournisseurs"],
    teaser:
      "Lecture PDF, génération et intégration métier pour accélérer les propositions commerciales sans sacrifier le contrôle.",
  },
  {
    id: 3,
    slug: "gestion-stock-automatique",
    title: "Programme fonctionnel – Gestion stock auto",
    cat: "Web",
    client: "PME — logistique",
    year: 2025,
    context:
      "Gestion de stock chronophage avec risques d'erreurs et commandes fournisseurs mal anticipées.",
    solution:
      "Programme tournant 24/7 avec alertes, automatisations et optimisation de commandes.",
    techs: ["Python", "SQL", "Automatisation", "Monitoring"],
    results: ["24/7", "Alertes intelligentes", "Optimisation commandes"],
    teaser:
      "Outil métier connecté pour piloter les stocks, les alertes et les commandes sans friction.",
  },
  {
    id: 4,
    slug: "optimisation-postgresql-30s-02s",
    title: "Optimisation PostgreSQL – 30s à 0.2s",
    cat: "Base de données",
    client: "PME — services",
    year: 2025,
    context:
      "Reporting PostgreSQL trop lent, avec des rapports générés en 30 secondes et une productivité impactée.",
    solution:
      "Optimisation des requêtes, index composites et vues matérialisées adaptées aux vrais usages.",
    techs: ["PostgreSQL", "SQL", "Indexation"],
    results: ["30s → 0.2s", "Amélioration 99.3%", "Système réactif"],
    teaser:
      "Audit SQL, indexation et vues matérialisées pour transformer une base lente en base exploitable.",
  },
  {
    id: 5,
    slug: "chatgpt-entreprise-cas-usage",
    title: "ChatGPT en entreprise – 5 cas d'usage",
    cat: "IA",
    client: "PME — services",
    year: 2025,
    context:
      "Besoin d'industrialiser l'usage de ChatGPT dans plusieurs services sans bricolage.",
    solution:
      "Déploiement de cas d'usage concrets: support, génération de contenu, analyse et structuration des échanges.",
    techs: ["OpenAI API", "Python"],
    results: ["Service client auto", "+40% contenu", "Analyse clients"],
    teaser:
      "Des usages IA cadrés, utiles et directement exploitables côté entreprise.",
  },
  {
    id: 6,
    slug: "formation-ia-gpt-personnalises",
    title: "Formation IA – Création de GPT persos",
    cat: "IA",
    client: "PME — formation",
    year: 2026,
    context:
      "Montée en compétence des équipes sur les GPT personnalisés et les usages concrets de l'IA.",
    solution:
      "Formation complète avec cadrage des besoins et création de GPT métier dédiés.",
    techs: ["OpenAI API", "GPT Builder", "Prompt Engineering"],
    results: ["Équipes autonomes", "GPT spécialisés", "Workflows auto"],
    teaser:
      "Formation sur mesure pour passer de la découverte IA à des assistants métier réellement utilisés.",
  },
  {
    id: 7,
    slug: "formation-prompt-engineering",
    title: "Formation Prompt Engineering",
    cat: "IA",
    client: "PME — services",
    year: 2026,
    context:
      "Besoin de structurer l'usage avancé des prompts et de les intégrer dans les workflows existants.",
    solution:
      "Formation avancée sur les techniques de prompting et l'industrialisation des usages.",
    techs: ["Prompt Engineering", "ChatGPT"],
    results: ["Techniques avancées", "Intégration workflows"],
    teaser:
      "Montée en niveau sur les prompts pour obtenir des usages fiables, répétables et mesurables.",
  },
  {
    id: 8,
    slug: "interface-gestion-produits-reseau",
    title: "Interface gestion produits réseau",
    cat: "Web",
    client: "PME — retail",
    year: 2026,
    context:
      "Interface interne complexe à refondre pour redonner de la fluidité aux équipes.",
    solution:
      "Interface réseau sécurisée avec ajout produits et synchronisation de stock en temps réel.",
    techs: ["Python", "SQL", "Web"],
    results: ["Interface intuitive", "Ajout simplifié", "Stocks temps réel"],
    teaser:
      "Refonte d'une interface interne pour gagner en vitesse, lisibilité et fiabilité opérationnelle.",
  },
  {
    id: 9,
    slug: "ctf-cybersecurite",
    title: "Participation CTF – Cybersécurité",
    cat: "Infrastructure",
    client: "Communauté",
    year: 2024,
    context:
      "Participation à des compétitions CTF pour entretenir les compétences sécurité et la veille offensive.",
    solution:
      "Travail sur des sujets de crypto, reverse engineering et forensique.",
    techs: ["Crypto", "Reverse Engineering", "Forensique"],
    results: ["Challenges résolus", "Veille active"],
    teaser:
      "Veille active et entraînement sécurité pour garder une culture technique solide.",
  },
  {
    id: 10,
    slug: "outil-systeme-cpp-optimisation",
    title: "Outil système C++ – Optimisation perf",
    cat: "Web",
    client: "PME — industrie",
    year: 2024,
    context:
      "Outil système trop lent pour les besoins de production et de volume.",
    solution:
      "Optimisation algorithmique et parallélisation du traitement.",
    techs: ["C++", "Algorithmes", "Parallélisation"],
    results: ["+400% performance"],
    teaser:
      "Optimisation bas niveau pour redonner de la marge à un outil critique.",
  },
  {
    id: 11,
    slug: "configuration-dns-migration-domaine",
    title: "Configuration DNS – Migration domaine",
    cat: "Infrastructure",
    client: "PME — services",
    year: 2024,
    context:
      "Migration de domaine à réaliser sans interruption de service ni perte de disponibilité.",
    solution:
      "Pilotage DNS, SSL/TLS et supervision du basculement.",
    techs: ["DNS", "SSL/TLS"],
    results: ["Sans interruption", "Monitoring complet"],
    teaser:
      "Migration de domaine maîtrisée avec continuité de service.",
  },
  {
    id: 12,
    slug: "montage-pc-sur-mesure",
    title: "Montage PC sur-mesure",
    cat: "Support IT",
    client: "Particulier / PME",
    year: 2024,
    context:
      "Besoin d'une machine adaptée à des usages précis: gaming, création ou bureautique.",
    solution:
      "Sélection des composants, assemblage, tests et accompagnement à la mise en route.",
    techs: ["Hardware"],
    results: ["Performance optimale", "Garantie incluse"],
    teaser:
      "Montage et configuration de postes adaptés à l'usage réel, sans surcoût inutile.",
  },
  {
    id: 13,
    slug: "installation-os-windows-linux",
    title: "Installation OS – Windows & Linux",
    cat: "Support IT",
    client: "Pro / Particulier",
    year: 2024,
    context:
      "Installation propre et configuration complète d'un poste à remettre en service rapidement.",
    solution:
      "Configuration réseau, drivers, logiciels de base et prise en main.",
    techs: ["Windows", "Linux"],
    results: ["Config optimale", "Formation incluse"],
    teaser:
      "Installation propre, paramétrage et accompagnement pour remettre un poste au bon niveau.",
  },
  {
    id: 14,
    slug: "recuperation-donnees-mac-hdd",
    title: "Récupération données – Mac & HDD",
    cat: "Support IT",
    client: "Particulier",
    year: 2025,
    context:
      "Fichiers supprimés, partitions corrompues ou disques fatigués avec enjeu de récupération.",
    solution:
      "Récupération avancée et remise en place d'une sauvegarde plus fiable.",
    techs: ["Récupération", "Sauvegarde"],
    results: ["Données récupérées", "Sauvegardes fiables"],
    teaser:
      "Intervention orientée récupération et sécurisation après incident.",
  },
  {
    id: 15,
    slug: "serveur-vocal-automatise-klyon",
    title: "Serveur vocal automatisé Klyon",
    cat: "Infrastructure",
    client: "Klyon",
    year: 2026,
    context:
      "Créer une pile téléphonique auto-hébergée, fiable, avec routage horaire et messagerie vocale.",
    solution:
      "Déploiement FreePBX 17 et Asterisk 20, trunk SIP OVH, contextes de routage, MOH custom et notifications ntfy.sh.",
    techs: ["Debian 12", "FreePBX", "Asterisk", "PJSIP", "OVH", "ntfy.sh"],
    results: ["Routage horaire", "Messagerie vocale", "Notification instantanée"],
    teaser:
      "Premier serveur vocal Klyon avec trunk SIP, PBX open source et scénarios de réception sur mesure.",
    featured: true,
  },
  {
    id: 16,
    slug: "site-association-lysea",
    title: "Site, hébergement et maintenance Lysea",
    cat: "Web",
    client: "Association",
    year: 2026,
    context:
      "Accompagner une association sur son site vitrine, son hébergement et son suivi technique.",
    solution:
      "Conception du site, mise en ligne, hébergement et maintenance continue avec accompagnement.",
    techs: ["React", "Vite", "Hébergement", "Maintenance"],
    results: ["Site en ligne", "Suivi continu", "Partenariat officiel"],
    teaser:
      "Accompagnement technique global pour Lysea, du site à l'hébergement et à la maintenance.",
    featured: true,
  },
];

export const featuredProjects = projects.filter((project) => project.featured);
