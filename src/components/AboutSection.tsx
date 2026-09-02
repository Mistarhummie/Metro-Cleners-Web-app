import React from 'react';
import { ShieldCheck, CheckCircle2, Award, Users, Phone, MapPin, Sparkles } from 'lucide-react';
import { COMPANY_DETAILS } from '../data/content';

interface AboutSectionProps {
  onOpenQuote: (service?: string) => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onOpenQuote }) => {
  return (
    <section id="about" className="py-16 md:py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Visual Bubble Collage (Inspired by Design Reference) */}
          <div className="lg:col-span-6 relative">
            <div className="relative max-w-lg mx-auto">
              
              {/* Back Decorative Graphic */}
              <div className="absolute -inset-4 bg-gradient-to-tr from-blue-600 to-sky-400 rounded-3xl opacity-20 filter blur-xl transform -rotate-2" />

              {/* Main Circular / Arch Image */}
              <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-slate-100">
                <img
                  src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1000&q=80"
                  alt="Metro Cleaners team at work in Nairobi"
                  className="w-full h-96 sm:h-[450px] object-cover object-center transform hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />

                {/* Overlaid Badge */}
                <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-[#091E42]/90 backdrop-blur-md text-white border border-white/10 shadow-lg">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-lime-500/20 border border-lime-400/40 flex items-center justify-center text-lime-400">
                      <Award className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-wider text-lime-400 font-bold">Guaranteed Excellence</p>
                      <p className="text-sm font-semibold text-slate-100">Top-Tier Cleaning & Renovation Standards</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Mini Team Badge */}
              <div className="absolute -top-6 -left-6 z-20 bg-white rounded-2xl p-4 shadow-xl border border-slate-100 hidden sm:flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-[#0047BA]">
                  <Users className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm font-bold text-slate-900">45+ Vetted Crew</p>
                  <p className="text-xs text-slate-500">Uniformed & Background Checked</p>
                </div>
              </div>

              {/* Floating Nairobi HQ Pin */}
              <div className="absolute -bottom-4 -right-4 z-20 bg-white rounded-2xl p-3.5 shadow-xl border border-slate-100 flex items-center gap-2">
                <MapPin className="w-5 h-5 text-red-500" />
                <div className="text-left">
                  <p className="text-xs font-bold text-slate-900">Lavington HQ</p>
                  <p className="text-[11px] text-slate-500">Olenguruone Bypass</p>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Company Story & Value Pillars */}
          <div className="lg:col-span-6 flex flex-col items-start text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-[#0047BA] text-xs font-bold uppercase tracking-wider mb-3">
              <Sparkles className="w-3.5 h-3.5 text-lime-600" />
              <span>About Metro Cleaners & Renovators Ltd</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#091E42] tracking-tight leading-tight mb-4">
              Nairobi's Leading Cleaning & Property Renovation Partner
            </h2>

            <p className="text-base text-slate-600 leading-relaxed mb-4">
              At <strong className="text-[#0047BA]">Metro Cleaners & Renovators Ltd</strong>, we deliver dependable, spotless hygiene management and architectural renovations. Our mission is simple: <em className="font-semibold text-slate-800">"We clean so you don't have to."</em>
            </p>

            <p className="text-base text-slate-600 leading-relaxed mb-6">
              Whether you require emergency fumigation, deep residential detailing in Lavington, commercial sanitary bin management in Upper Hill, or turnkey property repainting in Karen, our insured specialists bring precision, hospital-grade sanitized equipment, and utmost respect for your premises.
            </p>

            {/* 4 Core Pillars Grid (Inspired by Reference Layout) */}
            <div className="grid grid-cols-2 gap-4 w-full mb-8">
              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-100 flex items-start gap-2.5">
                <ShieldCheck className="w-5 h-5 text-lime-600 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-slate-900">Insured & Bonded</h4>
                  <p className="text-xs text-slate-500">Complete liability coverage for peace of mind</p>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-100 flex items-start gap-2.5">
                <Award className="w-5 h-5 text-sky-600 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-slate-900">Highly Rated</h4>
                  <p className="text-xs text-slate-500">Over 99% 5-star customer feedback</p>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-100 flex items-start gap-2.5">
                <Users className="w-5 h-5 text-[#0047BA] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-slate-900">Vetted Professionals</h4>
                  <p className="text-xs text-slate-500">Certified technicians & trained artisans</p>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-100 flex items-start gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-slate-900">100% Eco Safe</h4>
                  <p className="text-xs text-slate-500">Approved, child & pet-friendly chemicals</p>
                </div>
              </div>
            </div>

            {/* Bottom Direct Triggers */}
            <div className="flex flex-wrap items-center gap-4 w-full">
              <button
                onClick={() => onOpenQuote()}
                className="px-6 py-3.5 rounded-xl bg-[#0047BA] hover:bg-[#003791] text-white font-bold text-sm shadow-md hover:shadow-lg transition-all cursor-pointer"
              >
                Request Site Assessment
              </button>

              <a
                href={`tel:${COMPANY_DETAILS.phoneRaw}`}
                className="flex items-center gap-2 px-5 py-3.5 rounded-xl bg-blue-50 hover:bg-blue-100 text-[#0047BA] font-bold text-sm border border-blue-200 transition-all"
              >
                <Phone className="w-4 h-4 text-lime-600 animate-pulse" />
                <span>Call {COMPANY_DETAILS.phoneDisplay}</span>
              </a>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
