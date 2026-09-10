import React from 'react';
import { MessageCircle, Phone } from 'lucide-react';
import { GYM_DETAILS } from '../data/gymData';

export const FloatingQuickActions: React.FC = () => {
  return (
    <div className="fixed bottom-6 right-5 z-40 flex flex-col gap-3 items-end">
      {/* Quick WhatsApp Bubble */}
      <a
        href={`https://wa.me/${GYM_DETAILS.whatsappNumber.replace(/[^0-9]/g, '')}?text=Hello%20Sona%20Aerobics%20Ladies%20Gym%2C%20I%20am%20interested%20in%20joining`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp with Sona Aerobics"
        className="group relative flex items-center justify-center w-13 h-13 rounded-full bg-emerald-500 hover:bg-emerald-400 text-white shadow-[0_8px_25px_rgba(16,185,129,0.5)] hover:scale-110 active:scale-95 transition-all duration-300 cursor-pointer"
      >
        <MessageCircle className="w-6 h-6 fill-current" />
        <span className="absolute right-15 px-3 py-1.5 rounded-xl bg-slate-900/90 text-white text-xs font-bold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-lg border border-slate-700">
          Chat on WhatsApp
        </span>
      </a>

      {/* Quick Phone Call Bubble */}
      <a
        href={`tel:${GYM_DETAILS.phoneRaw}`}
        aria-label="Call Sona Aerobics"
        className="group relative flex items-center justify-center w-12 h-12 rounded-full bg-rose-600 hover:bg-rose-500 text-white shadow-[0_8px_25px_rgba(225,29,72,0.5)] hover:scale-110 active:scale-95 transition-all duration-300 cursor-pointer"
      >
        <Phone className="w-5 h-5 fill-current" />
        <span className="absolute right-14 px-3 py-1.5 rounded-xl bg-slate-900/90 text-white text-xs font-bold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-lg border border-slate-700">
          Call {GYM_DETAILS.phone}
        </span>
      </a>
    </div>
  );
};
