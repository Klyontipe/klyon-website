#!/bin/bash

# Script pour corriger les permissions et attributs macOS sur node_modules

echo "🔧 Correction des permissions et attributs macOS..."

cd "$(dirname "$0")"

# 1. Supprimer les attributs étendus macOS qui bloquent l'accès
echo "📝 Suppression des attributs étendus macOS..."
xattr -rc node_modules 2>/dev/null || echo "⚠️  Certains fichiers nécessitent sudo"

# 2. Corriger les permissions de lecture
echo "🔐 Correction des permissions..."
chmod -R u+r node_modules 2>/dev/null || {
    echo "⚠️  Tentative avec sudo..."
    sudo chmod -R u+r node_modules
}

# 3. Vérifier le fichier problématique
echo "✅ Vérification du fichier problématique..."
if [ -f "node_modules/next/dist/client/components/router-reducer/create-href-from-url.js" ]; then
    ls -la@ "node_modules/next/dist/client/components/router-reducer/create-href-from-url.js"
    echo "✅ Fichier trouvé"
else
    echo "❌ Fichier non trouvé - les dépendances ne sont pas installées"
    echo "💡 Exécutez: npm install"
fi

echo ""
echo "✅ Correction terminée !"
echo "💡 Relancez le serveur avec: npm run dev"
