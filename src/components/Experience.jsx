"use client";

import { FaBriefcase, FaCalendarAlt, FaCheckCircle, FaMapMarkerAlt } from "react-icons/fa";

export default function Experience() {
  const experiences = [
    {
      role: "Lead Full Stack Engineer",
      company: "Primestacks & Independent Projects",
      location: "Remote / Contract",
      period: "2023 - Present",
      status: "Current Role",
      description:
        "Architecting production-ready web applications, telehealth solutions, and EdTech platforms. Spearheading full-stack engineering from UI design to cloud deployment.",
      achievements: [
        "Architected and deployed high-traffic web applications including RealDoktor, Artizansquare, PrepV8, and House of Ama.",
        "Optimized API query latency by 40% and improved Core Web Vitals to achieve 98+ Lighthouse performance scores.",
        "Engineered real-time data streaming, state management workflows, and responsive micro-interactions across client portals."
      ],
      skills: ["React 19", "Next.js", "Node.js", "MongoDB", "Tailwind CSS", "TypeScript", "Vercel"]
    },
    {
      role: "Senior Web Developer",
      company: "EdTech & Digital Solutions",
      location: "Remote",
      period: "2021 - 2023",
      status: "Completed",
      description:
        "Led the frontend and backend integration for online education marketplaces and real-time community tools.",
      achievements: [
        "Developed MyTeacherConnect platform connecting hundreds of educators with students globally.",
        "Integrated multi-currency payment checkout pathways with Stripe and automated billing triggers.",
        "Implemented end-to-end automated testing pipelines reducing production bugs by 30%."
      ],
      skills: ["React", "Express.js", "PostgreSQL", "REST APIs", "Redux", "AWS S3"]
    },
    {
      role: "Full Stack Engineer & UI Architect",
      company: "Creative Tech Agency",
      location: "Hybrid",
      period: "2019 - 2021",
      status: "Completed",
      description:
        "Designed and maintained modern e-commerce storefronts, business intelligence dashboards, and client web portals.",
      achievements: [
        "Built responsive UI design systems powering 10+ client web applications.",
        "Collaborated with cross-functional product teams to deliver complex client requests on tight deadlines.",
        "Refactored legacy codebases into modular React component libraries."
      ],
      skills: ["JavaScript (ES6+)", "React", "Node.js", "CSS3 / Tailwind", "Git / GitHub"]
    }
  ];

  return (
    <section id="experience" className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto relative overflow-hidden">
      {/* Background Orbs */}
      <div className="absolute top-1/3 right-10 w-80 h-80 bg-primary/5 rounded-full blur-3xl pointer-events-none"></div>

      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-10 space-y-3">
        <p className="section-header">#career-journey</p>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-foreground tracking-tight">
          Work Experience & Accomplishments
        </h2>
        <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
          A track record of building performant web applications, leading technical architecture, and delivering high-value solutions.
        </p>
      </div>

      {/* Timeline Container */}
      <div className="relative border-l-2 border-border/80 ml-4 sm:ml-8 md:ml-12 pl-6 sm:pl-10 space-y-12">
        {experiences.map((exp, idx) => (
          <div key={idx} className="relative group">
            {/* Timeline Node Icon */}
            <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 w-10 h-10 rounded-full bg-card border-2 border-primary group-hover:border-accent group-hover:scale-110 shadow-lg shadow-primary/20 flex items-center justify-center transition-all duration-300">
              <FaBriefcase className="w-4 h-4 text-primary group-hover:text-accent transition-colors" />
            </div>

            {/* Experience Card */}
            <div className="p-6 sm:p-8 rounded-3xl bg-card border border-border/80 hover:border-primary/50 transition-all duration-500 hover:shadow-xl hover:shadow-primary/5 space-y-4">
              
              {/* Header Info */}
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
                <div>
                  <div className="flex items-center gap-3 flex-wrap">
                    <h3 className="text-xl sm:text-2xl font-bold text-foreground group-hover:gradient-text transition-all">
                      {exp.role}
                    </h3>
                    {exp.status === "Current Role" && (
                      <span className="px-3 py-0.5 text-xs font-semibold bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 rounded-full flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                        {exp.status}
                      </span>
                    )}
                  </div>
                  <p className="gradient-text font-semibold text-base sm:text-lg mt-1">
                    {exp.company}
                  </p>
                </div>

                <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm text-muted-foreground font-mono">
                  <span className="px-3 py-1 bg-muted/80 border border-border rounded-full flex items-center gap-1.5">
                    <FaCalendarAlt className="w-3.5 h-3.5 text-primary" />
                    {exp.period}
                  </span>
                  <span className="px-3 py-1 bg-muted/80 border border-border rounded-full flex items-center gap-1.5">
                    <FaMapMarkerAlt className="w-3.5 h-3.5 text-accent" />
                    {exp.location}
                  </span>
                </div>
              </div>

              {/* Description */}
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                {exp.description}
              </p>

              {/* Key Achievements Bullet points */}
              <div className="space-y-2 pt-2">
                <h4 className="text-xs font-mono font-bold tracking-wider text-muted-foreground uppercase">Key Impact</h4>
                <ul className="space-y-2">
                  {exp.achievements.map((item, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-foreground/90 leading-relaxed">
                      <FaCheckCircle className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tech Stack Pills */}
              <div className="pt-3 flex flex-wrap gap-2">
                {exp.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 text-xs font-medium bg-secondary text-secondary-foreground border border-border rounded-full hover:border-primary/30 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>

            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
