import React, { useState } from 'react';
import { TopBar } from './components/TopBar';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { SpotlightCards } from './components/SpotlightCards';
import { AboutSection } from './components/AboutSection';
import { ServicesSection } from './components/ServicesSection';
import { RenovationShowcase } from './components/RenovationShowcase';
import { WhyChooseUs } from './components/WhyChooseUs';
import { Testimonials } from './components/Testimonials';
import { FAQSection } from './components/FAQSection';
import { LeadCaptureForm } from './components/LeadCaptureForm';
import { Footer } from './components/Footer';
import { WhatsAppWidget } from './components/WhatsAppWidget';
import { CursorAura } from './components/CursorAura';

export default function App() {
  const [selectedService, setSelectedService] = useState<string>('General & Deep Cleaning');

  const scrollToContact = (service?: string) => {
    if (service) {
      setSelectedService(service);
    }
    const contactElem = document.getElementById('contact');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col relative selection:bg-sky-500 selection:text-white">
      {/* Custom Mouse Follower Aura (Desktop only) */}
      <CursorAura />

      {/* Persistent Floating WhatsApp Chat Widget */}
      <WhatsAppWidget />

      {/* Top Notification & Contact Bar */}
      <TopBar />

      {/* Sticky Main Header */}
      <Header onOpenQuote={scrollToContact} />

      {/* Main Content Layout */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero onOpenQuote={scrollToContact} />

        {/* 4 Core Spotlight Cards */}
        <SpotlightCards onSelectService={scrollToContact} />

        {/* About Metro Cleaners & Renovators */}
        <AboutSection onOpenQuote={scrollToContact} />

        {/* Comprehensive Services Grid with Filter Tabs */}
        <ServicesSection onSelectService={scrollToContact} />

        {/* Turnkey Renovation Capabilities */}
        <RenovationShowcase onOpenQuote={scrollToContact} />

        {/* Statistics & 4-Step Process */}
        <WhyChooseUs />

        {/* Real Customer Feedback */}
        <Testimonials />

        {/* Frequently Asked Questions */}
        <FAQSection />

        {/* High-Converting Lead Capture Form with Dynamic Mailto Logic */}
        <LeadCaptureForm
          initialService={selectedService}
        />
      </main>

      {/* Footer & Socials */}
      <Footer />
    </div>
  );
}
