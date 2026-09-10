import React, { useState } from 'react';
import { 
  Sparkles, 
  Check, 
  Flame, 
  ArrowRight, 
  Gift, 
  ShieldCheck, 
  HelpCircle 
} from 'lucide-react';
import { MEMBERSHIP_PLANS } from '../data/gymData';
import { ThemeMode, MembershipPlan } from '../types';

interface MembershipSectionProps {
  theme: ThemeMode;
  onSelectPlan: (planName: string) => void;
}

export const MembershipSection: React.FC<MembershipSectionProps> = ({
  theme,
  onSelectPlan,
}) => {
  const isDark = theme === 'dark';
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'quarterly' | 'annual'>('quarterly');

  const getPrice = (plan: MembershipPlan) => {
    switch (billingCycle) {
      case 'monthly':
        return { amount: plan.monthlyPrice, period: '/ month', billedText: 'Billed monthly' };
      case 'quarterly':
        return { 
          amount: Math.round(plan.quarterlyPrice / 3), 
          period: '/ month', 
          billedText: `₹${plan.quarterlyPrice.toLocaleString('en-IN')} billed quarterly (Save 15%)` 
        };
      case 'annual':
        return { 
          amount: Math.round(plan.annualPrice / 12), 
          period: '/ month', 
          billedText: `₹${plan.annualPrice.toLocaleString('en-IN')} billed annually (Save 35%)` 
        };
    }
  };

  return (
    <section
      id="membership"
      className={`py-24 sm:py-32 relative overflow-hidden transition-colors duration-300 ${
        isDark ? 'bg-[#09090D] text-slate-100' : 'bg-white text-slate-800'
      }`}
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-rose-600/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-rose-500/10 border border-rose-500/25 text-rose-400 text-xs font-bold tracking-widest uppercase">
            <Sparkles className="w-3.5 h-3.5" />
            Transparent & Honest Pricing
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold font-heading tracking-tight">
            Invest in Your Strength, Health &{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 via-pink-400 to-rose-300">
              Confidence
            </span>
          </h2>
          <p className={`text-base sm:text-lg ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
            Zero hidden admission charges. Pick the plan that fits your schedule, from standard daily workouts to full all-access aerobics & personal transformation.
          </p>

          {/* Billing Toggle Switch */}
          <div className="pt-6 flex justify-center">
            <div className={`inline-flex p-1.5 rounded-2xl border ${
              isDark ? 'bg-slate-900/90 border-slate-800' : 'bg-rose-50/70 border-rose-200'
            }`}>
              <button
                onClick={() => setBillingCycle('monthly')}
                className={`px-4 sm:px-6 py-2 rounded-xl text-xs sm:text-sm font-bold tracking-wide transition-all cursor-pointer ${
                  billingCycle === 'monthly'
                    ? 'bg-gradient-to-r from-rose-600 to-pink-600 text-white shadow-md'
                    : isDark ? 'text-slate-400 hover:text-white' : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Monthly
              </button>

              <button
                onClick={() => setBillingCycle('quarterly')}
                className={`relative px-4 sm:px-6 py-2 rounded-xl text-xs sm:text-sm font-bold tracking-wide transition-all cursor-pointer ${
                  billingCycle === 'quarterly'
                    ? 'bg-gradient-to-r from-rose-600 to-pink-600 text-white shadow-md'
                    : isDark ? 'text-slate-400 hover:text-white' : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Quarterly
                <span className="ml-1.5 text-[9px] uppercase px-1.5 py-0.5 rounded bg-amber-400 text-slate-950 font-black">
                  -15%
                </span>
              </button>

              <button
                onClick={() => setBillingCycle('annual')}
                className={`relative px-4 sm:px-6 py-2 rounded-xl text-xs sm:text-sm font-bold tracking-wide transition-all cursor-pointer ${
                  billingCycle === 'annual'
                    ? 'bg-gradient-to-r from-rose-600 to-pink-600 text-white shadow-md'
                    : isDark ? 'text-slate-400 hover:text-white' : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Annual
                <span className="ml-1.5 text-[9px] uppercase px-1.5 py-0.5 rounded bg-emerald-400 text-slate-950 font-black">
                  -35%
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {MEMBERSHIP_PLANS.map((plan) => {
            const priceInfo = getPrice(plan);
            const isPopular = plan.isPopular;

            return (
              <div
                key={plan.id}
                className={`relative rounded-3xl p-8 transition-all duration-500 flex flex-col justify-between group ${
                  isPopular
                    ? isDark
                      ? 'bg-gradient-to-b from-[#1E1218] to-[#121218] border-2 border-rose-500 shadow-[0_0_50px_rgba(244,63,94,0.25)] lg:-translate-y-4'
                      : 'bg-white border-2 border-rose-500 shadow-2xl shadow-rose-200 lg:-translate-y-4'
                    : isDark
                    ? 'bg-[#13131A] border border-slate-800 hover:border-rose-500/40'
                    : 'bg-white border border-rose-100 shadow-lg hover:border-rose-300'
                }`}
              >
                {/* Popular Ribbon */}
                {isPopular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-rose-600 to-pink-500 text-white text-[11px] font-black tracking-widest uppercase shadow-lg shadow-rose-600/40 flex items-center gap-1.5">
                    <Flame className="w-3.5 h-3.5 fill-current text-amber-200" />
                    {plan.badge}
                  </div>
                )}

                {/* Plan Header */}
                <div>
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-extrabold font-heading tracking-tight text-white dark:text-white">
                      {plan.name}
                    </h3>
                  </div>

                  <p className={`text-xs min-h-[32px] ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                    {plan.tagline}
                  </p>

                  {/* Price Tag */}
                  <div className="my-6 pt-4 border-t border-slate-800/60">
                    <div className="flex items-baseline gap-1">
                      <span className="text-base font-semibold text-rose-400">₹</span>
                      <span className="text-4xl sm:text-5xl font-extrabold font-heading text-white tracking-tight">
                        {priceInfo.amount.toLocaleString('en-IN')}
                      </span>
                      <span className={`text-xs font-medium ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                        {priceInfo.period}
                      </span>
                    </div>
                    <p className="text-[11px] font-semibold text-rose-400 mt-1">
                      {priceInfo.billedText}
                    </p>
                  </div>

                  {/* Features List */}
                  <div className="space-y-3 mb-6">
                    <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                      Included Privileges:
                    </p>
                    {plan.features.map((feature, i) => (
                      <div key={i} className="flex items-start gap-2.5 text-xs">
                        <div className="w-4 h-4 rounded-full bg-rose-500/20 text-rose-400 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Check className="w-3 h-3" />
                        </div>
                        <span className={isDark ? 'text-slate-300' : 'text-slate-700'}>
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Bonuses */}
                  {plan.bonuses.length > 0 && (
                    <div className="pt-3 border-t border-slate-800/60 space-y-2">
                      <p className="text-[11px] font-bold uppercase tracking-wider text-amber-400 flex items-center gap-1">
                        <Gift className="w-3.5 h-3.5" />
                        Exclusive Perks:
                      </p>
                      {plan.bonuses.map((bonus, i) => (
                        <div key={i} className="flex items-start gap-2 text-xs text-rose-300 font-medium">
                          <Sparkles className="w-3.5 h-3.5 text-amber-400 flex-shrink-0 mt-0.5" />
                          <span>{bonus}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Plan Action CTA */}
                <div className="pt-8">
                  <button
                    onClick={() => onSelectPlan(`${plan.name} (${billingCycle.toUpperCase()})`)}
                    className={`w-full py-3.5 rounded-2xl font-bold text-xs sm:text-sm tracking-wide uppercase transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer shadow-lg ${
                      isPopular
                        ? 'bg-gradient-to-r from-rose-600 via-pink-600 to-rose-500 text-white shadow-rose-600/40 hover:shadow-rose-600/60 hover:scale-[1.02]'
                        : isDark
                        ? 'bg-slate-800/90 hover:bg-slate-700 text-white border border-slate-700'
                        : 'bg-rose-50 hover:bg-rose-100 text-rose-900 border border-rose-200'
                    }`}
                  >
                    <span>Choose Plan</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                  <p className="text-[10px] text-center text-slate-400 mt-2">
                    Instant onboarding • Free consultation included
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Free trial assurance */}
        <div className="mt-14 text-center">
          <p className="text-xs text-slate-400 flex items-center justify-center gap-2">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            Not sure which plan is right for you? Start with our 100% Free 1-Day Trial Session without commitment.
          </p>
        </div>
      </div>
    </section>
  );
};
