import { Star } from "lucide-react";
import { googleReviewStats, googleReviewsLink } from "@/data/reviews";

const GoogleRatingSummary = () => {
  return (
    <section className="relative py-16 md:py-20">
      <div className="container">
        <div className="glass-strong rounded-3xl border border-yellow-400/20 bg-yellow-400/5 p-6 md:p-8 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
          <div>
            <div className="font-mono text-xs text-yellow-300 mb-3">// AVIS GOOGLE</div>
            <h2 className="font-display text-2xl md:text-4xl font-bold leading-tight">
              {googleReviewStats.rating} sur <span className="text-gradient-primary">{googleReviewStats.count}</span>
            </h2>
            <p className="text-muted-foreground mt-3 max-w-2xl">
              Une note claire, visible et vérifiable. Cliquez pour consulter les avis Google directement.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <div className="flex gap-1 text-yellow-400">
              {Array.from({ length: 5 }).map((_, index) => (
                <Star key={index} className="w-5 h-5 fill-current" />
              ))}
            </div>
            <a
              href={googleReviewsLink}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-full border border-yellow-400/30 bg-yellow-400/10 px-5 py-3 text-sm font-mono text-yellow-200 transition-colors hover:bg-yellow-400/20"
            >
              Consulter les avis Google
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GoogleRatingSummary;
