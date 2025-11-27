export default function About() {
  return (
    <section
      id="about"
      className="py-24 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto relative"
    >
      {/* Decorative elements */}
      <div className="absolute left-0 top-20 w-20 h-20 border-2 border-primary/10 rounded-2xl -rotate-12"></div>
      <div className="absolute right-0 bottom-20 w-24 h-24 border-2 border-accent/10 rounded-2xl rotate-12"></div>

      <div className="relative z-10">
        <p className="section-header mb-12 text-center">#about me</p>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text Content */}
          <div className="space-y-6 order-2 md:order-1">
            <div className="space-y-5 text-foreground leading-relaxed text-lg">
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
              <div className="p-4 rounded-xl bg-muted/50 border border-border">
                <p className="text-3xl font-bold gradient-text">5+</p>
                <p className="text-sm text-muted-foreground">
                  Years Experience
                </p>
              </div>
              <div className="p-4 rounded-xl bg-muted/50 border border-border">
                <p className="text-3xl font-bold gradient-text">10+</p>
                <p className="text-sm text-muted-foreground">
                  Projects Delivered
                </p>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="order-1 md:order-2">
            <div className="relative">
              <div className="absolute inset-0 gradient-bg rounded-2xl blur-2xl opacity-20 scale-95"></div>
              <div className="relative h-80 md:h-110 rounded-2xl overflow-hidden border-2 border-border bg-card">
                <img
                  src="/primedev-image.jpg"
                  alt="Nwachukwu Tony Uju - Software Engineer"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
