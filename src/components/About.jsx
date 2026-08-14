"use client";

import { useState } from "react";
import { FaSyncAlt } from "react-icons/fa";

export default function About() {
  const [isToggled, setIsToggled] = useState(false);

  return (
    <section
      id="about"
      className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto relative overflow-hidden"
    >
      {/* Decorative elements */}
      <div className="absolute left-0 top-20 w-20 h-20 border-2 border-primary/10 rounded-2xl -rotate-12 animate-pulse hidden sm:block"></div>
      <div className="absolute right-0 bottom-20 w-24 h-24 border-2 border-accent/10 rounded-2xl rotate-12 animate-pulse hidden md:block"></div>
      <div className="absolute top-10 right-20 w-16 h-16 bg-primary/5 rounded-full blur-xl hidden lg:block"></div>
      <div className="absolute bottom-10 left-20 w-20 h-20 bg-accent/5 rounded-full blur-xl hidden lg:block"></div>
      <div className="absolute top-1/2 left-10 w-32 h-32 bg-linear-to-r from-primary/5 to-accent/5 rounded-full blur-2xl opacity-50 hidden xl:block"></div>

      <div className="relative z-10">
        <p className="section-header mb-8 text-center">#about me</p>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-stretch">
          {/* Text Content */}
          <div className="space-y-6 order-2 md:order-1 flex flex-col justify-center">
            <div className="space-y-5 text-foreground leading-relaxed text-base sm:text-lg">
              <p>
                I don't just write code. I build{" "}
                <span className="gradient-text font-semibold">
                  digital products
                </span>{" "}
                that move fast, scale cleanly, and feel amazing to use.
              </p>
              <p className="text-muted-foreground">
                I'm a Software Engineer and IT Support Specialist who turns
                ambitious ideas into fast, reliable, high-performing mobile and
                web applications. I don’t just design interfaces. I engineer the
                architecture, usability, and user experience that keep people
                engaged and coming back.
              </p>
              <p className="text-muted-foreground">
                Backed by hands-on expertise in hardware/software
                troubleshooting, installations, repairs, and maintenance, I
                deliver with clarity and confidence in fast-paced environments.
                Whether launching an MVP or scaling a product, I bring technical
                depth, precision, and the level of polish that sets products
                apart.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 pt-6">
              <div className="p-4 rounded-xl bg-muted/50 border border-border hover:bg-linear-to-br hover:from-primary/5 hover:to-accent/5 hover:border-primary/30 transition-all duration-300 group cursor-pointer hover:scale-105">
                <p className="text-3xl font-bold gradient-text group-hover:scale-110 transition-transform duration-300">
                  5+
                </p>
                <p className="text-sm text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                  Years Experience
                </p>
              </div>
              <div className="p-4 rounded-xl bg-muted/50 border border-border hover:bg-linear-to-br hover:from-primary/5 hover:to-accent/5 hover:border-primary/30 transition-all duration-300 group cursor-pointer hover:scale-105">
                <p className="text-3xl font-bold gradient-text group-hover:scale-110 transition-transform duration-300">
                  10+
                </p>
                <p className="text-sm text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                  Projects Delivered
                </p>
              </div>
            </div>
          </div>

          {/* Interactive Image Showcase */}
          <div className="order-1 md:order-2 flex items-center justify-center">
            <div
              onClick={() => setIsToggled(!isToggled)}
              onMouseEnter={() => setIsToggled(true)}
              onMouseLeave={() => setIsToggled(false)}
              className="relative group w-full h-full min-h-[380px] sm:min-h-[500px] md:min-h-[460px] lg:min-h-[520px] cursor-pointer select-none"
            >
              {/* Outer Glowing Atmosphere */}
              <div
                className={`absolute inset-0 gradient-bg rounded-3xl blur-2xl transition-all duration-700 ${
                  isToggled ? "opacity-40 scale-100" : "opacity-20 scale-95 group-hover:opacity-35 group-hover:scale-100"
                }`}
              ></div>

              {/* Main Card Container with 3D Perspective & Smooth Border */}
              <div
                className={`relative h-full w-full rounded-3xl overflow-hidden border-2 bg-card transition-all duration-700 shadow-2xl ${
                  isToggled
                    ? "border-primary shadow-primary/20 scale-[1.02] rotate-1"
                    : "border-border group-hover:border-primary/60 group-hover:scale-[1.01]"
                }`}
              >
                {/* Primary Image - Software Engineer Mode */}
                <img
                  src="/primedev-image.jpg"
                  alt="Nwachukwu Tony Uju - Software Engineer"
                  className={`absolute inset-0 w-full h-full object-cover object-top transition-all duration-700 ease-out ${
                    isToggled
                      ? "opacity-0 scale-110 filter blur-sm rotate-2"
                      : "opacity-100 scale-100 filter blur-0 rotate-0"
                  }`}
                />

                {/* Secondary Image - Creative Mode */}
                <img
                  src="/primedev-image-hover.jpeg"
                  alt="Nwachukwu Tony Uju - Creative Side"
                  className={`absolute inset-0 w-full h-full object-cover object-top transition-all duration-700 ease-out ${
                    isToggled
                      ? "opacity-100 scale-100 filter blur-0 rotate-0"
                      : "opacity-0 scale-110 filter blur-sm -rotate-2"
                  }`}
                />

                {/* Subtle Gradient Overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80 pointer-events-none"></div>

                {/* Floating Interactive Badge */}
                <div className="absolute bottom-4 left-4 right-4 z-20 flex items-center justify-between pointer-events-none">
                  <span className="px-3.5 py-1.5 rounded-full bg-black/70 backdrop-blur-md border border-white/20 text-white text-xs font-mono font-semibold flex items-center gap-2 shadow-lg">
                    <span className={`w-2 h-2 rounded-full ${isToggled ? "bg-accent animate-ping" : "bg-primary"}`}></span>
                    {isToggled ? "Creative Mode" : "Engineer Mode"}
                  </span>

                  <span className="px-3 py-1.5 rounded-full bg-primary/90 text-primary-foreground text-xs font-semibold flex items-center gap-1.5 shadow-md">
                    <FaSyncAlt className={`w-3 h-3 transition-transform duration-500 ${isToggled ? "rotate-180" : ""}`} />
                    <span className="hidden sm:inline">Tap / Hover</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
