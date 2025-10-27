# Guide de Développement - Klyon Website

## 🚀 Démarrage Rapide

```bash
# Démarrage normal
npm run dev

# Démarrage avec nettoyage du cache (si problème de hot-reload)
npm run dev:clean
```

## 🔧 Résolution des Problèmes

### Problème de Hot-Reload
Si les modifications ne s'affichent pas en temps réel :

1. **Vérifiez le port** : Le serveur peut changer de port (3000 → 3001)
2. **Nettoyez le cache** : `npm run dev:clean`
3. **Videz le cache du navigateur** : Ctrl+F5 ou Cmd+Shift+R
4. **Mode navigation privée** pour tester

### Structure des Pages
- **IA** : `/ia` - Formations et services IA
- **Développement** : `/developpement` - Web, mobile, formations
- **Réparation** : `/reparation` - Smartphones, montres, maintenance

## 📝 Notes Importantes
- ❌ **PAS DE PRIX** sur le site
- ✅ Durées des formations OK
- ✅ Hot-reload fonctionne maintenant
- ✅ Navigation mise à jour

## 🛠️ Commandes Utiles
```bash
# Nettoyer et redémarrer
npm run dev:clean

# Build de production
npm run build

# Déploiement
npm run deploy
```
