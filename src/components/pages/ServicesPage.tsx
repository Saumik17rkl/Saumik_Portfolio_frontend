import React from 'react';
import {
  Brain,
  MessageSquare,
  Server,
  Shield,
  GraduationCap,
  Bot,
  CheckCircle2,
  Download,
} from 'lucide-react';
import { services, personalInfo } from '../../data/portfolio-data';

interface ServicesPageProps {
  onNavigate: (page: string) => void;
}

export function ServicesPage({ onNavigate }: ServicesPageProps) {
  const iconMap: Record<string, any> = {
    Brain,
    MessageSquare,
    Server,
    Shield,
    GraduationCap,
    Bot,
  };

  const engagementPackages = [
    {
      name: 'Starter Package',
      subtitle: 'Ideal for Small Tools',
      features: [
        'Basic chatbots',
        'Simple automations',
        'Lightweight ML models',
        'API microservices',
        '1-2 week delivery',
      ],
    },
    {
      name: 'Professional Package',
      subtitle: 'Most Popular',
      features: [
        'Full RAG system',
        'Multi-page backend + AI integration',
        'Personalized LLM workflow',
        'Evaluation + reporting',
        '3-6 week delivery',
      ],
      popular: true,
    },
    {
      name: 'Enterprise Package',
      subtitle: 'Complete Solutions',
      features: [
        'Multi-domain AI systems',
        'Complex automation agents',
        'Cybersecurity ML + monitoring',
        'Research-backed generative workflows',
        'Custom timeline',
      ],
    },
  ];

  const workflowSteps = [
    {
      number: '1',
      title: 'Requirement Understanding',
      description:
        'Requirement analysis, problem breakdown, research & feasibility study, SDLC documentation.',
    },
    {
      number: '2',
      title: 'Data & Knowledge Processing',
      description:
        'Dataset preparation, embedding generation, knowledge graph creation, preprocessing scripts.',
    },
    {
      number: '3',
      title: 'Model / Workflow Design',
      description:
        'Structured prompting, multi-step flows, reasoning optimization, XAI-based semantic alignment.',
    },
    {
      number: '4',
      title: 'Backend Engineering',
      description:
        'FastAPI microservices, Flask endpoints, secure API architecture, utility modules.',
    },
    {
      number: '5',
      title: 'Integration & Evaluation',
      description:
        'RAG performance tuning, retrieval error improvements, knowledge routing testing, explainability validation.',
    },
    {
      number: '6',
      title: 'Delivery & Documentation',
      description: 'Clean modular code, comprehensive documentation, final workflow diagrams, deployment support.',
    },
  ];

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
            Services & What I Can Build For You
          </h1>
          <p
            className="text-[#A8B4C0] max-w-3xl mx-auto"
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '1.125rem',
              lineHeight: '1.6',
            }}
          >
            From GenAI systems to backend engineering, multilingual LLM workflows, automation pipelines,
            cybersecurity models, educational AI tools, and intelligent agents — I work across multiple
            domains to deliver high-impact AI solutions.
          </p>
        </div>
      </section>

      {/* Multi-Domain Profile */}
      <section className="py-20 px-6">
        <div className="mx-auto" style={{ maxWidth: 'var(--container-max)' }}>
          <div className="glass-panel rounded-3xl p-10">
            <h2
              className="text-[#00E6FF] mb-6"
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '1.75rem',
                fontWeight: 600,
              }}
            >
              A Multi-Domain AI Engineer
            </h2>
            <p
              className="text-[#A8B4C0] mb-6"
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '1rem',
                lineHeight: '1.7',
              }}
            >
              Saumik works across AI engineering, backend development, cybersecurity ML, educational
              technology, research workflows, and process automation — making him a truly multi-domain
              engineer capable of designing end-to-end AI systems.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                'GenAI & LLM Engineering',
                'Python Backend Development',
                'Cybersecurity ML',
                'Educational AI Systems',
                'AI Research',
                'Automation & Data Pipelines',
              ].map((domain) => (
                <div
                  key={domain}
                  className="glass-panel rounded-lg px-4 py-3 flex items-center gap-2"
                >
                  <CheckCircle2 className="w-5 h-5 text-[#00E6FF] flex-shrink-0" strokeWidth={1.8} />
                  <span
                    className="text-[#E8F0F8]"
                    style={{ fontFamily: 'var(--font-body)', fontSize: '0.9375rem' }}
                  >
                    {domain}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Key Service Categories */}
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
            Core Services
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {services.map((service) => {
              const Icon = iconMap[service.icon];
              return (
                <div key={service.id} className="glass-panel rounded-2xl p-8 space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 glass-panel rounded-xl">
                      <Icon className="w-6 h-6 text-[#00E6FF]" strokeWidth={1.8} />
                    </div>
                    <div>
                      <h3
                        className="text-[#E8F0F8] mb-2"
                        style={{
                          fontFamily: 'var(--font-heading)',
                          fontSize: '1.25rem',
                          fontWeight: 600,
                        }}
                      >
                        {service.title}
                      </h3>
                      <p
                        className="text-[#A8B4C0]"
                        style={{
                          fontFamily: 'var(--font-body)',
                          fontSize: '0.9375rem',
                          lineHeight: '1.6',
                        }}
                      >
                        {service.description}
                      </p>
                    </div>
                  </div>

                  {/* Details */}
                  <div>
                    <p
                      className="text-[#6B7685] mb-3"
                      style={{
                        fontFamily: 'var(--font-heading)',
                        fontSize: '0.875rem',
                        fontWeight: 600,
                      }}
                    >
                      What I Deliver:
                    </p>
                    <ul className="space-y-2">
                      {service.details.map((detail, index) => (
                        <li
                          key={index}
                          className="text-[#A8B4C0] flex gap-2"
                          style={{ fontFamily: 'var(--font-body)', fontSize: '0.875rem' }}
                        >
                          <span className="text-[#00E6FF] mt-1">•</span>
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tech Stack */}
                  <div>
                    <p
                      className="text-[#6B7685] mb-2"
                      style={{
                        fontFamily: 'var(--font-heading)',
                        fontSize: '0.875rem',
                        fontWeight: 600,
                      }}
                    >
                      Tech Stack:
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {service.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 glass-panel rounded text-[#6B7685]"
                          style={{ fontFamily: 'var(--font-body)', fontSize: '0.75rem' }}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Examples */}
                  {service.examples && (
                    <div>
                      <p
                        className="text-[#6B7685] mb-2"
                        style={{
                          fontFamily: 'var(--font-heading)',
                          fontSize: '0.875rem',
                          fontWeight: 600,
                        }}
                      >
                        Use Cases:
                      </p>
                      <p
                        className="text-[#A8B4C0]"
                        style={{
                          fontFamily: 'var(--font-body)',
                          fontSize: '0.875rem',
                          lineHeight: '1.6',
                        }}
                      >
                        {service.examples}
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* How I Work */}
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
            My Engineering Process
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {workflowSteps.map((step) => (
              <div key={step.number} className="glass-panel rounded-2xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center glass-panel"
                    style={{ background: 'rgba(0, 230, 255, 0.1)' }}
                  >
                    <span
                      className="text-[#00E6FF]"
                      style={{ fontFamily: 'var(--font-heading)', fontWeight: 600 }}
                    >
                      {step.number}
                    </span>
                  </div>
                  <h3
                    className="text-[#E8F0F8]"
                    style={{
                      fontFamily: 'var(--font-heading)',
                      fontSize: '1.125rem',
                      fontWeight: 600,
                    }}
                  >
                    {step.title}
                  </h3>
                </div>
                <p
                  className="text-[#A8B4C0]"
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.9375rem',
                    lineHeight: '1.6',
                  }}
                >
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Engagement Packages */}
      <section className="py-20 px-6 bg-[#0D1218]">
        <div className="mx-auto" style={{ maxWidth: 'var(--container-max)' }}>
          <h2
            className="text-[#E8F0F8] mb-12 text-center"
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: '1.75rem',
              fontWeight: 600,
            }}
          >
            Service Packages & Engagement Models
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {engagementPackages.map((pkg) => (
              <div
                key={pkg.name}
                className={`glass-panel rounded-2xl p-8 ${
                  pkg.popular ? 'border-2 border-[#00E6FF]' : ''
                }`}
              >
                {pkg.popular && (
                  <div className="mb-4">
                    <span
                      className="px-3 py-1 rounded-full glass-panel text-[#00E6FF]"
                      style={{ fontFamily: 'var(--font-body)', fontSize: '0.8125rem' }}
                    >
                      Most Popular
                    </span>
                  </div>
                )}
                <h3
                  className="text-[#E8F0F8] mb-1"
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: '1.5rem',
                    fontWeight: 600,
                  }}
                >
                  {pkg.name}
                </h3>
                <p
                  className="text-[#6B7685] mb-6"
                  style={{ fontFamily: 'var(--font-body)', fontSize: '0.9375rem' }}
                >
                  {pkg.subtitle}
                </p>
                <ul className="space-y-3">
                  {pkg.features.map((feature, index) => (
                    <li
                      key={index}
                      className="text-[#A8B4C0] flex gap-2"
                      style={{ fontFamily: 'var(--font-body)', fontSize: '0.9375rem' }}
                    >
                      <CheckCircle2 className="w-5 h-5 text-[#00E6FF] flex-shrink-0" strokeWidth={1.8} />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study Teasers */}
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
            Real Work Examples
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: 'Generative LLM Workflow Engine',
                problem: 'Multi-step reasoning for enterprise content generation',
                solution: 'Built LangGraph-based workflows with 92% accuracy',
                tech: 'Python, LangChain, LangGraph, FAISS',
              },
              {
                title: 'RAG Conversational Learning Assistant',
                problem: 'Personalized learning with contextual memory',
                solution: 'Reduced retrieval errors by 19%, achieved 95% satisfaction',
                tech: 'Flask, FAISS, LangChain, OpenAI',
              },
              {
                title: 'Face Recognition + Identity Reasoning',
                problem: 'Accurate identity verification with explanations',
                solution: 'Achieved 95% accuracy using FaceNet + LLM reasoning',
                tech: 'TensorFlow, FaceNet, OpenCV, Flask',
              },
              {
                title: 'Malware Detection System',
                problem: 'Behavioral malware detection with explainability',
                solution: '94% detection rate with LIME-based explanations',
                tech: 'PyTorch, Scikit-Learn, LIME, SHAP',
              },
            ].map((example, index) => (
              <div key={index} className="glass-panel rounded-2xl p-6 space-y-3">
                <h3
                  className="text-[#00E6FF]"
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: '1.125rem',
                    fontWeight: 600,
                  }}
                >
                  {example.title}
                </h3>
                <div className="space-y-2">
                  <p
                    className="text-[#A8B4C0]"
                    style={{ fontFamily: 'var(--font-body)', fontSize: '0.875rem' }}
                  >
                    <span className="text-[#6B7685]">Problem:</span> {example.problem}
                  </p>
                  <p
                    className="text-[#A8B4C0]"
                    style={{ fontFamily: 'var(--font-body)', fontSize: '0.875rem' }}
                  >
                    <span className="text-[#6B7685]">Solution:</span> {example.solution}
                  </p>
                  <p
                    className="text-[#6B7685]"
                    style={{ fontFamily: 'var(--font-body)', fontSize: '0.8125rem' }}
                  >
                    Tech: {example.tech}
                  </p>
                </div>
                <button
                  onClick={() => onNavigate('projects')}
                  className="text-[#00E6FF] hover:text-[#E8F0F8]"
                  style={{ fontFamily: 'var(--font-body)', fontSize: '0.875rem' }}
                >
                  View Full Case Study →
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Multi-Domain Impact Statement */}
      <section className="py-20 px-6 bg-[#0D1218]">
        <div className="mx-auto" style={{ maxWidth: 'var(--container-max)' }}>
          <div className="glass-panel rounded-3xl p-10 text-center">
            <h2
              className="text-[#E8F0F8] mb-6"
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '1.75rem',
                fontWeight: 600,
              }}
            >
              Multi-Domain Impact
            </h2>
            <p
              className="text-[#A8B4C0] max-w-4xl mx-auto"
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '1.125rem',
                lineHeight: '1.7',
              }}
            >
              Across AI engineering, backend development, cybersecurity ML, research workflows,
              educational technology, and intelligent agent design, I deliver end-to-end solutions that
              combine multi-domain expertise with clear technical reasoning, structured workflows, and
              reliable engineering practices.
            </p>
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
            Ready to Build Something Great?
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
              Start a Project with Me
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
              Download Full Resume
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
