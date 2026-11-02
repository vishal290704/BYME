import { portfolio } from "@/data/portfolio";
import { Reveal } from "@/components/reveal";
export const metadata = { title: "About" };
export default function About() {
  return (
    <main>
      <section className="page-hero">
        <div className="shell">
          <div className="eyebrow">03 / The person behind the products</div>
          <h1>
            A little more
            <br />
            <span style={{ color: "var(--accent)" }}>context.</span>
          </h1>
          <p>
            {portfolio.profile.intro} {portfolio.profile.supportingIntro}
          </p>
        </div>
      </section>
      <section className="section">
        <div className="shell about-grid">
          <Reveal className="about-copy">
            <div className="eyebrow">The throughline</div>
            <h3>Useful software should feel human.</h3>
            <p>
              I enjoy moving between the expansive and the exact: shaping a
              product idea, working through its data and systems, then returning
              to the interface to make the result feel clear.
            </p>
            <p>
              My current learning is rooted in backend engineering and system
              design, while generative AI keeps opening new questions about how
              software can become more responsive and capable.
            </p>
            <p>
              Born in {portfolio.profile.hometown}, I carry that sense of
              place with me while building for a wider digital world.
            </p>
            <div className="tags">
              {portfolio.interests.map((x) => (
                <span className="tag" key={x}>
                  {x}
                </span>
              ))}
            </div>
          </Reveal>
          <Reveal delay={0.12}>
            <div className="stat-grid">
              {portfolio.achievements.map((item) => (
                <div className="stat" key={item.label}>
                  <strong>{item.value}</strong>
                  <small>
                    {item.label}
                    <br />
                    {item.detail}
                  </small>
                  {item.href && (
                    <a
                      className="stat-link"
                      href={item.href}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <div className="marginal">View certificate</div>
                    </a>
                  )}
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>
      <section className="section">
        <div className="shell">
          <div className="section-head">
            <div>
              <div className="eyebrow">04 / Education</div>
              <h2>Grounded in fundamentals.</h2>
            </div>
          </div>
          <Reveal>
            <div className="timeline">
              <div className="timeline-item">
                <span className="timeline-date">
                  {portfolio.education.period}
                </span>
                <h2>{portfolio.education.institution}</h2>
                <h4>{portfolio.education.detail}</h4>
                <p>
                  {portfolio.education.location} · {portfolio.education.status}
                  <br />
                  {portfolio.education.result}
                </p>
              </div>
              {portfolio.academicHistory.map((school) => (
                <div className="timeline-item" key={school.level}>
                  <span className="timeline-date">{school.level}</span>
                  <h2>{school.institution}</h2>
                  <h4>{school.result}</h4>
                  <p>{school.location}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>
      <section className="section">
        <div className="shell">
          <div className="section-head">
            <div>
              <div className="eyebrow">05 / Technical range</div>
              <h2>Tools for the work in front of me.</h2>
            </div>
          </div>
          <div className="skill-list">
            {portfolio.skills.map((skill, i) => (
              <Reveal className="skill-row" key={skill.title} delay={i * 0.04}>
                <span className="eyebrow">{skill.label}</span>
                <h3>{skill.title}</h3>
                <div>
                  <p style={{ marginTop: 0 }}>{skill.description}</p>
                  <div className="skill-items">
                    {skill.items.map((item) => (
                      <span className="tag" key={item}>
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="shell">
          <div className="section-head">
            <div>
              <div className="eyebrow">06 / Current learning</div>
              <h2>Still becoming.</h2>
            </div>
          </div>
          <div className="tags">
            {portfolio.currentlyLearning.map((x) => (
              <span className="tag" key={x}>
                {x}
              </span>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
