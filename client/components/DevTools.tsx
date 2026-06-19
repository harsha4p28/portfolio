"use client"
import { useState, useEffect } from "react"

export default function DevTools() {
  const [open, setOpen] = useState(false)
  const [breakpoint, setBreakpoint] = useState("xs")
  const [scrollPos, setScrollPos] = useState(0)
  const [loadTime, setLoadTime] = useState("0ms")
  const [spotlightOn, setSpotlightOn] = useState(true)

  useEffect(() => {
    // Measure page load time
    if (window.performance) {
      const perf = window.performance.getEntriesByType("navigation")[0] as PerformanceNavigationTiming
      if (perf) {
        setLoadTime(`${Math.round(perf.duration)}ms`)
      } else {
        // Fallback for immediate render
        const load = window.performance.timing.loadEventEnd - window.performance.timing.navigationStart
        if (load > 0) setLoadTime(`${load}ms`)
      }
    }

    // Handle scroll pos
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight
      const percentage = totalScroll > 0 ? (window.scrollY / totalScroll) * 100 : 0
      setScrollPos(Math.round(percentage))
    }
    window.addEventListener("scroll", handleScroll)

    // Handle breakpoint
    const handleResize = () => {
      const width = window.innerWidth
      if (width >= 1536) setBreakpoint("2xl")
      else if (width >= 1280) setBreakpoint("xl")
      else if (width >= 1024) setBreakpoint("lg")
      else if (width >= 768) setBreakpoint("md")
      else if (width >= 640) setBreakpoint("sm")
      else setBreakpoint("xs")
    }
    handleResize()
    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("scroll", handleScroll)
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  const toggleSpotlight = () => {
    const spotlight = document.querySelector(".spotlight") as HTMLElement
    if (spotlight) {
      if (spotlightOn) {
        spotlight.style.display = "none"
      } else {
        spotlight.style.display = "block"
      }
      setSpotlightOn(!spotlightOn)
    }
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <div className="fixed bottom-6 right-6 z-50 font-mono">
      {!open ? (
        <button
          onClick={() => setOpen(true)}
          className="w-10 h-10 rounded-xl bg-black/80 border border-red-900/50 flex items-center justify-center text-red-500 hover:text-red-400 hover:border-red-500 shadow-[0_0_12px_rgba(220,38,38,0.15)] hover:shadow-[0_0_15px_rgba(220,38,38,0.3)] transition-all duration-300"
          aria-label="Open DevTools"
        >
          <svg className="w-5 h-5 animate-pulse" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
        </button>
      ) : (
        <div className="w-64 glass p-4 border border-red-900/40 shadow-2xl animate-in fade-in slide-in-from-bottom-4 duration-300">
          <div className="flex justify-between items-center mb-3 pb-2 border-b border-white/5">
            <span className="text-xs font-bold text-red-500 tracking-wider uppercase">Console DevTools</span>
            <button
              onClick={() => setOpen(false)}
              className="text-slate-400 hover:text-white transition"
              aria-label="Close DevTools"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <div className="space-y-2 text-xs text-slate-300">
            <div className="flex justify-between">
              <span className="text-slate-500">Breakpoint:</span>
              <span className="text-red-400 font-semibold uppercase">{breakpoint}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-500">Scroll Pos:</span>
              <span className="text-red-400 font-semibold">{scrollPos}%</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-500">Load Time:</span>
              <span className="text-red-400 font-semibold">{loadTime}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-500">Mouse Spotlight:</span>
              <span className="text-red-400 font-semibold">{spotlightOn ? "Enabled" : "Disabled"}</span>
            </div>
          </div>

          <div className="mt-4 pt-3 border-t border-white/5 grid grid-cols-2 gap-2">
            <button
              onClick={toggleSpotlight}
              className="px-2.5 py-1.5 rounded-lg bg-white/5 border border-white/10 hover:border-red-500 hover:bg-red-500/10 text-[10px] text-slate-300 hover:text-white transition duration-300"
            >
              {spotlightOn ? "Mute Glow" : "Unmute Glow"}
            </button>
            <button
              onClick={scrollToTop}
              className="px-2.5 py-1.5 rounded-lg bg-white/5 border border-white/10 hover:border-red-500 hover:bg-red-500/10 text-[10px] text-slate-300 hover:text-white transition duration-300"
            >
              Scroll Top ↑
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
