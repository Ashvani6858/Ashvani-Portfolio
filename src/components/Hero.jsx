import React, { useState } from 'react';
import { 
  Sparkles, 
  ArrowRight, 
  Copy, 
  Check, 
  Terminal, 
  Download, 
  ExternalLink,
  ShieldCheck,
  Code2,
  FileText
} from 'lucide-react';
import { DeveloperCard3D } from './DeveloperCard3D';
import confetti from 'canvas-confetti';
import { playSound } from '../utils/soundEffects';

export const Hero = ({ personalData, onOpenResume }) => {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    playSound('success');
    navigator.clipboard.writeText(personalData.contact.email);
    setCopiedEmail(true);
    try {
      confetti({
        particleCount: 50,
        spread: 60,
        origin: { y: 0.6 }
      });
    } catch (e) {}
    setTimeout(() => setCopiedEmail(false), 3000);
  };

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Dynamic ambient background glow orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[750px] h-[550px] bg-gradient-to-tr from-cyan-500/15 via-indigo-600/10 to-purple-500/15 blur-[160px] rounded-full pointer-events-none -z-10 animate-pulse-slow" />
      <div className="absolute top-20 right-10 w-96 h-96 bg-cyan-500/10 blur-[130px] rounded-full pointer-events-none -z-10" />

      {/* Grid Pattern Background */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Hero Content (7 cols) */}
          <div className="lg:col-span-7 space-y-8 text-center lg:text-left">
            {/* Author Profile & Status Pill */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3">
              <a
                href="#about"
                className="flex items-center gap-2.5 p-1.5 pr-3.5 rounded-full bg-zinc-900/90 border border-emerald-500/40 shadow-lg shadow-emerald-500/10 hover:border-emerald-400 backdrop-blur-md transition-all group"
              >
                <img
                  src={personalData.image || "/images/profile.jpg"}
                  alt={personalData.name}
                  className="w-8 h-8 rounded-full object-cover object-top ring-1.5 ring-emerald-400 group-hover:scale-105 transition-transform"
                />
                <div className="text-left">
                  <span className="text-xs font-heading font-bold text-white block leading-tight">Ashvani Singh</span>
                  <span className="text-[10px] font-mono text-emerald-400 leading-none">B.Tech AIDS · 2027 Batch</span>
                </div>
              </a>

              <div className="inline-flex items-center gap-2 px-3.5 py-2 rounded-full bg-zinc-900/80 border border-zinc-700/60 shadow-inner backdrop-blur-md">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                </span>
                <span className="text-[11px] font-mono font-medium text-zinc-300">
                  {personalData.contact.status}
                </span>
              </div>
            </div>

            {/* Main Headline */}
            <div className="space-y-3">
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-heading font-black tracking-tight text-white leading-[1.08]">
                Hi, I'm <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-cyan-200 to-cyan-400">
                  {personalData.name}
                </span>
              </h1>
              <p className="text-xl sm:text-2xl font-heading font-semibold text-zinc-300">
                {personalData.title}
              </p>
            </div>

            {/* Value Proposition Description */}
            <p className="text-base sm:text-lg text-zinc-400 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              {personalData.bio}
            </p>

            {/* Quick CTAs */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 pt-2">
              <a
                href="#projects"
                onClick={() => playSound('click')}
                className="px-6 py-3.5 rounded-2xl bg-gradient-to-r from-cyan-500 via-teal-400 to-blue-600 text-zinc-950 font-bold text-sm font-mono uppercase tracking-wider shadow-xl shadow-cyan-500/25 hover:opacity-95 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center gap-2"
              >
                <span>Explore Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <button
                onClick={onOpenResume}
                className="px-5 py-3.5 rounded-2xl bg-zinc-900/90 hover:bg-zinc-800 border border-zinc-750 border-zinc-700/80 text-zinc-200 font-mono text-sm font-medium transition-all flex items-center gap-2"
              >
                <FileText className="w-4 h-4 text-cyan-400" />
                <span>View Resume</span>
              </button>

              <button
                onClick={handleCopyEmail}
                className="px-4 py-3.5 rounded-2xl bg-zinc-900/60 hover:bg-zinc-800 border border-zinc-800 text-zinc-400 hover:text-white font-mono text-xs transition-colors flex items-center gap-1.5"
                title="Copy ashvanisingh930@gmail.com"
              >
                {copiedEmail ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copiedEmail ? 'Email Copied!' : 'Copy Email'}</span>
              </button>
            </div>

            {/* Fast Stats Ticker */}
            <div className="pt-6 border-t border-zinc-850 border-zinc-800/80 grid grid-cols-3 gap-4 max-w-lg mx-auto lg:mx-0">
              <div>
                <div className="text-2xl sm:text-3xl font-heading font-black text-white">7.6</div>
                <div className="text-xs text-zinc-500 font-mono">GL Bajaj CGPA</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-heading font-black text-cyan-400">2+</div>
                <div className="text-xs text-zinc-500 font-mono">Production Platforms</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-heading font-black text-emerald-400">100%</div>
                <div className="text-xs text-zinc-500 font-mono">ACID Concurrency</div>
              </div>
            </div>
          </div>

          {/* Right Column: 3D Holographic Developer Card (5 cols) */}
          <div className="lg:col-span-5 flex justify-center">
            <DeveloperCard3D personalData={personalData} />
          </div>
        </div>

        {/* Marquee Stack Badges */}
        <div className="mt-20 pt-8 border-t border-zinc-800/60">
          <div className="text-center text-xs font-mono uppercase tracking-widest text-zinc-500 mb-6">
            Core Technology Architecture
          </div>
          <div className="flex flex-wrap items-center justify-center gap-3">
            {[
              { name: 'Java', role: 'Core OOP' },
              { name: 'Spring Boot', role: 'Microservices' },
              { name: 'React.js', role: 'Modern UI' },
              { name: 'Node.js', role: 'High I/O' },
              { name: 'MySQL', role: 'Relational' },
              { name: 'PostgreSQL', role: 'Enterprise DB' },
              { name: 'Prisma ORM', role: 'Type-Safe' },
              { name: 'JWT & bcrypt', role: 'Security' },
              { name: 'JUnit', role: 'Testing' },
              { name: 'Render & Aiven', role: 'Cloud' }
            ].map((tech) => (
              <div 
                key={tech.name}
                className="px-3.5 py-1.5 rounded-xl bg-zinc-900/60 border border-zinc-800/80 text-xs font-mono text-zinc-300 flex items-center gap-2 hover:border-zinc-700 transition-colors"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                <span className="font-semibold text-white">{tech.name}</span>
                <span className="text-[10px] text-zinc-500">({tech.role})</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
