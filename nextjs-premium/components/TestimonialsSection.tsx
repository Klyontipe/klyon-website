'use client'

import { motion } from 'framer-motion'
import { Star } from 'lucide-react'
import AnimatedSection from './AnimatedSection'
import { useAnimation } from '@/contexts/AnimationContext'

const testimonials = [
  {
    quote: "Avec Lorenzo, il n'y a pas de problème, il n'y a que des solutions ! Toujours au service, toujours positif et inventif, il délivre et raconte en image. Je suis et je resterai toujours dans ton fan Club, Lorenzo !",
    author: 'Pascale A.',
    role: 'DG Associée - Feeder / EIZO France',
    rating: 5,
  },
  {
    quote: "J'ai eu le plaisir de travailler quelques mois avec Lorenzo durant son stage au sein de Feeder. Particulièrement posé et mature malgré son jeune âge, j'ai pris grand plaisir à le découvrir. Lorenzo est très travailleur et ordonné dans sa réflexion et sera sans nul doute un salarié fiable sur lequel son futur employeur pourra compter et s'appuyer.",
    author: 'Pascale P.',
    role: 'Gestionnaire Formations Maritimes - PONANT',
    rating: 5,
  },
]

export default function TestimonialsSection() {
  const { startupComplete } = useAnimation()
  
  return (
    <section className="relative py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Dark background */}
      <div className="absolute inset-0 -z-10" style={{ background: '#0f0f0f' }}>
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[#0f0f0f] via-[#1a1a1a] to-[#0f0f0f]" />
      </div>

      <div className="max-w-7xl mx-auto relative">
        <AnimatedSection className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={startupComplete ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full glass-dark border border-amber-400/20 mb-10 shadow-soft"
          >
            <motion.span
              animate={{ scale: [1, 1.15, 1], opacity: [0.7, 1, 0.7] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-2.5 h-2.5 bg-amber-500 rounded-full"
            />
            <span className="text-sm font-medium text-neutral-300 tracking-wide uppercase">Témoignages</span>
          </motion.div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extralight text-neutral-100 mb-6 tracking-tight" style={{ letterSpacing: '-0.02em', fontWeight: 200 }}>
            Ce que disent nos clients
          </h2>
          <p className="text-lg md:text-xl text-neutral-400 max-w-2xl mx-auto leading-relaxed font-light" style={{ letterSpacing: '0.01em' }}>
            Recommandations LinkedIn et témoignages clients
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="glass-dark rounded-2xl p-8 border border-amber-400/20 shadow-soft hover:shadow-soft-lg hover:border-amber-400/40 transition-all duration-300"
            >
              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <p className="text-neutral-300 mb-6 leading-relaxed font-light italic" style={{ letterSpacing: '0.01em' }}>
                "{testimonial.quote}"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-amber-400/20 flex items-center justify-center text-amber-400 font-medium text-sm border border-amber-400/30">
                  {testimonial.author.charAt(0)}
                </div>
                <div>
                  <p className="text-sm font-medium text-neutral-100">{testimonial.author}</p>
                  <p className="text-xs text-neutral-400">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <AnimatedSection className="text-center mt-12">
          <motion.a
            href="https://linkedin.com/in/zl3/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.02 }}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl glass-dark border border-amber-400/20 text-neutral-300 font-medium hover:border-amber-400/40 hover:bg-amber-400/10 transition-all duration-300 shadow-soft hover:shadow-soft-lg"
          >
            Voir toutes les recommandations LinkedIn
          </motion.a>
        </AnimatedSection>
      </div>
    </section>
  )
}
