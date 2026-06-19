"use client"
import { useState, useEffect } from "react"

export default function Navbar() {
  const [active, setActive] = useState("home")
  const [open, setOpen] = useState(false)

  const sections = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "experience", label: "Experience" },
    { id: "projects", label: "Projects" },
    { id: "education", label: "Education" },
    { id: "skills", label: "Skills" },
    { id: "contact", label: "Contact" }
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id)
          }
        })
      },
      { threshold: 0.2, rootMargin: "-15% 0px -40% 0px" }
    )

    sections.forEach((sec) => {
      const el = document.getElementById(sec.id)
      if (el) observer.observe(el)
    })

    return () => {
      sections.forEach((sec) => {
        const el = document.getElementById(sec.id)
        if (el) observer.unobserve(el)
      })
    }
  }, [])

  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[95%] md:w-auto">
      <div className="glass px-6 py-2.5 rounded-full backdrop-blur-xl border border-white/8 shadow-xl flex justify-between items-center transition-all duration-300">

        <div className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-rose-400 font-extrabold tracking-widest text-lg px-2">
          HC
        </div>

        <div className="hidden md:flex gap-7 items-center ml-6">
          {sections.map((sec) => (
            <a
              key={sec.id}
              href={`#${sec.id}`}
              onClick={() => setActive(sec.id)}
              className={`relative py-1.5 px-3 rounded-full text-sm font-medium tracking-wide transition-all duration-300 ${
                active === sec.id
                  ? "text-red-400"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              {sec.label}
              {active === sec.id && (
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-gradient-to-r from-red-500 to-rose-500 rounded-full shadow-[0_0_8px_rgba(239,68,68,0.7)]" />
              )}
            </a>
          ))}
        </div>

        <button
          className="md:hidden text-slate-400 hover:text-white p-2 transition"
          onClick={() => setOpen(!open)}
          aria-label="Toggle navigation menu"
        >
          {open ? (
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {open && (
        <div className="glass mt-3 rounded-3xl p-6 md:hidden space-y-3 border border-white/8 shadow-2xl animate-in fade-in slide-in-from-top-4 duration-300">
          {sections.map((sec) => (
            <a
              key={sec.id}
              href={`#${sec.id}`}
              onClick={() => {
                setActive(sec.id);
                setOpen(false);
              }}
              className={`block px-4 py-2.5 rounded-xl text-base font-medium transition-all ${
                active === sec.id
                  ? "bg-red-500/10 text-red-400 border-l-2 border-red-500"
                  : "text-slate-400 hover:text-white hover:bg-white/5"
              }`}
            >
              {sec.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  )
}