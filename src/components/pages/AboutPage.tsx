import React from 'react';
import { Award, Download } from 'lucide-react';
import {
  personalInfo,
  skills,
  experienceTimeline,
  education,
  certifications,
  achievements,
} from '../../data/portfolio-data';

interface AboutPageProps {
  onNavigate: (page: string) => void;
}

export function AboutPage({ onNavigate }: AboutPageProps) {
  return (
    <div className="min-h-screen pt-[70px]">
      {/* Page Title Panel */}
      <section className="py-20 px-6 bg-[#0D1218]">
        <div className="mx-auto text-center" style={{ maxWidth: 'var(--container-max)' }}>
          <h1
            className="text-[#E8F0F8] mb-4"
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: '2.5rem',
              fontWeight: 700,
            }}
          >
            About Me
          </h1>
          <p
            className="text-[#A8B4C0] max-w-3xl mx-auto"
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '1.125rem',
              lineHeight: '1.6',
            }}
          >
            A complete overview of my background, expertise, career journey, technical skills, and the
            work I create as an AI Engineer.
          </p>
        </div>
      </section>

      {/* Professional Summary */}
      <section className="py-20 px-6">
        <div className="mx-auto" style={{ maxWidth: 'var(--container-max)' }}>
          <div className="glass-panel rounded-3xl p-10 space-y-6">
            <h2
              className="text-[#E8F0F8]"
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '1.75rem',
                fontWeight: 600,
              }}
            >
              Professional Summary
            </h2>
            <div
              className="text-[#A8B4C0] space-y-4"
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '1rem',
                lineHeight: '1.7',
              }}
            >
              <p>
                I'm an AI Engineer specializing in building modern Generative AI systems,
                LLM-integrated applications, conversational intelligence, and AI-powered automation
                workflows. I work extensively with RAG pipelines, Generative LLM workflow engines,
                contextual learning systems, and deep-learning-based recognition solutions.
              </p>
              <p>
                My engineering background includes Python, Flask, FastAPI, LangChain, Transformers,
                FAISS, HuggingFace, and production-level backend architectures. I've built scalable AI
                solutions spanning conversational learning assistants, identity recognition engines, and
                educational automation tools.
              </p>
              <p>
                Working across AI engineering, backend development, cybersecurity ML, research workflows,
                educational technology, and intelligent agent design, I deliver end-to-end solutions that
                combine multi-domain expertise with clear technical reasoning, structured workflows, and
                reliable engineering practices.
              </p>
              <p>
                I'm passionate about building production-ready AI solutions that solve real-world
                problems. From prompt engineering and multi-step reasoning flows to microservices
                architecture and ML model deployment, I approach each project with a focus on
                scalability, maintainability, and measurable impact.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Matrix */}
      <section className="py-20 px-6 bg-[#0D1218]">
        <div className="mx-auto" style={{ maxWidth: 'var(--container-max)' }}>
          <h2
            className="text-[#E8F0F8] mb-12"
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: '1.75rem',
              fontWeight: 600,
            }}
          >
            Skills & Competencies
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* AI/ML Skills */}
            <div className="glass-panel rounded-2xl p-6">
              <h3
                className="text-[#00E6FF] mb-4"
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: '1.125rem',
                  fontWeight: 600,
                }}
              >
                AI & Machine Learning
              </h3>
              <div className="flex flex-wrap gap-2">
                {skills.aiml.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 glass-panel rounded-lg text-[#E8F0F8] border border-[rgba(255,255,255,0.12)]"
                    style={{ fontFamily: 'var(--font-body)', fontSize: '0.875rem' }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Backend Skills */}
            <div className="glass-panel rounded-2xl p-6">
              <h3
                className="text-[#00E6FF] mb-4"
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: '1.125rem',
                  fontWeight: 600,
                }}
              >
                Backend Engineering
              </h3>
              <div className="flex flex-wrap gap-2">
                {skills.backend.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 glass-panel rounded-lg text-[#E8F0F8] border border-[rgba(255,255,255,0.12)]"
                    style={{ fontFamily: 'var(--font-body)', fontSize: '0.875rem' }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Cybersecurity */}
            <div className="glass-panel rounded-2xl p-6">
              <h3
                className="text-[#00E6FF] mb-4"
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: '1.125rem',
                  fontWeight: 600,
                }}
              >
                Cybersecurity ML
              </h3>
              <div className="flex flex-wrap gap-2">
                {skills.cybersecurity.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 glass-panel rounded-lg text-[#E8F0F8] border border-[rgba(255,255,255,0.12)]"
                    style={{ fontFamily: 'var(--font-body)', fontSize: '0.875rem' }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Tools */}
            <div className="glass-panel rounded-2xl p-6">
              <h3
                className="text-[#00E6FF] mb-4"
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: '1.125rem',
                  fontWeight: 600,
                }}
              >
                Engineering Tools
              </h3>
              <div className="flex flex-wrap gap-2">
                {skills.tools.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 glass-panel rounded-lg text-[#E8F0F8] border border-[rgba(255,255,255,0.12)]"
                    style={{ fontFamily: 'var(--font-body)', fontSize: '0.875rem' }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* ML/Data Tools */}
            <div className="glass-panel rounded-2xl p-6">
              <h3
                className="text-[#00E6FF] mb-4"
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: '1.125rem',
                  fontWeight: 600,
                }}
              >
                ML & Data Tools
              </h3>
              <div className="flex flex-wrap gap-2">
                {skills.mldata.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 glass-panel rounded-lg text-[#E8F0F8] border border-[rgba(255,255,255,0.12)]"
                    style={{ fontFamily: 'var(--font-body)', fontSize: '0.875rem' }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Applications */}
            <div className="glass-panel rounded-2xl p-6">
              <h3
                className="text-[#00E6FF] mb-4"
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: '1.125rem',
                  fontWeight: 600,
                }}
              >
                AI Application Skills
              </h3>
              <div className="flex flex-wrap gap-2">
                {skills.applications.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 glass-panel rounded-lg text-[#E8F0F8] border border-[rgba(255,255,255,0.12)]"
                    style={{ fontFamily: 'var(--font-body)', fontSize: '0.875rem' }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Timeline */}
      <section className="py-20 px-6">
        <div className="mx-auto" style={{ maxWidth: 'var(--container-max)' }}>
          <h2
            className="text-[#E8F0F8] mb-12"
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: '1.75rem',
              fontWeight: 600,
            }}
          >
            Experience Timeline
          </h2>

          <div className="relative">
            {/* Timeline Line */}
            <div
              className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-[#00E6FF]"
              style={{ opacity: 0.3 }}
            />

            <div className="space-y-12">
              {experienceTimeline.map((exp, index) => (
                <div
                  key={exp.id}
                  className={`relative flex ${
                    exp.side === 'left' ? 'md:justify-start' : 'md:justify-end'
                  }`}
                >
                  <div
                    className={`w-full md:w-[calc(50%-2rem)] glass-panel rounded-2xl p-6 ${
                      exp.side === 'left' ? 'md:mr-8' : 'md:ml-8'
                    }`}
                  >
                    <h3
                      className="text-[#00E6FF] mb-1"
                      style={{
                        fontFamily: 'var(--font-heading)',
                        fontSize: '1.25rem',
                        fontWeight: 600,
                      }}
                    >
                      {exp.role}
                    </h3>
                    <p
                      className="text-[#E8F0F8] mb-1"
                      style={{ fontFamily: 'var(--font-body)', fontSize: '1rem' }}
                    >
                      {exp.company}
                    </p>
                    <p
                      className="text-[#6B7685] mb-4"
                      style={{ fontFamily: 'var(--font-body)', fontSize: '0.875rem' }}
                    >
                      {exp.duration}
                    </p>

                    <ul className="space-y-2 mb-4">
                      {exp.achievements.map((achievement, i) => (
                        <li
                          key={i}
                          className="text-[#A8B4C0] flex gap-2"
                          style={{ fontFamily: 'var(--font-body)', fontSize: '0.9375rem' }}
                        >
                          <span className="text-[#00E6FF] mt-1.5 flex-shrink-0">•</span>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-2">
                      {exp.tools.map((tool) => (
                        <span
                          key={tool}
                          className="px-2 py-1 glass-panel rounded text-[#6B7685]"
                          style={{ fontFamily: 'var(--font-body)', fontSize: '0.75rem' }}
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Education */}
      <section className="py-20 px-6 bg-[#0D1218]">
        <div className="mx-auto" style={{ maxWidth: 'var(--container-max)' }}>
          <h2
            className="text-[#E8F0F8] mb-8"
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: '1.75rem',
              fontWeight: 600,
            }}
          >
            Education
          </h2>

          <div className="glass-panel rounded-2xl p-8">
            <h3
              className="text-[#00E6FF] mb-2"
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '1.25rem',
                fontWeight: 600,
              }}
            >
              {education.degree}
            </h3>
            <p
              className="text-[#E8F0F8] mb-1"
              style={{ fontFamily: 'var(--font-body)', fontSize: '1rem' }}
            >
              {education.institution}
            </p>
            <p
              className="text-[#A8B4C0] mb-1"
              style={{ fontFamily: 'var(--font-body)', fontSize: '0.9375rem' }}
            >
              {education.location}
            </p>
            <p
              className="text-[#6B7685] mb-6"
              style={{ fontFamily: 'var(--font-body)', fontSize: '0.875rem' }}
            >
              {education.duration} • GPA: {education.gpa}
            </p>

            <div>
              <p
                className="text-[#A8B4C0] mb-3"
                style={{ fontFamily: 'var(--font-heading)', fontSize: '1rem', fontWeight: 600 }}
              >
                Academic Focus:
              </p>
              <div className="flex flex-wrap gap-2">
                {education.focus.map((area) => (
                  <span
                    key={area}
                    className="px-3 py-1.5 glass-panel rounded-lg text-[#E8F0F8]"
                    style={{ fontFamily: 'var(--font-body)', fontSize: '0.875rem' }}
                  >
                    {area}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-20 px-6">
        <div className="mx-auto" style={{ maxWidth: 'var(--container-max)' }}>
          <h2
            className="text-[#E8F0F8] mb-12"
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: '1.75rem',
              fontWeight: 600,
            }}
          >
            Achievements & Certifications
          </h2>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {achievements.map((achievement) => (
              <div key={achievement.id} className="glass-panel rounded-2xl p-6 flex items-start gap-4">
                <div className="p-3 glass-panel rounded-xl">
                  <Award className="w-6 h-6 text-[#00E6FF]" strokeWidth={1.8} />
                </div>
                <div>
                  <h3
                    className="text-[#E8F0F8] mb-2"
                    style={{
                      fontFamily: 'var(--font-heading)',
                      fontSize: '1.125rem',
                      fontWeight: 600,
                    }}
                  >
                    {achievement.title}
                  </h3>
                  <p
                    className="text-[#A8B4C0]"
                    style={{ fontFamily: 'var(--font-body)', fontSize: '0.9375rem' }}
                  >
                    {achievement.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="glass-panel rounded-2xl p-8">
            <h3
              className="text-[#00E6FF] mb-6"
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '1.125rem',
                fontWeight: 600,
              }}
            >
              Professional Certifications
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
              {certifications.map((cert) => (
                <div
                  key={cert}
                  className="px-4 py-3 glass-panel rounded-lg text-[#E8F0F8]"
                  style={{ fontFamily: 'var(--font-body)', fontSize: '0.9375rem' }}
                >
                  {cert}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Personal Philosophy */}
      <section className="py-20 px-6 bg-[#0D1218]">
        <div className="mx-auto" style={{ maxWidth: 'var(--container-max)' }}>
          <div className="glass-panel rounded-3xl p-10">
            <h2
              className="text-[#E8F0F8] mb-6"
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '1.75rem',
                fontWeight: 600,
              }}
            >
              Personal Philosophy & Approach to AI
            </h2>
            <div
              className="text-[#A8B4C0] space-y-4"
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '1rem',
                lineHeight: '1.7',
              }}
            >
              <p>
                I believe AI should be accessible, explainable, and impactful. My approach centers on
                building systems that solve real problems while maintaining transparency and ethical
                standards. Whether it's a conversational learning assistant or a cybersecurity detection
                model, I focus on making complex AI understandable and usable.
              </p>
              <p>
                I'm particularly passionate about educational technology and democratizing access to
                knowledge. My work with RAG systems, multilingual translators, and learning assistants
                stems from a belief that AI can bridge gaps in education and make personalized learning
                available to everyone.
              </p>
              <p>
                Looking forward, I'm excited about the intersection of reasoning, knowledge representation,
                and long-context understanding in LLMs. I see immense potential in building AI systems that
                can truly understand context, maintain consistency across complex workflows, and provide
                explainable outputs that users can trust and learn from.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="mx-auto text-center" style={{ maxWidth: 'var(--container-max)' }}>
          <h2
            className="text-[#E8F0F8] mb-8"
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: '1.75rem',
              fontWeight: 600,
            }}
          >
            Let's Work Together
          </h2>
          <div className="flex flex-wrap gap-4 justify-center">
            <button
              onClick={() => onNavigate('contact')}
              className="px-7 py-3.5 rounded-full text-[#0A0F14]"
              style={{
                background: 'linear-gradient(135deg, #00E6FF 0%, #0077FF 100%)',
                fontFamily: 'var(--font-body)',
                fontWeight: 500,
                letterSpacing: '0.3px',
              }}
            >
              Get In Touch
            </button>
            <a
              href={personalInfo.resumePath}
              download
              className="px-5 py-3 rounded-full glass-panel hover:bg-[rgba(255,255,255,0.08)] text-[#E8F0F8] flex items-center gap-2"
              style={{
                fontFamily: 'var(--font-body)',
                fontWeight: 500,
                letterSpacing: '0.3px',
              }}
            >
              <Download className="w-5 h-5" strokeWidth={1.8} />
              Download Resume
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
