import React from 'react';
import { ArrowDown, Github, Linkedin, FileText, Cpu, ShieldCheck, ArrowUpRight } from 'lucide-react';
import { PersonalProfileLinks, OmiruProject } from '../data/portfolioData';
import { Project } from '../types/portfolio';

interface HeroProps {
  onSelectProject?: (project: Project) => void;
}

export const Hero: React.FC<HeroProps> = ({ onSelectProject }) => {
  return (
    <section className="relative overflow-hidden bg-slate-950 py-14 sm:py-20 lg:py-24 border-b border-slate-800/80 bg-grid-subtle">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">

          {/* Left Column: Personal Narrative & Technical Baseline */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            <div>
              {/* Identity Kicker */}
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-slate-900 border border-slate-800 text-xs text-slate-300 font-mono mb-5">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-teal-500"></span>
                </span>
                <span>Electronics & Computer Engineering Student</span>
              </div>

              {/* Name */}
              <h1 className="text-3xl sm:text-5xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight mb-3">
                ZUBAIR KHALID OPEYEMI
              </h1>

              {/* Specialization Monospace Line */}
              <div className="text-sm sm:text-base font-mono text-teal-400 mb-5 flex flex-wrap items-center gap-x-2.5 gap-y-1 font-medium">
                <span>Embedded Systems</span>
                <span className="text-slate-600">/</span>
                <span>Software</span>
                <span className="text-slate-600">/</span>
                <span>AI</span>
              </div>

              {/* Grounded Human Engineering Statement */}
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-8 max-w-xl">
                Bridging physical hardware and modern software. I write microcontroller firmware, interface environmental sensors, and build web developer tools focused on practical use and maintainable code.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 mb-10">
                <a
                  href="#work"
                  className="px-5 py-2.5 rounded-lg bg-teal-400 hover:bg-teal-300 text-slate-950 font-bold text-xs transition-colors flex items-center gap-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-400 focus:ring-offset-2 focus:ring-offset-slate-950 min-h-[44px]"
                >
                  <span>View Selected Work</span>
                  <ArrowDown className="w-3.5 h-3.5" />
                </a>

                <a
                  href={PersonalProfileLinks.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub Profile (opens in new tab)"
                  title="GitHub Profile"
                  className="px-4 py-2.5 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-200 font-mono text-xs transition-colors flex items-center gap-2 focus:outline-none focus:ring-2 focus:ring-teal-400 min-h-[44px]"
                >
                  <Github className="w-4 h-4 text-slate-400" />
                  <span>GitHub</span>
                </a>

                <a
                  href={PersonalProfileLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn Profile (opens in new tab)"
                  title="LinkedIn Profile"
                  className="px-4 py-2.5 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-200 font-mono text-xs transition-colors flex items-center gap-2 focus:outline-none focus:ring-2 focus:ring-teal-400 min-h-[44px]"
                >
                  <Linkedin className="w-4 h-4 text-slate-400" />
                  <span>LinkedIn</span>
                </a>

                <a
                  href={PersonalProfileLinks.resume}
                  aria-label="Request Resume via Email"
                  title="Request Resume (Opens email draft to Khalidopeyemi27@gmail.com)"
                  className="px-4 py-2.5 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-200 font-mono text-xs transition-colors flex items-center gap-2 focus:outline-none focus:ring-2 focus:ring-teal-400 min-h-[44px]"
                >
                  <FileText className="w-4 h-4 text-slate-400" />
                  <span>Resume (Request)</span>
                </a>
              </div>
            </div>

            {/* Technical Baseline Strip (Anchoring the base of the left column) */}
            <div className="pt-6 border-t border-slate-800/80 grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs font-mono">
              <div className="p-3 rounded-lg bg-slate-900/60 border border-slate-800/80">
                <span className="text-[10px] text-teal-400 uppercase tracking-wider block mb-1">Hardware & MCU</span>
                <span className="text-slate-200 font-medium block">ESP32 Dual-Core</span>
                <span className="text-[11px] text-slate-400">FreeRTOS · C/C++ · ADC</span>
              </div>
              <div className="p-3 rounded-lg bg-slate-900/60 border border-slate-800/80">
                <span className="text-[10px] text-teal-400 uppercase tracking-wider block mb-1">Sensors & Relays</span>
                <span className="text-slate-200 font-medium block">MQ-2 · DHT22 · Probes</span>
                <span className="text-[11px] text-slate-400">Calibration & Thresholds</span>
              </div>
              <div className="p-3 rounded-lg bg-slate-900/60 border border-slate-800/80">
                <span className="text-[10px] text-teal-400 uppercase tracking-wider block mb-1">Software & Web</span>
                <span className="text-slate-200 font-medium block">React 19 · TypeScript</span>
                <span className="text-[11px] text-slate-400">Node.js · Firebase · APIs</span>
              </div>
            </div>
          </div>

          {/* Right Column: Authentic Engineering System Preview (Omiru / AgroFlow Architecture) */}
          <div className="lg:col-span-5">
            <div className="rounded-xl bg-slate-900/90 border border-slate-800/90 shadow-xl overflow-hidden">
              {/* Window Header */}
              <div className="bg-slate-950 px-4 py-3 border-b border-slate-800 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-mono font-semibold text-slate-400 bg-slate-900 px-2 py-0.5 rounded border border-slate-800">
                    SYS-01 // AGRI-IOT
                  </span>
                  <span className="text-xs font-mono text-white font-medium">
                    Omiru / AgroFlow
                  </span>
                </div>
                <span className="text-[10px] font-mono text-teal-300 font-semibold bg-teal-500/10 px-2 py-0.5 rounded border border-teal-500/20 flex items-center gap-1">
                  <ShieldCheck className="w-3 h-3 text-teal-400" />
                  <span>Public Overview</span>
                </span>
              </div>

              {/* Real Project Asset Preview */}
              <div className="p-4 sm:p-5 space-y-4">
                <div className="relative rounded-lg overflow-hidden border border-slate-800/80 bg-slate-950">
                  <img
                    src={OmiruProject.image}
                    alt="Conceptual 3D illustration of Omiru / AgroFlow IoT topology"
                    className="w-full h-44 sm:h-52 object-cover"
                  />
                  <div className="absolute inset-x-0 bottom-0 bg-slate-950/90 backdrop-blur-sm px-3 py-1.5 border-t border-slate-800/80">
                    <span className="text-[10px] font-mono text-slate-400 block truncate">
                      Conceptual IoT Topology (3D Illustration · Public Overview)
                    </span>
                  </div>
                </div>

                {/* Signal Pipeline Schematic */}
                <div>
                  <div className="text-[10px] font-mono uppercase tracking-wider text-slate-400 mb-2 flex items-center justify-between">
                    <span>Telemetry & Control Architecture:</span>
                    <span className="text-teal-400 font-semibold">Sensor → Cloud</span>
                  </div>

                  <div className="grid grid-cols-2 gap-2 text-xs font-mono">
                    <div className="p-2 rounded bg-slate-950 border border-slate-800">
                      <span className="text-[10px] text-teal-400 block">1. Field Sensors</span>
                      <span className="text-slate-300 text-[11px]">DHT22 · Flow · Soil</span>
                    </div>
                    <div className="p-2 rounded bg-slate-950 border border-slate-800">
                      <span className="text-[10px] text-teal-400 block">2. Node Firmware</span>
                      <span className="text-slate-300 text-[11px]">ESP32 ADC & Sampling</span>
                    </div>
                    <div className="p-2 rounded bg-slate-950 border border-slate-800">
                      <span className="text-[10px] text-teal-400 block">3. Data Gateway</span>
                      <span className="text-slate-300 text-[11px]">Wireless Telemetry</span>
                    </div>
                    <div className="p-2 rounded bg-slate-950 border border-slate-800">
                      <span className="text-[10px] text-teal-400 block">4. Cloud & Control</span>
                      <span className="text-slate-300 text-[11px]">Firebase & Solenoids</span>
                    </div>
                  </div>
                </div>

                {/* Inspect Action */}
                <div className="pt-2 flex items-center justify-between gap-3 text-xs font-mono border-t border-slate-800/80">
                  <span className="text-[11px] text-slate-400">
                    Internship Project · Public Overview
                  </span>
                  {onSelectProject && (
                    <button
                      type="button"
                      onClick={() => onSelectProject(OmiruProject)}
                      className="inline-flex items-center gap-1.5 text-teal-400 hover:text-teal-300 font-semibold text-xs py-1 px-2.5 rounded bg-teal-500/10 hover:bg-teal-500/20 border border-teal-500/30 transition-colors focus:outline-none focus:ring-2 focus:ring-teal-400 cursor-pointer shrink-0"
                    >
                      <span>Inspect System</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </button>
                  )}
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
