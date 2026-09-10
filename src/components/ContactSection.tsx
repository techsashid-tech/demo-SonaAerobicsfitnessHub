import React, { useState } from 'react';
import { 
  Sparkles, 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  MessageCircle, 
  Navigation, 
  CheckCircle2, 
  Send, 
  ExternalLink 
} from 'lucide-react';
import { GYM_DETAILS } from '../data/gymData';
import { ThemeMode } from '../types';

interface ContactSectionProps {
  theme: ThemeMode;
  onOpenBookingModal: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  theme,
  onOpenBookingModal,
}) => {
  const isDark = theme === 'dark';

  // Contact form state
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    programInterest: 'Step Aerobics',
    preferredBatch: 'Morning (06:00 - 11:30 AM)',
    message: '',
  });

  const [formSubmitted, setFormSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);

    setTimeout(() => {
      setSubmitting(false);
      setFormSubmitted(true);
    }, 800);
  };

  const handleSendViaWhatsApp = () => {
    const text = `*New Inquiry - Sona Aerobics & Fitness Hub*%0A` +
      `*Name:* ${encodeURIComponent(formData.name || 'Prospective Member')}%0A` +
      `*Phone:* ${encodeURIComponent(formData.phone || 'N/A')}%0A` +
      `*Program:* ${encodeURIComponent(formData.programInterest)}%0A` +
      `*Batch:* ${encodeURIComponent(formData.preferredBatch)}%0A` +
      `*Message:* ${encodeURIComponent(formData.message || 'I would like to join Sona Aerobics.')}`;

    window.open(`https://wa.me/${GYM_DETAILS.whatsappNumber.replace(/[^0-9]/g, '')}?text=${text}`, '_blank');
  };

  return (
    <section
      id="contact"
      className={`py-24 sm:py-32 relative overflow-hidden transition-colors duration-300 ${
        isDark ? 'bg-[#07070A] text-slate-100' : 'bg-rose-50/50 text-slate-800'
      }`}
    >
      {/* Ambient background glows */}
      <div className="absolute top-10 left-10 w-96 h-96 bg-rose-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-pink-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-rose-500/10 border border-rose-500/25 text-rose-400 text-xs font-bold tracking-widest uppercase">
            <MapPin className="w-3.5 h-3.5" />
            Connect With Sona Hub
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold font-heading tracking-tight">
            Visit Us in Mahanadi Vihar or{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 via-pink-400 to-rose-300">
              Reach Out Directly
            </span>
          </h2>
          <p className={`text-base sm:text-lg ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
            Conveniently accessible, secure ladies fitness sanctuary. Reach us instantly by phone, WhatsApp, or drop a direct inquiry below.
          </p>
        </div>

        {/* 4 Primary Action CTAs Requested */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-14">
          {/* CALL NOW */}
          <a
            id="cta-call-now"
            href={`tel:${GYM_DETAILS.phoneRaw}`}
            className="p-5 rounded-2xl bg-gradient-to-br from-rose-600 to-pink-600 text-white shadow-xl shadow-rose-600/30 hover:scale-[1.03] active:scale-[0.98] transition-all flex flex-col items-center justify-center text-center group cursor-pointer"
          >
            <div className="w-11 h-11 rounded-xl bg-white/20 flex items-center justify-center mb-2 group-hover:rotate-12 transition-transform">
              <Phone className="w-5 h-5 text-white" />
            </div>
            <span className="font-extrabold text-sm tracking-wider uppercase">CALL NOW</span>
            <span className="text-[11px] text-rose-100 mt-0.5">{GYM_DETAILS.phone}</span>
          </a>

          {/* WHATSAPP US */}
          <a
            id="cta-whatsapp-us"
            href={`https://wa.me/${GYM_DETAILS.whatsappNumber.replace(/[^0-9]/g, '')}?text=Hello%20Sona%20Aerobics%20Ladies%20Gym%2C%20I%20want%20to%20know%20more%20about%20membership%20and%20aerobics%20classes`}
            target="_blank"
            rel="noopener noreferrer"
            className="p-5 rounded-2xl bg-gradient-to-br from-emerald-600 to-teal-600 text-white shadow-xl shadow-emerald-600/30 hover:scale-[1.03] active:scale-[0.98] transition-all flex flex-col items-center justify-center text-center group cursor-pointer"
          >
            <div className="w-11 h-11 rounded-xl bg-white/20 flex items-center justify-center mb-2 group-hover:scale-110 transition-transform">
              <MessageCircle className="w-5 h-5 text-white" />
            </div>
            <span className="font-extrabold text-sm tracking-wider uppercase">WHATSAPP US</span>
            <span className="text-[11px] text-emerald-100 mt-0.5">Instant Reply</span>
          </a>

          {/* GET DIRECTIONS */}
          <a
            id="cta-get-directions"
            href={GYM_DETAILS.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-5 rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-600 text-white shadow-xl shadow-blue-600/30 hover:scale-[1.03] active:scale-[0.98] transition-all flex flex-col items-center justify-center text-center group cursor-pointer"
          >
            <div className="w-11 h-11 rounded-xl bg-white/20 flex items-center justify-center mb-2 group-hover:-translate-y-1 transition-transform">
              <Navigation className="w-5 h-5 text-white" />
            </div>
            <span className="font-extrabold text-sm tracking-wider uppercase">GET DIRECTIONS</span>
            <span className="text-[11px] text-blue-100 mt-0.5">Google Maps Pin</span>
          </a>

          {/* JOIN TODAY */}
          <button
            id="cta-join-today"
            onClick={onOpenBookingModal}
            className="p-5 rounded-2xl bg-gradient-to-br from-amber-500 to-rose-500 text-white shadow-xl shadow-amber-500/30 hover:scale-[1.03] active:scale-[0.98] transition-all flex flex-col items-center justify-center text-center group cursor-pointer"
          >
            <div className="w-11 h-11 rounded-xl bg-white/20 flex items-center justify-center mb-2 group-hover:scale-110 transition-transform">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            <span className="font-extrabold text-sm tracking-wider uppercase">JOIN TODAY</span>
            <span className="text-[11px] text-amber-100 mt-0.5">Free Trial Session</span>
          </button>
        </div>

        {/* Contact Grid: Details + Map + Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Gym Address & Google Maps Embed */}
          <div className="lg:col-span-6 space-y-6">
            <div
              className={`p-6 sm:p-8 rounded-3xl border ${
                isDark ? 'bg-[#121218] border-rose-500/15' : 'bg-white border-rose-100 shadow-xl shadow-rose-950/5'
              }`}
            >
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-2xl bg-rose-500/15 text-rose-400 border border-rose-500/30 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-base text-white dark:text-white">Studio Location</h4>
                    <p className={`text-xs sm:text-sm mt-1 leading-relaxed ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
                      {GYM_DETAILS.address}
                    </p>
                    <a
                      href={GYM_DETAILS.googleMapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-rose-400 hover:text-rose-300 mt-2"
                    >
                      <span>Open in Google Maps</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-slate-800/60">
                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-xl bg-pink-500/15 text-pink-400 border border-pink-500/30 flex items-center justify-center flex-shrink-0">
                      <Clock className="w-4 h-4" />
                    </div>
                    <div>
                      <h5 className="font-bold text-xs text-white">Opening Timings</h5>
                      <p className="text-[11px] text-slate-400 mt-0.5">Mon - Sat: 06:00 AM - 08:30 PM</p>
                      <p className="text-[11px] text-rose-400">Sunday: Special Aerobics Session</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-xl bg-cyan-500/15 text-cyan-400 border border-cyan-500/30 flex items-center justify-center flex-shrink-0">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div>
                      <h5 className="font-bold text-xs text-white">Direct Email</h5>
                      <a
                        href={`mailto:${GYM_DETAILS.email}`}
                        className="text-[11px] text-slate-400 hover:text-rose-400 break-all transition-colors"
                      >
                        {GYM_DETAILS.email}
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Embedded Interactive Google Map */}
              <div className="mt-6 rounded-2xl overflow-hidden border border-slate-700/60 h-64 sm:h-72 relative">
                <iframe
                  title="Sona Aerobics and Fitness Hub Location Map Mahanadi Vihar"
                  src={`https://maps.google.com/maps?q=${GYM_DETAILS.mapCoordinates.lat},${GYM_DETAILS.mapCoordinates.lng}&z=15&output=embed`}
                  width="100%"
                  height="100%"
                  style={{ border: 0, filter: isDark ? 'contrast(1.05) brightness(0.9)' : 'none' }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
                <div className="absolute bottom-3 left-3 bg-black/80 backdrop-blur-md px-3 py-1.5 rounded-xl border border-white/20 text-[11px] text-white flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-rose-400" />
                  <span>Mahanadi Vihar, Cuttack, Odisha</span>
                </div>
              </div>
            </div>

            {/* Stylish 3D Social Media Section as explicitly required */}
            <div
              className={`p-6 sm:p-7 rounded-3xl border ${
                isDark ? 'bg-[#121218] border-rose-500/20' : 'bg-white border-rose-100 shadow-lg'
              }`}
            >
              <div className="text-center sm:text-left mb-4">
                <h4 className="font-bold text-base font-heading text-white flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-rose-400" />
                  Follow Sona Hub Community
                </h4>
                <p className="text-xs text-slate-400">
                  Stay updated with daily workout reels, nutrition tips, and member transformations.
                </p>
              </div>

              {/* 3D Social Media Buttons Grid with depth, shadow & hover transforms */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {/* Instagram 3D button */}
                <a
                  href={GYM_DETAILS.socials.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative p-3.5 rounded-2xl bg-gradient-to-tr from-[#833AB4] via-[#FD1D1D] to-[#FCB045] text-white flex flex-col items-center justify-center text-center shadow-[0_8px_20px_rgba(253,29,29,0.3)] hover:shadow-[0_14px_30px_rgba(253,29,29,0.5)] hover:-translate-y-1.5 transition-all duration-300 transform-style-3d cursor-pointer"
                >
                  <svg className="w-6 h-6 fill-current mb-1 group-hover:scale-110 transition-transform" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                  <span className="text-[11px] font-black tracking-wider uppercase">Instagram</span>
                </a>

                {/* Facebook 3D button */}
                <a
                  href={GYM_DETAILS.socials.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative p-3.5 rounded-2xl bg-gradient-to-tr from-[#1877F2] to-[#3b5998] text-white flex flex-col items-center justify-center text-center shadow-[0_8px_20px_rgba(24,119,242,0.3)] hover:shadow-[0_14px_30px_rgba(24,119,242,0.5)] hover:-translate-y-1.5 transition-all duration-300 transform-style-3d cursor-pointer"
                >
                  <svg className="w-6 h-6 fill-current mb-1 group-hover:scale-110 transition-transform" viewBox="0 0 24 24">
                    <path d="M9 8H6v4h3v12h5V12h3.642L18 8h-4V6.333C14 5.374 14.5 5 15.667 5H18V0h-3.889C10.5 0 9 1.583 9 4.75V8z"/>
                  </svg>
                  <span className="text-[11px] font-black tracking-wider uppercase">Facebook</span>
                </a>

                {/* Twitter / X 3D button */}
                <a
                  href={GYM_DETAILS.socials.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative p-3.5 rounded-2xl bg-gradient-to-tr from-[#14171A] to-[#657786] text-white flex flex-col items-center justify-center text-center border border-slate-700 shadow-[0_8px_20px_rgba(0,0,0,0.4)] hover:shadow-[0_14px_30px_rgba(255,255,255,0.15)] hover:-translate-y-1.5 transition-all duration-300 transform-style-3d cursor-pointer"
                >
                  <svg className="w-6 h-6 fill-current mb-1 group-hover:scale-110 transition-transform" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                  <span className="text-[11px] font-black tracking-wider uppercase">X (Twitter)</span>
                </a>

                {/* YouTube 3D button */}
                <a
                  href={GYM_DETAILS.socials.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative p-3.5 rounded-2xl bg-gradient-to-tr from-[#FF0000] to-[#CC0000] text-white flex flex-col items-center justify-center text-center shadow-[0_8px_20px_rgba(255,0,0,0.3)] hover:shadow-[0_14px_30px_rgba(255,0,0,0.5)] hover:-translate-y-1.5 transition-all duration-300 transform-style-3d cursor-pointer"
                >
                  <svg className="w-6 h-6 fill-current mb-1 group-hover:scale-110 transition-transform" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                  <span className="text-[11px] font-black tracking-wider uppercase">YouTube</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Inquiry & Booking Form */}
          <div className="lg:col-span-6">
            <div
              className={`p-6 sm:p-8 rounded-3xl border shadow-2xl relative ${
                isDark ? 'bg-[#121218] border-rose-500/25 shadow-black/40' : 'bg-white border-rose-100 shadow-rose-100'
              }`}
            >
              <div className="mb-6 space-y-1">
                <span className="text-xs uppercase font-bold tracking-wider text-rose-400">
                  Quick Inquiry & Free Trial
                </span>
                <h3 className="text-2xl font-bold font-heading text-white dark:text-white">
                  Begin Your Fitness Journey
                </h3>
                <p className={`text-xs ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                  Fill in your details below and our female fitness coordinator will contact you promptly.
                </p>
              </div>

              {formSubmitted ? (
                <div className="p-8 rounded-2xl bg-emerald-950/40 border border-emerald-500/30 text-center space-y-4 animate-in fade-in">
                  <div className="w-14 h-14 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="text-xl font-bold text-white font-heading">
                    Inquiry Received Successfully!
                  </h4>
                  <p className="text-xs text-slate-300 max-w-sm mx-auto">
                    Thank you, <strong>{formData.name}</strong>. Our female coach at Sona Aerobics & Fitness Hub will call or WhatsApp you shortly.
                  </p>
                  <div className="pt-2 flex flex-col sm:flex-row gap-3 justify-center">
                    <button
                      onClick={handleSendViaWhatsApp}
                      className="px-6 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer shadow-lg"
                    >
                      <MessageCircle className="w-4 h-4" />
                      Forward Directly on WhatsApp
                    </button>
                    <button
                      onClick={() => setFormSubmitted(false)}
                      className="px-5 py-2.5 rounded-xl bg-slate-800 text-xs font-semibold text-slate-300 hover:text-white"
                    >
                      Submit Another
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Name */}
                  <div>
                    <label className="block text-xs font-bold text-slate-300 mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Sasmita Mohapatra"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-700 text-white text-sm focus:outline-none focus:border-rose-500"
                    />
                  </div>

                  {/* Phone & Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-300 mb-1">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="+91 98XXX XXXXX"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-700 text-white text-sm focus:outline-none focus:border-rose-500"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-300 mb-1">
                        Email Address (Optional)
                      </label>
                      <input
                        type="email"
                        placeholder="you@gmail.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-700 text-white text-sm focus:outline-none focus:border-rose-500"
                      />
                    </div>
                  </div>

                  {/* Program Interest */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-300 mb-1">
                        Program of Interest
                      </label>
                      <select
                        value={formData.programInterest}
                        onChange={(e) => setFormData({ ...formData, programInterest: e.target.value })}
                        className="w-full px-3 py-3 rounded-xl bg-slate-900 border border-slate-700 text-white text-sm focus:outline-none focus:border-rose-500"
                      >
                        <option value="Step Aerobics">Rhythmic Step Aerobics</option>
                        <option value="Zumba Dance">Zumba & Dance Fitness</option>
                        <option value="Weight Loss">Weight Loss & Fat Shred</option>
                        <option value="Strength Training">Women's Strength & Toning</option>
                        <option value="Personal Coaching">1-on-1 Female Mentorship</option>
                        <option value="General Fitness">General Ladies Fitness</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-300 mb-1">
                        Preferred Batch
                      </label>
                      <select
                        value={formData.preferredBatch}
                        onChange={(e) => setFormData({ ...formData, preferredBatch: e.target.value })}
                        className="w-full px-3 py-3 rounded-xl bg-slate-900 border border-slate-700 text-white text-sm focus:outline-none focus:border-rose-500"
                      >
                        <option value="Morning (06:00 - 11:30 AM)">Morning (06:00 - 11:30 AM)</option>
                        <option value="Evening (04:30 - 08:30 PM)">Evening (04:30 - 08:30 PM)</option>
                        <option value="Weekend Special">Weekend Special Batches</option>
                      </select>
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-xs font-bold text-slate-300 mb-1">
                      Fitness Goals or Queries
                    </label>
                    <textarea
                      rows={3}
                      placeholder="e.g. Interested in weight loss and morning step aerobics..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-700 text-white text-sm focus:outline-none focus:border-rose-500"
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2 flex flex-col sm:flex-row gap-3">
                    <button
                      type="submit"
                      disabled={submitting}
                      className="flex-1 py-3.5 rounded-xl bg-gradient-to-r from-rose-600 via-pink-600 to-rose-500 text-white font-bold text-sm tracking-wide uppercase shadow-lg shadow-rose-600/30 hover:shadow-rose-600/50 hover:scale-[1.01] active:scale-[0.99] transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-60"
                    >
                      {submitting ? (
                        <span>Submitting...</span>
                      ) : (
                        <>
                          <span>Submit Free Trial Request</span>
                          <Send className="w-4 h-4" />
                        </>
                      )}
                    </button>

                    <button
                      type="button"
                      onClick={handleSendViaWhatsApp}
                      className="px-5 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer transition-colors shadow-md"
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span>WhatsApp</span>
                    </button>
                  </div>

                  <p className="text-[10px] text-center text-slate-500 pt-1">
                    🔒 We respect your privacy. All inquiries are handled exclusively by our female management.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
