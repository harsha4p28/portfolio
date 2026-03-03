"use client";
import useReveal from "@/hooks/useReveal";

export default function About() {
  useReveal();

  return (
    <section id="about" className="section">
      <h2 className="text-3xl md:text-5xl font-bold gradient-text mb-16 text-center">
        About Me
      </h2>

      <div className="max-w-4xl mx-auto glass card-3d p-10 md:p-16 fade-up">
        <div className="space-y-6 text-slate-300 text-lg leading-relaxed">
          <p>
            I’m a Full Stack Engineer with hands-on experience across cloud
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
      </div>
    </section>
  );
}
