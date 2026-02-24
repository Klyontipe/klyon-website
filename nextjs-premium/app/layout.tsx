import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import TextureOverlay from '@/components/TextureOverlay'
import ParticleBackground from '@/components/ParticleBackground'
import MetalBackground from '@/components/MetalBackground'
import StartupAnimation from '@/components/StartupAnimation'
import { AnimationProvider } from '@/contexts/AnimationContext'
import CookieBanner from '@/components/CookieBanner'

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
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'KLYON',
    url: 'https://klyon.fr',
    description:
      'Consultant informatique confirmé spécialisé en développement logiciel sur mesure, automatisation de processus et intégration IA.',
    areaServed: [
      {
        '@type': 'AdministrativeArea',
        name: 'Bouches-du-Rhône',
      },
      {
        '@type': 'AdministrativeArea',
        name: 'Provence-Alpes-Côte d\'Azur',
      },
    ],
    sameAs: ['https://linkedin.com/in/zl3/'],
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+33-7-66-98-03-42',
      contactType: 'sales',
      availableLanguage: ['French'],
      email: 'klyonme@gmail.com',
    },
  }

  return (
    <html lang="fr" className={inter.variable} suppressHydrationWarning>
      <body className="min-h-screen flex flex-col relative overflow-x-hidden">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-amber-500 focus:text-black focus:rounded-lg focus:shadow-lg"
        >
          Aller au contenu principal
        </a>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <AnimationProvider>
          <StartupAnimation />
          <TextureOverlay />
          {/* <MetalBackground /> */}
          {/* <ParticleBackground /> */}
          <Header />
          <main id="main-content" className="flex-grow relative z-10">{children}</main>
          <Footer />
          <CookieBanner />
        </AnimationProvider>
      </body>
    </html>
  )
}
