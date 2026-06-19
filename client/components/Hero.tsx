"use client"
import useReveal from "@/hooks/useReveal"

export default function Hero() {
  useReveal()

  return (
    <section id="home" className="section text-center pt-28 md:pt-36">
      <div className="glass p-12 md:p-24 fade-up relative overflow-hidden">
        {/* Glow Element */}
        <div className="absolute -top-24 -left-24 w-48 h-48 rounded-full bg-red-600/10 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -right-24 w-48 h-48 rounded-full bg-rose-600/10 blur-3xl pointer-events-none" />

        {/* Status Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/8 backdrop-blur-md mb-8 transition-transform hover:scale-105 duration-300">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span className="text-xs md:text-sm font-semibold text-slate-300 tracking-wider uppercase font-display">
            Open to Opportunities
          </span>
        </div>

        <h1 className="text-4xl md:text-8xl font-black tracking-tight mb-8 font-display">
          <span className="gradient-text">Harshavardhan</span>
          <br />
          <span className="gradient-accent-text">Cheera</span>
        </h1>

        <p className="text-slate-400 text-lg md:text-2xl max-w-3xl mx-auto mb-12 leading-relaxed font-light">
          Software Engineer building <span className="text-red-300 font-normal">scalable cloud systems</span>, production-grade applications, and interactive digital experiences.
        </p>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-5">
          <a 
            href="https://github.com/harsha4p28" 
            target="_blank"
            rel="noopener noreferrer"
            className="button-primary w-full sm:w-auto"
          >
            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
            <span>Explore GitHub</span>
          </a>
          <a
            href="mailto:harsha4p28@gmail.com"
            className="w-full sm:w-auto px-8 py-4 border border-white/10 rounded-2xl hover:border-red-500/50 hover:bg-red-500/5 transition-all duration-300 text-slate-300 hover:text-white flex items-center justify-center gap-2"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            <span>Contact Me</span>
          </a>
        </div>
      </div>
    </section>
  )
}