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
      year: '2025'
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
    },
    {
      id: 7,
      title: 'Formation IA - Création de GPT Personnalisés',
      description: 'Formation complète pour entreprises sur l\'utilisation avancée de ChatGPT : création de GPT personnalisés, techniques de prompt engineering, intégration API et automatisation des processus métier. Formation pratique avec cas d\'usage réels.',
      image: '/api/placeholder/600/400',
      category: 'ai',
      technologies: ['OpenAI API', 'GPT Builder', 'Prompt Engineering', 'Formation'],
      features: [
        'Formation création de GPT personnalisés',
        'Techniques avancées de prompt engineering',
        'Intégration API dans les processus métier',
        'Automatisation complète des tâches répétitives'
      ],
      liveUrl: '#',
      githubUrl: '#',
      status: 'completed',
      year: '2025'
    },
    {
      id: 8,
      title: 'App Mobile React Native - Gestion Stock',
      description: 'Application mobile cross-platform pour la gestion de stock d\'une PME marseillaise. Interface intuitive, synchronisation temps réel, notifications push et mode hors-ligne. Déploiement sur App Store et Google Play.',
      image: '/api/placeholder/600/400',
      category: 'mobile',
      technologies: ['React Native', 'JavaScript', 'Firebase', 'App Store'],
      features: [
        'Interface mobile intuitive et responsive',
        'Synchronisation temps réel avec le backend',
        'Notifications push pour les alertes stock',
        'Mode hors-ligne avec synchronisation différée'
      ],
      liveUrl: '#',
      githubUrl: '#',
      status: 'completed',
      year: '2024'
    },
    {
      id: 9,
      title: 'Participation CTF - Cybersécurité',
      description: 'Participation active aux compétitions CTF (Capture The Flag) pour développer les compétences en cybersécurité. Résolution de challenges de cryptographie, reverse engineering, web exploitation et forensique numérique.',
      image: '/api/placeholder/600/400',
      category: 'infrastructure',
      technologies: ['Cybersécurité', 'Cryptographie', 'Reverse Engineering', 'Forensique'],
      features: [
        'Résolution de challenges de cryptographie',
        'Reverse engineering d\'applications',
        'Exploitation de vulnérabilités web',
        'Analyse forensique de systèmes compromis'
      ],
      liveUrl: '#',
      githubUrl: '#',
      status: 'completed',
      year: '2023'
    },
    {
      id: 10,
      title: 'Outil Système C++ - Optimisation Performance',
      description: 'Développement d\'un outil système en C++ pour l\'optimisation des performances d\'une application critique. Utilisation d\'algorithmes avancés, gestion mémoire optimisée et parallélisation pour améliorer les performances de 400%.',
      image: '/api/placeholder/600/400',
      category: 'web',
      technologies: ['C++', 'Algorithmes', 'Optimisation', 'Parallélisation'],
      features: [
        'Amélioration des performances de 400%',
        'Algorithmes optimisés pour gros volumes',
        'Gestion mémoire avancée',
        'Parallélisation multi-thread'
      ],
      liveUrl: '#',
      githubUrl: '#',
      status: 'completed',
      year: '2023'
    },
    {
      id: 11,
      title: 'Configuration DNS - Migration Domaine',
      description: 'Migration complète d\'un domaine d\'entreprise avec configuration DNS avancée, enregistrements A/TXT, SSL/TLS et optimisation des performances. Mise en place de la redondance et monitoring des services.',
      image: '/api/placeholder/600/400',
      category: 'infrastructure',
      technologies: ['DNS', 'SSL/TLS', 'Migration', 'Monitoring'],
      features: [
        'Migration de domaine sans interruption',
        'Configuration DNS optimisée',
        'Certificats SSL/TLS automatiques',
        'Monitoring et redondance des services'
      ],
      liveUrl: '#',
      githubUrl: '#',
      status: 'completed',
      year: '2023'
    },
    {
      id: 12,
      title: 'Formation Prompt Engineering - Entreprises',
      description: 'Formation spécialisée sur les techniques de prompt engineering pour optimiser l\'utilisation de ChatGPT en entreprise. Techniques avancées, création de prompts efficaces et intégration dans les workflows métier.',
      image: '/api/placeholder/600/400',
      category: 'ai',
      technologies: ['Prompt Engineering', 'ChatGPT', 'Formation', 'Automatisation'],
      features: [
        'Techniques avancées de prompt engineering',
        'Création de prompts efficaces et reproductibles',
        'Intégration dans les workflows métier',
        'Optimisation des résultats IA'
      ],
      liveUrl: '#',
      githubUrl: '#',
      status: 'completed',
      year: '2025'
    },
    {
      id: 13,
      title: 'Système de Monitoring IA - Temps Réel',
      description: 'Développement d\'un système de monitoring intelligent utilisant l\'IA pour analyser les performances en temps réel. Détection automatique d\'anomalies, alertes prédictives et optimisation continue des ressources serveur.',
      image: '/api/placeholder/600/400',
      category: 'ai',
      technologies: ['Machine Learning', 'Python', 'TensorFlow', 'Monitoring', 'Alertes'],
      features: [
        'Détection automatique d\'anomalies en temps réel',
        'Alertes prédictives avant les pannes',
        'Optimisation automatique des ressources',
        'Dashboard interactif avec visualisations IA'
      ],
      liveUrl: '#',
      githubUrl: '#',
      status: 'completed',
      year: '2025'
    },
    {
      id: 14,
      title: 'API Microservices - Architecture Scalable',
      description: 'Conception et développement d\'une architecture microservices complète avec API Gateway, load balancing et monitoring. Migration d\'une application monolithique vers une architecture distribuée haute performance.',
      image: '/api/placeholder/600/400',
      category: 'web',
      technologies: ['Node.js', 'Docker', 'Kubernetes', 'API Gateway', 'Load Balancing'],
      features: [
        'Architecture microservices scalable',
        'API Gateway avec authentification JWT',
        'Load balancing automatique',
        'Monitoring et observabilité complète'
      ],
      liveUrl: '#',
      githubUrl: '#',
      status: 'completed',
      year: '2025'
    },
    {
      id: 15,
      title: 'App Mobile IA - Reconnaissance Vocale',
      description: 'Application mobile avec reconnaissance vocale avancée utilisant l\'IA. Transcription en temps réel, traduction automatique et commandes vocales pour l\'accessibilité. Déploiement sur iOS et Android.',
      image: '/api/placeholder/600/400',
      category: 'mobile',
      technologies: ['React Native', 'Speech Recognition', 'OpenAI Whisper', 'IA', 'Accessibilité'],
      features: [
        'Reconnaissance vocale en temps réel',
        'Traduction automatique multilingue',
        'Commandes vocales pour l\'accessibilité',
        'Interface adaptative selon le contexte'
      ],
      liveUrl: '#',
      githubUrl: '#',
      status: 'completed',
      year: '2025'
    },
    {
      id: 16,
      title: 'Blockchain & Smart Contracts - DeFi',
      description: 'Développement d\'une plateforme DeFi avec smart contracts sur Ethereum. Système de staking, yield farming et gestion automatisée des liquidités. Interface web3 intégrée avec wallet connect.',
      image: '/api/placeholder/600/400',
      category: 'web',
      technologies: ['Solidity', 'Web3.js', 'Ethereum', 'Smart Contracts', 'DeFi'],
      features: [
        'Smart contracts sécurisés et audités',
        'Système de staking automatisé',
        'Yield farming avec calculs optimisés',
        'Interface Web3 avec wallet connect'
      ],
      liveUrl: '#',
      githubUrl: '#',
      status: 'completed',
      year: '2025'
    }
  ]

  const filteredProjets = projets.filter(projet => {
    const matchesCategory = selectedCategory === 'all' || projet.category === selectedCategory
    const matchesSearch = projet.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         projet.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         projet.technologies.some(tech => tech.toLowerCase().includes(searchTerm.toLowerCase()))
    return matchesCategory && matchesSearch
  }).sort((a, b) => b.year - a.year)

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
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"
          >
            {filteredProjets.map((projet) => (
              <motion.div
                key={projet.id}
                variants={itemVariants}
                className={`group ${theme === 'dark' ? 'bg-gray-900' : 'bg-white'} rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden`}
                whileHover={{ y: -5 }}
              >
                {/* Project Header with Border */}
                <div className={`relative h-20 border-l-4 ${
                  projet.category === 'web' ? 'border-primary-500' :
                  projet.category === 'mobile' ? 'border-accent-500' :
                  projet.category === 'ai' ? 'border-purple-500' :
                  projet.category === 'database' ? 'border-green-500' :
                  projet.category === 'infrastructure' ? 'border-blue-500' :
                  'border-orange-500'
                } bg-gradient-to-r ${
                  projet.category === 'web' ? 'from-primary-50 to-primary-100 dark:from-primary-900/20 dark:to-primary-800/20' :
                  projet.category === 'mobile' ? 'from-accent-50 to-accent-100 dark:from-accent-900/20 dark:to-accent-800/20' :
                  projet.category === 'ai' ? 'from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20' :
                  projet.category === 'database' ? 'from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20' :
                  projet.category === 'infrastructure' ? 'from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20' :
                  'from-orange-50 to-orange-100 dark:from-orange-900/20 dark:to-orange-800/20'
                } flex items-center justify-between px-4`}>
                  <div className="flex items-center space-x-3">
                    <div className={`text-2xl ${
                      projet.category === 'web' ? 'text-primary-600' :
                      projet.category === 'mobile' ? 'text-accent-600' :
                      projet.category === 'ai' ? 'text-purple-600' :
                      projet.category === 'database' ? 'text-green-600' :
                      projet.category === 'infrastructure' ? 'text-blue-600' :
                      'text-orange-600'
                    }`}>
                      {projet.category === 'web' ? '🌐' :
                       projet.category === 'mobile' ? '📱' :
                       projet.category === 'ai' ? '🤖' :
                       projet.category === 'database' ? '🗄️' :
                       projet.category === 'infrastructure' ? '🖥️' :
                       '🔧'}
                    </div>
                    <div>
                      <span className={`text-sm font-semibold ${
                        theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                      }`}>
                        {projet.year}
                      </span>
                    </div>
                  </div>
                  
                  {/* Status Badge */}
                  <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
                    projet.status === 'completed' 
                      ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300'
                      : 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300'
                  }`}>
                    {projet.status === 'completed' ? 'Terminé' : 'En cours'}
                  </span>
                </div>

                {/* Project Content */}
                <div className="p-4">
                  <h3 className={`text-lg font-bold mb-2 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                    {projet.title}
                  </h3>
                  
                  <p className={`text-xs mb-3 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'} line-clamp-2`}>
                    {projet.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-1 mb-3">
                    {projet.technologies.slice(0, 3).map((tech, index) => (
                      <span
                        key={index}
                        className={`px-2 py-1 rounded-lg text-xs font-medium ${
                          theme === 'dark' ? 'bg-gray-700 text-gray-300' : 'bg-gray-100 text-gray-700'
                        }`}
                      >
                        {tech}
                      </span>
                    ))}
                    {projet.technologies.length > 3 && (
                      <span className={`px-2 py-1 rounded-lg text-xs font-medium ${
                        theme === 'dark' ? 'bg-gray-700 text-gray-300' : 'bg-gray-100 text-gray-700'
                      }`}>
                        +{projet.technologies.length - 3}
                      </span>
                    )}
                  </div>

                  {/* Features */}
                  <div className="mb-4">
                    <ul className="space-y-1">
                      {projet.features.slice(0, 2).map((feature, index) => (
                        <li key={index} className={`text-xs ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>
                          • {feature}
                        </li>
                      ))}
                      {projet.features.length > 2 && (
                        <li className={`text-xs ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>
                          • +{projet.features.length - 2} autres...
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
