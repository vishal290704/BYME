import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { portfolio } from "@/data/portfolio";
export function Footer() {
  return (
    <footer className="site-footer">
      <div className="shell">
        <div className="footer-top">
          <div className="footer-intro">
            <div className="eyebrow">Let&apos;s build something useful</div>
            <h2>
              Say hello<span>.</span>
            </h2>
            <a className="footer-email" href={`mailto:${portfolio.profile.email}`}>
              {portfolio.profile.email} <ArrowUpRight size={14} />
            </a>
          </div>
          <div className="footer-navigation">
            <div>
              <div className="footer-label">Explore</div>
              <nav className="footer-links" aria-label="Footer navigation">
              {portfolio.navigation.map((x) => (
                <Link href={x.href} key={x.href}>
                  {x.label}
                </Link>
              ))}
              </nav>
            </div>
            <div>
              <div className="footer-label">Elsewhere</div>
              <div className="footer-links">
                {portfolio.socials.map((social) => (
                  <a href={social.href} target="_blank" rel="noreferrer" key={social.label}>
                    {social.label}
                  </a>
                ))}
                <a href={portfolio.profile.resume} download>Resume</a>
                <a href="#top">Back to top ↑</a>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <span>
            © {new Date().getFullYear()} {portfolio.profile.name}
          </span>
          <span>{portfolio.profile.positioning}</span>
          <span>Designed &amp; developed with curiosity.</span>
        </div>
      </div>
    </footer>
  );
}
