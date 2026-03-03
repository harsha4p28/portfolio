"use client"
import useReveal from "@/hooks/useReveal"

export default function Contact() {
  useReveal()

  return (
    <section id="contact" className="section">
      <h2 className="text-3xl md:text-5xl font-bold gradient-text mb-16 text-center">
        Get In Touch
      </h2>

      <div className="max-w-3xl mx-auto glass p-10 md:p-16 rounded-3xl text-center fade-up card-3d">
        <p className="text-slate-300 text-lg md:text-xl mb-10 leading-relaxed">
          I’m always open to discussing new opportunities, collaborations,
          or interesting technical challenges. If you’re building something
          impactful or looking for a developer who understands full systems,
          let’s connect.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-6">
          <a
            href="mailto:harsha4p28@gmail.com"
            className="button-primary"
          >
            Send Email
          </a>

          <a
            href="https://github.com/harsha4p28"
            target="_blank"
            className="px-8 py-4 border border-white/20 rounded-2xl hover:bg-white/10 transition"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/harshavardhan-cheera/"
            target="_blank"
            className="px-8 py-4 border border-white/20 rounded-2xl hover:bg-white/10 transition"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  )
}