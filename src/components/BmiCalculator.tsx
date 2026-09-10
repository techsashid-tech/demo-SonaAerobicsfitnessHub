import React, { useState, useId } from 'react';
import { 
  Sparkles, 
  Scale, 
  Activity, 
  Info, 
  Heart, 
  CheckCircle2, 
  ArrowRight 
} from 'lucide-react';
import { ThemeMode } from '../types';

interface BmiCalculatorProps {
  theme: ThemeMode;
  onOpenBookingModal: (reason?: string) => void;
}

export const BmiCalculator: React.FC<BmiCalculatorProps> = ({
  theme,
  onOpenBookingModal,
}) => {
  const isDark = theme === 'dark';
  const heightInputId = useId();
  const weightInputId = useId();
  const ageInputId = useId();
  const activitySelectId = useId();

  const [unit, setUnit] = useState<'metric' | 'imperial'>('metric');
  const [heightCm, setHeightCm] = useState<number>(162);
  const [heightFt, setHeightFt] = useState<number>(5);
  const [heightIn, setHeightIn] = useState<number>(4);
  const [weightKg, setWeightKg] = useState<number>(60);
  const [weightLbs, setWeightLbs] = useState<number>(132);
  const [age, setAge] = useState<number>(26);
  const [activityLevel, setActivityLevel] = useState<'sedentary' | 'moderate' | 'active'>('moderate');

  // Compute BMI dynamically
  const calculateBmi = (): { bmi: number; category: string; color: string; advice: string; idealRange: string } => {
    let heightInMeters = 0;
    let weightInKg = 0;

    if (unit === 'metric') {
      heightInMeters = heightCm / 100;
      weightInKg = weightKg;
    } else {
      const totalInches = heightFt * 12 + heightIn;
      heightInMeters = (totalInches * 2.54) / 100;
      weightInKg = weightLbs * 0.453592;
    }

    if (heightInMeters <= 0 || weightInKg <= 0) {
      return {
        bmi: 0,
        category: 'N/A',
        color: 'text-slate-400',
        advice: 'Please input valid measurements.',
        idealRange: '18.5 - 24.9'
      };
    }

    const calculatedBmi = Number((weightInKg / (heightInMeters * heightInMeters)).toFixed(1));
    const minIdealWeight = (18.5 * heightInMeters * heightInMeters).toFixed(1);
    const maxIdealWeight = (24.9 * heightInMeters * heightInMeters).toFixed(1);
    const idealRange = `${minIdealWeight} kg – ${maxIdealWeight} kg`;

    if (calculatedBmi < 18.5) {
      return {
        bmi: calculatedBmi,
        category: 'Underweight',
        color: 'text-amber-400',
        advice: 'Focus on muscle-building strength training and nutrient-dense healthy fats to build functional vitality.',
        idealRange
      };
    } else if (calculatedBmi >= 18.5 && calculatedBmi < 25) {
      return {
        bmi: calculatedBmi,
        category: 'Healthy Weight',
        color: 'text-emerald-400',
        advice: 'Superb! Maintain your healthy weight with our high-energy Aerobics and Zumba to strengthen bone density and heart health.',
        idealRange
      };
    } else if (calculatedBmi >= 25 && calculatedBmi < 30) {
      return {
        bmi: calculatedBmi,
        category: 'Overweight',
        color: 'text-rose-400',
        advice: 'Our Rhythmic Step Aerobics & Fat Shred programs can help you shed excess visceral fat while toning key muscle groups without crash diets.',
        idealRange
      };
    } else {
      return {
        bmi: calculatedBmi,
        category: 'Obesity Range',
        color: 'text-red-400',
        advice: 'Our certified female trainers specialize in joint-friendly, low-impact aerobics and guided nutrition to safely kickstart your transformation.',
        idealRange
      };
    }
  };

  const { bmi, category, color, advice, idealRange } = calculateBmi();

  // Gauge angle calculation (BMI scale from 15 to 35 -> 0 to 180 degrees)
  const normalizedBmi = Math.min(Math.max(bmi, 15), 35);
  const gaugePercent = ((normalizedBmi - 15) / (35 - 15)) * 100;
  const strokeDashoffset = 283 - (283 * gaugePercent) / 100;

  return (
    <section
      id="bmi"
      className={`py-24 sm:py-32 relative overflow-hidden transition-colors duration-300 ${
        isDark ? 'bg-[#0B0B0F] text-slate-100' : 'bg-rose-50/40 text-slate-800'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-rose-500/10 border border-rose-500/25 text-rose-400 text-xs font-bold tracking-widest uppercase">
            <Scale className="w-3.5 h-3.5" />
            Interactive Health & Fitness Metric
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold font-heading tracking-tight">
            Calculate Your Body Mass Index{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-pink-400">
              (BMI)
            </span>
          </h2>
          <p className={`text-base sm:text-lg ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
            Enter your measurements to calculate your BMI, understand your healthy weight range, and receive tailored women-focused fitness guidance.
          </p>
        </div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center max-w-5xl mx-auto">
          {/* Left Column: Form Inputs */}
          <div
            className={`lg:col-span-7 rounded-3xl p-6 sm:p-8 border shadow-xl ${
              isDark ? 'bg-[#121218] border-rose-500/15' : 'bg-white border-rose-100 shadow-rose-950/5'
            }`}
          >
            {/* Unit Switch */}
            <div className="flex justify-between items-center mb-6">
              <span className="text-xs font-bold uppercase tracking-wider text-rose-400">
                Measurement System
              </span>
              <div className="flex rounded-xl p-1 bg-slate-900 border border-slate-800">
                <button
                  onClick={() => setUnit('metric')}
                  className={`px-3 py-1 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                    unit === 'metric' ? 'bg-rose-600 text-white' : 'text-slate-400 hover:text-white'
                  }`}
                >
                  Metric (cm / kg)
                </button>
                <button
                  onClick={() => setUnit('imperial')}
                  className={`px-3 py-1 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                    unit === 'imperial' ? 'bg-rose-600 text-white' : 'text-slate-400 hover:text-white'
                  }`}
                >
                  Imperial (ft / lbs)
                </button>
              </div>
            </div>

            <div className="space-y-5">
              {/* Height Input */}
              {unit === 'metric' ? (
                <div>
                  <div className="flex justify-between text-xs font-bold mb-1.5">
                    <label htmlFor={heightInputId} className="text-slate-300">Height (cm)</label>
                    <span className="text-rose-400">{heightCm} cm</span>
                  </div>
                  <input
                    id={heightInputId}
                    type="range"
                    min={130}
                    max={210}
                    value={heightCm}
                    onChange={(e) => setHeightCm(Number(e.target.value))}
                    className="w-full accent-rose-500 cursor-pointer"
                  />
                  <div className="flex justify-between text-[10px] text-slate-500 mt-1">
                    <span>130 cm</span>
                    <span>170 cm</span>
                    <span>210 cm</span>
                  </div>
                </div>
              ) : (
                <div>
                  <label className="text-xs font-bold text-slate-300 block mb-1.5">Height (Feet & Inches)</label>
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <input
                        type="number"
                        min={4}
                        max={7}
                        value={heightFt}
                        onChange={(e) => setHeightFt(Number(e.target.value))}
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white text-sm"
                        placeholder="Feet"
                      />
                      <span className="text-[10px] text-slate-400">Feet (ft)</span>
                    </div>
                    <div>
                      <input
                        type="number"
                        min={0}
                        max={11}
                        value={heightIn}
                        onChange={(e) => setHeightIn(Number(e.target.value))}
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white text-sm"
                        placeholder="Inches"
                      />
                      <span className="text-[10px] text-slate-400">Inches (in)</span>
                    </div>
                  </div>
                </div>
              )}

              {/* Weight Input */}
              <div>
                <div className="flex justify-between text-xs font-bold mb-1.5">
                  <label htmlFor={weightInputId} className="text-slate-300">
                    Weight ({unit === 'metric' ? 'kg' : 'lbs'})
                  </label>
                  <span className="text-rose-400">
                    {unit === 'metric' ? `${weightKg} kg` : `${weightLbs} lbs`}
                  </span>
                </div>
                {unit === 'metric' ? (
                  <input
                    id={weightInputId}
                    type="range"
                    min={35}
                    max={150}
                    value={weightKg}
                    onChange={(e) => setWeightKg(Number(e.target.value))}
                    className="w-full accent-rose-500 cursor-pointer"
                  />
                ) : (
                  <input
                    id={weightInputId}
                    type="range"
                    min={80}
                    max={330}
                    value={weightLbs}
                    onChange={(e) => setWeightLbs(Number(e.target.value))}
                    className="w-full accent-rose-500 cursor-pointer"
                  />
                )}
                <div className="flex justify-between text-[10px] text-slate-500 mt-1">
                  <span>{unit === 'metric' ? '35 kg' : '80 lbs'}</span>
                  <span>{unit === 'metric' ? '90 kg' : '200 lbs'}</span>
                  <span>{unit === 'metric' ? '150 kg' : '330 lbs'}</span>
                </div>
              </div>

              {/* Age and Activity */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor={ageInputId} className="text-xs font-bold text-slate-300 block mb-1.5">Age</label>
                  <input
                    id={ageInputId}
                    type="number"
                    min={14}
                    max={80}
                    value={age}
                    onChange={(e) => setAge(Number(e.target.value))}
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white text-sm"
                  />
                </div>
                <div>
                  <label htmlFor={activitySelectId} className="text-xs font-bold text-slate-300 block mb-1.5">Current Activity</label>
                  <select
                    id={activitySelectId}
                    value={activityLevel}
                    onChange={(e) => setActivityLevel(e.target.value as any)}
                    className="w-full px-3 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white text-sm"
                  >
                    <option value="sedentary">Sedentary (Desk Job)</option>
                    <option value="moderate">Moderate (Some walks)</option>
                    <option value="active">Active (Regular workouts)</option>
                  </select>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Animated Result Display & Gauge */}
          <div
            className={`lg:col-span-5 rounded-3xl p-6 sm:p-8 border flex flex-col items-center text-center justify-between shadow-2xl relative overflow-hidden ${
              isDark
                ? 'bg-gradient-to-b from-[#191219] to-[#101015] border-rose-500/30 shadow-rose-950/30'
                : 'bg-white border-rose-200 shadow-rose-200'
            }`}
          >
            {/* Animated Gauge Display */}
            <div className="relative w-48 h-48 flex items-center justify-center my-2">
              <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                <circle
                  cx="50"
                  cy="50"
                  r="45"
                  className="stroke-slate-800"
                  strokeWidth="8"
                  fill="transparent"
                />
                <circle
                  cx="50"
                  cy="50"
                  r="45"
                  className="stroke-rose-500 transition-all duration-500 ease-out"
                  strokeWidth="8"
                  strokeDasharray="283"
                  strokeDashoffset={strokeDashoffset}
                  strokeLinecap="round"
                  fill="transparent"
                />
              </svg>

              <div className="absolute flex flex-col items-center">
                <span className="text-[10px] uppercase font-bold tracking-widest text-slate-400">
                  Your BMI
                </span>
                <span className="text-4xl font-extrabold font-heading text-white tracking-tight my-0.5">
                  {bmi}
                </span>
                <span className={`text-xs font-bold px-2 py-0.5 rounded-full bg-black/40 ${color}`}>
                  {category}
                </span>
              </div>
            </div>

            {/* Ideal Range & Advice */}
            <div className="space-y-3 w-full">
              <div className="p-3 rounded-2xl bg-black/30 border border-white/10 text-left">
                <span className="text-[10px] text-slate-400 uppercase font-bold block">
                  Recommended Ideal Weight Range:
                </span>
                <span className="text-sm font-bold text-white">{idealRange}</span>
              </div>

              <div className="p-3 rounded-2xl bg-rose-500/10 border border-rose-500/20 text-left">
                <span className="text-[10px] text-rose-300 uppercase font-bold flex items-center gap-1">
                  <Activity className="w-3.5 h-3.5" />
                  Fitness Roadmap:
                </span>
                <p className="text-xs text-slate-200 mt-1 leading-relaxed">
                  {advice}
                </p>
              </div>

              <button
                onClick={() => onOpenBookingModal(`Personalized BMI Consultation (BMI ${bmi})`)}
                className="w-full py-3 rounded-xl bg-gradient-to-r from-rose-600 to-pink-600 text-white font-bold text-xs uppercase tracking-wider shadow-lg shadow-rose-600/30 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-1.5 cursor-pointer"
              >
                <span>Get Customized Women's Plan</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>

        {/* Medical Disclaimer Note as required */}
        <div className="mt-8 max-w-3xl mx-auto text-center">
          <p className="text-[11px] text-slate-500 flex items-center justify-center gap-1.5">
            <Info className="w-3.5 h-3.5 text-slate-400 flex-shrink-0" />
            "This BMI calculator is for general informational purposes and is not a medical diagnosis. At Sona Hub, we also track body-fat percentage, muscle density, and inch loss."
          </p>
        </div>
      </div>
    </section>
  );
};
