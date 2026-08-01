import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Play, Pause, Disc, Volume2, Globe, Clock, Calendar, Search, Headphones, MonitorPlay, ChevronRight, FileSpreadsheet } from 'lucide-react';
import { MediaItem } from '../types';
import { MEDIA_ITEMS } from '../data';

export default function Audiovisuals() {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [playingItem, setPlayingItem] = useState<MediaItem | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  // Derive unique categories
  const categories = ['All', ...Array.from(new Set(MEDIA_ITEMS.map(item => item.category)))];

  const filteredItems = MEDIA_ITEMS.filter(item => {
    const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          item.speaker.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          item.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = activeCategory === 'All' ? true : item.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  const handlePlayToggle = (item: MediaItem) => {
    if (playingItem?.id === item.id) {
      setIsPlaying(!isPlaying);
    } else {
      setPlayingItem(item);
      setIsPlaying(true);
    }
  };

  return (
    <section className="py-20 bg-brand-bg relative overflow-hidden" id="audiovisuals-section">
      {/* Glow Design Accents */}
      <div className="absolute top-1/2 left-1/3 w-80 h-80 bg-brand-primary/5 rounded-full blur-[110px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <div className="space-y-4 max-w-2xl text-left">
            <span className="text-xs font-mono text-brand-primary uppercase tracking-widest bg-brand-primary/10 px-3 py-1 rounded-full">
              Audiovisuals & Publications Hub
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-stone-900 tracking-tight">
              Empirical insights at your <span className="gradient-accent-text">cognitive disposal.</span>
            </h2>
            <p className="text-sm text-stone-600 font-normal">
              Access audio masterclasses, recorded keynotes, and structural slide manuals teaching rigorous academic synthesis, leadership alignment, and career antifragility.
            </p>
          </div>

          {/* Search and Category Filters */}
          <div className="space-y-3 w-full lg:w-auto shrink-0">
            <div className="relative">
              <input
                type="text"
                placeholder="Search lectures, speakers, keynotes..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full lg:w-80 bg-white border border-stone-300 rounded-xl px-4 py-2.5 text-xs text-stone-900 placeholder:text-stone-400 focus:border-brand-primary focus:outline-none shadow-2xs"
              />
              <Search className="w-4 h-4 text-stone-400 absolute right-3.5 top-3" />
            </div>
          </div>
        </div>

        {/* Categories Pills Bar */}
        <div className="flex flex-wrap gap-2 border-b border-stone-200/80 pb-6">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all ${
                activeCategory === cat
                  ? 'bg-brand-primary/15 border border-brand-primary/40 text-brand-primary font-semibold shadow-xs'
                  : 'text-stone-600 hover:text-stone-900 bg-white/70 border border-stone-200/80'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Global Media Center Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Main List Column */}
          <div className="lg:col-span-8 space-y-4">
            <AnimatePresence mode="popLayout">
              {filteredItems.length === 0 ? (
                <div className="text-center py-16 text-stone-500 text-xs">
                  No matching keynote recordings or lectures found. Try clearing your search parameters.
                </div>
              ) : (
                filteredItems.map((item) => {
                  const isCurrent = playingItem?.id === item.id;
                  const activePlaying = isCurrent && isPlaying;
                  return (
                    <motion.div
                      key={item.id}
                      layout
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      className={`glass-card rounded-xl border p-4 sm:p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 transition-all duration-300 ${
                        isCurrent
                          ? 'border-brand-primary/50 bg-brand-primary/[0.06] shadow-sm'
                          : 'border-stone-200/80 hover:border-brand-primary/30 shadow-xs'
                      }`}
                    >
                      <div className="flex gap-4 items-start sm:items-center text-left">
                        {/* Icon Indicator */}
                        <button
                          onClick={() => handlePlayToggle(item)}
                          className={`w-12 h-12 rounded-xl border flex items-center justify-center shrink-0 transition-all ${
                            isCurrent
                              ? 'bg-brand-primary border-brand-primary text-white shadow-xs'
                              : 'bg-stone-100 border-stone-200 text-stone-600 hover:text-stone-900 hover:border-brand-primary/40'
                          }`}
                        >
                          {activePlaying ? (
                            <Pause className="w-5 h-5 animate-pulse" />
                          ) : (
                            <Play className="w-5 h-5 ml-0.5" />
                          )}
                        </button>

                        <div className="space-y-1">
                          <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
                            <span className={`text-[9px] font-mono uppercase tracking-widest px-2 py-0.5 rounded-full ${
                              item.type === 'podcast' ? 'bg-brand-purple/10 text-brand-purple' : 'bg-brand-primary/10 text-brand-primary'
                            }`}>
                              {item.type}
                            </span>
                            <span className="text-[10px] text-stone-500 font-mono flex items-center gap-1">
                              <Calendar className="w-3 h-3" /> {item.date}
                            </span>
                          </div>

                          <h3 className="font-display font-semibold text-sm sm:text-base text-stone-900 hover:text-brand-primary transition-colors">
                            {item.title}
                          </h3>

                          <p className="text-[11px] text-stone-600">
                            Delivered by: <span className="text-stone-900 font-medium">{item.speaker}</span>
                          </p>
                        </div>
                      </div>

                      {/* Right metadata and play controls */}
                      <div className="flex sm:flex-col items-center sm:items-end justify-between sm:justify-center w-full sm:w-auto shrink-0 border-t sm:border-t-0 border-stone-200/80 pt-3 sm:pt-0">
                        <span className="text-xs font-mono text-stone-500 flex items-center gap-1">
                          <Clock className="w-3.5 h-3.5 text-stone-400" />
                          {item.duration}
                        </span>

                        <span className="text-[10px] font-mono text-brand-primary mt-1 hidden sm:block">
                          {item.category}
                        </span>
                      </div>
                    </motion.div>
                  );
                })
              )}
            </AnimatePresence>
          </div>

          {/* Live Glassmorphic Player Column */}
          <div className="lg:col-span-4 space-y-6">
            <div className="glass-card rounded-2xl border border-stone-200/80 p-6 text-center space-y-6 relative overflow-hidden shadow-xs">
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-primary/10 rounded-full blur-2xl" />

              <h3 className="text-sm font-mono text-stone-500 uppercase tracking-widest text-left">
                Direct Inline Audio Player
              </h3>

              {!playingItem ? (
                <div className="py-16 space-y-3 flex flex-col items-center">
                  <div className="w-16 h-16 rounded-full bg-stone-100 border border-stone-200 flex items-center justify-center text-stone-400 animate-pulse">
                    <Headphones className="w-8 h-8" />
                  </div>
                  <div className="space-y-1">
                    <p className="text-xs font-medium text-stone-900">No Lecture Playing</p>
                    <p className="text-[11px] text-stone-500 max-w-xs">
                      Select any keynote audio or research tutorial on the left to trigger direct play.
                    </p>
                  </div>
                </div>
              ) : (
                <div className="space-y-6">
                  {/* Vinyl spinning record graphic */}
                  <div className="relative w-40 h-40 mx-auto flex items-center justify-center">
                    <div className="absolute inset-0 rounded-full border-4 border-stone-200 bg-stone-900 flex items-center justify-center shadow-md">
                      <div className="w-36 h-36 rounded-full border-2 border-dashed border-stone-600 animate-spin" style={{ animationDuration: '30s', animationPlayState: isPlaying ? 'running' : 'paused' }}>
                        <div className="w-3 h-3 bg-brand-primary rounded-full absolute top-2 left-1/2 -translate-x-1/2" />
                      </div>
                    </div>
                    
                    <div className="relative z-10 w-24 h-24 rounded-full bg-stone-800 border border-stone-700 flex items-center justify-center shadow-inner">
                      <Disc className={`w-12 h-12 text-brand-primary ${isPlaying ? 'animate-spin' : ''}`} style={{ animationDuration: '4s' }} />
                    </div>
                  </div>

                  {/* Playing details */}
                  <div className="space-y-1.5 text-center">
                    <span className="text-[9px] font-mono text-brand-primary uppercase tracking-widest font-semibold">
                      NOW STREAMING • {playingItem.type}
                    </span>
                    <h4 className="font-display font-bold text-sm text-stone-900 line-clamp-2">
                      {playingItem.title}
                    </h4>
                    <p className="text-[11px] text-stone-600">
                      {playingItem.speaker}
                    </p>
                  </div>

                  {/* Slider simulation */}
                  <div className="space-y-1.5">
                    <div className="w-full bg-stone-200 h-1 rounded-full overflow-hidden">
                      <div
                        className="bg-brand-primary h-full rounded-full transition-all duration-300"
                        style={{ width: isPlaying ? '38%' : '5%' }}
                      />
                    </div>
                    <div className="flex justify-between items-center text-[9px] font-mono text-stone-500">
                      <span>{isPlaying ? '02:14' : '00:00'}</span>
                      <span>{playingItem.duration}</span>
                    </div>
                  </div>

                  {/* Player Controls */}
                  <div className="flex items-center justify-center gap-4">
                    <button
                      onClick={() => setIsPlaying(!isPlaying)}
                      className="w-12 h-12 rounded-full bg-brand-primary hover:bg-brand-primary/95 text-white flex items-center justify-center shadow-md shadow-brand-primary/20 transition-all scale-105"
                    >
                      {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5 ml-0.5" />}
                    </button>
                  </div>

                  <div className="flex items-center justify-center gap-1.5 text-[10px] font-mono text-stone-500 border-t border-stone-200/80 pt-4">
                    <Volume2 className="w-3.5 h-3.5" />
                    <span>Autoplay streaming on high-fidelity channels.</span>
                  </div>
                </div>
              )}
            </div>

            {/* Reference Slide manual callout */}
            <div className="glass-card rounded-2xl border border-stone-200/80 p-5 text-left space-y-3.5 shadow-xs">
              <div className="flex items-center gap-2">
                <FileSpreadsheet className="w-5 h-5 text-brand-purple" />
                <h4 className="font-display font-semibold text-xs uppercase tracking-widest text-stone-900">
                  Reference Manual Slides
                </h4>
              </div>
              <p className="text-xs text-stone-600 leading-relaxed font-normal">
                Download printable mapping matrices and literature parsing tables to implement key strategic lessons offline.
              </p>
              <button
                onClick={() => {
                  alert('Resource downloaded successfully. Check your browser downloads for the literature_review_matrix_2026.pdf.');
                }}
                className="w-full py-2.5 rounded-xl text-xs font-display font-medium text-stone-900 bg-white border border-stone-300 hover:border-brand-purple/40 transition-all text-center flex items-center justify-center gap-1.5 shadow-2xs cursor-pointer"
              >
                <span>Download literature_review_matrix_2026.pdf</span>
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
