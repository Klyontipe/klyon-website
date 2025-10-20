import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { Link as RouterLink } from 'react-router-dom'
import { ArrowRight, Calendar, Clock, Bot, Code, Shield, ShoppingCart, Database, Wrench } from 'lucide-react'

const Blog = () => {
  const blogPosts = [
    {
      slug: 'bien-demarrer-avec-chatgpt',
      category: 'IA & Productivité',
      icon: Bot,
      title: 'Bien démarrer avec ChatGPT : méthodes et réflexes utiles',
      excerpt: 'Structurer ses prompts, itérer efficacement et éviter les pièges courants : une méthode simple pour gagner du temps avec l’IA au quotidien.',
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
      excerpt: 'Cas d’usage types, limites à connaître et bonnes pratiques pour créer des assistants efficaces sans complexité inutile.',
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
      title: 'Veille IA 2025: tendances utiles à surveiller',
      excerpt: 'Modèles spécialisés, agents plus fiables, gouvernance des données: panorama accessible des signaux forts à suivre.',
      date: '04 Décembre 2024',
      readTime: '5 min de lecture'
    },
    {
      slug: 'ethique-et-cadre',
      category: 'Bonnes pratiques',
      icon: Wrench,
      title: 'IA responsable: éthique, cadre et bon sens opérationnel',
      excerpt: 'Principes généraux, transparence et contrôle humain: un rappel pragmatique pour utiliser l’IA en confiance.',
      date: '27 Novembre 2024',
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
