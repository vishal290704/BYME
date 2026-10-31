import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { portfolio } from "@/data/portfolio";
import { ProjectArt } from "@/components/project-art";
export function generateStaticParams() {
  return portfolio.projects.map((project) => ({ slug: project.slug }));
}
export default function ProjectDetail({
  params,
}: {
  params: { slug: string };
}) {
  const project = portfolio.projects.find((item) => item.slug === params.slug);
  if (!project) notFound();
  const related = portfolio.projects
    .filter((item) => item.slug !== project.slug)
    .slice(0, 2);
  return (
    <main>
      <section className="detail-hero">
        <div className="shell">
          <Link href="/projects" className="eyebrow">
            <ArrowLeft
              size={13}
              style={{ display: "inline", verticalAlign: "middle" }}
            />{" "}
            Back to projects
          </Link>
          <h1>{project.title}</h1>
          <div className="detail-meta">
            <span>{project.subtitle}</span>
            <span>{project.category}</span>
            <span style={{ color: "var(--lime)" }}>● {project.status}</span>
          </div>
          <p style={{ maxWidth: 650, fontSize: 19 }}>
            {project.longDescription}
          </p>
          <div className="hero-buttons">
            {project.githubUrl ? (
              <a
                className="button"
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub <ArrowUpRight size={15} />
              </a>
            ) : null}
            {project.liveUrl ? (
              <a
                className="button outline"
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                Live project <ArrowUpRight size={15} />
              </a>
            ) : null}
          </div>
          <div className="detail-image">
            <ProjectArt src={project.image} title={project.title} />
          </div>
        </div>
      </section>
      <section className="shell detail-content">
        <div>
          <div className="eyebrow">The brief</div>
          <h2>
            {project.problem
              ? "A clearer way forward."
              : "A product with intent."}
          </h2>
        </div>
        <div>
          <p>{project.problem || project.description}</p>
          {project.solution && (
            <>
              <h3>The approach</h3>
              <p>{project.solution}</p>
            </>
          )}
          <h3>Key features</h3>
          <ul>
            {project.features.map((feature) => (
              <li key={feature}>{feature}</li>
            ))}
          </ul>
          <h3>Technology</h3>
          <div className="tags">
            {project.technologies.map((technology) => (
              <span className="tag" key={technology}>
                {technology}
              </span>
            ))}
          </div>
        </div>
      </section>
      {project.gallery?.length ? (
        <section className="section">
          <div className="shell">
            <div className="section-head">
              <div>
                <div className="eyebrow">Project visual</div>
                <h2>Inside the experience.</h2>
              </div>
            </div>
            <div className="project-gallery">
              {project.gallery.map((image, index) => (
                <div className="project-gallery-item" key={image}>
                  <img
                    src={image}
                    alt={`${project.title} screenshot ${index + 1}`}
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      ) : null}
      <section className="section">
        <div className="shell">
          <div className="section-head">
            <div>
              <div className="eyebrow">More work</div>
              <h2>Keep exploring.</h2>
            </div>
          </div>
          <div className="related">
            {related.map((item) => (
              <Link href={`/projects/${item.slug}`} key={item.slug}>
                <ProjectArt src={item.image} title={item.title} />
                <div className="tile-meta">
                  <strong>{item.title}</strong>
                  <span>View ↗</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
