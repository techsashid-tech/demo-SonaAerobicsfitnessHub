import { Program, Facility, MembershipPlan, Testimonial, GalleryItem, FaqItem } from '../types';

export const GYM_DETAILS = {
  name: "Sona Aerobics & Fitness Hub",
  badge: "Ladies Gym (Women-Exclusive)",
  tagline: "STRONGER EVERY DAY. CONFIDENT EVERYWHERE.",
  address: "Plot 32, Mahanadi Vihar, Near CDA Sector, Cuttack, Odisha 753004",
  mapCoordinates: {
    lat: 20.4636746,
    lng: 85.9106283
  },
  googleMapsUrl: "https://www.google.com/maps/place/SonaAerobics+and+fitness+Hub+(ladies+Gym)/@20.4636746,85.8926039,15z/data=!4m10!1m2!2m1!1sGYM+IN+MAHANADI+VIHAR!3m6!1s0x3a190db5885df547:0x1705197130afcf4a!8m2!3d20.4636746!4d85.9106283!15sChVHWU0gSU4gTUFIQU5BREkgVklIQVJaFyIVZ3ltIGluIG1haGFuYWRpIHZpaGFykgEDZ3lt4AEA!16s%2Fg%2F11pd216vdr",
  phone: "+91 98610 24589",
  phoneRaw: "+919861024589",
  whatsappNumber: "+919861024589",
  email: "sonaaerobics.fitness@gmail.com",
  timings: [
    { shift: "Morning Batches", hours: "06:00 AM – 11:30 AM (Mon - Sat)" },
    { shift: "Evening Batches", hours: "04:30 PM – 08:30 PM (Mon - Sat)" },
    { shift: "Sunday Special", hours: "07:00 AM – 10:00 AM (Aerobics & Zumba Special)" }
  ],
  socials: {
    instagram: "https://instagram.com/sona_aerobics_fitness_hub",
    facebook: "https://facebook.com/sonaaerobicsfitnesshub",
    twitter: "https://twitter.com/sonaaerobics",
    youtube: "https://youtube.com/@sonaaerobicsfitnesshub"
  }
};

export const HERO_TAGLINES = [
  "STRONG IS BEAUTIFUL.",
  "MOVE WITH CONFIDENCE.",
  "ENERGY. STRENGTH. YOU.",
  "YOUR BODY. YOUR POWER.",
  "TRANSFORM YOURSELF."
];

export const STATS_DATA = [
  { value: "500+", label: "Empowered Women", sub: "Active fitness members" },
  { value: "10+", label: "Signature Programs", sub: "Aerobics, Zumba, HIIT & Strength" },
  { value: "5+", label: "Certified Female Trainers", sub: "Passionate women mentors" },
  { value: "100%", label: "Women-Only Sanctuary", sub: "Safe, private & supportive space" }
];

