export default function BentoGrid() {
  const items = [
    {
      id: 1,
      title: "React Mastery",
      description: "Building performant, component-driven UIs with modern patterns",
      icon: "⚛️",
      className: "md:col-span-2",
    },
    {
      id: 2,
      title: "Backend Power",
      description: "Node.js & Express expertise",
      icon: "⚙️",
    },
    {
      id: 3,
      title: "Database Design",
      description: "PostgreSQL, MongoDB, Firebase",
      icon: "🗄️",
    },
    {
      id: 4,
      title: "DevOps & Deploy",
      description: "AWS, Vercel, Docker, CI/CD",
      icon: "🚀",
    },
    {
      id: 5,
      title: "Web Performance",
      description: "Optimization & Core Web Vitals mastery",
      icon: "⚡",
      className: "md:col-span-2",
    },
  ]

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative">
      <p className="section-header mb-12 text-center">#expertise</p>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
        {items.map((item) => (
          <div
            key={item.id}
            className={`${item.className || ""} p-6 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300 group cursor-pointer hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-1`}
          >
            <div className="space-y-4">
              <div className="text-4xl">{item.icon}</div>
              <h3 className="text-xl font-bold text-foreground group-hover:gradient-text transition-all">
                {item.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
