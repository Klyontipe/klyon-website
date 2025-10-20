import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Link as RouterLink } from 'react-router-dom'
import { 
  ExternalLink, 
  Github, 
  Eye, 
  Code, 
  Database, 
  Bot, 
  Smartphone,
  Globe,
  Filter,
  Search,
  Server,
  Wrench
} from 'lucide-react'
import { useState } from 'react'
import { useTheme } from '../contexts/ThemeContext'

const Projets = () => {
  const { theme } = useTheme()
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [searchTerm, setSearchTerm] = useState('')
  
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const categories = [
    { id: 'all', name: 'Tous', icon: Globe },
    { id: 'web', name: 'Web', icon: Code },
    { id: 'mobile', name: 'Mobile', icon: Smartphone },
    { id: 'ai', name: 'IA', icon: Bot },
    { id: 'database', name: 'Base de données', icon: Database },
    { id: 'infrastructure', name: 'Infrastructure', icon: Server },
    { id: 'support', name: 'Support IT', icon: Wrench }
  ]

  const projets = [
    {
      id: 1,
      title: 'Intégration Shopify - CRM Sur-Mesure',
      description: 'Développement d\'une solution d\'intégration complète entre une boutique Shopify et un CRM interne personnalisé. Le système traite automatiquement les commandes via webhooks JSON et synchronise les données client en temps réel.',
      image: '/api/placeholder/600/400',
      category: 'web',
      technologies: ['Python', 'Flask', 'API REST', 'Webhooks', 'JSON'],
      features: [
        'Mise en production en quelques semaines',
        'Synchronisation automatique des commandes',
        'Réduction drastique des erreurs manuelles',
        'Interface de gestion des webhooks'
      ],
      liveUrl: '#',
      githubUrl: '#',
      status: 'completed',
      year: '2024'
    },
    {
      id: 2,
      title: 'AutoProposal - Automatisation des Propales',
      description: 'Interface web sur-mesure pour automatiser la saisie des propales PDF dans le CRM. Les commerciaux collent simplement leur PDF et peuvent modifier les données extraites avant l\'intégration automatique. Version V2 étendue à la facturation fournisseurs avec gestion des stocks.',
      image: '/api/placeholder/600/400',
      category: 'web',
      technologies: ['Python', 'HTML/CSS', 'JavaScript', 'SQL', 'PDF Processing'],
      features: [
        'Gain de temps de 80% pour les commerciaux',
        'Réduction des erreurs de saisie de 95%',
        'Interface intuitive et rapide',
        'Version V2 avec facturation fournisseurs'
      ],
      liveUrl: '#',
      githubUrl: '#',
      status: 'completed',
      year: '2024'
    },
    {
      id: 3,
      title: 'SecureLocal - Infrastructure RGPD Compliant',
      description: 'Création d\'une infrastructure locale complète pour une entreprise soucieuse du RGPD. Montage d\'un serveur dédié avec 4 GPU NVIDIA, configuration réseau isolé et mise en place d\'un environnement de travail sécurisé sans connexion internet pour protéger les données sensibles.',
      image: '/api/placeholder/600/400',
      category: 'infrastructure',
      technologies: ['Hardware', 'NVIDIA GPU', 'Python', 'PowerShell', 'Réseau'],
      features: [
        'Infrastructure 100% RGPD compliant',
        'Traitement IA local ultra-rapide',
        'Protection totale des données sensibles',
        'Environnement complètement isolé'
      ],
      liveUrl: '#',
      githubUrl: '#',
      status: 'completed',
      year: '2024'
    },
    {
      id: 4,
      title: 'Optimisation PostgreSQL - De 30s à 0.2s',
      description: 'Optimisation complète d\'un système de reporting lent en réécrivant des requêtes complexes et en optimisant l\'indexation. Utilisation d\'EXPLAIN ANALYZE pour identifier les goulots d\'étranglement et mise en place de vues matérialisées.',
      image: '/api/placeholder/600/400',
      category: 'database',
      technologies: ['PostgreSQL', 'SQL', 'Optimisation', 'Indexation'],
      features: [
        'Réduction du temps de génération de 30s à 0.2s',
        'Amélioration de 99.3% des performances',
        'Création d\'index composites optimisés',
        'Mise en place de vues matérialisées'
      ],
      liveUrl: '#',
      githubUrl: '#',
      status: 'completed',
      year: '2024'
    },
    {
      id: 5,
      title: 'Upgrade PC - HDD vers SSD',
      description: 'Amélioration des performances PC pour une PME marseillaise en remplaçant HDD par SSD. Tests de vitesse, installation Windows, migration des données et conseils pour optimiser les performances. Résultats mesurés avec amélioration de 300% en moyenne.',
      image: '/api/placeholder/600/400',
      category: 'support',
      technologies: ['Hardware', 'SSD NVMe', 'Windows', 'Migration'],
      features: [
        'Amélioration des performances de 300%',
        'Temps de démarrage réduit de 2 minutes à 15 secondes',
        'Gain de productivité estimé à 2h/employé/semaine',
        'ROI de 400% en 6 mois'
      ],
      liveUrl: '#',
      githubUrl: '#',
      status: 'completed',
      year: '2024'
    },
    {
      id: 6,
      title: 'ChatGPT en Entreprise - 5 Cas d\'Usage',
      description: 'Intégration de ChatGPT dans plusieurs entreprises marseillaises pour automatiser le service client, générer du contenu marketing, analyser les données clients, former les équipes et optimiser les processus métier.',
      image: '/api/placeholder/600/400',
      category: 'ai',
      technologies: ['OpenAI API', 'Python', 'Intégration', 'Automatisation'],
      features: [
        'Automatisation du service client',
        'Génération de contenu marketing (+40% productivité)',
        'Analyse de données clients automatisée',
        'Formation des équipes avec chatbot interne'
      ],
      liveUrl: '#',
      githubUrl: '#',
      status: 'completed',
      year: '2024'
    }
  ]

  const filteredProjets = projets.filter(projet => {
    const matchesCategory = selectedCategory === 'all' || projet.category === selectedCategory
    const matchesSearch = projet.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         projet.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         projet.technologies.some(tech => tech.toLowerCase().includes(searchTerm.toLowerCase()))
    return matchesCategory && matchesSearch
  })

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
        <title>Projets - Klyon | Portfolio et Réalisations</title>
        <meta name="description" content="Découvrez nos réalisations : sites web, applications mobiles, solutions IA et bases de données. Portfolio de projets clients réussis." />
      </Helmet>

      {/* Hero Section */}
      <section className={`py-20 lg:py-32 ${theme === 'dark' ? 'bg-gray-900' : 'bg-gray-50'}`}>
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-6 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
              Nos <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-accent-600">Projets</span>
            </h1>
            <p className={`text-lg md:text-xl ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'} mb-8 leading-relaxed`}>
              Découvrez nos réalisations et l'expertise que nous mettons au service de nos clients
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filters and Search */}
      <section className={`py-8 ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'} sticky top-20 z-40`}>
        <div className="container-custom">
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            {/* Search */}
            <div className="relative w-full lg:w-96">
              <Search className={`absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 ${
                theme === 'dark' ? 'text-gray-400' : 'text-gray-500'
              }`} />
              <input
                type="text"
                placeholder="Rechercher un projet..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className={`w-full pl-10 pr-4 py-3 rounded-xl border ${
                  theme === 'dark' 
                    ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400' 
                    : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'
                } focus:outline-none focus:ring-2 focus:ring-primary-500`}
              />
            </div>

            {/* Category Filters */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <motion.button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-xl transition-all duration-200 ${
                    selectedCategory === category.id
                      ? 'bg-primary-600 text-white'
                      : theme === 'dark'
                      ? 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <category.icon className="h-4 w-4" />
                  <span className="text-sm font-medium">{category.name}</span>
                </motion.button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className={`py-20 ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'}`}>
        <div className="container-custom">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            ref={ref}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProjets.map((projet) => (
              <motion.div
                key={projet.id}
                variants={itemVariants}
                className={`group ${theme === 'dark' ? 'bg-gray-900' : 'bg-white'} rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden`}
                whileHover={{ y: -5 }}
              >
                {/* Project Image */}
                <div className="relative h-48 overflow-hidden">
                  <div className={`w-full h-full bg-gradient-to-br ${
                    projet.category === 'web' ? 'from-primary-500 to-primary-600' :
                    projet.category === 'mobile' ? 'from-accent-500 to-accent-600' :
                    projet.category === 'ai' ? 'from-purple-500 to-purple-600' :
                    projet.category === 'database' ? 'from-green-500 to-green-600' :
                    projet.category === 'infrastructure' ? 'from-blue-500 to-blue-600' :
                    'from-orange-500 to-orange-600'
                  } flex items-center justify-center`}>
                    <div className="text-6xl text-white opacity-80">
                      {projet.category === 'web' ? '🌐' :
                       projet.category === 'mobile' ? '📱' :
                       projet.category === 'ai' ? '🤖' :
                       projet.category === 'database' ? '🗄️' :
                       projet.category === 'infrastructure' ? '🖥️' :
                       '🔧'}
                    </div>
                  </div>
                  
                  {/* Status Badge */}
                  <div className="absolute top-4 right-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      projet.status === 'completed' 
                        ? 'bg-green-500 text-white' 
                        : 'bg-yellow-500 text-white'
                    }`}>
                      {projet.status === 'completed' ? 'Terminé' : 'En cours'}
                    </span>
                  </div>

                  {/* Year Badge */}
                  <div className="absolute top-4 left-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'
                    }`}>
                      {projet.year}
                    </span>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <h3 className={`text-xl font-bold mb-3 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                    {projet.title}
                  </h3>
                  
                  <p className={`text-sm mb-4 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'} leading-relaxed`}>
                    {projet.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {projet.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className={`px-2 py-1 rounded-lg text-xs font-medium ${
                          theme === 'dark' ? 'bg-gray-700 text-gray-300' : 'bg-gray-100 text-gray-700'
                        }`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Features */}
                  <div className="mb-6">
                    <h4 className={`text-sm font-semibold mb-2 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                      Fonctionnalités :
                    </h4>
                    <ul className="space-y-1">
                      {projet.features.slice(0, 3).map((feature, index) => (
                        <li key={index} className={`text-xs ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>
                          • {feature}
                        </li>
                      ))}
                      {projet.features.length > 3 && (
                        <li className={`text-xs ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>
                          • +{projet.features.length - 3} autres...
                        </li>
                      )}
                    </ul>
                  </div>

                  {/* Action Buttons */}
                  <div className="pt-4">
                    <RouterLink
                      to="/contact"
                      className={`w-full flex items-center justify-center space-x-2 py-3 px-4 rounded-lg text-sm font-medium transition-colors duration-200 ${
                        theme === 'dark' 
                          ? 'bg-primary-600 hover:bg-primary-700 text-white' 
                          : 'bg-primary-600 hover:bg-primary-700 text-white'
                      }`}
                    >
                      <motion.div
                        className="flex items-center"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <span>Discuter de ce projet</span>
                      </motion.div>
                    </RouterLink>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {filteredProjets.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-16"
            >
              <div className={`text-6xl mb-4 ${theme === 'dark' ? 'text-gray-600' : 'text-gray-400'}`}>
                🔍
              </div>
              <h3 className={`text-xl font-semibold mb-2 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                Aucun projet trouvé
              </h3>
              <p className={`${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>
                Essayez de modifier vos critères de recherche
              </p>
            </motion.div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className={`py-20 ${theme === 'dark' ? 'bg-gray-900' : 'bg-gray-50'}`}>
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className={`text-3xl md:text-4xl font-bold mb-6 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
              Vous avez un projet en tête ?
            </h2>
            <p className={`text-lg mb-8 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
              Discutons de votre idée et créons ensemble quelque chose d'extraordinaire
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="/contact"
                className="px-8 py-4 bg-primary-600 text-white rounded-xl hover:bg-primary-700 transition-colors duration-200 font-semibold"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Discuter de votre projet
              </motion.a>
              <motion.a
                href="/services"
                className="px-8 py-4 bg-accent-600 text-white rounded-xl hover:bg-accent-700 transition-colors duration-200 font-semibold"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Voir nos services
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}

export default Projets
