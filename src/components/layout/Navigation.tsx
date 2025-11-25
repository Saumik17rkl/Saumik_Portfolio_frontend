import React from 'react';
import { Menu, X, Settings } from 'lucide-react';
import { personalInfo } from '../../data/portfolio-data';

interface NavigationProps {
  currentPage: string;
  onNavigate: (page: string) => void;
  onToggleControls: () => void;
}

export function Navigation({ currentPage, onNavigate, onToggleControls }: NavigationProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'services', label: 'Services' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' }
  ];

  const handleNavigate = (page: string) => {
    onNavigate(page);
    setMobileMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-panel" style={{ height: '70px' }}>
      <div className="mx-auto px-6 h-full" style={{ maxWidth: 'var(--container-max)' }}>
        <div className="flex items-center justify-between h-full">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <img 
              src="/images/image.png" 
              alt="Logo" 
              className="w-10 h-10 rounded-full object-cover border-2 border-[#00E6FF]"
            />
            <button
              onClick={() => handleNavigate('home')}
              className="text-[#E8F0F8] hover:text-[#00E6FF] text-xl font-medium"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              {personalInfo.name}
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavigate(link.id)}
                className={`${
                  currentPage === link.id ? 'text-[#00E6FF]' : 'text-[#A8B4C0]'
                } hover:text-[#00E6FF]`}
                style={{ fontFamily: 'var(--font-body)' }}
              >
                {link.label}
              </button>
            ))}
            <a
              href={personalInfo.resumePath}
              download
              className="text-[#A8B4C0] hover:text-[#00E6FF]"
              style={{ fontFamily: 'var(--font-body)' }}
            >
              Resume
            </a>
            <button
              onClick={onToggleControls}
              className="p-2 rounded-lg glass-panel hover:bg-[rgba(255,255,255,0.08)] text-[#A8B4C0] hover:text-[#00E6FF]"
              aria-label="Toggle screen controls"
            >
              <Settings className="w-5 h-5" strokeWidth={1.8} />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-[#A8B4C0] hover:text-[#00E6FF]"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" strokeWidth={1.8} />
            ) : (
              <Menu className="w-6 h-6" strokeWidth={1.8} />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-[70px] left-0 right-0 glass-panel border-t border-[rgba(255,255,255,0.12)] p-6">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => handleNavigate(link.id)}
                  className={`text-left ${
                    currentPage === link.id ? 'text-[#00E6FF]' : 'text-[#A8B4C0]'
                  } hover:text-[#00E6FF]`}
                  style={{ fontFamily: 'var(--font-body)' }}
                >
                  {link.label}
                </button>
              ))}
              <a
                href={personalInfo.resumePath}
                download
                className="text-left text-[#A8B4C0] hover:text-[#00E6FF]"
                style={{ fontFamily: 'var(--font-body)' }}
              >
                Resume
              </a>
              <button
                onClick={onToggleControls}
                className="flex items-center gap-2 text-left text-[#A8B4C0] hover:text-[#00E6FF]"
                style={{ fontFamily: 'var(--font-body)' }}
              >
                <Settings className="w-5 h-5" strokeWidth={1.8} />
                Screen Controls
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
    
  );
}
