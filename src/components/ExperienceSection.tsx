import React from 'react';
import { WorkExperiences } from '../data/portfolioData';
import { Briefcase, Calendar } from 'lucide-react';

export const ExperienceSection: React.FC = () => {
  return (
    <section id="experience" className="py-16 sm:py-20 lg:py-24 bg-slate-950 border-b border-slate-800/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="mb-10">
          <span className="text-xs font-mono uppercase tracking-widest text-teal-400 font-semibold flex items-center gap-2">
            <Briefcase className="w-3.5 h-3.5" />
            <span>05 // Experience</span>
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mt-1">
            Engineering & Product Work
          </h2>
          <p className="text-sm text-slate-300 mt-2 max-w-2xl">
            Practical engineering internship, embedded firmware development, and collaborative technical contributions.
          </p>
        </div>

        <div className="space-y-6">
          {WorkExperiences.map((exp, idx) => (
            <div key={idx} className="p-6 sm:p-7 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-slate-700 transition-colors">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4 pb-3 border-b border-slate-800/80">
                <div>
                  <h3 className="text-lg font-bold text-white flex items-center gap-2">
                    <span>{exp.role}</span>
                  </h3>
                  <p className="text-xs font-mono text-teal-400 mt-0.5">{exp.company} — {exp.location}</p>
                </div>

                <span className="text-xs font-mono text-slate-400 flex items-center gap-1.5 bg-slate-950 px-3 py-1.5 rounded-lg border border-slate-800 self-start sm:self-auto">
                  <Calendar className="w-3.5 h-3.5 text-slate-400" />
                  <span>{exp.period}</span>
                </span>
              </div>

              <p className="text-sm text-slate-300 mb-4 leading-relaxed">
                {exp.summary}
              </p>

              <div className="space-y-2 mb-5">
                {exp.highlights.map((h, hIdx) => (
                  <div key={hIdx} className="flex items-start gap-2.5 text-xs text-slate-300">
                    <span className="text-teal-400 font-mono font-bold select-none text-xs shrink-0 mt-0.5">&gt;</span>
                    <span className="leading-relaxed">{h}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-1.5 pt-3 border-t border-slate-800/80">
                {exp.technologies.map((tech, tIdx) => (
                  <span key={tIdx} className="px-2.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-[11px] font-mono text-slate-400">
                    {tech}
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
