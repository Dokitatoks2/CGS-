import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, ArrowRight, CheckCircle2, ChevronRight, Landmark, Globe, Trophy, ExternalLink, RefreshCw } from 'lucide-react';
import { Project } from '../types';
import { PROJECTS } from '../data';

export default function Projects() {
  const [activeTag, setActiveTag] = useState<string>('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // Derive unique tags across projects
  const allTags = ['All', ...Array.from(new Set(PROJECTS.flatMap(p => p.tags)))];

  const filteredProjects = PROJECTS.filter(proj => 
    activeTag === 'All' ? true : proj.tags.includes(activeTag)
  );

  return (
    <section className="py-20 bg-brand-bg relative overflow-hidden" id="projects-section">
      <div className="absolute top-1/3 left-10 w-96 h-96 bg-brand-primary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-4 max-w-2xl text-left">
            <span className="text-xs font-mono text-brand-primary uppercase tracking-widest bg-brand-primary/10 px-3 py-1 rounded-full">
              Empirical Success Stories
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-stone-900 tracking-tight">
              Pioneering actual, measurable <span className="gradient-accent-text">societal change.</span>
            </h2>
            <p className="text-sm text-stone-600 font-normal">
              Review case archives detailing our interventions with national directorates, high-growth tech firms, and allied educational universities. 
            </p>
          </div>

          {/* Filtering Tabs */}
          <div className="flex flex-wrap gap-1.5 bg-[#F2ECE1] border border-stone-200/80 rounded-xl p-1.5 shrink-0 self-start md:self-end max-w-full">
            {allTags.map((tag) => (
              <button
                key={tag}
                onClick={() => setActiveTag(tag)}
                className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-all ${
                  activeTag === tag
                    ? 'bg-brand-purple text-white font-semibold shadow-xs'
                    : 'text-stone-600 hover:text-stone-900 hover:bg-white/60'
                }`}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>

        {/* Case Studies Grid (Awwwards bento design) */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((proj, idx) => (
              <motion.div
                key={proj.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="glass-card rounded-2xl border border-stone-200/80 overflow-hidden flex flex-col justify-between hover:border-brand-primary/30 group transition-all duration-300 shadow-xs"
              >
                
                {/* Visual Placeholder stylized to look extremely sci-fi/academic */}
                <div className="relative h-48 bg-gradient-to-br from-stone-100 to-stone-200/70 overflow-hidden flex items-center justify-center p-6 border-b border-stone-200/80">
                  <div className="absolute inset-0 bg-grid-pattern opacity-30" />
                  
                  {/* Glow Circle */}
                  <div className="absolute w-32 h-32 rounded-full bg-brand-primary/10 blur-xl animate-pulse" />
                  
                  {/* Decorative abstract typography */}
                  <span className="font-mono text-[9px] text-stone-400 uppercase tracking-widest absolute top-4 left-4">
                    Case #{proj.id.toUpperCase()}
                  </span>

                  <span className="font-mono text-[9px] text-stone-400 absolute bottom-4 right-4">
                    UTC TIME SCALE ADVISORY
                  </span>

                  {/* Icon representation */}
                  <div className="relative z-10 text-center space-y-2">
                    <Trophy className="w-10 h-10 text-brand-primary mx-auto opacity-80 group-hover:scale-110 transition-transform" />
                    <p className="text-[10px] font-mono text-stone-500 uppercase tracking-widest">
                      {proj.category}
                    </p>
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-6 space-y-5 text-left flex-grow flex flex-col justify-between">
                  <div className="space-y-3">
                    <div className="space-y-1">
                      <span className="text-[10px] font-mono text-brand-primary uppercase">Client Partner</span>
                      <h3 className="font-display font-bold text-lg text-stone-900 leading-tight group-hover:text-brand-primary transition-colors">
                        {proj.title}
                      </h3>
                      <p className="text-[11px] text-stone-500 font-mono italic">
                        {proj.client}
                      </p>
                    </div>

                    <p className="text-xs text-stone-600 leading-relaxed font-normal">
                      {proj.description}
                    </p>

                    <div className="bg-stone-50 rounded-lg p-3 border border-stone-200">
                      <span className="text-[10px] font-mono text-stone-500 uppercase tracking-wider block mb-1">Impact Verified Outcome</span>
                      <p className="text-xs text-stone-900 font-medium">{proj.impact}</p>
                    </div>
                  </div>

                  {/* Key Metrics section */}
                  <div className="space-y-4 pt-4 mt-4 border-t border-stone-200/80">
                    <div className="grid grid-cols-3 gap-2">
                      {proj.metrics.map((m, mIdx) => (
                        <div key={mIdx} className="text-center p-2 rounded-lg bg-white border border-stone-200 shadow-2xs">
                          <span className="text-sm font-display font-bold text-brand-primary block">{m.value}</span>
                          <span className="text-[9px] font-mono text-stone-500 uppercase block leading-tight">{m.label}</span>
                        </div>
                      ))}
                    </div>

                    <div className="flex flex-wrap gap-1">
                      {proj.tags.map((tag, tIdx) => (
                        <span key={tIdx} className="text-[9px] font-mono text-stone-600 bg-stone-100 px-2 py-0.5 rounded-full border border-stone-200">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Global Change Indicator block */}
        <div className="mt-16 glass-card rounded-2xl border border-stone-200/80 p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6 text-left shadow-xs">
          <div className="space-y-2 max-w-xl">
            <h4 className="font-display font-semibold text-stone-900 text-base">
              Explore our full catalog of empirical studies and labor tracking models?
            </h4>
            <p className="text-xs text-stone-600 font-normal">
              We periodically publish regional labor transition reports, socio-demographic career stress studies, and executive mentorship longevity indices as part of our commitment to public academic research.
            </p>
          </div>

          <div className="flex gap-3">
            <button
              onClick={() => {
                const el = document.getElementById('audiovisuals-section');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              className="py-3 px-5 rounded-xl text-xs font-display font-medium text-white bg-brand-primary hover:bg-brand-primary/95 transition-all flex items-center gap-1 cursor-pointer shadow-xs"
            >
              <span>Access Research Teaching</span>
              <ArrowRight className="w-4.5 h-4.5" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
