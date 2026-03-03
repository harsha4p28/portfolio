"use client"
import useReveal from "@/hooks/useReveal"

export default function Hero() {
  useReveal()

  return (
    <section id="home" className="section text-center">
      <div className="glass p-12 md:p-20 fade-up">
        <h1 className="text-3xl md:text-7xl font-extrabold gradient-text mb-6">
          Harshavardhan Cheera
        </h1>

        <p className="text-slate-300 text-lg md:text-xl max-w-3xl mx-auto mb-10">
          Full Stack Engineer building scalable cloud systems, production-grade
          applications, and interactive digital experiences.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-6">
          <a href="https://github.com/harsha4p28" className="button-primary">
            Explore GitHub
          </a>
          <a
            href="mailto:harsha4p28@gmail.com"
            className="px-8 py-4 border border-white/20 rounded-2xl hover:bg-white/10 transition"
          >
            Contact Me
          </a>
        </div>
      </div>
    </section>
  )
}