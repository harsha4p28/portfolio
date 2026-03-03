import Hero from "@/components/Hero"
import Projects from "@/components/Projects"
import Experience from "@/components/Experience"
import Skills from "@/components/Skills"
import About from "@/components/About"
import Education from "@/components/Education"
import Contact from "@/components/Contact"

export default function Home() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-16 space-y-24">
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Education />
      <Skills />
      <Contact />
    </main>
  )
}