export const FACILITIES_DATA: Facility[] = [
  {
    id: "aerobics-studio",
    title: "Dedicated Aerobics Studio",
    tagline: "High-Energy Rhythm & Flow",
    description: "Spacious shock-absorbent wooden spring floors designed for step aerobics, cardio blasts, and group rhythm movement without joint strain.",
    iconName: "Activity",
    imageUrl: "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=800&q=80",
    features: ["Acoustic Sound System", "Impact-Absorption Flooring", "Full-Length Mirrors"]
  },
  {
    id: "modern-workout",
    title: "Modern Ladies Workout Arena",
    tagline: "Precision Bio-Mechanical Gear",
    description: "Curated machinery ergonomically configured for female anatomy, empowering effective strength, posture correction, and toning.",
    iconName: "Dumbbell",
    imageUrl: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=800&q=80",
    features: ["Ergonomic Resistance Machines", "Kettlebell & Dumbbell Sets", "Cable Cross Stations"]
  },
  {
    id: "zumba-arena",
    title: "Zumba & Dance Fitness Arena",
    tagline: "Joyful Calorie-Torching Beats",
    description: "Vibrant ambient lighting, pulsating music, and certified Zumba instructors who turn every cardio workout into an electrifying party.",
    iconName: "Music",
    imageUrl: "https://images.unsplash.com/photo-1524594152303-9fd13543fe6e?auto=format&fit=crop&w=800&q=80",
    features: ["Dynamic Mood Lighting", "Latin & Bollywood Beats", "High-Spirited Instructors"]
  },
  {
    id: "cardio-fatburn",
    title: "Cardio & Fat-Burn Zone",
    tagline: "Endurance & Heart Health",
    description: "Smart treadmills, elliptical cross-trainers, stationary spin bikes, and rowers with real-time heart-rate tracking consoles.",
    iconName: "Flame",
    imageUrl: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&w=800&q=80",
    features: ["Interactive Cardio Consoles", "Personal Heart-Rate Monitors", "Interval Sprint Training"]
  },
  {
    id: "functional-core",
    title: "Functional & Core Sculpting",
    tagline: "Agility, Balance & Toning",
    description: "Battle ropes, medicine balls, resistance bands, and Pilates mats engineered to tone the waistline, glutes, and stabilize core strength.",
    iconName: "Zap",
    imageUrl: "https://images.unsplash.com/photo-1518310383802-640c2de311b2?auto=format&fit=crop&w=800&q=80",
    features: ["Pilates Sculpt Rings", "Core Stability Balls", "TRX Suspension Bands"]
  },
  {
    id: "personal-training",
    title: "1-on-1 Female Mentorship",
    tagline: "Customized Results Architecture",
    description: "Dedicated female fitness coaches offering tailored workout programming, form supervision, and weekly body composition checks.",
    iconName: "HeartPulse",
    imageUrl: "https://images.unsplash.com/photo-1574680096145-d05b474e2155?auto=format&fit=crop&w=800&q=80",
    features: ["InBody Composition Analysis", "Custom Meal Guidance", "Form Correction"]
  },
  {
    id: "changing-lockers",
    title: "Private Changing & Locker Suites",
    tagline: "Clean, Luxurious & Safe",
    description: "Sanitized dressing booths, secure digital lockers, vanity mirrors with ring lighting, and personal care amenities.",
    iconName: "Sparkles",
    imageUrl: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=800&q=80",
    features: ["Secured Lockers", "Glam Vanity Mirrors", "Continuous Hygiene Sanitization"]
  },
  {
    id: "safe-sanctuary",
    title: "100% Women-Only Privacy",
    tagline: "Feel Completely at Home",
    description: "Strictly women-only premises, female staff, and a warm, uplifting sisterhood where every woman feels celebrated and confident.",
    iconName: "ShieldCheck",
    imageUrl: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=800&q=80",
    features: ["Zero-Intimidation Space", "All-Female Staff", "Supportive Sisterhood"]
  }
];

