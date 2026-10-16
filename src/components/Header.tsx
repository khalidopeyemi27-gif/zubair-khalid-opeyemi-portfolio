import React, { useState, useEffect } from 'react';
import { Cpu, Menu, X, Github, Linkedin, FileText } from 'lucide-react';
import { PersonalProfileLinks } from '../data/portfolioData';

interface HeaderProps {
  onSelectProject: (projectId: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ onSelectProject }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Close mobile navigation drawer on Escape key press
  useEffect(() => {
    if (!mobileMenuOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileMenuOpen]);

  return (
    <header className="sticky top-0 z-40 bg-slate-950/90 backdrop-blur-md border-b border-slate-800 transition-all">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          {/* Zone 1: Name & Brand */}
          <a href="#top" className="flex items-center gap-2.5 text-base font-bold text-white tracking-tight hover:text-teal-400 transition-colors">
            <span className="p-1.5 rounded bg-teal-500/10 border border-teal-500/20 text-teal-400">
              <Cpu className="w-4 h-4" />
            </span>
            <span className="font-mono text-slate-100">ZUBAIR KHALID OPEYEMI</span>
          </a>

          {/* Zone 2: Navigation Links */}
          <nav className="hidden md:flex items-center gap-6 text-xs font-mono font-medium text-slate-300">
            <a href="#work" className="hover:text-teal-400 transition-colors">Selected Work</a>
            <a href="#other-projects" className="hover:text-teal-400 transition-colors">Other Projects</a>
            <a href="#about" className="hover:text-teal-400 transition-colors">About</a>
            <a href="#skills" className="hover:text-teal-400 transition-colors">Skills</a>
            <a href="#experience" className="hover:text-teal-400 transition-colors">Experience</a>
            <a href="#contact" className="hover:text-teal-400 transition-colors">Contact</a>
          </nav>

          {/* Zone 3: External Links / Quick Actions */}
          <div className="hidden sm:flex items-center gap-2">
            <a
              href={PersonalProfileLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              title="GitHub Profile"
              className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700 transition-colors"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={PersonalProfileLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              title="LinkedIn Profile"
              className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700 transition-colors"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href={PersonalProfileLinks.resume}
              aria-label="Request Resume via Email"
              title="Request Resume (Opens email draft to Khalidopeyemi27@gmail.com)"
              className="px-3 py-1.5 rounded-lg bg-teal-400 hover:bg-teal-300 text-slate-950 font-mono font-semibold text-xs transition-colors flex items-center gap-1.5 focus:outline-none focus:ring-2 focus:ring-teal-400 focus:ring-offset-2 focus:ring-offset-slate-950"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Resume (Request)</span>
            </a>
          </div>

          {/* Mobile Toggle */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 min-h-[44px] min-w-[44px] text-slate-400 hover:text-white rounded-lg hover:bg-slate-900 transition-colors inline-flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-teal-400"
              aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-slate-800 py-4 px-2 space-y-2 bg-slate-950 text-xs font-mono">
            <a
              href="#work"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2.5 text-slate-200 hover:bg-slate-900 rounded"
            >
              Selected Work
            </a>
            <a
              href="#other-projects"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2.5 text-slate-200 hover:bg-slate-900 rounded"
            >
              Other Projects
            </a>
            <a
              href="#about"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2.5 text-slate-200 hover:bg-slate-900 rounded"
            >
              About
            </a>
            <a
              href="#skills"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2.5 text-slate-200 hover:bg-slate-900 rounded"
            >
              Skills
            </a>
            <a
              href="#experience"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2.5 text-slate-200 hover:bg-slate-900 rounded"
            >
              Experience
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2.5 text-teal-400 hover:bg-slate-900 rounded"
            >
              Contact
            </a>
            <div className="pt-3 border-t border-slate-800 flex flex-wrap items-center justify-between gap-3 px-3">
              <div className="flex items-center gap-4 text-slate-300">
                <a
                  href={PersonalProfileLinks.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub Profile (opens in new tab)"
                  className="hover:text-white flex items-center gap-1.5 py-2 min-h-[44px]"
                >
                  <Github className="w-4 h-4" />
                  <span>GitHub</span>
                </a>
                <a
                  href={PersonalProfileLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn Profile (opens in new tab)"
                  className="hover:text-white flex items-center gap-1.5 py-2 min-h-[44px]"
                >
                  <Linkedin className="w-4 h-4" />
                  <span>LinkedIn</span>
                </a>
              </div>
              <a
                href={PersonalProfileLinks.resume}
                onClick={() => setMobileMenuOpen(false)}
                aria-label="Request Resume via Email"
                className="px-3 py-2 rounded bg-teal-400 text-slate-950 font-semibold flex items-center gap-1.5 hover:bg-teal-300 transition-colors min-h-[44px]"
              >
                <FileText className="w-3.5 h-3.5" />
                <span>Resume (Request)</span>
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
