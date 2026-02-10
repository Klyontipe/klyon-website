import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { Link as RouterLink } from 'react-router-dom'
import { 
  Smartphone, 
  Watch, 
  Wrench, 
  Shield, 
  Clock, 
  CheckCircle,
  ArrowRight,
  Zap,
  Settings,
  HardDrive,
  Database
} from 'lucide-react'
import { useTheme } from '../contexts/ThemeContext'

const Reparation = () => {
  const { theme } = useTheme()

  const services = [
    {
      icon: Smartphone,
      title: 'Réparation Smartphones & Tablettes',
      description: 'Diagnostic et réparation de tous types de pannes pour vos appareils mobiles.',
      features: [
        'Écrans cassés (toutes marques selon modèle)',
        'Batteries défaillantes',
        'Problèmes de charge',
        'Réparation logicielle et mise à jour'
      ],
      color: 'primary'
    },
    {
      icon: Settings,
      title: 'Upgrade & Amélioration PC',
      description: 'Amélioration des performances de vos ordinateurs avec des composants neufs.',
      features: [
        'RAM, SSD, stockage',
        'Batteries et haut-parleurs',
        'Processeurs et cartes graphiques',
        'Conseils personnalisés'
      ],
      color: 'accent'
    },
    {
      icon: Watch,
      title: 'Réparation Montres Connectées',
      description: 'Prise en charge des montres connectées pour écrans, batteries et mises à jour.',
      features: [
        'Apple Watch, Samsung Galaxy Watch',
        'Montres connectées diverses',
        'Mise à jour et optimisation',
        'Remplacement de bracelets'
      ],
      color: 'blue'
    },
    {
      icon: Database,
      title: 'Installation Logiciels',
      description: 'Installation de logiciels et optimisation de vos appareils.',
      features: [
        'Suite Office complète à vie',
        'Logiciels spécialisés',
        'Configuration et formation',
        'Optimisation système'
      ],
      color: 'purple'
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
        <title>Réparation Informatique - Smartphones, PC, Montres | Klyon</title>
        <meta name="description" content="Réparation smartphones, montres connectées, upgrade PC dans les Bouches-du-Rhône. Garantie 6 mois, Office à vie inclus. Service professionnel, délais adaptés selon pièces." />
        <meta name="keywords" content="réparation smartphone, réparation PC, upgrade ordinateur, réparation montre connectée, Office à vie, Bouches-du-Rhône, Marseille, Aix-en-Provence" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://klyon.fr/reparation" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Réparation Informatique - Smartphones, PC, Montres" />
        <meta property="og:description" content="Réparation smartphones, montres connectées, upgrade PC. Garantie 6 mois, Office à vie inclus. Service professionnel." />
        <meta property="og:url" content="https://klyon.fr/reparation" />
        <meta property="og:type" content="website" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative overflow-hidden py-24 lg:py-40 bg-gray-950">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-24 -left-24 h-80 w-80 rounded-full blur-3xl opacity-30 bg-gradient-to-br from-accent-500 to-primary-500" />
          <div className="absolute -bottom-24 -right-24 h-96 w-96 rounded-full blur-3xl opacity-20 bg-gradient-to-tr from-primary-500 to-accent-500" />
        </div>
        <div className="container-custom relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center max-w-5xl mx-auto"
          >
            <span className="inline-flex items-center px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider bg-gradient-to-r from-accent-600/10 to-primary-600/10 text-accent-600 dark:text-accent-400 border border-accent-600/20">
              <Wrench className="h-4 w-4 mr-2" />
              Réparation & Maintenance
            </span>
            <h1 className="mt-6 text-4xl md:text-6xl font-black leading-tight text-white">
              Réparation <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-500 to-primary-500">Professionnelle</span>
            </h1>
            <p className="mt-6 text-lg md:text-xl text-gray-300">
              Smartphones, montres connectées, upgrade PC et installation logiciels. 
              Délais adaptés selon les pièces disponibles.
            </p>
          </motion.div>
        </div>
      </section>


      {/* Services Section */}
      <section className="relative py-24 bg-gray-900">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              Nos Services de Réparation
            </h2>
            <p className="text-lg text-gray-300">
              Réparation professionnelle de tous vos appareils électroniques
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
                      <div className={`inline-flex items-center justify-center w-14 h-14 rounded-xl ${
                        service.color === 'primary' ? 'bg-primary-500/15 text-primary-500' :
                        service.color === 'accent' ? 'bg-accent-500/15 text-accent-500' :
                        'bg-purple-500/15 text-purple-500'
                      }`}>
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
                      className={`w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl font-semibold text-white shadow-lg transition-all duration-200 ${
                        service.color === 'primary' ? 'bg-primary-600 hover:bg-primary-700' :
                        service.color === 'accent' ? 'bg-accent-600 hover:bg-accent-700' :
                        'bg-purple-600 hover:bg-purple-700'
                      }`}
                    >
                      Demander un devis
                      <ArrowRight className="h-4 w-4" />
                    </RouterLink>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Avantages Section */}
      <section className={`py-20 ${theme === 'dark' ? 'bg-gray-900' : 'bg-white'}`}>
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              Pourquoi choisir Klyon ?
            </h2>
            <p className="text-lg text-gray-300">
              Un service de réparation professionnel et fiable
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            ref={ref}
            className="grid grid-cols-1 md:grid-cols-4 gap-8"
          >
            {[
              { icon: Clock, title: 'Service Express', description: 'Réparation rapide en 24-48h' },
              { icon: Shield, title: 'Garantie', description: 'Garantie sur toutes nos réparations' },
              { icon: Zap, title: 'Pièces Originales', description: 'Utilisation de pièces de qualité' },
              { icon: HardDrive, title: 'Récupération', description: 'Sauvegarde de vos données' }
            ].map((avantage, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="text-center"
              >
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 ${
                  theme === 'dark' ? 'bg-accent-900/50' : 'bg-accent-100'
                }`}>
                  <avantage.icon className="h-8 w-8 text-accent-600" />
                </div>
                <h3 className={`text-lg font-bold mb-2 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                  {avantage.title}
                </h3>
                <p className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>
                  {avantage.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={`py-20 ${theme === 'dark' ? 'bg-gray-800' : 'bg-gray-50'}`}>
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className={`text-3xl md:text-4xl font-bold mb-6 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
              Besoin d'une réparation ?
            </h2>
            <p className={`text-lg mb-8 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
              Contactez-nous pour un devis gratuit et rapide
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <RouterLink
                to="/contact"
                className="px-8 py-4 bg-gradient-to-r from-accent-600 to-primary-600 text-white rounded-xl hover:from-accent-700 hover:to-primary-700 transition-colors duration-200 font-semibold"
              >
                Demander un devis
              </RouterLink>
              <motion.a
                href="tel:+33766980342"
                className="px-8 py-4 bg-primary-600 text-white rounded-xl hover:bg-primary-700 transition-colors duration-200 font-semibold"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Appeler maintenant
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
      {/* Délais & Garanties */}
      <section className="py-20 bg-gray-800">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              Délais & Garanties
            </h2>
            <p className="text-lg text-gray-300">
              Transparence totale sur nos délais et garanties
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-6"
            >
              <h3 className="text-xl font-bold text-white mb-4">⏱️ Délais de Réparation</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">•</span>
                  <span><strong>Réparations simples :</strong> 24-48h (si pièces en stock)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-400 mr-2">•</span>
                  <span><strong>Pièces à commander :</strong> 3-7 jours selon fournisseur</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">•</span>
                  <span><strong>Upgrade PC :</strong> 1-3 jours selon complexité</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-400 mr-2">•</span>
                  <span><strong>Installation logiciels :</strong> Immédiat</span>
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-6"
            >
              <h3 className="text-xl font-bold text-white mb-4">🛡️ Garanties</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">•</span>
                  <span><strong>Garantie réparations :</strong> 6 mois</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">•</span>
                  <span><strong>Pièces neuves :</strong> Garantie constructeur</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-400 mr-2">•</span>
                  <span><strong>Office à vie :</strong> Support inclus</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-400 mr-2">•</span>
                  <span><strong>Conseils personnalisés :</strong> Inclus</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Reparation
