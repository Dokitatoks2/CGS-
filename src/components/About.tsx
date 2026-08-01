import { motion } from 'motion/react';
import { Target, Users, BookOpen, ChevronRight, Landmark, Lightbulb, Compass, Award } from 'lucide-react';

interface AboutProps {
  setCurrentTab: (tab: string) => void;
}

export default function About({ setCurrentTab }: AboutProps) {
  const pillars = [
    {
      icon: Compass,
      title: 'High-End Strategic Advisory',
      desc: 'Formulating robust, action-oriented lifemaps, career pathways, and structural corporate realignment frameworks.',
      color: 'text-brand-primary bg-brand-primary/10'
    },
    {
      icon: BookOpen,
      title: 'Scholarly Research & Teaching',
      desc: 'Developing capacity in quantitative frameworks, rigorous systematic literature reviews, and tier-1 academic publication structures.',
      color: 'text-brand-purple bg-brand-purple/10'
    },
    {
      icon: Target,
      title: 'Empowerment & Life Mentorship',
      desc: 'Fostering legacy excellence and career resilience by matching seekers with senior field leaders for real-world impact.',
      color: 'text-green-400 bg-green-400/10'
    }
  ];

  const stats = [
    { value: '20+', label: 'Years Structural Experience', desc: 'Directing strategic advisory and systemic change initiatives globally.' },
    { value: '1k+', label: 'Scholars & Professionals', desc: 'Successfully mentored across technology, healthcare, and academia.' },
    { value: '5+', label: 'Corporate Transformations', desc: 'High-growth startups and enterprises aligned with modern culture.' },
    { value: '90%', label: 'Long-term Growth Index', desc: 'Of alumni report tangible title elevation or research publication.' }
  ];

  return (
    <section className="py-20 bg-brand-bg relative overflow-hidden text-left" id="about-section">
      {/* Subtle details */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-brand-purple/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="space-y-4 max-w-3xl mb-16">
          <span className="text-xs font-mono text-brand-primary uppercase tracking-widest bg-brand-primary/10 px-3 py-1 rounded-full">
            Our Narrative & Pillars
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-stone-900 tracking-tight">
            We empower individuals and institutions to <span className="gradient-accent-text">navigate systemic transitions.</span>
          </h2>
          <p className="text-sm sm:text-base text-stone-600 font-normal leading-relaxed">
            Founded on the belief that career strategies, empirical research, and life decisions are fundamentally interconnected, Cape Global Solutions bridges high-level theory with execution. We do not offer template-driven training; we design strategic alignment protocols.
          </p>
        </div>

        {/* Narrative & Image Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-24">
          
          <div className="lg:col-span-6 space-y-6">
            <h3 className="text-xl sm:text-2xl font-display font-medium text-stone-900">
              Deconstructing Complexity. Accelerating Potential.
            </h3>
            
            <div className="space-y-4 text-xs sm:text-sm text-stone-700 font-normal leading-relaxed">
              <p>
                Modern professional pathways are no longer linear. Rapid structural change, artificial intelligence, and evolving socio-demographics demand a more comprehensive response to career progression, research execution, and personal design.
              </p>
              <p>
                Our interdisciplinary agency brings together veteran industry consultants, university research directors, and professional life coaches. By researching societal labor flows and tracking high-performance longevity markers, we offer insights that keep you moving forward.
              </p>
            </div>

            {/* Strategic list */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <div className="flex gap-2.5 items-start">
                <div className="p-1.5 rounded-md bg-brand-primary/10 text-brand-primary shrink-0">
                  <Landmark className="w-4 h-4" />
                </div>
                <div className="space-y-0.5">
                  <h4 className="text-xs font-semibold text-stone-900">Systemic Methodologies</h4>
                  <p className="text-[11px] text-stone-600">Grounded in verified scientific and change management frameworks.</p>
                </div>
              </div>

              <div className="flex gap-2.5 items-start">
                <div className="p-1.5 rounded-md bg-brand-purple/10 text-brand-purple shrink-0">
                  <Lightbulb className="w-4 h-4" />
                </div>
                <div className="space-y-0.5">
                  <h4 className="text-xs font-semibold text-stone-900">Empirical Change Ideas</h4>
                  <p className="text-[11px] text-stone-600">Generating research-backed options to bypass professional friction.</p>
                </div>
              </div>
            </div>

            <div className="pt-4">
              <button
                onClick={() => setCurrentTab('contact')}
                className="py-3 px-6 rounded-xl text-xs font-display font-medium text-stone-900 bg-white border border-stone-300 hover:bg-stone-50 hover:border-brand-primary/30 transition-all inline-flex items-center gap-1 group cursor-pointer shadow-xs"
              >
                <span>Connect with our Principal Team</span>
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          {/* Core Pillars Cards & Founder Spotlight */}
          <div className="lg:col-span-6 space-y-6">
            {/* Leadership Spotlight Card */}
            <div className="glass-card rounded-2xl border border-stone-200/80 p-6 sm:p-7 space-y-4 bg-white/90 shadow-xs">
              <div className="space-y-1">
                <span className="text-[10px] font-mono text-stone-500 uppercase tracking-widest font-semibold block">
                  Principal Consultant and Founder
                </span>
                <h4 className="font-display font-bold text-xl sm:text-2xl text-stone-900 tracking-tight">
                  Ola Adetokunboh
                </h4>
                <span className="text-xs font-mono text-brand-primary uppercase tracking-widest font-semibold block">
                  Professor | Researcher | Mentor | Life Coach
                </span>
              </div>
              <p className="text-xs sm:text-sm font-medium text-stone-800 leading-relaxed border-l-2 border-brand-primary pl-3">
                Directing strategic advisory, high-performance executive mentoring circles, and research methodology frameworks across global institutions.
              </p>
              <p className="text-xs text-stone-600 leading-relaxed font-normal pt-1">
                Ola is an internationally recognized clinical epidemiologist, researcher, and educator with two decades of experience advancing evidence-based research, clinical guidelines, and health systems strengthening across global public health settings. He holds faculty appointments as Extraordinary Professor at Stellenbosch University and Adjunct Faculty at Baylor University. He has published 100+ peer-reviewed articles with 85,000+ citations, an h-index of 39, and serves as Associate Editor for PLOS Global Public Health and International Health. He is also a mentor, career development expert and life coach.
              </p>
            </div>

            <div className="space-y-4">
              <h4 className="text-xs font-mono text-stone-500 uppercase tracking-widest mb-2 pl-2">
                Our Core Implementation Areas
              </h4>
              
              <div className="space-y-4">
                {pillars.map((pillar, idx) => {
                  const Icon = pillar.icon;
                  return (
                    <div
                      key={idx}
                      className="glass-card rounded-xl border border-stone-200/80 p-5 flex gap-4 hover:border-brand-primary/30 transition-all duration-300 shadow-xs"
                    >
                      <div className={`p-3 rounded-xl ${pillar.color} shrink-0 h-12 w-12 flex items-center justify-center`}>
                        <Icon className="w-5 h-5" />
                      </div>
                      <div className="space-y-1">
                        <h5 className="font-display font-semibold text-sm text-stone-900">{pillar.title}</h5>
                        <p className="text-xs text-stone-600 font-normal leading-relaxed">{pillar.desc}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

        </div>

        {/* Dynamic Metric Grid */}
        <div className="border-t border-stone-200/80 pt-16">
          <div className="text-center max-w-xl mx-auto mb-12 space-y-2">
            <h4 className="text-xs font-mono text-brand-primary uppercase tracking-widest">
              Measurable Outcomes
            </h4>
            <p className="font-display font-medium text-stone-900 text-lg sm:text-xl">
              We track our success solely through the tangible transformation of our partners.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, idx) => (
              <div
                key={idx}
                className="glass-card rounded-xl border border-stone-200/80 p-6 space-y-2.5 text-center sm:text-left hover:border-brand-primary/30 transition-all duration-300 shadow-xs"
              >
                <span className="text-4xl md:text-5xl font-display font-bold text-stone-900 leading-none block">
                  {stat.value}
                </span>
                <div className="space-y-1">
                  <h5 className="text-xs font-semibold text-brand-primary uppercase tracking-wide">
                    {stat.label}
                  </h5>
                  <p className="text-[11px] text-stone-600 font-normal leading-relaxed">
                    {stat.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
