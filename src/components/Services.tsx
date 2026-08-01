import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Check, Plus, HelpCircle, GraduationCap, Compass, Shuffle, BarChart3, Activity, Users, Info, X, Microscope, FileText } from 'lucide-react';
import { Service } from '../types';
import { SERVICES } from '../data';

interface ServicesProps {
  cart: Service[];
  addToCart: (service: Service) => void;
  removeFromCart: (id: string) => void;
  setCurrentTab: (tab: string) => void;
}

export default function Services({ cart, addToCart, removeFromCart, setCurrentTab }: ServicesProps) {
  const [activeCategory, setActiveCategory] = useState<'All' | 'Consulting' | 'Training' | 'Research'>('All');
  const [selectedServiceDetail, setSelectedServiceDetail] = useState<Service | null>(null);

  const filteredServices = SERVICES.filter(service => 
    activeCategory === 'All' ? true : service.category === activeCategory
  );

  const isAddedToCart = (serviceId: string) => {
    return cart.some(item => item.id === serviceId);
  };

  const handleCartToggle = (service: Service) => {
    if (isAddedToCart(service.id)) {
      removeFromCart(service.id);
    } else {
      addToCart(service);
    }
  };

  const getIcon = (name: string) => {
    switch (name) {
      case 'Compass': return <Compass className="w-5 h-5 text-brand-primary" />;
      case 'Shuffle': return <Shuffle className="w-5 h-5 text-brand-primary" />;
      case 'GraduationCap': return <GraduationCap className="w-5 h-5 text-brand-purple" />;
      case 'Users': return <Users className="w-5 h-5 text-brand-purple" />;
      case 'BarChart3': return <BarChart3 className="w-5 h-5 text-emerald-600" />;
      case 'Activity': return <Activity className="w-5 h-5 text-emerald-600" />;
      case 'Microscope': return <Microscope className="w-5 h-5 text-emerald-600" />;
      case 'FileText': return <FileText className="w-5 h-5 text-emerald-600" />;
      default: return <HelpCircle className="w-5 h-5 text-brand-primary" />;
    }
  };

  return (
    <section className="py-20 bg-brand-bg relative overflow-hidden" id="services-section">
      {/* Decorative ambient spots */}
      <div className="absolute top-10 right-0 w-80 h-80 bg-brand-primary/5 rounded-full blur-[110px] pointer-events-none" />
      <div className="absolute bottom-10 left-0 w-80 h-80 bg-brand-purple/5 rounded-full blur-[110px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-4 max-w-2xl text-left">
            <span className="text-xs font-mono text-brand-primary uppercase tracking-widest bg-brand-primary/10 px-3 py-1 rounded-full">
              Tailored Practices & Solutions
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-stone-900 tracking-tight">
              Bespoke portfolios designed to <span className="gradient-accent-text">align your execution.</span>
            </h2>
            <p className="text-sm text-stone-600 font-normal">
              Browse our high-tier consulting services, research structures, and training cohorts. Select individual modules to request a customized quote or scheduling adjustment.
            </p>
          </div>

          {/* Filtering Tabs */}
          <div className="flex flex-wrap gap-1.5 bg-[#F2ECE1] border border-stone-200/80 rounded-xl p-1.5 shrink-0 self-start md:self-end">
            {(['All', 'Consulting', 'Training', 'Research'] as const).map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 text-xs font-medium rounded-lg transition-all ${
                  activeCategory === cat
                    ? 'bg-brand-primary text-white font-semibold shadow-xs'
                    : 'text-stone-600 hover:text-stone-900 hover:bg-white/60'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredServices.map((service) => {
              const added = isAddedToCart(service.id);
              return (
                <motion.div
                  key={service.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4 }}
                  className="glass-card rounded-2xl border border-stone-200/80 p-6 flex flex-col justify-between hover:border-brand-primary/30 transition-colors shadow-xs"
                >
                  <div className="space-y-5">
                    {/* Header Row */}
                    <div className="flex justify-between items-start">
                      <div className="p-3 rounded-xl bg-stone-100/80 border border-stone-200 flex items-center justify-center">
                        {getIcon(service.iconName)}
                      </div>
                      <span className={`text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded-full ${
                        service.category === 'Consulting' ? 'bg-brand-primary/10 text-brand-primary border border-brand-primary/15' :
                        service.category === 'Training' ? 'bg-brand-purple/10 text-brand-purple border border-brand-purple/15' :
                        'bg-emerald-600/10 text-emerald-700 border border-emerald-600/15'
                      }`}>
                        {service.category}
                      </span>
                    </div>

                    {/* Title & Desc */}
                    <div className="space-y-2 text-left">
                      <h3 className="font-display font-semibold text-lg text-stone-900 group-hover:text-brand-primary transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-xs text-stone-600 leading-relaxed font-normal line-clamp-3">
                        {service.description}
                      </p>
                    </div>

                    {/* Features checklist */}
                    <ul className="space-y-2 pt-1 border-t border-stone-200/80 text-left">
                      {service.features.map((feat, fIdx) => (
                        <li key={fIdx} className="flex items-start gap-2 text-xs text-stone-700">
                          <Check className="w-3.5 h-3.5 text-brand-primary shrink-0 mt-0.5" />
                          <span className="font-normal">{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Pricing / CTA row */}
                  <div className="space-y-4 pt-5 mt-5 border-t border-stone-200/80">
                    <div className="flex justify-between items-baseline">
                      <div className="space-y-0.5 text-left">
                        <span className="text-[10px] font-mono text-stone-500 uppercase">Price Range</span>
                        <p className="text-lg font-display font-semibold text-stone-900">{service.price}</p>
                      </div>

                      <div className="space-y-0.5 text-right">
                        <span className="text-[10px] font-mono text-stone-500 uppercase">Duration</span>
                        <p className="text-xs font-mono text-stone-700">{service.duration}</p>
                      </div>
                    </div>

                    {/* Button Interactions */}
                    <div className="grid grid-cols-12 gap-2">
                      <button
                        onClick={() => setSelectedServiceDetail(service)}
                        className="col-span-3 py-2.5 rounded-lg bg-stone-100 hover:bg-stone-200 border border-stone-200 flex items-center justify-center text-stone-600 hover:text-stone-900 transition-colors"
                        title="View Advanced Details"
                      >
                        <Info className="w-4 h-4" />
                      </button>

                      <button
                        onClick={() => handleCartToggle(service)}
                        className={`col-span-9 py-2.5 px-4 rounded-lg text-xs font-display font-medium transition-all duration-300 flex items-center justify-center gap-1.5 ${
                          added
                            ? 'bg-brand-purple/15 border border-brand-purple/40 text-brand-purple font-semibold'
                            : 'bg-brand-primary hover:bg-brand-primary/95 text-white'
                        }`}
                      >
                        {added ? (
                          <>
                            <Check className="w-3.5 h-3.5" />
                            <span>Added to Request Box</span>
                          </>
                        ) : (
                          <>
                            <Plus className="w-3.5 h-3.5" />
                            <span>Add to Request Box</span>
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        {/* Informational Callout */}
        <div className="mt-16 bg-[#F2ECE1]/80 border border-stone-200/80 rounded-2xl p-6 lg:p-8 flex flex-col md:flex-row items-center justify-between gap-6 text-left">
          <div className="space-y-1.5 max-w-2xl">
            <h4 className="font-display font-semibold text-stone-900 text-base">
              Require a completely custom multidisciplinary engagement model?
            </h4>
            <p className="text-xs text-stone-600 font-normal">
              We frequently architect custom collaborative frameworks combining organizational consulting with academic research teaching for higher educational departments, ministries, and corporations.
            </p>
          </div>
          <button
            onClick={() => {
              const el = document.getElementById('contact-form-root');
              if (el) {
                el.scrollIntoView({ behavior: 'smooth' });
              } else {
                setCurrentTab('contact');
              }
            }}
            className="py-3 px-6 rounded-xl text-xs font-display font-medium text-stone-900 bg-white border border-stone-300 hover:border-brand-primary/40 transition-all shrink-0 cursor-pointer shadow-xs"
          >
            Request custom framework assembly
          </button>
        </div>

      </div>

      {/* Slide Drawer modal for advanced service detail */}
      <AnimatePresence>
        {selectedServiceDetail && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-900/60 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="w-full max-w-lg bg-white border border-stone-200 rounded-2xl overflow-hidden p-6 relative shadow-2xl"
            >
              <button
                onClick={() => setSelectedServiceDetail(null)}
                className="absolute top-4 right-4 p-1 rounded-lg bg-stone-100 hover:bg-stone-200 text-stone-500 hover:text-stone-900 transition-colors"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="space-y-6 text-left">
                <div className="space-y-2">
                  <span className="text-[10px] font-mono text-brand-primary uppercase tracking-widest block">
                    {selectedServiceDetail.category} • Professional Portfolio
                  </span>
                  <h3 className="text-xl sm:text-2xl font-display font-bold text-stone-900 tracking-tight">
                    {selectedServiceDetail.title}
                  </h3>
                </div>

                <div className="space-y-4">
                  <div className="space-y-1">
                    <span className="text-xs font-mono text-stone-500 uppercase">Core Methodology Objective</span>
                    <p className="text-xs text-stone-600 leading-relaxed font-normal">
                      {selectedServiceDetail.description}
                    </p>
                  </div>

                  <div className="space-y-2 bg-stone-50 p-4 rounded-xl border border-stone-200">
                    <span className="text-xs font-mono text-stone-500 uppercase">Target Client Profile</span>
                    <p className="text-xs text-stone-900 font-medium">
                      {selectedServiceDetail.targetAudience}
                    </p>
                  </div>

                  <div className="space-y-2.5">
                    <span className="text-xs font-mono text-stone-500 uppercase">Advanced Curriculum Elements & Deliverables</span>
                    <ul className="space-y-2">
                      {selectedServiceDetail.features.map((feat, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-xs text-stone-700">
                          <Check className="w-3.5 h-3.5 text-brand-primary shrink-0 mt-0.5" />
                          <span className="font-normal">{feat} (Advanced Assessment Matrix)</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex justify-between items-center border-t border-stone-100 pt-4">
                    <div className="space-y-0.5">
                      <span className="text-[10px] font-mono text-stone-500 uppercase">Project Duration</span>
                      <p className="text-sm font-semibold text-stone-900">{selectedServiceDetail.duration}</p>
                    </div>

                    <div className="space-y-0.5 text-right">
                      <span className="text-[10px] font-mono text-stone-500 uppercase">Consulting Value</span>
                      <p className="text-sm font-semibold text-brand-primary">{selectedServiceDetail.price}</p>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3 pt-2">
                  <button
                    onClick={() => {
                      handleCartToggle(selectedServiceDetail);
                      setSelectedServiceDetail(null);
                    }}
                    className="py-3 rounded-xl text-xs font-medium bg-brand-primary text-white hover:bg-brand-primary/95 transition-all text-center shadow-xs"
                  >
                    {isAddedToCart(selectedServiceDetail.id) ? 'Remove from Box' : 'Add to Box'}
                  </button>
                  <button
                    onClick={() => {
                      setSelectedServiceDetail(null);
                      setCurrentTab('contact');
                      // Scroll to contact form
                      setTimeout(() => {
                        const el = document.getElementById('contact-form-root');
                        if (el) el.scrollIntoView({ behavior: 'smooth' });
                      }, 200);
                    }}
                    className="py-3 rounded-xl text-xs font-medium bg-stone-100 hover:bg-stone-200 border border-stone-200 text-stone-900 transition-all text-center shadow-xs"
                  >
                    Book Appointment
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </section>
  );
}
