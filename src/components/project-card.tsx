import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Project } from "@/types";
import { ProjectArt } from "./project-art";
export function ProjectCard({ project, tile = false }: { project: Project; tile?: boolean }) { return <article className={tile ? "project-tile" : ""}><Link href={`/projects/${project.slug}`}><ProjectArt src={project.image} title={project.title}/><div className="tile-meta"><strong>{project.title}</strong><span>{project.status} <ArrowUpRight size={13} style={{display:"inline", verticalAlign:"middle"}}/></span></div></Link></article>; }
