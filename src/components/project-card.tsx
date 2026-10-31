import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Project } from "@/types";
import { ProjectArt } from "./project-art";
export function ProjectCard({
  project,
  tile = false,
}: {
  project: Project;
  tile?: boolean;
}) {
  return (
    <article className={`project-card ${tile ? "project-tile" : ""}`}>
      <Link className="project-card-link" href={`/projects/${project.slug}`}>
        <ProjectArt src={project.image} title={project.title} />
        <div className="tile-meta">
          <span className="project-card-number">{project.category}</span>
          <span className="project-card-status">{project.status}</span>
        </div>
        <div className="project-card-heading">
          <strong>{project.title}</strong>
          <span className="project-card-arrow">
            <ArrowUpRight size={17} />
          </span>
        </div>
        <p className="project-card-description">{project.description}</p>
        <div className="tags project-card-tags">
          {project.technologies.slice(0, 3).map((technology) => (
            <span className="tag" key={technology}>
              {technology}
            </span>
          ))}
        </div>
      </Link>
    </article>
  );
}
