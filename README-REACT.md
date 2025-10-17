# Klyon - Site Web React

## 🚀 Nouveau site web moderne avec React

Votre site web a été entièrement modernisé avec React, Vite, et des animations avancées avec Framer Motion.

## ✨ Nouvelles fonctionnalités

### 🎨 Design moderne
- **Interface utilisateur moderne** avec Tailwind CSS
- **Mode sombre/clair** avec persistance des préférences
- **Animations fluides** avec Framer Motion
- **Design responsive** optimisé pour tous les appareils
- **Effets visuels avancés** (parallaxe, hover effects, transitions)

### 🛠️ Technologies utilisées
- **React 18** - Framework JavaScript moderne
- **Vite** - Build tool ultra-rapide
- **Tailwind CSS** - Framework CSS utilitaire
- **Framer Motion** - Animations et transitions
- **React Router** - Navigation côté client
- **EmailJS** - Formulaire de contact fonctionnel
- **Lucide React** - Icônes modernes

### 📱 Fonctionnalités
- **Navigation fluide** avec scroll smooth
- **Formulaire de contact** fonctionnel avec EmailJS
- **Système de blog** avec routing
- **Page BAM** (Business Card) interactive
- **Optimisations SEO** avec React Helmet
- **Google Analytics** intégré
- **Performance optimisée** avec lazy loading

## 🚀 Installation et démarrage

### Prérequis
- Node.js 18+ 
- npm ou yarn

### Installation
```bash
# Installer les dépendances
npm install

# Démarrer le serveur de développement
npm run dev

# Build pour la production
npm run build

# Prévisualiser le build
npm run preview
```

## 📁 Structure du projet

```
src/
├── components/          # Composants réutilisables
│   ├── sections/       # Sections de la page d'accueil
│   ├── Header.jsx      # Navigation
│   ├── Footer.jsx      # Pied de page
│   └── ...
├── contexts/           # Contextes React (Theme, Contact)
├── pages/              # Pages de l'application
├── App.jsx             # Composant principal
└── main.jsx            # Point d'entrée
```

## 🎯 Pages disponibles

- **/** - Page d'accueil avec toutes les sections
- **/blog** - Liste des articles de blog
- **/blog/:slug** - Article de blog individuel
- **/bam** - Page de contact rapide (Business Card)
- **404** - Page d'erreur personnalisée

## 🔧 Configuration

### Variables d'environnement
Créez un fichier `.env` pour les configurations :

```env
VITE_EMAILJS_SERVICE_ID=service_lb38ewo
VITE_EMAILJS_TEMPLATE_ID=template_2af96ws
VITE_EMAILJS_USER_ID=ZJMuCYNkzxGhqore6
VITE_GOOGLE_ANALYTICS_ID=G-93SRMD10BW
```

### EmailJS
Le formulaire de contact utilise EmailJS. Configuration actuelle :
- Service ID: `service_lb38ewo`
- Template ID: `template_2af96ws`
- User ID: `ZJMuCYNkzxGhqore6`

## 🎨 Personnalisation

### Couleurs
Les couleurs sont définies dans `tailwind.config.js` :
- Primary: Bleu (#3b82f6)
- Accent: Cyan (#06b6d4)
- Secondary: Gris (#64748b)

### Animations
Les animations sont configurées avec Framer Motion dans chaque composant.

### Contenu
- **Services** : Modifiez `src/components/sections/Services.jsx`
- **Compétences** : Modifiez `src/components/sections/Competences.jsx`
- **Projets** : Modifiez `src/components/sections/Projects.jsx`
- **Blog** : Modifiez `src/pages/Blog.jsx` et `src/pages/BlogPost.jsx`

## 📱 Responsive Design

Le site est entièrement responsive avec :
- **Mobile First** : Optimisé pour les mobiles
- **Tablet** : Adaptation pour les tablettes
- **Desktop** : Expérience complète sur desktop
- **Breakpoints** : sm (640px), md (768px), lg (1024px), xl (1280px)

## 🚀 Déploiement

### Build de production
```bash
npm run build
```

Le dossier `dist/` contient les fichiers optimisés pour la production.

### Déploiement sur GitHub Pages
```bash
# Installer gh-pages
npm install --save-dev gh-pages

# Ajouter dans package.json
"scripts": {
  "deploy": "gh-pages -d dist"
}

# Déployer
npm run build
npm run deploy
```

### Déploiement sur Netlify
1. Connectez votre repository GitHub
2. Configurez le build command : `npm run build`
3. Configurez le publish directory : `dist`
4. Déployez !

## 🔍 SEO et Performance

### Optimisations SEO
- **Meta tags** dynamiques avec React Helmet
- **Open Graph** pour les réseaux sociaux
- **Structured data** pour les moteurs de recherche
- **Sitemap** automatique

### Performance
- **Lazy loading** des images
- **Code splitting** automatique
- **Compression** des assets
- **Cache** optimisé

## 🛠️ Maintenance

### Mise à jour du contenu
1. **Blog** : Modifiez les articles dans `src/pages/BlogPost.jsx`
2. **Projets** : Ajoutez vos nouveaux projets dans `src/components/sections/Projects.jsx`
3. **Services** : Modifiez les services dans `src/components/sections/Services.jsx`

### Ajout d'animations
Utilisez Framer Motion pour ajouter de nouvelles animations :

```jsx
import { motion } from 'framer-motion'

<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
>
  Votre contenu
</motion.div>
```

## 📞 Support

Pour toute question ou problème :
- **Email** : klyonme@gmail.com
- **Téléphone** : 07 66 98 03 42

---

**Klyon** - Solutions Informatiques Professionnelles
*Votre partenaire informatique dans le Sud de la France*
