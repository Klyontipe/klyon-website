import { Link as RouterLink } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Linkedin, Github } from 'lucide-react'
import { useTheme } from '../contexts/ThemeContext'

const Footer = () => {
  const currentYear = new Date().getFullYear()
  const { theme } = useTheme()

  const footerLinks = {
    services: [
      { name: 'Support Informatique', href: '/services' },
      { name: 'Développement Sur-Mesure', href: '/services' },
      { name: 'Intelligence Artificielle', href: '/services' },
    ],
    company: [
      { name: 'Compétences', href: '/competences' },
      { name: 'Projets', href: '/projets' },
      { name: 'Blog', href: '/blog' },
      { name: 'Contact', href: '/contact' },
    ],
  }

  const socialLinks = [
    {
      name: 'LinkedIn',
      href: 'https://www.linkedin.com/in/zl3/',
      icon: Linkedin,
    },
    {
      name: 'GitHub',
      href: 'https://github.com/lorenzo-fortini',
      icon: Github,
    },
  ]

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-1"
          >
            <RouterLink to="/" className="flex items-center space-x-3 mb-6">
              <img 
                src={theme === 'dark' ? '/logowhite.png' : '/logo.jpg'} 
                alt="Klyon Logo" 
                className={`h-36 w-auto lg:h-40 ${theme === 'dark' ? 'max-w-[200px]' : ''}`} 
              />
            </RouterLink>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Votre partenaire informatique dans le Sud de la France. 
              De la maintenance à l'intelligence artificielle, nous accompagnons 
              votre transformation digitale.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-gray-800 rounded-lg hover:bg-primary-600 transition-colors duration-200"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <social.icon className="h-5 w-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold mb-6">Services</h3>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <RouterLink
                    to={link.href}
                    className="text-gray-300 hover:text-primary-400 transition-colors duration-200"
                  >
                    {link.name}
                  </RouterLink>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Company */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold mb-6">Entreprise</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <RouterLink
                    to={link.href}
                    className="text-gray-300 hover:text-primary-400 transition-colors duration-200"
                  >
                    {link.name}
                  </RouterLink>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold mb-6">Contact</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-primary-400" />
                <a
                  href="mailto:klyonme@gmail.com"
                  className="text-gray-300 hover:text-primary-400 transition-colors duration-200"
                >
                  klyonme@gmail.com
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-primary-400" />
                <a
                  href="tel:+33766980342"
                  className="text-gray-300 hover:text-primary-400 transition-colors duration-200"
                >
                  07 66 98 03 42
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-primary-400" />
                <span className="text-gray-300">
                  Bouches-du-Rhône
                </span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="border-t border-gray-800 mt-12 pt-8 text-center"
        >
          <p className="text-gray-400">
            &copy; {currentYear} Klyon. Tous droits réservés.
          </p>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer
