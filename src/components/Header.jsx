"use client";

import { useState } from "react";

const scrollToSection = (sectionId) => {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};

export default function Header({ activeSection, setActiveSection }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleNavClick = (sectionId) => {
    setActiveSection(sectionId);
    scrollToSection(sectionId);
    setIsOpen(false);
  };

  const navItems = [
    { id: "about", label: "About" },
    { id: "projects", label: "Projects" },
    { id: "skills", label: "Skills" },
  ];

  return (
    <header className="fixed top-0 w-full bg-background/80 backdrop-blur-md border-b border-border/50 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        {/* Brand Name - Left */}
        <a href="#" className="text-xl font-bold font-mono gradient-text">
          {"<Primedev100 />"}
        </a>

        {/* Desktop Navigation - Centered */}
        <nav className="hidden md:flex gap-8 items-center absolute left-1/2 -translate-x-1/2">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`text-sm font-medium transition-all duration-300 pb-1 border-b-2 ${
                activeSection === item.id
                  ? "border-primary text-primary"
                  : "border-transparent text-muted-foreground hover:text-foreground"
              }`}
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* Let's Connect Button - Right */}
        <button
          onClick={() => handleNavClick("contact")}
          className="hidden md:block px-5 py-2.5 gradient-bg text-primary-foreground rounded-lg font-medium text-sm hover:opacity-90 transition-all hover:shadow-lg hover:shadow-primary/25"
        >
          Let's connect
        </button>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 hover:bg-muted rounded-lg transition-colors"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <nav className="md:hidden border-t border-border bg-background/95 backdrop-blur-md">
          <div className="px-4 py-4 space-y-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`block w-full text-left px-4 py-3 rounded-lg transition-colors ${
                  activeSection === item.id
                    ? "gradient-bg text-primary-foreground"
                    : "text-foreground hover:bg-muted"
                }`}
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={() => handleNavClick("contact")}
              className="w-full px-4 py-3 gradient-bg text-primary-foreground rounded-lg font-medium hover:opacity-90 transition-all mt-4"
            >
              Let's connect
            </button>
          </div>
        </nav>
      )}
    </header>
  );
}
