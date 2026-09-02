import React, { useState } from 'react';
import { Sparkles, Hammer, ShieldCheck, Trash2, Armchair, HardHat, Check, ArrowRight } from 'lucide-react';
import { SERVICES } from '../data/content';

interface ServicesSectionProps {
  onSelectService: (serviceTitle: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectService }) => {
  const [activeTab, setActiveTab] = useState<'all' | 'cleaning' | 'renovation' | 'hygiene'>('all');

  const filteredServices = SERVICES.filter(service => {
    if (activeTab === 'all') return true;
    if (activeTab === 'cleaning') return service.category === 'cleaning' || service.id === 'general-cleaning';
    if (activeTab === 'renovation') return service.category === 'renovation' || service.id === 'renovations';
    if (activeTab === 'hygiene') return service.category === 'hygiene' || service.id === 'fumigation' || service.id === 'sanitary-bins';
    return true;
  });

  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case 'Sparkles':
        return <Sparkles className="w-6 h-6 text-sky-500" />;
      case 'Hammer':
        return <Hammer className="w-6 h-6 text-amber-500" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-6 h-6 text-lime-600" />;
      case 'Trash2':
        return <Trash2 className="w-6 h-6 text-teal-500" />;
      case 'Armchair':
        return <Armchair className="w-6 h-6 text-indigo-500" />;
      case 'HardHat':
        return <HardHat className="w-6 h-6 text-orange-500" />;
      default:
        return <Sparkles className="w-6 h-6 text-sky-500" />;
    }
  };

  return (
    <section id="services" className="py-16 md:py-24 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header (Aligned with Inspiration Layout) */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-[#0047BA] text-xs font-bold uppercase tracking-wider mb-3">
            <span>What We're Offering</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#091E42] tracking-tight">
            Providing the Best Services for Our Customers
          </h2>
          <p className="mt-3 text-slate-600 text-base sm:text-lg">
            Complete hygiene, pest elimination, sanitary solutions, and structural renovation under one trusted Nairobi roof.
          </p>

          {/* Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            <button
              onClick={() => setActiveTab('all')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                activeTab === 'all'
                  ? 'bg-[#0047BA] text-white shadow-md'
                  : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              All Offerings
            </button>
            <button
              onClick={() => setActiveTab('cleaning')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                activeTab === 'cleaning'
                  ? 'bg-[#0047BA] text-white shadow-md'
                  : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              Deep & Commercial Cleaning
            </button>
            <button
              onClick={() => setActiveTab('renovation')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                activeTab === 'renovation'
                  ? 'bg-[#0047BA] text-white shadow-md'
                  : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              Renovations & Remodeling
            </button>
            <button
              onClick={() => setActiveTab('hygiene')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                activeTab === 'hygiene'
                  ? 'bg-[#0047BA] text-white shadow-md'
                  : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              Fumigation & Sanitary Bins
            </button>
          </div>
        </div>

        {/* Services Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-3xl p-6 sm:p-7 shadow-lg shadow-slate-200/50 border border-slate-100 hover:border-sky-300 hover:shadow-2xl transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Header row of card */}
                <div className="flex items-start justify-between gap-4 mb-5">
                  <div className="w-14 h-14 rounded-2xl bg-blue-50/80 flex items-center justify-center group-hover:scale-110 transition-transform group-hover:bg-blue-100">
                    {getServiceIcon(service.iconName)}
                  </div>
                  <div className="text-right">
                    <span className="text-[11px] uppercase tracking-wider text-slate-500 font-semibold block">Indicative Rate</span>
                    <span className="text-xs sm:text-sm font-extrabold text-[#0047BA] bg-blue-50/80 px-2.5 py-1 rounded-full border border-blue-200/50 inline-block mt-0.5">
                      {service.startingPrice}
                    </span>
                  </div>
                </div>

                {/* Service Title */}
                <h3 className="text-xl font-bold text-[#091E42] mb-2 group-hover:text-[#0047BA] transition-colors">
                  {service.title}
                </h3>

                {/* Service Description */}
                <p className="text-sm text-slate-600 mb-4 leading-relaxed">
                  {service.description}
                </p>

                {/* Feature checklist */}
                <div className="mb-6 pt-3 border-t border-slate-100 space-y-2">
                  <p className="text-xs font-bold text-slate-900 uppercase tracking-wider">Includes:</p>
                  {service.features.map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                      <Check className="w-3.5 h-3.5 text-lime-600 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>

                {/* Ideal for badge */}
                <div className="mb-6 px-3 py-2 rounded-xl bg-slate-50 text-[11px] text-slate-600">
                  <strong className="text-slate-800">Best For: </strong> {service.idealFor}
                </div>
              </div>

              {/* Card Footer CTA */}
              <button
                onClick={() => onSelectService(service.title)}
                className="w-full py-3 px-4 rounded-xl text-sm font-bold bg-slate-100 text-[#0047BA] group-hover:bg-[#0047BA] group-hover:text-white transition-all flex items-center justify-center gap-2 cursor-pointer shadow-xs group-hover:shadow-md"
              >
                <span>Book This Service</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
