import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0f0f0f] px-4">
      <div className="text-center max-w-md">
        <h1 className="text-5xl font-light text-amber-400 mb-4 tracking-tight">404</h1>
        <p className="text-neutral-300 mb-2 text-lg">Cette page n'existe pas.</p>
        <p className="text-neutral-500 mb-8 text-sm">
          Le lien est peut-être erroné ou la page a été déplacée.
        </p>
        <Link
          href="/"
          className="px-6 py-3 rounded-xl bg-amber-500 text-neutral-900 font-medium hover:bg-amber-400 transition-colors inline-block shadow-lg shadow-amber-500/20"
        >
          Retour à l'accueil
        </Link>
      </div>
    </div>
  )
}
