import { Navigate, useParams } from "react-router-dom";
import PageLayout from "@/components/PageLayout";
import Seo from "@/components/Seo";
import { PageCTA, Section } from "@/components/PageBlocks";
import { projects } from "@/data/projects";

const ProjectDetail = () => {
  const { slug } = useParams();
  const project = projects.find((entry) => entry.slug === slug);

  if (!project) {
    return <Navigate to="/realisations" replace />;
  }

  return (
    <>
      <Seo
        title={`${project.title} — Klyon`}
        description={project.teaser}
        path={`/realisations/${project.slug}`}
      />
      <PageLayout
        eyebrow={`// PROJET · ${project.cat.toUpperCase()}`}
        title={<>{project.title}</>}
        subtitle={project.teaser}
      >
        <Section eyebrow="// contexte" title={<>Le besoin <span className="text-gradient-primary">de départ</span></>}>
          <div className="glass-strong rounded-3xl border border-border/40 p-6 md:p-8 text-muted-foreground leading-relaxed">
            {project.context}
          </div>
        </Section>

        <Section eyebrow="// réponse" title={<>La solution <span className="text-gradient-primary">mise en place</span></>}>
          <div className="glass-strong rounded-3xl border border-border/40 p-6 md:p-8 text-muted-foreground leading-relaxed">
            {project.solution}
          </div>
        </Section>

        <Section eyebrow="// stack" title={<>Technologies <span className="text-gradient-primary">mobilisées</span></>}>
          <div className="flex flex-wrap gap-2">
            {project.techs.map((tech) => (
              <span key={tech} className="text-xs font-mono px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-foreground/85">
                {tech}
              </span>
            ))}
          </div>
        </Section>

        <Section eyebrow="// résultats" title={<>Résultats <span className="text-gradient-primary">observés</span></>}>
          <div className="grid md:grid-cols-3 gap-4">
            {project.results.map((result) => (
              <div key={result} className="glass-strong rounded-2xl border border-primary/20 p-5 text-sm font-mono text-primary">
                ▸ {result}
              </div>
            ))}
          </div>
        </Section>

        <PageCTA title="Un projet comparable à cadrer ?" desc="Le plus simple est de partir du besoin, puis de valider le périmètre, la stack et le niveau d'accompagnement adapté." />
      </PageLayout>
    </>
  );
};

export default ProjectDetail;
