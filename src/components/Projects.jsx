"use client";

import { useState, useMemo } from "react";
import { projectsData } from "../data/projectsData";
import { FaEye, FaArrowRight, FaFilter, FaStar, FaExternalLinkAlt, FaGithub, FaLayerGroup } from "react-icons/fa";

export default function Projects({ onSelectProject }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [showAll, setShowAll] = useState(false);

  const categories = ["All", "Full Stack", "AI & ML", "Web Apps", "Mobile & SaaS"];

  const filteredProjects = useMemo(() => {
    if (selectedCategory === "All") return projectsData;
    return projectsData.filter((p) => p.category === selectedCategory);
  }, [selectedCategory]);

  const displayedProjects = showAll ? filteredProjects : filteredProjects.slice(0, 6);

  return (
    <section
      id="projects"
      className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative overflow-hidden"
    >
      {/* Background Decorative Glow Orbs */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl pointer-events-none"></div>

      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-8 space-y-3">
        <p className="section-header">#featured-work</p>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-foreground tracking-tight">
          Crafted with Precision & Innovation
        </h2>
        <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
          Explore a selection of recent web applications, full-stack systems, and AI tools. Click any project to view full technical architecture, metrics, and interactive showcases.
        </p>
      </div>

      {/* Category Filter Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
        {categories.map((cat) => {
          const isActive = selectedCategory === cat;
          return (
            <button
              key={cat}
              onClick={() => {
                setSelectedCategory(cat);
                setShowAll(false);
              }}
              className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 ${
                isActive
                  ? "bg-primary text-primary-foreground shadow-lg shadow-primary/20 scale-105"
                  : "bg-card border border-border text-muted-foreground hover:text-foreground hover:border-primary/40 hover:bg-muted/50"
              }`}
            >
              {cat}
            </button>
          );
        })}
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        {displayedProjects.map((project) => (
          <div
            key={project.id}
            onClick={() => onSelectProject && onSelectProject(project)}
            className="group cursor-pointer rounded-3xl bg-card border border-border/80 hover:border-primary/50 transition-all duration-500 overflow-hidden hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-2 relative flex flex-col justify-between"
          >
            <div>
              {/* Image & Overlay */}
              <div className="overflow-hidden h-64 sm:h-72 bg-muted relative">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500"></div>

                {/* Top Badges */}
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
                  <span className="px-3 py-1 text-xs font-mono font-semibold uppercase tracking-wider bg-black/60 backdrop-blur-md text-white border border-white/20 rounded-full">
                    {project.category}
                  </span>

                  {project.featured && (
                    <span className="flex items-center gap-1 px-3 py-1 text-xs font-semibold bg-primary text-primary-foreground rounded-full shadow-md">
                      <FaStar className="w-3 h-3 text-amber-300" />
                      Featured
                    </span>
                  )}
                </div>

                {/* Center Hover Action */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 backdrop-blur-[2px] bg-black/30">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onSelectProject && onSelectProject(project);
                    }}
                    className="px-6 py-3 bg-primary text-primary-foreground rounded-full font-semibold shadow-xl hover:scale-105 transition-all duration-200 flex items-center gap-2"
                  >
                    <FaEye className="w-4 h-4" />
                    View Full Details
                  </button>
                </div>
              </div>

              {/* Content Box */}
              <div className="p-6 sm:p-7 space-y-4">
                <div className="space-y-1">
                  <h3 className="text-xl sm:text-2xl font-bold text-foreground group-hover:gradient-text transition-all duration-300">
                    {project.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed line-clamp-2">
                    {project.shortDescription}
                  </p>
                </div>

                {/* Tech Pills */}
                <div className="flex flex-wrap gap-2 pt-1">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-xs font-medium bg-secondary text-secondary-foreground border border-border rounded-full group-hover:border-primary/20 transition-all"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Bottom Card Footer */}
            <div className="px-6 sm:px-7 pb-6 pt-2 border-t border-border/40 flex items-center justify-between text-xs text-muted-foreground font-medium">
              <span className="flex items-center gap-1.5 text-primary group-hover:translate-x-1 transition-transform duration-300 font-semibold">
                Explore Details & Architecture <FaArrowRight className="w-3 h-3" />
              </span>

              <div className="flex items-center gap-3" onClick={(e) => e.stopPropagation()}>
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-foreground p-1 transition-colors"
                    title="GitHub Repository"
                  >
                    <FaGithub className="w-4 h-4" />
                  </a>
                )}
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-primary p-1 transition-colors"
                    title="Live Demo"
                  >
                    <FaExternalLinkAlt className="w-3.5 h-3.5" />
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Show All / Show Less CTA */}
      {filteredProjects.length > 6 && (
        <div className="flex justify-center">
          <button
            onClick={() => setShowAll(!showAll)}
            className="px-8 py-3 rounded-2xl font-semibold border-2 border-border text-foreground hover:border-primary/50 hover:gradient-text transition-all duration-300 shadow-sm hover:shadow-md"
          >
            {showAll
              ? "Show Featured Projects"
              : `View All Projects (${filteredProjects.length})`}
          </button>
        </div>
      )}
    </section>
  );
}
