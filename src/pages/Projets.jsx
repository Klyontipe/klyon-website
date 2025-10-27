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
  Wrench,
  Calendar,
  CheckCircle,
  Tag,
  ArrowRight
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
      title: 'Programme Fonctionnel - Gestion Stock Automatique',
      description: 'Programme sur mesure fonctionnel qui tourne en arrière-plan pour automatiser la gestion de stock d\'une PME marseillaise. Synchronisation automatique avec la base de données, alertes intelligentes et optimisation des commandes.',
      image: '/api/placeholder/600/400',
      category: 'web',
      technologies: ['Python', 'SQL', 'Automatisation', 'Monitoring'],
      features: [
        'Programme qui tourne en arrière-plan 24/7',
        'Synchronisation automatique avec la base de données',
        'Alertes intelligentes pour les stocks faibles',
        'Optimisation automatique des commandes fournisseurs'
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
      id: 6,
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
      id: 7,
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
      id: 8,
      title: 'Interface Fonctionnelle - Gestion Produits Réseau',
      description: 'Interface fonctionnelle interne au réseau qui permet d\'ajouter des produits par rapport à une base de données existante. Interface intuitive pour les équipes internes avec synchronisation automatique et gestion des stocks.',
      image: '/api/placeholder/600/400',
      category: 'web',
      technologies: ['Python', 'SQL', 'Interface Web', 'Base de données'],
      features: [
        'Interface interne au réseau sécurisée',
        'Ajout de produits via base de données',
        'Synchronisation automatique des données',
        'Gestion des stocks en temps réel'
      ],
      liveUrl: '#',
      githubUrl: '#',
      status: 'completed',
      year: '2025'
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
      title: 'Montage PC - Configuration Sur-Mesure',
      description: 'Montage de PC sur-mesure pour PME marseillaises avec sélection optimale des composants selon les besoins métier. Configuration complète, installation OS, tests de performance et garantie pièces et main d\'œuvre.',
      image: '/api/placeholder/600/400',
      category: 'support',
      technologies: ['Hardware', 'Montage PC', 'Configuration', 'Tests'],
      features: [
        'Sélection optimale des composants',
        'Montage professionnel et testé',
        'Configuration complète du système',
        'Garantie pièces et main d\'œuvre'
      ],
      liveUrl: '#',
      githubUrl: '#',
      status: 'completed',
      year: '2024'
    },
    {
      id: 13,
      title: 'Installation OS - Windows & Linux',
      description: 'Installation professionnelle de systèmes d\'exploitation Windows et Linux pour entreprises. Configuration réseau, installation des drivers, optimisation des performances et formation utilisateurs.',
      image: '/api/placeholder/600/400',
      category: 'support',
      technologies: ['Windows', 'Linux', 'Installation', 'Configuration'],
      features: [
        'Installation Windows et Linux',
        'Configuration réseau automatique',
        'Installation des drivers optimisés',
        'Formation utilisateurs incluse'
      ],
      liveUrl: '#',
      githubUrl: '#',
      status: 'completed',
      year: '2024'
    },
    {
      id: 14,
      title: 'Récupération Données - Mac & Disques Durs',
      description: 'Service de récupération de données pour Mac et disques durs endommagés. Récupération de fichiers supprimés, réparation de partitions corrompues et sauvegarde sécurisée des données récupérées.',
      image: '/api/placeholder/600/400',
      category: 'support',
      technologies: ['Récupération', 'Mac', 'Disques Durs', 'Sauvegarde'],
      features: [
        'Récupération de fichiers supprimés',
        'Réparation de partitions corrompues',
        'Récupération sur Mac et PC',
        'Sauvegarde sécurisée des données'
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
        <title>Projets Réalisés - Portfolio Klyon | Développement IA & Web</title>
        <meta name="description" content="Découvrez nos projets réalisés : intégration Shopify-CRM, automatisation PDF, infrastructure IA locale, assistants ChatGPT. 14+ projets réussis dans les Bouches-du-Rhône." />
        <meta name="keywords" content="projets réalisés, portfolio, développement web, intelligence artificielle, automatisation, Shopify, CRM, ChatGPT, Bouches-du-Rhône" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://klyon.fr/projets" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Projets Réalisés - Portfolio Klyon" />
        <meta property="og:description" content="Découvrez nos projets réalisés : intégration Shopify-CRM, automatisation PDF, infrastructure IA locale, assistants ChatGPT." />
        <meta property="og:url" content="https://klyon.fr/projets" />
        <meta property="og:type" content="website" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative overflow-hidden py-24 lg:py-40 bg-gray-950">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-24 -left-24 h-80 w-80 rounded-full blur-3xl opacity-30 bg-gradient-to-br from-primary-500 to-accent-500" />
          <div className="absolute -bottom-24 -right-24 h-80 w-80 rounded-full blur-3xl opacity-30 bg-gradient-to-br from-accent-500 to-primary-500" />
        </div>
        
        <div className="container-custom relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
              Nos <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-accent-400">Projets</span> Réalisés
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              14+ projets réussis : développement web, intelligence artificielle, automatisation et support IT. 
              Découvrez nos réalisations concrètes pour nos clients dans les Bouches-du-Rhône.
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
              {[
                { number: '14+', label: 'Projets réalisés' },
                { number: '100%', label: 'Clients satisfaits' },
                { number: '6', label: 'Secteurs d\'activité' },
                { number: '2.5', label: 'Années d\'expérience' }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  className="text-center"
                >
                  <div className="text-2xl lg:text-3xl font-bold text-primary-400 mb-2">{stat.number}</div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Filters & Search */}
      <section className="py-12 bg-gray-900">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col lg:flex-row gap-6 items-center justify-between"
          >
            {/* Search */}
            <div className="relative w-full lg:w-96">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="text"
                placeholder="Rechercher un projet..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
            </div>

            {/* Category Filters */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <motion.button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-200 ${
                    selectedCategory === category.id
                      ? 'bg-primary-500 text-white'
                      : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <category.icon className="h-4 w-4" />
                  {category.name}
                </motion.button>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 bg-gray-950">
        <div className="container-custom">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 lg:grid-cols-2 gap-8"
          >
            {filteredProjets.map((projet) => (
              <motion.div
                key={projet.id}
                variants={itemVariants}
                className="group bg-gray-900 rounded-2xl overflow-hidden border border-gray-800 hover:border-primary-500/50 transition-all duration-300"
              >
                {/* Project Image */}
                <div className="relative h-48 bg-gradient-to-br from-gray-800 to-gray-700 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute top-4 left-4">
                    <span className="inline-flex items-center gap-1 px-3 py-1 bg-primary-500/20 text-primary-400 text-sm font-medium rounded-full border border-primary-500/30">
                      <Calendar className="h-3 w-3" />
                      {projet.year}
                    </span>
                  </div>
                  <div className="absolute top-4 right-4">
                    <span className={`inline-flex items-center gap-1 px-3 py-1 text-sm font-medium rounded-full ${
                      projet.status === 'completed' 
                        ? 'bg-green-500/20 text-green-400 border border-green-500/30'
                        : 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30'
                    }`}>
                      <CheckCircle className="h-3 w-3" />
                      {projet.status === 'completed' ? 'Terminé' : 'En cours'}
                    </span>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2 group-hover:text-primary-400 transition-colors">
                        {projet.title}
                      </h3>
                    </div>
                  </div>

                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {projet.description}
                  </p>

                  {/* Technologies */}
                  <div className="mb-6">
                    <div className="flex flex-wrap gap-2">
                      {projet.technologies.map((tech, index) => (
                        <span
                          key={index}
                          className="inline-flex items-center gap-1 px-2 py-1 bg-gray-800 text-gray-300 text-xs font-medium rounded border border-gray-700"
                        >
                          <Tag className="h-3 w-3" />
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Features */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-300 mb-3">Résultats obtenus :</h4>
                    <ul className="space-y-2">
                      {projet.features.map((feature, index) => (
                        <li key={index} className="flex items-start gap-2 text-sm text-gray-400">
                          <CheckCircle className="h-4 w-4 text-green-400 mt-0.5 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Contact Button */}
                  <div className="flex gap-3">
                    <motion.a
                      href="/contact"
                      className="flex items-center gap-2 px-4 py-2 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition-colors"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <ArrowRight className="h-4 w-4" />
                      Discuter de ce projet
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {filteredProjets.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-12"
            >
              <p className="text-gray-400 text-lg">Aucun projet trouvé pour cette recherche.</p>
            </motion.div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-500 to-accent-500">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Prêt à réaliser votre projet ?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Que ce soit pour l'IA, le développement web ou le support IT, 
              nous transformons vos idées en solutions concrètes.
            </p>
            <motion.a
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-primary-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
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

export default Projets