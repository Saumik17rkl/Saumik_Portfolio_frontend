// src/components/ResumeDownload.tsx
import React, { useState, useEffect } from 'react';
import { Download, Briefcase, User, X, ExternalLink } from 'lucide-react';

type ResumeType = 'job' | 'it' | 'freelance';

interface ResumeOption {
  id: ResumeType;
  title: string;
  description: string;
  icon: React.ReactNode;
  fileName: string;
  lastUpdated: string;
}

export const ResumeDownload = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDownloading, setIsDownloading] = useState<ResumeType | null>(null);

  // Handle clicks outside the dropdown
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (isOpen && !target.closest('.resume-dropdown')) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen]);

  const resumeOptions: ResumeOption[] = [
    {
      id: 'job',
      title: 'Job Application',
      description: 'Optimized for job applications',
      icon: <User size={18} className="text-blue-400" />,
      fileName: 'Saumik_Chakraborty_Job_Resume.pdf',
      lastUpdated: 'Nov 2023',
    },
    {
      id: 'freelance',
      title: 'Freelance',
      description: 'Project-based experience',
      icon: <Briefcase size={18} className="text-purple-400" />,
      fileName: 'Saumik_Chakraborty_Freelance_Resume.pdf',
      lastUpdated: 'Nov 2023',
    },
  ];

  const handleDownload = async (resumeType: ResumeType) => {
    const resume = resumeOptions.find(r => r.id === resumeType);
    if (!resume) return;
    setIsDownloading(resumeType);

    try {
      const response = await fetch(`/resume/${resume.fileName}`);
      if (!response.ok) throw new Error('File not found');
      const blob = await response.blob();
      const url = window.URL.createObjectURL(new Blob([blob], { type: 'application/pdf' }));
      const link = document.createElement('a');
      link.href = url;
      link.download = resume.fileName;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error('Download failed:', error);
      alert('Failed to download the resume. Please try again.');
    } finally {
      setIsDownloading(null);
      setIsOpen(false);
    }
  };

  const handleView = (resumeType: ResumeType) => {
    const resume = resumeOptions.find(r => r.id === resumeType);
    if (!resume) return;
    window.open(`/resume/${resume.fileName}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="relative resume-dropdown">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="group flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-blue-500 to-cyan-400 hover:from-blue-600 hover:to-cyan-500 text-white rounded-full transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
      >
        <Download size={18} className="group-hover:animate-bounce" />
        <span className="font-medium">Download CV</span>
        <svg
          className={`w-4 h-4 ml-1 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-72 bg-gray-900/95 backdrop-blur-sm border border-white/10 rounded-xl shadow-2xl overflow-hidden z-50 animate-fadeIn">
          <div className="p-3 border-b border-white/10 flex justify-between items-center">
            <h4 className="font-semibold text-white">Select Resume Version</h4>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1 rounded-full hover:bg-white/10 text-gray-400 hover:text-white transition-colors"
            >
              <X size={18} />
            </button>
          </div>

          <div className="divide-y divide-white/5">
            {resumeOptions.map((option) => (
              <div
                key={option.id}
                className="p-3 hover:bg-white/5 transition-colors group"
              >
                <div>
                  <div className="flex items-start gap-3">
                    <div className="p-2 bg-white/5 rounded-lg mt-0.5">
                      {option.icon}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex justify-between items-start">
                        <h5 className="font-medium text-white truncate">{option.title}</h5>
                        <span className="text-xs bg-white/10 text-white/70 px-2 py-0.5 rounded-full">
                          {option.lastUpdated}
                        </span>
                      </div>
                      <p className="text-sm text-gray-400 mt-0.5">{option.description}</p>
                      <div className="flex gap-2 mt-2">
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            handleDownload(option.id);
                          }}
                          disabled={isDownloading === option.id}
                          className="flex-1 flex items-center justify-center gap-1.5 px-2.5 py-1.5 text-xs font-medium rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors disabled:opacity-50"
                        >
                          {isDownloading === option.id ? (
                            <>
                              <svg className="animate-spin -ml-1 mr-1 h-3 w-3 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
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
                          onClick={(e) => {
                            e.stopPropagation();
                            handleView(option.id);
                          }}
                          className="flex items-center gap-1.5 px-2.5 py-1.5 text-xs font-medium rounded-lg border border-white/10 hover:bg-white/5 text-white transition-colors"
                        >
                          <ExternalLink size={14} />
                          View
                        </button>
                      </div>
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
  );
};
