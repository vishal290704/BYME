"use client";
import Link from "next/link";
import { Menu, Moon, Sun, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { portfolio } from "@/data/portfolio";

export function SiteHeader() {
  const path = usePathname();
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);
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
          <button
            className="icon-button"
            aria-label="Toggle theme"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            disabled={!mounted}
          >
            {mounted ? (
              theme === "dark" ? (
                <Sun size={16} />
              ) : (
                <Moon size={16} />
              )
            ) : (
              <span aria-hidden="true" style={{ width: 16, height: 16 }} />
            )}
          </button>
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
