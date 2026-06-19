"use client"
import useReveal from "@/hooks/useReveal"
import { experience } from "@/data/content"

export default function Experience() {
  useReveal()

  return (
    <section id="experience" className="section">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold font-display tracking-tight inline-block relative">
          <span className="gradient-text">Professional Journey</span>
          <span className="absolute -bottom-2 left-0 right-0 h-[2px] bg-gradient-to-r from-red-500 to-rose-500 rounded-full" />
        </h2>
      </div>

      <div className="relative max-w-4xl mx-auto">
        {/* Glowing timeline track */}
        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-red-500 via-rose-500 to-red-700 opacity-60" />

        <div className="space-y-16">
          {experience.map((exp, index) => (
            <div
              key={index}
              className={`relative fade-up flex flex-col md:flex-row items-start ${
                index % 2 === 0 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Card Container */}
              <div className="w-full md:w-1/2 px-4 md:px-8">
                <div className="glass-card p-8 border border-white/5 relative overflow-hidden group">
                  {/* Subtle hover gradient */}
                  <div className="absolute inset-0 bg-gradient-to-r from-red-500/5 to-transparent opacity-0 group-hover:opacity-100 transition duration-300 pointer-events-none" />

                  <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-red-500/10 text-red-300 border border-red-500/20 mb-4">
                    {exp.duration}
                  </span>

                  <h3 className="text-xl md:text-2xl font-bold text-white mb-1 font-display">
                    {exp.role}
                  </h3>
                  
                  <p className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-rose-400 font-medium mb-6">
                    {exp.company}
                  </p>

                  <ul className="space-y-3.5 text-slate-400 text-sm leading-relaxed">
                    {exp.points.map((point, i) => (
                      <li key={i} className="flex gap-2 items-start">
                        <span className="text-red-400 mt-1 shrink-0">•</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Timeline center node */}
              <div className="absolute left-1.5 md:left-1/2 transform -translate-x-1/2 top-8 flex items-center justify-center z-10">
                <div className="relative flex items-center justify-center">
                  {/* Glowing halo */}
                  <div className="absolute w-8 h-8 rounded-full bg-red-500/30 animate-pulse" />
                  {/* Outer circle */}
                  <div className="w-5 h-5 rounded-full bg-slate-950 border-2 border-red-400 flex items-center justify-center shadow-lg">
                    {/* Inner core */}
                    <div className="w-1.5 h-1.5 rounded-full bg-rose-400" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}