"use client";

import {
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaCloudUploadAlt,
  FaBolt,
  FaBrain,
  FaCheckCircle,
  FaCode,
  FaTerminal
} from "react-icons/fa";

export default function BentoGrid() {
  const items = [
    {
      id: 1,
      title: "React & Modern Frontend Architecture",
      subtitle: "Building ultra-fast, component-driven user interfaces",
      description:
        "Specialized in React 19, Next.js App Router, Tailwind CSS 4, and Framer Motion for state-of-the-art UI performance.",
      icon: FaReact,
      className: "md:col-span-2 lg:col-span-2",
      tags: ["React 19", "Next.js", "TypeScript", "Tailwind CSS", "State Management"],
      highlight: "100/100 Lighthouse Performance"
    },
    {
      id: 2,
      title: "Backend & API Engineering",
      subtitle: "Robust Node.js & Express systems",
      description:
        "Designing scalable REST & GraphQL APIs, WebSockets for real-time data, and secure JWT authentication.",
      icon: FaNodeJs,
      className: "md:col-span-1 lg:col-span-1",
      tags: ["Node.js", "Express", "WebSockets", "JWT Auth"]
    },
    {
      id: 3,
      title: "Database Architecture",
      subtitle: "SQL & NoSQL optimization",
      description:
        "Designing relational & document database schemas with MongoDB Atlas, PostgreSQL, TimescaleDB, and Redis caching.",
      icon: FaDatabase,
      className: "md:col-span-1 lg:col-span-1",
      tags: ["MongoDB", "PostgreSQL", "Prisma", "Redis"]
    },
    {
      id: 4,
      title: "DevOps & Cloud Deployments",
      subtitle: "Zero-downtime CI/CD pipelines",
      description:
        "Deploying and managing production environments on Vercel, Render, AWS S3, Docker, and GitHub Actions.",
      icon: FaCloudUploadAlt,
      className: "md:col-span-1 lg:col-span-1",
      tags: ["Vercel", "AWS", "Docker", "CI/CD"]
    },
    {
      id: 5,
      title: "AI Integration & RAG Systems",
      subtitle: "Intelligent LLM workflows",
      description:
        "Integrating OpenAI models, Vector databases (Pinecone), and semantic search RAG pipelines for AI assistants.",
      icon: FaBrain,
      className: "md:col-span-1 lg:col-span-1",
      tags: ["OpenAI API", "Vector DB", "RAG Pipeline", "LangChain"]
    },
    {
      id: 6,
      title: "Core Web Vitals & Optimization",
      subtitle: "Sub-second page speeds",
      description:
        "Mastery over web performance, bundle size reduction, SEO structured schemas, accessibility (a11y), and responsive design.",
      icon: FaBolt,
      className: "md:col-span-2 lg:col-span-2",
      tags: ["SEO Best Practices", "Sub-100ms Latency", "Core Web Vitals", "Accessibility"],
      highlight: "< 120ms API Response Time"
    }
  ];

  return (
    <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative overflow-hidden">
      {/* Subtle Background Glows */}
      <div className="absolute top-10 left-1/3 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl pointer-events-none"></div>

      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-10 space-y-3">
        <p className="section-header">#expertise</p>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-foreground tracking-tight">
          Engineering Capabilities & Core Stack
        </h2>
        <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
          Crafting end-to-end digital experiences with modern tools, clean code standards, and production-ready performance.
        </p>
      </div>

      {/* Bento Grid Container */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {items.map((item) => {
          const Icon = item.icon;
          return (
            <div
              key={item.id}
              className={`${item.className} p-7 rounded-3xl bg-card/90 backdrop-blur-xl border border-border/80 hover:border-primary/50 transition-all duration-500 group cursor-pointer hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-2 relative flex flex-col justify-between overflow-hidden`}
            >
              {/* Card Header & Icon */}
              <div className="space-y-4 z-10">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-2xl bg-linear-to-br from-primary/10 to-accent/10 border border-primary/20 flex items-center justify-center group-hover:scale-110 group-hover:from-primary/20 group-hover:to-accent/20 transition-all duration-300 shadow-sm">
                    <Icon className="w-6 h-6 text-primary group-hover:text-accent transition-colors" />
                  </div>

                  {item.highlight && (
                    <span className="px-3 py-1 text-xs font-mono font-semibold bg-primary/10 text-primary border border-primary/20 rounded-full">
                      {item.highlight}
                    </span>
                  )}
                </div>

                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-foreground group-hover:gradient-text transition-all">
                    {item.title}
                  </h3>
                  <p className="text-xs font-mono text-primary font-medium mt-1">
                    {item.subtitle}
                  </p>
                </div>

                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </div>

              {/* Skill Tags */}
              <div className="pt-6 flex flex-wrap gap-2 z-10">
                {item.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 text-xs font-medium bg-secondary/80 text-secondary-foreground border border-border/60 rounded-full group-hover:border-primary/30 transition-colors"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Decorative Subtle Gradient Glow on Card Bottom Right */}
              <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-linear-to-br from-primary/5 to-accent/5 rounded-full blur-xl group-hover:scale-150 transition-transform duration-700 pointer-events-none"></div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
