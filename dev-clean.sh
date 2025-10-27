#!/bin/bash

# Script pour nettoyer et redémarrer le serveur de développement proprement
echo "🧹 Nettoyage du cache Vite..."
rm -rf node_modules/.vite
rm -rf dist

echo "🚀 Redémarrage du serveur de développement..."
pkill -f vite 2>/dev/null || true
sleep 2

echo "✅ Serveur démarré sur http://localhost:3000"
npm run dev
