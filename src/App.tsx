/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ProjectCard } from './components/ProjectCard';
import { CaseStudyModal } from './components/CaseStudyModal';
import { AboutSection } from './components/AboutSection';
import { TechnicalSkillsSection } from './components/TechnicalSkillsSection';
import { ExperienceSection } from './components/ExperienceSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import {
  OmiruProject,
  AlertLensNGProject,
  SiteForgeProject,
  FireGasAlarmProject,
  AllProjects
} from './data/portfolioData';
import { Project } from './types/portfolio';
import { Cpu, Layers } from 'lucide-react';

export default function App() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const handleSelectProjectId = (id: string) => {
    const proj = AllProjects.find(p => p.id === id);
    if (proj) {
      setSelectedProject(proj);
    }
  };

  return (
    <div id="top" className="min-h-screen bg-slate-950 text-slate-100 flex flex-col selection:bg-teal-500 selection:text-slate-950">

      {/* Header Navigation */}
      <Header onSelectProject={handleSelectProjectId} />

      <main className="flex-grow">
        {/* Hero Section */}
        <Hero onSelectProject={(p) => setSelectedProject(p)} />

        {/* Selected Work Section */}
        <section id="work" className="py-16 sm:py-20 lg:py-24 bg-slate-950 border-b border-slate-800/80">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

            {/* Section Header */}
            <div className="mb-10 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
              <div>
                <span className="text-xs font-mono uppercase tracking-widest text-teal-400 font-semibold flex items-center gap-2">
                  <Cpu className="w-3.5 h-3.5" />
                  <span>01 // Selected Systems</span>
                </span>
                <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight mt-1">
                  Featured Engineering Work
                </h2>
              </div>
              <span className="text-xs font-mono text-slate-400">
                Click any system to inspect technical architecture & scope
              </span>
            </div>

            {/* Flagship Wide Showcase (Omiru / AgroFlow) */}
            <ProjectCard
              project={OmiruProject}
              onSelect={(p) => setSelectedProject(p)}
              variant="featured"
            />

            {/* Secondary Dual Architecture Grid (Alert Lens NG & SiteForge) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
              <ProjectCard
                project={AlertLensNGProject}
                onSelect={(p) => setSelectedProject(p)}
                variant="standard"
              />
              <ProjectCard
                project={SiteForgeProject}
                onSelect={(p) => setSelectedProject(p)}
                variant="standard"
              />
            </div>

          </div>
        </section>

        {/* Hardware Prototypes Section */}
        <section id="other-projects" className="py-16 sm:py-20 bg-slate-950 border-b border-slate-800/80">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

            <div className="mb-8">
              <span className="text-xs font-mono uppercase tracking-widest text-teal-400 font-semibold flex items-center gap-2">
                <Layers className="w-3.5 h-3.5" />
                <span>02 // Hardware Prototypes</span>
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mt-1">
                Sensor & Safety Electronics
              </h2>
              <p className="text-sm text-slate-300 mt-2 max-w-2xl">
                Benchtop physical circuit implementations, multi-sensor analog signal acquisition, and low-latency safety actuation.
              </p>
            </div>

            {/* Hardware System Layout (ESP32 Fire & Gas Alarm System) */}
            <ProjectCard
              project={FireGasAlarmProject}
              onSelect={(p) => setSelectedProject(p)}
              variant="hardware"
            />

          </div>
        </section>

        {/* About Section */}
        <AboutSection />

        {/* Technical Areas Section */}
        <TechnicalSkillsSection />

        {/* Work Experience Section */}
        <ExperienceSection />

        {/* Contact Section */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Unified Case Study Modal */}
      {selectedProject && (
        <CaseStudyModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}

    </div>
  );
}
