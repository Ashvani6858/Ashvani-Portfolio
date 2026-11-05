import React, { useState, useRef } from 'react';
import { 
  ShieldCheck, 
  Sparkles, 
  RotateCw, 
  GraduationCap, 
  MapPin, 
  Award, 
  Terminal, 
  CheckCircle, 
  ExternalLink,
  Code2,
  Cpu,
  Layers,
  Fingerprint
} from 'lucide-react';
import { playSound } from '../utils/soundEffects';

export const DeveloperCard3D = ({ personalData }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [glarePosition, setGlarePosition] = useState({ x: 50, y: 50, opacity: 0 });
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    // Calculate rotation (-12deg to +12deg)
    const rotX = ((y - centerY) / centerY) * -12;
    const rotY = ((x - centerX) / centerX) * 12;

    setRotateX(rotX);
    setRotateY(rotY);

    // Calculate glare position
    const glareX = (x / rect.width) * 100;
    const glareY = (y / rect.height) * 100;
    setGlarePosition({ x: glareX, y: glareY, opacity: 0.25 });
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
    setGlarePosition({ x: 50, y: 50, opacity: 0 });
  };

  const toggleFlip = () => {
    playSound('flip');
    setIsFlipped(!isFlipped);
  };

  return (
    <div className="flex flex-col items-center">
      {/* Interaction helper pill */}
      <div className="mb-4 inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-zinc-900/80 border border-zinc-800 text-xs text-zinc-400 backdrop-blur-md">
        <Sparkles className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
        <span>Move cursor to tilt in 3D · Click card to flip</span>
        <button 
          onClick={toggleFlip}
          className="ml-2 px-2 py-0.5 rounded bg-zinc-800 hover:bg-zinc-700 text-zinc-200 text-[10px] font-mono flex items-center gap-1 transition-colors"
        >
          <RotateCw className="w-3 h-3" /> Flip
        </button>
      </div>

      {/* 3D Perspective Container */}
      <div 
        className="w-full max-w-[420px] h-[540px] perspective-1000 cursor-pointer select-none group"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        onClick={toggleFlip}
      >
        <div 
          ref={cardRef}
          className="w-full h-full relative transition-transform duration-300 ease-out preserve-3d"
          style={{
            transform: `rotateX(${rotateX}deg) rotateY(${rotateY + (isFlipped ? 180 : 0)}deg)`
          }}
        >
          {/* ================= FRONT SIDE ================= */}
          <div className="absolute inset-0 w-full h-full rounded-3xl p-7 bg-gradient-to-br from-zinc-900/95 via-[#0c0d12] to-zinc-950 border border-zinc-700/60 shadow-2xl backface-hidden overflow-hidden flex flex-col justify-between">
            {/* Holographic dynamic glare overlay */}
            <div 
              className="absolute inset-0 pointer-events-none transition-opacity duration-300 rounded-3xl"
              style={{
                opacity: glarePosition.opacity,
                background: `radial-gradient(circle 280px at ${glarePosition.x}% ${glarePosition.y}%, rgba(6, 182, 212, 0.4), rgba(168, 85, 247, 0.2), transparent 70%)`
              }}
            />

            {/* Subtle circuit/matrix background pattern */}
            <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />

            {/* Card Header */}
            <div className="relative z-10 flex items-start justify-between">
              <div className="flex items-center gap-3">
                <div className="relative w-14 h-14 rounded-2xl p-[1.5px] bg-gradient-to-tr from-emerald-400 via-teal-300 to-cyan-500 shadow-lg shadow-emerald-500/20 shrink-0">
                  <img
                    src={personalData.image || "/images/profile.jpg"}
                    alt={personalData.name}
                    className="w-full h-full rounded-2xl object-cover object-top"
                    onError={(e) => {
                      e.target.style.display = 'none';
                    }}
                  />
                </div>
                <div>
                  <div className="flex items-center gap-1.5">
                    <span className="text-xs font-mono font-medium text-emerald-400 uppercase tracking-wider">Verified Engineer</span>
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                  </div>
                  <h3 className="font-heading font-bold text-lg text-white leading-tight">
                    {personalData.name}
                  </h3>
                </div>
              </div>

              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-[11px] font-medium text-emerald-400">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                Available
              </span>
            </div>

            {/* Core Role & Signature Badges */}
            <div className="relative z-10 my-4 space-y-3">
              <div className="p-3 rounded-2xl bg-zinc-900/80 border border-zinc-800/80 backdrop-blur-md">
                <div className="text-[11px] font-mono text-zinc-400 uppercase tracking-widest mb-1 flex items-center gap-1.5">
                  <Terminal className="w-3 h-3 text-cyan-400" /> Primary Focus
                </div>
                <div className="font-heading text-base font-semibold text-zinc-100">
                  Full Stack Developer & Java Engineer
                </div>
                <p className="text-xs text-zinc-400 mt-1 line-clamp-2">
                  Specializing in Spring Boot microservices, high-throughput REST APIs, and modern React interfaces.
                </p>
              </div>

              {/* Holographic Technical Metrics */}
              <div className="grid grid-cols-3 gap-2">
                <div className="p-2.5 rounded-xl bg-zinc-900/60 border border-zinc-800 text-center">
                  <div className="text-base font-bold text-cyan-400 font-heading">7.6</div>
                  <div className="text-[10px] text-zinc-400 font-mono">B.Tech CGPA</div>
                </div>
                <div className="p-2.5 rounded-xl bg-zinc-900/60 border border-zinc-800 text-center">
                  <div className="text-base font-bold text-emerald-400 font-heading">2027</div>
                  <div className="text-[10px] text-zinc-400 font-mono">Grad Year</div>
                </div>
                <div className="p-2.5 rounded-xl bg-zinc-900/60 border border-zinc-800 text-center">
                  <div className="text-base font-bold text-purple-400 font-heading">2+</div>
                  <div className="text-[10px] text-zinc-400 font-mono">Production Apps</div>
                </div>
              </div>

              {/* Key stack tags */}
              <div className="flex flex-wrap gap-1.5 pt-1">
                {['Java', 'Spring Boot', 'React.js', 'Node.js', 'MySQL', 'Prisma', 'JWT'].map((tech) => (
                  <span 
                    key={tech}
                    className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-zinc-800/90 text-zinc-300 border border-zinc-700/50"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Card Footer */}
            <div className="relative z-10 pt-3 border-t border-zinc-800/80 flex items-center justify-between text-xs text-zinc-400">
              <div className="flex items-center gap-1.5 font-mono text-[11px]">
                <Fingerprint className="w-3.5 h-3.5 text-zinc-500" />
                <span>DEV-ID: #AS-2027-GLB</span>
              </div>
              <div className="flex items-center gap-1 text-[11px] text-cyan-400 font-mono group-hover:underline">
                <span>View Back</span>
                <RotateCw className="w-3 h-3 transition-transform group-hover:rotate-180 duration-500" />
              </div>
            </div>
          </div>

          {/* ================= BACK SIDE ================= */}
          <div className="absolute inset-0 w-full h-full rounded-3xl p-7 bg-gradient-to-br from-[#0c0d12] via-zinc-900 to-black border border-cyan-500/40 shadow-2xl backface-hidden rotate-y-180 overflow-hidden flex flex-col justify-between">
            {/* Holographic dynamic glare overlay */}
            <div 
              className="absolute inset-0 pointer-events-none rounded-3xl"
              style={{
                background: 'radial-gradient(circle 240px at 70% 30%, rgba(168, 85, 247, 0.15), rgba(6, 182, 212, 0.1), transparent 70%)'
              }}
            />

            <div className="relative z-10 flex items-center justify-between border-b border-zinc-800 pb-3">
              <div className="flex items-center gap-2">
                <GraduationCap className="w-5 h-5 text-emerald-400" />
                <div>
                  <h4 className="font-heading font-bold text-sm text-white">Academic Credential</h4>
                  <p className="text-[10px] font-mono text-zinc-400">G.L. Bajaj Institute of Tech & Management</p>
                </div>
              </div>
              <span className="px-2 py-0.5 rounded bg-emerald-950/80 border border-emerald-500/40 text-[10px] font-mono text-emerald-300">
                2027 BATCH
              </span>
            </div>

            <div className="relative z-10 my-3 space-y-3">
              <div className="p-3 rounded-2xl bg-zinc-950/70 border border-zinc-800 space-y-2">
                <div className="flex justify-between items-center text-xs">
                  <span className="text-zinc-400 font-mono">Degree:</span>
                  <span className="font-medium text-white text-right">B.Tech, AIDS (2027 Batch)</span>
                </div>
                <div className="flex justify-between items-center text-xs">
                  <span className="text-zinc-400 font-mono">Location:</span>
                  <span className="text-zinc-300">Gorakhpur / Greater Noida, UP</span>
                </div>
                <div className="flex justify-between items-center text-xs">
                  <span className="text-zinc-400 font-mono">Academic Standing:</span>
                  <span className="font-bold text-emerald-400 font-heading">7.6 CGPA</span>
                </div>
              </div>

              {/* Core Competencies Matrix */}
              <div className="space-y-1.5">
                <div className="text-[11px] font-mono text-zinc-400 uppercase tracking-wider">
                  Verified Competencies
                </div>
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div className="flex items-center gap-1.5 text-zinc-300 bg-zinc-900/60 p-2 rounded-xl border border-zinc-800/80">
                    <CheckCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span className="truncate">Data Structures & Algo</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-zinc-300 bg-zinc-900/60 p-2 rounded-xl border border-zinc-800/80">
                    <CheckCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span className="truncate">Spring Boot & Microservices</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-zinc-300 bg-zinc-900/60 p-2 rounded-xl border border-zinc-800/80">
                    <CheckCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span className="truncate">MySQL & PostgreSQL</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-zinc-300 bg-zinc-900/60 p-2 rounded-xl border border-zinc-800/80">
                    <CheckCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span className="truncate">JWT Auth & RBAC</span>
                  </div>
                </div>
              </div>

              {/* Security clearance / cryptographic badge */}
              <div className="p-2.5 rounded-xl bg-zinc-950/80 border border-zinc-800/80 text-[10px] font-mono text-zinc-500 flex items-center justify-between">
                <span>SHA-256: 7f8a..90b2</span>
                <span className="text-cyan-400/80">ROLE_FULLSTACK_DEV</span>
              </div>
            </div>

            <div className="relative z-10 pt-3 border-t border-zinc-800 flex items-center justify-between text-xs text-zinc-400">
              <span className="font-mono text-[11px] text-zinc-500">Tap anywhere to flip back</span>
              <span className="flex items-center gap-1 text-[11px] text-cyan-400 font-mono">
                <RotateCw className="w-3 h-3" /> Front Side
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
