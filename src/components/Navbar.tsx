import React, { useState, useEffect } from 'react';
import { 
  Dumbbell, 
  Menu, 
  X, 
  Sun, 
  Moon, 
  Phone, 
  Sparkles, 
  ArrowUpRight 
} from 'lucide-react';
import { GYM_DETAILS } from '../data/gymData';
import { ThemeMode } from '../types';

interface NavbarProps {
  theme: ThemeMode;
  onToggleTheme: () => void;
  onOpenBookingModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  theme,
  onToggleTheme,
  onOpenBookingModal,
}) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  const navLinks = [
    { label: 'Home', href: '#hero' },
    { label: 'About', href: '#about' },
    { label: 'Facilities', href: '#facilities' },
    { label: 'Programs', href: '#programs' },
    { label: 'Membership', href: '#membership' },
    { label: 'BMI Tool', href: '#bmi' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Reviews', href: '#reviews' },
    { label: 'FAQ', href: '#faq' },
    { label: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Check active section
      const sections = ['hero', 'about', 'facilities', 'programs', 'membership', 'bmi', 'gallery', 'reviews', 'faq', 'contact'];
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 140 && rect.bottom >= 140) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (href: string) => {
    setMobileMenuOpen(false);
    const id = href.replace('#', '');
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? theme === 'dark'
            ? 'bg-[#0B0B0F]/90 backdrop-blur-xl border-b border-rose-500/15 py-3 shadow-xl shadow-black/40'
            : 'bg-white/90 backdrop-blur-xl border-b border-rose-200/50 py-3 shadow-lg shadow-rose-950/5'
          : 'bg-transparent py-4 sm:py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#hero"
          onClick={(e) => {
            e.preventDefault();
            handleLinkClick('#hero');
          }}
          className="flex items-center gap-3 group"
          id="nav-logo"
        >
          <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-gradient-to-tr from-rose-600 via-pink-600 to-rose-400 flex items-center justify-center shadow-md shadow-rose-500/30 group-hover:scale-105 transition-transform duration-300">
            <Dumbbell className="w-5 h-5 sm:w-6 sm:h-6 text-white transform -rotate-45" />
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <span className="font-extrabold text-base sm:text-lg tracking-tight font-heading text-white drop-shadow-sm transition-colors group-hover:text-rose-400">
                SONA AEROBICS
              </span>
              <span className="px-1.5 py-0.5 text-[9px] font-bold tracking-wider uppercase rounded bg-rose-500/20 text-rose-300 border border-rose-500/30">
                Ladies Gym
              </span>
            </div>
            <p className="text-[10px] tracking-widest uppercase font-semibold text-slate-400">
              & Fitness Hub • Mahanadi Vihar
            </p>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden lg:flex items-center gap-1 bg-black/20 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.replace('#', '');
            return (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick(link.href);
                }}
                className={`px-3 py-1 text-xs font-semibold tracking-wide transition-all rounded-full ${
                  isActive
                    ? 'text-white bg-gradient-to-r from-rose-600 to-pink-600 shadow-sm shadow-rose-500/50'
                    : 'text-slate-300 hover:text-white hover:bg-white/5'
                }`}
              >
                {link.label}
              </a>
            );
          })}
        </nav>

        {/* Right CTA & Controls */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Theme Toggle Button */}
          <button
            id="theme-toggle-btn"
            onClick={onToggleTheme}
            aria-label="Toggle dark/light theme"
            className={`p-2 rounded-xl border transition-all duration-200 cursor-pointer ${
              theme === 'dark'
                ? 'bg-slate-900/80 border-slate-800 text-amber-300 hover:bg-slate-800'
                : 'bg-white border-rose-200 text-slate-800 hover:bg-rose-50'
            }`}
            title={`Switch to ${theme === 'dark' ? 'Light' : 'Dark'} Mode`}
          >
            {theme === 'dark' ? (
              <Sun className="w-4 h-4" />
            ) : (
              <Moon className="w-4 h-4 text-slate-700" />
            )}
          </button>

          {/* Quick Call Button (Desktop) */}
          <a
            href={`tel:${GYM_DETAILS.phoneRaw}`}
            className="hidden sm:inline-flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold border border-white/15 text-slate-200 hover:border-rose-400 hover:text-rose-300 transition-colors"
            title="Call Sona Aerobics"
          >
            <Phone className="w-3.5 h-3.5 text-rose-400" />
            <span>Call Us</span>
          </a>

          {/* Book Trial CTA Button */}
          <button
            id="nav-book-trial-btn"
            onClick={onOpenBookingModal}
            className="hidden md:inline-flex items-center gap-2 px-4 py-2 text-xs sm:text-sm font-bold tracking-wide rounded-xl bg-gradient-to-r from-rose-600 via-pink-600 to-rose-500 text-white shadow-lg shadow-rose-600/30 hover:shadow-rose-600/50 hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer group"
          >
            <Sparkles className="w-3.5 h-3.5 text-rose-200 group-hover:rotate-12 transition-transform" />
            <span>Book Free Trial</span>
            <ArrowUpRight className="w-3.5 h-3.5 opacity-80" />
          </button>

          {/* Mobile Menu Hamburger */}
          <button
            id="mobile-menu-toggle-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
            className="lg:hidden p-2 rounded-xl bg-slate-900/80 border border-slate-700 text-white hover:bg-slate-800 transition-colors cursor-pointer"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[60px] bg-[#0E0E14]/98 backdrop-blur-2xl border-b border-rose-500/20 px-6 py-6 shadow-2xl transition-all animate-in slide-in-from-top-4 duration-200">
          <div className="flex flex-col gap-2 mb-6">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.replace('#', '');
              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleLinkClick(link.href);
                  }}
                  className={`px-4 py-2.5 rounded-xl text-sm font-semibold tracking-wide flex items-center justify-between transition-colors ${
                    isActive
                      ? 'bg-rose-500/15 text-rose-400 border border-rose-500/30'
                      : 'text-slate-200 hover:bg-white/5'
                  }`}
                >
                  <span>{link.label}</span>
                  {isActive && <span className="w-1.5 h-1.5 rounded-full bg-rose-500" />}
                </a>
              );
            })}
          </div>

          <div className="pt-4 border-t border-slate-800 space-y-3">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBookingModal();
              }}
              className="w-full py-3 rounded-xl bg-gradient-to-r from-rose-600 to-pink-600 text-white font-bold text-sm tracking-wide shadow-lg shadow-rose-600/30 flex items-center justify-center gap-2"
            >
              <Sparkles className="w-4 h-4" />
              Book Free Trial Session
            </button>

            <div className="grid grid-cols-2 gap-2 text-center">
              <a
                href={`tel:${GYM_DETAILS.phoneRaw}`}
                className="py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-xs font-semibold text-slate-200 flex items-center justify-center gap-1.5"
              >
                <Phone className="w-3.5 h-3.5 text-rose-400" />
                Call Direct
              </a>
              <a
                href={`https://wa.me/${GYM_DETAILS.whatsappNumber.replace(/[^0-9]/g, '')}?text=Hello%20Sona%20Aerobics%2C%20I%20am%20interested%20in%20joining`}
                target="_blank"
                rel="noopener noreferrer"
                className="py-2.5 rounded-xl bg-emerald-950/40 border border-emerald-500/30 text-xs font-semibold text-emerald-300 flex items-center justify-center gap-1.5"
              >
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
