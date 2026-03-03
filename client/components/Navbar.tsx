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
      { threshold: 0.6 }
    )

    sections.forEach((sec) => {
      const el = document.getElementById(sec.id)
      if (el) observer.observe(el)
    })
  }, [])

  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[95%] md:w-auto">
      <div className="glass px-6 py-3 rounded-2xl backdrop-blur-xl border border-white/10 shadow-lg flex justify-between items-center">

        <div className="text-cyan-400 font-bold tracking-wide">
          HC
        </div>

        <div className="hidden md:flex gap-8 ml-8">
          {sections.map((sec) => (
            <a
              key={sec.id}
              href={`#${sec.id}`}
              className={`transition duration-300 ${
                active === sec.id
                  ? "text-cyan-400"
                  : "text-slate-300 hover:text-white"
              }`}
            >
              {sec.label}
            </a>
          ))}
        </div>

        <button
          className="md:hidden text-white"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
      </div>

      {open && (
        <div className="glass mt-4 rounded-2xl p-6 md:hidden space-y-4">
          {sections.map((sec) => (
            <a
              key={sec.id}
              href={`#${sec.id}`}
              onClick={() => setOpen(false)}
              className="block text-slate-300 hover:text-cyan-400"
            >
              {sec.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  )
}