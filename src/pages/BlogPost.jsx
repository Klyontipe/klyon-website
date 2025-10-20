import { useParams, Link as RouterLink } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { ArrowLeft, Calendar, Clock, Share2 } from 'lucide-react'
import { useState } from 'react'
import { useTheme } from '../contexts/ThemeContext'

const BlogPost = () => {
  const { slug } = useParams()
  const { theme } = useTheme()
  const [showFullContent] = useState(true)

  // Articles génériques orientés IA
  const blogPosts = {
    'bien-demarrer-avec-chatgpt': {
      title: 'Bien démarrer avec ChatGPT : méthodes et réflexes utiles',
      date: '10 Janvier 2025',
      readTime: '7 min de lecture',
      category: 'IA & Productivité',
      content: `
        <p>ChatGPT peut accélérer votre travail si vous structurez correctement vos demandes. Voici une approche simple pour partir sur de bonnes bases.</p>
        <h2>Clarifier l’objectif</h2>
        <p>Formulez votre objectif en une phrase, précisez la cible (lecteur, utilisateur, département) et le format attendu (liste, plan, tableau, texte court).</p>
        <h2>Itérer progressivement</h2>
        <p>Commencez avec un prompt de contexte, lisez la réponse, puis resserrez progressivement: ajoutez des contraintes, des contre‑exemples ou un style.</p>
        <h2>Contrôler et reformuler</h2>
        <p>Demandez des vérifications, reformulez les passages ambigus, exigez des sources ou une mise en forme exploitable (CSV, JSON simple, plan en puces).</p>
      `
    },
    'prompts-metiers': {
      title: 'Prompts métiers: modèles réutilisables pour marketing, RH et support',
      date: '03 Janvier 2025',
      readTime: '9 min de lecture',
      category: 'IA & Métiers',
      content: `
        <p>Des trames génériques, adaptables à différents métiers. L’idée: gagner du temps avec des bases solides.</p>
        <h2>Marketing</h2>
        <p>« Agis comme un rédacteur. Cible: [personas]. Forme: [newsletter/landing]. Contrainte: [ton, longueur, CTA]. Fournis 2 variantes. »</p>
        <h2>RH</h2>
        <p>« Agis comme un recruteur. Analyse ce CV et cette fiche de poste, dresse un tableau forces/risques, propose 5 questions ciblées. »</p>
        <h2>Support</h2>
        <p>« Agis comme un agent support. Catégorise ces tickets, suggère une réponse claire, propose 3 actions de prévention. »</p>
      `
    },
    'assistants-gpt': {
      title: 'Assistants GPT: quand et pourquoi les utiliser',
      date: '18 Décembre 2024',
      readTime: '8 min de lecture',
      category: 'Assistants IA',
      content: `
        <p>Les assistants GPT sont utiles lorsqu’un périmètre est stable (FAQ, procédures, extraction de formats connus). Ils sont moins adaptés aux tâches floues.</p>
        <h2>Bonnes pratiques</h2>
        <ul>
          <li>Délimiter un périmètre précis</li>
          <li>Fournir des exemples réels</li>
          <li>Journaliser et améliorer régulièrement</li>
        </ul>
        <p>Gardez un contrôle humain sur les décisions sensibles.</p>
      `
    },
    'automatiser-sans-code': {
      title: 'Automatiser sans coder: scénarios pratiques avec IA + no‑code',
      date: '11 Décembre 2024',
      readTime: '6 min de lecture',
      category: 'Automatisation',
      content: `
        <p>Exemples génériques: génération de résumés, catégorisation de mails, création de libellés, préparation de réponses. Déployez avec des outils no‑code.</p>
      `
    },
    'veille-ia-2025': {
      title: 'Veille IA 2025: tendances utiles à surveiller',
      date: '04 Décembre 2024',
      readTime: '5 min de lecture',
      category: 'Tendances',
      content: `
        <p>Modèles spécialisés, agents plus robustes, qualité des données, garde‑fous: panorama synthétique à suivre en 2025.</p>
      `
    },
    'ethique-et-cadre': {
      title: 'IA responsable: éthique, cadre et bon sens opérationnel',
      date: '27 Novembre 2024',
      readTime: '7 min de lecture',
      category: 'Bonnes pratiques',
      content: `
        <p>Transparence, consentement, supervision humaine. Définissez un cadre simple, documentez et formez les équipes.</p>
      `
    }
  }

  const post = blogPosts[slug]

  // Contenu affiché intégralement (pas de verrouillage)

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
          <RouterLink
            to="/blog"
            className="inline-flex items-center text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Retour au blog
          </RouterLink>
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
              <RouterLink
                to="/blog"
                className="inline-flex items-center text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 transition-colors duration-200"
              >
                <ArrowLeft className="h-4 w-4 mr-2" />
                Retour au blog
              </RouterLink>
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
                className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />
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
                <RouterLink
                  to="/#contact"
                  className="inline-block bg-white text-primary-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200"
                >
                  Nous contacter
                </RouterLink>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </>
  )
}

export default BlogPost
