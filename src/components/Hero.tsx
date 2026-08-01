import { motion } from 'motion/react';
import { ArrowUpRight, Award, Compass, Search, GraduationCap, ChevronRight, Zap, Globe } from 'lucide-react';
import heroBg from '../assets/images/hero_office_dr_ola_1785554320782.jpg';

interface HeroProps {
  setCurrentTab: (tab: string) => void;
}

export default function Hero({ setCurrentTab }: HeroProps) {
  return (
    <section className="relative min-h-screen pt-32 pb-20 flex items-center justify-center overflow-hidden grid-pattern" id="hero-section">
      {/* Background Image Layer */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroBg}
          alt="Cape Global Solutions Office Interior"
          className="w-full h-full object-cover object-center scale-105"
          referrerPolicy="no-referrer"
        />
        {/* Subtle Warm Overlay to blend image with brand aesthetic & maintain text contrast */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#FAF8F5]/90 via-[#FAF8F5]/80 to-[#FAF8F5]/50 sm:to-[#FAF8F5]/40 mix-blend-normal" />
        <div className="absolute inset-0 bg-stone-900/10 backdrop-blur-[0.5px]" />
      </div>

      {/* Decorative Blur Background Glows */}
      <div className="absolute top-1/4 left-1/10 w-[500px] h-[500px] rounded-full bg-brand-primary/10 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/10 w-[450px] h-[450px] rounded-full bg-brand-purple/10 blur-[130px] pointer-events-none" />

      {/* Decorative Grid Line Accents */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-stone-300/50 to-transparent" />
      <div className="absolute inset-y-0 left-1/4 w-px bg-gradient-to-b from-transparent via-stone-300/30 to-transparent hidden lg:block" />
      <div className="absolute inset-y-0 right-1/4 w-px bg-gradient-to-b from-transparent via-stone-300/30 to-transparent hidden lg:block" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Main Copy & Large Typography */}
          <div className="lg:col-span-7 space-y-8 text-left">
            
            {/* Tagline Badge */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/90 border border-stone-200 shadow-xs"
            >
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-primary"></span>
              </span>
              <span className="font-mono text-[10px] tracking-wider uppercase text-stone-700 font-medium">
                Pioneering Growth, Research, & Mentorship
              </span>
            </motion.div>

            {/* Giant Title Typography */}
            <div className="space-y-4">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-display font-bold tracking-tight text-stone-900 leading-[0.95]"
              >
                We help <br />
                you to <br />
                <span className="gradient-accent-text">move forward.</span>
              </motion.h1>
              
              {/* Detailed Subheadline explaining consulting/training/research agency */}
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.4 }}
                className="max-w-lg text-base sm:text-lg text-stone-600 font-sans font-normal leading-relaxed pt-2"
              >
                Cape Global Solutions is an elite multidisciplinary agency driving systemic change. We empower professionals, students, and institutions through bespoke high-end consulting, systematic academic research, teaching, and comprehensive life-alignment mentoring.
              </motion.p>
            </div>

            {/* Call to Actions (CTAs) */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-wrap items-center gap-4 pt-2"
            >
              <button
                onClick={() => {
                  const el = document.getElementById('strategy-sandbox-root');
                  if (el) {
                    el.scrollIntoView({ behavior: 'smooth' });
                  } else {
                    setCurrentTab('capacity');
                  }
                }}
                className="py-3.5 px-7 rounded-xl font-display font-medium text-sm text-white bg-brand-primary hover:bg-brand-primary/95 transition-all shadow-lg shadow-brand-primary/20 flex items-center gap-2 group cursor-pointer"
              >
                <span>Launch Strategy Lab</span>
                <Zap className="w-4 h-4 group-hover:scale-125 transition-transform text-white animate-pulse" />
              </button>

              <button
                onClick={() => setCurrentTab('services')}
                className="py-3.5 px-6 rounded-xl font-display font-medium text-sm text-stone-800 hover:text-stone-900 bg-white border border-stone-300 hover:bg-stone-50 hover:border-brand-primary/30 transition-all flex items-center gap-1 group cursor-pointer shadow-xs"
              >
                <span>Explore Practices</span>
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="glass-card rounded-full border border-stone-300/80 px-3.5 py-2 flex items-center gap-2 shadow-xs backdrop-blur-lg hover:border-brand-primary/40 transition-colors cursor-pointer group bg-white/80"
                onClick={() => {
                  const el = document.getElementById('strategy-sandbox-root');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-xs font-mono text-stone-700 group-hover:text-stone-900 font-medium transition-colors">
                  Assisted Career Builder
                </span>
                <ArrowUpRight className="w-3 h-3 text-stone-500 group-hover:text-stone-900 transition-colors" />
              </motion.div>
            </motion.div>

            {/* Relocated Key Metric Cards (placed on the left so background image of people remains clear) */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 max-w-lg"
            >
              <div className="glass-card rounded-xl border border-stone-200/80 p-4 shadow-sm bg-white/85 backdrop-blur-md hover:border-brand-primary/30 transition-all">
                <div className="flex justify-between items-center mb-2">
                  <div className="p-1.5 rounded-lg bg-brand-primary/10 text-brand-primary">
                    <Award className="w-4 h-4" />
                  </div>
                  <span className="text-[10px] font-mono text-stone-500 uppercase font-medium">Global Metric</span>
                </div>
                <p className="text-3xl font-display font-bold text-stone-900 tracking-tight">90%</p>
                <p className="text-xs text-stone-800 font-semibold mt-0.5">Mentorship Satisfaction Rate</p>
              </div>

              <div className="glass-card rounded-xl border border-stone-200/80 p-4 shadow-sm bg-white/85 backdrop-blur-md hover:border-brand-purple/30 transition-all">
                <div className="flex justify-between items-center mb-2">
                  <div className="p-1.5 rounded-lg bg-brand-purple/10 text-brand-purple">
                    <GraduationCap className="w-4 h-4" />
                  </div>
                  <span className="text-[10px] font-mono text-stone-500 uppercase font-medium">Academic</span>
                </div>
                <p className="text-3xl font-display font-bold text-stone-900 tracking-tight">200+ Papers</p>
                <p className="text-xs text-stone-800 font-semibold mt-0.5">Published in Tier-1 Journals</p>
              </div>
            </motion.div>

            {/* Client logos / Trust indicators */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.7 }}
              className="pt-6 border-t border-stone-200/80"
            >
              <p className="text-[10px] font-mono text-stone-500 uppercase tracking-widest mb-3">
                Advisory Standards Trusted Worldwide By
              </p>
              <div className="flex flex-wrap gap-x-8 gap-y-3 text-xs font-mono text-stone-600 font-medium">
                <span className="hover:text-brand-primary transition-colors cursor-default flex items-center gap-1">
                  <Globe className="w-3 h-3 text-brand-primary" /> Alliance Universities
                </span>
                <span className="hover:text-brand-purple transition-colors cursor-default flex items-center gap-1">
                  <Award className="w-3 h-3 text-brand-purple" /> Labor Directorate
                </span>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Kept clear to highlight the people in the background office image */}
          <div className="lg:col-span-5 relative min-h-[250px] lg:min-h-[500px] flex items-end justify-end pointer-events-none">
            {/* Minimal ambient indicator placed subtly at the bottom corner */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.9 }}
              className="hidden lg:flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/70 backdrop-blur-md border border-stone-200/80 text-[10px] font-mono text-stone-600 shadow-2xs"
            >
              <span>Scroll to explore</span>
              <ChevronRight className="w-3 h-3 rotate-90 text-stone-500" />
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
