import { Experience, Project } from "@/types";

export const portfolio = {
  profile: {
    name: "Vishal Srivastava",
    monogram: "VS",
    role: "Full-Stack Developer · AI Product Builder",
    positioning:
      "Full-Stack Developer | AI Product Builder | Generative AI Engineer",
    intro:
      "I build digital products that turn ambitious ideas into useful, thoughtful experiences.",
    supportingIntro:
      "Computer Science Engineering student exploring the space between reliable systems, expressive interfaces, and intelligent software.",
    college: "Ajay Kumar Garg Engineering College",
    degree: "B.Tech in Computer Science and Engineering",
    graduation: "June 2027",
    image: "/images/profile-placeholder.svg",
    email: "",
    resume: "/resume.pdf",
    location: "Ghaziabad, Uttar Pradesh · India",
  },
  socials: [
    { label: "GitHub", href: "https://github.com/vishal290704/", short: "GH" },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/vishal290704/",
      short: "LI",
    },
  ],
  navigation: [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Projects", href: "/projects" },
    { label: "Experience", href: "/experience" },
    { label: "Contact", href: "/contact" },
  ],
  interests: [
    "Full-Stack Development",
    "Backend Engineering",
    "Generative AI & LLM Applications",
    "AI Agents & Agentic AI",
    "System Design",
    "Product Development",
  ],
  skills: [
    {
      label: "Worked with",
      title: "Frontend craft",
      description: "Interfaces that feel considered, responsive, and alive.",
      items: [
        "HTML",
        "CSS",
        "JavaScript",
        "React.js",
        "Next.js",
        "Tailwind CSS",
        "Shadcn UI",
        "Redux",
        "Framer Motion",
        "Vite",
      ],
    },
    {
      label: "Worked with",
      title: "Backend systems",
      description: "The pragmatic layers that make products dependable.",
      items: [
        "Node.js",
        "Express.js",
        "REST APIs",
        "MongoDB",
        "Mongoose",
        "PostgreSQL",
        "Prisma",
        "Redis",
        "Firebase",
      ],
    },
    {
      label: "Building with",
      title: "AI & intelligence",
      description: "Exploring how models become useful product primitives.",
      items: [
        "OpenAI API",
        "Gemini API",
        "Claude API",
        "RAG",
        "AI Agents",
        "LangChain",
        "LangGraph",
        "MCP",
        "Tool Calling",
        "Vector Databases",
      ],
    },
    {
      label: "Worked with",
      title: "Tools & languages",
      description: "A broad toolkit for moving from idea to shipped work.",
      items: [
        "Java",
        "Python",
        "C",
        "SQL",
        "Git",
        "GitHub",
        "Docker",
        "Linux",
        "Postman",
        "MLflow",
        "DagsHub",
      ],
    },
  ],
  currentlyLearning: [
    "Spring Boot",
    "Advanced Backend Engineering",
    "System Design",
    "Distributed Systems",
    "Advanced AI Agent Architecture",
  ],
  education: {
    institution: "Ajay Kumar Garg Engineering College",
    detail: "B.Tech · Computer Science and Engineering",
    location: "Ghaziabad, Uttar Pradesh",
    period: "2023 — 2027",
    status: "Expected graduation · June 2027",
  },
  achievements: [
    {
      value: "Top 150",
      label: "Executive 4.0 Hackathon · DTU",
      detail: "Among 1,000+ participating teams",
    },
    {
      value: "200+",
      label: "DSA problems solved",
      detail: "Across structured practice and contests",
    },
    {
      value: "Java",
      label: "DSA certification",
      detail: "Completed through Udemy",
    },
  ],
  experience: [
    {
      role: "Generative AI Engineer Intern",
      company: "Caudal AI",
      parentCompany: "AirDawg Labs",
      duration: "August 2026 — October 2026",
      summary:
        "A completed internship contributing to AI engineering workflows and task-based development.",
      highlights: [
        "Worked on Sentinel.",
        "Contributed to Terminal 2 and Terminal 3 bench workflows.",
        "Completed and submitted multiple tasks, with a number accepted.",
        "Gained practical exposure to AI engineering workflows.",
      ],
      technologies: [
        "Generative AI",
        "AI engineering workflows",
        "Task-based development",
      ],
    },
  ] satisfies Experience[],
  projects: [
    {
      slug: "margai",
      title: "MargAI",
      subtitle: "AI Career Coach",
      category: "AI Product · Full-Stack",
      filter: "AI / GenAI",
      status: "Completed",
      featured: true,
      description:
        "An AI-powered career development platform for better preparation and professional presentation.",
      longDescription:
        "MargAI brings resume building, cover letters, interview preparation, quizzes, and career trends into one focused career companion.",
      technologies: [
        "Next.js",
        "Clerk",
        "Shadcn UI",
        "Tailwind CSS",
        "Prisma",
        "PostgreSQL",
        "Gemini API",
      ],
      image: "/images/projects/margai.svg",
      githubUrl: "",
      liveUrl: "",
      problem:
        "Career preparation often lives across disconnected tools, making it difficult to keep momentum and context.",
      features: [
        "AI Resume Builder",
        "AI Cover Letter Generator",
        "Interview Preparation Manager",
        "Interactive Quiz System",
        "Career Trends",
      ],
      solution:
        "A single, structured workspace that pairs familiar career workflows with Gemini-powered suggestions.",
    },
    {
      slug: "sahay-ai",
      title: "Sahay-AI",
      subtitle: "AI Customer Support Platform",
      category: "Generative AI · Full-Stack",
      filter: "AI / GenAI",
      status: "Completed",
      featured: true,
      description:
        "An intelligent support platform designed to make customer conversations more helpful and human.",
      longDescription:
        "Sahay-AI explores how an AI assistant can sit alongside support teams, surfacing context and making responses easier to shape.",
      technologies: [
        "Next.js",
        "Tailwind CSS",
        "Redux",
        "Framer Motion",
        "MongoDB",
        "Gemini API",
        "Scalekit",
      ],
      image: "/images/projects/sahay-ai.svg",
      githubUrl: "",
      liveUrl: "",
      problem:
        "Support teams need speed without sacrificing the nuance and empathy of a considered response.",
      features: [
        "Conversation workspace",
        "AI response visualization",
        "Customer context panel",
        "Support-focused interaction design",
      ],
      solution:
        "A calm, intelligence-forward workspace that keeps the human agent in control.",
    },
    {
      slug: "pratham-ai",
      title: "Pratham AI",
      subtitle: "Hospital Management System",
      category: "Full-Stack · AI Integration",
      filter: "Full-Stack",
      status: "Completed",
      description:
        "A hospital management system designed to streamline information and administrative workflows.",
      longDescription:
        "Pratham AI brings patient information, appointments, and operational signals into one clear management surface.",
      technologies: [
        "Next.js",
        "React.js",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Redux",
      ],
      image: "/images/projects/pratham-ai.svg",
      githubUrl: "",
      liveUrl: "",
      features: [
        "Patient information workspace",
        "Appointment management",
        "Operational statistics",
        "Administrative dashboard",
      ],
    },
    {
      slug: "dynamic-english-school",
      title: "Dynamic English School",
      subtitle: "School ERP",
      category: "Full-Stack · ERP",
      filter: "ERP / Platforms",
      status: "In Development",
      description:
        "A school website and ERP platform bringing student, academic, and administrative workflows together.",
      longDescription:
        "The platform is designed around role-based access and the everyday operational needs of a school supporting approximately 500 students.",
      technologies: [
        "Next.js App Router",
        "React.js",
        "Tailwind CSS",
        "Shadcn UI",
        "MongoDB",
        "Node.js",
      ],
      image: "/images/projects/dynamic-school.svg",
      githubUrl: "",
      liveUrl: "",
      problem:
        "School administration needs a shared source of truth across academic and operational workflows.",
      features: [
        "Role-based access control",
        "Student and subject management",
        "Examination and marks management",
        "Printable A4 marksheets",
        "Teacher and student dashboards",
      ],
      solution:
        "A modular ERP foundation with distinct experiences for SUPER_ADMIN, ADMIN, TEACHER, and STUDENT roles.",
    },
    {
      slug: "neurosage-connect",
      title: "NeuroSage Connect",
      subtitle: "AI-Powered Mental Awareness Platform",
      category: "AI Platform · Full-Stack",
      filter: "AI / GenAI",
      status: "Completed",
      description:
        "A calm, approachable platform with registration and administrative verification workflows.",
      longDescription:
        "NeuroSage Connect focuses on a thoughtful registration journey, reliable verification, and clear administration without making clinical claims.",
      technologies: ["Next.js", "MongoDB", "Brevo API", "Tailwind CSS"],
      image: "/images/projects/neurosage.svg",
      githubUrl: "",
      liveUrl: "",
      features: [
        "User registration",
        "Conditional student information",
        "UPI QR payment workflow",
        "Admin verification",
        "Email notifications",
        "Duplicate prevention",
      ],
    },
  ] satisfies Project[],
};

export type Portfolio = typeof portfolio;
