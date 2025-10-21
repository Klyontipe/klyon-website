import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { Phone, Mail, MapPin, Linkedin, Github, Globe, Share2, UserPlus, ArrowLeft } from 'lucide-react'
import { Link as RouterLink } from 'react-router-dom'
import { useTheme } from '../contexts/ThemeContext'

const Bam = () => {
  const { theme } = useTheme()
  const handleCall = () => {
    window.location.href = 'tel:+33766980342'
  }

  const handleEmail = () => {
    window.location.href = 'mailto:klyonme@gmail.com?subject=Contact depuis la fiche BAM'
  }

  const handleWhatsApp = () => {
    const message = encodeURIComponent('Salut Lorenzo ! Je t\'ai trouvé via ta fiche BAM 🚀')
    window.open(`https://wa.me/33766980342?text=${message}`, '_blank')
  }

  const handleAddToContacts = () => {
    const vcard = `BEGIN:VCARD
VERSION:3.0
FN:Lorenzo Fortini
ORG:Klyon
TEL:+33766980342
EMAIL:klyonme@gmail.com
URL:https://klyon.fr
NOTE:Développeur & Consultant IT
END:VCARD`
    
    const blob = new Blob([vcard], { type: 'text/vcard' })
    const url = URL.createObjectURL(blob)
    const link = document.createElement('a')
    link.href = url
    link.download = 'Lorenzo_Fortini.vcf'
    link.click()
    URL.revokeObjectURL(url)
  }

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: 'Contact Lorenzo Fortini - Klyon',
        text: 'Développeur & Consultant IT - 07 66 98 03 42',
        url: window.location.href
      })
    } else {
      navigator.clipboard.writeText(window.location.href).then(() => {
        alert('Lien de contact copié !')
      })
    }
  }

  return (
    <>
      <Helmet>
        <title>Contact Rapide - Lorenzo Fortini | Klyon</title>
        <meta name="description" content="Contact rapide pour Lorenzo Fortini - Klyon. Développeur & Consultant IT dans le Sud de la France." />
      </Helmet>

      {/* Hero Section */}
      <section className="relative min-h-screen bg-gradient-to-br from-primary-600 via-accent-600 to-purple-600 flex items-center justify-center p-4">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-white/10 rounded-full blur-3xl"></div>
        </div>

        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="absolute top-8 left-8 z-10"
        >
          <RouterLink
            to="/"
            className="flex items-center space-x-2 bg-white/20 backdrop-blur-md text-white px-4 py-2 rounded-full hover:bg-white/30 transition-all duration-200"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Retour</span>
          </RouterLink>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="w-full max-w-md relative z-10"
        >
          <motion.div
            className={`${theme === 'dark' ? 'bg-gray-900/95' : 'bg-white/95'} backdrop-blur-md rounded-3xl p-8 shadow-2xl border ${theme === 'dark' ? 'border-gray-700/50' : 'border-white/20'}`}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            {/* Profile Photo */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center mb-8"
            >
              <motion.img
                src="./assets/photopro.jpg"
                alt="Lorenzo Fortini"
                className="w-32 h-32 rounded-full mx-auto mb-4 border-4 border-primary-500 shadow-lg"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              />
              <motion.div
                className="w-4 h-4 bg-green-500 rounded-full mx-auto mb-4 animate-pulse"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </motion.div>

            {/* Name and Title */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-center mb-8"
            >
              <h1 className={`text-3xl font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'} mb-2`}>
                Lorenzo Fortini
              </h1>
              <p className={`text-lg ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
                Développeur & Consultant IT
              </p>
              <div className="flex items-center justify-center mt-2">
                <div className="w-3 h-3 bg-green-500 rounded-full mr-2 animate-pulse"></div>
                <span className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>Disponible</span>
              </div>
            </motion.div>

            {/* Contact Items */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="space-y-4 mb-8"
            >
              <motion.div
                onClick={handleCall}
                className={`flex items-center p-4 ${theme === 'dark' ? 'bg-primary-900/50 hover:bg-primary-800/50' : 'bg-primary-50 hover:bg-primary-100'} rounded-xl cursor-pointer transition-colors duration-200`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="w-12 h-12 bg-primary-500 rounded-full flex items-center justify-center mr-4">
                  <Phone className="h-6 w-6 text-white" />
                </div>
                <div>
                  <div className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>Téléphone</div>
                  <div className={`font-semibold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>07 66 98 03 42</div>
                </div>
              </motion.div>

              <motion.div
                onClick={handleEmail}
                className={`flex items-center p-4 ${theme === 'dark' ? 'bg-accent-900/50 hover:bg-accent-800/50' : 'bg-accent-50 hover:bg-accent-100'} rounded-xl cursor-pointer transition-colors duration-200`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="w-12 h-12 bg-accent-500 rounded-full flex items-center justify-center mr-4">
                  <Mail className="h-6 w-6 text-white" />
                </div>
                <div>
                  <div className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>Email</div>
                  <div className={`font-semibold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>klyonme@gmail.com</div>
                </div>
              </motion.div>

              <div className={`flex items-center p-4 ${theme === 'dark' ? 'bg-gray-800/50' : 'bg-gray-50'} rounded-xl`}>
                <div className="w-12 h-12 bg-gray-500 rounded-full flex items-center justify-center mr-4">
                  <MapPin className="h-6 w-6 text-white" />
                </div>
                <div>
                  <div className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>Zone d'intervention</div>
                  <div className={`font-semibold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>Bouches-du-Rhône</div>
                </div>
              </div>
            </motion.div>

            {/* Quick Actions */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="grid grid-cols-2 gap-3 mb-8"
            >
              <motion.button
                onClick={handleCall}
                className="flex items-center justify-center p-3 bg-green-500 text-white rounded-xl hover:bg-green-600 transition-colors duration-200"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Phone className="h-5 w-5 mr-2" />
                Appeler
              </motion.button>

              <motion.button
                onClick={handleWhatsApp}
                className="flex items-center justify-center p-3 bg-green-600 text-white rounded-xl hover:bg-green-700 transition-colors duration-200"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Phone className="h-5 w-5 mr-2" />
                WhatsApp
              </motion.button>

              <motion.button
                onClick={handleAddToContacts}
                className="flex items-center justify-center p-3 bg-blue-500 text-white rounded-xl hover:bg-blue-600 transition-colors duration-200"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <UserPlus className="h-5 w-5 mr-2" />
                Ajouter
              </motion.button>

              <motion.button
                onClick={handleEmail}
                className="flex items-center justify-center p-3 bg-purple-500 text-white rounded-xl hover:bg-purple-600 transition-colors duration-200"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Mail className="h-5 w-5 mr-2" />
                Email
              </motion.button>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex justify-center space-x-4 mb-8"
            >
              <motion.a
                href="https://www.linkedin.com/in/zl3/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white hover:bg-blue-700 transition-colors duration-200"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Linkedin className="h-6 w-6" />
              </motion.a>

              <motion.a
                href="https://github.com/lorenzo-fortini"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center text-white hover:bg-gray-900 transition-colors duration-200"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Github className="h-6 w-6" />
              </motion.a>

              <motion.a
                href="/"
                className="w-12 h-12 bg-primary-500 rounded-full flex items-center justify-center text-white hover:bg-primary-600 transition-colors duration-200"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Globe className="h-6 w-6" />
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Floating Share Button */}
          <motion.button
            onClick={handleShare}
            className="fixed bottom-8 right-8 w-16 h-16 bg-white/90 backdrop-blur-md rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <Share2 className="h-6 w-6 text-primary-600" />
          </motion.button>
        </motion.div>
      </section>

      {/* Services Section */}
      <section className={`py-20 ${theme === 'dark' ? 'bg-gray-900' : 'bg-gray-50'}`}>
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className={`text-4xl font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
              Mes Services
            </h2>
            <p className={`text-lg ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
              Solutions informatiques professionnelles adaptées à vos besoins
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Support Informatique",
                description: "Maintenance, dépannage et optimisation de vos systèmes",
                icon: "🛠️"
              },
              {
                title: "Développement Sur-Mesure",
                description: "Applications web et mobiles personnalisées",
                icon: "💻"
              },
              {
                title: "Intelligence Artificielle",
                description: "Solutions IA pour automatiser vos processus",
                icon: "🤖"
              }
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`p-6 rounded-xl ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'} shadow-lg hover:shadow-xl transition-all duration-300`}
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className={`text-xl font-semibold mb-3 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                  {service.title}
                </h3>
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
            <h2 className={`text-4xl font-bold mb-6 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
              Prêt à collaborer ?
            </h2>
            <p className={`text-lg mb-8 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
              Contactez-moi pour discuter de votre projet
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                onClick={handleCall}
                className="px-8 py-4 bg-primary-600 text-white rounded-xl hover:bg-primary-700 transition-colors duration-200 font-semibold"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                📞 Appeler maintenant
              </motion.button>
              <motion.button
                onClick={handleEmail}
                className="px-8 py-4 bg-accent-600 text-white rounded-xl hover:bg-accent-700 transition-colors duration-200 font-semibold"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                ✉️ Envoyer un email
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}

export default Bam
