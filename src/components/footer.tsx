import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { portfolio } from "@/data/portfolio";
export function Footer() {
  return (
    <footer className="site-footer">
      <div className="shell">
        <div className="footer-top">
          <div>
            <div className="eyebrow">05 / The signature</div>
            <h2>
              Crafted by
              <br />
              <span>{portfolio.profile.name.split(" ")[0]}.</span>
            </h2>
          </div>
          <div>
            <div className="footer-links">
              {portfolio.navigation.map((x) => (
                <Link href={x.href} key={x.href}>
                  {x.label}
                </Link>
              ))}
              <a href={portfolio.profile.resume} download>
                Resume
              </a>
              <a href="#top">Back to top ↑</a>
            </div>
            <p>Designed & Developed with curiosity and precision.</p>
          </div>
        </div>
        <div className="footer-bottom">
          <span>
            © {new Date().getFullYear()} {portfolio.profile.name}
          </span>
          <span>{portfolio.profile.positioning}</span>
          {portfolio.profile.email ? (
            <a href={`mailto:${portfolio.profile.email}`}>
              {portfolio.profile.email}{" "}
              <ArrowUpRight size={12} style={{ display: "inline" }} />
            </a>
          ) : (
            <span>Email coming soon</span>
          )}
        </div>
      </div>
    </footer>
  );
}
