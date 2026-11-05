import React from 'react';
import { 
  ArrowUp, 
  Mail, 
  Phone, 
  ShieldCheck, 
  Heart,
  Code2
} from 'lucide-react';
import { Github, Linkedin, LeetCode } from './BrandIcons';
import { playSound } from '../utils/soundEffects';

export const Footer = ({ personalData, githubUrl, onOpenResume }) => {
  const scrollToTop = () => {
    playSound('click');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-zinc-800/80 bg-zinc-950 pt-16 pb-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-zinc-850 border-zinc-800/80">
          {/* Brand & Mission (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl overflow-hidden p-[1px] bg-gradient-to-tr from-emerald-400 via-teal-300 to-cyan-500 shadow-lg shadow-emerald-500/20 shrink-0">
                <img
                  src="/images/profile.jpg"
                  alt="Ashvani Singh"
                  className="w-full h-full object-cover object-top rounded-xl"
                  onError={(e) => {
                    e.target.style.display = 'none';
                  }}
                />
              </div>
              <div>
                <h3 className="font-heading font-bold text-white text-base">
                  {personalData.name}
                </h3>
                <p className="text-xs text-emerald-400 font-mono">
                  {personalData.title}
                </p>
              </div>
            </div>

            <p className="text-xs text-zinc-400 leading-relaxed max-w-sm">
              Undergraduate in B.Tech (Artificial Intelligence & Data Science, 2027 Batch) at G.L. Bajaj Institute of Technology & Management. Hailing from Gorakhpur, UP. Building high-concurrency Java & Spring Boot backend services and fluid React web applications.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href={personalData.contact.linkedIn}
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-white hover:border-zinc-700 transition-colors"
                title="LinkedIn Profile"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={githubUrl}
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-white hover:border-zinc-700 transition-colors"
                title="GitHub Profile"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={personalData.contact.leetCode}
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-amber-400 hover:border-zinc-700 transition-colors"
                title="LeetCode Profile"
              >
                <LeetCode className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${personalData.contact.email}`}
                className="w-8 h-8 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-emerald-400 hover:border-zinc-700 transition-colors"
                title="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 1: Featured Systems */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-white font-semibold">
              Featured Work
            </h4>
            <ul className="space-y-2 text-xs text-zinc-400">
              <li>
                <a href="#projects" className="hover:text-cyan-400 transition-colors">
                  ParkEase Parking System
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-cyan-400 transition-colors">
                  MediMatrix Hospital Service
                </a>
              </li>
              <li>
                <a href="#doors" className="hover:text-cyan-400 transition-colors">
                  Domain Vaults
                </a>
              </li>
              <li>
                <a href="#skills" className="hover:text-cyan-400 transition-colors">
                  Prisma & ACID Locks
                </a>
              </li>
            </ul>
          </div>

          {/* Column 2: Navigation */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-white font-semibold">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs text-zinc-400">
              <li>
                <a href="#" className="hover:text-cyan-400 transition-colors">
                  Home / Overview
                </a>
              </li>
              <li>
                <a href="#doors" className="hover:text-cyan-400 transition-colors">
                  Architectural Doors
                </a>
              </li>
              <li>
                <a href="#skills" className="hover:text-cyan-400 transition-colors">
                  Technical Skills
                </a>
              </li>
              <li>
                <a href="#timeline" className="hover:text-cyan-400 transition-colors">
                  My Story & Education
                </a>
              </li>
              <li>
                <button onClick={onOpenResume} className="hover:text-cyan-400 transition-colors text-left">
                  Printable Resume
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Status & Credentials */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-white font-semibold">
              Standing & Status
            </h4>
            <ul className="space-y-2 text-xs text-zinc-400 font-mono">
              <li className="flex items-center gap-1.5 text-emerald-400">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                Available for Work
              </li>
              <li>G.L. Bajaj ITM (2027 Batch, AIDS)</li>
              <li>CGPA: 7.6 / 10</li>
              <li>Gorakhpur / Greater Noida, UP</li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-zinc-500">
          <div>
            &copy; {new Date().getFullYear()} Ashvani Singh. All rights reserved.
          </div>

          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1">
              Built with React, Tailwind & Vite
            </span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-zinc-400 hover:text-white transition-colors flex items-center gap-1"
              title="Back to Top"
            >
              <ArrowUp className="w-3.5 h-3.5" />
              <span>Top</span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
