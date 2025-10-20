import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Link as RouterLink } from 'react-router-dom'
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

      {/* Hero avec fond organique animé */}
      <section className={`relative overflow-hidden py-24 lg:py-40 ${theme === 'dark' ? 'bg-gray-950' : 'bg-white'}`}>
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-24 -left-24 h-80 w-80 rounded-full blur-3xl opacity-30 bg-gradient-to-br from-primary-500 to-accent-500" />
          <div className="absolute -bottom-24 -right-24 h-96 w-96 rounded-full blur-3xl opacity-20 bg-gradient-to-tr from-purple-500 to-primary-500" />
        </div>
        <div className="container-custom relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center max-w-5xl mx-auto"
          >
            <span className="inline-flex items-center px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider bg-gradient-to-r from-primary-600/10 to-accent-600/10 text-primary-600 dark:text-primary-400 border border-primary-600/20">
              Solutions sur‑mesure et évolutives
            </span>
            <h1 className={`mt-6 text-4xl md:text-6xl font-black leading-tight ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
              Des services pensés <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-accent-500">pour votre croissance</span>
            </h1>
            <p className={`mt-6 text-lg md:text-xl ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
              Nous combinons expertise technique et sens du design pour livrer des produits performants et élégants.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Cartes services en glassmorphism */}
      <section className={`relative py-24 ${theme === 'dark' ? 'bg-gray-950' : 'bg-gray-50'}`}>
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(59,130,246,0.10),transparent_40%),radial-gradient(circle_at_80%_30%,rgba(236,72,153,0.10),transparent_45%)]" />
        <div className="container-custom relative">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            ref={ref}
            className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-8"
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -6, rotateX: 2, rotateY: -2 }}
                transition={{ type: 'spring', stiffness: 200, damping: 18 }}
                className={`relative group p-[1px] rounded-2xl bg-gradient-to-br ${
                  service.color === 'primary' ? 'from-primary-500/60 to-primary-300/20' :
                  service.color === 'accent' ? 'from-accent-500/60 to-accent-300/20' :
                  'from-purple-500/60 to-purple-300/20'
                }`}
              >
                <div className={`h-full rounded-2xl backdrop-blur-xl ${theme === 'dark' ? 'bg-gray-900/60' : 'bg-white/70'} border border-white/10 shadow-xl overflow-hidden`}> 
                  <div className="p-7">
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

                    <ul className="grid grid-cols-1 gap-3 mb-8">
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
                      className={`inline-flex items-center gap-2 px-5 py-3 rounded-xl font-semibold text-white shadow-lg transition-all duration-200 ${
                        service.color === 'primary' ? 'bg-primary-600 hover:bg-primary-700' :
                        service.color === 'accent' ? 'bg-accent-600 hover:bg-accent-700' :
                        'bg-purple-600 hover:bg-purple-700'
                      }`}
                    >
                      Discuter de mon besoin
                      <ArrowRight className="h-4 w-4" />
                    </RouterLink>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Section dédiée IA : Formation & Accompagnement */}
      <section className={`relative py-24 ${theme === 'dark' ? 'bg-gray-950' : 'bg-white'}`}>
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-5xl mx-auto text-center mb-12"
          >
            <h2 className={`text-3xl md:text-4xl font-extrabold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
              Formation & Accompagnement en Intelligence Artificielle
            </h2>
            <p className={`mt-4 text-lg ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
              Accélérez l’adoption de l’IA au sein de votre activité avec des contenus concrets et opérationnels.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className={`rounded-2xl p-6 border ${theme === 'dark' ? 'bg-gray-900/70 border-gray-800' : 'bg-white border-gray-200'} shadow-lg`}
            >
              <h3 className={`text-xl font-semibold mb-3 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                Formations IA & ChatGPT
              </h3>
              <p className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
                Programmes adaptés à tous les niveaux: découverte, usage métier, perfectionnement. Objectif: autonomie rapide et résultats tangibles.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.05 }}
              viewport={{ once: true }}
              className={`rounded-2xl p-6 border ${theme === 'dark' ? 'bg-gray-900/70 border-gray-800' : 'bg-white border-gray-200'} shadow-lg`}
            >
              <h3 className={`text-xl font-semibold mb-3 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                Accompagnement personnalisé
              </h3>
              <p className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
                Coaching et mise en place pas-à-pas pour intégrer l’IA dans vos processus: indépendants, TPE/PME et équipes métiers.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              viewport={{ once: true }}
              className={`rounded-2xl p-6 border ${theme === 'dark' ? 'bg-gray-900/70 border-gray-800' : 'bg-white border-gray-200'} shadow-lg`}
            >
              <h3 className={`text-xl font-semibold mb-3 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                Conseil stratégique & assistants GPT
              </h3>
              <p className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
                Cadrage, automatisation, création d’assistants GPT et d’outils IA sur mesure alignés avec vos objectifs business.
              </p>
            </motion.div>
          </div>

          <div className="mt-10 text-center">
            <RouterLink
              to="/contact"
              className="inline-flex items-center px-7 py-3 rounded-xl bg-primary-600 text-white hover:bg-primary-700 transition-colors duration-200 font-semibold"
            >
              Contactez-moi pour échanger sur votre projet IA
            </RouterLink>
          </div>
        </div>
      </section>

      {/* Services complémentaires en puces défilantes */}
      <section className={`relative py-16 ${theme === 'dark' ? 'bg-gray-950' : 'bg-white'}`}>
        <div className="container-custom">
          <div className="overflow-hidden">
            <motion.div
              initial={{ x: 0 }}
              animate={{ x: ['0%', '-50%'] }}
              transition={{ duration: 18, repeat: Infinity, ease: 'linear' }}
              className="flex gap-4 whitespace-nowrap"
            >
              {[...additionalServices, ...additionalServices].map((s, i) => (
                <span
                  key={i}
                  className={`inline-flex items-center gap-2 px-5 py-3 rounded-full border ${
                    theme === 'dark' ? 'bg-gray-900/80 border-gray-800 text-gray-200' : 'bg-white border-gray-200 text-gray-700'
                  }`}
                >
                  <s.icon className="h-4 w-4 text-primary-500" />
                  {s.title}
                </span>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA modernisé */}
      <section className={`relative py-24 ${theme === 'dark' ? 'bg-gray-950' : 'bg-gray-50'}`}>
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className={`text-3xl md:text-4xl font-extrabold mb-6 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
              Besoin d'un devis personnalisé ?
            </h2>
            <p className={`text-lg mb-8 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
              Contactez-nous pour discuter de votre projet et obtenir une solution sur mesure
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <RouterLink
                to="/contact"
                className="px-8 py-4 bg-gradient-to-r from-primary-600 to-accent-600 text-white rounded-xl hover:from-primary-700 hover:to-accent-700 transition-colors duration-200 font-semibold shadow-lg"
              >
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  Demander un devis
                </motion.div>
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

export default Services


