import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
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

  const quickServices = [
    {
      icon: Bot,
      title: 'Intelligence Artificielle',
      description: 'Formations ChatGPT et solutions IA sur mesure',
      href: '/ia',
      color: 'purple',
      badge: 'Populaire'
    },
    {
      icon: Code,
      title: 'Développement',
      description: 'Web, mobile et applications sur mesure',
      href: '/developpement',
      color: 'accent',
      badge: 'Expert'
    },
    {
      icon: Wrench,
      title: 'Réparation',
      description: 'Smartphones, montres et maintenance',
      href: '/reparation',
      color: 'primary',
      badge: 'Garantie 6 mois'
    }
  ]

  const stats = [
    { number: '32+', label: 'Projets réalisés', icon: Code },
    { number: '100%', label: 'Clients satisfaits', icon: Star },
    { number: '2.5', label: 'Années d\'IA', icon: TrendingUp },
    { number: '6 mois', label: 'Garantie réparations', icon: Users }
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
        <title>Klyon - Expert IA & Développement | Réparation Informatique Bouches-du-Rhône</title>
        <meta name="description" content="Klyon : Expert en Intelligence Artificielle, développement web/mobile et réparation informatique dans les Bouches-du-Rhône. Formation ChatGPT, applications sur mesure, réparation smartphones. 32+ projets réalisés." />
        <meta name="keywords" content="intelligence artificielle, développement web, réparation informatique, ChatGPT, formation IA, application mobile, réparation smartphone, Bouches-du-Rhône, Marseille, Aix-en-Provence" />
        <meta name="author" content="Lorenzo Fortini - Klyon" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://klyon.fr" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Klyon - Expert IA & Développement | Réparation Informatique" />
        <meta property="og:description" content="Expert en Intelligence Artificielle, développement web/mobile et réparation informatique dans les Bouches-du-Rhône. Formation ChatGPT, applications sur mesure." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://klyon.fr" />
        <meta property="og:image" content="https://klyon.fr/assets/logowhite.png" />
        <meta property="og:site_name" content="Klyon" />
        <meta property="og:locale" content="fr_FR" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Klyon - Expert IA & Développement" />
        <meta name="twitter:description" content="Expert en Intelligence Artificielle, développement web/mobile et réparation informatique dans les Bouches-du-Rhône." />
        <meta name="twitter:image" content="https://klyon.fr/assets/logowhite.png" />
        
        {/* Géolocalisation */}
        <meta name="geo.region" content="FR-13" />
        <meta name="geo.placename" content="Bouches-du-Rhône" />
        <meta name="geo.position" content="43.2965;5.3698" />
        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Klyon",
            "description": "Expert en Intelligence Artificielle, développement web/mobile et réparation informatique dans les Bouches-du-Rhône",
            "url": "https://klyon.fr",
            "telephone": "+33766980342",
            "email": "klyonme@gmail.com",
            "address": {
              "@type": "PostalAddress",
              "addressRegion": "Bouches-du-Rhône",
              "addressCountry": "FR"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "43.2965",
              "longitude": "5.3698"
            },
            "openingHours": "Mo-Fr 09:00-18:00",
            "priceRange": "€€",
            "serviceArea": {
              "@type": "GeoCircle",
              "geoMidpoint": {
                "@type": "GeoCoordinates",
                "latitude": "43.2965",
                "longitude": "5.3698"
              },
              "geoRadius": "50000"
            },
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Services Klyon",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Intelligence Artificielle",
                    "description": "Formation ChatGPT, assistants IA sur mesure, automatisation"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Développement Web & Mobile",
                    "description": "Applications sur mesure, React Native, APIs Python"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Réparation Informatique",
                    "description": "Smartphones, PC, montres connectées, upgrade"
                  }
                }
              ]
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "5",
              "reviewCount": "32"
            }
          })}
        </script>
      </Helmet>
      
      <Hero />
      <About />

      {/* Quick Services Overview */}
      <section className="py-20 bg-gray-800">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              Nos Services
            </h2>
            <p className="text-lg text-gray-300">
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
                className="p-6 rounded-2xl bg-gray-900 shadow-lg hover:shadow-xl transition-all duration-300"
                whileHover={{ y: -5 }}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className={`w-16 h-16 rounded-2xl flex items-center justify-center ${
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
                  
                  {/* Badge */}
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    service.badge === 'Populaire' ? 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300' :
                    service.badge === 'Expert' ? 'bg-accent-100 text-accent-800 dark:bg-accent-900 dark:text-accent-300' :
                    'bg-primary-100 text-primary-800 dark:bg-primary-900 dark:text-primary-300'
                  }`}>
                    {service.badge}
                  </span>
                </div>
                
                <h3 className="text-xl font-bold mb-3 text-white">
                  {service.title}
                </h3>
                
                <p className="mb-6 text-gray-300">
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
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <RouterLink
              to="/ia"
              className="inline-flex items-center px-8 py-4 bg-primary-600 text-white rounded-xl hover:bg-primary-700 transition-colors duration-200 font-semibold"
            >
              Découvrir nos services
              <ArrowRight className="ml-2 h-5 w-5" />
            </RouterLink>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gray-900">
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
                <div className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 bg-primary-900/50">
                  <stat.icon className="h-8 w-8 text-primary-600" />
                </div>
                <div className="text-3xl md:text-4xl font-bold mb-2 text-white">
                  {stat.number}
                </div>
                <div className="text-sm text-gray-400">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Témoignages Clients */}
      <section className="py-20 bg-gray-900">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              Ce que disent nos clients
            </h2>
            <p className="text-lg text-gray-300">
              Recommandations LinkedIn et témoignages clients
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-gray-800 rounded-2xl p-6 shadow-lg"
            >
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-current" />
                  ))}
                </div>
              </div>
              <p className="text-gray-300 mb-4 italic">
                "Avec Lorenzo, il n'y a pas de problème, il n'y a que des solutions ! Toujours au service, 
                toujours positif et inventif, il délivre et raconte en image. Je suis et je resterai toujours 
                dans ton fan Club, Lorenzo !"
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-primary-500 rounded-full flex items-center justify-center text-white font-bold mr-3">
                  P
                </div>
                <div>
                  <p className="text-white font-semibold">Pascale A.</p>
                  <p className="text-gray-400 text-sm">DG Associée - Feeder / EIZO France</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-gray-800 rounded-2xl p-6 shadow-lg"
            >
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-current" />
                  ))}
                </div>
              </div>
              <p className="text-gray-300 mb-4 italic">
                "J'ai eu le plaisir de travailler quelques mois avec Lorenzo durant son stage au sein de Feeder. 
                Particulièrement posé et mature malgré son jeune âge, j'ai pris grand plaisir à le découvrir. 
                Lorenzo est très travailleur et ordonné dans sa réflexion et sera sans nul doute un salarié fiable 
                sur lequel son futur employeur pourra compter et s'appuyer. C'est un jeune homme qui s'investit 
                et mérite la belle carrière vers laquelle il se dirige. C'était un plaisir."
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-accent-500 rounded-full flex items-center justify-center text-white font-bold mr-3">
                  P
                </div>
                <div>
                  <p className="text-white font-semibold">Pascale P.</p>
                  <p className="text-gray-400 text-sm">Gestionnaire Formations Maritimes - PONANT</p>
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center mt-12"
          >
            <a
              href="https://linkedin.com/in/lorenzo-fortini"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-semibold transition-colors duration-200"
            >
              <Users className="h-5 w-5 mr-2" />
              Voir toutes les recommandations LinkedIn
            </a>
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
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              Prêt à démarrer votre projet ?
            </h2>
            <p className="text-lg mb-8 text-gray-300">
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
                to="/developpement"
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
