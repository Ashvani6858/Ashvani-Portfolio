import React, { useState } from 'react';
import { 
  Coffee, 
  Terminal, 
  Cpu, 
  Layers, 
  Server, 
  Network, 
  Workflow, 
  Atom, 
  Code, 
  Palette, 
  Database, 
  Binary, 
  KeyRound, 
  ShieldCheck, 
  Lock, 
  CheckCircle2, 
  Send, 
  Boxes, 
  BrainCircuit, 
  Component, 
  HardDrive, 
  GitBranch, 
  AppWindow, 
  Cloud, 
  Search,
  Sparkles,
  ServerCrash
} from 'lucide-react';
import { playSound } from '../utils/soundEffects';

const iconMap = {
  Coffee,
  Terminal,
  Cpu,
  Layers,
  Server,
  Network,
  Workflow,
  Atom,
  Code,
  Palette,
  Database,
  DatabaseBackup: Database,
  Binary,
  KeyRound,
  ShieldCheck,
  Lock,
  CheckCircle2,
  Send,
  Boxes,
  BrainCircuit,
  Component,
  HardDrive,
  GitBranch,
  AppWindow,
  Cloud,
  ServerCrash
};

export const SkillsGrid = ({ skills }) => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    'All',
    'Languages',
    'Backend',
    'Frontend',
    'Databases',
    'Security',
    'Testing',
    'Core Concepts',
    'Tools'
  ];

  const handleCategoryChange = (cat) => {
    playSound('click');
    setSelectedCategory(cat);
  };

  const filteredSkills = skills.filter((skill) => {
    const matchesCat = selectedCategory === 'All' || skill.category === selectedCategory;
    const matchesSearch = 
      skill.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      skill.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      skill.useCase.toLowerCase().includes(searchQuery.toLowerCase()) ||
      skill.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      {/* Background radial atmosphere */}
      <div className="absolute top-1/2 right-10 w-[600px] h-[500px] bg-emerald-500/5 blur-[150px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono uppercase tracking-widest mb-4">
            <Cpu className="w-4 h-4" />
            <span>Technical Mastery & Architecture</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-heading font-extrabold text-white tracking-tight">
            Engineering <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400">Toolkit & Skills</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-zinc-400">
            Real skills defined by architectural application and production systems. No arbitrary percentage bars.
          </p>
        </div>

        {/* Filter and Search Bar Controls */}
        <div className="mb-10 space-y-4">
          {/* Search Input */}
          <div className="max-w-md mx-auto relative">
            <Search className="w-4 h-4 text-zinc-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search skills, frameworks, or concepts (e.g. Java, JWT, Prisma, OOP)..."
              className="w-full pl-10 pr-4 py-2.5 rounded-2xl bg-zinc-900/80 border border-zinc-800 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400/40 backdrop-blur-md transition-all font-mono"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-xs font-mono text-zinc-400 hover:text-white"
              >
                Clear
              </button>
            )}
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-2">
            {categories.map((cat) => {
              const count = cat === 'All' ? skills.length : skills.filter(s => s.category === cat).length;
              const isSelected = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => handleCategoryChange(cat)}
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-mono transition-all flex items-center gap-1.5 ${
                    isSelected
                      ? 'bg-zinc-100 text-zinc-950 font-bold shadow-lg shadow-white/10'
                      : 'bg-zinc-900/80 border border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-700'
                  }`}
                >
                  <span>{cat}</span>
                  <span className={`text-[10px] px-1.5 py-0.2 rounded-full ${isSelected ? 'bg-zinc-300 text-zinc-950' : 'bg-zinc-800 text-zinc-500'}`}>
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredSkills.map((skill) => {
            const IconComponent = iconMap[skill.icon] || Code;
            return (
              <div
                key={skill.name}
                className="group relative p-6 rounded-2xl bg-gradient-to-b from-zinc-900/90 to-zinc-950/90 border border-zinc-800/80 hover:border-zinc-650 hover:border-zinc-700 hover:shadow-xl hover:shadow-cyan-500/5 transition-all duration-300 backdrop-blur-md flex flex-col justify-between"
              >
                {/* Glow accent */}
                <div 
                  className="absolute -top-px left-8 right-8 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ background: `linear-gradient(90deg, transparent, ${skill.color || '#38bdf8'}, transparent)` }}
                />

                <div>
                  {/* Card Top: Icon & Category */}
                  <div className="flex items-start justify-between mb-4">
                    <div 
                      className="w-12 h-12 rounded-2xl flex items-center justify-center border transition-transform duration-300 group-hover:scale-105"
                      style={{ 
                        backgroundColor: `${skill.color}15` || 'rgba(56, 189, 248, 0.1)',
                        borderColor: `${skill.color}40` || 'rgba(56, 189, 248, 0.3)',
                        color: skill.color || '#38bdf8'
                      }}
                    >
                      <IconComponent className="w-6 h-6" />
                    </div>

                    <div className="flex flex-col items-end">
                      <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider">
                        {skill.category}
                      </span>
                      <span className="text-xs font-mono font-medium text-zinc-300 mt-0.5">
                        {skill.level}
                      </span>
                    </div>
                  </div>

                  {/* Skill Name & Highlight Pill */}
                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="font-heading font-bold text-lg text-white group-hover:text-cyan-300 transition-colors">
                      {skill.name}
                    </h3>
                    <span 
                      className="text-[10px] font-mono px-2 py-0.5 rounded-md border text-zinc-300"
                      style={{ 
                        borderColor: `${skill.color}50` || 'rgba(255,255,255,0.1)',
                        backgroundColor: `${skill.color}10` || 'rgba(255,255,255,0.05)'
                      }}
                    >
                      {skill.highlight}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="text-xs text-zinc-400 leading-relaxed mb-4">
                    {skill.description}
                  </p>
                </div>

                {/* Real-World Use Case */}
                <div className="pt-3 border-t border-zinc-850 border-zinc-800/80 mt-2">
                  <div className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider mb-1 flex items-center gap-1">
                    <Sparkles className="w-2.5 h-2.5 text-cyan-400" />
                    Real-World Implementation
                  </div>
                  <p className="text-[11px] text-zinc-300 leading-normal font-sans">
                    {skill.useCase}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {filteredSkills.length === 0 && (
          <div className="text-center py-16 text-zinc-500 font-mono text-sm">
            No matching technical skills found for "{searchQuery}". Try searching for Java, React, SQL, or Spring Boot.
          </div>
        )}
      </div>
    </section>
  );
};
