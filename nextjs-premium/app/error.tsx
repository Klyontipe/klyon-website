'use client'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-4">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-neutral-900 mb-4">Une erreur s'est produite</h1>
        <p className="text-neutral-600 mb-8">{error.message || 'Une erreur inattendue est survenue'}</p>
        <button
          onClick={reset}
          className="px-6 py-3 bg-neutral-900 text-white rounded-lg hover:bg-neutral-800 transition-colors"
        >
          Réessayer
        </button>
      </div>
    </div>
  )
}
