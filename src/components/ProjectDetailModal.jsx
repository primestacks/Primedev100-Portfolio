"use client";

import { useEffect, useState } from "react";
import {
  FaTimes,
  FaExternalLinkAlt,
  FaGithub,
  FaCheckCircle,
  FaServer,
  FaDatabase,
  FaCloud,
  FaChartLine,
  FaLightbulb,
  FaBolt,
  FaStar,
  FaImages,
  FaCode,
  FaLayerGroup,
  FaArrowRight
} from "react-icons/fa";

export default function ProjectDetailModal({ project, onClose }) {
  const [activeTab, setActiveTab] = useState("overview");
  const [selectedImage, setSelectedImage] = useState(0);

  // Close modal on ESC key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    // Lock background scroll when modal is open
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [onClose]);

  if (!project) return null;

  const galleryImages = project.gallery && project.gallery.length > 0 
    ? project.gallery 
    : [project.image];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8 animate-in fade-in duration-300">
      {/* Dark Blur Backdrop */}
      <div
        className="fixed inset-0 bg-black/80 backdrop-blur-md transition-opacity"
        onClick={onClose}
      />

      {/* Modal Container */}
      <div className="relative w-full max-w-4xl max-h-[90vh] bg-card border border-border/80 rounded-3xl shadow-2xl overflow-hidden flex flex-col z-10 animate-in zoom-in-95 duration-300">
        
        {/* Modal Header */}
        <div className="sticky top-0 z-20 flex items-center justify-between px-6 py-5 bg-card/95 backdrop-blur-md border-b border-border">
          <div className="flex items-center gap-3">
            <span className="px-3 py-1 text-xs font-mono font-semibold tracking-wide uppercase bg-primary/10 text-primary border border-primary/20 rounded-full">
              {project.category}
            </span>
            {project.status && (
              <span className="flex items-center gap-1.5 px-3 py-1 text-xs font-semibold bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 rounded-full">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                {project.status}
              </span>
            )}
          </div>

          <button
            onClick={onClose}
            className="p-2.5 text-muted-foreground hover:text-foreground rounded-full hover:bg-muted/80 transition-all duration-200 focus:outline-none"
            aria-label="Close modal"
          >
            <FaTimes className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="flex-1 overflow-y-auto p-6 sm:p-8 space-y-8 custom-scrollbar">
          
          {/* Title & Subtitle */}
          <div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-foreground tracking-tight">
              {project.title}
            </h2>
            <p className="mt-2 text-base sm:text-lg text-muted-foreground leading-relaxed">
              {project.subtitle}
            </p>
          </div>

          {/* Media Showcase / Gallery */}
          <div className="space-y-4">
            <div className="relative h-64 sm:h-80 md:h-96 w-full rounded-2xl overflow-hidden bg-muted border border-border shadow-inner">
              <img
                src={galleryImages[selectedImage] || project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-all duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60 pointer-events-none"></div>
            </div>

            {/* Gallery Thumbnails if multiple */}
            {galleryImages.length > 1 && (
              <div className="flex items-center gap-3">
                {galleryImages.map((imgUrl, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedImage(idx)}
                    className={`relative w-20 h-14 sm:w-24 sm:h-16 rounded-xl overflow-hidden border-2 transition-all duration-200 ${
                      selectedImage === idx
                        ? "border-primary scale-105 shadow-md ring-2 ring-primary/30"
                        : "border-border/60 opacity-60 hover:opacity-100"
                    }`}
                  >
                    <img
                      src={imgUrl}
                      alt={`Thumbnail ${idx + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Navigation Tabs */}
          <div className="flex border-b border-border">
            <button
              onClick={() => setActiveTab("overview")}
              className={`pb-3 px-4 text-sm font-semibold transition-all relative ${
                activeTab === "overview"
                  ? "text-primary border-b-2 border-primary"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Overview & Impact
            </button>
            <button
              onClick={() => setActiveTab("features")}
              className={`pb-3 px-4 text-sm font-semibold transition-all relative ${
                activeTab === "features"
                  ? "text-primary border-b-2 border-primary"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Key Features
            </button>
            <button
              onClick={() => setActiveTab("stack")}
              className={`pb-3 px-4 text-sm font-semibold transition-all relative ${
                activeTab === "stack"
                  ? "text-primary border-b-2 border-primary"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Tech Stack & Architecture
            </button>
          </div>

          {/* TAB 1: OVERVIEW & IMPACT */}
          {activeTab === "overview" && (
            <div className="space-y-6 animate-in fade-in duration-300">
              <div className="prose dark:prose-invert max-w-none">
                <h3 className="text-lg font-bold text-foreground mb-2">Project Summary</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {project.fullDescription || project.shortDescription}
                </p>
              </div>

              {/* Challenge vs Solution Cards */}
              <div className="grid md:grid-cols-2 gap-4">
                {project.challenge && (
                  <div className="p-5 rounded-2xl bg-amber-500/5 border border-amber-500/20 space-y-2">
                    <div className="flex items-center gap-2 text-amber-600 dark:text-amber-400 font-bold text-sm">
                      <FaLightbulb className="w-4 h-4" />
                      <span>The Challenge</span>
                    </div>
                    <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                      {project.challenge}
                    </p>
                  </div>
                )}

                {project.solution && (
                  <div className="p-5 rounded-2xl bg-primary/5 border border-primary/20 space-y-2">
                    <div className="flex items-center gap-2 text-primary font-bold text-sm">
                      <FaBolt className="w-4 h-4" />
                      <span>The Solution</span>
                    </div>
                    <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                      {project.solution}
                    </p>
                  </div>
                )}
              </div>

              {/* Impact Highlight */}
              {project.impact && (
                <div className="p-5 rounded-2xl bg-linear-to-r from-primary/10 via-accent/10 to-transparent border border-primary/20 flex items-start gap-3">
                  <FaChartLine className="w-6 h-6 text-primary shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-bold text-foreground">Business & Technical Impact</h4>
                    <p className="text-sm text-muted-foreground mt-1">{project.impact}</p>
                  </div>
                </div>
              )}

              {/* Metrics Grid */}
              {project.metrics && (
                <div>
                  <h4 className="text-sm font-mono font-bold tracking-wider text-muted-foreground uppercase mb-3">Key Metrics</h4>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                    {project.metrics.map((metric, i) => (
                      <div
                        key={i}
                        className="p-4 rounded-xl bg-card border border-border text-center space-y-1 hover:border-primary/40 transition-colors"
                      >
                        <div className="text-xl sm:text-2xl font-extrabold text-foreground gradient-text">
                          {metric.value}
                        </div>
                        <div className="text-xs text-muted-foreground font-medium">
                          {metric.label}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}

          {/* TAB 2: KEY FEATURES */}
          {activeTab === "features" && (
            <div className="space-y-6 animate-in fade-in duration-300">
              <div className="grid sm:grid-cols-2 gap-4">
                {project.features ? (
                  project.features.map((feat, idx) => (
                    <div
                      key={idx}
                      className="p-5 rounded-2xl bg-card border border-border hover:border-primary/40 transition-all duration-300 space-y-2 group"
                    >
                      <div className="flex items-center gap-2 text-foreground font-bold text-base">
                        <FaCheckCircle className="w-4 h-4 text-primary group-hover:scale-110 transition-transform" />
                        <span>{feat.title}</span>
                      </div>
                      <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed pl-6">
                        {feat.desc}
                      </p>
                    </div>
                  ))
                ) : (
                  <p className="text-muted-foreground text-sm">No feature breakdown available.</p>
                )}
              </div>
            </div>
          )}

          {/* TAB 3: TECH STACK & ARCHITECTURE */}
          {activeTab === "stack" && (
            <div className="space-y-6 animate-in fade-in duration-300">
              {project.stackBreakdown ? (
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="p-5 rounded-2xl bg-card border border-border space-y-3">
                    <div className="flex items-center gap-2 font-bold text-foreground text-sm">
                      <FaCode className="text-primary w-4 h-4" />
                      <span>Frontend Technologies</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {project.stackBreakdown.frontend.map((item, i) => (
                        <span key={i} className="px-3 py-1 text-xs font-medium bg-muted text-foreground border border-border rounded-lg">
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="p-5 rounded-2xl bg-card border border-border space-y-3">
                    <div className="flex items-center gap-2 font-bold text-foreground text-sm">
                      <FaServer className="text-accent w-4 h-4" />
                      <span>Backend & Architecture</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {project.stackBreakdown.backend.map((item, i) => (
                        <span key={i} className="px-3 py-1 text-xs font-medium bg-muted text-foreground border border-border rounded-lg">
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="p-5 rounded-2xl bg-card border border-border space-y-3">
                    <div className="flex items-center gap-2 font-bold text-foreground text-sm">
                      <FaDatabase className="text-emerald-500 w-4 h-4" />
                      <span>Database & Caching</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {project.stackBreakdown.database.map((item, i) => (
                        <span key={i} className="px-3 py-1 text-xs font-medium bg-muted text-foreground border border-border rounded-lg">
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="p-5 rounded-2xl bg-card border border-border space-y-3">
                    <div className="flex items-center gap-2 font-bold text-foreground text-sm">
                      <FaCloud className="text-sky-500 w-4 h-4" />
                      <span>Cloud & DevOps</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {project.stackBreakdown.devops.map((item, i) => (
                        <span key={i} className="px-3 py-1 text-xs font-medium bg-muted text-foreground border border-border rounded-lg">
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary border border-primary/20 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              )}
            </div>
          )}

        </div>

        {/* Modal Footer CTA Links */}
        <div className="sticky bottom-0 z-20 flex flex-wrap items-center justify-between gap-3 px-6 py-4 bg-card/95 backdrop-blur-md border-t border-border">
          <div className="flex items-center gap-2 text-xs text-muted-foreground font-mono">
            <span>Press ESC or click outside to dismiss</span>
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 sm:flex-initial px-5 py-2.5 rounded-xl text-sm font-semibold border border-border bg-card hover:bg-muted text-foreground transition-all duration-200 flex items-center justify-center gap-2 hover:border-primary/40"
              >
                <FaGithub className="w-4 h-4" />
                Source Code
              </a>
            )}

            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 sm:flex-initial px-5 py-2.5 rounded-xl text-sm font-semibold bg-primary text-primary-foreground hover:opacity-90 transition-all duration-200 flex items-center justify-center gap-2 shadow-md hover:shadow-primary/20"
              >
                <FaExternalLinkAlt className="w-3.5 h-3.5" />
                Live Preview
              </a>
            )}
          </div>
        </div>

      </div>
    </div>
  );
}
