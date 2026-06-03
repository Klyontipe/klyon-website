export type BeforeAfterFlow = {
  title: string;
  before: { label: string; items: string[] };
  after: { label: string; items: string[] };
  source?: string;
};

export const beforeAfterFlows: Record<string, BeforeAfterFlow> = {
  ia: {
    title: "Passer du test isolé à un usage cadré",
    before: {
      label: "Avant",
      items: [
        "Chaque collaborateur utilise ChatGPT à sa manière",
        "Aucune règle sur les données sensibles",
        "Peu de gain réel sur les tâches répétitives",
      ],
    },
    after: {
      label: "Après",
      items: [
        "Usages identifiés et documentés par métier",
        "Assistants ou GPT adaptés aux vrais cas d'usage",
        "Équipes formées aux bons réflexes",
      ],
    },
    source: "Retour observé sur des missions IA et formation en entreprise.",
  },
  automatisations: {
    title: "Shopify → CRM : de la ressaisie au flux automatique",
    before: {
      label: "Avant",
      items: [
        "Commandes Shopify ressaisies à la main",
        "Erreurs et délais sur chaque commande",
        "CRM toujours en retard sur la réalité",
      ],
    },
    after: {
      label: "Après",
      items: [
        "Webhooks et traitement en temps réel",
        "Validation métier avant intégration CRM",
        "Flux fiable, sans double saisie",
      ],
    },
    source: "Projet livré — voir la fiche Intégration Shopify – CRM sur-mesure.",
  },
  developpement: {
    title: "Faire circuler l'information entre vos outils",
    before: {
      label: "Avant",
      items: [
        "Site, tableur et base ne se parlent pas",
        "Ressaisie manuelle entre chaque outil",
        "Données incohérentes ou en retard",
      ],
    },
    after: {
      label: "Après",
      items: [
        "Interface ou API qui relie les briques",
        "Données synchronisées automatiquement",
        "Outil exploitable et évolutif",
      ],
    },
    source: "Logique appliquée sur plusieurs projets web et back-end.",
  },
  infrastructure: {
    title: "Du stockage éparpillé à une base fiable",
    before: {
      label: "Avant",
      items: [
        "Fichiers dispersés sur plusieurs postes",
        "Pas de sauvegarde centralisée",
        "Accès distant fragile ou inexistant",
      ],
    },
    after: {
      label: "Après",
      items: [
        "NAS avec redondance et dossiers structurés",
        "Synchronisation des postes de travail",
        "Sauvegardes et accès à distance testés",
      ],
    },
    source: "Pack KlySync et missions NAS déjà menées.",
  },
  servicesInfo: {
    title: "D'un poste bloquant à une machine prête à l'emploi",
    before: {
      label: "Avant",
      items: [
        "PC lent, OS instable ou mal configuré",
        "Logiciels manquants ou mal installés",
        "Perte de temps au quotidien",
      ],
    },
    after: {
      label: "Après",
      items: [
        "Poste monté ou remis à niveau proprement",
        "Configuration adaptée à l'usage réel",
        "Support disponible après livraison",
      ],
    },
    source: "Interventions support et montage PC récurrentes.",
  },
};
