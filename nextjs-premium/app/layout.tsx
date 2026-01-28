import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import TextureOverlay from '@/components/TextureOverlay'
import ParticleBackground from '@/components/ParticleBackground'
import MetalBackground from '@/components/MetalBackground'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'KLYON — Logiciels sur mesure & automatisation',
  description: 'Consultant informatique confirmé spécialisé en développement logiciel sur mesure, automatisation de processus et intégration IA. Missions courtes ou longues dans les Bouches-du-Rhône.',
  keywords: ['développement logiciel', 'automatisation', 'intelligence artificielle', 'intégration API', 'consultant informatique', 'Bouches-du-Rhône'],
  authors: [{ name: 'Lorenzo Fortini', url: 'https://linkedin.com/in/zl3/' }],
  creator: 'KLYON',
  publisher: 'KLYON',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://klyon.fr'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'KLYON — Logiciels sur mesure & automatisation',
    description: 'Consultant informatique confirmé spécialisé en développement logiciel sur mesure, automatisation de processus et intégration IA.',
    url: 'https://klyon.fr',
    siteName: 'KLYON',
    locale: 'fr_FR',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" className={inter.variable} suppressHydrationWarning>
      <body className="min-h-screen flex flex-col relative overflow-x-hidden">
        <TextureOverlay />
        {/* <MetalBackground /> */}
        {/* <ParticleBackground /> */}
        <Header />
        <main className="flex-grow relative z-10">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
