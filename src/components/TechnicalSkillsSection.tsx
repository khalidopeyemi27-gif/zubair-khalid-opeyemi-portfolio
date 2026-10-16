import React from 'react';
import { TechnicalCategories } from '../data/portfolioData';
import { Cpu, Code2, Wifi, Sparkles, Terminal } from 'lucide-react';

export const TechnicalSkillsSection: React.FC = () => {
  const getCategoryIcon = (index: number) => {
    switch (index) {
      case 0:
        return <Cpu className="w-4 h-4 text-teal-400" />;
      case 1:
        return <Code2 className="w-4 h-4 text-teal-400" />;
      case 2:
        return <Wifi className="w-4 h-4 text-teal-400" />;
      case 3:
        return <Sparkles className="w-4 h-4 text-teal-400" />;
      default:
        return <Cpu className="w-4 h-4 text-teal-400" />;
    }
  };

  return (
    <section id="skills" className="py-16 sm:py-20 lg:py-24 bg-slate-950 border-b border-slate-800/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="mb-10">
          <span className="text-xs font-mono uppercase tracking-widest text-teal-400 font-semibold flex items-center gap-2">
            <Terminal className="w-3.5 h-3.5" />
            <span>04 // Technical Stack</span>
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mt-1">
            Core Disciplines & Technologies
          </h2>
          <p className="text-sm text-slate-300 mt-2 max-w-2xl">
            Technical competencies developed through physical hardware experimentation, firmware programming, and full-stack software development.
          </p>
        </div>

        {/* 2x2 Clean Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {TechnicalCategories.map((cat, idx) => (
            <div key={idx} className="p-6 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-slate-700 transition-colors">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 rounded bg-slate-950 border border-slate-800">
                  {getCategoryIcon(idx)}
                </div>
                <div>
                  <h3 className="text-base font-bold text-white">{cat.title}</h3>
                  <p className="text-xs text-slate-400">{cat.description}</p>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 pt-3 border-t border-slate-800/80">
                {cat.skills.map((skill, sIdx) => (
                  <span
                    key={sIdx}
                    className="px-2.5 py-1 rounded bg-slate-950 border border-slate-800 text-xs font-mono text-slate-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
