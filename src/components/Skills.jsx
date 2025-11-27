export default function Skills() {
  const languages = ["TypeScript", "JavaScript", "Python", "SQL", "Go"]

  const technicalCategories = [
    {
      category: "Frameworks/Tools",
      skills: ["React", "Next.js", "Node.js", "Express.js", "React Native", "GraphQL"],
    },
    {
      category: "Databases",
      skills: ["PostgreSQL", "MongoDB", "Firebase", "Supabase", "Redis"],
    },
    {
      category: "DevOps & Cloud",
      skills: ["AWS", "Docker", "CI/CD", "GitHub Actions", "Vercel", "Kubernetes"],
    },
  ]

  return (
    <section id="skills" className="py-24 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto relative">
      {/* Decorative dots */}
      <div className="absolute left-10 bottom-32 flex gap-3">
        {[...Array(5)].map((_, i) => (
          <div key={i} className="geometric-dot"></div>
        ))}
      </div>

      <p className="section-header mb-12 text-center">#skills</p>

      <div className="grid lg:grid-cols-2 gap-8">
        {/* Languages Container */}
        <div className="p-8 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300 h-fit">
          <h3 className="text-xl font-bold gradient-text mb-6">Languages</h3>
          <div className="flex flex-wrap gap-3">
            {languages.map((skill, i) => (
              <span
                key={i}
                className="px-4 py-2 text-sm font-medium bg-muted text-foreground rounded-xl border border-border hover:border-primary/50 transition-colors"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Technical Container - Stacked */}
        <div className="space-y-6">
          {technicalCategories.map((cat, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300"
            >
              <h3 className="text-lg font-bold gradient-text mb-4">{cat.category}</h3>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="px-3 py-1.5 text-sm font-medium bg-muted text-foreground rounded-lg border border-border hover:border-primary/50 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
