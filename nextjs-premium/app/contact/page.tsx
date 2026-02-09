import type { Metadata } from 'next'
import { Phone, Mail, Linkedin, MapPin } from 'lucide-react'
import ContactForm from '@/components/ContactForm'
import AnimatedSection from '@/components/AnimatedSection'

export const metadata: Metadata = {
  title: 'Contact — KLYON',
  description: 'Contactez KLYON pour discuter de votre projet. Téléphone : 07 66 98 03 42, Email : klyonme@gmail.com. Zone d\'intervention : Bouches-du-Rhône.',
}

const contactInfo = [
  {
    icon: Phone,
    label: 'Téléphone',
    value: '07 66 98 03 42',
    href: 'tel:+33766980342',
  },
  {
    icon: Mail,
    label: 'Email',
    value: 'klyonme@gmail.com',
    href: 'mailto:klyonme@gmail.com',
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'linkedin.com/in/zl3/',
    href: 'https://linkedin.com/in/zl3/',
  },
  {
    icon: MapPin,
    label: 'Zone d\'intervention',
    value: 'Bouches-du-Rhône',
    href: null,
  },
]

export default function ContactPage() {
  return (
    <div className="pt-32 pb-20 px-4 sm:px-6 lg:px-8" style={{ background: '#0f0f0f', minHeight: '100vh' }}>
      <div className="max-w-7xl mx-auto">
        {/* Hero */}
        <AnimatedSection className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-neutral-100 mb-6" style={{ fontWeight: 200 }}>
            Contact
          </h1>
          <p className="text-xl text-neutral-400 max-w-3xl mx-auto">
            Discutons de votre projet et trouvons ensemble la solution qui vous convient
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <AnimatedSection>
            <h2 className="text-2xl font-light text-neutral-100 mb-6" style={{ fontWeight: 300 }}>
              Envoyez-nous un message
            </h2>
            <ContactForm />
          </AnimatedSection>

          {/* Contact Info */}
          <AnimatedSection delay={0.1} className="space-y-8">
            <div>
              <h2 className="text-2xl font-light text-neutral-100 mb-6" style={{ fontWeight: 300 }}>
                Informations de contact
              </h2>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start gap-4 p-4 rounded-xl glass-dark border border-amber-400/20 hover:border-amber-400/40 transition-all duration-300">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-amber-500/20 to-amber-400/10 border border-amber-400/30 flex items-center justify-center flex-shrink-0">
                      <info.icon className="h-6 w-6 text-amber-400" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-neutral-400 mb-1">
                        {info.label}
                      </p>
                      {info.href ? (
                        <a
                          href={info.href}
                          target={info.href.startsWith('http') ? '_blank' : undefined}
                          rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                          className="text-lg font-medium text-neutral-100 hover:text-amber-400 transition-colors duration-200"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-lg font-medium text-neutral-100">
                          {info.value}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-6 rounded-xl glass-dark border border-amber-400/20">
              <h3 className="text-lg font-semibold text-neutral-100 mb-4">
                Pourquoi me choisir ?
              </h3>
              <ul className="space-y-3">
                {[
                  'Réponse rapide sous 24h',
                  'Expertise technique reconnue',
                  'Solutions personnalisées',
                  'Accompagnement complet',
                  'Tarifs transparents',
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="text-amber-400 mt-1">•</span>
                    <span className="text-neutral-300">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </div>
  )
}
