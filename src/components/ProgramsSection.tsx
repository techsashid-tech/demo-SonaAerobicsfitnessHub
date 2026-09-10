import React, { useState, useRef } from 'react';
import { 
  Sparkles, 
  Clock, 
  Flame, 
  TrendingUp, 
  ChevronLeft, 
  ChevronRight, 
  ArrowRight, 
  Check, 
  Users 
} from 'lucide-react';
import { PROGRAMS_DATA } from '../data/gymData';
import { ThemeMode, Program } from '../types';

interface ProgramsSectionProps {
  theme: ThemeMode;
  onOpenBookingModal: (programName?: string) => void;
}

export const ProgramsSection: React.FC<ProgramsSectionProps> = ({
  theme,
  onOpenBookingModal,
}) => {
  const isDark = theme === 'dark';
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [activeModalProgram, setActiveModalProgram] = useState<Program | null>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const categories = [
    { id: 'all', label: 'All Programs' },
    { id: 'aerobics', label: 'Aerobics' },
    { id: 'dance', label: 'Zumba & Dance' },
    { id: 'weight-loss', label: 'Weight Loss' },
    { id: 'strength', label: 'Strength & Toning' },
    { id: 'wellness', label: 'Flexibility & Spine' },
  ];

  const filteredPrograms = selectedCategory === 'all'
    ? PROGRAMS_DATA
    : PROGRAMS_DATA.filter((p) => p.category === selectedCategory);

  const handleScroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = direction === 'left' ? -380 : 380;
      scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section
      id="programs"
      className={`py-24 sm:py-32 relative overflow-hidden transition-colors duration-300 ${
        isDark ? 'bg-[#0B0B0F] text-slate-100' : 'bg-rose-50/30 text-slate-800'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-4 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-rose-500/10 border border-rose-500/25 text-rose-400 text-xs font-bold tracking-widest uppercase">
              <Sparkles className="w-3.5 h-3.5" />
              Signature Programs
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold font-heading tracking-tight">
              Curated Workouts for{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 via-pink-400 to-rose-300">
                Every Woman's Goals
              </span>
            </h2>
            <p className={`text-base ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
              From electrifying step aerobics to muscle-sculpting strength training, our classes are choreographed to inspire, burn calories, and build lifelong strength.
            </p>
          </div>

          {/* Slider Controls */}
          <div className="flex items-center gap-3 self-start md:self-auto">
            <button
              onClick={() => handleScroll('left')}
              aria-label="Previous programs"
              className={`p-3 rounded-2xl border transition-all cursor-pointer ${
                isDark
                  ? 'bg-slate-900 border-slate-800 text-slate-300 hover:border-rose-500 hover:text-white'
                  : 'bg-white border-rose-200 text-slate-700 hover:border-rose-400 hover:bg-rose-50'
              }`}
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => handleScroll('right')}
              aria-label="Next programs"
              className={`p-3 rounded-2xl border transition-all cursor-pointer ${
                isDark
                  ? 'bg-slate-900 border-slate-800 text-slate-300 hover:border-rose-500 hover:text-white'
                  : 'bg-white border-rose-200 text-slate-700 hover:border-rose-400 hover:bg-rose-50'
              }`}
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Category Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-5 py-2 rounded-full text-xs font-bold tracking-wide transition-all whitespace-nowrap cursor-pointer ${
                selectedCategory === cat.id
                  ? 'bg-gradient-to-r from-rose-600 to-pink-600 text-white shadow-lg shadow-rose-600/30'
                  : isDark
                  ? 'bg-slate-900/80 text-slate-400 border border-slate-800 hover:text-white'
                  : 'bg-white text-slate-600 border border-rose-200 hover:bg-rose-50'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Horizontal Draggable & Scrollable Program Cards */}
        <div
          ref={scrollContainerRef}
          className="flex gap-6 overflow-x-auto pb-8 pt-2 scroll-smooth snap-x snap-mandatory"
          style={{ scrollbarWidth: 'thin' }}
        >
          {filteredPrograms.map((prog) => (
            <div
              key={prog.id}
              className={`w-[320px] sm:w-[380px] flex-shrink-0 snap-start rounded-3xl overflow-hidden border transition-all duration-300 flex flex-col justify-between group hover:-translate-y-2 ${
                isDark
                  ? 'bg-[#13131A] border-rose-500/15 hover:border-rose-500/50 hover:shadow-2xl hover:shadow-rose-950/40'
                  : 'bg-white border-rose-100 hover:border-rose-300 hover:shadow-xl hover:shadow-rose-100'
              }`}
            >
              {/* Image & Badge */}
              <div className="relative h-60 overflow-hidden">
                <img
                  src={prog.imageUrl}
                  alt={prog.title}
                  className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#13131A] via-black/30 to-transparent" />

                {/* Intensity Chip */}
                <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-xs font-semibold text-rose-300">
                  {prog.intensity}
                </div>

                {/* Calorie Pill */}
                <div className="absolute bottom-4 right-4 flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-500/80 backdrop-blur-md text-white text-xs font-bold">
                  <Flame className="w-3.5 h-3.5 text-amber-200" />
                  <span>{prog.caloriesBurn}</span>
                </div>
              </div>

              {/* Body */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <div className="flex items-center gap-2 text-xs text-rose-400 font-semibold uppercase tracking-wider mb-1">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{prog.duration}</span>
                    <span>•</span>
                    <span>{prog.trainer}</span>
                  </div>
                  <h3 className="text-xl font-bold font-heading group-hover:text-rose-400 transition-colors">
                    {prog.title}
                  </h3>
                  <p className={`text-xs mt-2 leading-relaxed ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                    {prog.description}
                  </p>
                </div>

                {/* Key Highlights */}
                <div className="space-y-1.5 pt-2 border-t border-slate-800/60">
                  {prog.highlights.slice(0, 3).map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs">
                      <Check className="w-3.5 h-3.5 text-rose-500 flex-shrink-0" />
                      <span className={isDark ? 'text-slate-300' : 'text-slate-700'}>{item}</span>
                    </div>
                  ))}
                </div>

                {/* Card CTAs */}
                <div className="pt-3 flex items-center gap-3">
                  <button
                    onClick={() => onOpenBookingModal(prog.title)}
                    className="flex-1 py-3 rounded-xl bg-gradient-to-r from-rose-600 to-pink-600 text-white text-xs font-bold tracking-wider uppercase shadow-md shadow-rose-600/30 hover:shadow-rose-600/50 hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer flex items-center justify-center gap-1.5"
                  >
                    <span>Join Class</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                  <button
                    onClick={() => setActiveModalProgram(prog)}
                    className={`px-3 py-3 rounded-xl text-xs font-semibold border transition-colors cursor-pointer ${
                      isDark
                        ? 'border-slate-800 text-slate-300 hover:border-slate-700 hover:bg-white/5'
                        : 'border-rose-200 text-slate-700 hover:bg-rose-50'
                    }`}
                  >
                    Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Program Details Modal */}
      {activeModalProgram && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in">
          <div className="relative max-w-xl w-full rounded-3xl bg-[#121218] border border-rose-500/30 p-6 sm:p-8 text-white shadow-2xl">
            <div className="flex justify-between items-start mb-4">
              <div>
                <span className="text-xs uppercase font-bold text-rose-400 tracking-wider">
                  Program Deep-Dive
                </span>
                <h3 className="text-2xl font-bold font-heading mt-1">{activeModalProgram.title}</h3>
                <p className="text-sm text-slate-400">{activeModalProgram.subtitle}</p>
              </div>
              <button
                onClick={() => setActiveModalProgram(null)}
                className="p-2 rounded-full bg-slate-800 text-slate-300 hover:text-white"
              >
                ✕
              </button>
            </div>

            <div className="grid grid-cols-2 gap-3 py-4 border-y border-slate-800 text-xs">
              <div>
                <span className="text-slate-400 block">Duration & Intensity:</span>
                <span className="font-bold text-white">{activeModalProgram.duration} • {activeModalProgram.intensity}</span>
              </div>
              <div>
                <span className="text-slate-400 block">Calorie Burn:</span>
                <span className="font-bold text-rose-400">{activeModalProgram.caloriesBurn}</span>
              </div>
              <div>
                <span className="text-slate-400 block">Trainer:</span>
                <span className="font-bold text-white">{activeModalProgram.trainer}</span>
              </div>
              <div>
                <span className="text-slate-400 block">Scheduled Timings:</span>
                <span className="font-bold text-white">{activeModalProgram.timing}</span>
              </div>
            </div>

            <div className="mt-4 space-y-2">
              <h5 className="text-xs font-bold uppercase tracking-wider text-rose-300">All Program Benefits:</h5>
              <div className="space-y-1.5">
                {activeModalProgram.highlights.map((h, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs text-slate-300">
                    <Check className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                    <span>{h}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 flex gap-3">
              <button
                onClick={() => {
                  const name = activeModalProgram.title;
                  setActiveModalProgram(null);
                  onOpenBookingModal(name);
                }}
                className="flex-1 py-3 rounded-xl bg-gradient-to-r from-rose-600 to-pink-600 text-white font-bold text-sm tracking-wide shadow-lg shadow-rose-600/40"
              >
                Book Free Trial for this Program
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
