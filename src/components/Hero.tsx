import React from 'react';
import { ArrowDown, Github, Linkedin, FileText, Cpu, Terminal, Activity } from 'lucide-react';
import { PersonalProfileLinks } from '../data/portfolioData';

export const Hero: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-slate-950 py-16 sm:py-24 border-b border-slate-800/80 bg-grid-pattern">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          {/* Left Column: Personal Narrative */}
          <div className="lg:col-span-7">
            {/* Status Kicker with Pulse */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900/90 border border-slate-800 text-xs text-slate-300 font-mono mb-6 backdrop-blur">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-teal-500"></span>
              </span>
              <span>Electronics & Computer Engineering Student</span>
            </div>

            {/* Name */}
            <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight mb-3">
              ZUBAIR KHALID OPEYEMI
            </h1>

            {/* Specialization */}
            <p className="text-base sm:text-lg font-mono text-teal-400 mb-5 flex flex-wrap items-center gap-x-3 gap-y-1 font-medium">
              <span>Embedded Systems</span>
              <span className="text-slate-600">·</span>
              <span>Software</span>
              <span className="text-slate-600">·</span>
              <span>AI</span>
            </p>

            {/* Grounded Human Engineering Statement */}
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-8 max-w-xl">
              Bridging physical hardware and modern software. I write microcontroller firmware, interface environmental sensors, and build web developer tools focused on practical use and maintainable code.
            </p>

            {/* Hero Action Buttons */}
            <div className="flex flex-wrap items-center gap-3">
              <a
                href="#work"
                className="px-5 py-2.5 rounded-lg bg-teal-400 hover:bg-teal-300 text-slate-950 font-bold text-xs transition-colors flex items-center gap-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-400 focus:ring-offset-2 focus:ring-offset-slate-950"
              >
                <span>View Selected Work</span>
                <ArrowDown className="w-3.5 h-3.5" />
              </a>

              <a
                href={PersonalProfileLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                title="GitHub Profile"
                className="px-4 py-2.5 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-200 font-mono text-xs transition-colors flex items-center gap-2 focus:outline-none focus:ring-2 focus:ring-teal-400"
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
                className="px-4 py-2.5 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-200 font-mono text-xs transition-colors flex items-center gap-2 focus:outline-none focus:ring-2 focus:ring-teal-400"
              >
                <Linkedin className="w-4 h-4 text-slate-400" />
                <span>LinkedIn</span>
              </a>

              <a
                href={PersonalProfileLinks.resume}
                aria-label="Request Resume via Email"
                title="Request Resume (Opens email draft to Khalidopeyemi27@gmail.com)"
                className="px-4 py-2.5 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-200 font-mono text-xs transition-colors flex items-center gap-2 focus:outline-none focus:ring-2 focus:ring-teal-400"
              >
                <FileText className="w-4 h-4 text-slate-400" />
                <span>Resume (Request)</span>
              </a>
            </div>

            <div className="mt-8 text-xs text-slate-400 font-mono flex items-center gap-2">
              <Cpu className="w-3.5 h-3.5 text-teal-400" />
              <span>Focus: Microcontroller Firmware · Embedded Sensors · Web Software · Applied Intelligence</span>
            </div>
          </div>

          {/* Right Column: Authentic Engineering Workbench Card */}
          <div className="lg:col-span-5">
            <div className="rounded-xl bg-slate-900/90 border border-slate-800 shadow-2xl backdrop-blur font-mono text-xs overflow-hidden">
              {/* Window Header */}
              <div className="bg-slate-950 px-4 py-3 border-b border-slate-800 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-rose-500/80"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80"></div>
                  <span className="text-[11px] text-slate-400 ml-1.5 flex items-center gap-1.5">
                    <Terminal className="w-3 h-3 text-teal-400" />
                    <span>workbench_specs.env</span>
                  </span>
                </div>
                <span className="text-[10px] text-teal-300 font-semibold bg-teal-500/10 px-2 py-0.5 rounded border border-teal-500/20 flex items-center gap-1">
                  <Activity className="w-2.5 h-2.5" />
                  <span>ACTIVE</span>
                </span>
              </div>

              {/* Technical Profile Key-Values */}
              <div className="p-4 sm:p-5 space-y-2.5 text-slate-300 text-xs">
                <div className="pb-1 text-slate-500 text-[11px]">
                  # Core Hardware & Software Stack
                </div>

                <div className="flex items-baseline justify-between py-1 border-b border-slate-800/60">
                  <span className="text-slate-400">MCU Architecture</span>
                  <span className="text-teal-300 font-semibold text-right">ESP32 (Xtensa Dual-Core)</span>
                </div>

                <div className="flex items-baseline justify-between py-1 border-b border-slate-800/60">
                  <span className="text-slate-400">Firmware Logic</span>
                  <span className="text-white text-right">C / C++ · ADC Sampling · Relays</span>
                </div>

                <div className="flex items-baseline justify-between py-1 border-b border-slate-800/60">
                  <span className="text-slate-400">Sensors Interfaced</span>
                  <span className="text-white text-right">MQ-2, DHT22, DS18B20, YF-S201</span>
                </div>

                <div className="flex items-baseline justify-between py-1 border-b border-slate-800/60">
                  <span className="text-slate-400">Software Stack</span>
                  <span className="text-white text-right">React 19, TypeScript, Node.js</span>
                </div>

                <div className="flex items-baseline justify-between py-1">
                  <span className="text-slate-400">Active Work</span>
                  <span className="text-teal-300 text-right">Smart Agriculture & Gas Alerts</span>
                </div>
              </div>

              {/* Window Footer */}
              <div className="bg-slate-950/80 px-4 py-2.5 border-t border-slate-800 text-[11px] text-slate-400 flex items-center justify-between">
                <span className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                  <span>Bench Systems Operational</span>
                </span>
                <span className="text-slate-400 font-mono">0 errors</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
