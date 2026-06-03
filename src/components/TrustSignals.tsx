import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { featuredProjects } from "@/data/projects";

const TrustSignals = () => {
  return (
    <section className="relative py-20 md:py-24 overflow-hidden">
      <div className="container relative">
        <div className="max-w-2xl mb-12">
          <div className="font-mono text-xs text-primary mb-3">// RÉALISATIONS · RÉCENTES</div>
          <h2 className="font-display text-3xl md:text-5xl font-bold leading-tight">
            Les derniers <span className="text-gradient-primary">projets Klyon</span>.
          </h2>
          <p className="text-muted-foreground mt-4 max-w-xl">
            Un aperçu rapide des derniers sujets livrés. Chaque carte mène vers une page projet dédiée.
          </p>
        </div>

        <div className="grid xl:grid-cols-3 gap-5">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.slug}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
            >
              <Link
                to={`/realisations/${project.slug}`}
                className="group glass-strong block h-full rounded-3xl border border-border/40 p-6 md:p-7 hover:border-primary/40 transition-all"
              >
                <div className="flex items-center justify-between gap-4 mb-4">
                  <div className="font-mono text-[10px] uppercase tracking-widest text-primary">
                    {project.cat} · {project.year}
                  </div>
                  <ArrowRight className="w-4 h-4 text-primary/70 group-hover:translate-x-1 transition-transform" />
                </div>
                <h3 className="font-display text-2xl font-semibold leading-tight mb-3">
                  {project.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-5">
                  {project.teaser}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.techs.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className="text-[11px] font-mono px-2.5 py-1 rounded-full bg-primary/10 border border-primary/20 text-foreground/80"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustSignals;
