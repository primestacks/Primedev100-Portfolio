export default function Experience() {
  const experiences = [
    {
      role: "Senior Full Stack Engineer",
      company: "Tech Startup Inc",
      period: "2022 - Present",
      description:
        "Led development of customer-facing features and mentored junior developers. Improved application performance by 40%.",
    },
    {
      role: "Full Stack Developer",
      company: "Digital Agency",
      period: "2020 - 2022",
      description:
        "Built and maintained multiple client projects using React and Node.js. Implemented CI/CD pipelines and improved deployment process.",
    },
    {
      role: "Junior Developer",
      company: "Web Solutions Ltd",
      period: "2019 - 2020",
      description: "Started my career building responsive websites and learning full-stack development practices.",
    },
  ]

  return (
    <section id="experience" className="py-24 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      <p className="section-header mb-12 text-center">#experience</p>

      <div className="space-y-6">
        {experiences.map((exp, idx) => (
          <div
            key={idx}
            className="group cursor-pointer p-6 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5"
          >
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4">
              <div>
                <h3 className="text-xl font-bold group-hover:gradient-text transition-all">{exp.role}</h3>
                <p className="gradient-text font-medium">{exp.company}</p>
              </div>
              <p className="text-sm text-muted-foreground font-mono whitespace-nowrap px-3 py-1 bg-muted rounded-full">
                {exp.period}
              </p>
            </div>
            <p className="text-muted-foreground leading-relaxed">{exp.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
