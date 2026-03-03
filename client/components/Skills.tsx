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
      <h2 className="text-3xl md:text-5xl font-bold gradient-text mb-20 text-center">
        Skills & Expertise
      </h2>

      <div className="grid md:grid-cols-2 gap-12">
        {sections.map((section, index) => (
          <div
            key={section.title}
            className="glass p-10 rounded-3xl fade-up card-3d"
          >
            <div className="flex items-center mb-10">
              <div className="w-10 h-10 flex items-center justify-center rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 text-black font-bold mr-4">
                {index + 1}
              </div>
              <h3 className="text-xl md:text-2xl font-semibold">
                {section.title}
              </h3>
            </div>

            <div className="space-y-8">
              {section.skills.map((skill) => (
                <div key={skill.name}>
                  <div className="flex justify-between mb-2">
                    <span className="text-slate-300">{skill.name}</span>
                    <span className="text-cyan-400 font-medium">
                      {skill.level}%
                    </span>
                  </div>

                  <div className="h-3 bg-white/10 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-cyan-400 to-blue-500 transition-all duration-1000 ease-out"
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