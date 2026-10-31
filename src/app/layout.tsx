import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { SiteHeader } from "@/components/site-header";
import { Footer } from "@/components/footer";
import { portfolio } from "@/data/portfolio";
export const metadata: Metadata = { title: { default: `${portfolio.profile.name} — ${portfolio.profile.role}`, template: `%s — ${portfolio.profile.name}` }, description: portfolio.profile.supportingIntro, metadataBase: new URL("https://vishalsrivastava.dev"), openGraph: { title: portfolio.profile.name, description: portfolio.profile.supportingIntro, type: "website" }, icons: { icon: "/favicon.svg" } };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="en" suppressHydrationWarning><body id="top"><ThemeProvider><SiteHeader/>{children}<Footer/></ThemeProvider></body></html>; }
