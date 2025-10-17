import { useParams, Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { ArrowLeft, Calendar, Clock, Share2, Mail, Lock, Eye, EyeOff } from 'lucide-react'
import { useState } from 'react'
import { useTheme } from '../contexts/ThemeContext'

const BlogPost = () => {
  const { slug } = useParams()
  const { theme } = useTheme()
  const [showFullContent, setShowFullContent] = useState(false)
  const [isUnlocking, setIsUnlocking] = useState(false)

  // Simuler les données des articles de blog
  const blogPosts = {
    'chatgpt-entreprise': {
      title: 'ChatGPT en entreprise : 5 cas d\'usage concrets',
      date: '18 Septembre 2024',
      readTime: '8 min de lecture',
      category: 'IA & Automatisation',
      content: `
        <p>L'intégration de l'intelligence artificielle dans les entreprises marseillaises n'est plus un concept futuriste. Voici comment j'ai aidé plusieurs entreprises à transformer leurs processus avec ChatGPT.</p>
        
        <h2>1. Automatisation du service client</h2>
        <p>Une PME marseillaise de 50 employés recevait plus de 200 emails clients par jour. J'ai développé un système qui utilise ChatGPT pour analyser et catégoriser automatiquement les demandes, générant des réponses personnalisées en fonction du type de requête.</p>
        
        <h2>2. Génération de contenu marketing</h2>
        <p>Une agence de communication locale a vu sa productivité augmenter de 40% grâce à l'automatisation de la création de posts LinkedIn et d'emails marketing personnalisés.</p>
        
        <h2>3. Analyse de données clients</h2>
        <p>Intégration de ChatGPT dans un CRM existant pour analyser les feedbacks clients et générer automatiquement des rapports d'insights actionnables.</p>
        
        <h2>4. Formation des équipes</h2>
        <p>Création d'un chatbot interne qui aide les nouveaux employés à comprendre les processus de l'entreprise et répond à leurs questions 24/7.</p>
        
        <h2>5. Optimisation des processus métier</h2>
        <p>Automatisation de la saisie de données depuis des documents PDF vers des systèmes ERP, réduisant les erreurs humaines de 90%.</p>
        
        <p>Ces exemples concrets montrent que l'IA n'est pas réservée aux grandes entreprises. Avec les bonnes intégrations, même les PME peuvent bénéficier de ces technologies.</p>
      `,
      previewContent: `
        <p>L'intégration de l'intelligence artificielle dans les entreprises marseillaises n'est plus un concept futuriste. Voici comment j'ai aidé plusieurs entreprises à transformer leurs processus avec ChatGPT.</p>
        
        <h2>1. Automatisation du service client</h2>
        <p>Une PME marseillaise de 50 employés recevait plus de 200 emails clients par jour. J'ai développé un système qui utilise ChatGPT pour analyser et catégoriser automatiquement les demandes...</p>
        
        <div class="blurred-content">
          <h2>2. Génération de contenu marketing</h2>
          <p>Une agence de communication locale a vu sa productivité augmenter de 40% grâce à l'automatisation...</p>
          
          <h2>3. Analyse de données clients</h2>
          <p>Intégration de ChatGPT dans un CRM existant pour analyser les feedbacks clients...</p>
          
          <h2>4. Formation des équipes</h2>
          <p>Création d'un chatbot interne qui aide les nouveaux employés...</p>
          
          <h2>5. Optimisation des processus métier</h2>
          <p>Automatisation de la saisie de données depuis des documents PDF...</p>
          
          <p>Ces exemples concrets montrent que l'IA n'est pas réservée aux grandes entreprises...</p>
        </div>
      `
    },
    'autoproposal-python': {
      title: 'AutoProposal V2 : Automatisation PDF avec Python',
      date: '12 Septembre 2024',
      readTime: '12 min de lecture',
      category: 'Python',
      content: `
        <p>Découvrez comment j'ai développé une solution complète d'extraction de données PDF pour automatiser la saisie des propales dans un CRM.</p>
        
        <h2>Le problème initial</h2>
        <p>Les commerciaux passaient 2 heures par jour à saisir manuellement les données des propales PDF dans le CRM. Un processus fastidieux et source d'erreurs.</p>
        
        <h2>La solution technique</h2>
        <p>J'ai développé une interface web en Python utilisant Flask, avec intégration d'OCR pour extraire automatiquement les données des PDF. Le système permet aux commerciaux de vérifier et corriger les données avant l'intégration.</p>
        
        <h2>Technologies utilisées</h2>
        <ul>
          <li>Python 3.9+</li>
          <li>Flask pour l'interface web</li>
          <li>PyPDF2 et pdfplumber pour l'extraction de texte</li>
          <li>Tesseract OCR pour l'extraction d'images</li>
          <li>SQLAlchemy pour la base de données</li>
        </ul>
        
        <h2>Version V2 : Facturation fournisseurs</h2>
        <p>La version 2 étend le système à la facturation fournisseurs avec gestion automatique des stocks et alertes de réapprovisionnement.</p>
        
        <h2>Résultats obtenus</h2>
        <p>Gain de temps de 80% pour les commerciaux, réduction des erreurs de saisie de 95%, et satisfaction client maximale.</p>
      `,
      previewContent: `
        <p>Découvrez comment j'ai développé une solution complète d'extraction de données PDF pour automatiser la saisie des propales dans un CRM.</p>
        
        <h2>Le problème initial</h2>
        <p>Les commerciaux passaient 2 heures par jour à saisir manuellement les données des propales PDF dans le CRM. Un processus fastidieux et source d'erreurs.</p>
        
        <div class="blurred-content">
          <h2>La solution technique</h2>
          <p>J'ai développé une interface web en Python utilisant Flask, avec intégration d'OCR pour extraire automatiquement les données des PDF...</p>
          
          <h2>Technologies utilisées</h2>
          <ul>
            <li>Python 3.9+</li>
            <li>Flask pour l'interface web</li>
            <li>PyPDF2 et pdfplumber pour l'extraction de texte</li>
            <li>Tesseract OCR pour l'extraction d'images</li>
            <li>SQLAlchemy pour la base de données</li>
          </ul>
          
          <h2>Version V2 : Facturation fournisseurs</h2>
          <p>La version 2 étend le système à la facturation fournisseurs avec gestion automatique des stocks...</p>
          
          <h2>Résultats obtenus</h2>
          <p>Gain de temps de 80% pour les commerciaux, réduction des erreurs de saisie de 95%...</p>
        </div>
      `
    },
    'securelocal-rgpd': {
      title: 'SecureLocal : Infrastructure RGPD 100% locale',
      date: '5 Septembre 2024',
      readTime: '10 min de lecture',
      category: 'Infrastructure',
      content: `
        <p>Retour d'expérience sur la création d'une infrastructure locale complète avec 4 GPU NVIDIA pour une entreprise soucieuse du RGPD.</p>
        
        <h2>Le contexte</h2>
        <p>Une entreprise de santé marseillaise avait besoin d'une solution IA locale pour traiter des données médicales sensibles, sans aucune connexion internet.</p>
        
        <h2>L'infrastructure mise en place</h2>
        <p>Serveur dédié avec 4 GPU NVIDIA RTX 4090, 128GB RAM, stockage NVMe haute performance, et réseau isolé sans accès internet.</p>
        
        <h2>Sécurité et conformité RGPD</h2>
        <p>Mise en place d'un environnement complètement isolé avec chiffrement des données, authentification forte, et audit trail complet.</p>
        
        <h2>Défis techniques</h2>
        <p>Installation et configuration de modèles IA en local, optimisation des performances, et maintenance sans accès internet.</p>
        
        <h2>Résultats</h2>
        <p>Infrastructure 100% RGPD compliant, traitement IA local ultra-rapide, et protection totale des données sensibles.</p>
      `
    },
    'shopify-crm-webhooks': {
      title: 'Shopify + CRM : Intégration webhooks réussie',
      date: '28 Août 2024',
      readTime: '6 min de lecture',
      category: 'E-commerce',
      content: `
        <p>Guide technique complet de l'intégration Shopify-CRM que j'ai développée pour une boutique en ligne marseillaise.</p>
        
        <h2>Le besoin client</h2>
        <p>Synchronisation automatique des commandes Shopify avec un CRM interne personnalisé, en temps réel.</p>
        
        <h2>Architecture technique</h2>
        <p>Webhooks Shopify → API Python Flask → Base de données PostgreSQL → Interface CRM personnalisée.</p>
        
        <h2>Gestion des webhooks</h2>
        <p>Configuration des webhooks pour les événements : commande créée, commande mise à jour, paiement confirmé.</p>
        
        <h2>Code Python</h2>
        <p>Développement d'une API REST robuste avec gestion d'erreurs, retry automatique, et logging complet.</p>
        
        <h2>Résultats</h2>
        <p>Synchronisation temps réel, réduction des erreurs manuelles, et satisfaction client maximale.</p>
      `
    },
    'postgresql-optimisation': {
      title: 'Optimisation PostgreSQL : De 30s à 0.2s',
      date: '20 Août 2024',
      readTime: '15 min de lecture',
      category: 'PostgreSQL',
      content: `
        <p>Comment j'ai optimisé un système de reporting lent en réécrivant des requêtes complexes et en optimisant l'indexation.</p>
        
        <h2>Le problème</h2>
        <p>Un système de reporting prenait 30 secondes à générer des rapports mensuels, rendant l'outil inutilisable.</p>
        
        <h2>Analyse des performances</h2>
        <p>Utilisation d'EXPLAIN ANALYZE pour identifier les goulots d'étranglement et les requêtes coûteuses.</p>
        
        <h2>Optimisations appliquées</h2>
        <ul>
          <li>Création d'index composites optimisés</li>
          <li>Réécriture des requêtes avec des CTE</li>
          <li>Optimisation des jointures</li>
          <li>Mise en place de vues matérialisées</li>
        </ul>
        
        <h2>Résultats</h2>
        <p>Réduction du temps de génération de 30s à 0.2s, soit une amélioration de 99.3%.</p>
      `
    },
    'upgrade-pc': {
      title: 'Upgrade PC : HDD vers SSD, résultats concrets',
      date: '15 Août 2024',
      readTime: '7 min de lecture',
      category: 'Support IT',
      content: `
        <p>Retour d'expérience sur l'amélioration des performances PC en remplaçant HDD par SSD pour une PME marseillaise.</p>
        
        <h2>Le contexte</h2>
        <p>Une entreprise de 20 employés avec des PC vieillissants et des performances dégradées.</p>
        
        <h2>Tests de performance</h2>
        <p>Mesure des temps de démarrage, ouverture d'applications, et transfert de fichiers avant et après upgrade.</p>
        
        <h2>Installation et migration</h2>
        <p>Migration des données, installation de Windows, et configuration des nouveaux SSD NVMe.</p>
        
        <h2>Résultats mesurés</h2>
        <p>Amélioration des performances de 300% en moyenne, temps de démarrage réduit de 2 minutes à 15 secondes.</p>
        
        <h2>ROI pour l'entreprise</h2>
        <p>Gain de productivité estimé à 2 heures par employé et par semaine, soit un ROI de 400% en 6 mois.</p>
      `
    }
  }

  const post = blogPosts[slug]

  const handleUnlockContent = async () => {
    setIsUnlocking(true)
    // Simulation d'envoi d'email
    await new Promise(resolve => setTimeout(resolve, 2000))
    setShowFullContent(true)
    setIsUnlocking(false)
  }

  if (!post) {
    return (
      <div className="pt-20 min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Article non trouvé
          </h1>
          <p className="text-gray-600 dark:text-gray-300 mb-8">
            L'article que vous recherchez n'existe pas.
          </p>
          <Link
            to="/blog"
            className="inline-flex items-center text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Retour au blog
          </Link>
        </div>
      </div>
    )
  }

  return (
    <>
      <Helmet>
        <title>{post.title} - Blog Klyon</title>
        <meta name="description" content={post.title} />
      </Helmet>

      <div className="pt-20 min-h-screen bg-gray-50 dark:bg-gray-900">
        <div className="container-custom py-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            {/* Back Button */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-8"
            >
              <Link
                to="/blog"
                className="inline-flex items-center text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 transition-colors duration-200"
              >
                <ArrowLeft className="h-4 w-4 mr-2" />
                Retour au blog
              </Link>
            </motion.div>

            {/* Article Header */}
            <motion.header
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="mb-12"
            >
              <div className="mb-6">
                <span className="inline-block bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 px-3 py-1 rounded-full text-sm font-semibold">
                  {post.category}
                </span>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
                {post.title}
              </h1>
              
              <div className="flex items-center space-x-6 text-gray-600 dark:text-gray-400">
                <div className="flex items-center">
                  <Calendar className="h-5 w-5 mr-2" />
                  {post.date}
                </div>
                <div className="flex items-center">
                  <Clock className="h-5 w-5 mr-2" />
                  {post.readTime}
                </div>
                <button className="flex items-center hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200">
                  <Share2 className="h-5 w-5 mr-2" />
                  Partager
                </button>
              </div>
            </motion.header>

            {/* Article Content */}
            <motion.article
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="prose prose-lg max-w-none dark:prose-invert"
            >
              <div 
                className={`bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 ${
                  !showFullContent ? 'relative' : ''
                }`}
                dangerouslySetInnerHTML={{ 
                  __html: showFullContent ? post.content : (post.previewContent || post.content)
                }}
              />
              
              {/* Blur Overlay */}
              {!showFullContent && (
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/80 to-white dark:via-gray-800/80 dark:to-gray-800 rounded-2xl flex items-end justify-center p-8">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    className="text-center"
                  >
                    <div className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 ${
                      theme === 'dark' ? 'bg-primary-900/50' : 'bg-primary-100'
                    }`}>
                      <Lock className="h-8 w-8 text-primary-600" />
                    </div>
                    
                    <h3 className={`text-xl font-bold mb-2 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                      Contenu premium
                    </h3>
                    
                    <p className={`text-sm mb-6 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
                      Contactez-moi pour accéder au contenu complet de cet article
                    </p>
                    
                    <motion.button
                      onClick={handleUnlockContent}
                      disabled={isUnlocking}
                      className={`flex items-center space-x-2 px-6 py-3 rounded-xl font-semibold text-white transition-all duration-200 ${
                        isUnlocking 
                          ? 'bg-gray-400 cursor-not-allowed' 
                          : 'bg-primary-600 hover:bg-primary-700'
                      }`}
                      whileHover={!isUnlocking ? { scale: 1.05 } : {}}
                      whileTap={!isUnlocking ? { scale: 0.95 } : {}}
                    >
                      {isUnlocking ? (
                        <>
                          <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                          <span>Envoi en cours...</span>
                        </>
                      ) : (
                        <>
                          <Mail className="h-4 w-4" />
                          <span>Débloquer le contenu</span>
                        </>
                      )}
                    </motion.button>
                  </motion.div>
                </div>
              )}
            </motion.article>

            {/* Call to Action */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="mt-16"
            >
              <div className="bg-gradient-to-r from-primary-600 to-accent-600 rounded-2xl p-8 text-white text-center">
                <h3 className="text-2xl font-bold mb-4">
                  Vous avez un projet similaire ?
                </h3>
                <p className="text-lg mb-6 opacity-90">
                  Discutons de vos besoins et créons ensemble la solution parfaite pour votre entreprise.
                </p>
                <Link
                  to="/#contact"
                  className="inline-block bg-white text-primary-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200"
                >
                  Nous contacter
                </Link>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </>
  )
}

export default BlogPost
