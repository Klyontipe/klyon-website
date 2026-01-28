'use client'

import { motion } from 'framer-motion'
import { CheckCircle2 } from 'lucide-react'

interface CaseStudyCardProps {
  problem: string
  solution: string
  technologies: string[]
  result: string
}

export default function CaseStudyCard({ problem, solution, technologies, result }: CaseStudyCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -4, scale: 1.01 }}
      className="group relative p-8 glass-soft rounded-2xl border border-neutral-300/50 hover:border-neutral-400/60 transition-all duration-300 overflow-hidden shadow-soft hover:shadow-soft-lg h-full"
    >
      {/* Soft gradient on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-neutral-50/0 to-neutral-100/0 group-hover:from-neutral-50/40 group-hover:to-neutral-100/20 transition-all duration-500 rounded-2xl" />

      {/* Badge */}
      <div className="absolute top-4 right-4 w-7 h-7 rounded-full glass-soft border border-neutral-300/40 flex items-center justify-center shadow-soft">
        <CheckCircle2 className="h-3.5 w-3.5 text-neutral-500" />
      </div>

      <div className="relative z-10 space-y-6">
        <div>
          <h4 className="text-xs font-medium text-neutral-500 uppercase tracking-wider mb-3 flex items-center gap-2">
            <span className="w-1 h-1 bg-neutral-400 rounded-full" />
            Problème
          </h4>
          <p className="text-neutral-900 leading-relaxed text-sm font-light" style={{ letterSpacing: '0.01em' }}>
            {problem}
          </p>
        </div>
        
        <div className="relative">
          <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-neutral-300/40 to-transparent" />
          <div className="pl-4">
            <h4 className="text-xs font-medium text-neutral-500 uppercase tracking-wider mb-3 flex items-center gap-2">
              <span className="w-1 h-1 bg-neutral-400 rounded-full" />
              Solution
            </h4>
            <p className="text-neutral-700 leading-relaxed text-sm font-light" style={{ letterSpacing: '0.01em' }}>
              {solution}
            </p>
          </div>
        </div>
        
        <div>
          <h4 className="text-xs font-medium text-neutral-500 uppercase tracking-wider mb-3 flex items-center gap-2">
            <span className="w-1 h-1 bg-neutral-400 rounded-full" />
            Technologies
          </h4>
          <div className="flex flex-wrap gap-2">
            {technologies.map((tech, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                whileHover={{ scale: 1.05 }}
                className="px-3 py-1.5 bg-white/60 backdrop-blur-sm text-neutral-700 text-xs font-medium rounded-lg border border-neutral-300/40 shadow-soft hover:shadow-soft-lg transition-all duration-300"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </div>
        
        <div className="pt-4 border-t border-neutral-300/40">
          <h4 className="text-xs font-medium text-neutral-500 uppercase tracking-wider mb-3 flex items-center gap-2">
            <span className="w-1 h-1 bg-neutral-500 rounded-full" />
            Résultat
          </h4>
          <p className="text-neutral-900 font-medium leading-relaxed text-sm" style={{ letterSpacing: '0.01em' }}>
            {result}
          </p>
        </div>
      </div>
    </motion.div>
  )
}
