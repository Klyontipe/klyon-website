import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";
import { googleReviewStats, googleReviewsLink, testimonials } from "@/data/reviews";

const Testimonials = () => {
  return (
    <section id="testimonials" className="relative py-24 md:py-28 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-radial opacity-40" />
      <div className="container relative">
        <div className="max-w-2xl mb-12">
          <div className="font-mono text-xs text-primary mb-3">// AVIS & RECOMMANDATIONS</div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-6xl font-bold leading-tight">
            Ils font confiance à <span className="text-gradient-primary">Klyon</span>.
          </h2>
          <p className="text-muted-foreground mt-4 max-w-lg">
            {googleReviewStats.rating} sur {googleReviewStats.count}, avec le détail des retours Google et LinkedIn pour donner une lecture plus concrète de l'expérience client.
          </p>
          <a
            href={googleReviewsLink}
            target="_blank"
            rel="noreferrer"
            className="mt-5 inline-flex items-center gap-2 rounded-full border border-yellow-400/40 bg-yellow-400/10 px-4 py-2 text-sm font-mono text-yellow-300 transition-colors hover:bg-yellow-400/20"
          >
            <span>Voir les avis Google</span>
            <span aria-hidden="true">↗</span>
          </a>
        </div>

        <div className="grid md:grid-cols-2 gap-5">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={`${testimonial.source}-${testimonial.name}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: index * 0.08 }}
              className="group glass rounded-2xl p-6 md:p-8 relative overflow-hidden hover:border-primary/40 transition-all duration-500"
            >
              <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-primary/10 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
              <Quote className="w-8 h-8 text-primary/40 mb-4" />
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-border/50 bg-background/20 px-3 py-1 text-[10px] font-mono uppercase tracking-wider text-muted-foreground">
                <span>{testimonial.source}</span>
              </div>
              <p className="text-foreground/90 leading-relaxed text-[15px] relative">
                {testimonial.quote}
              </p>
              <div className="mt-6 flex items-center justify-between gap-4 relative">
                <div>
                  <div className="font-display font-semibold">{testimonial.name}</div>
                  <div className="text-xs font-mono text-muted-foreground mt-0.5">{testimonial.role}</div>
                </div>
                <div className="flex gap-0.5">
                  {Array.from({ length: 5 }).map((_, starIndex) => (
                    <Star key={starIndex} className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
