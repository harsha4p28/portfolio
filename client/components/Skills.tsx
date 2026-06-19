"use client"
import useReveal from "@/hooks/useReveal"

export default function Skills() {
  useReveal()

  const sections = [
    {
      title: "Programming Languages",
      skills: [
        { name: "Python", level: 90 },
        { name: "JavaScript", level: 85 },
        { name: "TypeScript", level: 80 },
        { name: "Java", level: 80 },
        { name: "C", level: 75 }
      ]
    },
    {
      title: "Web Development",
      skills: [
        { name: "React.js", level: 85 },
        { name: "Next.js", level: 90 },
        { name: "Node.js", level: 80 },
        { name: "Flask", level: 80 },
        { name: "HTML", level: 95 },
        { name: "CSS", level: 85 }
      ]
    },
    {
      title: "ML & AI",
      skills: [
        { name: "Machine Learning", level: 75 },
        { name: "Feature Engineering", level: 75 }
      ]
    },
    {
      title: "Databases",
      skills: [
        { name: "MySQL", level: 95 },
        { name: "MongoDB", level: 80 },
        { name: "PostgreSQL", level: 80 },
        { name: "Convex", level: 85 }
      ]
    },
    {
        title: "Cloud & DevOps",
        skills: [
          { name: "Google Cloud Platform", level: 80 },
          { name: "Docker", level: 75 },
          { name: "Kubernetes", level: 70 },
        ]
    }
  ]

  return (
    <section id="skills" className="section">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold font-display tracking-tight inline-block relative">
          <span className="gradient-text">Skills & Expertise</span>
          <span className="absolute -bottom-2 left-0 right-0 h-[2px] bg-gradient-to-r from-red-500 to-rose-500 rounded-full" />
        </h2>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {sections.map((section, index) => (
          <div
            key={section.title}
            className="glass-card p-8 md:p-10 fade-up relative overflow-hidden group"
          >
            {/* Subtle inner hover gradient */}
            <div className="absolute inset-0 bg-gradient-to-r from-red-500/5 to-transparent opacity-0 group-hover:opacity-100 transition duration-300 pointer-events-none" />

            <div className="flex items-center justify-between mb-8">
              <h3 className="text-xl md:text-2xl font-bold text-white font-display">
                {section.title}
              </h3>
              <div className="text-4xl font-extrabold text-white/5 group-hover:text-red-500/10 font-display transition duration-300 select-none">
                {String(index + 1).padStart(2, "0")}
              </div>
            </div>

            <div className="space-y-6">
              {section.skills.map((skill) => (
                <div key={skill.name} className="space-y-2">
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-slate-300 font-medium">{skill.name}</span>
                    <span className="text-red-400 font-bold font-display">
                      {skill.level}%
                    </span>
                  </div>

                  <div className="h-1.5 bg-white/5 rounded-full overflow-hidden border border-white/5">
                    <div
                      className="h-full bg-gradient-to-r from-red-500 via-rose-500 to-red-400 transition-all duration-1000 ease-out shadow-[0_0_8px_rgba(239,68,68,0.3)]"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}