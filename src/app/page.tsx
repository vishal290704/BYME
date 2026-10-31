import Link from "next/link";
import { ArrowUpRight, Github, Linkedin } from "lucide-react";
import { portfolio } from "@/data/portfolio";
import { Reveal } from "@/components/reveal";
import { ProjectArt } from "@/components/project-art";

export default function Home() {
  const featured = portfolio.projects.slice(0, 3);
  return (
    <main>
      <section className="hero">
        <div className="shell hero-grid">
          <Reveal className="hero-copy">
            <div className="eyebrow">
              FULL-STACK DEVELOPER / AI PRODUCT BUILDER
            </div>
            <p className="hero-greeting">Hello, I&apos;m</p>
            <h1>{portfolio.profile.name}</h1>
            <h2>Building useful software with code and AI.</h2>
            <p className="hero-lead">
              I&apos;m a Computer Science Engineering student passionate about
              full-stack development, intelligent applications, and building
              digital products that solve real-world problems.
            </p>
            <div className="hero-buttons">
              <Link className="button" href="/projects">
                Explore Projects <ArrowUpRight size={15} />
              </Link>
              <Link className="button outline" href="/contact">
                Get In Touch <ArrowUpRight size={15} />
              </Link>
            </div>
            <div className="social-row">
              {portfolio.socials.map((social) => (
                <a
                  className="social-pill"
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  key={social.label}
                >
                  {social.label === "GitHub" ? (
                    <Github size={15} />
                  ) : (
                    <Linkedin size={15} />
                  )}{" "}
                  {social.label}
                </a>
              ))}
            </div>
          </Reveal>
          <Reveal className="portrait-stage" delay={0.15}>
            <img
              className="portrait"
              src={portfolio.profile.image}
              alt={`${portfolio.profile.name} portrait placeholder`}
            />
            <span className="portrait-caption">PORTRAIT / PLACEHOLDER</span>
          </Reveal>
        </div>
        <div className="shell hero-meta">
          <span>Based in India</span>
          <span>B.Tech Computer Science Engineering</span>
          <span>Interested in AI &amp; Backend Engineering</span>
        </div>
      </section>
      <section className="section selected-work">
        <div className="shell">
          <div className="section-head">
            <div>
              <div className="eyebrow">01 / Selected projects</div>
              <h2>Work I&apos;ve built.</h2>
            </div>
            <Link className="text-link" href="/projects">
              View All Projects <ArrowUpRight size={15} />
            </Link>
          </div>
          <div className="home-project-grid">
            {featured.map((project, index) => (
              <Reveal
                className="home-project"
                key={project.slug}
                delay={index * 0.06}
              >
                <Link href={`/projects/${project.slug}`}>
                  <ProjectArt src={project.image} title={project.title} />
                  <div className="project-meta">
                    <span className="mono">0{index + 1}</span>
                    <span>{project.status}</span>
                  </div>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="tags">
                    {project.technologies.slice(0, 4).map((tag) => (
                      <span className="tag" key={tag}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <section className="section about-strip">
        <div className="shell about-preview">
          <div>
            <div className="eyebrow">02 / About</div>
            <h2>A little about what I build.</h2>
          </div>
          <div>
            <p>
              I&apos;m interested in building products that combine thoughtful
              user experiences, reliable engineering, and practical AI
              applications.
            </p>
            <Link className="text-link" href="/about">
              More about me <ArrowUpRight size={15} />
            </Link>
          </div>
        </div>
      </section>
      <section className="contact-invite">
        <div className="shell">
          <div className="eyebrow">03 / Contact</div>
          <h2>
            Have an interesting idea?
            <br />
            Let&apos;s talk.
          </h2>
          <Link className="text-link" href="/contact">
            Start a conversation <ArrowUpRight size={15} />
          </Link>
        </div>
      </section>
    </main>
  );
}
