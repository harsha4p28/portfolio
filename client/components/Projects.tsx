"use client"
import useReveal from "@/hooks/useReveal"
import { projects } from "@/data/content"

export default function Projects() {
  useReveal()

  return (
    <section id="projects" className="section">
      <h2 className="text-3xl md:text-5xl font-bold gradient-text mb-20 text-center">
        Featured Projects
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
        {projects.map((project) => (
          <div
            key={project.title}
            className="glass p-8 rounded-3xl fade-up card-3d group relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition duration-500" />

            <h3 className="text-xl md:text-2xl font-semibold text-cyan-400 mb-6 relative z-10">
              {project.title}
            </h3>

            <ul className="space-y-3 text-slate-300 text-sm md:text-base relative z-10">
              {project.description.map((point, index) => (
                <li key={index} className="flex gap-2">
                  <span className="text-cyan-400">▹</span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8 pt-6 border-t border-white/10 relative z-10">
              <div className="flex flex-wrap gap-3">
                {project.stack.split(",").map((tech) => (
                  <span
                    key={tech.trim()}
                    className="px-4 py-2 rounded-xl text-sm font-medium
                    bg-white/5 border border-white/10
                    hover:border-cyan-400 hover:bg-cyan-400/10
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