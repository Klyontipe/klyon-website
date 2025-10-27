import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { Link as RouterLink } from 'react-router-dom'
import { 
  ArrowRight, 
  Calendar, 
  Clock, 
  Bot, 
  Code, 
  Shield, 
  ShoppingCart, 
  Database, 
  Wrench,
  Search,
  Filter,
  BookOpen
} from 'lucide-react'

const Blog = () => {
  const blogPosts = [
    {
      slug: 'bien-demarrer-avec-chatgpt',
      category: 'IA & Productivité',
      icon: Bot,
      title: 'Bien démarrer avec ChatGPT : méthodes et réflexes utiles',
      excerpt: 'Structurer ses prompts, itérer efficacement et éviter les pièges courants : une méthode simple pour gagner du temps avec l\'IA au quotidien.',
      date: '10 Janvier 2025',
      readTime: '7 min de lecture'
    },
    {
      slug: 'prompts-metiers',
      category: 'IA & Métiers',
      icon: Code,
      title: 'Prompts métiers: modèles réutilisables pour marketing, RH et support',
      excerpt: 'Des trames de prompts génériques, adaptables à votre contexte, pour créer du contenu, analyser, synthétiser et améliorer vos process.',
      date: '03 Janvier 2025',
      readTime: '9 min de lecture'
    },
    {
      slug: 'assistants-gpt',
      category: 'Assistants IA',
      icon: Shield,
      title: 'Assistants GPT: quand et pourquoi les utiliser',
      excerpt: 'Cas d\'usage types, limites à connaître et bonnes pratiques pour créer des assistants efficaces sans complexité inutile.',
      date: '18 Décembre 2024',
      readTime: '8 min de lecture'
    },
    {
      slug: 'automatiser-sans-code',
      category: 'Automatisation',
      icon: ShoppingCart,
      title: 'Automatiser sans coder: scénarios pratiques avec IA + no‑code',
      excerpt: 'Des exemples génériques de workflows combinant IA et outils no‑code pour gagner du temps sans développement lourd.',
      date: '11 Décembre 2024',
      readTime: '6 min de lecture'
    },
    {
      slug: 'veille-ia-2025',
      category: 'Tendances',
      icon: Database,
      title: 'Veille IA 2025: les outils à surveiller',
      excerpt: 'Un aperçu des nouvelles technologies IA qui vont marquer 2025, avec focus sur les applications pratiques pour les entreprises.',
      date: '05 Décembre 2024',
      readTime: '10 min de lecture'
    },
    {
      slug: 'chatgpt-entreprise',
      category: 'IA & Automatisation',
      icon: Bot,
      title: 'ChatGPT en entreprise : 5 cas d\'usage concrets',
      excerpt: 'Découvrez comment j\'ai intégré ChatGPT dans des entreprises marseillaises pour automatiser le service client, générer des réponses personnalisées et optimiser les processus métier.',
      date: '18 Septembre 2024',
      readTime: '8 min de lecture'
    },
    {
      slug: 'autoproposal-python',
      category: 'Python',
      icon: Code,
      title: 'AutoProposal V2 : Automatisation PDF avec Python',
      excerpt: 'Comment j\'ai développé une solution complète d\'extraction de données PDF pour automatiser la saisie des propales dans un CRM. Code source, techniques d\'OCR et intégration web.',
      date: '12 Septembre 2024',
      readTime: '12 min de lecture'
    },
    {
      slug: 'securelocal-rgpd',
      category: 'Infrastructure',
      icon: Shield,
      title: 'SecureLocal : Infrastructure RGPD 100% locale',
      excerpt: 'Retour d\'expérience sur la création d\'une infrastructure locale complète avec 4 GPU NVIDIA pour une entreprise soucieuse du RGPD. Configuration réseau isolé et sécurité maximale.',
      date: '5 Septembre 2024',
      readTime: '10 min de lecture'
    },
    {
      slug: 'shopify-crm-webhooks',
      category: 'E-commerce',
      icon: ShoppingCart,
      title: 'Shopify + CRM : Intégration webhooks réussie',
      excerpt: 'Guide technique complet de l\'intégration Shopify-CRM que j\'ai développée. Webhooks JSON, synchronisation temps réel et gestion des erreurs. Code Python inclus.',
      date: '28 Août 2024',
      readTime: '6 min de lecture'
    },
    {
      slug: 'postgresql-optimisation',
      category: 'PostgreSQL',
      icon: Database,
      title: 'Optimisation PostgreSQL : De 30s à 0.2s',
      excerpt: 'Comment j\'ai optimisé un système de reporting lent en réécrivant des requêtes complexes. Techniques d\'indexation, EXPLAIN ANALYZE et bonnes pratiques PostgreSQL.',
      date: '20 Août 2024',
      readTime: '15 min de lecture'
    },
    {
      slug: 'upgrade-pc',
      category: 'Support IT',
      icon: Wrench,
      title: 'Upgrade PC : HDD vers SSD, résultats concrets',
      excerpt: 'Retour d\'expérience sur l\'amélioration des performances PC en remplaçant HDD par SSD. Tests de vitesse, installation Windows, et conseils pour les PME marseillaises.',
      date: '15 Août 2024',
      readTime: '7 min de lecture'
    }
  ]

  const categories = [
    { id: 'all', name: 'Tous les articles', icon: Filter },
    { id: 'IA & Productivité', name: 'IA & Productivité', icon: Bot },
    { id: 'IA & Métiers', name: 'IA & Métiers', icon: Code },
    { id: 'Assistants IA', name: 'Assistants IA', icon: Shield },
    { id: 'Automatisation', name: 'Automatisation', icon: ShoppingCart },
    { id: 'Python', name: 'Python', icon: Database },
    { id: 'Infrastructure', name: 'Infrastructure', icon: Wrench }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut'
      }
    }
  }

  return (
    <>
      <Helmet>
        <title>Blog Klyon - Intelligence Artificielle & Développement | Articles IA</title>
        <meta name="description" content="Blog Klyon : Articles sur l'intelligence artificielle, ChatGPT, développement Python, automatisation et infrastructure. Conseils pratiques et retours d'expérience." />
        <meta name="keywords" content="blog IA, ChatGPT, intelligence artificielle, développement Python, automatisation, infrastructure, Bouches-du-Rhône, conseils IA" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://klyon.fr/blog" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Blog Klyon - Intelligence Artificielle & Développement" />
        <meta property="og:description" content="Articles sur l'intelligence artificielle, ChatGPT, développement Python, automatisation et infrastructure. Conseils pratiques et retours d'expérience." />
        <meta property="og:url" content="https://klyon.fr/blog" />
        <meta property="og:type" content="website" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative overflow-hidden py-24 lg:py-40 bg-gray-950">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-24 -left-24 h-80 w-80 rounded-full blur-3xl opacity-30 bg-gradient-to-br from-accent-500 to-primary-500" />
          <div className="absolute -bottom-24 -right-24 h-80 w-80 rounded-full blur-3xl opacity-30 bg-gradient-to-br from-primary-500 to-accent-500" />
        </div>
        
        <div className="container-custom relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="p-3 bg-accent-500/20 rounded-xl">
                <BookOpen className="h-8 w-8 text-accent-400" />
              </div>
              <span className="px-4 py-2 bg-accent-500/20 text-accent-400 font-medium rounded-full border border-accent-500/30">
                Blog Technique
              </span>
            </div>

            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
              Blog <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-accent-400">Klyon</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Articles pratiques sur l'intelligence artificielle, le développement et l'automatisation. 
              Retours d'expérience, conseils techniques et tendances du secteur.
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
              {[
                { number: '11+', label: 'Articles publiés' },
                { number: '5', label: 'Catégories' },
                { number: '2.5', label: 'Années d\'expérience' },
                { number: '100%', label: 'Contenu pratique' }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  className="text-center"
                >
                  <div className="text-2xl lg:text-3xl font-bold text-accent-400 mb-2">{stat.number}</div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Categories Filter */}
      <section className="py-12 bg-gray-900">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-wrap gap-3 justify-center"
          >
            {categories.map((category) => (
              <motion.button
                key={category.id}
                className="flex items-center gap-2 px-4 py-2 bg-gray-800 text-gray-300 rounded-lg hover:bg-gray-700 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <category.icon className="h-4 w-4" />
                {category.name}
              </motion.button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-20 bg-gray-950">
        <div className="container-custom">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {blogPosts.map((post) => (
              <motion.article
                key={post.slug}
                variants={itemVariants}
                className="group bg-gray-900 rounded-xl overflow-hidden border border-gray-800 hover:border-accent-500/50 transition-all duration-300"
              >
                <div className="p-6">
                  {/* Category & Icon */}
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-gray-800 rounded-lg group-hover:bg-accent-500/20 transition-colors">
                      <post.icon className="h-5 w-5 text-gray-400 group-hover:text-accent-400 transition-colors" />
                    </div>
                    <span className="px-2 py-1 bg-gray-800 text-gray-300 text-xs font-medium rounded border border-gray-700">
                      {post.category}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-white mb-3 group-hover:text-accent-400 transition-colors line-clamp-2">
                    {post.title}
                  </h3>

                  {/* Excerpt */}
                  <p className="text-gray-400 text-sm mb-4 leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>

                  {/* Meta */}
                  <div className="flex items-center gap-3 text-xs text-gray-500 mb-4">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      {post.date}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      {post.readTime}
                    </div>
                  </div>

                  {/* Read More */}
                  <RouterLink
                    to={`/blog/${post.slug}`}
                    className="inline-flex items-center gap-2 text-accent-400 hover:text-accent-300 font-medium text-sm group-hover:gap-3 transition-all"
                  >
                    Lire l'article
                    <ArrowRight className="h-4 w-4" />
                  </RouterLink>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-20 bg-gradient-to-r from-primary-500 to-accent-500">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Restez informé des dernières tendances IA
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Recevez nos articles directement dans votre boîte mail, 
              avec des conseils pratiques et des retours d'expérience.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Votre email"
                className="flex-1 px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white/20"
              />
              <motion.button
                className="px-6 py-3 bg-white text-primary-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                S'abonner
              </motion.button>
            </div>
            <p className="text-sm text-white/70 mt-4">
              Pas de spam, désabonnement en 1 clic
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-gray-900">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Un projet en tête ?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Discutons de vos besoins en IA, développement ou automatisation. 
              Consultation gratuite et devis personnalisé.
            </p>
            <motion.a
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary-500 text-white font-semibold rounded-lg hover:bg-primary-600 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Discutons de votre projet
              <ArrowRight className="h-5 w-5" />
            </motion.a>
          </motion.div>
        </div>
      </section>
    </>
  )
}

export default Blog