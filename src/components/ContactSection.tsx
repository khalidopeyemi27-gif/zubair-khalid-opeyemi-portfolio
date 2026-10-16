import React, { useState } from 'react';
import { Mail, Github, Linkedin, FileText, Send, CheckCircle2 } from 'lucide-react';
import { PersonalProfileLinks } from '../data/portfolioData';

export const ContactSection: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-16 sm:py-20 bg-slate-950 border-b border-slate-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

          {/* Left Column: Direct Links & Email */}
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-teal-400 font-semibold">
              Contact & Links
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mt-1 mb-4">
              Get In Touch
            </h2>
            <p className="text-sm text-slate-300 leading-relaxed mb-6">
              Feel free to reach out for inquiries, technical discussions, or opportunities across Embedded Systems, Software, IoT and AI.
            </p>

            <div className="space-y-3 mb-6">
              <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 flex items-center gap-3">
                <div className="p-2.5 rounded bg-slate-950 border border-slate-800 text-teal-400 shrink-0">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[11px] font-mono text-slate-400 block">Email</span>
                  <a href={`mailto:${PersonalProfileLinks.email}`} className="text-sm font-semibold text-white hover:text-teal-400 transition-colors">
                    {PersonalProfileLinks.email}
                  </a>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 text-xs font-mono">
              <a
                href={PersonalProfileLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile (opens in new tab)"
                title="GitHub Profile"
                className="px-3 py-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-white flex items-center gap-2 transition-colors focus:outline-none focus:ring-2 focus:ring-teal-400 min-h-[44px]"
              >
                <Github className="w-4 h-4 text-teal-400" />
                <span>GitHub</span>
              </a>

              <a
                href={PersonalProfileLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile (opens in new tab)"
                title="LinkedIn Profile"
                className="px-3 py-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-white flex items-center gap-2 transition-colors focus:outline-none focus:ring-2 focus:ring-teal-400 min-h-[44px]"
              >
                <Linkedin className="w-4 h-4 text-teal-400" />
                <span>LinkedIn</span>
              </a>

              <a
                href={PersonalProfileLinks.resume}
                aria-label="Request Resume via Email"
                title="Request Resume (Opens email draft to Khalidopeyemi27@gmail.com)"
                className="px-3 py-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-white flex items-center gap-2 transition-colors focus:outline-none focus:ring-2 focus:ring-teal-400 min-h-[44px]"
              >
                <FileText className="w-4 h-4 text-teal-400" />
                <span>Resume (Request)</span>
              </a>
            </div>
          </div>

          {/* Right Column: Simple Message Form */}
          <div className="p-6 rounded-xl bg-slate-900 border border-slate-800">
            {submitted ? (
              <div className="py-8 text-center space-y-3">
                <div className="w-10 h-10 rounded-full bg-teal-500/20 text-teal-400 flex items-center justify-center mx-auto border border-teal-500/30">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-white">Message Transmitted</h3>
                <p className="text-xs text-slate-300">
                  Thank you for reaching out. Your message has been logged.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({ name: '', email: '', message: '' });
                  }}
                  className="mt-2 text-xs font-mono text-teal-400 hover:underline cursor-pointer focus:outline-none focus:ring-2 focus:ring-teal-400 rounded px-2 py-1"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-3">
                <h3 className="text-sm font-bold text-white mb-2">Send a Message</h3>

                <div>
                  <label htmlFor="contact-name" className="block text-[11px] font-mono text-slate-300 mb-1">
                    Name
                  </label>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Your Name"
                    className="w-full px-3 py-2 rounded-lg bg-slate-950 border border-slate-800 text-xs text-white focus:outline-none focus:border-teal-400"
                  />
                </div>

                <div>
                  <label htmlFor="contact-email" className="block text-[11px] font-mono text-slate-300 mb-1">
                    Email
                  </label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="your.email@example.com"
                    className="w-full px-3 py-2 rounded-lg bg-slate-950 border border-slate-800 text-xs text-white focus:outline-none focus:border-teal-400"
                  />
                </div>

                <div>
                  <label htmlFor="contact-message" className="block text-[11px] font-mono text-slate-300 mb-1">
                    Message
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    required
                    rows={3}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Your message details..."
                    className="w-full px-3 py-2 rounded-lg bg-slate-950 border border-slate-800 text-xs text-white focus:outline-none focus:border-teal-400 resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full py-2.5 rounded-lg bg-teal-400 hover:bg-teal-300 text-slate-950 font-bold text-xs transition-colors flex items-center justify-center gap-2 cursor-pointer focus:outline-none focus:ring-2 focus:ring-teal-400 focus:ring-offset-2 focus:ring-offset-slate-900 min-h-[44px]"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Send Message</span>
                </button>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
};
