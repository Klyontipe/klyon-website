# 🚀 Klyon - Site Vitrine

Site vitrine professionnel pour Klyon, microentreprise spécialisée dans les solutions informatiques sur la Côte d'Azur.

## 📋 Description

Site vitrine moderne et responsive présentant les services de Klyon :
- **Support Informatique** : Installation, réparation et maintenance
- **Développement Sur-Mesure** : Programmes Python, sites web, CRM
- **Intelligence Artificielle** : Intégration ChatGPT, IA locale, automatisation

## 🎨 Caractéristiques

- ✅ Design moderne et professionnel
- ✅ Animations sobres et élégantes
- ✅ Responsive design (mobile-first)
- ✅ Navigation fluide
- ✅ Formulaire de contact fonctionnel
- ✅ Optimisé pour les performances
- ✅ Accessible et SEO-friendly

## 🛠️ Technologies Utilisées

- **HTML5** - Structure sémantique
- **CSS3** - Styles modernes avec variables CSS
- **JavaScript Vanilla** - Interactions et animations
- **Font Awesome** - Icônes
- **Google Fonts** - Typographie Inter

## 📁 Structure du Projet

```
klyon-website/
├── index.html          # Page principale
├── styles.css          # Styles CSS
├── script.js           # JavaScript
└── README.md           # Documentation
```

## 🚀 Déploiement sur GitHub Pages

### 1. Créer un repository GitHub

1. Allez sur [GitHub](https://github.com)
2. Cliquez sur "New repository"
3. Nommez-le `klyon-website` ou `klyon`
4. Laissez-le public
5. Ne cochez pas "Add a README file"

### 2. Pousser le code

```bash
# Initialiser Git
git init

# Ajouter tous les fichiers
git add .

# Premier commit
git commit -m "Initial commit - Site vitrine Klyon"

# Ajouter le remote (remplacez USERNAME par votre nom d'utilisateur)
git remote add origin https://github.com/USERNAME/klyon-website.git

# Pousser vers GitHub
git push -u origin main
```

### 3. Activer GitHub Pages

1. Allez dans les paramètres du repository
2. Scroll jusqu'à "Pages"
3. Dans "Source", sélectionnez "Deploy from a branch"
4. Choisissez la branche "main"
5. Cliquez sur "Save"

Votre site sera disponible à : `https://USERNAME.github.io/klyon-website`

## 🔧 Configuration du Domaine OVH

### 1. Configuration DNS chez OVH

Ajoutez ces enregistrements DNS dans votre zone OVH :

```
Type: CNAME
Nom: www
Valeur: USERNAME.github.io.

Type: A
Nom: @
Valeur: 185.199.108.153
Valeur: 185.199.109.153
Valeur: 185.199.110.153
Valeur: 185.199.111.153
```

### 2. Configuration GitHub Pages

1. Dans les paramètres du repository
2. Section "Pages"
3. Ajoutez votre domaine personnalisé
4. Cochez "Enforce HTTPS"

## 📝 Personnalisation

### Informations à Modifier

1. **Contact** dans `index.html` :
   - Email : `contact@klyon.fr`
   - Téléphone : `+33 6 XX XX XX XX`

2. **Photo professionnelle** :
   - Remplacez la div `.image-placeholder` par une vraie image
   - Ajoutez votre photo dans le dossier

3. **Contenu À propos** :
   - Ajoutez votre CV et informations personnelles
   - Modifiez la description de l'entreprise

### Couleurs et Style

Les couleurs sont définies dans `styles.css` avec les variables CSS :

```css
:root {
    --primary-color: #2563eb;
    --accent-color: #06b6d4;
    /* ... autres couleurs */
}
```

## 📱 Responsive Design

Le site s'adapte automatiquement à :
- Desktop (1200px+)
- Tablet (768px - 1199px)
- Mobile (< 768px)

## ⚡ Optimisations

- Images optimisées (à ajouter)
- Lazy loading pour les images
- Animations désactivées si `prefers-reduced-motion`
- Code minifié pour la production

## 🔒 Sécurité

- Formulaire de contact avec validation
- Protection contre les injections XSS
- Headers de sécurité (à configurer sur le serveur)

## 📊 Analytics (Optionnel)

Pour ajouter Google Analytics :

1. Créez un compte Google Analytics
2. Ajoutez le code de tracking dans `<head>` de `index.html`

## 🚀 Prochaines Étapes

1. ✅ Site vitrine de base
2. 🔄 Ajouter votre photo et informations personnelles
3. 🔄 Configurer le domaine OVH
4. 🔄 Ajouter des images de vos projets
5. 🔄 Intégrer un vrai système de contact (email)
6. 🔄 Ajouter un blog/actualités
7. 🔄 Intégrer des témoignages clients

## 📞 Support

Pour toute question ou modification, contactez Klyon directement.

---

**Klyon** - Votre partenaire informatique sur la Côte d'Azur 🚀 