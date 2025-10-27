import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Link as RouterLink } from 'react-router-dom'
import { 
  Code, 
  Smartphone, 
  Globe, 
  Database, 
  Cloud, 
  Users, 
  CheckCircle,
  ArrowRight,
  Zap,
  Shield,
  Layers,
  Monitor,
  Terminal,
  Network,
  Settings
} from 'lucide-react'
import { useTheme } from '../contexts/ThemeContext'

const Developpement = () => {
  const { theme } = useTheme()
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const services = [
    {
      icon: Code,
      title: 'Développement Web Sur-Mesure',
      description: 'Sites vitrine, applications métier et interfaces fonctionnelles adaptées à vos besoins.',
      features: [
        'Sites vitrine modernes et performants',
        'Applications métier complexes',
        'Interfaces sur mesure (lecture PDF, insertion ERP)',
        'Intégration avec systèmes existants',
        'Optimisation performances et productivité'
      ],
      technologies: ['React', 'JavaScript', 'HTML/CSS', 'Python', 'C#', 'Java'],
      color: 'primary'
    },
    {
      icon: Smartphone,
      title: 'Applications Mobiles React Native',
      description: 'Applications iOS et Android cross-platform avec une seule base de code.',
      features: [
        'Développement React Native',
        'Expérience utilisateur native',
        'Synchronisation temps réel',
        'Intégration APIs et bases de données',
        'Déploiement App Store & Google Play'
      ],
      technologies: ['React Native', 'JavaScript', 'SQL', 'PostgreSQL', 'APIs'],
      color: 'accent'
    },
    {
      icon: Database,
      title: 'APIs & Backend Python',
      description: 'Développement d\'APIs robustes et systèmes backend avec Python et PostgreSQL.',
      features: [
        'APIs RESTful avec Python',
        'Bases de données PostgreSQL',
        'Intégration systèmes ERP/CRM',
        'Automatisation processus métier',
        'Sécurité et authentification'
      ],
      technologies: ['Python', 'PostgreSQL', 'SQL', 'APIs', 'Backend'],
      color: 'blue'
    },
    {
      icon: Settings,
      title: 'Interfaces Fonctionnelles',
      description: 'Solutions sur mesure pour automatiser vos processus métier complexes.',
      features: [
        'Lecture automatique de PDF',
        'Insertion données dans ERP',
        'Interfaces personnalisées',
        'Automatisation workflows',
        'Intégration systèmes existants'
      ],
      technologies: ['Python', 'C#', 'Java', 'PDF', 'ERP', 'Intégration'],
      color: 'purple'
    }
  ]

  const projetsDev = [
    {
      title: 'Intégration Shopify - CRM Sur-Mesure',
      description: 'Développement d\'une solution d\'intégration complète entre une boutique Shopify et un CRM interne personnalisé. Le système traite automatiquement les commandes via webhooks JSON et synchronise les données client en temps réel.',
      technologies: ['Python', 'Flask', 'API REST', 'Webhooks', 'JSON'],
      results: [
        'Mise en production en quelques semaines',
        'Synchronisation automatique des commandes',
        'Réduction drastique des erreurs manuelles',
        'Interface de gestion des webhooks'
      ]
    },
    {
      title: 'AutoProposal - Automatisation des Propales',
      description: 'Interface web sur-mesure pour automatiser la saisie des propales PDF dans le CRM. Les commerciaux collent simplement leur PDF et peuvent modifier les données extraites avant l\'intégration automatique.',
      technologies: ['Python', 'HTML/CSS', 'JavaScript', 'SQL', 'PDF Processing'],
      results: [
        'Gain de temps de 80% pour les commerciaux',
        'Réduction des erreurs de saisie de 95%',
        'Interface intuitive et rapide',
        'Version V2 avec facturation fournisseurs'
      ]
    },
    {
      title: 'App Mobile React Native - Gestion Stock',
      description: 'Application mobile cross-platform pour la gestion de stock d\'une PME marseillaise. Interface intuitive, synchronisation temps réel, notifications push et mode hors-ligne.',
      technologies: ['React Native', 'JavaScript', 'Firebase', 'App Store'],
      results: [
        'Interface mobile intuitive et responsive',
        'Synchronisation temps réel avec le backend',
        'Notifications push pour les alertes stock',
        'Mode hors-ligne avec synchronisation différée'
      ]
    }
  ]

  const competencesDev = [
    { name: 'React/Next.js', level: 95 },
    { name: 'JavaScript/TypeScript', level: 95 },
    { name: 'Node.js/Express', level: 90 },
    { name: 'Python/Flask', level: 85 },
    { name: 'PostgreSQL', level: 90 },
    { name: 'React Native', level: 85 },
    { name: 'Docker', level: 85 },
    { name: 'Git/GitHub', level: 95 }
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
        <title>Développement Web & Mobile - Applications Sur Mesure | Klyon</title>
        <meta name="description" content="Développement web, applications mobiles React Native, APIs Python. Solutions sur mesure pour entreprises dans les Bouches-du-Rhône. Méthodologie agile, 32+ projets réalisés." />
        <meta name="keywords" content="développement web, application mobile, React Native, Python, API, développement sur mesure, Bouches-du-Rhône, méthodologie agile" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://klyon.fr/developpement" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Développement Web & Mobile - Applications Sur Mesure" />
        <meta property="og:description" content="Développement web, applications mobiles React Native, APIs Python. Solutions sur mesure pour entreprises." />
        <meta property="og:url" content="https://klyon.fr/developpement" />
        <meta property="og:type" content="website" />
      </Helmet>

      {/* Hero Section */}
      <section className={`relative overflow-hidden py-24 lg:py-40 ${theme === 'dark' ? 'bg-gray-950' : 'bg-white'}`}>
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-24 -left-24 h-80 w-80 rounded-full blur-3xl opacity-30 bg-gradient-to-br from-primary-500 to-accent-500" />
          <div className="absolute -bottom-24 -right-24 h-96 w-96 rounded-full blur-3xl opacity-20 bg-gradient-to-tr from-accent-500 to-primary-500" />
        </div>
        <div className="container-custom relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center max-w-5xl mx-auto"
          >
            <span className="inline-flex items-center px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider bg-gradient-to-r from-primary-600/10 to-accent-600/10 text-primary-600 dark:text-primary-400 border border-primary-600/20">
              <Code className="h-4 w-4 mr-2" />
              Développement & Applications
            </span>
            <h1 className={`mt-6 text-4xl md:text-6xl font-black leading-tight ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
              Développement <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-accent-500">Sur Mesure</span>
            </h1>
            <p className={`mt-6 text-lg md:text-xl ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
              Sites web, applications mobiles, backend et bases de données. 
              Des solutions techniques adaptées à vos besoins métier.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Méthodologie Agile */}
      <section className="py-20 bg-gray-900">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              Notre Méthodologie Agile
            </h2>
            <p className="text-lg text-gray-300">
              Un processus structuré pour garantir la réussite de votre projet
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                etape: '1. Cahier des Charges',
                description: 'Analyse de vos besoins et définition précise des fonctionnalités',
                icon: '📋'
              },
              {
                etape: '2. Estimation & Planning',
                description: 'Définition des tarifs, temps de développement et planning détaillé',
                icon: '⏱️'
              },
              {
                etape: '3. Développement par Rushes',
                description: 'Développement itératif avec des livrables réguliers',
                icon: '🚀'
              },
              {
                etape: '4. Présentation & Validation',
                description: 'Présentation au client pour validation et ajustements',
                icon: '✅'
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-6 text-center hover:border-gray-600 transition-all duration-300"
                whileHover={{ y: -4, scale: 1.01 }}
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold text-white mb-3">{item.etape}</h3>
                <p className="text-gray-300 text-sm">{item.description}</p>
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
              Nos Services de Développement
            </h2>
            <p className="text-lg text-gray-300">
              Des solutions complètes pour tous vos besoins de développement
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="relative group rounded-3xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl border border-gray-700/50 shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden"
              >
                <div className="h-full rounded-3xl bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-xl border border-gray-600/30 shadow-xl overflow-hidden">
                  <div className="p-8">
                    <div className="flex items-center justify-between mb-6">
                      <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl ${
                        service.color === 'primary' ? 'bg-gradient-to-br from-blue-500/20 to-blue-600/20 text-blue-400 border border-blue-500/30' :
                        service.color === 'accent' ? 'bg-gradient-to-br from-pink-500/20 to-pink-600/20 text-pink-400 border border-pink-500/30' :
                        service.color === 'blue' ? 'bg-gradient-to-br from-cyan-500/20 to-cyan-600/20 text-cyan-400 border border-cyan-500/30' :
                        service.color === 'purple' ? 'bg-gradient-to-br from-purple-500/20 to-purple-600/20 text-purple-400 border border-purple-500/30' :
                        'bg-gradient-to-br from-purple-500/20 to-purple-600/20 text-purple-400 border border-purple-500/30'
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

                    <ul className="space-y-3 mb-6">
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

                    <div className="mb-6">
                      <h4 className={`text-sm font-semibold mb-2 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>
                        Technologies :
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {service.technologies.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className={`px-2 py-1 rounded text-xs font-medium ${
                              service.color === 'primary' ? 'bg-primary-100 text-primary-800 dark:bg-primary-900/30 dark:text-primary-400' :
                              service.color === 'accent' ? 'bg-accent-100 text-accent-800 dark:bg-accent-900/30 dark:text-accent-400' :
                              'bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-400'
                            }`}
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <RouterLink
                      to="/contact"
                      className={`w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-2xl font-medium text-white shadow-lg hover:shadow-xl transition-all duration-300 backdrop-blur-sm ${
                        service.color === 'primary' ? 'bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700' :
                        service.color === 'accent' ? 'bg-gradient-to-r from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700' :
                        service.color === 'blue' ? 'bg-gradient-to-r from-cyan-500 to-cyan-600 hover:from-cyan-600 hover:to-cyan-700' :
                        service.color === 'purple' ? 'bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700' :
                        'bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700'
                      }`}
                    >
                      Discuter de mon projet
                      <ArrowRight className="h-4 w-4" />
                    </RouterLink>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Projets Section */}
      <section className={`relative py-24 ${theme === 'dark' ? 'bg-gray-950' : 'bg-white'}`}>
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
              Nos Réalisations
            </h2>
            <p className={`text-lg ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
              Découvrez quelques-uns de nos projets de développement
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {projetsDev.map((projet, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className={`rounded-2xl overflow-hidden ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'} shadow-lg hover:shadow-xl transition-all duration-300`}
                whileHover={{ y: -5 }}
              >
                <div className="h-48 bg-gradient-to-br from-primary-100 to-accent-100 dark:from-primary-900/50 dark:to-accent-900/50 flex items-center justify-center">
                  <Monitor className="h-16 w-16 text-primary-600 dark:text-primary-400" />
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
                        className="px-2 py-1 bg-primary-100 text-primary-800 dark:bg-primary-900/30 dark:text-primary-400 rounded text-xs font-medium"
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

      {/* Compétences Section */}
      <section className={`py-20 ${theme === 'dark' ? 'bg-gray-900' : 'bg-gray-50'}`}>
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
              Technologies Maîtrisées
            </h2>
            <p className={`text-lg ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
              Un éventail de technologies modernes pour répondre à tous vos besoins
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4"
          >
            {competencesDev.map((competence, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className={`p-4 rounded-lg ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'} text-center border ${theme === 'dark' ? 'border-gray-700' : 'border-gray-200'} hover:shadow transition-all duration-300`}
                whileHover={{ y: -2 }}
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
      <section className="py-20 bg-gray-800">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              Prêt à développer votre projet ?
            </h2>
            <p className="text-lg mb-8 text-gray-300">
              Contactez-nous pour discuter de vos besoins et obtenir un devis personnalisé
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <RouterLink
                to="/contact"
                className="px-8 py-4 bg-gradient-to-r from-primary-600 to-accent-600 text-white rounded-xl hover:from-primary-700 hover:to-accent-700 transition-colors duration-200 font-semibold"
              >
                Discuter de mon projet
              </RouterLink>
              <motion.a
                href="tel:+33766980342"
                className="px-8 py-4 bg-accent-600 text-white rounded-xl hover:bg-accent-700 transition-colors duration-200 font-semibold"
                whileHover={{ scale: 1.05 }}
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

export default Developpement