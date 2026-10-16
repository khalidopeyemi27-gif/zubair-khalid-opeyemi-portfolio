import React, { useEffect, useRef } from 'react';
import { Project } from '../types/portfolio';
import { X, ShieldCheck, CheckCircle2, Wrench, ExternalLink, Activity } from 'lucide-react';

interface CaseStudyModalProps {
  project: Project;
  onClose: () => void;
}

export const CaseStudyModal: React.FC<CaseStudyModalProps> = ({ project, onClose }) => {
  const triggerRef = useRef<HTMLElement | null>(null);
  const modalRef = useRef<HTMLDivElement>(null);

  // Focus trap, initial focus, ESC key listener, and focus restoration
  useEffect(() => {
    triggerRef.current = document.activeElement as HTMLElement;

    // Focus close button initially
    const closeBtn = modalRef.current?.querySelector<HTMLButtonElement>('[data-modal-close]');
    closeBtn?.focus();

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
        return;
      }

      // Trap focus inside modal
      if (e.key === 'Tab' && modalRef.current) {
        const focusableElements = modalRef.current.querySelectorAll<HTMLElement>(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        if (focusableElements.length > 0) {
          const firstElement = focusableElements[0];
          const lastElement = focusableElements[focusableElements.length - 1];

          if (e.shiftKey && document.activeElement === firstElement) {
            e.preventDefault();
            lastElement.focus();
          } else if (!e.shiftKey && document.activeElement === lastElement) {
            e.preventDefault();
            firstElement.focus();
          }
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      // Return focus to the trigger element that opened the modal
      triggerRef.current?.focus();
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/90 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 animate-fadeIn"
      onClick={onClose}
    >
      <div
        ref={modalRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="case-study-title"
        className="relative w-full max-w-4xl bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl overflow-hidden my-2 sm:my-6 max-h-[96vh] sm:max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >

        {/* Modal Sticky Header */}
        <div className="sticky top-0 z-20 bg-slate-950/95 backdrop-blur border-b border-slate-800 px-4 py-3 sm:px-6 sm:py-4 flex items-center justify-between gap-3">
          <div className="min-w-0 flex-1">
            <div className="flex flex-wrap items-center gap-2">
              <h2 id="case-study-title" className="text-lg font-bold text-white truncate">
                {project.title}
              </h2>
              {project.isConfidentialPublicSafe && (
                <span className="inline-flex items-center gap-1 text-[10px] font-mono text-teal-300 bg-teal-500/10 px-2 py-0.5 rounded border border-teal-500/20 shrink-0">
                  <ShieldCheck className="w-3 h-3 text-teal-400" />
                  <span>Public Overview</span>
                </span>
              )}
            </div>
            <p className="text-xs font-mono text-teal-400 sm:truncate line-clamp-2 sm:line-clamp-1 mt-0.5 leading-snug">
              {project.subtitle}
            </p>
          </div>

          <button
            type="button"
            data-modal-close
            onClick={onClose}
            className="p-2 min-h-[44px] min-w-[44px] rounded-lg bg-slate-800 text-slate-300 hover:text-white hover:bg-slate-700 transition-colors inline-flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-teal-400 cursor-pointer shrink-0"
            aria-label="Close Case Study"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Content Body */}
        <div className="p-4 sm:p-8 overflow-y-auto space-y-8 text-slate-200">

          {/* 1. Project Title & 2. One-Sentence Description */}
          <div>
            <span className="text-[11px] font-mono text-slate-400 uppercase tracking-widest block mb-1">
              Case Study Summary
            </span>
            <p className="text-base sm:text-lg text-slate-100 font-medium leading-relaxed bg-slate-950 p-5 rounded-xl border border-slate-800">
              {project.shortDescription}
            </p>

            {project.isConfidentialPublicSafe && (
              <div className="mt-3 p-3 rounded-lg bg-slate-950 border border-slate-800 text-xs text-slate-300 flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-teal-400 shrink-0" />
                <span>
                  <strong>Public Presentation Notice:</strong> This case study presents public-safe technical parameters without disclosing confidential implementation details or proprietary credentials.
                </span>
              </div>
            )}

            {project.disclaimer && (
              <div className="mt-3 p-3 rounded-lg bg-slate-950 border border-slate-800 text-xs text-slate-300 flex items-start gap-2">
                <ShieldCheck className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                <span>
                  <strong>Notice:</strong> {project.disclaimer}
                </span>
              </div>
            )}
          </div>

          {/* 3. My Role & Contribution */}
          <div>
            <h3 className="text-xs font-mono uppercase tracking-widest text-teal-400 mb-3 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-teal-400"></span>
              <span>My Role & Personal Contributions</span>
            </h3>

            <div className="space-y-2">
              {project.contribution.map((item, idx) => (
                <div key={idx} className="flex items-start gap-3 p-3 rounded-lg bg-slate-950 border border-slate-800/80">
                  <span className="text-teal-400 font-mono font-bold select-none text-xs sm:text-sm shrink-0 mt-0.5">&gt;</span>
                  <span className="text-xs sm:text-sm text-slate-300 leading-relaxed">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* 4. Problem */}
          <div>
            <h3 className="text-xs font-mono uppercase tracking-widest text-teal-400 mb-2 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-teal-400"></span>
              <span>Problem Statement</span>
            </h3>
            <p className="text-sm text-slate-300 leading-relaxed bg-slate-950/60 p-4 rounded-lg border border-slate-800/80">
              {project.problem}
            </p>
          </div>

          {/* 5. Approach */}
          {project.approach && (
            <div>
              <h3 className="text-xs font-mono uppercase tracking-widest text-teal-400 mb-2 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-teal-400"></span>
                <span>Engineering Approach</span>
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed bg-slate-950/60 p-4 rounded-lg border border-slate-800/80">
                {project.approach}
              </p>
            </div>
          )}

          {/* 6. Technical Implementation */}
          {project.technicalImplementation && (
            <div>
              <h3 className="text-xs font-mono uppercase tracking-widest text-teal-400 mb-3 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-teal-400"></span>
                <span>Technical Implementation Details</span>
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {project.technicalImplementation.map((point, idx) => (
                  <div key={idx} className="p-3 rounded-lg bg-slate-950 border border-slate-800/80 text-xs text-slate-300 flex items-start gap-2">
                    <Activity className="w-3.5 h-3.5 text-teal-400 shrink-0 mt-0.5" />
                    <span>{point}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* 7. Technologies */}
          <div>
            <h3 className="text-xs font-mono uppercase tracking-widest text-teal-400 mb-3 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-teal-400"></span>
              <span>Technologies & Peripherals</span>
            </h3>

            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, idx) => (
                <span key={idx} className="px-3 py-1 rounded-md bg-slate-950 border border-slate-800 text-xs font-mono text-slate-300">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* 8. Images / Screenshots / Clean Placeholders */}
          <div>
            <h3 className="text-xs font-mono uppercase tracking-widest text-teal-400 mb-3 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-teal-400"></span>
              <span>Project Visualization / Placeholder</span>
            </h3>

            {project.image ? (
              <div className="rounded-xl overflow-hidden bg-slate-950 border border-slate-800">
                <img
                  src={project.image}
                  alt={project.imagePlaceholderLabel || `${project.title} conceptual diagram`}
                  className="w-full h-auto max-h-80 object-cover"
                />
                <div className="p-3 bg-slate-950 border-t border-slate-800 text-[11px] font-mono text-slate-300 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <span>{project.imagePlaceholderLabel}</span>
                  <span className="text-[10px] text-teal-300 font-semibold px-2 py-0.5 rounded bg-teal-500/10 border border-teal-500/20 shrink-0 self-start sm:self-auto">
                    Conceptual 3D Illustration
                  </span>
                </div>
              </div>
            ) : (
              <div className="p-8 rounded-xl bg-slate-950 border border-slate-800 text-center flex flex-col items-center justify-center gap-2">
                <Activity className="w-8 h-8 text-teal-400/60" />
                <span className="text-xs font-mono text-slate-300 font-medium">
                  {project.imagePlaceholderLabel || 'Project Diagram & Screenshot Placeholder'}
                </span>
                <span className="text-[11px] font-mono text-slate-400">
                  (Clean visual placeholder — genuine photos/screenshots will be added when available)
                </span>
              </div>
            )}
          </div>

          {/* 9. Challenges & Lessons */}
          <div>
            <h3 className="text-xs font-mono uppercase tracking-widest text-teal-400 mb-3 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-teal-400"></span>
              <span>Engineering Challenges & Lessons</span>
            </h3>

            <div className="space-y-2">
              {project.challengesAndLearning.map((item, idx) => (
                <div key={idx} className="p-3.5 rounded-lg bg-slate-950 border border-slate-800 text-xs text-slate-300 flex items-start gap-2.5">
                  <span className="text-teal-400 font-mono font-semibold select-none text-xs shrink-0 mt-0.5">#</span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* 10. Current Status & 11. Relevant Links */}
          <div className="pt-4 border-t border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <span className="text-[11px] font-mono text-slate-400 uppercase block">Current Status</span>
              <span className="text-xs font-mono text-teal-400 font-semibold">{project.currentStatus}</span>
            </div>

            {project.repositoryNote ? (
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded bg-slate-950 border border-slate-800 text-xs font-mono text-slate-400">
                <ShieldCheck className="w-3.5 h-3.5 text-teal-400/70 shrink-0" />
                <span>{project.repositoryNote}</span>
              </span>
            ) : project.links && project.links.length > 0 ? (
              <div className="flex flex-wrap items-center gap-2">
                {project.links.map((link, idx) => (
                  <span
                    key={idx}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded bg-slate-950 border border-slate-800 text-xs font-mono text-slate-300"
                  >
                    <ExternalLink className="w-3.5 h-3.5 text-teal-400" />
                    <span>{link.label}</span>
                    {link.isPlaceholder && (
                      <span className="text-[10px] text-slate-400 bg-slate-900 px-1.5 py-0.5 rounded border border-slate-800">(Placeholder)</span>
                    )}
                  </span>
                ))}
              </div>
            ) : null}
          </div>

        </div>

        {/* Modal Footer */}
        <div className="sticky bottom-0 z-20 bg-slate-950 border-t border-slate-800 px-4 py-3 sm:px-6 sm:py-4 flex justify-between items-center gap-3">
          <span className="text-xs font-mono text-slate-400">Press ESC or click close</span>
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 min-h-[44px] rounded-lg bg-teal-400 text-slate-950 font-semibold text-xs hover:bg-teal-300 transition-colors cursor-pointer focus:outline-none focus:ring-2 focus:ring-teal-400 focus:ring-offset-2 focus:ring-offset-slate-950 shrink-0"
          >
            Close Case Study
          </button>
        </div>

      </div>
    </div>
  );
};
