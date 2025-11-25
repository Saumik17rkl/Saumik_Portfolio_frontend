import React from 'react';
import { Github, Linkedin, Mail, FileText } from 'lucide-react';
import { personalInfo } from '../../data/portfolio-data';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: Github,
      label: 'GitHub',
      href: `https://${personalInfo.github}`,
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: `https://${personalInfo.linkedin}`,
    },
    {
      icon: Mail,
      label: 'Email',
      href: `mailto:${personalInfo.email}`,
    },
    {
      icon: FileText,
      label: 'Resume',
      href: personalInfo.resumePath,
      download: true,
    },
  ];

  return (
    <footer className="border-t border-[rgba(255,255,255,0.12)] py-8 mt-20">
      <div className="mx-auto px-6" style={{ maxWidth: 'var(--container-max)' }}>
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Copyright */}
          <p className="text-[#6B7685]" style={{ fontFamily: 'var(--font-body)' }}>
            © {currentYear} {personalInfo.name}
          </p>

          {/* Social Links */}
          <div className="flex items-center gap-6">
            {socialLinks.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.label}
                  href={link.href}
                  download={link.download}
                  className="text-[#A8B4C0] hover:text-[#00E6FF]"
                  aria-label={link.label}
                  target={link.download ? undefined : '_blank'}
                  rel={link.download ? undefined : 'noopener noreferrer'}
                >
                  <Icon className="w-5 h-5" strokeWidth={1.8} />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
}
