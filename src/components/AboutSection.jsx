import React from 'react';
import { 
  User, 
  MapPin, 
  GraduationCap, 
  Code2, 
  CheckCircle2, 
  Sparkles, 
  ExternalLink,
  ShieldCheck,
  Award,
  Terminal,
  Database,
  Cpu
} from 'lucide-react';
import { Github, Linkedin, LeetCode } from './BrandIcons';
import { playSound } from '../utils/soundEffects';

export const AboutSection = ({ personalData, githubUrl }) => {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-10 w-[600px] h-[500px] bg-emerald-500/10 blur-[150px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono uppercase tracking-widest mb-4">
            <User className="w-4 h-4" />
            <span>Engineer Profile</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-heading font-extrabold text-white tracking-tight">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400">Ashvani Singh</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-zinc-400">
            Full Stack Developer specializing in Java, Spring Boot microservices, React.js frontends, and robust database architectures.
          </p>
        </div>

        {/* Main About Card */}
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-zinc-900/90 via-[#0d0e12] to-zinc-950 border border-zinc-800 shadow-2xl backdrop-blur-xl relative overflow-hidden">
          {/* Subtle neon-green top accent line */}
          <div className="absolute top-0 left-12 right-12 h-px bg-gradient-to-r from-transparent via-emerald-400/80 to-transparent" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left: Professional Photograph (5 cols) */}
            <div className="lg:col-span-5 flex flex-col items-center">
              <div className="relative group">
                {/* Glowing neon halo */}
                <div className="absolute -inset-1.5 bg-gradient-to-tr from-emerald-500 via-teal-400 to-cyan-500 rounded-3xl blur-md opacity-40 group-hover:opacity-75 transition duration-500 pointer-events-none" />

                {/* Cropped Professional Photo Frame */}
                <div className="relative w-64 h-72 sm:w-72 sm:h-80 rounded-3xl overflow-hidden border-2 border-emerald-400/60 bg-zinc-950 shadow-2xl">
                  <img
                    src={personalData.image || "/images/profile.jpg"}
                    alt="Ashvani Singh - Full Stack Developer"
                    className="w-full h-full object-cover object-top filter contrast-[1.02] hover:scale-105 transition-transform duration-500"
                  />
                  {/* Bottom glass badge on photo */}
                  <div className="absolute bottom-3 left-3 right-3 p-2.5 rounded-2xl bg-zinc-950/80 border border-zinc-800 backdrop-blur-md flex items-center justify-between text-xs">
                    <div>
                      <div className="font-heading font-bold text-white text-xs">Ashvani Singh</div>
                      <div className="text-[10px] font-mono text-emerald-400">Full Stack Developer</div>
                    </div>
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  </div>
                </div>
              </div>

              {/* Social and Coding Profile Badges */}
              <div className="flex flex-wrap items-center justify-center gap-2.5 mt-6">
                <a
                  href={personalData.contact.linkedIn}
                  target="_blank"
                  rel="noreferrer"
                  onClick={() => playSound('click')}
                  className="px-3 py-1.5 rounded-xl bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 hover:border-blue-500/50 text-zinc-300 hover:text-white text-xs font-mono flex items-center gap-2 transition-all shadow-sm"
                >
                  <Linkedin className="w-3.5 h-3.5 text-blue-400" />
                  <span>LinkedIn</span>
                </a>

                <a
                  href={githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  onClick={() => playSound('click')}
                  className="px-3 py-1.5 rounded-xl bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 hover:border-zinc-700 text-zinc-300 hover:text-white text-xs font-mono flex items-center gap-2 transition-all shadow-sm"
                >
                  <Github className="w-3.5 h-3.5 text-white" />
                  <span>GitHub</span>
                </a>

                <a
                  href={personalData.contact.leetCode}
                  target="_blank"
                  rel="noreferrer"
                  onClick={() => playSound('click')}
                  className="px-3 py-1.5 rounded-xl bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 hover:border-amber-500/50 text-zinc-300 hover:text-white text-xs font-mono flex items-center gap-2 transition-all shadow-sm"
                >
                  <LeetCode className="w-3.5 h-3.5 text-amber-400" />
                  <span>LeetCode</span>
                </a>
              </div>
            </div>

            {/* Right: Bio & Key Highlights (7 cols) */}
            <div className="lg:col-span-7 space-y-6">
              <div className="space-y-3">
                <div className="inline-flex items-center gap-2 text-xs font-mono text-emerald-400 uppercase tracking-widest">
                  <Terminal className="w-3.5 h-3.5" />
                  <span>Engineering Focus & Background</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-heading font-black text-white leading-tight">
                  Passionate about High-Concurrency Systems & Clean Architecture
                </h3>
                <p className="text-sm sm:text-base text-zinc-300 leading-relaxed">
                  I am a Full Stack Developer and undergraduate in **B.Tech (Artificial Intelligence & Data Science, 2027 Batch)** at **G.L. Bajaj Institute of Technology & Management**, hailing from **Gorakhpur, Uttar Pradesh, India**.
                </p>
                <p className="text-sm sm:text-base text-zinc-400 leading-relaxed">
                  My core strengths lie in architecting resilient backend services using Java, Spring Boot, and Node.js/Express, designing normalized ACID-compliant relational schemas in MySQL & PostgreSQL with Prisma ORM, and crafting responsive frontend user interfaces with React.js.
                </p>
              </div>

              {/* Education & Academic Spec Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-2xl bg-zinc-950/80 border border-zinc-800/80 space-y-1">
                  <div className="text-[11px] font-mono text-zinc-400 flex items-center gap-1.5">
                    <GraduationCap className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Education (2027 Batch)</span>
                  </div>
                  <div className="text-sm font-bold text-white font-heading">
                    B.Tech, AIDS (2023–2027)
                  </div>
                  <div className="text-xs text-zinc-400">
                    G.L. Bajaj Institute of Tech & Management
                  </div>
                  <div className="text-[11px] font-mono text-emerald-400 pt-1 font-semibold">
                    CGPA: 7.6 / 10
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-zinc-950/80 border border-zinc-800/80 space-y-1">
                  <div className="text-[11px] font-mono text-zinc-400 flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                    <span>Origin & Location</span>
                  </div>
                  <div className="text-sm font-bold text-white font-heading">
                    Gorakhpur, Uttar Pradesh
                  </div>
                  <div className="text-xs text-zinc-400">
                    College in Greater Noida, UP, India
                  </div>
                  <div className="text-[11px] font-mono text-cyan-400 pt-1 font-semibold">
                    Open to Remote & On-Site Roles
                  </div>
                </div>
              </div>

              {/* Verified Capabilities */}
              <div className="p-4 rounded-2xl bg-zinc-950/60 border border-zinc-800/80 space-y-2">
                <div className="text-[11px] font-mono text-zinc-400 uppercase tracking-wider flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Core Engineering Disciplines</span>
                </div>
                <div className="grid grid-cols-2 gap-2 text-xs text-zinc-300">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span>Java & Spring Boot APIs</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span>React.js Responsive SPAs</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span>PostgreSQL, MySQL & Prisma</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span>JWT Security & Concurrency</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
