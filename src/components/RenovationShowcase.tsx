import React, { useState } from 'react';
import { Hammer, Paintbrush, Layers, Wrench, ShieldCheck, ArrowRight, CheckCircle2 } from 'lucide-react';

interface RenovationShowcaseProps {
  onOpenQuote: (service?: string) => void;
}

export const RenovationShowcase: React.FC<RenovationShowcaseProps> = ({ onOpenQuote }) => {
  const [activeTab, setActiveTab] = useState(0);

  const projects = [
    {
      title: "Executive Residential Makeover",
      location: "Lavington, Nairobi",
      category: "Full Interior Renovation",
      description: "Complete apartment transformation including modern gypsum false ceilings with warm LED strip lighting, premium washable silk wall paint, and Italian porcelain floor tiling.",
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
      stats: "2-Week Turnaround • Zero Residue Clean"
    },
    {
      title: "Commercial Office Fit-out",
      location: "Westlands, Nairobi",
      category: "Corporate Remodeling",
      description: "Acoustic drywall partitioning, heavy-traffic carpet tile installation, repainting in corporate brand colors, and sanitary washroom upgrades.",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80",
      stats: "Overnight & Weekend Shifts • No Downtime"
    },
    {
      title: "Kitchen & Bathroom Revamp",
      location: "Karen, Nairobi",
      category: "Plumbing & Tiling",
      description: "Modern granite countertop fabrication, anti-slip bathroom tile installation, concealed shower fixtures, and damp-proofing treatment.",
      image: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=800&q=80",
      stats: "High-Grade Waterproofing • 5-Yr Guarantee"
    }
  ];

  const trades = [
    { icon: <Paintbrush className="w-5 h-5 text-sky-500" />, title: "Precision Painting", desc: "Crown Paints, silk vinyl, textured finishes & exterior weather-shielding" },
    { icon: <Layers className="w-5 h-5 text-amber-500" />, title: "Tiling & Parquet", desc: "Ceramic, porcelain, marble laying and hardwood parquet refurbishing" },
    { icon: <Hammer className="w-5 h-5 text-lime-600" />, title: "Gypsum & Ceilings", desc: "Designer acoustic ceilings, bulkheads, and hidden perimeter lighting" },
    { icon: <Wrench className="w-5 h-5 text-blue-600" />, title: "Plumbing & Fixtures", desc: "Sanitary ware installation, leak repairs, pressure pumps & piping" },
  ];

  return (
    <section id="renovations" className="py-16 md:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-12">
          <div className="lg:col-span-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-[#0047BA] text-xs font-bold uppercase tracking-wider mb-3">
              <Hammer className="w-3.5 h-3.5 text-amber-500" />
              <span>Turnkey Renovations & Property Repairs</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#091E42] tracking-tight">
              Transforming Spaces with Quality Craftsmanship
            </h2>
            <p className="mt-3 text-slate-600 text-base sm:text-lg max-w-2xl">
              From fresh coats of paint to structural remodeling and fixture overhauls across Nairobi, we deliver spotless finishes with zero post-work mess.
            </p>
          </div>

          <div className="lg:col-span-4 lg:text-right">
            <button
              onClick={() => onOpenQuote("Renovations & Remodeling")}
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#0047BA] to-[#0284C7] hover:from-[#003B95] hover:to-[#0369A1] text-white font-bold text-sm shadow-md transition-all cursor-pointer"
            >
              <span>Book Site Renovation Survey</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* 4 Trades Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-14">
          {trades.map((trade, idx) => (
            <div
              key={idx}
              className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 hover:bg-white hover:border-sky-300 hover:shadow-xl transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-white shadow-xs border border-slate-100 flex items-center justify-center mb-3">
                {trade.icon}
              </div>
              <h4 className="text-base font-bold text-[#091E42] mb-1">{trade.title}</h4>
              <p className="text-xs text-slate-600 leading-relaxed">{trade.desc}</p>
            </div>
          ))}
        </div>

        {/* Featured Renovation Work Interactive Display */}
        <div className="bg-[#091E42] text-white rounded-3xl p-6 sm:p-10 shadow-2xl relative overflow-hidden">
          {/* Subtle Background glow */}
          <div className="absolute -top-20 -right-20 w-80 h-80 bg-sky-500/10 rounded-full blur-3xl" />
          <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-lime-500/10 rounded-full blur-3xl" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left project preview image */}
            <div className="lg:col-span-7">
              <div className="relative h-72 sm:h-96 rounded-2xl overflow-hidden border-2 border-white/20 shadow-inner">
                <img
                  src={projects[activeTab].image}
                  alt={projects[activeTab].title}
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 left-4 bg-slate-900/80 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-lime-400 border border-lime-400/30">
                  {projects[activeTab].category}
                </div>
                <div className="absolute bottom-4 left-4 right-4 bg-slate-950/80 backdrop-blur-md p-3 rounded-xl text-xs text-slate-200 border border-white/10 flex items-center justify-between">
                  <span className="font-semibold text-white">{projects[activeTab].location}</span>
                  <span className="text-lime-300 font-bold">{projects[activeTab].stats}</span>
                </div>
              </div>
            </div>

            {/* Right project details & selector tabs */}
            <div className="lg:col-span-5 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-1.5 text-xs text-sky-400 font-bold tracking-wider uppercase">
                  <ShieldCheck className="w-4 h-4 text-lime-400" />
                  <span>Verified Metro Project Execution</span>
                </div>
                <h3 className="text-2xl font-bold text-white">
                  {projects[activeTab].title}
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  {projects[activeTab].description}
                </p>

                <div className="space-y-2 pt-2">
                  <div className="flex items-center gap-2 text-xs text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-lime-400 shrink-0" />
                    <span>Post-renovation full sparkle cleaning included automatically</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-lime-400 shrink-0" />
                    <span>Free detailed bill of quantities & transparent labor quotes</span>
                  </div>
                </div>
              </div>

              {/* Tab selector buttons */}
              <div className="mt-8 pt-6 border-t border-white/10 flex flex-col sm:flex-row gap-2">
                {projects.map((proj, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveTab(idx)}
                    className={`flex-1 py-2 px-3 rounded-xl text-xs font-bold text-left transition-all cursor-pointer ${
                      activeTab === idx
                        ? 'bg-white text-[#091E42] shadow-md'
                        : 'bg-white/10 text-slate-300 hover:bg-white/20'
                    }`}
                  >
                    Project 0{idx + 1}
                  </button>
                ))}
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
