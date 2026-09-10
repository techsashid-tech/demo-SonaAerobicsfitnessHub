import React, { useState, useEffect } from 'react';
import { 
  Sparkles, 
  ArrowRight, 
  ShieldCheck, 
  MapPin, 
  Flame, 
  HeartHandshake, 
  Play 
} from 'lucide-react';
import { HERO_TAGLINES, GYM_DETAILS } from '../data/gymData';

interface HeroSectionProps {
  onOpenBookingModal: () => void;
  onExplorePrograms: () => void;
  onOpenMembership: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onOpenBookingModal,
  onExplorePrograms,
  onOpenMembership,
}) => {
  const [currentTaglineIndex, setCurrentTaglineIndex] = useState(0);
  const [taglineAnimationClass, setTaglineAnimationClass] = useState('opacity-100 translate-y-0 filter-none');
  const [videoLoaded, setVideoLoaded] = useState(false);

  // Sequential kinetic tagline animation
  useEffect(() => {
    const interval = setInterval(() => {
      // Exit animation
      setTaglineAnimationClass('opacity-0 -translate-y-3 blur-sm scale-95 transition-all duration-500 ease-in');
      
      setTimeout(() => {
        setCurrentTaglineIndex((prev) => (prev + 1) % HERO_TAGLINES.length);
        // Enter animation
        setTaglineAnimationClass('opacity-0 translate-y-4 blur-md scale-105');
        setTimeout(() => {
          setTaglineAnimationClass('opacity-100 translate-y-0 blur-none scale-100 transition-all duration-700 ease-out');
        }, 50);
      }, 500);
    }, 3800);

    return () => clearInterval(interval);
  }, []);

  // Primary video source + fallback video sources
  const videoSources = [
    "https://assets.mixkit.co/videos/preview/mixkit-women-exercising-in-a-gym-40546-large.mp4",
    "https://assets.mixkit.co/videos/preview/mixkit-young-woman-stretching-her-arms-at-the-gym-40899-large.mp4"
  ];

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#07070A] pt-20 pb-16"
    >
      {/* 4K Background Video with Poster Fallback */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          poster="https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=2000&q=85"
          onLoadedData={() => setVideoLoaded(true)}
          className={`w-full h-full object-cover object-center transform scale-105 transition-opacity duration-1000 ${
            videoLoaded ? 'opacity-55' : 'opacity-40'
          }`}
        >
          <source src={videoSources[0]} type="video/mp4" />
          <source src={videoSources[1]} type="video/mp4" />
        </video>

        {/* Fallback poster image underlay */}
        <div
          className="absolute inset-0 bg-cover bg-center -z-10 opacity-60"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=2000&q=85')`,
          }}
        />

        {/* Cinematic dark multi-layer gradients for depth */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0F] via-[#0B0B0F]/70 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B0B0F]/90 via-[#0B0B0F]/40 to-[#0B0B0F]/90" />
        <div className="absolute inset-0 bg-radial-at-c from-transparent via-[#0B0B0F]/50 to-[#0B0B0F]/95" />

        {/* Ambient atmospheric glows */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-rose-600/15 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-pink-500/10 rounded-full blur-[120px] pointer-events-none" />
      </div>

      {/* Hero Content Container */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        {/* Top Badge: 100% Women Exclusive */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-rose-500/15 border border-rose-500/30 text-rose-300 text-xs sm:text-sm font-semibold tracking-wider uppercase mb-6 backdrop-blur-md shadow-lg shadow-rose-950/40 animate-pulse">
          <ShieldCheck className="w-4 h-4 text-rose-400" />
          <span>Exclusive Ladies Gym • Mahanadi Vihar</span>
          <span className="w-1.5 h-1.5 rounded-full bg-rose-400" />
          <span className="text-white font-normal hidden sm:inline">Odisha</span>
        </div>

        {/* Main Brand Title */}
        <div className="space-y-2 mb-6">
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white font-heading leading-tight drop-shadow-2xl">
            SONA AEROBICS
            <span className="block text-2xl sm:text-4xl md:text-5xl font-light text-transparent bg-clip-text bg-gradient-to-r from-rose-400 via-pink-300 to-rose-200 mt-1">
              & FITNESS HUB
            </span>
          </h1>
        </div>

        {/* Dynamic Kinetic Tagline Sequence */}
        <div className="h-16 sm:h-20 flex items-center justify-center mb-8 px-4">
          <p
            className={`text-xl sm:text-3xl md:text-4xl font-extrabold tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-white via-rose-100 to-pink-300 font-heading select-none ${taglineAnimationClass}`}
            style={{
              textShadow: '0 0 35px rgba(244, 63, 94, 0.45)',
            }}
          >
            "{HERO_TAGLINES[currentTaglineIndex]}"
          </p>
        </div>

        {/* Supporting Subtitle */}
        <p className="max-w-2xl text-slate-300 text-base sm:text-lg md:text-xl font-normal leading-relaxed mb-10 text-balance">
          {GYM_DETAILS.tagline} Step into a private, high-energy sanctuary crafted exclusively for women—igniting stamina, strength, and unstoppable confidence.
        </p>

        {/* Premium Animated CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full max-w-xl mb-12">
          {/* JOIN NOW Button */}
          <button
            id="hero-join-now-btn"
            onClick={onOpenMembership}
            className="w-full sm:w-auto relative group overflow-hidden px-8 py-4 rounded-2xl bg-gradient-to-r from-rose-600 via-pink-600 to-rose-500 text-white font-bold text-base tracking-wide shadow-[0_0_30px_rgba(225,29,72,0.4)] hover:shadow-[0_0_45px_rgba(225,29,72,0.65)] hover:scale-[1.03] active:scale-[0.98] transition-all duration-300 cursor-pointer border border-rose-400/40"
          >
            <span className="relative z-10 flex items-center justify-center gap-2">
              <Flame className="w-5 h-5 text-rose-200" />
              <span>JOIN NOW</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </span>
            <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 pointer-events-none" />
          </button>

          {/* BOOK A FREE SESSION Button */}
          <button
            id="hero-book-session-btn"
            onClick={onOpenBookingModal}
            className="w-full sm:w-auto relative group px-7 py-4 rounded-2xl bg-white/10 hover:bg-white/15 backdrop-blur-xl text-white font-bold text-base tracking-wide border border-rose-300/30 hover:border-rose-400/70 shadow-lg shadow-black/30 hover:scale-[1.03] active:scale-[0.98] transition-all duration-300 cursor-pointer"
          >
            <span className="flex items-center justify-center gap-2">
              <Sparkles className="w-5 h-5 text-rose-400" />
              <span>BOOK A FREE SESSION</span>
            </span>
          </button>

          {/* EXPLORE PROGRAMS Button */}
          <button
            id="hero-explore-programs-btn"
            onClick={onExplorePrograms}
            className="w-full sm:w-auto px-6 py-4 rounded-2xl bg-transparent hover:bg-white/5 text-slate-300 hover:text-white font-semibold text-sm tracking-wider uppercase border border-slate-700/60 hover:border-slate-500 transition-all cursor-pointer flex items-center justify-center gap-2"
          >
            <span>EXPLORE PROGRAMS</span>
            <ArrowRight className="w-3.5 h-3.5 opacity-70" />
          </button>
        </div>

        {/* Micro Value Metrics & Badges */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 pt-6 border-t border-slate-800/80 w-full max-w-4xl text-left">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-rose-500/15 border border-rose-500/30 flex items-center justify-center flex-shrink-0">
              <ShieldCheck className="w-5 h-5 text-rose-400" />
            </div>
            <div>
              <p className="text-xs font-bold text-white uppercase tracking-wider">100% Women-Only</p>
              <p className="text-[11px] text-slate-400">Total Privacy & Safety</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-pink-500/15 border border-pink-500/30 flex items-center justify-center flex-shrink-0">
              <HeartHandshake className="w-5 h-5 text-pink-400" />
            </div>
            <div>
              <p className="text-xs font-bold text-white uppercase tracking-wider">Female Coaches</p>
              <p className="text-[11px] text-slate-400">Certified & Compassionate</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-500/15 border border-amber-500/30 flex items-center justify-center flex-shrink-0">
              <Flame className="w-5 h-5 text-amber-400" />
            </div>
            <div>
              <p className="text-xs font-bold text-white uppercase tracking-wider">Aerobics & Zumba</p>
              <p className="text-[11px] text-slate-400">Joint-Safe Wooden Floors</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-cyan-500/15 border border-cyan-500/30 flex items-center justify-center flex-shrink-0">
              <MapPin className="w-5 h-5 text-cyan-400" />
            </div>
            <div>
              <p className="text-xs font-bold text-white uppercase tracking-wider">Mahanadi Vihar</p>
              <p className="text-[11px] text-slate-400">Safe, Prime Location</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
