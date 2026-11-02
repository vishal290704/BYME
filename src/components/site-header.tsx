"use client";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { portfolio } from "@/data/portfolio";

export function SiteHeader() {
  const path = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <header className={`site-header ${scrolled ? "scrolled" : ""}`}>
      <div className="shell nav">
        <Link href="/" className="brand" onClick={() => setOpen(false)}>
          <span className="brand-mark">{portfolio.profile.monogram}</span>
          <span>{portfolio.profile.name}</span>
        </Link>
        <nav
          className={`nav-links ${open ? "open" : ""}`}
          aria-label="Primary navigation"
        >
          {portfolio.navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={path === item.href ? "active" : ""}
              onClick={() => setOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="nav-actions">
          <a className="resume-link" href={portfolio.profile.resume} download>
            Resume ↗
          </a>
          <button
            className="menu-button"
            aria-label="Toggle menu"
            onClick={() => setOpen(!open)}
          >
            {open ? <X size={17} /> : <Menu size={17} />}
          </button>
        </div>
      </div>
    </header>
  );
}
