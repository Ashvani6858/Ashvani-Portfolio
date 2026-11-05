import React from 'react';
import { 
  History, 
  GraduationCap, 
  Sparkles, 
  Calendar, 
  Award, 
  CheckCircle2, 
  ChevronRight,
  MapPin
} from 'lucide-react';

export const TimelineSection = ({ journey, education }) => {
  return (
    <section id="timeline" className="py-24 relative overflow-hidden">
      {/* Background radial accent */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-purple-500/5 blur-[160px] pointer-events-none rounded-full" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-400 text-xs font-mono uppercase tracking-widest mb-4">
            <History className="w-4 h-4" />
            <span>My Story & Milestones</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-heading font-extrabold text-white tracking-tight">
            Let's Go <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-indigo-300 to-cyan-400">Back in Time</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-zinc-400">
            From algorithmic foundations at GL Bajaj to architecting full-stack systems and high-throughput microservices.
          </p>
        </div>

        {/* Education Highlight Card */}
        <div className="mb-16 p-8 rounded-3xl bg-gradient-to-r from-zinc-900/90 via-zinc-950 to-zinc-900/90 border border-cyan-500/40 shadow-xl relative overflow-hidden backdrop-blur-xl">
          <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <GraduationCap className="w-5 h-5 text-cyan-400" />
                <span className="text-xs font-mono uppercase tracking-widest text-cyan-400 font-bold">
                  Academic Degree & Current Enrollment
                </span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-heading font-black text-white">
                {education.degree}
              </h3>
              <p className="text-sm font-medium text-zinc-300">
                {education.institution}
              </p>
              <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-zinc-400 pt-1">
                <span className="flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-zinc-500" /> {education.period}
                </span>
                <span className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-zinc-500" /> {education.location}
                </span>
              </div>
            </div>

            {/* Score Pill */}
            <div className="p-5 rounded-2xl bg-zinc-950/80 border border-zinc-800 text-center shrink-0 min-w-[160px]">
              <span className="text-xs font-mono text-zinc-500 uppercase tracking-wider block">Cumulative GPA</span>
              <div className="text-3xl font-heading font-black text-cyan-400 mt-1">
                {education.cgpa} <span className="text-sm font-normal text-zinc-500">/ 10</span>
              </div>
              <span className="text-[10px] font-mono text-emerald-400 mt-1 block">Consistent Performer</span>
            </div>
          </div>

          <div className="mt-6 pt-6 border-t border-zinc-800/80 grid grid-cols-1 md:grid-cols-3 gap-3">
            {education.highlights.map((h, i) => (
              <div key={i} className="flex items-start gap-2 text-xs text-zinc-400">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                <span>{h}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Vertical Timeline Nodes */}
        <div className="relative pl-6 sm:pl-10 space-y-12 before:absolute before:left-3 sm:before:left-5 before:top-3 before:bottom-3 before:w-[2px] before:bg-gradient-to-b before:from-cyan-400 before:via-purple-500 before:to-zinc-800">
          {journey.map((item, idx) => (
            <div key={idx} className="relative group">
              {/* Glowing Pulse Node */}
              <div className="absolute -left-[27px] sm:-left-[35px] top-1.5 w-6 h-6 rounded-full bg-zinc-950 border-2 border-cyan-400 flex items-center justify-center shadow-lg shadow-cyan-500/20 group-hover:scale-125 transition-transform">
                <div className="w-2 h-2 rounded-full bg-cyan-400" />
              </div>

              {/* Timeline Card */}
              <div className="p-6 sm:p-8 rounded-2xl bg-zinc-900/70 border border-zinc-800/80 hover:border-zinc-700/80 transition-all duration-300 shadow-xl backdrop-blur-md space-y-4">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div className="flex items-center gap-3">
                    <span className="px-3 py-1 rounded-full bg-zinc-800 text-cyan-400 text-xs font-mono font-bold">
                      {item.year}
                    </span>
                    <span className="text-xs font-mono text-zinc-500">
                      {item.organization}
                    </span>
                  </div>
                  <span className="px-2.5 py-0.5 rounded-full bg-purple-950/60 border border-purple-500/30 text-[11px] font-mono text-purple-300">
                    {item.score}
                  </span>
                </div>

                <div>
                  <h4 className="text-xl font-heading font-bold text-white group-hover:text-cyan-300 transition-colors">
                    {item.title}
                  </h4>
                  <p className="mt-2 text-sm text-zinc-300 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Key Takeaways */}
                <div className="pt-3 border-t border-zinc-800/80 space-y-1.5">
                  <div className="text-[11px] font-mono text-zinc-500 uppercase tracking-wider mb-2">
                    Key Outcomes & Architecture
                  </div>
                  {item.takeaways.map((takeaway, tIdx) => (
                    <div key={tIdx} className="flex items-start gap-2 text-xs text-zinc-400">
                      <ChevronRight className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                      <span>{takeaway}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
