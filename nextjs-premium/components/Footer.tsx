'use client'

import Link from 'next/link'
import { Linkedin, Mail, Phone } from 'lucide-react'
import { motion } from 'framer-motion'
import { useAnimation } from '@/contexts/AnimationContext'

export default function Footer() {
  const { startupComplete } = useAnimation()
  
  return (
    <motion.footer
      initial={{ opacity: 0, y: 20 }}
      animate={startupComplete ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.8, delay: 1.2, ease: [0.16, 1, 0.3, 1] }}
      className="text-neutral-300 border-t border-amber-400/20" 
      style={{ background: '#0f0f0f' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-amber-400 text-xl font-light mb-4 tracking-tight">
              KLYON
            </h3>
            <p className="text-neutral-400 text-sm mb-6 max-w-md leading-relaxed">
              Consultant informatique confirmé spécialisé en développement logiciel sur mesure, 
              automatisation de processus et intégration IA.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-amber-400 font-semibold mb-4 text-sm">Navigation</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-neutral-400 hover:text-amber-400 text-sm transition-colors duration-200">
                  Accueil
                </Link>
              </li>
              <li>
                <Link href="/formations" className="text-neutral-400 hover:text-amber-400 text-sm transition-colors duration-200">
                  Formations
                </Link>
              </li>
              <li>
                <Link href="/services-info" className="text-neutral-400 hover:text-amber-400 text-sm transition-colors duration-200">
                  Services Info
                </Link>
              </li>
              <li>
                <Link href="/automatisations" className="text-neutral-400 hover:text-amber-400 text-sm transition-colors duration-200">
                  Automatisations
                </Link>
              </li>
              <li>
                <Link href="/developpement" className="text-neutral-400 hover:text-amber-400 text-sm transition-colors duration-200">
                  Développement
                </Link>
              </li>
              <li>
                <Link href="/realisations" className="text-neutral-400 hover:text-amber-400 text-sm transition-colors duration-200">
                  Réalisations
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-neutral-400 hover:text-amber-400 text-sm transition-colors duration-200">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-amber-400 font-semibold mb-4 text-sm">Contact</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="tel:+33766980342"
                  className="flex items-center gap-2 text-neutral-400 hover:text-amber-400 text-sm transition-colors duration-200"
                >
                  <Phone className="h-4 w-4" />
                  07 66 98 03 42
                </a>
              </li>
              <li>
                <a
                  href="mailto:klyonme@gmail.com"
                  className="flex items-center gap-2 text-neutral-400 hover:text-amber-400 text-sm transition-colors duration-200"
                >
                  <Mail className="h-4 w-4" />
                  klyonme@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="https://linkedin.com/in/zl3/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-neutral-400 hover:text-amber-400 text-sm transition-colors duration-200"
                >
                  <Linkedin className="h-4 w-4" />
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-neutral-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-neutral-500 text-sm">
            © {new Date().getFullYear()} KLYON. Tous droits réservés.
          </p>
          <div className="flex gap-6">
            <Link href="/mentions-legales" className="text-neutral-500 hover:text-neutral-300 text-sm transition-colors duration-200">
              Mentions légales
            </Link>
            <Link href="/politique-confidentialite" className="text-neutral-500 hover:text-neutral-300 text-sm transition-colors duration-200">
              Politique de confidentialité
            </Link>
          </div>
        </div>
      </div>
    </motion.footer>
  )
}
