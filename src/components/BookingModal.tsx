import React, { useState } from 'react';
import { 
  X, 
  Sparkles, 
  Calendar, 
  Clock, 
  ShieldCheck, 
  CheckCircle2, 
  Send, 
  MessageCircle, 
  Phone 
} from 'lucide-react';
import { GYM_DETAILS } from '../data/gymData';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedProgram?: string;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  preselectedProgram = 'Step Aerobics',
}) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    program: preselectedProgram || 'Step Aerobics',
    preferredDate: '',
    batchTime: '07:00 AM (Morning Aerobics)',
    experience: 'Complete Beginner',
    notes: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setIsSubmitted(true);
    }, 600);
  };

  const handleWhatsAppSend = () => {
    const text = `*Free Trial Booking - Sona Aerobics & Fitness Hub*%0A` +
      `*Name:* ${encodeURIComponent(formData.name)}%0A` +
      `*Phone:* ${encodeURIComponent(formData.phone)}%0A` +
      `*Program:* ${encodeURIComponent(formData.program)}%0A` +
      `*Batch:* ${encodeURIComponent(formData.batchTime)}%0A` +
      `*Date:* ${encodeURIComponent(formData.preferredDate || 'Earliest available slot')}%0A` +
      `*Experience:* ${encodeURIComponent(formData.experience)}`;

    window.open(`https://wa.me/${GYM_DETAILS.whatsappNumber.replace(/[^0-9]/g, '')}?text=${text}`, '_blank');
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in"
      onClick={onClose}
    >
      <div
        className="relative max-w-lg w-full rounded-3xl bg-[#121218] border border-rose-500/30 p-6 sm:p-8 text-white shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Ambient top glow */}
        <div className="absolute top-0 right-0 w-48 h-48 bg-rose-600/20 rounded-full blur-[80px] pointer-events-none" />

        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-slate-800 text-slate-300 hover:text-white hover:bg-slate-700 transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {isSubmitted ? (
          <div className="text-center py-6 space-y-4 animate-in zoom-in-95">
            <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <h3 className="text-2xl font-bold font-heading text-white">
              Trial Session Booked!
            </h3>
            <p className="text-xs text-slate-300 max-w-sm mx-auto leading-relaxed">
              Welcome, <strong>{formData.name}</strong>! Your 1-Day Complimentary pass for <strong>{formData.program}</strong> has been reserved. Our female coordinator will call you to confirm your timing slot.
            </p>

            <div className="p-4 rounded-2xl bg-black/40 border border-white/10 text-xs text-left space-y-1.5 text-slate-300">
              <p>📍 <strong>Location:</strong> Plot 32, Mahanadi Vihar, Cuttack</p>
              <p>⏰ <strong>Slot:</strong> {formData.batchTime}</p>
              <p>✨ <strong>What to bring:</strong> Comfortable workout wear, water bottle, and your energy!</p>
            </div>

            <div className="pt-3 flex flex-col sm:flex-row gap-3">
              <button
                onClick={handleWhatsAppSend}
                className="flex-1 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer shadow-lg"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Confirm on WhatsApp</span>
              </button>
              <button
                onClick={onClose}
                className="px-5 py-3 rounded-xl bg-slate-800 text-xs font-semibold text-slate-300 hover:text-white"
              >
                Done
              </button>
            </div>
          </div>
        ) : (
          <div>
            <div className="mb-6 space-y-1">
              <span className="text-[11px] font-bold uppercase tracking-wider text-rose-400 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" />
                100% Free Complimentary Pass
              </span>
              <h3 className="text-2xl font-bold font-heading text-white">
                Book a Free Session
              </h3>
              <p className="text-xs text-slate-400">
                Experience Sona Aerobics & Fitness Hub with zero payment or obligations.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-300 mb-1">
                  Your Full Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Meenakshi Sahu"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white text-xs focus:outline-none focus:border-rose-500"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-300 mb-1">
                  WhatsApp / Contact Phone *
                </label>
                <input
                  type="tel"
                  required
                  placeholder="+91 98XXX XXXXX"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white text-xs focus:outline-none focus:border-rose-500"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-300 mb-1">
                    Select Program
                  </label>
                  <select
                    value={formData.program}
                    onChange={(e) => setFormData({ ...formData, program: e.target.value })}
                    className="w-full px-3 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white text-xs focus:outline-none focus:border-rose-500"
                  >
                    <option value="Step Aerobics">Rhythmic Step Aerobics</option>
                    <option value="Zumba Dance">Zumba & Dance Fitness</option>
                    <option value="Weight Loss Sculpt">Weight Loss & Fat Shred</option>
                    <option value="Women Strength">Women's Strength & Toning</option>
                    <option value="Flexibility & Spine">Flexibility & Spine Care</option>
                    <option value="General Studio Tour">General Studio Tour</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-300 mb-1">
                    Preferred Batch Time
                  </label>
                  <select
                    value={formData.batchTime}
                    onChange={(e) => setFormData({ ...formData, batchTime: e.target.value })}
                    className="w-full px-3 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white text-xs focus:outline-none focus:border-rose-500"
                  >
                    <option value="06:30 AM (Early Morning)">06:30 AM (Early Morning)</option>
                    <option value="07:30 AM (Morning Aerobics)">07:30 AM (Morning Aerobics)</option>
                    <option value="09:00 AM (Late Morning)">09:00 AM (Late Morning)</option>
                    <option value="05:00 PM (Evening Batch)">05:00 PM (Evening Batch)</option>
                    <option value="06:30 PM (Zumba Rush)">06:30 PM (Zumba Rush)</option>
                    <option value="07:30 PM (Night Fitness)">07:30 PM (Night Fitness)</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-300 mb-1">
                    Preferred Date
                  </label>
                  <input
                    type="date"
                    value={formData.preferredDate}
                    onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                    className="w-full px-3 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white text-xs focus:outline-none focus:border-rose-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-300 mb-1">
                    Gym Experience
                  </label>
                  <select
                    value={formData.experience}
                    onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
                    className="w-full px-3 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white text-xs focus:outline-none focus:border-rose-500"
                  >
                    <option value="Complete Beginner">Complete Beginner</option>
                    <option value="Intermediate">Worked out before</option>
                    <option value="Advanced / Regular">Active fitness enthusiast</option>
                  </select>
                </div>
              </div>

              <div className="pt-3">
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-3.5 rounded-xl bg-gradient-to-r from-rose-600 via-pink-600 to-rose-500 text-white font-bold text-xs uppercase tracking-wider shadow-lg shadow-rose-600/30 hover:scale-[1.01] active:scale-[0.99] transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-60"
                >
                  {loading ? (
                    <span>Confirming Pass...</span>
                  ) : (
                    <>
                      <Sparkles className="w-4 h-4" />
                      <span>Confirm Free Trial Pass</span>
                    </>
                  )}
                </button>
              </div>

              <div className="flex items-center justify-center gap-2 text-[10px] text-slate-400 pt-1">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                <span>100% Women-Only Space • No Credit Card Required</span>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
