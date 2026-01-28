# KLYON — Site Premium

Site vitrine premium pour KLYON, consultant informatique confirmé spécialisé en développement logiciel sur mesure, automatisation de processus et intégration IA.

## 🚀 Technologies

- **Next.js 14** (App Router)
- **TypeScript**
- **TailwindCSS**
- **Framer Motion** (animations discrètes)
- **Zod** + **React Hook Form** (validation formulaires)

## 📦 Installation

```bash
# Installer les dépendances
pnpm install

# Lancer le serveur de développement
pnpm dev

# Build pour la production
pnpm build

# Lancer en production
pnpm start
```

Le site sera accessible sur [http://localhost:3000](http://localhost:3000)

## 📁 Structure du projet

```
nextjs-premium/
├── app/
│   ├── api/
│   │   └── contact/
│   │       └── route.ts          # API route pour le formulaire de contact
│   ├── contact/
│   │   └── page.tsx              # Page contact
│   ├── mentions-legales/
│   │   └── page.tsx              # Mentions légales
│   ├── politique-confidentialite/
│   │   └── page.tsx              # Politique de confidentialité
│   ├── realisations/
│   │   └── page.tsx              # Page réalisations
│   ├── services/
│   │   └── page.tsx              # Page services
│   ├── globals.css               # Styles globaux
│   ├── layout.tsx                # Layout principal
│   ├── page.tsx                  # Page d'accueil
│   ├── robots.ts                 # Robots.txt
│   └── sitemap.ts                # Sitemap.xml
├── components/
│   ├── CaseStudyCard.tsx         # Carte case study
│   ├── CTA.tsx                   # Bouton CTA
│   ├── ContactForm.tsx           # Formulaire de contact
│   ├── FAQ.tsx                   # Composant FAQ
│   ├── Footer.tsx                # Footer
│   ├── Header.tsx                # Header
│   └── ServiceCard.tsx            # Carte service
└── ...
```

## 🎨 Design System

### Palette de couleurs
- **Neutres** : Noir, blanc, gris (#0A0A0A à #FAFAFA)
- **Accent** : Bleu nuit (#1E3A5F)

### Typographie
- **Font** : Inter (sans-serif élégant)

### Animations
- Animations discrètes avec Framer Motion
- Fade/slide 8-12px max
- Durations courtes (200-400ms)

## 📧 Configuration du formulaire de contact

Le formulaire de contact utilise une API route (`/app/api/contact/route.ts`). 

**Pour activer l'envoi d'emails :**

1. Configurez un service d'email (SendGrid, Resend, etc.) dans `/app/api/contact/route.ts`
2. Ou utilisez le fallback mailto automatique si l'API échoue

**Exemple avec Resend :**

```typescript
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

await resend.emails.send({
  from: 'contact@klyon.fr',
  to: 'klyonme@gmail.com',
  subject: `Nouveau message : ${subject}`,
  html: `...`,
})
```

## 🔍 SEO

- Metadata complète sur toutes les pages
- OpenGraph configuré
- Sitemap.xml automatique
- Robots.txt configuré
- Schema.org (à ajouter si nécessaire)

## 📱 Responsive

Le site est entièrement responsive et optimisé pour :
- Mobile (< 768px)
- Tablet (768px - 1024px)
- Desktop (> 1024px)

## 🚀 Déploiement

### Vercel (recommandé)

1. Connectez votre repository GitHub à Vercel
2. Vercel détectera automatiquement Next.js
3. Le site sera déployé automatiquement

### Autres plateformes

Le projet peut être déployé sur n'importe quelle plateforme supportant Next.js :
- Netlify
- AWS Amplify
- Railway
- etc.

## 📝 Notes importantes

- **Contenu véridique** : Tous les contenus (services, projets, contact) sont basés sur les informations réelles de KLYON
- **Positionnement** : Le site positionne KLYON comme consultant confirmé, pas étudiant
- **Missions** : Focus sur missions (courtes ou longues), pas CDI
- **Ton** : Sérieux, haut de gamme, minimaliste, orienté résultats

## 🔧 Personnalisation

### Modifier les couleurs

Éditez `tailwind.config.ts` pour changer la palette de couleurs.

### Modifier le contenu

- **Services** : `/app/services/page.tsx`
- **Réalisations** : `/app/realisations/page.tsx`
- **Home** : `/app/page.tsx`
- **Contact** : `/app/contact/page.tsx`

## 📞 Support

Pour toute question, contactez :
- Email : klyonme@gmail.com
- Téléphone : 07 66 98 03 42

---

**KLYON** — Logiciels sur mesure & automatisation
