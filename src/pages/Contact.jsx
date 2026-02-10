import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  Send, 
  CheckCircle,
  MessageSquare,
  Calendar,
  User,
  Building
} from 'lucide-react'
import { useState } from 'react'
import emailjs from 'emailjs-com'
import { useTheme } from '../contexts/ThemeContext'
import { useContact } from '../contexts/ContactContext'

const Contact = () => {
  const { theme } = useTheme()
  const { showNotification } = useContact()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    subject: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const contactInfo = [
    {
      icon: Phone,
      title: 'Téléphone',
      value: '07 66 98 03 42',
      description: 'Appelez-nous pour un échange direct',
      action: 'tel:+33766980342',
      color: 'primary'
    },
    {
      icon: Mail,
      title: 'Email',
      value: 'klyonme@gmail.com',
      description: 'Envoyez-nous un message détaillé',
      action: 'mailto:klyonme@gmail.com',
      color: 'accent'
    },
    {
      icon: MapPin,
      title: 'Zone d\'intervention',
      value: 'Bouches-du-Rhône',
      description: 'Déplacements possibles dans la région',
      action: null,
      color: 'purple'
    },
    {
      icon: Clock,
      title: 'Disponibilité',
      value: 'Lun - Ven, 9h - 18h',
      description: 'Réponse sous 24h en moyenne',
      action: null,
      color: 'green'
    }
  ]

  const subjects = [
    'Intelligence Artificielle',
    'Développement Web',
    'Réparation Informatique',
    'Formation',
    'Autre'
  ]

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // Configuration EmailJS
      const serviceId = 'service_lb38ewo'
      const templateId = 'template_2af96ws'
      const publicKey = 'ZJMuCYNkzxGhqore6'

      // Préparer les données pour EmailJS avec formatage simplifié
      const fullMessage = `
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
📝 NOUVEAU MESSAGE DE CONTACT - KLYON
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

👤 INFORMATIONS CLIENT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Nom         : ${formData.name}
Email       : ${formData.email}
Téléphone   : ${formData.phone || 'Non renseigné'}
Entreprise  : ${formData.company || 'Particulier'}

📋 DÉTAILS DE LA DEMANDE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Service     : ${formData.subject || 'Non précisé'}

💬 MESSAGE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
${formData.message}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
      `.trim()

      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        from_phone: formData.phone,
        service_type: formData.subject,
        message: fullMessage,
        to_email: 'klyonme@gmail.com'
      }

      // Envoyer l'email via EmailJS
      await emailjs.send(serviceId, templateId, templateParams, publicKey)
      
      showNotification('Message envoyé avec succès ! Nous vous répondrons rapidement.', 'success')
      setFormData({
        name: '',
        email: '',
        company: '',
        phone: '',
        subject: '',
        message: '',
        budget: '',
        timeline: ''
      })
    } catch (error) {
      console.error('Erreur lors de l\'envoi:', error)
      showNotification('Erreur lors de l\'envoi du message. Veuillez réessayer.', 'error')
    } finally {
      setIsSubmitting(false)
    }
  }

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
        <title>Contact - Devis Gratuit | Klyon Expert IA & Développement</title>
        <meta name="description" content="Contactez Klyon pour vos projets IA, développement web/mobile et réparation informatique dans les Bouches-du-Rhône. Devis gratuit, réponse sous 24h." />
        <meta name="keywords" content="contact Klyon, devis gratuit, intelligence artificielle, développement web, réparation informatique, Bouches-du-Rhône" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://klyon.fr/contact" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Contact - Devis Gratuit | Klyon" />
        <meta property="og:description" content="Contactez Klyon pour vos projets IA, développement et réparation informatique. Devis gratuit, réponse sous 24h." />
        <meta property="og:url" content="https://klyon.fr/contact" />
        <meta property="og:type" content="website" />
      </Helmet>

      {/* Hero Section */}
      <section className="py-20 lg:py-32 bg-gray-900">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white">
              Contactez-<span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-accent-600">nous</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed">
              Discutons de votre projet et trouvons ensemble la solution qui vous convient
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-20 bg-gray-800">
        <div className="container-custom">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            ref={ref}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
          >
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="p-6 rounded-2xl bg-gray-900 shadow-lg hover:shadow-xl transition-all duration-300 text-center"
                whileHover={{ y: -5 }}
              >
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 ${
                  info.color === 'primary' ? 'bg-primary-100 dark:bg-primary-900/50' :
                  info.color === 'accent' ? 'bg-accent-100 dark:bg-accent-900/50' :
                  info.color === 'purple' ? 'bg-purple-100 dark:bg-purple-900/50' :
                  'bg-green-100 dark:bg-green-900/50'
                }`}>
                  <info.icon className={`h-8 w-8 ${
                    info.color === 'primary' ? 'text-primary-600' :
                    info.color === 'accent' ? 'text-accent-600' :
                    info.color === 'purple' ? 'text-purple-600' :
                    'text-green-600'
                  }`} />
                </div>
                
                <h3 className="text-lg font-semibold mb-2 text-white">
                  {info.title}
                </h3>
                
                {info.action ? (
                  <a
                    href={info.action}
                    className={`text-lg font-bold mb-2 block ${
                      info.color === 'primary' ? 'text-primary-600' :
                      info.color === 'accent' ? 'text-accent-600' :
                      info.color === 'purple' ? 'text-purple-600' :
                      'text-green-600'
                    } hover:underline`}
                  >
                    {info.value}
                  </a>
                ) : (
                  <p className={`text-lg font-bold mb-2 ${
                    info.color === 'primary' ? 'text-primary-600' :
                    info.color === 'accent' ? 'text-accent-600' :
                    info.color === 'purple' ? 'text-purple-600' :
                    'text-green-600'
                  }`}>
                    {info.value}
                  </p>
                )}
                
                <p className="text-sm text-gray-400">
                  {info.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 bg-gray-900">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="p-8 rounded-3xl bg-gray-800 shadow-xl">
                <h2 className="text-3xl font-bold mb-6 text-white">
                  Envoyez-nous un message
                </h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name and Email */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2 text-gray-300">
                        Nom complet *
                      </label>
                      <div className="relative">
                        <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          className="w-full pl-10 pr-4 py-3 rounded-xl border bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500"
                          placeholder="Votre nom"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium mb-2 text-gray-300">
                        Email *
                      </label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="w-full pl-10 pr-4 py-3 rounded-xl border bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500"
                          placeholder="votre@email.com"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Company and Phone */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2 text-gray-300">
                        Entreprise
                      </label>
                      <div className="relative">
                        <Building className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                        <input
                          type="text"
                          name="company"
                          value={formData.company}
                          onChange={handleInputChange}
                          className="w-full pl-10 pr-4 py-3 rounded-xl border bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500"
                          placeholder="Nom de l'entreprise"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2 text-gray-300">
                        Téléphone
                      </label>
                      <div className="relative">
                        <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="w-full pl-10 pr-4 py-3 rounded-xl border bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500"
                          placeholder="06 12 34 56 78"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Subject */}
                  <div>
                    <label className="block text-sm font-medium mb-2 text-gray-300">
                      Sujet *
                    </label>
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className={`w-full px-4 py-3 rounded-xl border ${
                        theme === 'dark' 
                          ? 'bg-gray-700 border-gray-600 text-white' 
                          : 'bg-white border-gray-300 text-gray-900'
                      } focus:outline-none focus:ring-2 focus:ring-primary-500`}
                    >
                      <option value="">Sélectionnez un sujet</option>
                      {subjects.map((subject, index) => (
                        <option key={index} value={subject}>{subject}</option>
                      ))}
                    </select>
                  </div>


                  {/* Message */}
                  <div>
                    <label className="block text-sm font-medium mb-2 text-gray-300">
                      Message *
                    </label>
                    <div className="relative">
                      <MessageSquare className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        rows={6}
                        className={`w-full pl-10 pr-4 py-3 rounded-xl border ${
                          theme === 'dark' 
                            ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400' 
                            : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'
                        } focus:outline-none focus:ring-2 focus:ring-primary-500 resize-none`}
                        placeholder="Décrivez votre projet en détail..."
                      />
                    </div>
                  </div>

                  {/* Submit Button */}
                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full flex items-center justify-center space-x-2 py-4 px-6 rounded-xl font-semibold text-white transition-all duration-200 ${
                      isSubmitting 
                        ? 'bg-gray-400 cursor-not-allowed' 
                        : 'bg-primary-600 hover:bg-primary-700'
                    }`}
                    whileHover={!isSubmitting ? { scale: 1.02 } : {}}
                    whileTap={!isSubmitting ? { scale: 0.98 } : {}}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        <span>Envoi en cours...</span>
                      </>
                    ) : (
                      <>
                        <Send className="h-5 w-5" />
                        <span>Envoyer le message</span>
                      </>
                    )}
                  </motion.button>
                </form>
              </div>
            </motion.div>

            {/* Info Sidebar */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="p-8 rounded-3xl bg-gray-800 shadow-xl">
                <h3 className="text-2xl font-bold mb-6 text-white">
                  Pourquoi nous choisir ?
                </h3>
                
                <div className="space-y-4">
                  {[
                    'Réponse rapide sous 24h',
                    'Expertise technique reconnue',
                    'Solutions personnalisées',
                    'Accompagnement complet',
                    'Tarifs transparents'
                  ].map((item, index) => (
                    <div key={index} className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                      <span className="text-gray-300">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-8 rounded-3xl bg-gray-800 shadow-xl">
                <h3 className="text-2xl font-bold mb-6 text-white">
                  Besoin d'un rendez-vous ?
                </h3>
                
                <p className="mb-6 text-gray-300">
                  Préférez-vous échanger en direct ? Nous proposons des consultations gratuites pour évaluer vos besoins.
                </p>
                
                <motion.a
                  href="tel:+33766980342"
                  className="flex items-center justify-center space-x-2 w-full py-3 px-6 bg-accent-600 text-white rounded-xl hover:bg-accent-700 transition-colors duration-200 font-semibold"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Calendar className="h-5 w-5" />
                  <span>Appeler maintenant</span>
                </motion.a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact
