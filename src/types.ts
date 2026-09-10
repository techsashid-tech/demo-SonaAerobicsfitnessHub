export type ThemeMode = 'dark' | 'light';

export interface Program {
  id: string;
  title: string;
  subtitle: string;
  category: 'aerobics' | 'dance' | 'weight-loss' | 'strength' | 'wellness';
  duration: string;
  intensity: 'Beginner' | 'Moderate' | 'High Intensity' | 'All Levels';
  caloriesBurn: string;
  description: string;
  highlights: string[];
  imageUrl: string;
  trainer: string;
  timing: string;
}

export interface Facility {
  id: string;
  title: string;
  tagline: string;
  description: string;
  iconName: string;
  imageUrl: string;
  features: string[];
}

export interface MembershipPlan {
  id: string;
  name: string;
  tagline: string;
  isPopular?: boolean;
  monthlyPrice: number;
  quarterlyPrice: number;
  annualPrice: number;
  features: string[];
  bonuses: string[];
  badge?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  avatar: string;
  program: string;
  rating: number;
  quote: string;
  transformation: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: string;
  imageUrl: string;
  caption: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}
