'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { X, LucideIcon, ArrowRight } from 'lucide-react'
import { useEffect } from 'react'

interface ServiceModalProps {
  isOpen: boolean
  onClose: () => void
  icon: LucideIcon
  title: string
  description: string
  color?: string
}

export default function ServiceModal({
  isOpen,
  onClose,
  icon: Icon,
  title,
  description,
  color = 'blue',
}: ServiceModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  const colorClasses = {
    blue: {
      gradient: 'from-blue-500/20 via-blue-400/10 to-transparent',
      icon: 'text-blue-600',
      glow: 'rgba(59, 130, 246, 0.4)',
      border: 'border-blue-200/50',
      bg: 'bg-blue-50/50',
    },
    purple: {
      gradient: 'from-purple-500/20 via-purple-400/10 to-transparent',
      icon: 'text-purple-600',
      glow: 'rgba(139, 92, 246, 0.4)',
      border: 'border-purple-200/50',
      bg: 'bg-purple-50/50',
    },
    indigo: {
      gradient: 'from-indigo-500/20 via-indigo-400/10 to-transparent',
      icon: 'text-indigo-600',
      glow: 'rgba(99, 102, 241, 0.4)',
      border: 'border-indigo-200/50',
      bg: 'bg-indigo-50/50',
    },
    emerald: {
      gradient: 'from-emerald-500/20 via-emerald-400/10 to-transparent',
      icon: 'text-emerald-600',
      glow: 'rgba(16, 185, 129, 0.4)',
      border: 'border-emerald-200/50',
      bg: 'bg-emerald-50/50',
    },
  }

  const colors = colorClasses[color as keyof typeof colorClasses] || colorClasses.blue

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop avec effet premium */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            onClick={onClose}
            className="fixed inset-0 z-50"
            style={{ 
              background: 'radial-gradient(ellipse at center, rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0.7) 100%)',
              backdropFilter: 'blur(8px)',
              WebkitBackdropFilter: 'blur(8px)',
            }}
          />

          {/* Modal avec design premium */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ 
              type: 'spring',
              damping: 30,
              stiffness: 400,
              duration: 0.5
            }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative w-full max-w-3xl max-h-[95vh] sm:max-h-[90vh] overflow-hidden mx-2 sm:mx-0">
              {/* Glow effect behind modal */}
              <motion.div
                animate={{
                  opacity: [0.3, 0.5, 0.3],
                  scale: [1, 1.05, 1],
                }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute inset-0 blur-3xl -z-10"
                style={{
                  background: `radial-gradient(ellipse at center, ${colors.glow} 0%, transparent 70%)`,
                }}
              />

              {/* Modal Content */}
              <motion.div
                className="relative rounded-3xl overflow-hidden"
                style={{
                  background: 'rgba(255, 255, 255, 0.98)',
                  backdropFilter: 'blur(20px) saturate(180%)',
                  WebkitBackdropFilter: 'blur(20px) saturate(180%)',
                  border: '1px solid rgba(255, 255, 255, 0.5)',
                  boxShadow: `
                    0 50px 120px rgba(0, 0, 0, 0.15),
                    0 20px 60px ${colors.glow},
                    inset 0 1px 0 rgba(255, 255, 255, 0.8),
                    inset 0 -1px 0 rgba(255, 255, 255, 0.3)
                  `,
                }}
              >
                {/* Header élégant */}
                <div className="relative px-4 sm:px-6 md:px-8 pt-6 sm:pt-8 pb-4 sm:pb-6 border-b border-neutral-200/50">
                  {/* Gradient subtil en haut */}
                  <div 
                    className="absolute top-0 left-0 right-0 h-32 opacity-30"
                    style={{
                      background: `linear-gradient(180deg, ${colors.glow} 0%, transparent 100%)`,
                    }}
                  />

                  <div className="relative z-10 flex items-start justify-between gap-6">
                    <div className="flex items-start gap-5 flex-1">
                      {/* Icon élégant */}
                      <motion.div
                        initial={{ scale: 0, rotate: -180 }}
                        animate={{ scale: 1, rotate: 0 }}
                        transition={{ delay: 0.1, type: 'spring', stiffness: 200 }}
                        className="relative flex-shrink-0"
                      >
                        <div 
                          className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl flex items-center justify-center shadow-lg flex-shrink-0"
                          style={{
                            background: `linear-gradient(135deg, ${colors.glow} 0%, ${colors.glow.replace('0.4', '0.2')} 100%)`,
                            border: `2px solid ${colors.glow}`,
                          }}
                        >
                          <Icon className={`w-7 h-7 ${colors.icon}`} />
                        </div>
                        <motion.div
                          animate={{
                            opacity: [0.2, 0.4, 0.2],
                            scale: [1, 1.2, 1],
                          }}
                          transition={{ duration: 2, repeat: Infinity }}
                          className={`absolute inset-0 blur-xl ${colors.icon} opacity-30 rounded-xl`}
                        />
                      </motion.div>

                      {/* Titre et sous-titre */}
                      <div className="flex-1 min-w-0">
                        <motion.h2
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.2 }}
                          className="text-2xl sm:text-3xl md:text-4xl font-light text-neutral-900 mb-2 tracking-tight"
                          style={{ fontWeight: 200 }}
                        >
                          {title}
                        </motion.h2>
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: '100%' }}
                          transition={{ delay: 0.3, duration: 0.5 }}
                          className="h-0.5 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 rounded-full max-w-32"
                        />
                      </div>
                    </div>

                    {/* Close button élégant */}
                    <motion.button
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.2 }}
                      whileHover={{ scale: 1.1, rotate: 90 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={onClose}
                      className="w-10 h-10 rounded-xl flex items-center justify-center text-neutral-400 hover:text-neutral-900 transition-all duration-200 hover:bg-neutral-100 flex-shrink-0"
                    >
                      <X className="w-5 h-5" />
                    </motion.button>
                  </div>
                </div>

                {/* Body avec scroll élégant */}
                <div className="p-4 sm:p-6 md:p-8 overflow-y-auto max-h-[calc(95vh-180px)] sm:max-h-[calc(90vh-200px)]">
                  {/* Description principale */}
                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="text-base sm:text-lg md:text-xl text-neutral-600 leading-relaxed mb-6 sm:mb-8 font-light"
                    style={{ letterSpacing: '0.01em' }}
                  >
                    {description}
                  </motion.p>

                  {/* Additional details avec design premium */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="space-y-6"
                  >
                    {title.includes('Formations') && (
                      <div 
                        className="p-6 md:p-8 rounded-2xl border"
                        style={{
                          background: 'rgba(255, 255, 255, 0.6)',
                          backdropFilter: 'blur(10px)',
                          borderColor: 'rgba(229, 229, 229, 0.5)',
                          boxShadow: '0 4px 16px rgba(0, 0, 0, 0.04), inset 0 1px 0 rgba(255, 255, 255, 0.5)',
                        }}
                      >
                        <h3 className="text-lg sm:text-xl font-semibold text-neutral-900 mb-3 sm:mb-4 tracking-tight">Formations disponibles</h3>
                        <ul className="space-y-3">
                          {[
                            'Formation IA & ChatGPT avancé (2 jours)',
                            'Microsoft 365 Administration & SharePoint',
                            'Automatisation Power Platform & Chatbots',
                          ].map((item, idx) => (
                            <motion.li
                              key={idx}
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: 0.5 + idx * 0.1 }}
                              className="flex items-start gap-3 text-neutral-700"
                            >
                              <motion.span
                                className={`${colors.icon} mt-0.5 flex-shrink-0`}
                                animate={{ scale: [1, 1.2, 1] }}
                                transition={{ delay: 0.6 + idx * 0.1, duration: 0.3 }}
                              >
                                ✓
                              </motion.span>
                              <span className="leading-relaxed">{item}</span>
                            </motion.li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {title.includes('Intelligence Artificielle') && (
                      <div 
                        className="p-6 md:p-8 rounded-2xl border"
                        style={{
                          background: 'rgba(255, 255, 255, 0.6)',
                          backdropFilter: 'blur(10px)',
                          borderColor: 'rgba(229, 229, 229, 0.5)',
                          boxShadow: '0 4px 16px rgba(0, 0, 0, 0.04), inset 0 1px 0 rgba(255, 255, 255, 0.5)',
                        }}
                      >
                        <h3 className="text-xl font-semibold text-neutral-900 mb-4 tracking-tight">Expertise technique</h3>
                        <ul className="space-y-3">
                          {[
                            'Intégration ChatGPT, Claude, Gemini',
                            'Fine-tuning de modèles LLM',
                            'RAG (Retrieval-Augmented Generation) avancé',
                            'Agents autonomes et prompt engineering',
                          ].map((item, idx) => (
                            <motion.li
                              key={idx}
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: 0.5 + idx * 0.1 }}
                              className="flex items-start gap-3 text-neutral-700"
                            >
                              <motion.span
                                className={`${colors.icon} mt-0.5 flex-shrink-0`}
                                animate={{ scale: [1, 1.2, 1] }}
                                transition={{ delay: 0.6 + idx * 0.1, duration: 0.3 }}
                              >
                                ✓
                              </motion.span>
                              <span className="leading-relaxed">{item}</span>
                            </motion.li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {title.includes('Développement') && (
                      <div 
                        className="p-6 md:p-8 rounded-2xl border"
                        style={{
                          background: 'rgba(255, 255, 255, 0.6)',
                          backdropFilter: 'blur(10px)',
                          borderColor: 'rgba(229, 229, 229, 0.5)',
                          boxShadow: '0 4px 16px rgba(0, 0, 0, 0.04), inset 0 1px 0 rgba(255, 255, 255, 0.5)',
                        }}
                      >
                        <h3 className="text-xl font-semibold text-neutral-900 mb-4 tracking-tight">Stack technique</h3>
                        <ul className="space-y-3">
                          {[
                            'Frontend : React, Next.js, TypeScript',
                            'Backend : Python, Node.js, APIs REST/GraphQL',
                            'Mobile : React Native, Expo',
                            'Cloud : AWS, Vercel, architecture scalable',
                          ].map((item, idx) => (
                            <motion.li
                              key={idx}
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: 0.5 + idx * 0.1 }}
                              className="flex items-start gap-3 text-neutral-700"
                            >
                              <motion.span
                                className={`${colors.icon} mt-0.5 flex-shrink-0`}
                                animate={{ scale: [1, 1.2, 1] }}
                                transition={{ delay: 0.6 + idx * 0.1, duration: 0.3 }}
                              >
                                ✓
                              </motion.span>
                              <span className="leading-relaxed">{item}</span>
                            </motion.li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {title.includes('Automatisation') && (
                      <div 
                        className="p-6 md:p-8 rounded-2xl border"
                        style={{
                          background: 'rgba(255, 255, 255, 0.6)',
                          backdropFilter: 'blur(10px)',
                          borderColor: 'rgba(229, 229, 229, 0.5)',
                          boxShadow: '0 4px 16px rgba(0, 0, 0, 0.04), inset 0 1px 0 rgba(255, 255, 255, 0.5)',
                        }}
                      >
                        <h3 className="text-xl font-semibold text-neutral-900 mb-4 tracking-tight">Solutions d'automatisation</h3>
                        <ul className="space-y-3">
                          {[
                            'Intégrations API complexes et webhooks',
                            'Workflows automatisés et orchestration',
                            'RPA (Robotic Process Automation)',
                            'ROI mesurable et gain de temps garanti',
                          ].map((item, idx) => (
                            <motion.li
                              key={idx}
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: 0.5 + idx * 0.1 }}
                              className="flex items-start gap-3 text-neutral-700"
                            >
                              <motion.span
                                className={`${colors.icon} mt-0.5 flex-shrink-0`}
                                animate={{ scale: [1, 1.2, 1] }}
                                transition={{ delay: 0.6 + idx * 0.1, duration: 0.3 }}
                              >
                                ✓
                              </motion.span>
                              <span className="leading-relaxed">{item}</span>
                            </motion.li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </motion.div>

                  {/* CTA Buttons élégants */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                    className="mt-8 pt-6 border-t border-neutral-200/50 flex flex-col sm:flex-row gap-4"
                  >
                    <motion.a
                      href="#contact"
                      onClick={onClose}
                      whileHover={{ scale: 1.02, y: -2 }}
                      whileTap={{ scale: 0.98 }}
                      className="flex-1 px-4 sm:px-6 md:px-8 py-3 sm:py-4 rounded-xl font-semibold text-white text-center text-base sm:text-lg relative overflow-hidden group min-h-[44px] flex items-center justify-center"
                      style={{
                        background: 'linear-gradient(135deg, #1e3a8a 0%, #3b82f6 50%, #6366f1 100%)',
                        boxShadow: `0 10px 40px ${colors.glow}`,
                      }}
                    >
                      {/* Shimmer effect */}
                      <motion.div
                        animate={{ x: ['-100%', '200%'] }}
                        transition={{ duration: 2, repeat: Infinity, ease: 'linear', repeatDelay: 3 }}
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12"
                      />
                      <span className="relative z-10 flex items-center justify-center gap-2">
                        Discuter d'une mission
                        <ArrowRight className="w-5 h-5" />
                      </span>
                    </motion.a>
                    <motion.button
                      onClick={onClose}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="px-4 sm:px-6 md:px-8 py-3 sm:py-4 rounded-xl font-semibold text-neutral-700 text-base sm:text-lg border border-neutral-300/60 hover:border-neutral-400/80 transition-all duration-200 min-h-[44px] flex items-center justify-center"
                      style={{
                        background: 'rgba(255, 255, 255, 0.8)',
                        backdropFilter: 'blur(10px)',
                      }}
                    >
                      Fermer
                    </motion.button>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
