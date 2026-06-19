"use client"
import Navbar from "@/components/Navbar"
import DevTools from "@/components/DevTools"
import "./globals.css"
import { useEffect } from "react"

export default function RootLayout({ children }: { children: React.ReactNode }) {

  useEffect(() => {
    const move = (e: MouseEvent) => {
      document.documentElement.style.setProperty("--x", `${e.clientX}px`)
      document.documentElement.style.setProperty("--y", `${e.clientY}px`)
    }
    window.addEventListener("mousemove", move)

    const handleScroll = () => {
      const bar = document.getElementById("scroll-progress-bar")
      if (bar) {
        const totalScroll = document.documentElement.scrollHeight - window.innerHeight
        const percentage = totalScroll > 0 ? (window.scrollY / totalScroll) * 100 : 0
        bar.style.width = `${percentage}%`
      }
    }
    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("mousemove", move)
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <html lang="en">
      <head>
        <title>Harshavardhan Cheera | Portfolio</title>
        <meta name="description" content="Software Engineer building scalable cloud systems, production-grade applications, and interactive digital experiences." />
      </head>
      <body className="antialiased selection:bg-red-500/30 selection:text-white">
        <div id="scroll-progress-bar" className="scroll-progress" />
        <div className="mesh-bg" />
        <div className="grid-overlay" />
        <div className="spotlight" />
        <Navbar />
        {children}
        <DevTools />
      </body>
    </html>
  )
}