import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Link as RouterLink } from 'react-router-dom'
import { 
  ArrowRight, 
  CheckCircle, 
  Star, 
  Users, 
  TrendingUp,
  Code,
  Database,
  Bot,
  Wrench
} from 'lucide-react'
import { useTheme } from '../contexts/ThemeContext'
import Hero from '../components/sections/Hero'
import About from '../components/sections/About'

const Home = () => {
  const { theme } = useTheme()
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const quickServices = [
    {
      icon: Wrench,
      title: 'Support Informatique',
      description: 'Maintenance et dépannage de vos équipements',
      href: '/services',
      color: 'primary'
    },
    {
      icon: Code,
      title: 'Développement Web',
      description: 'Sites et applications sur mesure',
      href: '/services',
      color: 'accent'
    },
    {
      icon: Bot,
      title: 'Intelligence Artificielle',
      description: 'Solutions IA pour automatiser vos processus',
      href: '/services',
      color: 'purple'
    }
  ]

  const stats = [
    { number: '50+', label: 'Projets réalisés', icon: Code },
    { number: '100%', label: 'Clients satisfaits', icon: Star },
    { number: '5+', label: 'Années d\'expérience', icon: TrendingUp },
    { number: '24h', label: 'Temps de réponse', icon: Users }
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
        <title>Klyon - Solutions Informatiques Professionnelles</title>
        <meta name="description" content="Klyon, votre partenaire informatique dans le Sud de la France. Support, développement sur-mesure et solutions IA." />
        <meta property="og:title" content="Klyon - Solutions Informatiques Professionnelles" />
        <meta property="og:description" content="Votre partenaire informatique dans le Sud de la France. Support, développement sur-mesure et solutions IA." />
        <meta property="og:url" content="https://klyon.fr" />
        <meta property="og:image" content="https://klyon.fr/logo.jpg" />
      </Helmet>
      
      <Hero />
      <About />

      {/* Quick Services Overview */}
      <section className={`py-20 ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'}`}>
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
              Nos Services
            </h2>
            <p className={`text-lg ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
              Des solutions complètes pour tous vos besoins informatiques
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            ref={ref}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12"
          >
            {quickServices.map((service, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className={`p-6 rounded-2xl ${theme === 'dark' ? 'bg-gray-900' : 'bg-gray-50'} shadow-lg hover:shadow-xl transition-all duration-300`}
                whileHover={{ y: -5 }}
              >
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 ${
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
                
                <h3 className={`text-xl font-bold mb-3 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                  {service.title}
                </h3>
                
                <p className={`mb-6 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
                  {service.description}
                </p>
                
                <RouterLink
                  to={service.href}
                  className={`inline-flex items-center text-sm font-semibold ${
                    service.color === 'primary' ? 'text-primary-600 hover:text-primary-700' :
                    service.color === 'accent' ? 'text-accent-600 hover:text-accent-700' :
                    'text-purple-600 hover:text-purple-700'
                  } transition-colors duration-200`}
                >
                  En savoir plus
                  <ArrowRight className="ml-2 h-4 w-4" />
                </RouterLink>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <RouterLink
              to="/services"
              className="inline-flex items-center px-8 py-4 bg-primary-600 text-white rounded-xl hover:bg-primary-700 transition-colors duration-200 font-semibold"
            >
              Voir tous nos services
              <ArrowRight className="ml-2 h-5 w-5" />
            </RouterLink>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className={`py-20 ${theme === 'dark' ? 'bg-gray-900' : 'bg-gray-50'}`}>
        <div className="container-custom">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            ref={ref}
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="text-center"
              >
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 ${
                  theme === 'dark' ? 'bg-primary-900/50' : 'bg-primary-100'
                }`}>
                  <stat.icon className="h-8 w-8 text-primary-600" />
                </div>
                <div className={`text-3xl md:text-4xl font-bold mb-2 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                  {stat.number}
                </div>
                <div className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>
                  {stat.label}
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
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className={`text-3xl md:text-4xl font-bold mb-6 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
              Prêt à démarrer votre projet ?
            </h2>
            <p className={`text-lg mb-8 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
              Contactez-nous pour discuter de vos besoins et obtenir un devis personnalisé
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <RouterLink
                to="/contact"
                className="px-8 py-4 bg-primary-600 text-white rounded-xl hover:bg-primary-700 transition-colors duration-200 font-semibold"
              >
                Demander un devis
              </RouterLink>
              <RouterLink
                to="/projets"
                className="px-8 py-4 bg-accent-600 text-white rounded-xl hover:bg-accent-700 transition-colors duration-200 font-semibold"
              >
                Voir nos réalisations
              </RouterLink>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}

export default Home
