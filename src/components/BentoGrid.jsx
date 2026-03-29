import {
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaRocket,
  FaBolt,
} from "react-icons/fa";

export default function BentoGrid() {
  const items = [
    {
      id: 1,
      title: "React Mastery",
      description:
        "Building performant, component-driven UIs with modern patterns",
      icon: FaReact,
      className: "md:col-span-2",
    },
    {
      id: 2,
      title: "Backend Power",
      description: "Node.js & Express expertise",
      icon: FaNodeJs,
    },
    {
      id: 3,
      title: "Database Design",
      description: "PostgreSQL, MongoDB, Firebase",
      icon: FaDatabase,
    },
    {
      id: 4,
      title: "DevOps & Deploy",
      description: "AWS, Vercel, Docker, CI/CD",
      icon: FaRocket,
    },
    {
      id: 5,
      title: "Web Performance",
      description: "Optimization & Core Web Vitals mastery",
      icon: FaBolt,
      className: "md:col-span-2",
    },
  ];

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative">
      <p className="section-header mb-12 text-center">#expertise</p>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
        {items.map((item) => (
          <div
            key={item.id}
            className={`${item.className || ""} p-6 rounded-2xl bg-linear-to-br from-card to-card/80 border border-border hover:border-primary/50 hover:bg-linear-to-br hover:from-primary/5 hover:to-accent/5 transition-all duration-300 group cursor-pointer hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-2 hover:scale-105`}
          >
            <div className="flex justify-between items-start gap-4">
              <div className="flex items-center gap-3">
                <item.icon className="w-8 h-8 text-primary group-hover:text-accent transition-colors" />
                <h3 className="text-xl font-bold text-foreground group-hover:gradient-text transition-all">
                  {item.title}
                </h3>
              </div>
              <p className="text-muted-foreground leading-relaxed text-sm max-w-xs text-right">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
