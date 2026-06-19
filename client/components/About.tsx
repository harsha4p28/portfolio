"use client";
import useReveal from "@/hooks/useReveal";

export default function About() {
  useReveal();

  const highlights = [
    {
      icon: (
        <svg className="w-6 h-6 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
        </svg>
      ),
      title: "Cloud & DevSecOps",
      description: "Hands-on experience deploying and securing scalable cloud infrastructure on Google Cloud Platform with strict IAM roles.",
    },
    {
      icon: (
        <svg className="w-6 h-6 text-rose-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      title: "Applied Machine Learning",
      description: "Built end-to-end toxicology pipelines. Proficient in data preprocessing, classification models, and feature engineering.",
    },
    {
      icon: (
        <svg className="w-6 h-6 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
      title: "Full-Stack Architecture",
      description: "Developing responsive client views and secure, performant RESTful APIs. Clean modular code following OOP principles.",
    },
  ];

  return (
    <section id="about" className="section">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold font-display tracking-tight inline-block relative">
          <span className="gradient-text">About Me</span>
          <span className="absolute -bottom-2 left-0 right-0 h-[2px] bg-gradient-to-r from-red-500 to-rose-500 rounded-full" />
        </h2>
      </div>

      <div className="grid lg:grid-cols-12 gap-8 items-start">
        {/* Narrative bio */}
        <div className="lg:col-span-7 space-y-6 text-slate-400 text-lg leading-relaxed p-6 md:p-8 fade-up">
          <p>
            I’m a <span className="text-white font-medium">Software Engineer</span> with hands-on experience across cloud
            infrastructure, secure deployments, and applied machine learning. I
            focus on building systems that are scalable, production-ready, and
            engineered with long-term reliability in mind.
          </p>

          <p>
            During my Cloud Internship, I worked with Google Cloud Platform to
            deploy applications, configure IAM-based security policies, and
            manage CI/CD workflows. I gained practical experience in cloud
            architecture, monitoring, and performance optimization for
            real-world workloads.
          </p>

          <p>
            As a Machine Learning Intern, I developed an end-to-end toxicology
            prediction pipeline involving molecular data preprocessing, feature
            engineering, and classification model optimization. I enjoy
            combining infrastructure thinking with application development to
            design systems that work seamlessly from frontend to cloud.
          </p>
        </div>

        {/* Highlight stats/cards */}
        <div className="lg:col-span-5 space-y-4 fade-up">
          {highlights.map((item) => (
            <div key={item.title} className="glass-card p-6 flex gap-4 items-start border border-white/5">
              <div className="p-3 rounded-2xl bg-white/5 border border-white/8 shrink-0">
                {item.icon}
              </div>
              <div>
                <h3 className="text-base font-semibold text-white mb-1.5 font-display">
                  {item.title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
