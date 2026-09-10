import React, { useEffect, useState } from 'react';
import { Sparkles, Dumbbell } from 'lucide-react';

interface PreloaderProps {
  onComplete: () => void;
}

export const Preloader: React.FC<PreloaderProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => {
            setIsFading(true);
            setTimeout(onComplete, 600);
          }, 200);
          return 100;
        }
        // Smooth non-linear progress
        const diff = Math.floor(Math.random() * 8) + 4;
        return Math.min(prev + diff, 100);
      });
    }, 45);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <div
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#07070A] text-white transition-opacity duration-700 ${
        isFading ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      {/* Ambient background glow */}
      <div className="absolute w-96 h-96 rounded-full bg-rose-500/15 blur-[120px] pointer-events-none animate-pulse" />
      <div className="absolute w-80 h-80 rounded-full bg-pink-600/10 blur-[100px] pointer-events-none" />

      <div className="relative flex flex-col items-center z-10 px-6 max-w-md w-full text-center">
        {/* Animated Circular Fitness Ring */}
        <div className="relative flex items-center justify-center mb-8">
          <svg className="w-28 h-28 transform -rotate-90" viewBox="0 0 100 100">
            <circle
              cx="50"
              cy="50"
              r="44"
              className="stroke-rose-950/40"
              strokeWidth="4"
              fill="transparent"
            />
            <circle
              cx="50"
              cy="50"
              r="44"
              className="stroke-rose-500 transition-all duration-150 ease-out"
              strokeWidth="4"
              strokeDasharray={276.46}
              strokeDashoffset={276.46 - (276.46 * progress) / 100}
              strokeLinecap="round"
              fill="transparent"
              style={{
                filter: 'drop-shadow(0 0 10px rgba(244, 63, 94, 0.7))',
              }}
            />
          </svg>

          <div className="absolute flex flex-col items-center justify-center">
            <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-rose-600 to-pink-500 flex items-center justify-center shadow-lg shadow-rose-500/40 animate-pulse">
              <Dumbbell className="w-6 h-6 text-white transform -rotate-45" />
            </div>
          </div>
        </div>

        {/* Brand Name with Reveal Animation */}
        <div className="space-y-1 mb-4">
          <h2 className="text-xs uppercase tracking-[0.35em] text-rose-400 font-semibold flex items-center justify-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-rose-400 animate-spin" style={{ animationDuration: '4s' }} />
            Exclusive Ladies Gym
            <Sparkles className="w-3.5 h-3.5 text-rose-400 animate-spin" style={{ animationDuration: '4s' }} />
          </h2>
          <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white font-heading">
            SONA AEROBICS
          </h1>
          <p className="text-sm font-medium tracking-widest text-slate-400 uppercase">
            & Fitness Hub
          </p>
        </div>

        {/* Progress Bar & Percentage */}
        <div className="w-full bg-slate-900/90 rounded-full h-1.5 overflow-hidden p-0.5 border border-rose-500/20 mb-4">
          <div
            className="h-full rounded-full bg-gradient-to-r from-rose-600 via-pink-500 to-rose-400 transition-all duration-150 shadow-[0_0_12px_rgba(244,63,94,0.8)]"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Slogans */}
        <div className="flex justify-between w-full items-center text-[11px] text-slate-400 tracking-wider">
          <span className="font-semibold text-rose-400 uppercase">EMPOWER • MOVE • TRANSFORM</span>
          <span className="font-mono text-slate-300 font-bold">{progress}%</span>
        </div>

        <p className="text-[10px] uppercase tracking-[0.25em] text-slate-500 mt-6 font-medium">
          Mahanadi Vihar • Odisha
        </p>

        {/* Skip button if in a hurry */}
        <button
          onClick={onComplete}
          className="mt-6 text-[11px] text-slate-500 hover:text-rose-400 transition-colors underline underline-offset-4 cursor-pointer"
        >
          Skip Intro →
        </button>
      </div>
    </div>
  );
};
