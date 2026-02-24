'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { useAnimation } from '@/contexts/AnimationContext'
import { useRef } from 'react'

export default function HeroModern() {
  const { startupComplete } = useAnimation()
  const sectionRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  })
  const meshY = useTransform(scrollYProgress, [0, 1], [0, 120])
  const panelY = useTransform(scrollYProgress, [0, 0.5], [0, 40])

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex items-center px-4 sm:px-6 lg:px-12 overflow-hidden"
      style={{ background: '#0f0f0f' }}
    >
      {/* Background: modern mesh / grid (parallax au scroll) */}
      <motion.div style={{ y: meshY }} className="absolute inset-0 -z-10">
        <div className="absolute inset-0 opacity-40">
          <div
            className="w-[160%] h-[160%] -left-[30%] -top-[40%] absolute gradient-animated rounded-full blur-3xl"
            style={{
              background:
                'radial-gradient(circle at 0% 0%, rgba(234,179,8,0.35), transparent 50%), radial-gradient(circle at 80% 100%, rgba(250,204,21,0.2), transparent 55%)',
            }}
          />
        </div>
        <div className="absolute inset-0 opacity-[0.04]">
          <div
            className="w-full h-full"
            style={{
              backgroundImage: `
                linear-gradient(rgba(148, 163, 184, 0.35) 1px, transparent 1px),
                linear-gradient(90deg, rgba(148, 163, 184, 0.35) 1px, transparent 1px)
              `,
              backgroundSize: '60px 60px',
            }}
          />
        </div>
      </motion.div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] gap-12 lg:gap-20 items-center w-full">
        {/* Left: text */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={startupComplete ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="space-y-8"
        >
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full glass-soft border border-amber-400/40 shadow-soft text-xs sm:text-sm text-neutral-200 uppercase tracking-[0.18em]">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.8)]" />
            <span>Consultant logiciel & automatisation</span>
          </div>

          <div className="space-y-4 sm:space-y-6">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[3.8rem] font-light tracking-tight text-neutral-50 leading-tight">
              <span className="block text-neutral-400 text-xs sm:text-sm uppercase tracking-[0.3em] mb-3">
                KLYON SOFTWARE
              </span>
              <span className="block">
                Logiciels sur&nbsp;
                <span className="text-amber-400 font-normal">
                  mesure
                </span>
              </span>
              <span className="block text-neutral-300">
                Automatisations
                <span className="text-neutral-500 mx-3">/</span>
                <span className="text-neutral-50">Formations IA</span>
              </span>
            </h1>

            <p className="text-sm sm:text-base md:text-lg text-neutral-300 max-w-xl leading-relaxed font-light">
              Une approche senior pour concevoir, automatiser et former. De l&apos;idée au déploiement, Klyon
              transforme vos flux manuels en outils logiciels précis, élégants et rentables.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 sm:gap-5 items-start sm:items-center">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={startupComplete ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
              transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col sm:flex-row gap-3 sm:gap-4"
            >
              <Link
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-amber-400 to-amber-500 text-black text-sm sm:text-base font-semibold tracking-wide shadow-soft-xl hover:shadow-soft-lg hover:-translate-y-[2px] transition-all duration-200"
              >
                <span>Planifier un échange</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/realisations"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl glass-dark border border-amber-400/30 text-sm sm:text-base text-neutral-100 font-medium hover:border-amber-300 hover:text-amber-300 transition-all duration-200"
              >
                Voir les réalisations
              </Link>
            </motion.div>

          </div>
        </motion.div>

        {/* Right: abstract “software” panel */}
        <motion.div
          style={{ y: panelY }}
          initial={{ opacity: 0, y: 40, scale: 0.96 }}
          animate={startupComplete ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 40, scale: 0.96 }}
          transition={{ duration: 0.9, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="relative h-[320px] sm:h-[360px] md:h-[420px] lg:h-[460px]"
        >
          <div className="absolute inset-0 rounded-[32px] glass-dark border border-amber-400/25 shadow-soft-xl overflow-hidden backdrop-blur-2xl">
            {/* inner gradient mesh */}
            <div className="absolute inset-0 opacity-90">
              <div
                className="absolute -left-10 top-[-15%] w-64 h-64 md:w-80 md:h-80 rounded-full blur-3xl"
                style={{
                  background:
                    'radial-gradient(circle at 30% 20%, rgba(234,179,8,0.5), transparent 60%)',
                }}
              />
              <div
                className="absolute right-[-10%] bottom-[-20%] w-72 h-72 md:w-96 md:h-96 rounded-full blur-3xl"
                style={{
                  background:
                    'radial-gradient(circle at 70% 80%, rgba(250,204,21,0.35), transparent 55%)',
                }}
              />
            </div>

            {/* layered “windows” representing software / dashboards */}
            <div className="relative z-10 w-full h-full flex items-center justify-center">
              <div className="relative w-[82%] h-[70%]">
                <motion.div
                  initial={{ y: 30, opacity: 0 }}
                  animate={startupComplete ? { y: 0, opacity: 1 } : { y: 30, opacity: 0 }}
                  transition={{ duration: 0.8, delay: 0.35 }}
                  className="absolute inset-0 rounded-2xl bg-black/65 border border-amber-400/25 shadow-soft-lg overflow-hidden"
                >
                  <div className="h-8 flex items-center gap-1.5 px-4 border-b border-neutral-800/80 bg-neutral-900/60">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-400/70" />
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400/70" />
                    <span className="ml-3 text-[10px] uppercase tracking-[0.2em] text-neutral-500">
                      KLYON / DASHBOARD
                    </span>
                  </div>
                  <div className="p-4 sm:p-5 flex flex-col gap-4 text-[11px] sm:text-xs text-neutral-300">
                    <div className="flex justify-between gap-3">
                      <div className="flex-1 space-y-2">
                        <div className="h-1.5 w-24 shimmer rounded-full bg-neutral-800/80" />
                        <div className="h-1.5 w-16 shimmer rounded-full bg-neutral-800/80" />
                        <div className="mt-3 grid grid-cols-3 gap-1.5">
                          {Array.from({ length: 6 }).map((_, i) => (
                            <div
                              key={i}
                              className="h-7 rounded-md bg-neutral-900/90 border border-neutral-800/80"
                            />
                          ))}
                        </div>
                      </div>
                      <div className="w-24 sm:w-28 h-20 rounded-xl bg-gradient-to-br from-amber-400/20 to-amber-500/10 border border-amber-400/30 shadow-soft flex items-center justify-center text-[10px] text-amber-200 font-medium">
                        ROI +32%
                      </div>
                    </div>
                    <div className="mt-1 flex gap-2">
                      <div className="flex-1 h-1.5 rounded-full bg-neutral-800/80 overflow-hidden">
                        <div className="h-full w-2/3 bg-gradient-to-r from-amber-500 to-amber-300" />
                      </div>
                      <div className="flex-1 h-1.5 rounded-full bg-neutral-800/80 overflow-hidden">
                        <div className="h-full w-1/2 bg-gradient-to-r from-sky-500 to-sky-300" />
                      </div>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ y: 60, opacity: 0, rotate: -4 }}
                  animate={startupComplete ? { y: 18, opacity: 1, rotate: -4 } : { y: 60, opacity: 0, rotate: -4 }}
                  transition={{ duration: 0.9, delay: 0.5 }}
                  className="absolute -left-4 bottom-0 w-[58%] h-[52%] rounded-2xl border border-amber-400/25 bg-neutral-950/80 shadow-soft-lg backdrop-blur-xl"
                >
                  <div className="p-4 flex flex-col gap-3">
                    <div className="flex items-center justify-between text-[10px] text-neutral-400 uppercase tracking-[0.18em]">
                      <span>Automatisation</span>
                      <span className="text-emerald-400">ON</span>
                    </div>
                    <div className="space-y-1">
                      {['Déclencheurs', 'Étapes', 'Intégrations'].map((label, i) => (
                        <div key={label} className="flex items-center justify-between text-[11px] text-neutral-300">
                          <span>{label}</span>
                          <span className="text-neutral-500">{i === 0 ? '6 actifs' : i === 1 ? '12' : 'Zapier, N8N, APIs'}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ y: -40, opacity: 0, rotate: 5 }}
                  animate={startupComplete ? { y: -18, opacity: 1, rotate: 5 } : { y: -40, opacity: 0, rotate: 5 }}
                  transition={{ duration: 0.9, delay: 0.55 }}
                  className="absolute -right-2 top-3 w-[46%] h-[46%] rounded-2xl border border-amber-200/25 bg-gradient-to-b from-neutral-900/90 to-neutral-950/95 shadow-soft-lg backdrop-blur-xl"
                >
                  <div className="p-3 flex flex-col gap-3">
                    <div className="flex items-center justify-between text-[10px] text-neutral-400 uppercase tracking-[0.18em]">
                      <span>Formations</span>
                      <span className="text-amber-300">LIVE</span>
                    </div>
                    <div className="grid grid-cols-2 gap-2 text-[10px] text-neutral-200">
                      <div className="rounded-lg bg-neutral-900/70 border border-neutral-800/80 p-2 flex flex-col gap-1">
                        <span className="text-[9px] text-neutral-500 uppercase tracking-[0.18em]">
                          IA / ChatGPT
                        </span>
                        <span className="font-medium text-xs text-neutral-100">Niveau Expert</span>
                      </div>
                      <div className="rounded-lg bg-neutral-900/70 border border-neutral-800/80 p-2 flex flex-col gap-1">
                        <span className="text-[9px] text-neutral-500 uppercase tracking-[0.18em]">
                          Microsoft 365
                        </span>
                        <span className="font-medium text-xs text-neutral-100">Power Platform</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

