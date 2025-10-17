import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Link } from 'react-router-dom'
import { ArrowRight, Calendar, Clock, Bot, Code, Shield, ShoppingCart, Database, Wrench } from 'lucide-react'

const Blog = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

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
    <section id="blog" className="section-padding bg-white dark:bg-gray-800">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Blog & Actualités
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Découvrez mes conseils et tutoriels en informatique, IA et développement
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12"
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
                  className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200 dark:border-gray-700 overflow-hidden h-full"
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
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-200">
                      {post.title}
                    </h3>

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
                    <Link
                      to={`/blog/${post.slug}`}
                      className="inline-flex items-center text-primary-600 dark:text-primary-400 font-semibold hover:text-primary-700 dark:hover:text-primary-300 transition-colors duration-200 group"
                    >
                      Lire l'article
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
                    </Link>
                  </div>
                </motion.div>
              </motion.article>
            )
          })}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-primary-600 to-accent-600 rounded-2xl p-8 text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-primary-600/90 to-accent-600/90"></div>
            <div className="relative z-10">
              <h3 className="text-2xl font-bold mb-4">
                🚀 Prêt à automatiser votre entreprise ?
              </h3>
              <p className="text-lg mb-6 opacity-90 max-w-2xl mx-auto">
                Chaque article partage mes expériences réelles avec des entreprises marseillaises. 
                Découvrez comment transformer vos processus métier avec des solutions sur-mesure.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  onClick={() => {
                    const element = document.querySelector('#contact')
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' })
                    }
                  }}
                  className="bg-white text-primary-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Discuter de votre projet
                </motion.button>
                <motion.button
                  onClick={() => {
                    const element = document.querySelector('#competences')
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' })
                    }
                  }}
                  className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary-600 transition-colors duration-200"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Voir mes compétences
                </motion.button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Blog
