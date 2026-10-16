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
import { SelectedProjects, OtherProjects, AllProjects } from './data/portfolioData';
import { Project } from './types/portfolio';
import { Cpu, Layers, ShieldCheck } from 'lucide-react';

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
        <Hero />

        {/* Selected Work Section */}
        <section id="work" className="py-16 sm:py-20 bg-slate-950 border-b border-slate-800">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

            <div className="mb-10 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
              <div>
                <span className="text-xs font-mono uppercase tracking-widest text-teal-400 font-semibold flex items-center gap-2">
                  <Cpu className="w-3.5 h-3.5" />
                  <span>Featured Case Studies</span>
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mt-1">
                  Selected Work
                </h2>
              </div>
              <span className="text-xs font-mono text-slate-400">
                Click any project to inspect architecture & scope
              </span>
            </div>

            {/* Grid of Selected Work Projects (Omiru, Alert Lens NG, SiteForge) */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {SelectedProjects.map((project) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  onSelect={(p) => setSelectedProject(p)}
                />
              ))}
            </div>

          </div>
        </section>

        {/* Other Projects Section */}
        <section id="other-projects" className="py-16 sm:py-20 bg-slate-950 border-b border-slate-800">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

            <div className="mb-8">
              <span className="text-xs font-mono uppercase tracking-widest text-teal-400 font-semibold flex items-center gap-2">
                <Layers className="w-3.5 h-3.5" />
                <span>Hardware & Prototype Engineering</span>
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mt-1">
                Hardware & Sensor Prototypes
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {OtherProjects.map((project) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  onSelect={(p) => setSelectedProject(p)}
                />
              ))}
            </div>

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
