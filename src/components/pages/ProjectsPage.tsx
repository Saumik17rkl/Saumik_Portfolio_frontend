import React, { useState } from 'react';
import { Filter, Grid, List, ExternalLink, Github } from 'lucide-react';
import { projects } from '../../data/portfolio-data';

interface ProjectsPageProps {
  onNavigate: (page: string) => void;
}

export function ProjectsPage({ onNavigate }: ProjectsPageProps) {
  const [filter, setFilter] = useState<string>('All');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [selectedProject, setSelectedProject] = useState<string | null>(null);

  const categories = ['All', 'RAG', 'GenAI', 'Backend', 'Security', 'Research', 'Education'];

  const filteredProjects =
    filter === 'All'
      ? projects
      : projects.filter((p) => p.category.includes(filter));

  const selectedProjectData = projects.find((p) => p.id === selectedProject);

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
            Selected Projects — Deep Dives & Impact
          </h1>
          <p
            className="text-[#A8B4C0] max-w-3xl mx-auto"
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '1.125rem',
              lineHeight: '1.6',
            }}
          >
            Case studies showing problem framing, technical design, implementation, and measurable
            results across AI, backend, security, and education domains.
          </p>
        </div>
      </section>

      {/* Filters & View Controls */}
      <section className="py-8 px-6 border-b border-[rgba(255,255,255,0.12)]">
        <div className="mx-auto" style={{ maxWidth: 'var(--container-max)' }}>
          <div className="flex flex-col md:flex-row gap-6 items-center justify-between">
            {/* Filter Chips */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setFilter(category)}
                  className={`px-4 py-2 rounded-full glass-panel ${
                    filter === category
                      ? 'border-[#00E6FF] text-[#00E6FF]'
                      : 'border-[rgba(255,255,255,0.12)] text-[#A8B4C0]'
                  } hover:bg-[rgba(255,255,255,0.08)]`}
                  style={{ fontFamily: 'var(--font-body)', fontSize: '0.875rem' }}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* View Controls */}
            <div className="flex gap-2">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded-lg glass-panel ${
                  viewMode === 'grid' ? 'text-[#00E6FF]' : 'text-[#A8B4C0]'
                } hover:bg-[rgba(255,255,255,0.08)]`}
                aria-label="Grid view"
              >
                <Grid className="w-5 h-5" strokeWidth={1.8} />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 rounded-lg glass-panel ${
                  viewMode === 'list' ? 'text-[#00E6FF]' : 'text-[#A8B4C0]'
                } hover:bg-[rgba(255,255,255,0.08)]`}
                aria-label="List view"
              >
                <List className="w-5 h-5" strokeWidth={1.8} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid/List */}
      <section className="py-20 px-6">
        <div className="mx-auto" style={{ maxWidth: 'var(--container-max)' }}>
          <div className={viewMode === 'grid' ? 'grid md:grid-cols-2 gap-6' : 'space-y-6'}>
            {filteredProjects.map((project) => (
              <div key={project.id} className="glass-panel rounded-2xl p-6 space-y-4">
                <div>
                  <h3
                    className="text-[#E8F0F8] mb-2"
                    style={{
                      fontFamily: 'var(--font-heading)',
                      fontSize: '1.25rem',
                      fontWeight: 600,
                    }}
                  >
                    {project.title}
                  </h3>
                  <p
                    className="text-[#A8B4C0]"
                    style={{
                      fontFamily: 'var(--font-body)',
                      fontSize: '0.9375rem',
                      lineHeight: '1.6',
                    }}
                  >
                    {project.summary}
                  </p>
                </div>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                  {project.techStack.slice(0, 5).map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 glass-panel rounded text-[#6B7685]"
                      style={{ fontFamily: 'var(--font-body)', fontSize: '0.75rem' }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Metrics */}
                {project.metrics && project.metrics.length > 0 && (
                  <div className="flex flex-wrap gap-3">
                    {project.metrics.slice(0, 3).map((metric, index) => (
                      <div
                        key={index}
                        className="px-3 py-1.5 glass-panel rounded-lg border border-[rgba(0,230,255,0.3)]"
                      >
                        <span
                          className="text-[#00E6FF]"
                          style={{ fontFamily: 'var(--font-body)', fontSize: '0.8125rem', fontWeight: 600 }}
                        >
                          {metric.value}
                        </span>
                        <span
                          className="text-[#6B7685] ml-1"
                          style={{ fontFamily: 'var(--font-body)', fontSize: '0.75rem' }}
                        >
                          {metric.label}
                        </span>
                      </div>
                    ))}
                  </div>
                )}

                {/* Actions */}
                <div className="flex gap-3 pt-2">
                  <button
                    onClick={() => setSelectedProject(project.id)}
                    className="flex-1 px-4 py-2 glass-panel rounded-lg hover:bg-[rgba(255,255,255,0.08)] text-[#00E6FF]"
                    style={{ fontFamily: 'var(--font-body)', fontSize: '0.9375rem' }}
                  >
                    View Case Study
                  </button>
                  {project.repo && (
                    <a
                      href={project.repo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 glass-panel rounded-lg hover:bg-[rgba(255,255,255,0.08)] text-[#A8B4C0]"
                      aria-label="GitHub repository"
                    >
                      <Github className="w-5 h-5" strokeWidth={1.8} />
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-12">
              <p
                className="text-[#6B7685]"
                style={{ fontFamily: 'var(--font-body)', fontSize: '1rem' }}
              >
                No projects found in this category.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Case Study Modal */}
      {selectedProject && selectedProjectData && (
        <div className="fixed inset-0 z-50 flex items-start justify-center overflow-y-auto p-6 bg-[rgba(0,0,0,0.8)]">
          <div
            className="glass-panel rounded-3xl p-8 w-full max-w-4xl my-8"
            style={{ maxHeight: 'calc(100vh - 4rem)' }}
          >
            {/* Header */}
            <div className="flex items-start justify-between mb-6">
              <div>
                <h2
                  className="text-[#E8F0F8] mb-2"
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: '2rem',
                    fontWeight: 600,
                  }}
                >
                  {selectedProjectData.title}
                </h2>
                <p
                  className="text-[#A8B4C0]"
                  style={{ fontFamily: 'var(--font-body)', fontSize: '1rem' }}
                >
                  {selectedProjectData.summary}
                </p>
              </div>
              <button
                onClick={() => setSelectedProject(null)}
                className="text-[#A8B4C0] hover:text-[#00E6FF] text-2xl"
                aria-label="Close modal"
              >
                ×
              </button>
            </div>

            {/* Metrics */}
            {selectedProjectData.metrics && selectedProjectData.metrics.length > 0 && (
              <div className="flex flex-wrap gap-4 mb-8">
                {selectedProjectData.metrics.map((metric, index) => (
                  <div
                    key={index}
                    className="glass-panel rounded-xl p-4 border border-[rgba(0,230,255,0.3)]"
                  >
                    <p
                      className="text-[#00E6FF] mb-1"
                      style={{
                        fontFamily: 'var(--font-heading)',
                        fontSize: '1.5rem',
                        fontWeight: 700,
                      }}
                    >
                      {metric.value}
                    </p>
                    <p
                      className="text-[#6B7685]"
                      style={{ fontFamily: 'var(--font-body)', fontSize: '0.875rem' }}
                    >
                      {metric.label}
                    </p>
                  </div>
                ))}
              </div>
            )}

            <div className="space-y-8 overflow-y-auto" style={{ maxHeight: '60vh' }}>
              {/* Problem Statement */}
              <div>
                <h3
                  className="text-[#00E6FF] mb-3"
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: '1.25rem',
                    fontWeight: 600,
                  }}
                >
                  Problem Statement
                </h3>
                <p
                  className="text-[#A8B4C0]"
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.9375rem',
                    lineHeight: '1.7',
                  }}
                >
                  {selectedProjectData.problem}
                </p>
              </div>

              {/* Role */}
              <div>
                <h3
                  className="text-[#00E6FF] mb-3"
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: '1.25rem',
                    fontWeight: 600,
                  }}
                >
                  My Role
                </h3>
                <p
                  className="text-[#A8B4C0]"
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.9375rem',
                    lineHeight: '1.7',
                  }}
                >
                  {selectedProjectData.role}
                </p>
              </div>

              {/* Architecture */}
              {selectedProjectData.architecture && (
                <div>
                  <h3
                    className="text-[#00E6FF] mb-3"
                    style={{
                      fontFamily: 'var(--font-heading)',
                      fontSize: '1.25rem',
                      fontWeight: 600,
                    }}
                  >
                    Architecture Overview
                  </h3>
                  <div className="glass-panel rounded-xl p-4">
                    <p
                      className="text-[#A8B4C0] font-mono"
                      style={{ fontSize: '0.875rem', lineHeight: '1.8' }}
                    >
                      {selectedProjectData.architecture}
                    </p>
                  </div>
                </div>
              )}

              {/* Approach */}
              {selectedProjectData.approach && (
                <div>
                  <h3
                    className="text-[#00E6FF] mb-3"
                    style={{
                      fontFamily: 'var(--font-heading)',
                      fontSize: '1.25rem',
                      fontWeight: 600,
                    }}
                  >
                    Approach & Implementation
                  </h3>
                  <div
                    className="text-[#A8B4C0] prose-invert space-y-4"
                    style={{
                      fontFamily: 'var(--font-body)',
                      fontSize: '0.9375rem',
                      lineHeight: '1.7',
                    }}
                  >
                    {selectedProjectData.approach.split('\n\n').map((paragraph, index) => (
                      <p key={index}>{paragraph}</p>
                    ))}
                  </div>
                </div>
              )}

              {/* Evaluation */}
              {selectedProjectData.evaluation && (
                <div>
                  <h3
                    className="text-[#00E6FF] mb-3"
                    style={{
                      fontFamily: 'var(--font-heading)',
                      fontSize: '1.25rem',
                      fontWeight: 600,
                    }}
                  >
                    Evaluation & Metrics
                  </h3>
                  <p
                    className="text-[#A8B4C0]"
                    style={{
                      fontFamily: 'var(--font-body)',
                      fontSize: '0.9375rem',
                      lineHeight: '1.7',
                    }}
                  >
                    {selectedProjectData.evaluation}
                  </p>
                </div>
              )}

              {/* Reproduction Steps */}
              {selectedProjectData.reproduction && (
                <div>
                  <h3
                    className="text-[#00E6FF] mb-3"
                    style={{
                      fontFamily: 'var(--font-heading)',
                      fontSize: '1.25rem',
                      fontWeight: 600,
                    }}
                  >
                    How to Reproduce / Try It
                  </h3>
                  <div className="glass-panel rounded-xl p-4">
                    <ol className="space-y-2">
                      {selectedProjectData.reproduction.map((step, index) => (
                        <li
                          key={index}
                          className="text-[#A8B4C0] flex gap-3"
                          style={{ fontFamily: 'var(--font-body)', fontSize: '0.875rem' }}
                        >
                          <span className="text-[#00E6FF] font-mono">{index + 1}.</span>
                          <span>{step}</span>
                        </li>
                      ))}
                    </ol>
                  </div>
                </div>
              )}

              {/* Tech Stack */}
              <div>
                <h3
                  className="text-[#00E6FF] mb-3"
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: '1.25rem',
                    fontWeight: 600,
                  }}
                >
                  Tech Stack
                </h3>
                <div className="flex flex-wrap gap-2">
                  {selectedProjectData.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1.5 glass-panel rounded-lg text-[#E8F0F8]"
                      style={{ fontFamily: 'var(--font-body)', fontSize: '0.875rem' }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Links */}
              <div className="flex gap-4 pt-4">
                {selectedProjectData.repo && (
                  <a
                    href={selectedProjectData.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 glass-panel rounded-lg hover:bg-[rgba(255,255,255,0.08)] text-[#00E6FF]"
                    style={{ fontFamily: 'var(--font-body)', fontSize: '0.9375rem' }}
                  >
                    <Github className="w-4 h-4" strokeWidth={1.8} />
                    View Repository
                  </a>
                )}
                {selectedProjectData.demo && (
                  <a
                    href={selectedProjectData.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 glass-panel rounded-lg hover:bg-[rgba(255,255,255,0.08)] text-[#00E6FF]"
                    style={{ fontFamily: 'var(--font-body)', fontSize: '0.9375rem' }}
                  >
                    <ExternalLink className="w-4 h-4" strokeWidth={1.8} />
                    Live Demo
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
