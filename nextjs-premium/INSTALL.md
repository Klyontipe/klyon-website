# 🔧 Instructions d'installation

## Problème identifié
Les dépendances Next.js ne sont pas correctement installées, ce qui cause l'erreur "Failed to compile".

## Solution

Exécutez ces commandes dans votre terminal (PAS dans Cursor) :

```bash
# 1. Aller dans le dossier Next.js
cd /Users/lorenzofortini/Klyon/Klyon/website/nextjs-premium

# 2. Supprimer node_modules s'il existe (pour une installation propre)
rm -rf node_modules

# 3. Installer les dépendances
npm install

# 4. Vérifier que Next.js est installé
ls node_modules/.bin/next

# 5. Lancer le serveur de développement
npm run dev
```

## Si vous avez des erreurs de permissions

```bash
# Essayer avec sudo (si nécessaire)
sudo npm install

# Ou vérifier les permissions du dossier
ls -la /Users/lorenzofortini/Klyon/Klyon/website/nextjs-premium
```

## Vérification

Une fois installé, vous devriez voir :
- ✅ `node_modules/.bin/next` existe
- ✅ `package-lock.json` est créé
- ✅ Le serveur démarre sur http://localhost:3000
