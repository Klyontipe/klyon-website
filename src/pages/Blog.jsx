import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { Link as RouterLink } from 'react-router-dom'
import { ArrowRight, Calendar, Clock, Bot, Code, Shield, ShoppingCart, Database, Wrench } from 'lucide-react'

const Blog = () => {
  const blogPosts = [
    {
      slug: 'chatgpt-entreprise',
      category: 'IA & Automatisation',
      icon: Bot,
      title: 'ChatGPT en entreprise : 5 cas d\'usage concrets',
      excerpt: 'Découvrez comment j\'ai intégré ChatGPT dans des entreprises marseillaises pour automatiser le service client, générer des réponses personnalisées et optimiser les processus métier. Retour d\'expérience avec exemples pratiques.',
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
        <title>Blog - Klyon</title>
        <meta name="description" content="Découvrez mes conseils et tutoriels en informatique, IA et développement. Retours d'expérience sur des projets réels avec des entreprises marseillaises." />
      </Helmet>

      <div className="pt-20 min-h-screen bg-gray-50 dark:bg-gray-900">
        <div className="container-custom py-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              Blog & Actualités
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Découvrez mes conseils et tutoriels en informatique, IA et développement. 
              Retours d'expérience sur des projets réels avec des entreprises marseillaises.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {blogPosts.map((post, index) => {
              const Icon = post.icon
              return (
                <motion.article
                  key={index}
                  variants={itemVariants}
                  className="group"
                >
                  <motion.div
                    className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200 dark:border-gray-700 overflow-hidden h-full"
                    whileHover={{ y: -5 }}
                    transition={{ duration: 0.3 }}
                  >
                    {/* Image/Icon Header */}
                    <div className="relative h-48 bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center">
                      <div className="absolute top-4 left-4 bg-white/90 text-primary-600 px-3 py-1 rounded-full text-sm font-semibold">
                        {post.category}
                      </div>
                      <Icon className="h-16 w-16 text-white opacity-80" />
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-200">
                        {post.title}
                      </h2>

                      <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                        {post.excerpt}
                      </p>

                      {/* Meta */}
                      <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400 mb-6">
                        <div className="flex items-center">
                          <Calendar className="h-4 w-4 mr-2" />
                          {post.date}
                        </div>
                        <div className="flex items-center">
                          <Clock className="h-4 w-4 mr-2" />
                          {post.readTime}
                        </div>
                      </div>

                      {/* Read More Link */}
                      <RouterLink
                        to={`/blog/${post.slug}`}
                        className="inline-flex items-center text-primary-600 dark:text-primary-400 font-semibold hover:text-primary-700 dark:hover:text-primary-300 transition-colors duration-200 group"
                      >
                        Lire l'article
                        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
                      </RouterLink>
                    </div>
                  </motion.div>
                </motion.article>
              )
            })}
          </motion.div>
        </div>
      </div>
    </>
  )
}

export default Blog
