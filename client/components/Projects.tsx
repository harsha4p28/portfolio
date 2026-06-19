"use client"
import useReveal from "@/hooks/useReveal"
import { projects } from "@/data/content"

export default function Projects() {
  useReveal()

  // Custom SVG icon generator based on project title
  const getProjectIcon = (title: string) => {
    if (title.toLowerCase().includes("vulnerability")) {
      return (
        <svg className="w-6 h-6 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    }
    if (title.toLowerCase().includes("supply chain")) {
      return (
        <svg className="w-6 h-6 text-rose-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
      )
    }
    return (
      <svg className="w-6 h-6 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    )
  }

  return (
    <section id="projects" className="section">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold font-display tracking-tight inline-block relative">
          <span className="gradient-text">Featured Projects</span>
          <span className="absolute -bottom-2 left-0 right-0 h-[2px] bg-gradient-to-r from-red-500 to-rose-500 rounded-full" />
        </h2>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <div
            key={project.title}
            className="glass-card p-8 fade-up group relative overflow-hidden flex flex-col justify-between"
          >
            {/* Soft inner glow on hover */}
            <div className="absolute inset-0 bg-gradient-to-r from-red-500/5 to-rose-500/5 opacity-0 group-hover:opacity-100 transition duration-500 pointer-events-none" />

            <div>
              <div className="flex justify-between items-center mb-6">
                <div className="p-3 rounded-2xl bg-white/5 border border-white/8">
                  {getProjectIcon(project.title)}
                </div>
                <div className="text-slate-500 group-hover:text-red-400 transition-colors duration-300">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </div>
              </div>

              <h3 className="text-xl md:text-2xl font-bold text-white mb-4 group-hover:text-red-300 transition-colors font-display">
                {project.title}
              </h3>

              <ul className="space-y-3 text-slate-400 text-sm leading-relaxed mb-8">
                {project.description.map((point, index) => (
                  <li key={index} className="flex gap-2.5 items-start">
                    <span className="text-red-400 mt-1.5 shrink-0">
                      <svg className="w-1.5 h-1.5 fill-current" viewBox="0 0 8 8">
                        <circle cx="4" cy="4" r="3" />
                      </svg>
                    </span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-6 border-t border-white/5">
              <div className="flex flex-wrap gap-2">
                {project.stack.split(",").map((tech) => (
                  <span
                    key={tech.trim()}
                    className="px-3 py-1.5 rounded-xl text-xs font-semibold
                    bg-white/5 border border-white/6 text-slate-300
                    hover:border-red-500/40 hover:bg-red-500/10 hover:text-white
                    transition duration-300 cursor-default"
                  >
                    {tech.trim()}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}