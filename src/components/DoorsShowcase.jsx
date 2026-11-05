import React, { useState } from 'react';
import { 
  Sparkles, 
  DoorOpen, 
  ArrowRight, 
  Layers, 
  Code2, 
  ShieldCheck, 
  Cpu, 
  ChevronRight,
  Flame,
  CheckCircle2
} from 'lucide-react';
import { playSound } from '../utils/soundEffects';

export const DoorsShowcase = ({ doors }) => {
  const [activeDoor, setActiveDoor] = useState(0);

  const handleDoorClick = (index) => {
    playSound('door');
    setActiveDoor(index);
  };

  const active = doors[activeDoor] || doors[0];

  return (
    <section id="doors" className="py-24 relative overflow-hidden">
      {/* Background radial atmosphere */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-emerald-500/10 blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono uppercase tracking-widest mb-4">
            <DoorOpen className="w-4 h-4" />
            <span>Interactive Skill Vaults</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-heading font-extrabold text-white tracking-tight">
            My Craft, One <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-teal-300 to-indigo-400">Door Per Domain</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-zinc-400">
            Step through each architectural vault to see how I connect core computer science theory with production-grade backend and frontend engineering.
          </p>
        </div>

        {/* 4 Interactive Doors Selector */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
          {doors.map((door, idx) => {
            const isSelected = activeDoor === idx;
            return (
              <button
                key={door.id}
                onClick={() => handleDoorClick(idx)}
                className={`group relative text-left p-5 rounded-2xl transition-all duration-300 border ${
                  isSelected 
                    ? 'bg-zinc-900/90 border-cyan-500/60 shadow-xl shadow-cyan-500/10 ring-1 ring-cyan-500/40' 
                    : 'bg-zinc-950/60 border-zinc-800/80 hover:bg-zinc-900/50 hover:border-zinc-700'
                }`}
              >
                {/* Glow bar indicator */}
                <div 
                  className={`absolute top-0 left-6 right-6 h-[2px] transition-all duration-300 ${
                    isSelected ? 'bg-gradient-to-r from-cyan-400 to-indigo-500 opacity-100' : 'opacity-0'
                  }`}
                />

                <div className="flex items-center justify-between mb-4">
                  <span className={`text-2xl font-heading font-black tracking-tight ${isSelected ? 'text-cyan-400' : 'text-zinc-600'}`}>
                    {door.doorNumber}
                  </span>
                  <div className={`w-8 h-8 rounded-xl flex items-center justify-center transition-all ${
                    isSelected ? 'bg-cyan-500/20 text-cyan-300' : 'bg-zinc-800 text-zinc-400 group-hover:text-zinc-200'
                  }`}>
                    <DoorOpen className={`w-4 h-4 transition-transform duration-300 ${isSelected ? 'rotate-12 scale-110 text-cyan-400' : ''}`} />
                  </div>
                </div>

                <h3 className="font-heading font-bold text-base text-white mb-1 group-hover:text-cyan-300 transition-colors">
                  {door.title}
                </h3>
                <p className="text-xs text-zinc-400 line-clamp-1 mb-3">
                  {door.tagline}
                </p>

                <div className="flex items-center gap-1.5 text-[11px] font-mono text-zinc-500">
                  <span>{door.skills.length} core competencies</span>
                  <ChevronRight className={`w-3 h-3 transition-transform ${isSelected ? 'translate-x-1 text-cyan-400' : 'group-hover:translate-x-0.5'}`} />
                </div>
              </button>
            );
          })}
        </div>

        {/* Selected Door Reveal Portal */}
        <div className="relative rounded-3xl bg-gradient-to-b from-zinc-900/90 via-[#0b0c10] to-black border border-zinc-800/80 p-6 sm:p-10 shadow-2xl overflow-hidden backdrop-blur-xl">
          {/* Subtle light leak from "behind the door" */}
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-[100px] pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Column: Domain Deep-Dive */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center gap-3">
                <span className="px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-500/40 text-cyan-300 text-xs font-mono font-medium">
                  DOOR {active.doorNumber} · UNLOCKED
                </span>
                <span className="text-xs font-mono text-zinc-500">
                  {active.tagline}
                </span>
              </div>

              <div>
                <h3 className="text-2xl sm:text-4xl font-heading font-black text-white leading-tight">
                  {active.title}
                </h3>
                <p className="mt-3 text-sm sm:text-base text-zinc-300 leading-relaxed">
                  {active.description}
                </p>
              </div>

              {/* Technologies within this domain */}
              <div>
                <h4 className="text-xs font-mono uppercase tracking-wider text-zinc-400 mb-3">
                  Integrated Technologies & Frameworks
                </h4>
                <div className="flex flex-wrap gap-2">
                  {active.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 rounded-xl bg-zinc-800/80 border border-zinc-700/60 text-xs font-medium text-zinc-200 flex items-center gap-1.5 shadow-sm"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Metric stats card */}
              <div className="grid grid-cols-3 gap-3 p-4 rounded-2xl bg-zinc-950/80 border border-zinc-800/80">
                <div>
                  <div className="text-xs font-mono text-zinc-500">Primary Core</div>
                  <div className="text-sm font-bold text-white font-heading mt-0.5 truncate">{active.stats.primary}</div>
                </div>
                <div>
                  <div className="text-xs font-mono text-zinc-500">Focus</div>
                  <div className="text-sm font-bold text-cyan-400 font-heading mt-0.5 truncate">{active.stats.metric}</div>
                </div>
                <div>
                  <div className="text-xs font-mono text-zinc-500">Benchmark</div>
                  <div className="text-sm font-bold text-emerald-400 font-heading mt-0.5 truncate">{active.stats.speed}</div>
                </div>
              </div>
            </div>

            {/* Right Column: Visual Vault Simulation */}
            <div className="lg:col-span-5">
              <div className="relative p-6 sm:p-8 rounded-2xl bg-zinc-950 border border-zinc-800/90 shadow-inner flex flex-col justify-between h-full min-h-[300px]">
                <div className="flex items-center justify-between border-b border-zinc-800 pb-3 mb-4">
                  <div className="flex items-center gap-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                    <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                  </div>
                  <span className="text-[11px] font-mono text-zinc-500">domain://architecture.spec</span>
                </div>

                <div className="space-y-3 font-mono text-xs text-zinc-300">
                  <div className="text-cyan-400">// Ashvani Singh Engineering Blueprint</div>
                  <div>
                    <span className="text-purple-400">class</span> <span className="text-yellow-300">{active.title.replace(/[^a-zA-Z]/g, '')}</span> <span className="text-zinc-500">&#123;</span>
                  </div>
                  <div className="pl-4 text-zinc-400">
                    <span className="text-cyan-400">@Status</span> = <span className="text-emerald-400">"PRODUCTION_READY"</span>;
                  </div>
                  <div className="pl-4 text-zinc-400">
                    <span className="text-purple-400">val</span> coreCompetency = [
                    <span className="text-amber-300">"{active.skills.slice(0, 3).join('", "')}"</span>];
                  </div>
                  <div className="pl-4 text-zinc-400">
                    <span className="text-blue-400">assert</span>(academicInstitution == <span className="text-emerald-400">"GL Bajaj"</span>);
                  </div>
                  <div className="text-zinc-500">&#125;</div>
                </div>

                <div className="mt-6 pt-4 border-t border-zinc-800 flex items-center justify-between">
                  <a 
                    href="#projects"
                    className="inline-flex items-center gap-2 text-xs font-semibold text-cyan-400 hover:text-cyan-300 font-mono transition-colors"
                  >
                    <span>Inspect Projects Using This Domain</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                  <span className="text-[10px] font-mono text-zinc-600">ID: VAULT-{active.doorNumber}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
