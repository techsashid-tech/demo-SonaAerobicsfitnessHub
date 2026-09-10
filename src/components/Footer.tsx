import React from 'react';
import { 
  Dumbbell, 
  ArrowUp, 
  MapPin, 
  Phone, 
  Mail, 
  Heart, 
  ShieldCheck, 
  Sparkles, 
  ChevronRight, 
  Clock 
} from 'lucide-react';
import { GYM_DETAILS } from '../data/gymData';
import { ThemeMode } from '../types';

interface FooterProps {
  theme: ThemeMode;
  onOpenBookingModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ theme, onOpenBookingModal }) => {
  const isDark = theme === 'dark';

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const quickLinks = [
    { label: 'Home', href: '#hero' },
    { label: 'About Ladies Gym', href: '#about' },
    { label: 'Facilities', href: '#facilities' },
    { label: 'Programs', href: '#programs' },
    { label: 'Membership Plans', href: '#membership' },
    { label: 'BMI Calculator Tool', href: '#bmi' },
    { label: '3D Photo Arena', href: '#gallery' },
    { label: 'Member Reviews', href: '#reviews' },
    { label: 'FAQ', href: '#faq' },
    { label: 'Contact & Location', href: '#contact' },
  ];

  const programLinks = [
    'Rhythmic Step Aerobics',
    'Zumba Dance Cardio',
    'Fat Shred & Inch-Loss',
    'Women Strength & Glute Lab',
    'Flexibility & Spine Care',
    '1-on-1 Female Mentorship'
  ];

  return (
    <footer
      id="main-footer"
      className={`relative pt-20 pb-12 overflow-hidden border-t ${
        isDark
          ? 'bg-[#050508] border-rose-500/15 text-slate-400'
          : 'bg-[#0E0E14] border-slate-800 text-slate-400'
      }`}
    >
      {/* Subtle bottom glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-rose-600/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Top Grid: 4 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-16 border-b border-slate-800/80">
          {/* Column 1: Brand & Identity (4 Cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-xl bg-gradient-to-tr from-rose-600 via-pink-600 to-rose-400 flex items-center justify-center shadow-lg shadow-rose-500/30">
                <Dumbbell className="w-6 h-6 text-white transform -rotate-45" />
              </div>
              <div>
                <h3 className="text-xl font-extrabold font-heading text-white tracking-tight">
                  SONA AEROBICS
                </h3>
                <p className="text-[10px] tracking-widest uppercase font-bold text-rose-400">
                  & Fitness Hub (Ladies Gym)
                </p>
              </div>
            </div>

            <p className="text-xs leading-relaxed text-slate-400">
              The leading women-exclusive fitness and aerobics destination in Mahanadi Vihar, Cuttack. Dedicated to empowering girls and women with confidence, joy, physical strength, and lifelong health.
            </p>

            <div className="flex items-center gap-2 text-xs text-rose-300 font-semibold pt-1">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>100% Women-Only Environment • All-Female Staff</span>
            </div>

            <div className="pt-2">
              <button
                onClick={onOpenBookingModal}
                className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-rose-600 to-pink-600 text-white font-bold text-xs uppercase tracking-wider shadow-md hover:scale-105 transition-all cursor-pointer flex items-center gap-2"
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>Book Free Trial Session</span>
              </button>
            </div>
          </div>

          {/* Column 2: Quick Links (2 Cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-sm font-bold font-heading uppercase tracking-wider text-white">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs">
              {quickLinks.slice(0, 5).map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="hover:text-rose-400 transition-colors flex items-center gap-1.5"
                  >
                    <ChevronRight className="w-3 h-3 text-rose-500" />
                    <span>{link.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Signature Programs (3 Cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-sm font-bold font-heading uppercase tracking-wider text-white">
              Fitness Programs
            </h4>
            <ul className="space-y-2 text-xs">
              {programLinks.map((prog, i) => (
                <li key={i}>
                  <a
                    href="#programs"
                    className="hover:text-rose-400 transition-colors flex items-center gap-1.5"
                  >
                    <ChevronRight className="w-3 h-3 text-rose-500" />
                    <span>{prog}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Location & Operating Hours (3 Cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-sm font-bold font-heading uppercase tracking-wider text-white">
              Visit Mahanadi Vihar
            </h4>
            <div className="space-y-2.5 text-xs text-slate-400">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-rose-400 flex-shrink-0 mt-0.5" />
                <span>Plot 32, Mahanadi Vihar, Cuttack, Odisha 753004</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-rose-400 flex-shrink-0" />
                <a href={`tel:${GYM_DETAILS.phoneRaw}`} className="hover:text-white transition-colors">
                  {GYM_DETAILS.phone}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-rose-400 flex-shrink-0" />
                <a href={`mailto:${GYM_DETAILS.email}`} className="hover:text-white transition-colors break-all">
                  {GYM_DETAILS.email}
                </a>
              </div>
              <div className="flex items-start gap-2 pt-1">
                <Clock className="w-4 h-4 text-pink-400 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-[11px] text-white font-medium">Mon - Sat: 6:00 AM – 8:30 PM</p>
                  <p className="text-[10px] text-slate-500">Morning & Evening Flexible Batches</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar with 3D SKDAS Signature and Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <p className="text-xs text-slate-500 text-center sm:text-left">
            © {new Date().getFullYear()} Sona Aerobics & Fitness Hub. All Rights Reserved. Exclusive Ladies Gym.
          </p>

          {/* 3D Designer Credit as explicitly requested in Prompt Section 20 */}
          <div className="group relative text-center">
            <div
              className="relative px-5 py-2.5 rounded-2xl bg-gradient-to-b from-[#1E1E28] to-[#101016] border border-rose-500/20 shadow-[0_4px_15px_rgba(0,0,0,0.6)] group-hover:shadow-[0_8px_25px_rgba(244,63,94,0.3)] group-hover:border-rose-500/50 transition-all duration-300 transform-style-3d group-hover:-translate-y-1"
            >
              <span className="block text-[9px] uppercase tracking-[0.25em] text-slate-400 font-semibold">
                DESIGNED & DEVELOPED BY
              </span>
              <span
                className="block text-sm sm:text-base font-extrabold tracking-widest font-heading text-transparent bg-clip-text bg-gradient-to-r from-rose-400 via-pink-200 to-amber-200 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] mt-0.5"
                style={{
                  letterSpacing: '0.15em',
                  textShadow: '0 0 12px rgba(244, 63, 94, 0.4)',
                }}
              >
                SKDAS
              </span>
            </div>
          </div>

          {/* Animated Back to Top Button */}
          <button
            id="back-to-top-btn"
            onClick={scrollToTop}
            className="p-3 rounded-2xl bg-slate-900 border border-slate-700 text-slate-300 hover:text-white hover:border-rose-500 hover:bg-rose-950/40 transition-all cursor-pointer flex items-center gap-2 group"
            title="Scroll to Top"
          >
            <span className="text-xs font-semibold group-hover:text-rose-400 transition-colors">Top</span>
            <ArrowUp className="w-4 h-4 group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>
      </div>
    </footer>
  );
};
