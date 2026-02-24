'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useAnimation } from '@/contexts/AnimationContext'

type Stage = 'intro' | 'hold' | 'exit'

const LETTERS = ['K', 'L', 'Y', 'O', 'N']

export default function StartupAnimation() {
  const [isVisible, setIsVisible] = useState(true)
  const [stage, setStage] = useState<Stage>('intro')
  const [skipAnimation, setSkipAnimation] = useState(false)
  const [statusText, setStatusText] = useState('Initializing…')
  const [progress, setProgress] = useState(0)
  const [showSkipHint, setShowSkipHint] = useState(false)
  const [glitchActive, setGlitchActive] = useState(false)
  const { setStartupComplete } = useAnimation()

  const finish = () => {
    setIsVisible(false)
    setStartupComplete(true)
  }

  const skipToSite = () => {
    if (skipAnimation) return
    setSkipAnimation(true)
    setStage('exit')
    setTimeout(finish, 500)
  }

  useEffect(() => {
    window.addEventListener('keydown', skipToSite)
    window.addEventListener('click', skipToSite)
    return () => {
      window.removeEventListener('keydown', skipToSite)
      window.removeEventListener('click', skipToSite)
    }
  }, [])

  // Timeline normale
  useEffect(() => {
    if (skipAnimation) return
    const t1 = setTimeout(() => setStage('hold'), 1200)
    const t2 = setTimeout(() => setStatusText('Systems ready.'), 1600)
    const t3 = setTimeout(() => setStage('exit'), 3200)
    return () => {
      clearTimeout(t1)
      clearTimeout(t2)
      clearTimeout(t3)
    }
  }, [skipAnimation])

  // Skip hint après 1s
  useEffect(() => {
    const t = setTimeout(() => setShowSkipHint(true), 1000)
    return () => clearTimeout(t)
  }, [])

  // Un seul micro-glitch quand on passe en hold
  useEffect(() => {
    if (stage !== 'hold' || glitchActive) return
    setGlitchActive(true)
    const t = setTimeout(() => setGlitchActive(false), 180)
    return () => clearTimeout(t)
  }, [stage, glitchActive])

  // Progression 0 → 100
  useEffect(() => {
    if (stage === 'exit') return
    const duration = 2800
    const start = Date.now()
    const tick = () => {
      const elapsed = Date.now() - start
      const value = Math.min(100, (elapsed / duration) * 100)
      setProgress(value)
      if (value < 100) requestAnimationFrame(tick)
    }
    const id = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(id)
  }, [stage])

  // Exit : terminer après délai
  useEffect(() => {
    if (skipAnimation) return
    if (stage !== 'exit') return
    const t = setTimeout(finish, 900)
    return () => clearTimeout(t)
  }, [stage, skipAnimation])

  // Particules (positions stables pour éviter hydration mismatch)
  const particles = Array.from({ length: 18 }, (_, i) => ({
    id: i,
    x: (i * 37 + 11) % 100,
    y: (i * 53 + 7) % 100,
    delay: (i * 0.4) % 2,
    duration: 12 + (i % 5),
    size: 1 + (i % 3),
  }))

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1, scale: 1 }}
          animate={
            stage === 'exit'
              ? { opacity: 0, scale: 1.02 }
              : { opacity: 1, scale: 1 }
          }
          exit={{ opacity: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden"
          style={{
            background:
              'radial-gradient(ellipse at center, #050506 0%, #020203 45%, #000000 100%)',
          }}
        >
          {/* Particules / poussière */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            {particles.map((p) => (
              <motion.div
                key={p.id}
                className="absolute rounded-full bg-amber-400/20"
                style={{
                  left: `${p.x}%`,
                  top: `${p.y}%`,
                  width: p.size,
                  height: p.size,
                  boxShadow: '0 0 6px rgba(234,179,8,0.3)',
                }}
                animate={{
                  x: [0, 30, -20, 0],
                  y: [0, -40, 20, 0],
                  opacity: [0.15, 0.4, 0.2, 0.15],
                }}
                transition={{
                  duration: p.duration,
                  repeat: Infinity,
                  delay: p.delay,
                  ease: 'linear',
                }}
              />
            ))}
          </div>

          {/* Fond: gradient mesh + grille */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute inset-0 opacity-60">
              <div
                className="w-[160%] h-[160%] -left-[30%] -top-[40%] absolute gradient-animated rounded-full blur-3xl"
                style={{
                  background:
                    'radial-gradient(circle at 0% 0%, rgba(234,179,8,0.45), transparent 55%), radial-gradient(circle at 100% 100%, rgba(37,99,235,0.28), transparent 55%)',
                }}
              />
            </div>
            <div className="absolute inset-0 opacity-[0.04]">
              <div
                className="w-full h-full"
                style={{
                  backgroundImage: `
                    linear-gradient(rgba(148, 163, 184, 0.32) 1px, transparent 1px),
                    linear-gradient(90deg, rgba(148, 163, 184, 0.32) 1px, transparent 1px)
                  `,
                  backgroundSize: '70px 70px',
                }}
              />
            </div>
            <motion.div
              className="absolute inset-y-[-20%] w-px left-1/2 -translate-x-1/2 bg-gradient-to-b from-transparent via-amber-400/40 to-transparent"
              animate={{ y: ['120%', '-20%'] }}
              transition={{ duration: 2.4, repeat: Infinity, ease: 'linear' }}
            />
          </div>

          {/* Bloc central */}
          <div className="relative z-10 flex flex-col items-center">
            <motion.div
              initial={{ opacity: 0, y: 24, filter: 'blur(12px)' }}
              animate={
                stage === 'exit'
                  ? { opacity: 0, y: -12, filter: 'blur(8px)' }
                  : { opacity: 1, y: 0, filter: 'blur(0px)' }
              }
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className="text-center"
            >
              {/* Logo KLYON : lettres en décalé */}
              <div className="inline-flex flex-col items-center relative">
                <div className="flex items-center justify-center overflow-hidden">
                  {LETTERS.map((letter, i) => (
                    <motion.span
                      key={letter}
                      initial={{
                        opacity: 0,
                        filter: 'blur(8px)',
                        y: 4,
                      }}
                      animate={{
                        opacity: 1,
                        filter: 'blur(0px)',
                        y: 0,
                      }}
                      transition={{
                        duration: 0.35,
                        delay: 0.15 + i * 0.08,
                        ease: [0.16, 1, 0.3, 1],
                      }}
                      className="text-4xl sm:text-5xl md:text-6xl font-light tracking-[0.16em] uppercase inline-block"
                      style={{
                        background:
                          'linear-gradient(120deg, #facc15, #eab308, #fbbf24)',
                        WebkitBackgroundClip: 'text',
                        backgroundClip: 'text',
                        color: 'transparent',
                        textShadow:
                          '0 0 18px rgba(234,179,8,0.45), 0 0 40px rgba(234,179,8,0.28)',
                      }}
                    >
                      {letter}
                    </motion.span>
                  ))}
                </div>
                {/* Micro glitch (une fois) : décalage RGB */}
                {glitchActive && (
                  <motion.div
                    className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-visible"
                    initial={{ opacity: 0 }}
                    animate={{
                      opacity: [0, 0.9, 0],
                      x: [0, -3, 2, 0],
                    }}
                    transition={{ duration: 0.2 }}
                  >
                    <span
                      className="text-4xl sm:text-5xl md:text-6xl font-light tracking-[0.16em] uppercase absolute"
                      style={{
                        color: 'transparent',
                        textShadow:
                          '3px 0 rgba(255,100,100,0.8), -3px 0 rgba(100,200,255,0.8), 0 0 20px rgba(234,179,8,0.4)',
                      }}
                    >
                      KLYON
                    </span>
                  </motion.div>
                )}
                <span className="mt-1 block text-[10px] md:text-xs tracking-[0.3em] uppercase text-neutral-500">
                  software
                </span>
              </div>

              {/* Barre de chargement + progression */}
              <div className="mt-5 flex flex-col items-center gap-2">
                <motion.div
                  initial={{ width: '0%' }}
                  animate={
                    stage === 'intro' || stage === 'hold'
                      ? { width: '100%' }
                      : { width: '110%' }
                  }
                  transition={{
                    duration: 1.8,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="h-px w-64 sm:w-80 bg-gradient-to-r from-transparent via-amber-400/70 to-transparent"
                />
                <motion.span
                  className="text-[10px] font-mono text-neutral-500 tabular-nums"
                  animate={{ opacity: 1 }}
                  initial={{ opacity: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  {Math.round(progress)}%
                </motion.span>
              </div>

              {/* Ligne de statut type terminal */}
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="mt-3 font-mono text-[10px] sm:text-xs text-amber-400/80 tracking-wider"
              >
                {statusText}
              </motion.p>

              {/* Baseline */}
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={
                  stage === 'exit'
                    ? { opacity: 0, y: -4 }
                    : { opacity: 1, y: 0 }
                }
                transition={{ duration: 0.7, delay: 0.3 }}
                className="mt-3 text-[11px] sm:text-xs text-neutral-400 tracking-[0.2em] uppercase"
              >
                logiciels sur mesure · automatisation · formations ia
              </motion.p>

              {/* Sous-titre géo / dispo */}
              <motion.p
                initial={{ opacity: 0 }}
                animate={
                  stage === 'exit' ? { opacity: 0 } : { opacity: 0.7 }
                }
                transition={{ delay: 1, duration: 0.5 }}
                className="mt-2 text-[10px] text-neutral-500 tracking-[0.18em] uppercase"
              >
                Bouches-du-Rhône · Disponible pour missions
              </motion.p>
            </motion.div>
          </div>

          {/* Indication skip */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{
              opacity: showSkipHint && stage !== 'exit' ? 0.5 : 0,
            }}
            transition={{ duration: 0.6, delay: showSkipHint ? 0 : 0 }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 text-[10px] sm:text-xs text-neutral-500 tracking-[0.2em] uppercase pointer-events-none"
          >
            Appuyez sur une touche pour continuer
          </motion.p>

          {/* Halo de sortie */}
          {stage === 'exit' && (
            <motion.div
              className="absolute inset-0 pointer-events-none"
              initial={{ scale: 0.4, opacity: 0 }}
              animate={{ scale: 2.5, opacity: 1 }}
              transition={{
                duration: skipAnimation ? 0.5 : 0.9,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              <div
                className="absolute inset-0 rounded-full"
                style={{
                  background:
                    'radial-gradient(circle at center, rgba(234,179,8,0.25) 0%, rgba(10,10,10,0.9) 55%, #020203 100%)',
                  mixBlendMode: 'screen',
                  opacity: 0.8,
                }}
              />
            </motion.div>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  )
}
