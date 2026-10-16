import React from 'react';
import { Project } from '../types/portfolio';
import { ArrowUpRight, ShieldCheck } from 'lucide-react';

interface ProjectCardProps {
  project: Project;
  onSelect: (project: Project) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onSelect }) => {
  const getModuleCode = (id: string) => {
    switch (id) {
      case 'omiru-agroflow':
        return 'SYS-01 // AGRI-IOT';
      case 'alert-lens-ng':
        return 'SEC-02 // ADVISORY';
      case 'siteforge':
        return 'DEV-03 // AUDIT-TOOL';
      case 'esp32-fire-gas-alarm':
        return 'HW-04 // HAZARD-SENS';
      default:
        return 'ENG-MOD';
    }
  };

  return (
    <article
      className="group relative bg-slate-900/90 hover:bg-slate-900 rounded-xl border border-slate-800/90 hover:border-teal-500/40 transition-all p-6 flex flex-col justify-between shadow-lg hover:shadow-teal-500/5 hover:-translate-y-0.5"
    >
      <div>
        {/* Card Header Tag Row */}
        <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
          <div className="flex flex-wrap items-center gap-1.5">
            <span className="text-[10px] font-mono font-semibold text-slate-400 bg-slate-950 px-2 py-0.5 rounded border border-slate-800">
              {getModuleCode(project.id)}
            </span>
            <span className="text-[11px] font-mono text-teal-400 bg-slate-950 px-2 py-0.5 rounded border border-slate-800/80">
              {project.category}
            </span>
          </div>
          {project.isConfidentialPublicSafe && (
            <span className="text-[10px] font-mono text-teal-300 bg-teal-500/10 px-2 py-0.5 rounded border border-teal-500/20 flex items-center gap-1">
              <ShieldCheck className="w-3 h-3 text-teal-400" />
              <span>Public Overview</span>
            </span>
          )}
        </div>

        {/* Project Name & Subtitle */}
        <h3 className="text-xl font-bold text-white mb-1">
          <button
            type="button"
            onClick={() => onSelect(project)}
            className="text-left text-white group-hover:text-teal-400 transition-colors focus:outline-none focus:underline cursor-pointer"
            aria-haspopup="dialog"
          >
            {project.title}
          </button>
        </h3>
        <p className="text-xs font-mono text-slate-400 mb-4">
          {project.subtitle}
        </p>

        {/* Short Description */}
        <p className="text-sm text-slate-300 leading-relaxed mb-6">
          {project.shortDescription}
        </p>

        {/* Personal Contribution Highlights */}
        <div className="mb-6 space-y-2 pt-4 border-t border-slate-800/80">
          <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider block mb-2">
            Engineering Scope:
          </span>
          {project.contribution.slice(0, 3).map((item, idx) => (
            <div key={idx} className="flex items-start gap-2 text-xs text-slate-300">
              <span className="text-teal-400 font-mono font-bold select-none text-xs shrink-0 mt-0.5">&gt;</span>
              <span className="line-clamp-2">{item}</span>
            </div>
          ))}
          {project.contribution.length > 3 && (
            <span className="text-[11px] font-mono text-slate-400 block pt-1">
              +{project.contribution.length - 3} additional contributions...
            </span>
          )}
        </div>
      </div>

      {/* Card Footer: Tech & Action */}
      <div className="pt-4 border-t border-slate-800/80">
        <div className="flex flex-wrap gap-1.5 mb-5">
          {project.technologies.map((tech, idx) => (
            <span
              key={idx}
              className="px-2 py-0.5 rounded bg-slate-950 border border-slate-800 text-[11px] font-mono text-slate-400 group-hover:border-slate-700/80 transition-colors"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex flex-wrap items-center justify-between gap-3 text-xs font-mono">
          <span className="text-slate-400">{project.currentStatus}</span>
          <button
            type="button"
            onClick={() => onSelect(project)}
            aria-haspopup="dialog"
            aria-label={`View case study for ${project.title}`}
            className="text-teal-400 hover:text-teal-300 font-bold flex items-center gap-1 group-hover:underline cursor-pointer focus:outline-none focus:ring-2 focus:ring-teal-400 focus:ring-offset-2 focus:ring-offset-slate-900 rounded py-1 px-2 shrink-0"
          >
            <span>View Case Study</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </article>
  );
};
