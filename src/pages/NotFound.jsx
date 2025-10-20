import { Link as RouterLink } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { Home, ArrowLeft } from 'lucide-react'

const NotFound = () => {
  return (
    <>
      <Helmet>
        <title>Page non trouvée - Klyon</title>
        <meta name="description" content="La page que vous recherchez n'existe pas." />
      </Helmet>

      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-2xl mx-auto"
        >
          <motion.div
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-8"
          >
            <div className="text-9xl font-bold text-primary-600 dark:text-primary-400 mb-4">
              404
            </div>
            <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-accent-500 mx-auto rounded-full"></div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6"
          >
            Page non trouvée
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed"
          >
            Désolé, la page que vous recherchez n'existe pas ou a été déplacée. 
            Vérifiez l'URL ou retournez à la page d'accueil.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <RouterLink
              to="/"
              className="inline-flex items-center justify-center px-8 py-3 bg-gradient-to-r from-primary-600 to-accent-600 text-white rounded-lg font-semibold hover:from-primary-700 hover:to-accent-700 transition-all duration-200"
            >
              <Home className="h-5 w-5 mr-2" />
              Retour à l'accueil
            </RouterLink>

            <button
              onClick={() => window.history.back()}
              className="inline-flex items-center justify-center px-8 py-3 border-2 border-primary-600 text-primary-600 dark:text-primary-400 rounded-lg font-semibold hover:bg-primary-600 hover:text-white transition-all duration-200"
            >
              <ArrowLeft className="h-5 w-5 mr-2" />
              Page précédente
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-12"
          >
            <div className="text-gray-500 dark:text-gray-400 text-sm">
              Code d'erreur: 404 | Klyon - Solutions Informatiques
            </div>
          </motion.div>
        </motion.div>
      </div>
    </>
  )
}

export default NotFound
