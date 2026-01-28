import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-4">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-neutral-900 mb-4">404</h1>
        <p className="text-neutral-600 mb-8">Cette page n'existe pas</p>
        <Link
          href="/"
          className="px-6 py-3 bg-neutral-900 text-white rounded-lg hover:bg-neutral-800 transition-colors inline-block"
        >
          Retour à l'accueil
        </Link>
      </div>
    </div>
  )
}
