"use client";
import { FormEvent, useState } from "react";
import { ArrowUpRight, Copy, Check, Phone } from "lucide-react";
import { portfolio } from "@/data/portfolio";
export default function ContactPage() {
  const [copied, setCopied] = useState(false);
  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!portfolio.profile.email) return;
    const data = new FormData(event.currentTarget);
    const subject = encodeURIComponent(
      String(data.get("subject") || "Portfolio enquiry"),
    );
    const body = encodeURIComponent(
      `Hi Vishal,\\n\\n${String(data.get("message") || "")}\\n\\nFrom: ${String(data.get("name") || "")} (${String(data.get("email") || "")})`,
    );
    window.location.href = `mailto:${portfolio.profile.email}?subject=${subject}&body=${body}`;
  }
  async function copyEmail() {
    if (!portfolio.profile.email) return;
    await navigator.clipboard.writeText(portfolio.profile.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 1800);
  }
  return (
    <main>
      <section className="page-hero">
        <div className="shell">
          <div className="eyebrow">09 / Contact</div>
          <h1>Let&apos;s connect.</h1>
          <p>
            I&apos;m always interested in discussing software, AI, technology,
            and meaningful product ideas.
          </p>
        </div>
      </section>
      <section className="section">
        <div className="shell contact-grid">
          <div>
            <div className="eyebrow">Send a note</div>
            <form className="contact-form" onSubmit={submit}>
              <input
                className="field"
                name="name"
                placeholder="Your name"
                required
              />
              <input
                className="field"
                type="email"
                name="email"
                placeholder="Email address"
                required
              />
              <input
                className="field"
                name="subject"
                placeholder="Subject"
                required
              />
              <textarea
                className="field"
                name="message"
                placeholder="Tell me a little about it..."
                required
              />
              <button
                className="button"
                type="submit"
                disabled={!portfolio.profile.email}
              >
                Open email draft <ArrowUpRight size={15} />
              </button>
            </form>
          </div>
          <div className="contact-side">
            <div className="eyebrow">Find me here</div>
            {portfolio.profile.email ? (
              <>
                <a href={`mailto:${portfolio.profile.email}`}>
                  {portfolio.profile.email}{" "}
                  <ArrowUpRight size={15} style={{ float: "right" }} />
                </a>
                <button
                  onClick={copyEmail}
                  className="field"
                  style={{ textAlign: "left", cursor: "pointer" }}
                >
                  {copied ? (
                    <>
                      <Check size={14} style={{ verticalAlign: "middle" }} />{" "}
                      Copied
                    </>
                  ) : (
                    <>
                      <Copy size={14} style={{ verticalAlign: "middle" }} />{" "}
                      Copy email
                    </>
                  )}
                </button>
              </>
            ) : (
              <p>Email will be added soon.</p>
            )}
            <a href={`tel:${portfolio.profile.phone}`}>
              <Phone size={15} style={{ verticalAlign: "middle" }} />{" "}
              {portfolio.profile.phone}
              <ArrowUpRight size={15} style={{ float: "right" }} />
            </a>
            {portfolio.socials.map((social) => (
              <a
                href={social.href}
                target="_blank"
                rel="noreferrer"
                key={social.label}
              >
                {social.label}{" "}
                <ArrowUpRight size={15} style={{ float: "right" }} />
              </a>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
