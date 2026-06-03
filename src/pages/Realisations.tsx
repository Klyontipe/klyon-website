import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import logolysea from "../../logolysea.png";
import PageLayout from "@/components/PageLayout";
import Seo from "@/components/Seo";
import { PageCTA, Section } from "@/components/PageBlocks";
import { featuredProjects, projects, type ProjectCategory } from "@/data/projects";

type Category = "Tous" | ProjectCategory;

const categories: Category[] = ["Tous", "Web", "IA", "Base de données", "Infrastructure", "Support IT"];

const Realisations = () => {
  const [filter, setFilter] = useState<Category>("Tous");
  const filtered = useMemo(
    () => (filter === "Tous" ? projects : projects.filter((project) => project.cat === filter)),
    [filter],
  );

  return (
    <>
      <Seo
        title="Réalisations et projets livrés — Klyon"
        description="Les dernières réalisations Klyon, les projets archivés et les partenariats techniques sont regroupés ici dans une page dédiée."
        path="/realisations"
      />
      <PageLayout
        eyebrow="// MODULE · RÉALISATIONS"
        title={<>Réalisations <span className="text-gradient-primary">& projets livrés</span></>}
        subtitle="Les projets récents, les réalisations archivées et les partenariats techniques sont regroupés dans une seule page plus claire."
      >
        <Section eyebrow="// PARTENARIAT" title={<>Partenaire officiel de <span className="text-gradient-primary">Lysea</span></>}>
          <div className="grid lg:grid-cols-[0.85fr_1.15fr] gap-6 items-stretch">
            <a
              href="https://lysespoir.org"
              target="_blank"
              rel="noreferrer"
              className="glass-strong rounded-3xl border border-border/40 p-6 flex items-center justify-center hover:border-primary/40 transition-all"
            >
              <img
                src={logolysea}
                alt="Logo Lysea"
                className="w-full max-w-[260px] object-contain"
              />
            </a>
            <div className="glass-strong rounded-3xl border border-border/40 p-6 md:p-8">
              <div className="font-display text-2xl md:text-3xl font-semibold mb-4">
                Accompagnement technique, site, hébergement et suivi
              </div>
              <p className="text-muted-foreground leading-relaxed mb-5">
                Klyon accompagne Lysea en tant que partenaire officiel sur la partie technique, avec un travail autour du site, de l'hébergement et du maintien dans le temps.
              </p>
              <div className="flex flex-wrap gap-3">
                <a
                  href="https://lysespoir.org"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center rounded-full border border-primary/30 bg-primary/10 px-5 py-3 text-sm font-mono text-primary hover:bg-primary/15 transition-colors"
                >
                  Voir le site Lysea
                </a>
                <Link
                  to="/realisations/site-association-lysea"
                  className="inline-flex items-center justify-center rounded-full border border-border/50 px-5 py-3 text-sm font-mono text-muted-foreground hover:border-primary/30 hover:text-primary transition-colors"
                >
                  Voir la réalisation
                </Link>
              </div>
            </div>
          </div>
        </Section>

        <Section eyebrow="// récents" title={<>Derniers <span className="text-gradient-primary">projets</span></>}>
          <div className="grid lg:grid-cols-3 gap-5">
            {featuredProjects.map((project) => (
              <Link
                key={project.slug}
                to={`/realisations/${project.slug}`}
                className="group glass-strong rounded-3xl border border-border/40 p-6 hover:border-primary/40 transition-all"
              >
                <div className="font-mono text-[10px] uppercase tracking-widest text-primary mb-3">
                  {project.cat} · {project.year}
                </div>
                <h2 className="font-display text-2xl font-semibold leading-tight mb-3">{project.title}</h2>
                <p className="text-sm text-muted-foreground leading-relaxed mb-5">{project.teaser}</p>
                <div className="text-xs font-mono text-primary">Voir la page projet</div>
              </Link>
            ))}
          </div>
        </Section>

        <section className="relative py-10">
          <div className="container">
            <div className="max-w-2xl mb-10">
              <div className="font-mono text-xs text-primary mb-3">// ARCHIVES</div>
              <h2 className="font-display text-3xl md:text-5xl font-bold leading-tight">
                Toutes les <span className="text-gradient-primary">réalisations</span>.
              </h2>
            </div>

            <div className="flex flex-wrap gap-2 mb-10">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setFilter(category)}
                  className={`text-xs font-mono px-4 py-2 rounded-full border transition-all ${
                    filter === category
                      ? "bg-primary text-primary-foreground border-primary shadow-glow-soft"
                      : "border-border/60 text-muted-foreground hover:border-primary/50 hover:text-primary"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            <div className="grid md:grid-cols-2 gap-5">
              {filtered.map((project, index) => (
                <motion.div
                  key={project.slug}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.04 }}
                >
                  <Link
                    to={`/realisations/${project.slug}`}
                    className="glass-strong block rounded-2xl p-6 border border-border/40 hover:border-primary/40 transition-all group"
                  >
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-3 text-[10px] font-mono">
                        <span className="text-primary">0{project.id}</span>
                        <span className="px-2 py-0.5 rounded-full bg-primary/10 border border-primary/30 text-primary">
                          {project.cat}
                        </span>
                        <span className="text-muted-foreground">{project.client}</span>
                      </div>
                      <span className="text-[10px] font-mono text-muted-foreground">{project.year}</span>
                    </div>

                    <h3 className="font-display font-semibold text-lg mb-3 group-hover:text-gradient-primary transition-all">
                      {project.title}
                    </h3>

                    <div className="space-y-3 text-xs text-muted-foreground leading-relaxed">
                      <p>
                        <span className="font-mono text-primary">contexte :</span> {project.context}
                      </p>
                      <p>
                        <span className="font-mono text-primary">solution :</span> {project.solution}
                      </p>
                    </div>

                    <div className="flex flex-wrap gap-1.5 mt-4">
                      {project.techs.map((tech) => (
                        <span
                          key={tech}
                          className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-muted/40 border border-border text-foreground/70"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="border-t border-border/40 mt-4 pt-3 flex flex-wrap gap-x-4 gap-y-1">
                      {project.results.map((result) => (
                        <span key={result} className="text-[11px] font-mono text-primary">
                          ▸ {result}
                        </span>
                      ))}
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <PageCTA title="Votre projet sera le prochain ?" desc="Entreprise, TPE, association ou particulier: Klyon s'adapte au contexte et au niveau d'accompagnement attendu." />
      </PageLayout>
    </>
  );
};

export default Realisations;
