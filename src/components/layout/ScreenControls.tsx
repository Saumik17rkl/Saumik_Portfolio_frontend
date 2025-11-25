import React, { useEffect, useState } from 'react';
import { X } from 'lucide-react';

interface ScreenControlsProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ScreenControls({ isOpen, onClose }: ScreenControlsProps) {
  const [layout, setLayout] = useState<'compact' | 'comfortable' | 'wide'>('comfortable');
  const [fontSize, setFontSize] = useState<'small' | 'normal' | 'large'>('normal');
  const [accentMode, setAccentMode] = useState<'on' | 'off'>('on');
  const [highContrast, setHighContrast] = useState<'on' | 'off'>('off');

  // Load preferences from localStorage
  useEffect(() => {
    const savedLayout = localStorage.getItem('layout') as 'compact' | 'comfortable' | 'wide' | null;
    const savedFontSize = localStorage.getItem('fontSize') as 'small' | 'normal' | 'large' | null;
    const savedAccentMode = localStorage.getItem('accentMode') as 'on' | 'off' | null;
    const savedHighContrast = localStorage.getItem('highContrast') as 'on' | 'off' | null;

    if (savedLayout) setLayout(savedLayout);
    if (savedFontSize) setFontSize(savedFontSize);
    if (savedAccentMode) setAccentMode(savedAccentMode);
    if (savedHighContrast) setHighContrast(savedHighContrast);
  }, []);

  // Apply preferences
  useEffect(() => {
    const root = document.documentElement;
    
    // Remove all layout classes
    root.classList.remove('layout-compact', 'layout-comfortable', 'layout-wide');
    root.classList.add(`layout-${layout}`);
    
    // Remove all font size classes
    root.classList.remove('font-size-small', 'font-size-normal', 'font-size-large');
    root.classList.add(`font-size-${fontSize}`);
    
    // Apply accent mode
    if (accentMode === 'off') {
      root.classList.add('accent-off');
    } else {
      root.classList.remove('accent-off');
    }
    
    // Apply high contrast
    if (highContrast === 'on') {
      root.classList.add('high-contrast');
    } else {
      root.classList.remove('high-contrast');
    }

    // Save to localStorage
    localStorage.setItem('layout', layout);
    localStorage.setItem('fontSize', fontSize);
    localStorage.setItem('accentMode', accentMode);
    localStorage.setItem('highContrast', highContrast);
  }, [layout, fontSize, accentMode, highContrast]);

  if (!isOpen) return null;

  return (
    <div className="fixed top-20 right-6 z-40 glass-panel rounded-2xl p-6 w-80 max-w-[calc(100vw-3rem)]">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-[#E8F0F8]" style={{ fontFamily: 'var(--font-heading)' }}>
          Screen Controls
        </h3>
        <button
          onClick={onClose}
          className="p-1 text-[#A8B4C0] hover:text-[#00E6FF]"
          aria-label="Close controls"
        >
          <X className="w-5 h-5" strokeWidth={1.8} />
        </button>
      </div>

      <div className="space-y-6">
        {/* Layout */}
        <div>
          <label className="block text-[#A8B4C0] mb-3" style={{ fontFamily: 'var(--font-body)' }}>
            Layout
          </label>
          <div className="flex gap-2">
            {(['compact', 'comfortable', 'wide'] as const).map((option) => (
              <button
                key={option}
                onClick={() => setLayout(option)}
                className={`flex-1 py-2 px-3 rounded-lg glass-panel ${
                  layout === option
                    ? 'border-[#00E6FF] text-[#00E6FF]'
                    : 'border-[rgba(255,255,255,0.12)] text-[#A8B4C0]'
                }`}
                style={{ fontFamily: 'var(--font-body)' }}
              >
                {option.charAt(0).toUpperCase() + option.slice(1)}
              </button>
            ))}
          </div>
        </div>

        {/* Font Size */}
        <div>
          <label className="block text-[#A8B4C0] mb-3" style={{ fontFamily: 'var(--font-body)' }}>
            Font Size
          </label>
          <div className="flex gap-2">
            {(['small', 'normal', 'large'] as const).map((option) => (
              <button
                key={option}
                onClick={() => setFontSize(option)}
                className={`flex-1 py-2 px-3 rounded-lg glass-panel ${
                  fontSize === option
                    ? 'border-[#00E6FF] text-[#00E6FF]'
                    : 'border-[rgba(255,255,255,0.12)] text-[#A8B4C0]'
                }`}
                style={{ fontFamily: 'var(--font-body)' }}
              >
                {option.charAt(0).toUpperCase() + option.slice(1)}
              </button>
            ))}
          </div>
        </div>

        {/* Accent Mode */}
        <div>
          <label className="block text-[#A8B4C0] mb-3" style={{ fontFamily: 'var(--font-body)' }}>
            Accent Mode
          </label>
          <div className="flex gap-2">
            {(['on', 'off'] as const).map((option) => (
              <button
                key={option}
                onClick={() => setAccentMode(option)}
                className={`flex-1 py-2 px-3 rounded-lg glass-panel ${
                  accentMode === option
                    ? 'border-[#00E6FF] text-[#00E6FF]'
                    : 'border-[rgba(255,255,255,0.12)] text-[#A8B4C0]'
                }`}
                style={{ fontFamily: 'var(--font-body)' }}
              >
                Neon {option === 'on' ? 'On' : 'Off'}
              </button>
            ))}
          </div>
        </div>

        {/* High Contrast */}
        <div>
          <label className="block text-[#A8B4C0] mb-3" style={{ fontFamily: 'var(--font-body)' }}>
            High Contrast
          </label>
          <div className="flex gap-2">
            {(['off', 'on'] as const).map((option) => (
              <button
                key={option}
                onClick={() => setHighContrast(option)}
                className={`flex-1 py-2 px-3 rounded-lg glass-panel ${
                  highContrast === option
                    ? 'border-[#00E6FF] text-[#00E6FF]'
                    : 'border-[rgba(255,255,255,0.12)] text-[#A8B4C0]'
                }`}
                style={{ fontFamily: 'var(--font-body)' }}
              >
                {option === 'on' ? 'On' : 'Off'}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
