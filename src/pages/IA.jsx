import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { Link as RouterLink } from 'react-router-dom'
import { 
  Bot, 
  Brain, 
  Zap, 
  Users, 
  CheckCircle,
  ArrowRight,
  TrendingUp,
  Code,
  Database
} from 'lucide-react'
import { useTheme } from '../contexts/ThemeContext'

const IA = () => {
  const { theme } = useTheme()

  const services = [
    {
      icon: Bot,
      title: 'Intégration ChatGPT',
      description: 'Intégration complète de ChatGPT dans vos processus métier',
      features: [
        'Configuration ChatGPT pour votre entreprise',
        'Intégration API OpenAI personnalisée',
        'Automatisation service client avec ChatGPT',
        'Formation équipes sur l\'utilisation optimale',
        'Accompagnement personnalisé en présentiel/distanciel'
      ],
      color: 'primary'
    },
    {
      icon: Brain,
      title: 'Création d\'Assistants IA',
      description: 'Développement d\'assistants GPT sur mesure avec vos données',
      features: [
        'GPT personnalisés avec vos données métier',
        'Assistants spécialisés par fonction',
        'Techniques avancées de prompt engineering',
        'Intégration dans vos workflows existants',
        'Maintenance et optimisation continue'
      ],
      color: 'accent'
    },
    {
      icon: Zap,
      title: 'Automatisation Intelligente',
      description: 'Automatisation de vos processus avec l\'intelligence artificielle',
      features: [
        'Audit de vos processus métier',
        'Identification des opportunités d\'automatisation',
        'Workflows automatisés multi-IA',
        'Gain de temps et économies garanties',
        'Suivi des résultats et optimisation'
      ],
      color: 'purple'
    },
    {
      icon: Users,
      title: 'Formation & Accompagnement',
      description: 'Formation complète de vos équipes sur l\'IA',
      features: [
        'Formation ChatGPT en entreprise',
        'Techniques de prompt engineering',
        'Bonnes pratiques et méthodologies',
        'Sessions présentiel et distanciel',
        'Suivi personnalisé et certification'
      ],
      color: 'blue'
    }
  ]

  const projetsIA = [
    {
      title: 'Formation ChatGPT en Entreprise',
      description: 'Formation complète d\'équipes sur l\'utilisation optimale de ChatGPT : techniques de prompt engineering, bonnes pratiques, intégration dans les workflows métier. Sessions présentiel et distanciel avec accompagnement personnalisé.',
      technologies: ['OpenAI API', 'Formation', 'Prompt Engineering', 'Accompagnement'],
      results: [
        'Formation équipes sur ChatGPT',
        'Techniques de prompt engineering',
        'Intégration dans les workflows',
        'Accompagnement présentiel/distanciel'
      ]
    },
    {
      title: 'Création d\'IA sur Mesure avec NVIDIA',
      description: 'Développement d\'une solution IA personnalisée utilisant la technologie NVIDIA pour automatiser des processus complexes. Intégration complète avec les systèmes existants et formation des utilisateurs.',
      technologies: ['NVIDIA', 'IA Personnalisée', 'Automatisation', 'Intégration'],
      results: [
        'Solution IA sur mesure',
        'Technologie NVIDIA avancée',
        'Automatisation processus complexes',
        'Formation utilisateurs'
      ]
    },
    {
      title: 'Accompagnement & Formation IA',
      description: 'Accompagnement personnalisé d\'entreprises dans l\'adoption de l\'IA : audit des processus, identification des opportunités, formation des équipes, création d\'assistants GPT spécialisés.',
      technologies: ['Accompagnement', 'Audit', 'Formation', 'GPT Personnalisés'],
      results: [
        'Audit processus métier',
        'Identification opportunités IA',
        'Formation équipes spécialisées',
        'Création assistants GPT'
      ]
    }
  ]

  const competencesIA = [
    { name: 'OpenAI API', level: 90 },
    { name: 'Chatbots', level: 90 },
    { name: 'Machine Learning', level: 80 },
    { name: 'NLP', level: 80 },
    { name: 'TensorFlow', level: 75 },
    { name: 'Prompt Engineering', level: 90 }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
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
                <title>Intelligence Artificielle - Formation ChatGPT & Solutions IA | Klyon</title>
                <meta name="description" content="Expert IA : Formation ChatGPT, assistants IA sur mesure, automatisation intelligente. Intégration IA pour entreprises dans les Bouches-du-Rhône. 2.5 ans d'expérience IA." />
                <meta name="keywords" content="formation ChatGPT, intelligence artificielle, assistant IA, automatisation, OpenAI API, prompt engineering, IA entreprise, Bouches-du-Rhône" />
                <meta name="robots" content="index, follow" />
                <link rel="canonical" href="https://klyon.fr/ia" />
                
                {/* Open Graph */}
                <meta property="og:title" content="Intelligence Artificielle - Formation ChatGPT & Solutions IA" />
                <meta property="og:description" content="Expert IA : Formation ChatGPT, assistants IA sur mesure, automatisation intelligente. Intégration IA pour entreprises." />
                <meta property="og:url" content="https://klyon.fr/ia" />
                <meta property="og:type" content="website" />
              </Helmet>

      {/* Hero Section */}
      <section className={`relative overflow-hidden py-24 lg:py-40 ${theme === 'dark' ? 'bg-gray-950' : 'bg-white'}`}>
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-24 -left-24 h-80 w-80 rounded-full blur-3xl opacity-30 bg-gradient-to-br from-purple-500 to-primary-500" />
          <div className="absolute -bottom-24 -right-24 h-96 w-96 rounded-full blur-3xl opacity-20 bg-gradient-to-tr from-accent-500 to-purple-500" />
        </div>
        <div className="container-custom relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center max-w-5xl mx-auto"
          >
            <span className="inline-flex items-center px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider bg-gradient-to-r from-purple-600/10 to-primary-600/10 text-purple-600 dark:text-purple-400 border border-purple-600/20">
              <Bot className="h-4 w-4 mr-2" />
              Intelligence Artificielle & Automatisation
            </span>
            <h1 className={`mt-6 text-4xl md:text-6xl font-black leading-tight ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
              Maîtrisez l'<span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-primary-500">Intelligence Artificielle</span>
            </h1>
            <p className={`mt-6 text-lg md:text-xl ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
              Intégration ChatGPT, assistants sur mesure et automatisation. 
              Transformez votre activité avec l'IA dès aujourd'hui.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Section IA Populaires */}
      <section className="py-16 bg-gray-900">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white">
              Nous maîtrisons toutes les IA populaires
            </h2>
            <p className="text-lg text-gray-300">
              ChatGPT, Gemini, Grok, Claude, Perplexity, Copilot et bien d'autres
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-5 lg:grid-cols-10 gap-3">
            {[
              { name: 'ChatGPT', color: 'from-emerald-900/20 to-emerald-800/20', textColor: 'text-emerald-300', borderColor: 'border-emerald-700' },
              { name: 'Gemini', color: 'from-blue-900/20 to-blue-800/20', textColor: 'text-blue-300', borderColor: 'border-blue-700' },
              { name: 'Grok', color: 'from-red-900/20 to-red-800/20', textColor: 'text-red-300', borderColor: 'border-red-700' },
              { name: 'Claude', color: 'from-orange-900/20 to-orange-800/20', textColor: 'text-orange-300', borderColor: 'border-orange-700' },
              { name: 'Perplexity', color: 'from-purple-900/20 to-purple-800/20', textColor: 'text-purple-300', borderColor: 'border-purple-700' },
              { name: 'Copilot', color: 'from-slate-900/20 to-slate-800/20', textColor: 'text-slate-300', borderColor: 'border-slate-700' },
              { name: 'Midjourney', color: 'from-pink-900/20 to-pink-800/20', textColor: 'text-pink-300', borderColor: 'border-pink-700' },
              { name: 'DALL-E', color: 'from-indigo-900/20 to-indigo-800/20', textColor: 'text-indigo-300', borderColor: 'border-indigo-700' },
              { name: 'Jasper', color: 'from-amber-900/20 to-amber-800/20', textColor: 'text-amber-300', borderColor: 'border-amber-700' },
              { name: 'Copy.ai', color: 'from-cyan-900/20 to-cyan-800/20', textColor: 'text-cyan-300', borderColor: 'border-cyan-700' }
            ].map((ai, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className={`bg-gradient-to-br ${ai.color} ${ai.textColor} ${ai.borderColor} border rounded-xl px-3 py-2 text-center font-medium text-xs shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer backdrop-blur-sm`}
                whileHover={{ y: -1, scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
              >
                {ai.name}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Exemples par Métier */}
      <section className="py-20 bg-gray-900">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              L'IA au service de tous les métiers
            </h2>
            <p className="text-lg text-gray-300">
              Découvrez comment l'IA peut transformer votre activité, quel que soit votre secteur
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                metier: 'Marketing & Communication',
                exemple: 'Génération automatique de contenus, campagnes email personnalisées, analyse de sentiment des avis clients',
                benefice: 'Gain de temps : 70% sur la création de contenu'
              },
              {
                metier: 'Commerce & Vente',
                exemple: 'Chatbot intelligent pour le support client, recommandations produits personnalisées, analyse prédictive des ventes',
                benefice: 'Augmentation des ventes : +25% en moyenne'
              },
              {
                metier: 'Ressources Humaines',
                exemple: 'Tri automatique des CV, génération de questions d\'entretien, analyse de satisfaction des employés',
                benefice: 'Réduction du temps de recrutement : 60%'
              },
              {
                metier: 'Finance & Comptabilité',
                exemple: 'Automatisation de la saisie comptable, détection d\'anomalies financières, génération de rapports',
                benefice: 'Économies : 40% sur les tâches répétitives'
              },
              {
                metier: 'Santé & Médical',
                exemple: 'Analyse de dossiers patients, aide au diagnostic, optimisation des plannings médicaux',
                benefice: 'Amélioration de la précision : 30%'
              },
              {
                metier: 'Juridique & Droit',
                exemple: 'Analyse de contrats, recherche jurisprudentielle, génération de documents légaux',
                benefice: 'Accélération des recherches : 80%'
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-6 hover:border-gray-600 transition-all duration-300"
                whileHover={{ y: -4, scale: 1.01 }}
              >
                <h3 className="text-xl font-bold text-white mb-3">{item.metier}</h3>
                <p className="text-gray-300 mb-4 text-sm">{item.exemple}</p>
                <div className="bg-green-900/30 border border-green-700 rounded-lg p-3">
                  <p className="text-green-300 text-sm font-medium">{item.benefice}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="relative py-24 bg-gray-950">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              Nos Services IA
            </h2>
            <p className="text-lg text-gray-300">
              Des solutions IA concrètes pour automatiser et optimiser votre activité
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -4, scale: 1.01 }}
                transition={{ type: 'spring', stiffness: 200, damping: 25 }}
                className={`relative group p-[1px] rounded-3xl bg-gradient-to-br ${
                  service.color === 'primary' ? 'from-primary-500/20 to-primary-300/10' :
                  service.color === 'accent' ? 'from-accent-500/20 to-accent-300/10' :
                  service.color === 'blue' ? 'from-blue-500/20 to-blue-300/10' :
                  service.color === 'green' ? 'from-green-500/20 to-green-300/10' :
                  service.color === 'orange' ? 'from-orange-500/20 to-orange-300/10' :
                  'from-purple-500/20 to-purple-300/10'
                } backdrop-blur-sm`}
              >
                <div className="h-full rounded-3xl backdrop-blur-xl bg-gray-900/40 border border-white/20 shadow-lg overflow-hidden">
                  <div className="p-8">
                    <div className="flex items-center justify-between mb-6">
                      <div className={`inline-flex items-center justify-center w-14 h-14 rounded-2xl ${
                        service.color === 'primary' ? 'bg-primary-500/10 text-primary-600 dark:text-primary-400' :
                        service.color === 'accent' ? 'bg-accent-500/10 text-accent-600 dark:text-accent-400' :
                        service.color === 'blue' ? 'bg-blue-500/10 text-blue-600 dark:text-blue-400' :
                        service.color === 'green' ? 'bg-green-500/10 text-green-600 dark:text-green-400' :
                        service.color === 'orange' ? 'bg-orange-500/10 text-orange-600 dark:text-orange-400' :
                        'bg-purple-500/10 text-purple-600 dark:text-purple-400'
                      } backdrop-blur-sm`}>
                        <service.icon className="h-7 w-7" />
                      </div>
                      <div className="text-sm uppercase tracking-wider text-gray-400">Klyon</div>
                    </div>

                    <h3 className={`text-2xl font-bold mb-3 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                      {service.title}
                    </h3>
                    <p className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'} mb-6`}>
                      {service.description}
                    </p>

                    <ul className="space-y-3 mb-8">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm">
                          <CheckCircle className={`h-5 w-5 mr-3 ${
                            service.color === 'primary' ? 'text-primary-500' :
                            service.color === 'accent' ? 'text-accent-500' :
                            'text-purple-500'
                          }`} />
                          <span className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <RouterLink
                      to="/contact"
                      className={`w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-2xl font-medium text-white shadow-sm hover:shadow-md transition-all duration-300 backdrop-blur-sm ${
                        service.color === 'primary' ? 'bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700' :
                        service.color === 'accent' ? 'bg-gradient-to-r from-accent-500 to-accent-600 hover:from-accent-600 hover:to-accent-700' :
                        service.color === 'blue' ? 'bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700' :
                        service.color === 'green' ? 'bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700' :
                        service.color === 'orange' ? 'bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700' :
                        'bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700'
                      }`}
                    >
                      Discuter de mon projet IA
                      <ArrowRight className="h-4 w-4" />
                    </RouterLink>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Projets IA Section */}
      <section className={`relative py-24 ${theme === 'dark' ? 'bg-gray-950' : 'bg-white'}`}>
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
              Nos Réalisations IA
            </h2>
            <p className={`text-lg ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
              Découvrez comment nous avons intégré l'IA dans différents projets clients
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {projetsIA.map((projet, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className={`rounded-2xl overflow-hidden ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'} shadow-lg hover:shadow-xl transition-all duration-300`}
                whileHover={{ y: -4, scale: 1.01 }}
                transition={{ type: 'spring', stiffness: 200, damping: 25 }}
              >
                <div className="h-48 bg-gradient-to-br from-purple-100 to-primary-100 dark:from-purple-900/50 dark:to-primary-900/50 flex items-center justify-center">
                  <Bot className="h-16 w-16 text-purple-600 dark:text-purple-400" />
                </div>
                <div className="p-6">
                  <h3 className={`text-xl font-bold mb-2 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                    {projet.title}
                  </h3>
                  <p className={`mb-4 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
                    {projet.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {projet.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-1 bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-400 rounded text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <ul className="space-y-1">
                    {projet.results.map((result, resultIndex) => (
                      <li key={resultIndex} className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>
                        • {result}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Compétences IA Section */}
      <section className={`py-20 ${theme === 'dark' ? 'bg-gray-900' : 'bg-gray-50'}`}>
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
              Expertise IA
            </h2>
            <p className={`text-lg ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
              Technologies et compétences maîtrisées en intelligence artificielle
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4"
          >
            {competencesIA.map((competence, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className={`p-4 rounded-lg ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'} text-center border ${theme === 'dark' ? 'border-gray-700' : 'border-gray-200'} hover:shadow transition-all duration-300`}
                whileHover={{ y: -4, scale: 1.05 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              >
                <h3 className={`text-sm font-semibold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>{competence.name}</h3>
                <div className={`mt-2 inline-flex items-center px-2 py-1 rounded-full text-xs font-semibold ${
                  competence.level >= 90 ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400' :
                  competence.level >= 80 ? 'bg-primary-100 text-primary-800 dark:bg-primary-900/30 dark:text-primary-400' :
                  'bg-accent-100 text-accent-800 dark:bg-accent-900/30 dark:text-accent-400'
                }`}>
                  {competence.level >= 90 ? 'Expert' : competence.level >= 80 ? 'Avancé' : 'Intermédiaire'}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={`py-20 ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'}`}>
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className={`text-3xl md:text-4xl font-bold mb-6 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
              Prêt à transformer votre activité avec l'IA ?
            </h2>
            <p className={`text-lg mb-8 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
              Contactez-nous pour discuter de vos besoins et choisir la solution adaptée
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <RouterLink
                to="/contact"
                className="px-8 py-4 bg-gradient-to-r from-purple-600 to-primary-600 text-white rounded-xl hover:from-purple-700 hover:to-primary-700 transition-colors duration-200 font-semibold"
              >
                Discuter de mon projet IA
              </RouterLink>
              <motion.a
                href="tel:+33766980342"
                className="px-8 py-4 bg-accent-600 text-white rounded-xl hover:bg-accent-700 transition-colors duration-200 font-semibold"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                Appeler maintenant
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}

export default IA