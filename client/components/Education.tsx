"use client"
import useReveal from "@/hooks/useReveal"

export default function Education() {
  useReveal()

  const education = [
    {
      degree: "B.Tech in Computer Science",
      institution: "Jawaharlal Nehru Technological University, Hyderabad",
      duration: "2023 - Expected 2027",
      details: [
        "CGPA: 9.1 / 10",
        "Core concepts: DSA, OS, DBMS, CN",
        "Active participant in coding competitionss"
      ]
    }
  ]

  return (
    <section id="education" className="section">
      <h2 className="text-3xl md:text-5xl font-bold gradient-text mb-20 text-center">
        Academic Foundation
      </h2>

      <div className="max-w-4xl mx-auto space-y-12">
        {education.map((edu) => (
          <div key={edu.degree} className="glass card-3d p-10 fade-up">
            <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-6">
              <div>
                <h3 className="text-2xl font-semibold text-cyan-400">
                  {edu.degree}
                </h3>
                <p className="text-blue-400">{edu.institution}</p>
              </div>
              <span className="text-slate-400 text-sm mt-2 md:mt-0">
                {edu.duration}
              </span>
            </div>

            <div className="space-y-3 text-slate-300">
              {edu.details.map((item, i) => (
                <p key={i}>• {item}</p>
              ))}
            </div>

            <div className="mt-8">
              <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-cyan-400 to-blue-500 w-[88%] animate-pulse" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}