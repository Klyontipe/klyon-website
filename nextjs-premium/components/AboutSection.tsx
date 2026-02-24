'use client'

import { motion } from 'framer-motion'
import AnimatedSection from './AnimatedSection'
import CountUpNumber from './CountUpNumber'
import { useAnimation } from '@/contexts/AnimationContext'

export default function AboutSection() {
  const { startupComplete } = useAnimation()
  
  const stats = [
    { number: 100, suffix: '%', label: 'Clients satisfaits', color: 'from-emerald-600/15 to-teal-500/10', accent: 'text-emerald-600' },
  ]

  return (
    <section className="relative py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Dark background */}
      <div className="absolute inset-0 -z-10" style={{ background: '#0f0f0f' }}>
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[#0f0f0f] via-[#1a1a1a] to-[#0f0f0f]" />
      </div>

      <div className="max-w-6xl mx-auto relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Contenu texte */}
          <AnimatedSection className="text-left">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={startupComplete ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full glass-soft mb-6 shadow-soft"
            >
              <motion.span
                animate={{ scale: [1, 1.15, 1], opacity: [0.7, 1, 0.7] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-2.5 h-2.5 bg-blue-500 rounded-full"
              />
              <span className="text-sm font-medium text-neutral-300 tracking-wide uppercase">Qui suis-je</span>
            </motion.div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extralight text-neutral-100 mb-6 tracking-tight" style={{ letterSpacing: '-0.02em', fontWeight: 200 }}>
              À propos
            </h2>
            <div className="prose prose-neutral max-w-none space-y-6">
              <p className="text-lg md:text-xl text-neutral-300 leading-relaxed font-light" style={{ letterSpacing: '0.01em' }}>
                Je suis <strong className="text-amber-400">Lorenzo Fortini</strong>, ingénieur en fin de cursus à <strong>EPITECH</strong> et fondateur de <strong className="text-indigo-600">Klyon</strong>. 
                Passionné par l'informatique depuis toujours, je me spécialise dans les <strong>formations professionnelles premium</strong> (IA avancée, ChatGPT, Microsoft 365 expert), 
                le développement Full-Stack moderne et l'automatisation intelligente. Basé dans les <strong>Bouches-du-Rhône</strong>, j'accompagne 
                entreprises et particuliers dans leur transformation digitale avec une approche personnalisée et des résultats mesurables.
              </p>
              <p className="text-lg md:text-xl text-neutral-300 leading-relaxed font-light" style={{ letterSpacing: '0.01em' }}>
                Je combine expertise technique et pédagogie pour former vos équipes efficacement. Mon approche ? 
                <strong className="text-neutral-100"> Écouter vos besoins</strong>, analyser vos processus, proposer des solutions sur mesure 
                et livrer des résultats concrets avec un suivi post-formation personnalisé. Spécialisé en <strong>LLM</strong>, <strong>prompt engineering</strong>, 
                <strong> RAG avancé</strong> et <strong>automatisation Power Platform</strong>.
              </p>
              <div className="mt-8 p-6 rounded-2xl glass-soft border border-blue-200/30 bg-gradient-to-br from-amber-500/10 to-amber-400/5">
                <h3 className="text-lg font-semibold text-neutral-100 mb-3">Mon expertise en quelques mots :</h3>
                <ul className="space-y-2 text-neutral-300">
                  <li className="flex items-start gap-3">
                    <motion.div
                      whileHover={{ scale: 1.2, rotate: 90 }}
                      className="w-5 h-5 rounded-full bg-blue-500/20 flex items-center justify-center flex-shrink-0 mt-0.5"
                    >
                      <div className="w-2 h-2 rounded-full bg-blue-600" />
                    </motion.div>
                    <span><strong className="text-amber-400">Formations IA/ChatGPT</strong> : Ateliers pratiques avec cas d'usage réels et suivi personnalisé</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <motion.div
                      whileHover={{ scale: 1.2, rotate: 90 }}
                      className="w-5 h-5 rounded-full bg-indigo-500/20 flex items-center justify-center flex-shrink-0 mt-0.5"
                    >
                      <div className="w-2 h-2 rounded-full bg-indigo-600" />
                    </motion.div>
                    <span><strong className="text-indigo-600">Microsoft 365 Expert</strong> : SharePoint, Teams, Power Automate, Power Apps, administration avancée</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <motion.div
                      whileHover={{ scale: 1.2, rotate: 90 }}
                      className="w-5 h-5 rounded-full bg-purple-500/20 flex items-center justify-center flex-shrink-0 mt-0.5"
                    >
                      <div className="w-2 h-2 rounded-full bg-purple-600" />
                    </motion.div>
                    <span><strong className="text-purple-600">Développement Full-Stack</strong> : React/Next.js, Python, APIs robustes, architecture cloud-native</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <motion.div
                      whileHover={{ scale: 1.2, rotate: 90 }}
                      className="w-5 h-5 rounded-full bg-emerald-500/20 flex items-center justify-center flex-shrink-0 mt-0.5"
                    >
                      <div className="w-2 h-2 rounded-full bg-emerald-600" />
                    </motion.div>
                    <span><strong className="text-emerald-600">Automatisation</strong> : Intégrations API, workflows complexes, RPA, gain de temps garanti</span>
                  </li>
                </ul>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-neutral-400 mt-2 flex-shrink-0" />
                  <div>
                    <p className="text-sm font-medium text-neutral-100 mb-1">Zone d'intervention</p>
                    <p className="text-sm text-neutral-400">Bouches-du-Rhône et environs</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-neutral-400 mt-2 flex-shrink-0" />
                  <div>
                    <p className="text-sm font-medium text-neutral-100 mb-1">Flexibilité</p>
                    <p className="text-sm text-neutral-400">Intervention sur site ou à distance</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-neutral-400 mt-2 flex-shrink-0" />
                  <div>
                    <p className="text-sm font-medium text-neutral-100 mb-1">Clientèle</p>
                    <p className="text-sm text-neutral-400">Entreprises, particuliers, associations</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-neutral-400 mt-2 flex-shrink-0" />
                  <div>
                    <p className="text-sm font-medium text-neutral-100 mb-1">Profil LinkedIn</p>
                    <a href="https://linkedin.com/in/zl3/" target="_blank" rel="noopener noreferrer" className="text-sm text-neutral-400 hover:text-neutral-100 transition-colors">
                      Consulter mon profil professionnel
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Photo de profil avec effet 3D */}
          <motion.div
            initial={{ opacity: 0, x: 50, rotateY: -20 }}
            whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center lg:justify-end"
            style={{ perspective: '1000px', transformStyle: 'preserve-3d' }}
          >
            <motion.div
              className="relative"
              whileHover={{ 
                scale: 1.05,
                rotateY: 5,
                rotateX: -5,
                z: 30,
                transition: { duration: 0.3 }
              }}
              style={{ transformStyle: 'preserve-3d' }}
            >
              {/* 3D Glow effect */}
              <motion.div
                animate={{
                  opacity: [0.3, 0.5, 0.3],
                  scale: [1, 1.1, 1],
                }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute inset-0 bg-gradient-to-br from-amber-400/30 via-amber-500/20 to-amber-600/30 rounded-3xl blur-2xl -z-10"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-amber-400/20 via-amber-500/15 to-amber-600/20 rounded-3xl transform rotate-3 opacity-40" />
              <motion.img
                src="/photopro.jpg"
                alt="Lorenzo Fortini - Fondateur de Klyon"
                className="relative w-80 h-[500px] object-cover rounded-3xl shadow-2xl border-4 border-amber-400/30"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                style={{ transformStyle: 'preserve-3d' }}
              />
              {/* Badge supplémentaire */}
              <motion.div
                className="absolute -top-6 -left-6 glass-soft px-4 py-2 rounded-xl shadow-xl border border-white/40 backdrop-blur-xl"
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 1 }}
                whileHover={{ scale: 1.05, rotateZ: -5 }}
              >
                <div className="text-xs font-semibold text-neutral-800">EPITECH</div>
                <div className="text-[10px] text-neutral-400">Ingénieur</div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>

        {/* Stats Premium avec effet 3D */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-20 max-w-md mx-auto" style={{ perspective: '1000px' }}>
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20, rotateX: -15 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              whileHover={{ 
                y: -8, 
                scale: 1.05,
                rotateY: 10,
                rotateX: -5,
                z: 30,
                transition: { duration: 0.3 }
              }}
              style={{ transformStyle: 'preserve-3d' }}
              className="relative group"
            >
              {/* Glow effect */}
              <motion.div
                animate={{
                  opacity: [0.2, 0.4, 0.2],
                  scale: [1, 1.1, 1],
                }}
                transition={{ duration: 2, repeat: Infinity, delay: index * 0.2 }}
                className="absolute -inset-2 rounded-3xl blur-xl opacity-50 group-hover:opacity-100"
                style={{
                  background: `radial-gradient(circle, ${
                    stat.color === 'blue' ? 'rgba(37, 99, 235, 0.3)' :
                    stat.color === 'emerald' ? 'rgba(16, 185, 129, 0.3)' :
                    stat.color === 'indigo' ? 'rgba(99, 102, 241, 0.3)' :
                    'rgba(217, 119, 6, 0.3)'
                  } 0%, transparent 70%)`,
                }}
              />
              <div className={`relative p-8 rounded-3xl glass-soft border-2 border-white/30 group-hover:border-white/50 transition-all duration-300 shadow-xl hover:shadow-2xl bg-gradient-to-br ${stat.color} backdrop-blur-xl`}>
                <div className="relative z-10 text-center">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                    className={`text-4xl md:text-5xl font-light mb-4 tracking-tight ${stat.accent}`}
                    style={{ fontWeight: 100 }}
                  >
                    <CountUpNumber value={stat.number} suffix={stat.suffix} />
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 5 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                    className="text-sm font-semibold text-neutral-300 tracking-wide"
                  >
                    {stat.label}
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
