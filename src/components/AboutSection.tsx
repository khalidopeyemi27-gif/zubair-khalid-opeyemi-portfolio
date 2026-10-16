import React from 'react';
import { User, Cpu, Layers, Terminal, Radio } from 'lucide-react';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-16 sm:py-20 lg:py-24 bg-slate-950 border-b border-slate-800/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">

          {/* Left Column: Editorial Background Statement & Academic Foundation */}
          <div className="lg:col-span-5">
            <span className="text-xs font-mono uppercase tracking-widest text-teal-400 font-semibold flex items-center gap-2 mb-3">
              <User className="w-3.5 h-3.5" />
              <span>03 // Background & Focus</span>
            </span>

            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-4 leading-tight">
              Grounded in Physical Hardware. Extended by Software.
            </h2>

            <p className="text-sm text-slate-300 leading-relaxed mb-6">
              I am an Electronics & Computer Engineering student with a focus on building practical, reliable systems across hardware circuits, embedded firmware, and modern web software. My work bridges physical sensors with connected platforms through rigorous hardware bench testing and clean code architecture.
            </p>

            <div className="p-4 rounded-xl bg-slate-900/70 border border-slate-800 space-y-2 text-xs font-mono">
              <div className="flex items-center gap-2 text-teal-400">
                <Layers className="w-4 h-4 shrink-0" />
                <span className="font-semibold text-white">Academic Foundation</span>
              </div>
              <p className="text-slate-300">
                Field of Study: <strong>Electronics & Computer Engineering</strong>
              </p>
              <p className="text-slate-400 text-[11px]">
                Focus on embedded microcontrollers, circuit interfacing, signals, and systems programming.
              </p>
            </div>
          </div>

          {/* Right Column: 3 Core Engineering Pillars */}
          <div className="lg:col-span-7 space-y-4">

            {/* Pillar 1 */}
            <div className="p-5 sm:p-6 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-slate-700 transition-colors">
              <div className="flex items-center justify-between mb-2">
                <span className="text-[10px] font-mono text-teal-400 font-semibold bg-teal-500/10 px-2 py-0.5 rounded border border-teal-500/20">
                  01 // HARDWARE & FIRMWARE
                </span>
                <Cpu className="w-4 h-4 text-slate-400" />
              </div>
              <h3 className="text-base font-bold text-white mb-1.5">Embedded Systems & Sensors</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                ESP32 embedded firmware development, multi-sensor analog/digital polling, threshold logic, and physical benchtop validation.
              </p>
            </div>

            {/* Pillar 2 */}
            <div className="p-5 sm:p-6 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-slate-700 transition-colors">
              <div className="flex items-center justify-between mb-2">
                <span className="text-[10px] font-mono text-teal-400 font-semibold bg-teal-500/10 px-2 py-0.5 rounded border border-teal-500/20">
                  02 // TELEMETRY & IOT
                </span>
                <Radio className="w-4 h-4 text-slate-400" />
              </div>
              <h3 className="text-base font-bold text-white mb-1.5">Connected Streams & Gateways</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Microcontroller-to-cloud telemetry pipelines, structured payload formatting, Firebase/Node.js persistence, and actuator relay triggers.
              </p>
            </div>

            {/* Pillar 3 */}
            <div className="p-5 sm:p-6 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-slate-700 transition-colors">
              <div className="flex items-center justify-between mb-2">
                <span className="text-[10px] font-mono text-teal-400 font-semibold bg-teal-500/10 px-2 py-0.5 rounded border border-teal-500/20">
                  03 // SOFTWARE & TOOLING
                </span>
                <Terminal className="w-4 h-4 text-slate-400" />
              </div>
              <h3 className="text-base font-bold text-white mb-1.5">Web Architecture & Developer Tools</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Component architecture with React and TypeScript, Component frame-tree inspection via Framer Plugin API, and defensive navigation wrappers.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
