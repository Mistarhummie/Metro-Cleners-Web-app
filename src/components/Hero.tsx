import React from 'react';
import { Phone, ArrowRight, ShieldCheck, Sparkles, CheckCircle2, Star, Clock, MapPin } from 'lucide-react';
import { COMPANY_DETAILS } from '../data/content';

interface HeroProps {
  onOpenQuote: (service?: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenQuote }) => {
  return (
    <section id="hero" className="relative bg-gradient-to-b from-blue-50/70 via-white to-slate-50 pt-8 pb-20 md:pt-14 md:pb-28 overflow-hidden">
      {/* Subtle background decorative shapes */}
      <div className="absolute top-0 right-0 -mr-24 -mt-24 w-96 h-96 rounded-full bg-sky-200/30 blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 left-0 -ml-24 w-80 h-80 rounded-full bg-lime-200/25 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* Left Column: Bold Copy & Conversion Triggers */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Top Tagline / Location Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-100/80 border border-blue-200/80 text-[#0047BA] text-xs sm:text-sm font-bold mb-4 shadow-xs">
              <span className="flex h-2 w-2 rounded-full bg-lime-500 animate-pulse" />
              <span>Nairobi's Trusted Cleaning & Renovation Experts</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-extrabold text-[#091E42] tracking-tight leading-[1.15] mb-4">
              Quality Solutions in <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0047BA] via-[#0284C7] to-[#16A34A]">
                Cleaning & Renovations
              </span>
            </h1>

            {/* Official Tagline & Subheading */}
            <div className="mb-6 space-y-2">
              <p className="text-lg sm:text-xl font-bold text-[#0047BA] flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-lime-600 shrink-0" />
                <span>"{COMPANY_DETAILS.tagline}"</span>
              </p>
              <p className="text-base sm:text-lg text-slate-600 max-w-2xl leading-relaxed">
                Professional residential & commercial deep cleaning, pest fumigation, sanitary bins, and precision property renovations in Lavington and across all Nairobi estates.
              </p>
            </div>

            {/* Conversion CTA Buttons (Explicitly requested in prompt) */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 w-full sm:w-auto mb-8">
              {/* Call Now Button */}
              <a
                id="hero-call-now-btn"
                href={`tel:${COMPANY_DETAILS.phoneRaw}`}
                className="inline-flex items-center justify-center gap-3 px-6 py-4 rounded-xl text-base font-bold text-white bg-[#0047BA] hover:bg-[#003791] shadow-lg shadow-blue-700/25 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xl group"
              >
                <div className="p-1 rounded-full bg-white/20 text-lime-300 group-hover:scale-110 transition-transform">
                  <Phone className="w-5 h-5" />
                </div>
                <div className="text-left leading-tight">
                  <span className="block text-[11px] uppercase tracking-wider text-blue-100 font-semibold">Instant Booking</span>
                  <span className="text-base sm:text-lg font-extrabold">Call Now ({COMPANY_DETAILS.phoneDisplay})</span>
                </div>
              </a>

              {/* Get a Free Estimate Button */}
              <button
                id="hero-estimate-btn"
                onClick={() => onOpenQuote()}
                className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl text-base font-bold text-[#091E42] bg-white hover:bg-slate-50 border-2 border-slate-200/90 shadow-md hover:border-sky-400 hover:text-[#0047BA] transition-all duration-200 hover:-translate-y-0.5 cursor-pointer"
              >
                <span>Get a Free Estimate</span>
                <ArrowRight className="w-5 h-5 text-sky-500 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            {/* Trust Checklist Badges */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-4 border-t border-slate-200/80 w-full text-xs sm:text-sm text-slate-700 font-medium">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-lime-600 shrink-0" />
                <span>Insured & Bonded Staff</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-lime-600 shrink-0" />
                <span>100% Eco-Safe Chemicals</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-lime-600 shrink-0" />
                <span>Lavington & Nairobi Wide</span>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Composition inspired by sample layout */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Main Visual Card with Clean Layered Styling */}
              <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-white">
                {/* Hero image showcasing professional sparkling cleaning and renovation */}
                <div className="relative h-80 sm:h-96 w-full overflow-hidden bg-slate-100">
                  <img
                    src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=1000&q=80"
                    alt="Professional Cleaning by Metro Cleaners Nairobi"
                    className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#091E42]/80 via-transparent to-transparent" />
                  
                  {/* Bottom Image Overlay Info */}
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-lime-500/90 text-slate-950 text-xs font-bold mb-1">
                      <Sparkles className="w-3.5 h-3.5" />
                      <span>Turnkey Cleaning & Renovation</span>
                    </div>
                    <p className="text-sm font-semibold text-slate-100">
                      Residential • Offices • Estates • Post-Builders
                    </p>
                  </div>
                </div>

                {/* Sub-strip with working hours and emergency dispatch */}
                <div className="p-4 bg-slate-900 text-white flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-sky-400 shrink-0" />
                    <div>
                      <p className="font-bold text-slate-200">Mon - Sat Service</p>
                      <p className="text-slate-400">7:00 AM - 6:00 PM</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 pl-3 border-l border-slate-700">
                    <MapPin className="w-4 h-4 text-lime-400 shrink-0" />
                    <div>
                      <p className="font-bold text-slate-200">Lavington HQ</p>
                      <p className="text-slate-400">Off Olenguruone</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Stat Badge 1: Top Right Rating Card */}
              <div className="absolute -top-4 -right-4 sm:-right-6 z-20 bg-white rounded-2xl p-3.5 shadow-xl border border-slate-100 flex items-center gap-3 animate-bounce-slow">
                <div className="w-11 h-11 rounded-xl bg-amber-50 flex items-center justify-center text-amber-500 font-black text-lg shadow-inner">
                  ★
                </div>
                <div>
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <p className="text-xs font-bold text-slate-800 mt-0.5">4.9/5 Rating in Nairobi</p>
                  <p className="text-[10px] text-slate-500">Over 500+ Local Reviews</p>
                </div>
              </div>

              {/* Floating Stat Badge 2: Bottom Left Verified Trust Card */}
              <div className="absolute -bottom-6 -left-4 sm:-left-6 z-20 bg-white rounded-2xl p-3.5 shadow-xl border border-slate-100 flex items-center gap-3">
                <div className="w-11 h-11 rounded-xl bg-emerald-50 flex items-center justify-center text-emerald-600">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm font-extrabold text-[#0047BA]">2,500+ Projects</p>
                  <p className="text-xs text-slate-600 font-medium">Successfully Cleaned & Renovated</p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>

      {/* Cloud/Wave Organic Bottom Divider matching inspiration graphic */}
      <div className="absolute bottom-0 left-0 right-0 w-full overflow-hidden leading-none pointer-events-none">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="relative block w-full h-10 sm:h-14 text-white fill-current"
        >
          <path d="M0,0 C150,90 350,-40 500,60 C650,140 900,10 1200,40 L1200,120 L0,120 Z"></path>
        </svg>
      </div>
    </section>
  );
};
