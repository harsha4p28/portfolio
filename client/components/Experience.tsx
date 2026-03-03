"use client"
import useReveal from "@/hooks/useReveal"
import { experience } from "@/data/content"

export default function Experience() {
  useReveal()

  return (
    <section id="experience" className="section">
      <h2 className="text-3xl md:text-5xl font-bold gradient-text mb-20 text-center">
        Professional Journey
      </h2>

      <div className="relative max-w-4xl mx-auto">
        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-cyan-400 to-blue-500" />

        <div className="space-y-20">
          {experience.map((exp, index) => (
            <div
              key={index}
              className={`relative fade-up flex flex-col md:flex-row items-start md:items-center ${
                index % 2 === 0 ? "md:flex-row-reverse" : ""
              }`}
            >
              <div className="md:w-1/2 px-8">
                <div className="glass card-3d p-8">
                  <h3 className="text-xl md:text-2xl font-semibold text-cyan-400 mb-2">
                    {exp.role}
                  </h3>
                  <p className="text-blue-400 mb-1">{exp.company}</p>
                  <p className="text-slate-400 text-sm mb-6">{exp.duration}</p>
                  <ul className="space-y-3 text-slate-300 text-sm md:text-base">
                    {exp.points.map((point, i) => (
                      <li key={i}>• {point}</li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="absolute left-2 md:left-1/2 transform md:-translate-x-1/2 w-6 h-6 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 shadow-lg shadow-cyan-400/50" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}