export const PROGRAMS_DATA: Program[] = [
  {
    id: "step-aerobics",
    title: "Rhythmic Step Aerobics",
    subtitle: "High-Energy Cardiovascular Fitness",
    category: "aerobics",
    duration: "45-50 mins",
    intensity: "Moderate",
    caloriesBurn: "450 - 600 kcal",
    description: "Our signature program combines rhythmic step choreography, upbeat music, and interval conditioning to melt fat, tone legs, and elevate stamina.",
    highlights: ["Boosts cardiovascular endurance", "Shapes lower body & calves", "Improves balance and coordination", "Fun group rhythm"],
    imageUrl: "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=800&q=80",
    trainer: "Coach Rashmi",
    timing: "Morning 07:00 AM & Evening 05:30 PM"
  },
  {
    id: "zumba-fitness",
    title: "Zumba & Dance Cardio Party",
    subtitle: "Dance Your Way to Fitness",
    category: "dance",
    duration: "50 mins",
    intensity: "All Levels",
    caloriesBurn: "500 - 700 kcal",
    description: "Ditch the routine and join the party! Latin, hip-hop, and energetic Bollywood rhythms fused into infectious full-body cardio routines.",
    highlights: ["Stress relief & mood booster", "No prior dance skills required", "High calorie expenditure", "Tones hips, waist & core"],
    imageUrl: "https://images.unsplash.com/photo-1524594152303-9fd13543fe6e?auto=format&fit=crop&w=800&q=80",
    trainer: "ZIN Pooja",
    timing: "Morning 08:30 AM & Evening 06:30 PM"
  },
  {
    id: "weight-loss-sculpt",
    title: "Fat Shred & Body Sculpting",
    subtitle: "Targeted Weight Loss Acceleration",
    category: "weight-loss",
    duration: "50 mins",
    intensity: "High Intensity",
    caloriesBurn: "550 - 750 kcal",
    description: "Engineered specifically for women aiming for inch-loss and lean body definition. Alternates bodyweight resistance with high-tempo fat-burn intervals.",
    highlights: ["Targets belly, arms, and thighs", "Accelerates resting metabolism", "Weekly progress & inch measurements", "Diet and hydration roadmap"],
    imageUrl: "https://images.unsplash.com/photo-1518310383802-640c2de311b2?auto=format&fit=crop&w=800&q=80",
    trainer: "Coach Sona & Team",
    timing: "Morning 06:15 AM & Evening 05:00 PM"
  },
  {
    id: "women-strength",
    title: "Women's Strength & Glute Lab",
    subtitle: "Build Lean Muscle & True Strength",
    category: "strength",
    duration: "45 mins",
    intensity: "All Levels",
    caloriesBurn: "350 - 500 kcal",
    description: "Dispel the myths! Strength training won't make you bulky—it builds posture, firms muscles, fortifies bone density, and creates curve definition.",
    highlights: ["Increases bone mineral density", "Sculpts glutes, back, and shoulders", "Improves functional posture", "Builds deep physical confidence"],
    imageUrl: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=800&q=80",
    trainer: "Coach Ananya",
    timing: "Morning 09:30 AM & Evening 07:15 PM"
  },
  {
    id: "yoga-flexibility",
    title: "Flexibility, Spine & Posture",
    subtitle: "Mind-Body Balance & Relief",
    category: "wellness",
    duration: "45 mins",
    intensity: "Beginner",
    caloriesBurn: "250 - 350 kcal",
    description: "Gentle yet transformative mobility and posture sessions. Relieves desk stiffness, lower back pain, improves joint lubrication and mental calm.",
    highlights: ["Eases backache & desk fatigue", "Enhances joint flexibility", "Stress-reducing breathwork", "Promotes restful sleep"],
    imageUrl: "https://images.unsplash.com/photo-1545205597-3d9d02c29597?auto=format&fit=crop&w=800&q=80",
    trainer: "Instructor Meera",
    timing: "Morning 10:30 AM & Evening 04:30 PM"
  },
  {
    id: "hiit-burn",
    title: "HIIT & Functional Circuit",
    subtitle: "Maximum Results in Minimum Time",
    category: "weight-loss",
    duration: "40 mins",
    intensity: "High Intensity",
    caloriesBurn: "600 - 800 kcal",
    description: "Dynamic circuit stations combining agility ladders, battle ropes, slam balls, and sprint intervals for the ultimate afterburn effect.",
    highlights: ["EPOC afterburn burns calories post-workout", "Boosts athletic stamina", "Time-efficient workout", "Empowering team spirit"],
    imageUrl: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=800&q=80",
    trainer: "Coach Rashmi",
    timing: "Evening 06:00 PM & 07:45 PM"
  }
];

