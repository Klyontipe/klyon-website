'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

interface PageHeroProps {
  title: string
  subtitle?: string
  badge?: string
  ctaLabel?: string
  ctaHref?: string
}

export default function PageHero({ title, subtitle, badge, ctaLabel, ctaHref }: PageHeroProps) {
  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0, 0.25], [0, 80])
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0.3])
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.98])

  return (
    <motion.header
      style={{ y, opacity, scale }}
      className="relative pt-28 pb-20 sm:pt-36 sm:pb-24 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto text-center">
        {badge && (
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full glass-soft border border-amber-400/40 shadow-soft mb-8 text-xs sm:text-sm text-neutral-200 uppercase tracking-[0.18em]"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400 shadow-[0_0_10px_rgba(234,179,8,0.6)]" />
            {badge}
          </motion.div>
        )}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light tracking-tight text-neutral-50 leading-tight"
          style={{ fontWeight: 200 }}
        >
          {title}
        </motion.h1>
        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 text-lg sm:text-xl text-neutral-400 max-w-2xl mx-auto font-light"
          >
            {subtitle}
          </motion.p>
        )}
        {ctaLabel && ctaHref && (
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.35 }}
            className="mt-10"
          >
            <Link
              href={ctaHref}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-amber-400 to-amber-500 text-black text-sm font-semibold tracking-wide shadow-soft-xl hover:shadow-soft-lg hover:-translate-y-0.5 transition-all duration-200"
            >
              {ctaLabel}
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        )}
      </div>
    </motion.header>
  )
}
