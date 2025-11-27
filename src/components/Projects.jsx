"use client"

import { useState } from "react"

export default function Projects() {
  const allProjects = [
    {
      title: "E-Commerce Platform",
      description: "Full-featured platform with real-time inventory, payment processing, and admin dashboard.",
      tech: ["React", "Node.js", "MongoDB", "Stripe"],
      image: "/ecommerce-platform-dashboard.jpg",
      link: "#",
    },
    {
      title: "Analytics Dashboard",
      description: "Interactive dashboard with real-time data visualization and advanced filtering.",
      tech: ["Next.js", "TypeScript", "PostgreSQL", "Chart.js"],
      image: "/analytics-dashboard-charts.jpg",
      link: "#",
    },
    {
      title: "Social Media App",
      description: "Community platform with real-time messaging, notifications, and engagement features.",
      tech: ["React", "Firebase", "Tailwind", "WebSockets"],
      image: "/social-media-app-interface.jpg",
      link: "#",
    },
    {
      title: "Task Management App",
      description: "Cross-platform task manager with offline support and cloud sync.",
      tech: ["React Native", "Redux", "Firebase", "Express"],
      image: "/task-management-app.jpg",
      link: "#",
    },
    {
      title: "Real Estate Platform",
      description: "Property listing platform with advanced search, virtual tours, and booking system.",
      tech: ["Next.js", "Mapbox", "Supabase", "Stripe"],
      image: "/real-estate-property-listing.jpg",
      link: "#",
    },
    {
      title: "AI Chat Application",
      description: "Intelligent chatbot with context awareness and multi-language support.",
      tech: ["React", "OpenAI", "Node.js", "MongoDB"],
      image: "/ai-chat-application-interface.jpg",
      link: "#",
    },
  ]

  const [showAll, setShowAll] = useState(false)
  const displayedProjects = showAll ? allProjects : allProjects.slice(0, 4)

  return (
    <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto relative">
      {/* Decorative */}
      <div className="absolute right-0 top-32 w-40 h-40 bg-accent/5 rounded-full blur-3xl"></div>

      <p className="section-header mb-12 text-center">#projects</p>

      <div className="grid md:grid-cols-2 gap-6 mb-10">
        {displayedProjects.map((project, idx) => (
          <a
            key={idx}
            href={project.link}
            className="group cursor-pointer rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300 overflow-hidden hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-1"
          >
            <div className="overflow-hidden h-52 bg-muted relative">
              <img
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>
            <div className="p-6 space-y-4">
              <h3 className="text-xl font-bold text-foreground group-hover:gradient-text transition-all">
                {project.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">{project.description}</p>
              <div className="flex flex-wrap gap-2 pt-2">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 text-xs font-medium gradient-bg-subtle text-primary border border-primary/20 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </a>
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
  )
}
