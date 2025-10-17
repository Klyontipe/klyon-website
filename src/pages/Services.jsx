import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { 
  Wrench, 
  Code, 
  Bot, 
  Database, 
  Shield, 
  Smartphone, 
  Cloud, 
  Users,
  CheckCircle,
  ArrowRight
} from 'lucide-react'
import { useTheme } from '../contexts/ThemeContext'

const Services = () => {
  const { theme } = useTheme()
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const services = [
    {
      icon: Wrench,
      title: 'Support Informatique',
      description: 'Maintenance préventive et curative de vos équipements informatiques',
      features: [
        'Maintenance préventive',
        'Dépannage rapide',
        'Installation de logiciels',
        'Sauvegarde et sécurité',
        'Formation utilisateurs'
      ],
      color: 'primary'
    },
    {
      icon: Code,
      title: 'Développement Sur-Mesure',
      description: 'Applications web et mobiles personnalisées selon vos besoins',
      features: [
        'Sites web modernes',
        'Applications mobiles',
        'Systèmes de gestion',
        'API et intégrations',
        'Maintenance évolutive'
      ],
      color: 'accent'
    },
    {
      icon: Bot,
      title: 'Intelligence Artificielle',
      description: 'Solutions IA pour automatiser et optimiser vos processus',
      features: [
        'Chatbots intelligents',
        'Automatisation de tâches',
        'Analyse de données',
        'Recommandations personnalisées',
        'Optimisation des processus'
      ],
      color: 'purple'
    }
  ]

  const additionalServices = [
    {
      icon: Database,
      title: 'Bases de Données',
      description: 'Conception, optimisation et maintenance de vos bases de données'
    },
    {
      icon: Shield,
      title: 'Cybersécurité',
      description: 'Protection de vos données et sécurisation de vos systèmes'
    },
    {
      icon: Smartphone,
      title: 'Applications Mobiles',
      description: 'Développement d\'applications iOS et Android sur mesure'
    },
    {
      icon: Cloud,
      title: 'Solutions Cloud',
      description: 'Migration et gestion de vos infrastructures cloud'
    },
    {
      icon: Users,
      title: 'Formation',
      description: 'Formation de vos équipes aux nouvelles technologies'
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
        <title>Services - Klyon | Solutions Informatiques Professionnelles</title>
        <meta name="description" content="Découvrez nos services informatiques : support, développement sur-mesure, IA, bases de données et cybersécurité. Solutions adaptées à vos besoins." />
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
              Nos <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-accent-600">Services</span>
            </h1>
            <p className={`text-lg md:text-xl ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'} mb-8 leading-relaxed`}>
              Des solutions informatiques complètes et personnalisées pour accompagner votre transformation digitale
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Services */}
      <section className={`py-20 ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'}`}>
        <div className="container-custom">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            ref={ref}
            className="space-y-16"
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center ${
                  index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                }`}
              >
                {/* Content */}
                <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-6 ${
                    service.color === 'primary' ? 'bg-primary-100 dark:bg-primary-900/50' :
                    service.color === 'accent' ? 'bg-accent-100 dark:bg-accent-900/50' :
                    'bg-purple-100 dark:bg-purple-900/50'
                  }`}>
                    <service.icon className={`h-8 w-8 ${
                      service.color === 'primary' ? 'text-primary-600' :
                      service.color === 'accent' ? 'text-accent-600' :
                      'text-purple-600'
                    }`} />
                  </div>
                  
                  <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                    {service.title}
                  </h2>
                  
                  <p className={`text-lg ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'} mb-6 leading-relaxed`}>
                    {service.description}
                  </p>

                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <CheckCircle className={`h-5 w-5 mr-3 ${
                          service.color === 'primary' ? 'text-primary-600' :
                          service.color === 'accent' ? 'text-accent-600' :
                          'text-purple-600'
                        }`} />
                        <span className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    to="/contact"
                    className={`inline-flex items-center px-6 py-3 rounded-xl font-semibold text-white transition-all duration-200 ${
                      service.color === 'primary' ? 'bg-primary-600 hover:bg-primary-700' :
                      service.color === 'accent' ? 'bg-accent-600 hover:bg-accent-700' :
                      'bg-purple-600 hover:bg-purple-700'
                    }`}
                  >
                    <motion.div
                      className="flex items-center"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      En savoir plus
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </motion.div>
                  </Link>
                </div>

                {/* Visual */}
                <div className={`${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                  <motion.div
                    className={`relative p-8 rounded-3xl ${
                      service.color === 'primary' ? 'bg-gradient-to-br from-primary-50 to-primary-100 dark:from-primary-900/20 dark:to-primary-800/20' :
                      service.color === 'accent' ? 'bg-gradient-to-br from-accent-50 to-accent-100 dark:from-accent-900/20 dark:to-accent-800/20' :
                      'bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20'
                    }`}
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="text-center">
                      <div className={`text-6xl mb-4 ${
                        service.color === 'primary' ? 'text-primary-600' :
                        service.color === 'accent' ? 'text-accent-600' :
                        'text-purple-600'
                      }`}>
                        {service.icon === Wrench ? '🛠️' : service.icon === Code ? '💻' : '🤖'}
                      </div>
                      <h3 className={`text-xl font-semibold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                        {service.title}
                      </h3>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Additional Services */}
      <section className={`py-20 ${theme === 'dark' ? 'bg-gray-900' : 'bg-gray-50'}`}>
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
              Services Complémentaires
            </h2>
            <p className={`text-lg ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
              Des solutions spécialisées pour tous vos besoins informatiques
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {additionalServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`p-6 rounded-2xl ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'} shadow-lg hover:shadow-xl transition-all duration-300`}
                whileHover={{ y: -5 }}
              >
                <div className="flex items-center mb-4">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center mr-4 ${
                    theme === 'dark' ? 'bg-gray-700' : 'bg-gray-100'
                  }`}>
                    <service.icon className="h-6 w-6 text-primary-600" />
                  </div>
                  <h3 className={`text-lg font-semibold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                    {service.title}
                  </h3>
                </div>
                <p className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={`py-20 ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'}`}>
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className={`text-3xl md:text-4xl font-bold mb-6 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
              Besoin d'un devis personnalisé ?
            </h2>
            <p className={`text-lg mb-8 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
              Contactez-nous pour discuter de votre projet et obtenir une solution sur mesure
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="px-8 py-4 bg-primary-600 text-white rounded-xl hover:bg-primary-700 transition-colors duration-200 font-semibold"
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Demander un devis
                </motion.div>
              </Link>
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

export default Services
