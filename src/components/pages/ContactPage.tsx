import React, { useState } from 'react';
import {
  Mail, Phone, Linkedin, Github, Globe, Award, Download, CheckCircle2,
  X, ExternalLink, User, Briefcase
} from 'lucide-react';
import { personalInfo, achievements, certifications } from '../../data/portfolio-data';

interface ContactPageProps {
  onNavigate: (page: string) => void;
}

type ResumeType = 'job' | 'freelance';

interface ResumeOption {
  id: ResumeType;
  title: string;
  description: string;
  icon: JSX.Element;
  fileName: string;
  lastUpdated: string;
}

export function ContactPage({ onNavigate }: ContactPageProps) {
  // Contact form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: '',
    budget: '',
    timeline: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  // Resume dropdown state
  const [isOpen, setIsOpen] = useState(false);
  const [isDownloading, setIsDownloading] = useState<ResumeType | null>(null);

  // Resume options
  const resumeOptions: ResumeOption[] = [
    {
      id: 'job',
      title: 'Job Application',
      description: 'ATS-friendly, optimized for hiring',
      icon: <User size={18} className="text-blue-400" />,
      fileName: 'Saumik_Chakraborty_Job_Resume.pdf',
      lastUpdated: 'Nov 2024',
    },
    {
      id: 'freelance',
      title: 'Freelance Resume',
      description: 'Client-ready project portfolio',
      icon: <Briefcase size={18} className="text-purple-400" />,
      fileName: 'Saumik_Chakraborty_Freelance_Resume.pdf',
      lastUpdated: 'Nov 2024',
    },
  ];

  // Download resume
  const handleDownload = (resumeType: ResumeType) => {
    const resume = resumeOptions.find(r => r.id === resumeType);
    if (!resume) return;
    setIsDownloading(resumeType);
    const resumePath = `/resume/${resume.fileName}`;
    const link = document.createElement('a');
    link.href = resumePath;
    link.download = resume.fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    setTimeout(() => {
      setIsDownloading(null);
      setIsOpen(false);
    }, 1000);
  };

  // View resume
  const handleView = (resumeType: ResumeType) => {
    const resume = resumeOptions.find(r => r.id === resumeType);
    if (!resume) return;
    window.open(`/resume/${resume.fileName}`, '_blank');
  };

  // Form input handler
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  // Submit form
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const requestData = {
        name: formData.name,
        email: formData.email,
        subject: `New message from ${formData.name} - ${formData.projectType || 'No project type'}`,
        message: `
          Project Type: ${formData.projectType}
          Budget: ${formData.budget}
          Timeline: ${formData.timeline}
          Message: ${formData.message}
        `,
      };
      const response = await fetch('https://saumik-s-portfolio.onrender.com/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(requestData),
      });
      const responseData = await response.json();
      if (!response.ok) throw new Error(responseData.message || 'Failed to send message');
      setSubmitted(true);
      setFormData({ name: '', email: '', projectType: '', budget: '', timeline: '', message: '' });
    } catch (error) {
      alert(error instanceof Error ? error.message : 'Failed to send message.');
    }
  };

  return (
    <div className="min-h-screen pt-[70px]">
      {/* Page Header */}
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
            Get in Touch
          </h1>
          <p
            className="text-[#A8B4C0] max-w-3xl mx-auto mb-6"
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '1.125rem',
              lineHeight: '1.6',
            }}
          >
            I'd love to collaborate, build intelligent systems, or discuss your project idea. Whether
            it's AI engineering, backend development, automation, or multi-domain R&D — feel free to
            reach out.
          </p>
          {/* Tag Chips */}
          <div className="flex flex-wrap gap-2 justify-center">
            {['AI Engineering', 'GenAI Workflows', 'RAG Pipelines', 'Backend APIs', 'Cybersecurity ML'].map(
              (tag) => (
                <span
                  key={tag}
                  className="px-3 py-1.5 glass-panel rounded-full text-[#A8B4C0]"
                  style={{ fontFamily: 'var(--font-body)', fontSize: '0.875rem' }}
                >
                  {tag}
                </span>
              )
            )}
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 px-6">
        <div className="mx-auto" style={{ maxWidth: 'var(--container-max)' }}>
          <h2
            className="text-[#E8F0F8] mb-8"
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: '1.75rem',
              fontWeight: 600,
            }}
          >
            Contact Information
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            <a
              href={`mailto:${personalInfo.email}`}
              className="glass-panel rounded-2xl p-6 flex items-start gap-4 hover:bg-[rgba(255,255,255,0.08)]"
            >
              <div className="p-3 glass-panel rounded-xl">
                <Mail className="w-5 h-5 text-[#00E6FF]" strokeWidth={1.8} />
              </div>
              <div>
                <p
                  className="text-[#6B7685] mb-1"
                  style={{ fontFamily: 'var(--font-body)', fontSize: '0.875rem' }}
                >
                  Email
                </p>
                <p
                  className="text-[#E8F0F8]"
                  style={{ fontFamily: 'var(--font-body)', fontSize: '0.9375rem' }}
                >
                  {personalInfo.email}
                </p>
              </div>
            </a>
            <a
              href={`tel:${personalInfo.phone}`}
              className="glass-panel rounded-2xl p-6 flex items-start gap-4 hover:bg-[rgba(255,255,255,0.08)]"
            >
              <div className="p-3 glass-panel rounded-xl">
                <Phone className="w-5 h-5 text-[#00E6FF]" strokeWidth={1.8} />
              </div>
              <div>
                <p
                  className="text-[#6B7685] mb-1"
                  style={{ fontFamily: 'var(--font-body)', fontSize: '0.875rem' }}
                >
                  Phone
                </p>
                <p
                  className="text-[#E8F0F8]"
                  style={{ fontFamily: 'var(--font-body)', fontSize: '0.9375rem' }}
                >
                  {personalInfo.phone}
                </p>
              </div>
            </a>
            <a
              href={`https://${personalInfo.linkedin}`}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-panel rounded-2xl p-6 flex items-start gap-4 hover:bg-[rgba(255,255,255,0.08)]"
            >
              <div className="p-3 glass-panel rounded-xl">
                <Linkedin className="w-5 h-5 text-[#00E6FF]" strokeWidth={1.8} />
              </div>
              <div>
                <p
                  className="text-[#6B7685] mb-1"
                  style={{ fontFamily: 'var(--font-body)', fontSize: '0.875rem' }}
                >
                  LinkedIn
                </p>
                <p
                  className="text-[#E8F0F8]"
                  style={{ fontFamily: 'var(--font-body)', fontSize: '0.9375rem' }}
                >
                  Connect on LinkedIn
                </p>
              </div>
            </a>
            <a
              href={`https://${personalInfo.github}`}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-panel rounded-2xl p-6 flex items-start gap-4 hover:bg-[rgba(255,255,255,0.08)]"
            >
              <div className="p-3 glass-panel rounded-xl">
                <Github className="w-5 h-5 text-[#00E6FF]" strokeWidth={1.8} />
              </div>
              <div>
                <p
                  className="text-[#6B7685] mb-1"
                  style={{ fontFamily: 'var(--font-body)', fontSize: '0.875rem' }}
                >
                  GitHub
                </p>
                <p
                  className="text-[#E8F0F8]"
                  style={{ fontFamily: 'var(--font-body)', fontSize: '0.9375rem' }}
                >
                  View GitHub Profile
                </p>
              </div>
            </a>
            <a
              href={`https://${personalInfo.portfolio}`}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-panel rounded-2xl p-6 flex items-start gap-4 hover:bg-[rgba(255,255,255,0.08)]"
            >
              <div className="p-3 glass-panel rounded-xl">
                <Globe className="w-5 h-5 text-[#00E6FF]" strokeWidth={1.8} />
              </div>
              <div>
                <p
                  className="text-[#6B7685] mb-1"
                  style={{ fontFamily: 'var(--font-body)', fontSize: '0.875rem' }}
                >
                  Portfolio
                </p>
                <p
                  className="text-[#E8F0F8]"
                  style={{ fontFamily: 'var(--font-body)', fontSize: '0.9375rem' }}
                >
                  {personalInfo.portfolio}
                </p>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* What I Can Help You With */}
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
            What I Can Help You With
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: 'AI Engineering',
                items: ['GenAI workflows', 'Prompt engineering', 'LangChain / LangGraph', 'Multi-step reasoning', 'Conversational AI'],
              },
              {
                title: 'Backend Engineering',
                items: ['Python', 'Flask', 'FastAPI', 'REST APIs', 'Microservices', 'Automation scripts'],
              },
              {
                title: 'Cybersecurity ML',
                items: ['Anomaly detection', 'Packet inspection', 'Malware detection', 'Threat analysis'],
              },
              {
                title: 'Education AI Tools',
                items: ['RAG learning assistants', 'Multilingual translators', 'Explanation systems', 'Concept simplification'],
              },
              {
                title: 'Research & Analysis',
                items: ['XAI', 'Long-context optimization', 'Knowledge routing', 'Evaluation pipelines'],
              },
              {
                title: 'Intelligent Agents',
                items: ['Voice agents', 'Autonomous systems', 'Task orchestration', 'Real-time decision making'],
              },
            ].map((category) => (
              <div key={category.title} className="glass-panel rounded-2xl p-6">
                <h3
                  className="text-[#00E6FF] mb-4"
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: '1.125rem',
                    fontWeight: 600,
                  }}
                >
                  {category.title}
                </h3>
                <ul className="space-y-2">
                  {category.items.map((item) => (
                    <li
                      key={item}
                      className="text-[#A8B4C0] flex gap-2"
                      style={{ fontFamily: 'var(--font-body)', fontSize: '0.875rem' }}
                    >
                      <span className="text-[#00E6FF] mt-1">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="mt-8 glass-panel rounded-2xl p-6">
            <p
              className="text-[#A8B4C0] text-center"
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '1rem',
                lineHeight: '1.6',
              }}
            >
              Being multi-domain allows me to integrate AI + backend + security + education + research
              into complete intelligent systems.
            </p>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
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
            Achievements & Certifications
          </h2>
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {achievements.slice(0, 4).map((achievement) => (
              <div key={achievement.id} className="glass-panel rounded-2xl p-6 flex items-start gap-4">
                <div className="p-3 glass-panel rounded-xl">
                  <Award className="w-5 h-5 text-[#00E6FF]" strokeWidth={1.8} />
                </div>
                <div>
                  <h3
                    className="text-[#E8F0F8] mb-1"
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
                    style={{ fontFamily: 'var(--font-body)', fontSize: '0.875rem' }}
                  >
                    {achievement.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="glass-panel rounded-2xl p-6">
            <h3
              className="text-[#00E6FF] mb-4"
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '1.125rem',
                fontWeight: 600,
              }}
            >
              Professional Certifications
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
              {certifications.slice(0, 6).map((cert) => (
                <div
                  key={cert}
                  className="px-3 py-2 glass-panel rounded text-[#A8B4C0]"
                  style={{ fontFamily: 'var(--font-body)', fontSize: '0.875rem' }}
                >
                  {cert}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-6">
        <div className="mx-auto text-center" style={{ maxWidth: 'var(--container-max)' }}>
          <h2
            className="text-[#E8F0F8] mb-4"
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: '1.75rem',
              fontWeight: 600,
            }}
          >
            Ready to Start Your Project?
          </h2>
          <p
            className="text-[#A8B4C0] mb-8"
            style={{ fontFamily: 'var(--font-body)', fontSize: '0.9375rem' }}
          >
            I typically reply within 12–24 hours.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <button
              onClick={() => {
                window.scrollTo({ top: 0, behavior: 'auto' });
              }}
              className="px-7 py-3.5 rounded-full text-[#0A0F14]"
              style={{
                background: 'linear-gradient(135deg, #00E6FF 0%, #0077FF 100%)',
                fontFamily: 'var(--font-body)',
                fontWeight: 500,
                letterSpacing: '0.3px',
              }}
            >
              Send Me a Message
            </button>
            {/* Resume Dropdown */}
            <div className="relative resume-dropdown">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="group flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-blue-500 to-cyan-400 hover:from-blue-600 hover:to-cyan-500 text-white rounded-full transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
              >
                <Download size={18} className="group-hover:animate-bounce" />
                <span className="font-medium">Download Resume</span>
                <svg className={`w-4 h-4 ml-1 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {isOpen && (
                <div className="absolute right-0 mt-2 w-72 bg-gray-900/95 backdrop-blur-sm border border-white/10 rounded-xl shadow-2xl overflow-hidden z-50 animate-fadeIn">
                  <div className="p-3 border-b border-white/10 flex justify-between items-center">
                    <h4 className="font-semibold text-white">Select Resume Version</h4>
                    <button onClick={() => setIsOpen(false)} className="p-1 rounded-full hover:bg-white/10 text-gray-400 hover:text-white transition-colors">
                      <X size={18} />
                    </button>
                  </div>
                  <div className="divide-y divide-white/5">
                    {resumeOptions.map((option) => (
                      <div key={option.id} className="p-3 hover:bg-white/5 transition-colors group">
                        <div className="flex items-start gap-3">
                          <div className="p-2 bg-white/5 rounded-lg mt-0.5">{option.icon}</div>
                          <div className="flex-1 min-w-0">
                            <div className="flex justify-between items-start">
                              <h5 className="font-medium text-white truncate">{option.title}</h5>
                              <span className="text-xs bg-white/10 text-white/70 px-2 py-0.5 rounded-full">{option.lastUpdated}</span>
                            </div>
                            <p className="text-sm text-gray-400 mt-0.5">{option.description}</p>
                            <div className="flex gap-2 mt-2">
                              <button
                                onClick={(e) => { e.stopPropagation(); handleDownload(option.id); }}
                                disabled={isDownloading === option.id}
                                className="flex-1 flex items-center justify-center gap-1.5 px-2.5 py-1.5 text-xs font-medium rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors disabled:opacity-50"
                              >
                                {isDownloading === option.id ? (
                                  <>
                                    <svg className="animate-spin -ml-1 mr-1 h-3 w-3 text-white" viewBox="0 0 24 24">
                                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                    </svg>
                                    Downloading...
                                  </>
                                ) : (
                                  <>
                                    <Download size={14} />
                                    Download
                                  </>
                                )}
                              </button>
                              <button
                                onClick={(e) => { e.stopPropagation(); handleView(option.id); }}
                                className="flex items-center gap-1.5 px-2.5 py-1.5 text-xs font-medium rounded-lg border border-white/10 hover:bg-white/5 text-white transition-colors"
                              >
                                <ExternalLink size={14} />
                                View
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="p-3 bg-black/20 border-t border-white/5">
                    <p className="text-xs text-gray-400 text-center">
                      Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
