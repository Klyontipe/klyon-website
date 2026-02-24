# Structure Site KLYON - Version PREMIUM

## Sitemap

```
/
├── / (Home - Landing)
├── /services (Services détaillés)
├── /realisations (Réalisations / Case Studies)
└── /contact (Contact + Mentions légales)
```

## Wireframe Textuel

### Page Home (/)

**Hero Section**
- Titre : "KLYON — Logiciels sur mesure & automatisation"
- Sous-texte : "Gain de temps • Fiabilité • Process optimisés • Intégration complète"
- 2 CTA : "Discuter d'une mission" (scroll vers contact) + "Voir mes services" (lien /services)
- Bandeau preuves : "Mission courte ou longue • Autonome ou renfort • Livraison production"

**Section Services (4 cartes max)**
1. Développement logiciel sur mesure (web/desktop)
2. Automatisation & intégrations (API/BDD/ERP/CRM)
3. IA appliquée (extraction, classification, workflow, assistances internes)
4. Systèmes / réseau / téléphonie (support expert)

**Section Approche**
- Découverte → Spécifications → Build → Déploiement → Suivi
- Process visuel minimaliste (timeline horizontale)

**Section Cas d'usage**
- Exemples concrets :
  - Traitement PDF → commande/facturation
  - Outils internes
  - Intégrations API/BDD
  - Optimisation process

**Section À propos**
- Court texte positionnement confirmé (pas étudiant)
- Focus : consultant informatique / ingénieur logiciel confirmé
- Expérience : 32+ projets, 2.5 ans d'IA

**Section FAQ (4-6 questions)**
- Types de missions acceptées
- Délais de livraison
- Tarification
- Zone d'intervention
- Technologies utilisées
- Support après livraison

**Section Contact (formulaire intégré)**
- Formulaire avec validation
- Téléphone, email, LinkedIn
- Message de succès

---

### Page Services (/services)

**4 Services détaillés :**

1. **Développement logiciel sur mesure**
   - Web applications
   - Desktop si pertinent
   - Technologies : React/Next.js, Python, etc.

2. **Automatisation & intégrations**
   - API/BDD/ERP/CRM
   - Exemples concrets

3. **IA appliquée**
   - Extraction, classification
   - Workflow automatisés
   - Assistances internes

4. **Systèmes / réseau / téléphonie**
   - Positionné "support expert"
   - Pas de dépannage bas de gamme

---

### Page Réalisations (/realisations)

**3 à 6 Case Studies :**
- Format : Problème → Solution → Techno → Résultat
- Anonymisés mais avec bénéfices concrets
- Exemples à utiliser :
  - AutoProposal (automatisation PDF)
  - Intégration Shopify-CRM
  - Optimisation PostgreSQL (30s → 0.2s)
  - Formation IA / GPT personnalisés
  - App Mobile React Native
  - Interface gestion produits réseau

---

### Page Contact (/contact)

**Formulaire de contact**
- Champs : Nom, Email, Téléphone, Entreprise, Sujet, Message
- Validation avec zod + react-hook-form
- Envoi via API route
- Message de succès
- Fallback mailto si pas de backend

**Informations**
- Téléphone : 07 66 98 03 42
- Email : klyonme@gmail.com
- LinkedIn : linkedin.com/in/zl3/
- Zone : Bouches-du-Rhône

**Mentions légales**
- Lien vers page mentions légales
- Politique de confidentialité

---

## Design System

### Palette Couleurs
- Neutres : Noir (#000000), Blanc (#FFFFFF), Gris (#1F1F1F, #2F2F2F, #4F4F4F, #6F6F6F)
- Accent unique : Bleu nuit (#1E3A5F) OU Vert profond (#1B4332)
- Pas de gradients agressifs
- Contraste élevé pour accessibilité

### Typographie
- Headings : Inter ou Geist (sans-serif élégant)
- Body : Inter (lisible, professionnel)
- Tailles : Hiérarchie claire, beaucoup d'espace

### Espacements
- Marges généreuses
- Padding confortable
- Sections bien espacées

### Animations
- Framer Motion très discrètes
- Fade/slide 8-12px max
- Durations courtes (200-400ms)
- Pas d'animations flashy

---

## Composants Réutilisables

1. **Header** (sticky)
   - Logo KLYON
   - Navigation : Home, Services, Réalisations, Contact
   - CTA "Discuter d'une mission"

2. **Footer** (minimal)
   - Liens : Services, Réalisations, Contact
   - Mentions légales
   - Politique confidentialité
   - Copyright

3. **CTA**
   - Bouton principal
   - Variantes : primary, secondary

4. **ServiceCard**
   - Icône
   - Titre
   - Description
   - Lien vers détails

5. **CaseStudyCard**
   - Titre
   - Problème
   - Solution
   - Technologies
   - Résultat

6. **FAQ**
   - Accordéon
   - Questions/réponses

7. **ContactForm**
   - Champs validés
   - Message succès/erreur

---

## SEO & Performance

- Metadata complète (title, description, keywords)
- OpenGraph (og:title, og:description, og:image)
- Sitemap.xml
- Robots.txt
- Schema.org (LocalBusiness, Service, etc.)
- Lighthouse 90+ (performance, accessibility, SEO, best practices)

---

## Contenu Véridique à Conserver

### Services
- IA : Formation ChatGPT, assistants IA, automatisation
- Développement : Web, React Native, APIs Python, PostgreSQL
- Systèmes : Réparation smartphones, upgrade PC, montres connectées, installation logiciels

### Projets Réels
- AutoProposal (automatisation PDF)
- Intégration Shopify-CRM
- Optimisation PostgreSQL (30s → 0.2s)
- Formation IA / GPT personnalisés
- App Mobile React Native
- Interface gestion produits réseau

### Informations Contact
- Email : klyonme@gmail.com
- Téléphone : 07 66 98 03 42
- LinkedIn : linkedin.com/in/zl3/
- Zone : Bouches-du-Rhône

### Statistiques
- 32+ projets réalisés
- 100% clients satisfaits
- 2.5 ans d'expérience IA
- 6 mois garantie réparations

---

## Repositionnement

### À ÉVITER
- ❌ "Étudiant en fin de cursus"
- ❌ "Je cherche un CDI"
- ❌ Ton trop jeune/informel
- ❌ Design "startup vibe" criard

### À METTRE EN AVANT
- ✅ Consultant informatique confirmé
- ✅ Ingénieur logiciel expérimenté
- ✅ Missions (courtes ou longues)
- ✅ Autonome ou renfort d'équipe
- ✅ Résolution de problèmes complexes
- ✅ Fiabilité et professionnalisme
- ✅ Ton sérieux, haut de gamme, minimaliste
- ✅ Orienté résultats