export const MEMBERSHIP_PLANS: MembershipPlan[] = [
  {
    id: "basic",
    name: "SILVER ESSENTIAL",
    tagline: "Ideal for steady daily fitness & cardio habit",
    monthlyPrice: 1499,
    quarterlyPrice: 3899,
    annualPrice: 11999,
    features: [
      "Access to modern ladies gym workout arena",
      "Standard cardio & free weight equipment",
      "Morning or Evening batch flexibility",
      "Locker & changing room privileges",
      "Introductory fitness assessment",
      "Free high-speed WiFi & RO water"
    ],
    bonuses: ["1 complimentary body-fat checkup"]
  },
  {
    id: "premium",
    name: "GOLD AEROBICS PLUS",
    tagline: "Our most chosen plan for all-inclusive transformation",
    isPopular: true,
    badge: "MOST POPULAR",
    monthlyPrice: 2299,
    quarterlyPrice: 5999,
    annualPrice: 18499,
    features: [
      "UNLIMITED Aerobics Studio classes",
      "UNLIMITED Zumba & Dance fitness sessions",
      "Complete Gym Arena & Cardio access",
      "Flexible all-day time slots (Morning + Evening)",
      "Bi-weekly InBody composition scans",
      "Personalized macro & nutrition guidelines",
      "Priority spot reservation in group classes"
    ],
    bonuses: [
      "2 Free Guest Passes for female friends",
      "Personalized hydration & habit planner"
    ]
  },
  {
    id: "elite",
    name: "PLATINUM VIP TRANSFORMATION",
    tagline: "Dedicated 1-on-1 female coach & accelerated results",
    monthlyPrice: 3999,
    quarterlyPrice: 10499,
    annualPrice: 31999,
    features: [
      "Everything in GOLD AEROBICS PLUS",
      "Dedicated 1-on-1 Certified Female Trainer",
      "Custom tailored weekly workout regimen",
      "Exclusive Indian diet & lifestyle nutrition plan",
      "Monthly progress photoshoot & milestone report",
      "Posture alignment & post-workout stretch support",
      "Direct WhatsApp access to your master coach"
    ],
    bonuses: [
      "Free Sona Fitness Hub Welcome Kit",
      "VIP locker preference & special event access"
    ]
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "gal-1",
    title: "Aerobics Step Session",
    category: "Aerobics",
    imageUrl: "https://github.com/techsashid-tech/demo-SonaAerobicsfitnessHub/blob/f9b9ae851c50ba9bdcf018049a05a0cb2a2e0f4b/1.png?auto=format&fit=crop&w=900&q=80",
    caption: "High spirits and rhythmic steps during our morning cardio batch"
  },
  {
    id: "gal-2",
    title: "Zumba Dance Fiesta",
    category: "Dance",
    imageUrl: "https://images.unsplash.com/photo-1524594152303-9fd13543fe6e?auto=format&fit=crop&w=900&q=80",
    caption: "Women radiating pure joy and sweat in our Zumba dance arena"
  },
  {
    id: "gal-3",
    title: "Functional Strength & Toning",
    category: "Strength",
    imageUrl: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=900&q=80",
    caption: "Empowering ladies with safe, guided resistance training"
  },
  {
    id: "gal-4",
    title: "Core & Mat Sculpting",
    category: "Core",
    imageUrl: "https://images.unsplash.com/photo-1518310383802-640c2de311b2?auto=format&fit=crop&w=900&q=80",
    caption: "Sculpting waistlines and fortifying spine stability"
  },
  {
    id: "gal-5",
    title: "Cardio Endurance Sprint",
    category: "Cardio",
    imageUrl: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&w=900&q=80",
    caption: "Smart treadmills and elliptical stations in action"
  },
  {
    id: "gal-6",
    title: "Women's Wellness & Flexibility",
    category: "Wellness",
    imageUrl: "https://images.unsplash.com/photo-1545205597-3d9d02c29597?auto=format&fit=crop&w=900&q=80",
    caption: "Restorative stretches to end a powerful workout week"
  },
  {
    id: "gal-7",
    title: "1-on-1 Form Mentorship",
    category: "Coaching",
    imageUrl: "https://images.unsplash.com/photo-1574680096145-d05b474e2155?auto=format&fit=crop&w=900&q=80",
    caption: "Female trainers ensuring perfect form, zero injury, and confidence"
  },
  {
    id: "gal-8",
    title: "Empowering Sisterhood",
    category: "Community",
    imageUrl: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=900&q=80",
    caption: "Celebrating fitness milestones together at Sona Hub"
  }
];

