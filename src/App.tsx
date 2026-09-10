import React, { useState, useEffect } from 'react';
import { ThemeMode } from './types';
import { Preloader } from './components/Preloader';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { FacilitiesSection } from './components/FacilitiesSection';
import { ProgramsSection } from './components/ProgramsSection';
import { MembershipSection } from './components/MembershipSection';
import { BmiCalculator } from './components/BmiCalculator';
import { ThreeDGallery } from './components/ThreeDGallery';
import { ReviewsSection } from './components/ReviewsSection';
import { FaqSection } from './components/FaqSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { BookingModal } from './components/BookingModal';
import { FloatingQuickActions } from './components/FloatingQuickActions';

export default function App() {
  const [loading, setLoading] = useState<boolean>(true);
  const [theme, setTheme] = useState<ThemeMode>('dark');
  const [bookingModalOpen, setBookingModalOpen] = useState<boolean>(false);
  const [selectedProgramForBooking, setSelectedProgramForBooking] = useState<string>('Step Aerobics');

  // Load saved theme preference
  useEffect(() => {
    const savedTheme = localStorage.getItem('sona_gym_theme') as ThemeMode | null;
    if (savedTheme === 'light' || savedTheme === 'dark') {
      setTheme(savedTheme);
    }
  }, []);

  const toggleTheme = () => {
    setTheme((prev) => {
      const next = prev === 'dark' ? 'light' : 'dark';
      localStorage.setItem('sona_gym_theme', next);
      return next;
    });
  };

  const handleOpenBookingModal = (programName?: string) => {
    if (programName) {
      setSelectedProgramForBooking(programName);
    }
    setBookingModalOpen(true);
  };

  const scrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 ${theme === 'dark' ? 'dark bg-[#07070A] text-slate-100' : 'bg-[#FAFAFC] text-slate-800'}`}>
      {/* 1. Spectacular Preloader Introduction */}
      {loading && (
        <Preloader onComplete={() => setLoading(false)} />
      )}

      {/* 2. Sticky Glassmorphic Navbar */}
      <Navbar
        theme={theme}
        onToggleTheme={toggleTheme}
        onOpenBookingModal={() => handleOpenBookingModal('General Free Trial Session')}
      />

      <main id="main-content">
        {/* 3. Hero Section with 4K Video, Sequential Taglines & Animated CTAs */}
        <HeroSection
          onOpenBookingModal={() => handleOpenBookingModal('Complimentary 1-Day Trial Pass')}
          onExplorePrograms={() => scrollToSection('programs')}
          onOpenMembership={() => scrollToSection('membership')}
        />

        {/* 4. About Section with Philosophy & Animated Stats */}
        <AboutSection
          theme={theme}
          onOpenBookingModal={() => handleOpenBookingModal('Studio Tour & Consultation')}
        />

        {/* 5. Interactive Facilities Section with Subtle Zoom-In / Zoom-Out */}
        <FacilitiesSection
          theme={theme}
          onOpenBookingModal={() => handleOpenBookingModal('Facilities Inspection Pass')}
        />

        {/* 6. Programs Section with Draggable Cards & Modal Previews */}
        <ProgramsSection
          theme={theme}
          onOpenBookingModal={(progName) => handleOpenBookingModal(progName)}
        />

        {/* 7. Membership Pricing Cards with Billing Toggle & 3D Tilt */}
        <MembershipSection
          theme={theme}
          onSelectPlan={(plan) => handleOpenBookingModal(`Membership Plan Enrollment: ${plan}`)}
        />

        {/* 8. Dynamic Functional BMI Calculator */}
        <BmiCalculator
          theme={theme}
          onOpenBookingModal={(reason) => handleOpenBookingModal(reason || 'BMI Consultation')}
        />

        {/* 9. Signature 3D Rotating Visual Gallery Arena */}
        <ThreeDGallery theme={theme} />

        {/* 10. Horizontal Auto-Scrolling Reviews Marquee */}
        <ReviewsSection
          theme={theme}
          onOpenBookingModal={() => handleOpenBookingModal('Join the Sona Sisterhood')}
        />

        {/* 11. Frequently Asked Questions Accordions */}
        <FaqSection theme={theme} />

        {/* 12. Contact Section with Google Maps Embed, 4 CTAs & 3D Social Media */}
        <ContactSection
          theme={theme}
          onOpenBookingModal={() => handleOpenBookingModal('General Membership Booking')}
        />
      </main>

      {/* 13. Multi-Column Footer with 3D SKDAS Credit & Back to Top */}
      <Footer
        theme={theme}
        onOpenBookingModal={() => handleOpenBookingModal('Footer Trial Booking')}
      />

      {/* 14. Floating Quick Actions (WhatsApp & Call) */}
      <FloatingQuickActions />

      {/* 15. Free Trial Session Booking Modal Dialog */}
      <BookingModal
        isOpen={bookingModalOpen}
        onClose={() => setBookingModalOpen(false)}
        preselectedProgram={selectedProgramForBooking}
      />
    </div>
  );
}
