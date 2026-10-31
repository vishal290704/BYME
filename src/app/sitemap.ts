import { MetadataRoute } from "next";
import { portfolio } from "@/data/portfolio";
export default function sitemap(): MetadataRoute.Sitemap { const base = "https://vishalsrivastava.dev"; return ["/","/about","/projects","/experience","/contact",...portfolio.projects.map((project) => `/projects/${project.slug}`)].map((path) => ({ url: `${base}${path}`, lastModified: new Date() })); }
