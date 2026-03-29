export default function About() {
  return (
    <section
      id="about"
      className="py-24 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto relative overflow-hidden"
    >
      {/* Decorative elements */}
      <div className="absolute left-0 top-20 w-20 h-20 border-2 border-primary/10 rounded-2xl -rotate-12 animate-pulse hidden sm:block"></div>
      <div className="absolute right-0 bottom-20 w-24 h-24 border-2 border-accent/10 rounded-2xl rotate-12 animate-pulse hidden md:block"></div>
      <div className="absolute top-10 right-20 w-16 h-16 bg-primary/5 rounded-full blur-xl hidden lg:block"></div>
      <div className="absolute bottom-10 left-20 w-20 h-20 bg-accent/5 rounded-full blur-xl hidden lg:block"></div>
      <div className="absolute top-1/2 left-10 w-32 h-32 bg-linear-to-r from-primary/5 to-accent/5 rounded-full blur-2xl opacity-50 hidden xl:block"></div>

      <div className="relative z-10">
        <p className="section-header mb-12 text-center">#about me</p>

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

          {/* Image */}
          <div className="order-1 md:order-2 flex items-center justify-center">
            <div className="relative group w-full h-full min-h-[340px] sm:min-h-[540px] md:min-h-[420px] lg:min-h-[500px]">
              <div className="absolute inset-0 gradient-bg rounded-2xl blur-2xl opacity-20 scale-95 group-hover:scale-100 transition-transform duration-700"></div>
              <div className="relative h-full rounded-2xl overflow-hidden border-2 border-border bg-card group-hover:border-primary/50 transition-all duration-500 opacity-95 group-hover:opacity-100">
                <img
                  src="/primedev-image.jpg"
                  alt="Nwachukwu Tony Uju - Software Engineer"
                  className="absolute inset-0 w-full h-full object-cover transition-opacity duration-700 opacity-95 group-hover:opacity-90"
                />
                {/* Hover image */}
                <img
                  src="/primedev-image-hover.jpeg"
                  alt="Nwachukwu Tony Uju - Creative Side"
                  className="absolute inset-0 w-full h-full object-cover transition-opacity duration-700 opacity-0 group-hover:opacity-100"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
