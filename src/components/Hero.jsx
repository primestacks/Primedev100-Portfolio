"use client";

export default function Hero() {
  const socials = [
    { icon: "GH", url: "https://github.com/primestacks", label: "GitHub" },
    { icon: "LI", url: "www.linkedin.com/in/primestack", label: "LinkedIn" },
    { icon: "TW", url: "https://x.com/primedev100", label: "Twitter" },
  ];

  return (
    <section className="pt-32 pb-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative overflow-hidden min-h-screen flex items-center">
      {/* Decorative gradient orbs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>

      {/* Geometric elements */}
      <div className="absolute top-32 left-20 w-24 h-24 border-2 border-primary/20 rounded-xl rotate-12"></div>
      <div className="absolute bottom-40 right-20 w-32 h-32 border-2 border-accent/20 rounded-xl -rotate-12"></div>

      {/* Dots pattern */}
      <div className="absolute top-40 left-32 flex flex-col gap-2">
        <div className="geometric-dot"></div>
        <div className="geometric-dot"></div>
        <div className="geometric-dot"></div>
      </div>

      <div className="flex gap-12 items-center justify-center relative z-10 w-full">
        {/* Social sidebar - Desktop/Tablet only */}
        <div className="hidden lg:flex flex-col gap-5">
          {socials.map((social, idx) => (
            <a
              key={idx}
              href={social.url}
              target="_blank"
              className="w-12 h-12 flex items-center justify-center rounded-xl gradient-border bg-card hover:gradient-bg hover:text-primary-foreground transition-all duration-300 group"
              aria-label={social.label}
            >
              <span className="text-sm font-bold font-mono text-muted-foreground group-hover:text-primary-foreground transition-colors">
                {social.icon}
              </span>
            </a>
          ))}
        </div>

        {/* Hero Content - Centered */}
        <div className="space-y-8 flex-1 text-center max-w-5xl">
          <div className="space-y-6">
            <p className="section-header text-base">{"{PORTFOLIO}"}</p>
            <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black text-balance leading-[0.9] tracking-tighter">
              <span className="gradient-text">SOFTWARE</span>
              <br />
              <span className="text-foreground">ENGINEER</span>
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-foreground max-w-3xl text-balance mx-auto leading-relaxed">
              Hi, I'm{" "}
              <span className="font-bold gradient-text">
                Nwachukwu Tony Uju
              </span>
              . I craft elegant, high-performance digital experiences that users
              love. Specialized in React, Node.js, and modern cloud
              architectures.
            </p>
          </div>

          <div className="flex gap-4 pt-8 flex-wrap justify-center">
            <button
              onClick={() =>
                document
                  .getElementById("projects")
                  .scrollIntoView({ behavior: "smooth" })
              }
              className="px-8 py-4 gradient-bg text-primary-foreground rounded-xl font-semibold text-lg hover:opacity-90 transition-all hover:shadow-xl hover:shadow-primary/30 hover:-translate-y-1"
            >
              View My Work
            </button>
            <button
              onClick={() =>
                document
                  .getElementById("contact")
                  .scrollIntoView({ behavior: "smooth" })
              }
              className="px-8 py-4 bg-card border-2 border-border text-foreground rounded-xl font-semibold text-lg hover:border-primary/50 transition-all hover:-translate-y-1"
            >
              Get in Touch
            </button>
          </div>
        </div>

        {/* Right spacer for balance */}
        <div className="hidden lg:block w-12"></div>
      </div>
    </section>
  );
}
