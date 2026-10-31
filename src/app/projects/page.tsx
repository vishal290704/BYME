"use client";
import { useState } from "react";
import { portfolio } from "@/data/portfolio";
import { ProjectCard } from "@/components/project-card";
import { Reveal } from "@/components/reveal";
const filters = ["All", "Full-Stack", "AI / GenAI", "Backend", "ERP / Platforms"];
export default function ProjectsPage() { const [filter, setFilter] = useState("All"); const projects = portfolio.projects.filter((project) => filter === "All" || project.filter === filter || (filter === "Full-Stack" && project.category.includes("Full-Stack"))); return <main><section className="page-hero"><div className="shell"><div className="eyebrow">08 / Selected work</div><h1>Things I&apos;ve<br/><span style={{color:"var(--accent)"}}>brought to life.</span></h1><p>A selection of products, experiments, and engineering projects built with curiosity and purpose.</p></div></section><section className="section"><div className="shell"><div className="filters" role="tablist">{filters.map((item) => <button className={`filter ${filter === item ? "active" : ""}`} onClick={() => setFilter(item)} key={item}>{item}</button>)}</div><div className="project-grid">{projects.map((project, index) => <Reveal className="project-tile" key={project.slug} delay={index*.04}><ProjectCard project={project} tile/></Reveal>)}</div></div></section></main>; }
