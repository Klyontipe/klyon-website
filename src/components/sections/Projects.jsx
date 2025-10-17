import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { ShoppingCart, FileText, Shield, CheckCircle } from 'lucide-react'

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const projects = [
    {
      icon: ShoppingCart,
      badge: 'E-commerce',
      title: 'Intégration Shopify - CRM Sur-Mesure',
      description: 'Développement d\'une solution d\'intégration complète entre une boutique Shopify et un CRM interne personnalisé. Le système traite automatiquement les commandes via webhooks JSON et synchronise les données client en temps réel.',
      technologies: ['Python', 'Flask', 'API REST', 'Webhooks', 'JSON'],
      results: [
        'Mise en production en quelques semaines',
        'Synchronisation automatique des commandes',
        'Réduction drastique des erreurs manuelles',
        'Client très satisfait du résultat final'
      ]
    },
    {
      icon: FileText,
      badge: 'Automatisation',
      title: 'AutoProposal - Automatisation des Propales',
      description: 'Interface web sur-mesure pour automatiser la saisie des propales PDF dans le CRM. Les commerciaux collent simplement leur PDF et peuvent modifier les données extraites avant l\'intégration automatique. Version V2 étendue à la facturation fournisseurs avec gestion des stocks.',
      technologies: ['Python', 'HTML/CSS', 'JavaScript', 'SQL', 'PDF Processing'],
      results: [
        'Gain de temps considérable pour les commerciaux',
        'Interface intuitive et sur-mesure',
        'Intégration automatique dans le CRM',
        'Version V2 avec facturation fournisseurs'
      ]
    },
    {
      icon: Shield,
      badge: 'Infrastructure',
      title: 'SecureLocal - Infrastructure RGPD Compliant',
      description: 'Création d\'une infrastructure locale complète pour une entreprise soucieuse du RGPD. Montage d\'un serveur dédié avec 4 GPU NVIDIA, configuration réseau isolé et mise en place d\'un environnement de travail sécurisé sans connexion internet pour protéger les données sensibles.',
      technologies: ['Hardware', 'NVIDIA GPU', 'Python', 'PowerShell', 'Réseau'],
      results: [
        'Infrastructure locale 100% RGPD compliant',
        'Serveur haute performance avec 4 GPU NVIDIA',
        'Réseau isolé sans accès internet',
        'Protection totale des données sensibles'
      ]
    }
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
    hidden: { opacity: 0, y: 50 },
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
    <section id="projets" className="section-padding bg-gray-50 dark:bg-gray-900">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Nos Réalisations
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Découvrez nos projets sur-mesure et leurs résultats
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => {
            const Icon = project.icon
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group"
              >
                <motion.div
                  className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200 dark:border-gray-700 overflow-hidden h-full"
                  whileHover={{ y: -10 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Header */}
                  <div className="bg-gradient-to-r from-primary-600 to-accent-600 p-6 text-white">
                    <div className="flex items-center justify-between mb-4">
                      <Icon className="h-8 w-8" />
                      <span className="bg-white/20 px-3 py-1 rounded-full text-sm font-medium">
                        {project.badge}
                      </span>
                    </div>
                    <h3 className="text-xl font-semibold">
                      {project.title}
                    </h3>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Technologies */}
                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-3">
                        Technologies utilisées
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, techIndex) => (
                          <motion.span
                            key={techIndex}
                            className="px-3 py-1 bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 text-sm rounded-full"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={inView ? { opacity: 1, scale: 1 } : {}}
                            transition={{ 
                              duration: 0.3, 
                              delay: 0.3 + (index * 0.2) + (techIndex * 0.05) 
                            }}
                            whileHover={{ scale: 1.05 }}
                          >
                            {tech}
                          </motion.span>
                        ))}
                      </div>
                    </div>

                    {/* Results */}
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-3">
                        Résultats obtenus
                      </h4>
                      <ul className="space-y-2">
                        {project.results.map((result, resultIndex) => (
                          <motion.li
                            key={resultIndex}
                            className="flex items-start text-gray-600 dark:text-gray-300"
                            initial={{ opacity: 0, x: -20 }}
                            animate={inView ? { opacity: 1, x: 0 } : {}}
                            transition={{ 
                              duration: 0.4, 
                              delay: 0.4 + (index * 0.2) + (resultIndex * 0.1) 
                            }}
                          >
                            <CheckCircle className="h-5 w-5 text-primary-500 mr-3 flex-shrink-0 mt-0.5" />
                            {result}
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-16"
        >
          <motion.div
            className="bg-gradient-to-r from-primary-600 to-accent-600 rounded-2xl p-8 text-white"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <h3 className="text-2xl font-bold mb-4">
              Vous avez un projet similaire ?
            </h3>
            <p className="text-lg mb-6 opacity-90">
              Discutons de vos besoins et créons ensemble la solution parfaite pour votre entreprise.
            </p>
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
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects
