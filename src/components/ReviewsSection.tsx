import React, { useState } from 'react';
import { 
  Sparkles, 
  Star, 
  Quote, 
  CheckCircle, 
  Heart, 
  ArrowRight 
} from 'lucide-react';
import { TESTIMONIALS_DATA } from '../data/gymData';
import { ThemeMode } from '../types';

interface ReviewsSectionProps {
  theme: ThemeMode;
  onOpenBookingModal: () => void;
}

export const ReviewsSection: React.FC<ReviewsSectionProps> = ({
  theme,
  onOpenBookingModal,
}) => {
  const isDark = theme === 'dark';
  const [isPaused, setIsPaused] = useState(false);

  // Duplicate list to achieve continuous seamless loop
  const duplicatedReviews = [...TESTIMONIALS_DATA, ...TESTIMONIALS_DATA];

  return (
    <section
      id="reviews"
      className={`py-24 sm:py-32 relative overflow-hidden transition-colors duration-300 ${
        isDark ? 'bg-[#0B0B0F] text-slate-100' : 'bg-rose-50/40 text-slate-800'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-rose-500/10 border border-rose-500/25 text-rose-400 text-xs font-bold tracking-widest uppercase">
            <Heart className="w-3.5 h-3.5 fill-current text-rose-500" />
            Voices of Our Sisterhood
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold font-heading tracking-tight">
            Real Stories, Real Strength,{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 via-pink-400 to-rose-300">
              Real Transformations
            </span>
          </h2>
          <p className={`text-base sm:text-lg ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
            Hear from college students, working professionals, homemakers, and doctors who found their stamina and confidence at Sona Aerobics.
          </p>
        </div>
      </div>

      {/* Infinite Horizontal Scrolling Marquee with Edge Fade Masks */}
      <div
        className="relative w-full overflow-hidden py-4"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {/* Left and Right Fade Gradients */}
        <div
          className={`absolute left-0 top-0 bottom-0 w-20 sm:w-40 z-10 pointer-events-none ${
            isDark
              ? 'bg-gradient-to-r from-[#0B0B0F] to-transparent'
              : 'bg-gradient-to-r from-rose-50/80 to-transparent'
          }`}
        />
        <div
          className={`absolute right-0 top-0 bottom-0 w-20 sm:w-40 z-10 pointer-events-none ${
            isDark
              ? 'bg-gradient-to-l from-[#0B0B0F] to-transparent'
              : 'bg-gradient-to-l from-rose-50/80 to-transparent'
          }`}
        />

        {/* Marquee Track */}
        <div
          className="flex gap-6 w-max animate-marquee"
          style={{
            animation: 'marquee 40s linear infinite',
            animationPlayState: isPaused ? 'paused' : 'running',
          }}
        >
          {duplicatedReviews.map((review, idx) => (
            <div
              key={`${review.id}-${idx}`}
              className={`w-[340px] sm:w-[420px] rounded-3xl p-6 sm:p-7 border flex flex-col justify-between transition-all duration-300 hover:scale-[1.02] ${
                isDark
                  ? 'bg-[#121218] border-rose-500/15 hover:border-rose-500/40 shadow-xl shadow-black/40'
                  : 'bg-white border-rose-100 hover:border-rose-300 shadow-xl shadow-rose-900/5'
              }`}
            >
              {/* Card Top */}
              <div>
                <div className="flex justify-between items-start mb-4">
                  {/* Rating Stars */}
                  <div className="flex items-center gap-1">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-amber-400 fill-amber-400" />
                    ))}
                  </div>

                  {/* Program Chip */}
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-rose-500/15 text-rose-400 border border-rose-500/25">
                    {review.program}
                  </span>
                </div>

                <Quote className="w-8 h-8 text-rose-500/20 mb-2" />

                <p className={`text-xs sm:text-sm leading-relaxed italic ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                  "{review.quote}"
                </p>
              </div>

              {/* Transformation Milestone Badge */}
              <div className="my-4 p-2.5 rounded-xl bg-gradient-to-r from-rose-500/10 to-pink-500/10 border border-rose-500/20 text-xs font-semibold text-rose-300 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-rose-400 flex-shrink-0" />
                <span>Result: {review.transformation}</span>
              </div>

              {/* Reviewer Profile */}
              <div className="pt-4 border-t border-slate-800/60 flex items-center gap-3">
                <img
                  src={review.avatar}
                  alt={review.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-rose-500/40"
                  loading="lazy"
                />
                <div>
                  <h4 className="text-sm font-bold font-heading flex items-center gap-1 text-white dark:text-white">
                    {review.name}
                    <CheckCircle className="w-3.5 h-3.5 text-emerald-400" />
                  </h4>
                  <p className={`text-[11px] ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                    {review.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Invite */}
      <div className="mt-14 max-w-xl mx-auto text-center px-4">
        <button
          onClick={onOpenBookingModal}
          className="px-8 py-3.5 rounded-2xl bg-gradient-to-r from-rose-600 via-pink-600 to-rose-500 text-white font-bold text-sm tracking-wide shadow-lg shadow-rose-600/30 hover:scale-[1.02] active:scale-[0.98] transition-all inline-flex items-center gap-2 cursor-pointer"
        >
          <span>Start Your Success Journey Today</span>
          <ArrowRight className="w-4 h-4" />
        </button>
        <p className="text-[10px] text-slate-500 mt-2">
          (Hover over reviews to pause auto-scroll. Authentic member satisfaction feedback)
        </p>
      </div>

      {/* CSS Keyframe for Marquee */}
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
};
