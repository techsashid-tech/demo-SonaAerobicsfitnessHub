import React, { useState } from 'react';
import { 
  Sparkles, 
  Activity, 
  Dumbbell, 
  Music, 
  Flame, 
  Zap, 
  HeartPulse, 
  ShieldCheck, 
  ArrowUpRight 
} from 'lucide-react';
import { FACILITIES_DATA } from '../data/gymData';
import { ThemeMode, Facility } from '../types';

interface FacilitiesSectionProps {
  theme: ThemeMode;
  onOpenBookingModal: () => void;
}

export const FacilitiesSection: React.FC<FacilitiesSectionProps> = ({
  theme,
  onOpenBookingModal,
}) => {
  const isDark = theme === 'dark';
  const [selectedFacility, setSelectedFacility] = useState<Facility | null>(null);

  // Map icon names to components
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Activity':
        return <Activity className="w-5 h-5 text-rose-400" />;
      case 'Dumbbell':
        return <Dumbbell className="w-5 h-5 text-rose-400" />;
      case 'Music':
        return <Music className="w-5 h-5 text-pink-400" />;
      case 'Flame':
        return <Flame className="w-5 h-5 text-amber-400" />;
      case 'Zap':
        return <Zap className="w-5 h-5 text-yellow-400" />;
      case 'HeartPulse':
        return <HeartPulse className="w-5 h-5 text-rose-400" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-5 h-5 text-emerald-400" />;
      default:
        return <Sparkles className="w-5 h-5 text-rose-400" />;
    }
  };

  return (
    <section
      id="facilities"
      className={`py-24 sm:py-32 relative overflow-hidden transition-colors duration-300 ${
        isDark ? 'bg-[#09090D] text-slate-100' : 'bg-white text-slate-800'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-rose-500/10 border border-rose-500/25 text-rose-400 text-xs font-bold tracking-widest uppercase">
            <Sparkles className="w-3.5 h-3.5" />
            Designed Exclusively for Women
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold font-heading tracking-tight">
            World-Class Facilities For{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 via-pink-400 to-rose-300">
              Your Daily Transformation
            </span>
          </h2>
          <p className={`text-base sm:text-lg ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
            Every square foot of Sona Aerobics & Fitness Hub is engineered for safety, high performance, and absolute luxury. Hover over any facility to explore features.
          </p>
        </div>

        {/* Facilities Grid with Subtle Zoom-In / Zoom-Out and Rise Effects */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {FACILITIES_DATA.map((facility) => (
            <div
              key={facility.id}
              onClick={() => setSelectedFacility(facility)}
              className={`group relative rounded-3xl overflow-hidden border transition-all duration-500 ease-out cursor-pointer hover:-translate-y-2.5 ${
                isDark
                  ? 'bg-[#121218] border-rose-500/15 hover:border-rose-500/50 hover:shadow-[0_15px_35px_rgba(244,63,94,0.2)]'
                  : 'bg-white border-rose-100 hover:border-rose-300 hover:shadow-2xl hover:shadow-rose-950/10'
              }`}
            >
              {/* Image Container with Subtle Zoom Effect */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={facility.imageUrl}
                  alt={facility.title}
                  className="w-full h-full object-cover object-center transform transition-transform duration-700 ease-out group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#121218] via-black/40 to-transparent" />

                {/* Floating Icon */}
                <div className="absolute top-4 left-4 w-10 h-10 rounded-2xl bg-black/60 backdrop-blur-md border border-white/20 flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                  {getIcon(facility.iconName)}
                </div>

                <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-rose-500/20 backdrop-blur-md border border-rose-400/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <ArrowUpRight className="w-4 h-4 text-rose-300" />
                </div>
              </div>

              {/* Content Body */}
              <div className="p-5 sm:p-6 space-y-3">
                <span className="text-[11px] font-bold uppercase tracking-widest text-rose-400 block">
                  {facility.tagline}
                </span>

                <h3 className="text-lg font-bold font-heading group-hover:text-rose-400 transition-colors">
                  {facility.title}
                </h3>

                <p className={`text-xs leading-relaxed line-clamp-2 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                  {facility.description}
                </p>

                {/* Feature Chips */}
                <div className="pt-2 flex flex-wrap gap-1.5">
                  {facility.features.map((feat, i) => (
                    <span
                      key={i}
                      className={`text-[10px] px-2.5 py-0.5 rounded-full font-medium ${
                        isDark
                          ? 'bg-slate-800/80 text-slate-300 border border-slate-700'
                          : 'bg-rose-50 text-rose-800 border border-rose-200/50'
                      }`}
                    >
                      {feat}
                    </span>
                  ))}
                </div>
              </div>

              {/* Glowing bottom accent line on hover */}
              <div className="h-1 w-0 group-hover:w-full bg-gradient-to-r from-rose-500 to-pink-500 transition-all duration-500" />
            </div>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="mt-16 p-8 rounded-3xl bg-gradient-to-r from-rose-950/40 via-purple-950/30 to-rose-950/40 border border-rose-500/30 flex flex-col md:flex-row items-center justify-between gap-6 backdrop-blur-xl">
          <div className="space-y-1 text-center md:text-left">
            <h4 className="text-xl sm:text-2xl font-bold font-heading text-white">
              Want to see our Aerobics Studio in person?
            </h4>
            <p className="text-sm text-rose-200">
              Drop by for a guided facility walk-through and meet our head instructors today.
            </p>
          </div>
          <button
            onClick={onOpenBookingModal}
            className="px-8 py-3.5 rounded-xl bg-white text-slate-900 font-bold text-sm tracking-wide shadow-xl hover:bg-rose-100 hover:scale-105 active:scale-95 transition-all flex-shrink-0 cursor-pointer"
          >
            Book Free Studio Tour
          </button>
        </div>
      </div>
    </section>
  );
};
