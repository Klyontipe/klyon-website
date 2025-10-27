import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { Link as RouterLink, useParams } from 'react-router-dom'
import { 
  ArrowLeft, 
  Calendar, 
  Clock, 
  Bot, 
  Code, 
  Shield, 
  ShoppingCart, 
  Database, 
  Wrench,
  Share2,
  BookOpen,
  User
} from 'lucide-react'

const BlogPost = () => {
  const { slug } = useParams()

  // Simuler les données de l'article (en réalité, vous récupéreriez depuis une API)
  const blogPosts = [
    {
      slug: 'bien-demarrer-avec-chatgpt',
      category: 'IA & Productivité',
      icon: Bot,
      title: 'Bien démarrer avec ChatGPT : méthodes et réflexes utiles',
      excerpt: 'Structurer ses prompts, itérer efficacement et éviter les pièges courants : une méthode simple pour gagner du temps avec l\'IA au quotidien.',
      date: '10 Janvier 2025',
      readTime: '7 min de lecture',
      author: 'Lorenzo Fortini',
      content: `
        <h2>Introduction</h2>
        <p>ChatGPT est devenu un outil indispensable pour de nombreux professionnels. Mais comment bien l'utiliser pour maximiser son efficacité ? Voici mes conseils pratiques basés sur 2.5 années d'expérience.</p>
        
        <h2>1. Structurer ses prompts</h2>
        <p>Un bon prompt est la clé du succès. Voici la structure que j'utilise :</p>
        <ul>
          <li><strong>Contexte</strong> : Expliquez la situation</li>
          <li><strong>Rôle</strong> : Définissez le rôle de l'IA</li>
          <li><strong>Tâche</strong> : Précisez ce que vous voulez</li>
          <li><strong>Format</strong> : Indiquez le format de réponse souhaité</li>
        </ul>
        
        <h2>2. Itérer efficacement</h2>
        <p>N'hésitez pas à affiner vos prompts. Chaque itération vous rapproche du résultat parfait.</p>
        
        <h2>3. Éviter les pièges courants</h2>
        <p>Attention aux prompts trop vagues ou aux demandes trop complexes. Commencez simple, puis complexifiez.</p>
        
        <h2>Conclusion</h2>
        <p>Avec ces méthodes, vous devriez voir une amélioration significative de vos résultats avec ChatGPT.</p>
      `
    },
    {
      slug: 'prompts-metiers',
      category: 'IA & Métiers',
      icon: Code,
      title: 'Prompts métiers: modèles réutilisables pour marketing, RH et support',
      excerpt: 'Des trames de prompts génériques, adaptables à votre contexte, pour créer du contenu, analyser, synthétiser et améliorer vos process.',
      date: '03 Janvier 2025',
      readTime: '9 min de lecture',
      author: 'Lorenzo Fortini',
      content: `
        <h2>Introduction</h2>
        <p>Chaque métier a ses besoins spécifiques en IA. Voici des modèles de prompts adaptés aux différents secteurs.</p>
        
        <h2>Marketing</h2>
        <p>Pour créer du contenu marketing efficace :</p>
        <blockquote>
          "Tu es un expert marketing. Crée un post LinkedIn pour [produit/service] qui cible [audience] et met en avant [bénéfice principal]."
        </blockquote>
        
        <h2>Ressources Humaines</h2>
        <p>Pour analyser les CVs et optimiser les processus RH :</p>
        <blockquote>
          "Analyse ce CV pour le poste de [poste]. Identifie les points forts, les lacunes et propose des questions d'entretien."
        </blockquote>
        
        <h2>Support Client</h2>
        <p>Pour automatiser les réponses client :</p>
        <blockquote>
          "Tu es un agent de support. Réponds à cette demande client de manière professionnelle et propose des solutions."
        </blockquote>
        
        <h2>Conclusion</h2>
        <p>Ces modèles vous font gagner du temps et améliorent la qualité de vos interactions avec l'IA.</p>
      `
    }
  ]

  const post = blogPosts.find(p => p.slug === slug) || blogPosts[0]

  return (
    <>
      <Helmet>
        <title>{post.title} | Blog Klyon</title>
        <meta name="description" content={post.excerpt} />
        <meta name="keywords" content={`${post.category}, intelligence artificielle, ChatGPT, développement, automatisation, Bouches-du-Rhône`} />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={`https://klyon.fr/blog/${post.slug}`} />
        
        {/* Open Graph */}
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.excerpt} />
        <meta property="og:url" content={`https://klyon.fr/blog/${post.slug}`} />
        <meta property="og:type" content="article" />
        <meta property="article:author" content={post.author} />
        <meta property="article:published_time" content={post.date} />
        <meta property="article:section" content={post.category} />
      </Helmet>

      {/* Hero Section */}
      <section className="relative overflow-hidden py-24 lg:py-32 bg-gray-950">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-24 -left-24 h-80 w-80 rounded-full blur-3xl opacity-30 bg-gradient-to-br from-accent-500 to-primary-500" />
        </div>
        
        <div className="container-custom relative">
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
              transition={{ delay: 0.2, duration: 0.6 }}
              className="mb-8"
            >
              <RouterLink
                to="/blog"
                className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
              >
                <ArrowLeft className="h-4 w-4" />
                Retour au blog
              </RouterLink>
            </motion.div>

            {/* Article Header */}
            <div className="mb-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-accent-500/20 rounded-xl">
                  <post.icon className="h-8 w-8 text-accent-400" />
                </div>
                <span className="px-4 py-2 bg-accent-500/20 text-accent-400 font-medium rounded-full border border-accent-500/30">
                  {post.category}
                </span>
              </div>

              <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
                {post.title}
              </h1>

              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                {post.excerpt}
              </p>

              {/* Article Meta */}
              <div className="flex flex-wrap items-center gap-6 text-gray-400">
                <div className="flex items-center gap-2">
                  <User className="h-4 w-4" />
                  <span>{post.author}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  <span>{post.date}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  <span>{post.readTime}</span>
                </div>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-2 px-4 py-2 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors"
                >
                  <Share2 className="h-4 w-4" />
                  Partager
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-20 bg-gray-900">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <motion.article
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="prose prose-lg prose-invert max-w-none"
            >
              <div 
                className="text-gray-300 leading-relaxed"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />
            </motion.article>

            {/* Article Footer */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mt-16 pt-8 border-t border-gray-700"
            >
              <div className="flex flex-col lg:flex-row gap-8 items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-accent-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-xl">LF</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">{post.author}</h3>
                    <p className="text-gray-400">Expert IA & Développement</p>
                    <p className="text-sm text-gray-500">2.5 ans d'expérience avec l'IA</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <motion.a
                    href="/contact"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition-colors"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <BookOpen className="h-4 w-4" />
                    Discuter de cet article
                  </motion.a>
                  <motion.a
                    href="/ia"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-gray-800 text-gray-300 rounded-lg hover:bg-gray-700 transition-colors"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Nos services IA
                  </motion.a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Related Articles */}
      <section className="py-20 bg-gray-950">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-white mb-4">Articles similaires</h2>
            <p className="text-gray-400">Découvrez d'autres articles qui pourraient vous intéresser</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {blogPosts.slice(0, 3).map((relatedPost) => (
              <motion.article
                key={relatedPost.slug}
                className="group bg-gray-900 rounded-xl overflow-hidden border border-gray-800 hover:border-accent-500/50 transition-all duration-300"
                whileHover={{ y: -5 }}
              >
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-gray-800 rounded-lg group-hover:bg-accent-500/20 transition-colors">
                      <relatedPost.icon className="h-5 w-5 text-gray-400 group-hover:text-accent-400 transition-colors" />
                    </div>
                    <span className="px-2 py-1 bg-gray-800 text-gray-300 text-xs font-medium rounded border border-gray-700">
                      {relatedPost.category}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-white mb-3 group-hover:text-accent-400 transition-colors line-clamp-2">
                    {relatedPost.title}
                  </h3>

                  <p className="text-gray-400 text-sm mb-4 leading-relaxed line-clamp-3">
                    {relatedPost.excerpt}
                  </p>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3 text-xs text-gray-500">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        {relatedPost.date}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        {relatedPost.readTime}
                      </div>
                    </div>

                    <RouterLink
                      to={`/blog/${relatedPost.slug}`}
                      className="inline-flex items-center gap-1 text-accent-400 hover:text-accent-300 text-sm font-medium"
                    >
                      Lire
                      <ArrowLeft className="h-3 w-3 rotate-180" />
                    </RouterLink>
                  </div>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  )
}

export default BlogPost