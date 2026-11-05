import React, { useState } from 'react';
import { 
  FolderGit2, 
  ExternalLink, 
  Code2, 
  Layers, 
  Database, 
  ShieldCheck, 
  Server, 
  CheckCircle2, 
  ChevronDown, 
  ChevronUp, 
  Sparkles,
  ArrowRight,
  Terminal,
  Cpu
} from 'lucide-react';
import { ParkEaseSimulator } from './ParkEaseSimulator';
import { MediMatrixSimulator } from './MediMatrixSimulator';
import { playSound } from '../utils/soundEffects';

export const ProjectsSection = ({ projects }) => {
  const [expandedCode, setExpandedCode] = useState(null);

  const toggleCode = (id) => {
    playSound('click');
    setExpandedCode(expandedCode === id ? null : id);
  };

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-cyan-500/5 blur-[140px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono uppercase tracking-widest mb-4">
            <FolderGit2 className="w-4 h-4" />
            <span>Featured Full-Stack Architecture</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-heading font-extrabold text-white tracking-tight">
            Production-Grade <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-teal-300 to-indigo-400">Software Systems</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-zinc-400">
            Engineered with modern frontend components, hardened REST APIs, transactional SQL integrity, and live interactive simulators.
          </p>
        </div>

        {/* ================= PROJECT 1: PARKEASE ================= */}
        <div className="mb-28 space-y-8">
          <div className="rounded-3xl bg-gradient-to-br from-zinc-900/90 via-[#0d0e14] to-zinc-950 border border-zinc-800 p-8 sm:p-12 shadow-2xl relative overflow-hidden">
            {/* Top badge line */}
            <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
              <div className="flex items-center gap-3">
                <span className="px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-500/40 text-cyan-400 text-xs font-mono font-medium">
                  PROJECT 01
                </span>
                <span className="px-3 py-1 rounded-full bg-zinc-800/80 text-zinc-300 text-xs font-mono">
                  {projects[0].badge}
                </span>
              </div>
              <span className="text-xs font-mono text-zinc-500">
                Period: {projects[0].period}
              </span>
            </div>

            {/* Title & summary */}
            <div className="max-w-4xl mb-8">
              <h3 className="text-3xl sm:text-4xl font-heading font-black text-white tracking-tight">
                {projects[0].title}
              </h3>
              <p className="text-lg sm:text-xl text-cyan-400 font-heading font-medium mt-1">
                {projects[0].subtitle}
              </p>
              <p className="mt-4 text-sm sm:text-base text-zinc-300 leading-relaxed">
                {projects[0].summary}
              </p>
            </div>

            {/* Tech badges */}
            <div className="mb-8">
              <div className="text-xs font-mono text-zinc-400 uppercase tracking-wider mb-3">
                Technology Stack
              </div>
              <div className="flex flex-wrap gap-2">
                {projects[0].technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1.5 rounded-xl bg-zinc-850 bg-zinc-900/80 border border-zinc-750 border-zinc-700/60 text-xs font-medium text-zinc-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Comprehensive feature matrix */}
            <div className="mb-8 p-6 rounded-2xl bg-zinc-950/60 border border-zinc-850 border-zinc-800/80">
              <h4 className="text-xs font-mono uppercase tracking-wider text-cyan-400 mb-4 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4" /> Core System Features & Capabilities
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                {projects[0].features.map((feat, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs text-zinc-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-1.5 shrink-0" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Architecture Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
              <div className="p-4 rounded-xl bg-zinc-900/50 border border-zinc-800">
                <div className="text-xs font-mono text-zinc-500">Frontend Tier</div>
                <div className="text-xs font-medium text-zinc-300 mt-1">{projects[0].architecture.frontend}</div>
              </div>
              <div className="p-4 rounded-xl bg-zinc-900/50 border border-zinc-800">
                <div className="text-xs font-mono text-zinc-500">Backend API Tier</div>
                <div className="text-xs font-medium text-zinc-300 mt-1">{projects[0].architecture.backend}</div>
              </div>
              <div className="p-4 rounded-xl bg-zinc-900/50 border border-zinc-800">
                <div className="text-xs font-mono text-zinc-500">Database & Security</div>
                <div className="text-xs font-medium text-zinc-300 mt-1">{projects[0].architecture.database}</div>
              </div>
            </div>

            {/* Code Snippet Toggle */}
            <div>
              <button
                onClick={() => toggleCode('parkease')}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-zinc-800/80 hover:bg-zinc-700/80 border border-zinc-700/60 text-xs font-mono text-cyan-300 transition-colors"
              >
                <Code2 className="w-4 h-4" />
                <span>{expandedCode === 'parkease' ? 'Hide Concurrency Transaction Logic' : 'View Double-Booking Prevention Logic (Prisma)'}</span>
                {expandedCode === 'parkease' ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
              </button>

              {expandedCode === 'parkease' && (
                <div className="mt-4 p-4 rounded-2xl bg-zinc-950 border border-zinc-800 font-mono text-xs text-zinc-300 overflow-x-auto shadow-inner animate-fadeIn">
                  <div className="text-[11px] text-zinc-500 pb-2 mb-2 border-b border-zinc-800">
                    // Atomic Prisma Transaction Lock & Overlap Check
                  </div>
                  <pre>{projects[0].codeSnippet}</pre>
                </div>
              )}
            </div>
          </div>

          {/* Embedded Interactive Live Simulator for ParkEase */}
          <div className="relative">
            <div className="flex items-center gap-2 mb-3">
              <Sparkles className="w-4 h-4 text-cyan-400" />
              <h4 className="text-sm font-heading font-bold text-white uppercase tracking-wider">
                Live Interactive Sandbox · ParkEase Simulator
              </h4>
            </div>
            <ParkEaseSimulator />
          </div>
        </div>

        {/* ================= PROJECT 2: MEDIMATRIX ================= */}
        <div className="space-y-8">
          <div className="rounded-3xl bg-gradient-to-br from-zinc-900/90 via-[#100d14] to-zinc-950 border border-zinc-800 p-8 sm:p-12 shadow-2xl relative overflow-hidden">
            {/* Top badge line */}
            <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
              <div className="flex items-center gap-3">
                <span className="px-3 py-1 rounded-full bg-purple-950/80 border border-purple-500/40 text-purple-400 text-xs font-mono font-medium">
                  PROJECT 02
                </span>
                <span className="px-3 py-1 rounded-full bg-zinc-800/80 text-zinc-300 text-xs font-mono">
                  {projects[1].badge}
                </span>
              </div>
              <span className="text-xs font-mono text-zinc-500">
                Period: {projects[1].period}
              </span>
            </div>

            {/* Title & summary */}
            <div className="max-w-4xl mb-8">
              <h3 className="text-3xl sm:text-4xl font-heading font-black text-white tracking-tight">
                {projects[1].title}
              </h3>
              <p className="text-lg sm:text-xl text-purple-400 font-heading font-medium mt-1">
                {projects[1].subtitle}
              </p>
              <p className="mt-4 text-sm sm:text-base text-zinc-300 leading-relaxed">
                {projects[1].summary}
              </p>
            </div>

            {/* Tech badges */}
            <div className="mb-8">
              <div className="text-xs font-mono text-zinc-400 uppercase tracking-wider mb-3">
                Technology Stack
              </div>
              <div className="flex flex-wrap gap-2">
                {projects[1].technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1.5 rounded-xl bg-zinc-900/80 border border-zinc-700/60 text-xs font-medium text-zinc-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Comprehensive feature matrix */}
            <div className="mb-8 p-6 rounded-2xl bg-zinc-950/60 border border-zinc-800/80">
              <h4 className="text-xs font-mono uppercase tracking-wider text-purple-400 mb-4 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4" /> Healthcare Architecture & Workflows
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                {projects[1].features.map((feat, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs text-zinc-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-400 mt-1.5 shrink-0" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Architecture Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
              <div className="p-4 rounded-xl bg-zinc-900/50 border border-zinc-800">
                <div className="text-xs font-mono text-zinc-500">Tier Architecture</div>
                <div className="text-xs font-medium text-zinc-300 mt-1">{projects[1].architecture.pattern}</div>
              </div>
              <div className="p-4 rounded-xl bg-zinc-900/50 border border-zinc-800">
                <div className="text-xs font-mono text-zinc-500">Spring Boot Backend</div>
                <div className="text-xs font-medium text-zinc-300 mt-1">{projects[1].architecture.backend}</div>
              </div>
              <div className="p-4 rounded-xl bg-zinc-900/50 border border-zinc-800">
                <div className="text-xs font-mono text-zinc-500">PostgreSQL Relational DB</div>
                <div className="text-xs font-medium text-zinc-300 mt-1">{projects[1].architecture.database}</div>
              </div>
            </div>

            {/* Code Snippet Toggle */}
            <div>
              <button
                onClick={() => toggleCode('medimatrix')}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-zinc-800/80 hover:bg-zinc-700/80 border border-zinc-700/60 text-xs font-mono text-purple-300 transition-colors"
              >
                <Code2 className="w-4 h-4" />
                <span>{expandedCode === 'medimatrix' ? 'Hide Spring Boot Controller Code' : 'View Spring Security REST Controller Architecture'}</span>
                {expandedCode === 'medimatrix' ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
              </button>

              {expandedCode === 'medimatrix' && (
                <div className="mt-4 p-4 rounded-2xl bg-zinc-950 border border-zinc-800 font-mono text-xs text-zinc-300 overflow-x-auto shadow-inner animate-fadeIn">
                  <div className="text-[11px] text-zinc-500 pb-2 mb-2 border-b border-zinc-800">
                    // Spring Security 6.x RestController & PreAuthorize Annotation Pattern
                  </div>
                  <pre>{projects[1].codeSnippet}</pre>
                </div>
              )}
            </div>
          </div>

          {/* Embedded Interactive Live Simulator for MediMatrix */}
          <div className="relative">
            <div className="flex items-center gap-2 mb-3">
              <Sparkles className="w-4 h-4 text-purple-400" />
              <h4 className="text-sm font-heading font-bold text-white uppercase tracking-wider">
                Live Interactive Sandbox · MediMatrix Hospital Console
              </h4>
            </div>
            <MediMatrixSimulator />
          </div>
        </div>
      </div>
    </section>
  );
};
