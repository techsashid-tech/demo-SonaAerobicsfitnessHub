import React, { useState } from 'react';
import { 
  Sparkles, 
  ChevronDown, 
  HelpCircle, 
  MessageCircle, 
  Phone 
} from 'lucide-react';
import { FAQ_DATA, GYM_DETAILS } from '../data/gymData';
import { ThemeMode } from '../types';

interface FaqSectionProps {
  theme: ThemeMode;
}

export const FaqSection: React.FC<FaqSectionProps> = ({ theme }) => {
  const isDark = theme === 'dark';
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const toggleAccordion = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section
      id="faq"
      className={`py-24 sm:py-32 relative overflow-hidden transition-colors duration-300 ${
        isDark ? 'bg-[#09090D] text-slate-100' : 'bg-white text-slate-800'
      }`}
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-rose-500/10 border border-rose-500/25 text-rose-400 text-xs font-bold tracking-widest uppercase">
            <HelpCircle className="w-3.5 h-3.5" />
            Frequently Asked Questions
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold font-heading tracking-tight">
            Got Questions?{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 via-pink-400 to-rose-300">
              We Have Answers.
            </span>
          </h2>
          <p className={`text-base ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
            Everything you need to know about our women-only environment, aerobics batches, instructors, and joining process.
          </p>
        </div>

        {/* Accordions List */}
        <div className="space-y-4">
          {FAQ_DATA.map((item, idx) => {
            const isOpen = openIdx === idx;

            return (
              <div
                key={idx}
                className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? isDark
                      ? 'bg-[#121218] border-rose-500/40 shadow-lg shadow-rose-950/20'
                      : 'bg-rose-50/50 border-rose-300 shadow-md shadow-rose-100'
                    : isDark
                    ? 'bg-[#0E0E14] border-slate-800/80 hover:border-slate-700'
                    : 'bg-white border-rose-100 hover:border-rose-200'
                }`}
              >
                <button
                  onClick={() => toggleAccordion(idx)}
                  className="w-full py-5 px-6 text-left flex items-center justify-between gap-4 cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center gap-3">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-rose-400 bg-rose-500/10 px-2.5 py-0.5 rounded-md">
                      {item.category}
                    </span>
                    <span className="font-bold text-base sm:text-lg font-heading tracking-tight">
                      {item.question}
                    </span>
                  </div>

                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-transform duration-300 ${
                      isOpen
                        ? 'bg-rose-500 text-white rotate-180'
                        : isDark
                        ? 'bg-slate-800 text-slate-400'
                        : 'bg-rose-100 text-rose-600'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {/* Animated Body */}
                {isOpen && (
                  <div className="px-6 pb-6 pt-1 border-t border-slate-800/30">
                    <p className={`text-sm leading-relaxed ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
                      {item.answer}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Quick Contact Card */}
        <div className={`mt-14 p-6 sm:p-8 rounded-3xl border text-center flex flex-col sm:flex-row items-center justify-between gap-6 ${
          isDark ? 'bg-slate-900/60 border-slate-800' : 'bg-rose-50/80 border-rose-200'
        }`}>
          <div className="text-center sm:text-left space-y-1">
            <h4 className="font-bold text-base sm:text-lg">Have a specific question not listed here?</h4>
            <p className={`text-xs ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
              Speak directly with our women trainers on WhatsApp or give us a quick call.
            </p>
          </div>

          <div className="flex items-center gap-3 flex-shrink-0">
            <a
              href={`https://wa.me/${GYM_DETAILS.whatsappNumber.replace(/[^0-9]/g, '')}?text=Hello%20Sona%20Aerobics%2C%20I%20have%20a%20question%20about%20your%20ladies%20gym`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs tracking-wider uppercase shadow-md flex items-center gap-2 transition-transform hover:scale-105"
            >
              <MessageCircle className="w-4 h-4" />
              Chat on WhatsApp
            </a>
            <a
              href={`tel:${GYM_DETAILS.phoneRaw}`}
              className={`px-5 py-2.5 rounded-xl border text-xs font-bold tracking-wider uppercase transition-colors ${
                isDark ? 'border-slate-700 hover:bg-slate-800 text-white' : 'border-rose-300 hover:bg-rose-100 text-rose-950'
              }`}
            >
              Call Direct
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
