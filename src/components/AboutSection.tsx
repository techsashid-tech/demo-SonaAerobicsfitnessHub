import React from 'react';
import { 
  Sparkles, 
  CheckCircle2, 
  Heart, 
  Dumbbell, 
  Users, 
  ShieldCheck, 
  ArrowRight 
} from 'lucide-react';
import { STATS_DATA } from '../data/gymData';
import { ThemeMode } from '../types';

interface AboutSectionProps {
  theme: ThemeMode;
  onOpenBookingModal: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({
  theme,
  onOpenBookingModal,
}) => {
  const isDark = theme === 'dark';

  return (
    <section
      id="about"
      className={`py-24 sm:py-32 relative overflow-hidden transition-colors duration-300 ${
        isDark ? 'bg-[#0E0E14] text-slate-100' : 'bg-rose-50/40 text-slate-800'
      }`}
    >
      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-rose-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Visual Storytelling & Multi-Image Composition */}
          <div className="lg:col-span-6 relative">
            {/* Main Feature Image with subtle zoom on hover */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-rose-950/20 border border-rose-500/20 group">
              <img
                src="https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=1200&q=85"
                alt="Women aerobics and fitness at Sona Hub"
                className="w-full h-[440px] sm:h-[500px] object-cover object-center transform group-hover:scale-105 transition-transform duration-700 ease-out"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

              {/* Floating Bottom Card */}
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-black/60 backdrop-blur-xl border border-white/15 text-white">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-rose-500 to-pink-500 flex items-center justify-center flex-shrink-0">
                    <Heart className="w-5 h-5 text-white fill-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm tracking-wide">A Safe Sisterhood Sanctuary</h4>
                    <p className="text-xs text-rose-200">Exclusively designed for women's comfort & confidence</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Top Pill Badge */}
            <div className="absolute -top-4 -right-4 sm:right-6 bg-gradient-to-r from-rose-600 to-pink-600 text-white px-4 py-2.5 rounded-2xl shadow-xl shadow-rose-600/40 border border-white/20 flex items-center gap-2 transform rotate-1 animate-bounce" style={{ animationDuration: '3s' }}>
              <Sparkles className="w-4 h-4 text-white" />
              <span className="text-xs font-extrabold tracking-wider uppercase">
                Odisha's Premier Ladies Gym
              </span>
            </div>
          </div>

          {/* Right Column: Editorial Text & Narrative */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-rose-500/10 border border-rose-500/25 text-rose-400 text-xs font-bold tracking-widest uppercase">
              <ShieldCheck className="w-3.5 h-3.5" />
              About Sona Aerobics & Fitness Hub
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight font-heading leading-tight">
              Where Strong Women Are Celebrated,{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-pink-400">
                Not Judged.
              </span>
            </h2>

            <p className={`text-base sm:text-lg leading-relaxed ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
              Located at the heart of <strong>Mahanadi Vihar, Cuttack</strong>, Sona Aerobics & Fitness Hub was founded with a singular, resolute mission: to provide girls and women with a truly private, world-class fitness haven free from intimidation, crowded mixed-gym discomfort, or generic training routines.
            </p>

            <p className={`text-sm sm:text-base leading-relaxed ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
              Whether you are a college girl stepping into fitness for the first time, a busy working professional aiming to shake off workday stress, or a homemaker reclaiming your strength and vitality—our certified female trainers ensure you are guided with warmth, precision, and genuine encouragement every single day.
            </p>

            {/* Core Value Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
              <div className={`p-4 rounded-2xl border transition-all ${
                isDark ? 'bg-slate-900/60 border-slate-800' : 'bg-white border-rose-100 shadow-sm'
              }`}>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-rose-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <h5 className="font-bold text-sm">100% Female Environment</h5>
                    <p className={`text-xs mt-1 ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                      All-female instructors and members for undisturbed peace of mind.
                    </p>
                  </div>
                </div>
              </div>

              <div className={`p-4 rounded-2xl border transition-all ${
                isDark ? 'bg-slate-900/60 border-slate-800' : 'bg-white border-rose-100 shadow-sm'
              }`}>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-pink-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <h5 className="font-bold text-sm">Joint-Safe Aerobics</h5>
                    <p className={`text-xs mt-1 ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                      Spring-cushioned wooden flooring ensuring knee and back protection.
                    </p>
                  </div>
                </div>
              </div>

              <div className={`p-4 rounded-2xl border transition-all ${
                isDark ? 'bg-slate-900/60 border-slate-800' : 'bg-white border-rose-100 shadow-sm'
              }`}>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-rose-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <h5 className="font-bold text-sm">Empowering Strength Gear</h5>
                    <p className={`text-xs mt-1 ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                      Resistance equipment custom calibrated for female biomechanics.
                    </p>
                  </div>
                </div>
              </div>

              <div className={`p-4 rounded-2xl border transition-all ${
                isDark ? 'bg-slate-900/60 border-slate-800' : 'bg-white border-rose-100 shadow-sm'
              }`}>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-pink-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <h5 className="font-bold text-sm">Sustainable Weight Loss</h5>
                    <p className={`text-xs mt-1 ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                      Wholesome nutrition roadmaps without starving or artificial crash diets.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <button
                onClick={onOpenBookingModal}
                className="px-7 py-3.5 rounded-xl bg-gradient-to-r from-rose-600 via-pink-600 to-rose-500 text-white font-bold text-sm tracking-wide shadow-lg shadow-rose-600/30 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center gap-2 cursor-pointer"
              >
                <span>Experience Sona Hub (Free Trial)</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Floating Statistics Grid */}
        <div className="mt-20 grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {STATS_DATA.map((stat, idx) => (
            <div
              key={idx}
              className={`p-6 rounded-3xl border transition-all duration-300 hover:translate-y-[-4px] ${
                isDark
                  ? 'bg-slate-900/50 border-rose-500/15 hover:border-rose-500/40 hover:shadow-xl hover:shadow-rose-950/30'
                  : 'bg-white border-rose-200/70 hover:border-rose-300 hover:shadow-xl hover:shadow-rose-100'
              }`}
            >
              <p className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-transparent bg-clip-text bg-gradient-to-r from-rose-500 via-pink-500 to-rose-400">
                {stat.value}
              </p>
              <h4 className="text-sm sm:text-base font-bold mt-2 tracking-wide text-white dark:text-white">
                {stat.label}
              </h4>
              <p className={`text-xs mt-1 ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                {stat.sub}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
