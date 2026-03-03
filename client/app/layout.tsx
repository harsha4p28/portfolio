"use client"
import Navbar from "@/components/Navbar"
import "./globals.css"
import { useEffect } from "react"

export default function RootLayout({ children }: { children: React.ReactNode }) {

  useEffect(() => {
    const move = (e: MouseEvent) => {
      document.documentElement.style.setProperty("--x", `${e.clientX}px`)
      document.documentElement.style.setProperty("--y", `${e.clientY}px`)
    }
    window.addEventListener("mousemove", move)
    return () => window.removeEventListener("mousemove", move)
  }, [])

  return (
    <html lang="en">
      <body>
        <div className="mesh-bg" />
        <div className="spotlight" />
        <Navbar />
        {children}
      </body>
    </html>
  )
}