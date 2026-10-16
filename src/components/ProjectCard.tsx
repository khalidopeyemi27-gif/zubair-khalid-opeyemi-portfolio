import React from 'react';
import { Project } from '../types/portfolio';
import { ArrowUpRight, ShieldCheck, Cpu, AlertTriangle, Layers } from 'lucide-react';

interface ProjectCardProps {
  project: Project;
  onSelect: (project: Project) => void;
  variant?: 'featured' | 'standard' | 'hardware';
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onSelect, variant = 'standard' }) => {
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

  // 1. Featured Wide Layout (Omiru / AgroFlow)
  if (variant === 'featured') {
    return (
      <article className="group relative bg-slate-900/85 hover:bg-slate-900 rounded-2xl border border-slate-800 hover:border-teal-500/40 transition-all p-6 sm:p-8 shadow-xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">

          {/* Left Column: Technical Narrative & Scope */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            <div>
              {/* Header Badge Row */}
              <div className="flex flex-wrap items-center gap-2 mb-3">
                <span className="text-[10px] font-mono font-semibold text-slate-400 bg-slate-950 px-2.5 py-1 rounded border border-slate-800">
                  {getModuleCode(project.id)}
                </span>
                <span className="text-[11px] font-mono text-teal-400 bg-slate-950 px-2.5 py-1 rounded border border-slate-800/80">
                  {project.category}
                </span>
                {project.isConfidentialPublicSafe && (
                  <span className="text-[10px] font-mono text-teal-300 bg-teal-500/10 px-2.5 py-1 rounded border border-teal-500/20 flex items-center gap-1">
                    <ShieldCheck className="w-3 h-3 text-teal-400" />
                    <span>Public Overview</span>
                  </span>
                )}
              </div>

              {/* Title & Subtitle */}
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-1.5 tracking-tight">
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

              {/* Description */}
              <p className="text-sm text-slate-300 leading-relaxed mb-5">
                {project.shortDescription}
              </p>

              {/* Key Contributions Scope */}
              <div className="mb-6 space-y-2 pt-4 border-t border-slate-800/80">
                <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider block mb-2">
                  Key Engineering Contributions:
                </span>
                {project.contribution.slice(0, 3).map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-300">
                    <span className="text-teal-400 font-mono font-bold select-none text-xs shrink-0 mt-0.5">&gt;</span>
                    <span className="leading-relaxed">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Footer Tech Chips & CTA */}
            <div className="pt-4 border-t border-slate-800/80 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex flex-wrap gap-1.5">
                {project.technologies.slice(0, 7).map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-2 py-0.5 rounded bg-slate-950 border border-slate-800 text-[11px] font-mono text-slate-400"
                  >
                    {tech}
                  </span>
                ))}
                {project.technologies.length > 7 && (
                  <span className="px-2 py-0.5 rounded bg-slate-950 border border-slate-800 text-[11px] font-mono text-slate-400">
                    +{project.technologies.length - 7}
                  </span>
                )}
              </div>

              <button
                type="button"
                onClick={() => onSelect(project)}
                aria-haspopup="dialog"
                aria-label={`View case study for ${project.title}`}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-teal-400 hover:bg-teal-300 text-slate-950 font-bold text-xs transition-colors shrink-0 cursor-pointer focus:outline-none focus:ring-2 focus:ring-teal-400 min-h-[44px]"
              >
                <span>View Full Case Study</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Right Column: Visual Blueprint & Telemetry Pipeline */}
          <div className="lg:col-span-5">
            <div className="rounded-xl overflow-hidden border border-slate-800 bg-slate-950">
              {project.image && (
                <div className="relative">
                  <img
                    src={project.image}
                    alt={project.imagePlaceholderLabel || `${project.title} conceptual topology`}
                    className="w-full h-52 sm:h-60 object-cover"
                  />
                  <div className="absolute inset-x-0 bottom-0 bg-slate-950/90 backdrop-blur-sm px-3 py-1.5 border-t border-slate-800/80 text-[10px] font-mono text-slate-400">
                    Conceptual IoT Topology Diagram (Public Overview)
                  </div>
                </div>
              )}

              <div className="p-4 space-y-3">
                <div className="text-[11px] font-mono text-slate-400 flex items-center justify-between">
                  <span className="text-teal-400 font-semibold uppercase">Architecture Flow</span>
                  <span className="text-[10px] text-slate-400">5-Stage System</span>
                </div>
                <div className="text-xs font-mono text-slate-300 bg-slate-900/80 p-3 rounded-lg border border-slate-800/80 leading-relaxed">
                  Sensors → ESP32 Sensor Nodes → Gateway Telemetry → Cloud Services → Monitoring & Control
                </div>
                <p className="text-[10px] font-mono text-slate-400">
                  Public-safe presentation. Proprietary credentials and production schematics omitted for confidentiality.
                </p>
              </div>
            </div>
          </div>

        </div>
      </article>
    );
  }

  // 2. Hardware Engineering Layout (ESP32 Fire & Gas Alarm System)
  if (variant === 'hardware') {
    return (
      <article className="group relative bg-slate-900/85 hover:bg-slate-900 rounded-xl border border-slate-800 hover:border-teal-500/40 transition-all p-6 sm:p-7 shadow-lg flex flex-col justify-between">
        <div>
          {/* Header Row */}
          <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
            <div className="flex flex-wrap items-center gap-1.5">
              <span className="text-[10px] font-mono font-semibold text-slate-400 bg-slate-950 px-2 py-0.5 rounded border border-slate-800">
                {getModuleCode(project.id)}
              </span>
              <span className="text-[11px] font-mono text-teal-400 bg-slate-950 px-2 py-0.5 rounded border border-slate-800/80">
                {project.category}
              </span>
            </div>
            <span className="text-[10px] font-mono text-amber-300 bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/20 flex items-center gap-1">
              <Layers className="w-3 h-3 text-amber-400" />
              <span>Hardware Prototype</span>
            </span>
          </div>

          {/* Title & Subtitle */}
          <h3 className="text-xl font-bold text-white mb-1 tracking-tight">
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
          <p className="text-sm text-slate-300 leading-relaxed mb-5">
            {project.shortDescription}
          </p>

          {/* Hardware Subsystems Overview Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-xs font-mono mb-5">
            <div className="p-2.5 rounded bg-slate-950 border border-slate-800">
              <span className="text-[10px] text-teal-400 block font-semibold">MQ-2 Sensor</span>
              <span className="text-slate-300 text-[11px]">Combustible Gas / Smoke</span>
            </div>
            <div className="p-2.5 rounded bg-slate-950 border border-slate-800">
              <span className="text-[10px] text-teal-400 block font-semibold">Optical Flame</span>
              <span className="text-slate-300 text-[11px]">IR Hazard Trigger</span>
            </div>
            <div className="p-2.5 rounded bg-slate-950 border border-slate-800">
              <span className="text-[10px] text-teal-400 block font-semibold">DHT22 Probe</span>
              <span className="text-slate-300 text-[11px]">Temp & Humidity</span>
            </div>
            <div className="p-2.5 rounded bg-slate-950 border border-slate-800">
              <span className="text-[10px] text-teal-400 block font-semibold">Local Alerts</span>
              <span className="text-slate-300 text-[11px]">Buzzer, LEDs & LCD</span>
            </div>
            <div className="p-2.5 rounded bg-slate-950 border border-slate-800">
              <span className="text-[10px] text-teal-400 block font-semibold">Microcontroller</span>
              <span className="text-slate-300 text-[11px]">ESP32 FreeRTOS</span>
            </div>
            <div className="p-2.5 rounded bg-slate-950 border border-slate-800">
              <span className="text-[10px] text-teal-400 block font-semibold">IoT Telemetry</span>
              <span className="text-slate-300 text-[11px]">Blynk Remote View</span>
            </div>
          </div>

          {/* Disclaimer Callout */}
          {project.disclaimer && (
            <div className="mb-5 p-3 rounded-lg bg-slate-950 border border-amber-500/20 text-xs text-slate-300 flex items-start gap-2">
              <AlertTriangle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
              <span className="text-[11px] leading-relaxed">
                <strong>Notice:</strong> {project.disclaimer}
              </span>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="pt-4 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-3 text-xs font-mono">
          <span className="text-slate-400">{project.currentStatus}</span>
          <button
            type="button"
            onClick={() => onSelect(project)}
            aria-haspopup="dialog"
            aria-label={`View case study for ${project.title}`}
            className="text-teal-400 hover:text-teal-300 font-bold flex items-center gap-1 group-hover:underline cursor-pointer focus:outline-none focus:ring-2 focus:ring-teal-400 rounded py-1 px-2 shrink-0 min-h-[44px]"
          >
            <span>Inspect Hardware Case Study</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </article>
    );
  }

  // 3. Standard Layout (Alert Lens NG, SiteForge)
  return (
    <article className="group relative bg-slate-900/85 hover:bg-slate-900 rounded-xl border border-slate-800 hover:border-teal-500/40 transition-all p-6 sm:p-7 shadow-lg flex flex-col justify-between">
      <div>
        {/* Header Tag Row */}
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
        <h3 className="text-xl font-bold text-white mb-1 tracking-tight">
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
        <p className="text-sm text-slate-300 leading-relaxed mb-5">
          {project.shortDescription}
        </p>

        {/* Engineering Scope */}
        <div className="mb-5 space-y-2 pt-4 border-t border-slate-800/80">
          <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider block mb-2">
            Engineering Scope:
          </span>
          {project.contribution.slice(0, 3).map((item, idx) => (
            <div key={idx} className="flex items-start gap-2 text-xs text-slate-300">
              <span className="text-teal-400 font-mono font-bold select-none text-xs shrink-0 mt-0.5">&gt;</span>
              <span className="leading-relaxed line-clamp-2">{item}</span>
            </div>
          ))}
        </div>

        {/* Disclaimer Callout if present (Alert Lens NG) */}
        {project.disclaimer && (
          <div className="mb-5 p-3 rounded-lg bg-slate-950 border border-slate-800 text-xs text-slate-300 flex items-start gap-2">
            <ShieldCheck className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
            <span className="text-[11px] leading-relaxed">
              <strong>Notice:</strong> {project.disclaimer}
            </span>
          </div>
        )}
      </div>

      {/* Card Footer: Tech & Action */}
      <div className="pt-4 border-t border-slate-800/80">
        <div className="flex flex-wrap gap-1.5 mb-5">
          {project.technologies.map((tech, idx) => (
            <span
              key={idx}
              className="px-2 py-0.5 rounded bg-slate-950 border border-slate-800 text-[11px] font-mono text-slate-400"
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
            className="text-teal-400 hover:text-teal-300 font-bold flex items-center gap-1 group-hover:underline cursor-pointer focus:outline-none focus:ring-2 focus:ring-teal-400 rounded py-1 px-2 shrink-0 min-h-[44px]"
          >
            <span>View Case Study</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </article>
  );
};
