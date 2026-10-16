import React from 'react';
import { Cpu, Github, Linkedin } from 'lucide-react';
import { PersonalProfileLinks } from '../data/portfolioData';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 py-10 border-t border-slate-800 text-slate-400 text-xs font-mono">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">

        <div className="flex items-center gap-2">
          <div className="p-1 rounded bg-teal-500/10 text-teal-400 border border-teal-500/20">
            <Cpu className="w-3.5 h-3.5" />
          </div>
          <span className="text-white font-semibold">ZUBAIR KHALID OPEYEMI</span>
          <span className="text-slate-600">·</span>
          <span className="text-slate-400">Engineering Portfolio</span>
        </div>

        <div className="flex items-center gap-4 text-slate-300">
          <a
            href={PersonalProfileLinks.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile (opens in new tab)"
            title="GitHub Profile"
            className="hover:text-white flex items-center gap-1.5 transition-colors focus:outline-none focus:ring-2 focus:ring-teal-400 rounded px-1.5 py-1"
          >
            <Github className="w-4 h-4" />
            <span>GitHub</span>
          </a>
          <a
            href={PersonalProfileLinks.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile (opens in new tab)"
            title="LinkedIn Profile"
            className="hover:text-white flex items-center gap-1.5 transition-colors focus:outline-none focus:ring-2 focus:ring-teal-400 rounded px-1.5 py-1"
          >
            <Linkedin className="w-4 h-4" />
            <span>LinkedIn</span>
          </a>
        </div>

        <div className="text-slate-400 text-[11px] text-center sm:text-right">
          © {new Date().getFullYear()} Zubair Khalid Opeyemi · Built with React & TypeScript
        </div>

      </div>
    </footer>
  );
};
