import React from 'react';
import { User, Cpu, Layers, Terminal, Radio } from 'lucide-react';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-16 sm:py-20 bg-slate-950 border-b border-slate-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="max-w-3xl mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-slate-900 border border-slate-800 text-xs text-teal-400 font-mono mb-4">
            <User className="w-3.5 h-3.5" />
            <span>About Me</span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mb-4">
            Background & Engineering Focus
          </h2>

          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            I am an Electronics & Computer Engineering student with a focus on building practical, reliable systems across hardware circuits, embedded firmware, and modern web software. My work bridges physical sensors with connected platforms through rigorous hardware bench testing and clean code architecture.
          </p>
        </div>

        {/* 3 Technical Focus Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">

          <div className="p-5 rounded-xl bg-slate-900/90 border border-slate-800 hover:border-slate-700 transition-colors">
            <div className="flex items-center justify-between mb-3">
              <span className="text-[10px] font-mono text-teal-400 font-semibold bg-teal-500/10 px-2 py-0.5 rounded border border-teal-500/20">
                01 // HARDWARE & FIRMWARE
              </span>
              <Cpu className="w-4 h-4 text-slate-400" />
            </div>
            <h3 className="text-base font-bold text-white mb-2">Embedded Systems</h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              ESP32 embedded firmware development, multi-sensor analog/digital polling, threshold logic, and physical benchtop validation.
            </p>
          </div>

          <div className="p-5 rounded-xl bg-slate-900/90 border border-slate-800 hover:border-slate-700 transition-colors">
            <div className="flex items-center justify-between mb-3">
              <span className="text-[10px] font-mono text-teal-400 font-semibold bg-teal-500/10 px-2 py-0.5 rounded border border-teal-500/20">
                02 // TELEMETRY & IOT
              </span>
              <Radio className="w-4 h-4 text-slate-400" />
            </div>
            <h3 className="text-base font-bold text-white mb-2">Connected Streams</h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Microcontroller-to-cloud telemetry pipelines, structured payload formatting, Firebase/Node.js persistence, and actuator relay triggers.
            </p>
          </div>

          <div className="p-5 rounded-xl bg-slate-900/90 border border-slate-800 hover:border-slate-700 transition-colors">
            <div className="flex items-center justify-between mb-3">
              <span className="text-[10px] font-mono text-teal-400 font-semibold bg-teal-500/10 px-2 py-0.5 rounded border border-teal-500/20">
                03 // SOFTWARE & TOOLING
              </span>
              <Terminal className="w-4 h-4 text-slate-400" />
            </div>
            <h3 className="text-base font-bold text-white mb-2">Web & Developer Tools</h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Component architecture with React and TypeScript, Component frame-tree inspection via Framer Plugin API, and defensive navigation wrappers.
            </p>
          </div>

        </div>

        {/* Degree Tag */}
        <div className="flex flex-wrap gap-4 text-xs font-mono text-slate-400">
          <div className="flex items-center gap-2 bg-slate-900/60 px-3.5 py-2 rounded-lg border border-slate-800">
            <Layers className="w-4 h-4 text-teal-400" />
            <span>Degree Field: Electronics & Computer Engineering</span>
          </div>
        </div>

      </div>
    </section>
  );
};
