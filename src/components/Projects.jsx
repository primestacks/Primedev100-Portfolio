"use client";

import { useState } from "react";
import { FaEye } from "react-icons/fa";

export default function Projects() {
  const allProjects = [
    {
      title: "E-Commerce Platform",
      description:
        "Full-featured platform with real-time inventory, payment processing, and admin dashboard.",
      tech: ["React", "Node.js", "MongoDB", "Stripe"],
      image: "/ecommerce-platform-dashboard.jpg",
      link: "#",
    },
    {
      title: "Analytics Dashboard",
      description:
        "Interactive dashboard with real-time data visualization and advanced filtering.",
      tech: ["Next.js", "TypeScript", "PostgreSQL", "Chart.js"],
      image: "/analytics-dashboard-charts.jpg",
      link: "#",
    },
    {
      title: "Social Media App",
      description:
        "Community platform with real-time messaging, notifications, and engagement features.",
      tech: ["React", "Firebase", "Tailwind", "WebSockets"],
      image: "/social-media-app-interface.jpg",
      link: "#",
    },
    {
      title: "Task Management App",
      description:
        "Cross-platform task manager with offline support and cloud sync.",
      tech: ["React Native", "Redux", "Firebase", "Express"],
      image: "/task-management-app.jpg",
      link: "#",
    },
    {
      title: "Real Estate Platform",
      description:
        "Property listing platform with advanced search, virtual tours, and booking system.",
      tech: ["Next.js", "Mapbox", "Supabase", "Stripe"],
      image: "/real-estate-property-listing.jpg",
      link: "#",
    },
    {
      title: "AI Chat Application",
      description:
        "Intelligent chatbot with context awareness and multi-language support.",
      tech: ["React", "OpenAI", "Node.js", "MongoDB"],
      image: "/ai-chat-application-interface.jpg",
      link: "#",
    },
  ];

  const [showAll, setShowAll] = useState(false);
  const displayedProjects = showAll ? allProjects : allProjects.slice(0, 4);

  return (
    <section
      id="projects"
      className="py-24 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto relative overflow-hidden"
    >
      {/* Decorative orbs */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl hidden sm:block"></div>
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-accent/5 rounded-full blur-3xl hidden md:block"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-linear-to-r from-primary/5 to-accent/5 rounded-full blur-3xl hidden lg:block"></div>

      <p className="section-header mb-12 text-center">#projects</p>

      <div className="grid md:grid-cols-2 gap-8 mb-10">
        {displayedProjects.map((project, idx) => (
          <div
            key={idx}
            className="group cursor-pointer rounded-3xl bg-linear-to-br from-card to-card/90 border border-border hover:border-primary/50 hover:bg-linear-to-br hover:from-primary/5 hover:to-accent/5 transition-all duration-500 overflow-hidden hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-2 hover:scale-[1.02] relative"
          >
            <div className="overflow-hidden h-56 bg-muted relative">
              <img
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-linear-to-t from-card/90 via-card/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              {/* Overlay button */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-primary/90 backdrop-blur-sm text-primary-foreground rounded-full font-semibold hover:bg-primary transition-all duration-300 flex items-center gap-2 hover:scale-105"
                >
                  <FaEye className="w-4 h-4" />
                  View Project
                </a>
              </div>
            </div>
            <div className="p-6 space-y-4">
              <h3 className="text-xl font-bold text-foreground group-hover:gradient-text transition-all">
                {project.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed text-sm">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 pt-2">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 text-xs font-medium bg-linear-to-r from-primary/10 to-accent/10 text-primary border border-primary/20 rounded-full hover:from-primary/20 hover:to-accent/20 transition-all duration-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center">
        <button
          onClick={() => setShowAll(!showAll)}
          className="px-8 py-3 rounded-xl font-semibold border-2 border-border text-foreground hover:border-primary/50 hover:gradient-text transition-all duration-300"
        >
          {showAll ? "Show Less" : "View All Projects"}
        </button>
      </div>
    </section>
  );
}
