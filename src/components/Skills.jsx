"use client";

import {
  SiTypescript,
  SiJavascript,
  SiNodedotjs,
  SiReact,
  SiNextdotjs,
  SiExpress,
  SiMongodb,
  SiPostgresql,
  SiRedis,
  SiDocker,
  SiVercel,
  SiTailwindcss,
  SiGit,
  SiHtml5
} from "react-icons/si";

import {
  FaCode,
  FaDatabase,
  FaServer,
  FaTools,
  FaMicrochip,
  FaShieldAlt,
  FaAws
} from "react-icons/fa";

export default function Skills() {
  const coreLanguages = [
    { name: "JavaScript (ES6+)", icon: SiJavascript, color: "text-yellow-400" },
    { name: "Node.js", icon: SiNodedotjs, color: "text-emerald-500" },
    { name: "TypeScript", icon: SiTypescript, color: "text-blue-500" },
    { name: "SQL", icon: FaDatabase, color: "text-sky-400" },
    { name: "HTML5 & CSS3", icon: SiHtml5, color: "text-orange-500" }
  ];

  const skillCategories = [
    {
      title: "Frontend Architecture & UI",
      subtitle: "Component-driven, accessible, responsive user interfaces",
      icon: FaCode,
      skills: [
        { name: "React 19", icon: SiReact, color: "text-cyan-400" },
        { name: "Next.js (App Router)", icon: SiNextdotjs, color: "text-foreground" },
        { name: "Tailwind CSS 4", icon: SiTailwindcss, color: "text-teal-400" },
        { name: "TypeScript", icon: SiTypescript, color: "text-blue-400" },
        { name: "State Management", icon: FaCode, color: "text-purple-400" }
      ]
    },
    {
      title: "Backend & Database Infrastructure",
      subtitle: "High-performance APIs, real-time channels & database schemas",
      icon: FaServer,
      skills: [
        { name: "Node.js", icon: SiNodedotjs, color: "text-emerald-400" },
        { name: "Express.js", icon: SiExpress, color: "text-foreground" },
        { name: "MongoDB Atlas", icon: SiMongodb, color: "text-emerald-500" },
        { name: "PostgreSQL", icon: SiPostgresql, color: "text-blue-400" },
        { name: "Redis Caching", icon: SiRedis, color: "text-red-500" }
      ]
    },
    {
      title: "DevOps, Cloud & Tooling",
      subtitle: "Automated build pipelines, hosting & version control",
      icon: FaTools,
      skills: [
        { name: "Vercel Hosting", icon: SiVercel, color: "text-foreground" },
        { name: "AWS Cloud", icon: FaAws, color: "text-amber-500" },
        { name: "Docker", icon: SiDocker, color: "text-sky-500" },
        { name: "Git & GitHub", icon: SiGit, color: "text-orange-500" },
        { name: "CI/CD Workflows", icon: FaTools, color: "text-emerald-400" }
      ]
    }
  ];

  return (
    <section
      id="skills"
      className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto relative overflow-hidden"
    >
      {/* Decorative Orbs */}
      <div className="absolute top-1/4 left-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-10 right-0 w-80 h-80 bg-accent/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="relative z-10 space-y-12">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <p className="section-header">#skills</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-foreground tracking-tight">
            Technical Stack & Engineering Toolbox
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
            Battle-tested frameworks, database systems, and modern tools I leverage daily to engineer fast, resilient products.
          </p>
        </div>

        {/* Highlight Banner: Core Languages & Runtimes */}
        <div className="p-6 sm:p-8 rounded-3xl bg-card/90 backdrop-blur-xl border border-border/80 hover:border-primary/40 transition-all duration-300 shadow-xl shadow-primary/5 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-border/60 pb-4">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold gradient-text">
                Core Languages & Runtimes
              </h3>
              <p className="text-xs sm:text-sm text-muted-foreground mt-1">
                The primary programming languages powering my full-stack applications.
              </p>
            </div>
            <span className="self-start sm:self-auto px-3.5 py-1 text-xs font-mono font-semibold bg-primary/10 text-primary border border-primary/20 rounded-full">
              Primary Stack
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {coreLanguages.map((lang, idx) => {
              const Icon = lang.icon;
              return (
                <div
                  key={idx}
                  className="p-4 rounded-2xl bg-muted/40 border border-border/60 hover:border-primary/50 hover:bg-muted/80 transition-all duration-300 group flex flex-col items-center text-center gap-3 cursor-pointer hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="w-12 h-12 rounded-xl bg-card border border-border flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Icon className={`w-6 h-6 ${lang.color} transition-colors`} />
                  </div>
                  <span className="text-sm font-semibold text-foreground group-hover:gradient-text transition-all">
                    {lang.name}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Technical Categories Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {skillCategories.map((cat, idx) => {
            const CatIcon = cat.icon;
            return (
              <div
                key={idx}
                className="p-6 rounded-3xl bg-card/90 backdrop-blur-xl border border-border/80 hover:border-primary/50 transition-all duration-500 group flex flex-col justify-between hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-1.5"
              >
                <div className="space-y-4">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <CatIcon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-foreground group-hover:gradient-text transition-all">
                      {cat.title}
                    </h3>
                    <p className="text-xs text-muted-foreground mt-1 leading-relaxed">
                      {cat.subtitle}
                    </p>
                  </div>
                </div>

                <div className="pt-6 flex flex-wrap gap-2.5">
                  {cat.skills.map((skill, i) => {
                    const SkillIcon = skill.icon;
                    return (
                      <span
                        key={i}
                        className="px-3 py-1.5 text-xs font-medium bg-muted/80 text-foreground border border-border/70 rounded-xl flex items-center gap-2 hover:border-primary/40 hover:bg-muted transition-colors"
                      >
                        <SkillIcon className={`w-3.5 h-3.5 ${skill.color}`} />
                        {skill.name}
                      </span>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>

        {/* Creative IT Support & Systems Capability Banner */}
        <div className="p-6 sm:p-8 rounded-3xl bg-linear-to-br from-card via-card to-primary/5 border border-primary/30 flex flex-col md:flex-row items-center justify-between gap-6 hover:border-primary/60 transition-all duration-300">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-accent/10 border border-accent/20 flex items-center justify-center shrink-0">
              <FaMicrochip className="w-6 h-6 text-accent" />
            </div>
            <div>
              <h4 className="text-lg sm:text-xl font-bold text-foreground flex items-center gap-2">
                IT Support & Hardware Diagnostics
                <span className="px-2.5 py-0.5 text-xs bg-emerald-500/10 text-emerald-500 border border-emerald-500/20 rounded-full font-mono">
                  Active Skillset
                </span>
              </h4>
              <p className="text-xs sm:text-sm text-muted-foreground mt-1 leading-relaxed">
                Expertise in system troubleshooting, PC building, network configuration, software installation, and IT infrastructure maintenance.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <span className="px-4 py-2 text-xs font-mono font-bold bg-muted border border-border rounded-xl flex items-center gap-2 text-foreground">
              <FaShieldAlt className="w-3.5 h-3.5 text-primary" />
              Hardware + Software Certified
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
