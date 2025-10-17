import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { 
  Code, 
  Database, 
  Bot, 
  Brain, 
  Network, 
  Wrench,
  Star,
  Puzzle,
  Users
} from 'lucide-react'

const Competences = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const competenceCategories = [
    {
      icon: Code,
      title: 'Développement Logiciel',
      items: [
        {
          icon: Code,
          title: 'Langages',
          tags: ['Python', 'JavaScript', 'C', 'C#', 'HTML', 'CSS']
        },
        {
          icon: Code,
          title: 'Frameworks & Outils',
          tags: ['Django', 'Flask', 'Node.js', 'React', 'Vue.js']
        },
        {
          icon: Code,
          title: 'Développement d\'API',
          tags: ['REST', 'GraphQL'],
          example: 'Exemple : API pour connecter ERP interne avec CRM externe'
        },
        {
          icon: Code,
          title: 'Intégrations API',
          tags: ['Google', 'Outlook', 'Excel', 'Stripe'],
          example: 'Exemple : automatisation envoi factures Outlook + suivi paiements Stripe'
        }
      ]
    },
    {
      icon: Database,
      title: 'Bases de Données',
      items: [
        {
          icon: Database,
          title: 'PostgreSQL',
          level: 'Expertise avancée',
          tags: ['Optimisation', 'Migration', 'Performance']
        },
        {
          icon: Database,
          title: 'Autres SGBD',
          tags: ['SQL Server', 'MySQL', 'MongoDB']
        },
        {
          icon: Database,
          title: 'Optimisation',
          example: 'Exemple : optimisation système reporting lent via réécriture requêtes complexes'
        },
        {
          icon: Database,
          title: 'Migration',
          example: 'Exemple : migration MySQL vers PostgreSQL pour uniformiser système d\'information'
        }
      ]
    },
    {
      icon: Bot,
      title: 'Automatisation',
      items: [
        {
          icon: Bot,
          title: 'Workflows',
          tags: ['Zapier', 'Make', 'N8n'],
          example: 'Exemple : automatisation formulaire web → tableur Excel partagé'
        },
        {
          icon: Bot,
          title: 'Scripts Sur-Mesure',
          tags: ['Python', 'JavaScript'],
          example: 'Automatisation ERP, CRM, Excel, mailing'
        },
        {
          icon: Bot,
          title: 'Gestion E-mails',
          tags: ['SMTP', 'Réponses auto', 'Organisation'],
          example: 'Exemple : réponse auto "demande de devis" → accusé réception personnalisé'
        },
        {
          icon: Bot,
          title: 'OCR & Documents',
          tags: ['PDF Processing', 'OCR', 'Python'],
          example: 'Exemple : extraction montants/dates devis PDF → alimentation ERP'
        }
      ]
    },
    {
      icon: Brain,
      title: 'Intelligence Artificielle',
      items: [
        {
          icon: Brain,
          title: 'Intégrations IA',
          tags: ['OpenAI', 'Hugging Face', 'LLMs'],
          example: 'Exemple : génération auto réponses client IA dans SAV'
        },
        {
          icon: Brain,
          title: 'IA Locale',
          tags: ['GPU NVIDIA', 'On-premise'],
          level: 'Configuration minimale requise'
        },
        {
          icon: Brain,
          title: 'ChatGPT',
          tags: ['Formation', 'Webhooks', 'Intégrations'],
          example: 'Exemple : chatbot interne connecté base documentaire entreprise'
        }
      ]
    },
    {
      icon: Network,
      title: 'Infrastructure & Réseau',
      items: [
        {
          icon: Network,
          title: 'Azure AD',
          example: 'Exemple : gestion comptes utilisateurs et permissions PME'
        },
        {
          icon: Network,
          title: 'Hébergement Web',
          tags: ['Sécurité', 'Serveurs internes']
        }
      ]
    },
    {
      icon: Wrench,
      title: 'Support IT',
      items: [
        {
          icon: Wrench,
          title: 'PC & Hardware',
          tags: ['Réparation niveau 1', 'Upgrades SSD/NVMe', 'RAM'],
          example: 'Exemple : amélioration performances HDD → SSD'
        },
        {
          icon: Wrench,
          title: 'Installation Logicielle',
          tags: ['OS', 'Office', 'Environnement collaboratif']
        },
        {
          icon: Wrench,
          title: 'Solutions Collaboratives',
          tags: ['Google Workspace', 'Teams', 'Partage fichiers'],
          example: 'Exemple : Drive partagé sécurisé équipe commerciale'
        },
        {
          icon: Wrench,
          title: 'Support Utilisateurs',
          tags: ['Réseau', 'Imprimantes', 'Dépannage distant']
        }
      ]
    }
  ]

  const positioningItems = [
    {
      icon: Star,
      title: 'Expertise principale',
      description: 'Automatisation & intégration sur mesure'
    },
    {
      icon: Puzzle,
      title: 'Polyvalence',
      description: 'Développement, bases de données, IA, support IT'
    },
    {
      icon: Users,
      title: 'Accompagnement',
      description: 'Solutions robustes, fonctionnelles, adaptées aux besoins métiers'
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

  const categoryVariants = {
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
    <section id="competences" className="section-padding bg-gray-50 dark:bg-gray-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50/50 to-accent-50/50 dark:from-primary-900/20 dark:to-accent-900/20"></div>
      
      <div className="container-custom relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Compétences Techniques
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Un éventail complet de technologies pour des solutions sur-mesure
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="space-y-12"
        >
          {competenceCategories.map((category, categoryIndex) => {
            const CategoryIcon = category.icon
            return (
              <motion.div
                key={categoryIndex}
                variants={categoryVariants}
                className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-gray-700"
              >
                <div className="flex items-center mb-8 pb-6 border-b border-gray-200 dark:border-gray-700">
                  <motion.div
                    className="w-16 h-16 bg-gradient-to-br from-primary-500 to-accent-500 rounded-xl flex items-center justify-center mr-6"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <CategoryIcon className="h-8 w-8 text-white" />
                  </motion.div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                    {category.title}
                  </h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {category.items.map((item, itemIndex) => {
                    const ItemIcon = item.icon
                    return (
                      <motion.div
                        key={itemIndex}
                        className="bg-gray-50 dark:bg-gray-700 p-6 rounded-xl border border-gray-200 dark:border-gray-600 hover:shadow-lg transition-all duration-300"
                        initial={{ opacity: 0, y: 20 }}
                        animate={inView ? { opacity: 1, y: 0 } : {}}
                        transition={{ 
                          duration: 0.4, 
                          delay: 0.1 + (categoryIndex * 0.1) + (itemIndex * 0.05) 
                        }}
                        whileHover={{ y: -5 }}
                      >
                        <div className="flex items-center mb-4">
                          <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-accent-500 rounded-lg flex items-center justify-center mr-4">
                            <ItemIcon className="h-6 w-6 text-white" />
                          </div>
                          <div>
                            <h4 className="font-semibold text-gray-900 dark:text-white">
                              {item.title}
                            </h4>
                            {item.level && (
                              <span className="text-sm text-primary-600 dark:text-primary-400 font-medium">
                                {item.level}
                              </span>
                            )}
                          </div>
                        </div>

                        {item.tags && (
                          <div className="flex flex-wrap gap-2 mb-4">
                            {item.tags.map((tag, tagIndex) => (
                              <motion.span
                                key={tagIndex}
                                className="px-3 py-1 bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 text-sm rounded-full"
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={inView ? { opacity: 1, scale: 1 } : {}}
                                transition={{ 
                                  duration: 0.3, 
                                  delay: 0.2 + (categoryIndex * 0.1) + (itemIndex * 0.05) + (tagIndex * 0.02) 
                                }}
                                whileHover={{ scale: 1.05 }}
                              >
                                {tag}
                              </motion.span>
                            ))}
                          </div>
                        )}

                        {item.example && (
                          <p className="text-sm text-gray-600 dark:text-gray-400 italic bg-accent-50 dark:bg-accent-900/20 p-3 rounded-lg border-l-4 border-accent-500">
                            {item.example}
                          </p>
                        )}
                      </motion.div>
                    )
                  })}
                </div>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Positionnement Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16"
        >
          <div className="bg-gradient-to-r from-primary-600 to-accent-600 rounded-2xl p-8 text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-primary-600/90 to-accent-600/90"></div>
            <div className="relative z-10">
              <h3 className="text-2xl font-bold text-center mb-8">
                🎯 Positionnement
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {positioningItems.map((item, index) => {
                  const Icon = item.icon
                  return (
                    <motion.div
                      key={index}
                      className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20 text-center"
                      initial={{ opacity: 0, y: 20 }}
                      animate={inView ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                      whileHover={{ y: -5, scale: 1.02 }}
                    >
                      <Icon className="h-12 w-12 mx-auto mb-4 text-white" />
                      <h4 className="text-lg font-semibold mb-2">
                        {item.title}
                      </h4>
                      <p className="text-white/90">
                        {item.description}
                      </p>
                    </motion.div>
                  )
                })}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Competences
