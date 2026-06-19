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
        "Core concepts: Data Structures & Algorithms, Operating Systems, DBMS, Computer Networks",
        "Active participant in coding competitions & tech hackathons"
      ]
    }
  ]

  return (
    <section id="education" className="section">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold font-display tracking-tight inline-block relative">
          <span className="gradient-text">Academic Foundation</span>
          <span className="absolute -bottom-2 left-0 right-0 h-[2px] bg-gradient-to-r from-red-500 to-rose-500 rounded-full" />
        </h2>
      </div>

      <div className="max-w-4xl mx-auto">
        {education.map((edu) => (
          <div key={edu.degree} className="glass-card p-10 fade-up relative overflow-hidden group">
            {/* Soft inner glow on hover */}
            <div className="absolute inset-0 bg-gradient-to-r from-red-500/5 to-transparent opacity-0 group-hover:opacity-100 transition duration-300 pointer-events-none" />

            <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-6 mb-8">
              <div className="flex gap-4 items-start">
                <div className="p-3.5 rounded-2xl bg-white/5 border border-white/8 shrink-0 text-red-400">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white font-display mb-1 group-hover:text-red-300 transition-colors">
                    {edu.degree}
                  </h3>
                  <p className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-rose-400 font-medium">
                    {edu.institution}
                  </p>
                </div>
              </div>
              <span className="inline-block px-3.5 py-1.5 rounded-full text-xs font-semibold bg-white/5 border border-white/6 text-slate-300 shrink-0 self-start md:self-auto">
                {edu.duration}
              </span>
            </div>

            <div className="space-y-4 text-slate-400 text-base leading-relaxed pl-2 md:pl-16">
              {edu.details.map((item, i) => (
                <p key={i} className="flex gap-3 items-center">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-400 shrink-0" />
                  <span>{item}</span>
                </p>
              ))}
            </div>

            <div className="mt-10 pl-2 md:pl-16">
              <div className="h-2 bg-white/5 rounded-full overflow-hidden border border-white/5">
                <div className="h-full bg-gradient-to-r from-red-500 to-rose-400 w-[91%] shadow-[0_0_12px_rgba(239,68,68,0.5)]" />
              </div>
              <div className="flex justify-between mt-2 text-xs font-semibold text-slate-500 uppercase tracking-wider">
                <span>Academic Progress</span>
                <span className="text-red-400">91%</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}