export const TESTIMONIALS_DATA: Testimonial[] = [
  {
    id: "rev-1",
    name: "Sunita Mohanty",
    role: "Homemaker & Mother of Two",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&h=200&q=80",
    program: "Aerobics & Fat Loss",
    rating: 5,
    quote: "Being a homemaker, finding time for myself felt impossible. Joining Sona Aerobics in Mahanadi Vihar changed my life. Lost 9 kgs in 4 months and my knee pain is completely gone! The all-female environment makes me feel 100% comfortable.",
    transformation: "-9 kgs in 4 months"
  },
  {
    id: "rev-2",
    name: "Priyanka Jena",
    role: "Software Engineer",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&h=200&q=80",
    program: "Zumba & Strength",
    rating: 5,
    quote: "Sitting 9 hours at my laptop caused terrible neck and posture issues. The evening Zumba & strength classes are my daily therapy. The trainers are so friendly, motivating, and strictly focus on correct posture. Highly recommended for working girls!",
    transformation: "Posture Restored & +40% Energy"
  },
  {
    id: "rev-3",
    name: "Ananya Patnaik",
    role: "College Student, Ravenshaw Univ",
    avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=200&h=200&q=80",
    program: "Step Aerobics & HIIT",
    rating: 5,
    quote: "I was intimidated by mixed gyms with men around. Sona Hub is an absolute blessing! The music is energizing, the step aerobics sessions are addictive, and the vibes are so supportive. I look forward to working out every single day.",
    transformation: "Tone & Athletic Stamina"
  },
  {
    id: "rev-4",
    name: "Dr. Lipsa Tripathy",
    role: "Healthcare Professional",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&h=200&q=80",
    program: "Platinum VIP Coaching",
    rating: 5,
    quote: "As a physician, I look for clinical hygiene, safe bio-mechanics, and certified instruction. Sona Aerobics excels on every parameter. The personalized guidance and clean equipment make it Mahanadi Vihar's finest ladies fitness destination.",
    transformation: "Vitality & Strength Optimization"
  },
  {
    id: "rev-5",
    name: "Sneha Das",
    role: "Teacher & Bride-to-Be",
    avatar: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=200&h=200&q=80",
    program: "Bridal Fitness & Tone",
    rating: 5,
    quote: "I wanted to tone up for my wedding without starving myself. The coaches designed a fun aerobics and toning plan that fit my teaching schedule. I achieved my dream bridal silhouette with pure joy and confidence!",
    transformation: "-3 Inches off Waistline"
  }
];

export const FAQ_DATA: FaqItem[] = [
  {
    id: "faq-1",
    category: "Exclusivity",
    question: "Is Sona Aerobics & Fitness Hub strictly only for women?",
    answer: "Yes, 100%! We are an exclusive women-only fitness center. From trainers to members, our entire space is reserved for girls and women. You can train in total privacy, peace of mind, and confidence."
  },
  {
    id: "faq-2",
    category: "Aerobics & Classes",
    question: "What makes your aerobics and dance fitness sessions special?",
    answer: "Our aerobics sessions are choreographed with specialized step platforms on impact-absorbing wooden floors to protect joints while delivering intense calorie burn. We combine Latin rhythm, Bollywood beats, and athletic conditioning led by certified women instructors."
  },
  {
    id: "faq-3",
    category: "Beginners",
    question: "I have never worked out in a gym before. Can I join as a complete beginner?",
    answer: "Absolutely! More than 60% of our members started with zero prior gym experience. Our coaches guide you step-by-step with warm-up routines, basic movement patterns, and scalable intensity so you never feel overwhelmed."
  },
  {
    id: "faq-4",
    category: "Timings & Batches",
    question: "What are the batch timings for students and working women?",
    answer: "We offer early morning batches from 06:00 AM to 11:30 AM (ideal for students and homemakers) and evening batches from 04:30 PM to 08:30 PM (ideal for working professionals). You can choose or alternate between timings to fit your lifestyle."
  },
  {
    id: "faq-5",
    category: "Weight Loss",
    question: "Do you provide personalized diet and weight loss guidance?",
    answer: "Yes! Weight loss is 70% nutrition and 30% movement. Our Gold and Platinum plans include body composition tracking (BMI, muscle mass, visceral fat) and wholesome Indian dietary guidance tailored to your food preferences without starvation diets."
  },
  {
    id: "faq-6",
    category: "Trial Session",
    question: "Can I try a free demo class before purchasing a membership?",
    answer: "Yes! We welcome every prospective lady to book a complimentary 1-Day Trial Session. You can experience our aerobics studio, meet our trainers, check our hygiene standards, and experience the sisterhood firsthand."
  },
  {
    id: "faq-7",
    category: "Trainers",
    question: "Are personal female trainers available for 1-on-1 training?",
    answer: "Yes, we have certified female personal trainers specializing in weight loss, strength conditioning, PCOD/PCOS fitness management, and post-pregnancy recovery."
  },
  {
    id: "faq-8",
    category: "Location",
    question: "Where is the gym located in Mahanadi Vihar?",
    answer: "We are centrally situated at Plot 32, Mahanadi Vihar, Cuttack, Odisha. You can find us easily on Google Maps (Sona Aerobics and fitness Hub ladies Gym) with ample safe parking space."
  }
];
