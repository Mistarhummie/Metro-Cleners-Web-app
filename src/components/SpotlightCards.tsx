import React from 'react';
import { Sparkles, Hammer, ShieldCheck, Trash2, ArrowRight, Check } from 'lucide-react';
import { SERVICES } from '../data/content';

interface SpotlightCardsProps {
  onSelectService: (serviceTitle: string) => void;
}

export const SpotlightCards: React.FC<SpotlightCardsProps> = ({ onSelectService }) => {
  const coreServices = SERVICES.filter(s => s.category === 'core');

  const getIcon = (id: string) => {
    switch (id) {
      case 'general-cleaning':
        return <Sparkles className="w-8 h-8 text-sky-500" />;
      case 'renovations':
        return <Hammer className="w-8 h-8 text-amber-500" />;
      case 'fumigation':
        return <ShieldCheck className="w-8 h-8 text-lime-600" />;
      case 'sanitary-bins':
        return <Trash2 className="w-8 h-8 text-teal-500" />;
      default:
        return <Sparkles className="w-8 h-8 text-sky-500" />;
    }
  };

  return (
    <section id="core-spotlight" className="relative -mt-6 sm:-mt-10 z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {coreServices.map((service, index) => {
          const isHighlight = index === 0; // General cleaning or first card has royal blue prominence
          return (
            <div
              key={service.id}
              className={`relative rounded-3xl p-6 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl flex flex-col justify-between ${
                isHighlight
                  ? 'bg-gradient-to-b from-[#0047BA] to-[#091E42] text-white shadow-xl shadow-blue-900/20 border border-blue-600/30'
                  : 'bg-white text-slate-800 shadow-lg shadow-slate-200/60 border border-slate-100 hover:border-sky-300'
              }`}
            >
              {/* Top Row: Icon and Tag */}
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div
                    className={`w-16 h-16 rounded-2xl flex items-center justify-center shadow-inner transition-transform group-hover:scale-110 ${
                      isHighlight ? 'bg-white/10 backdrop-blur-sm text-lime-400' : 'bg-slate-50'
                    }`}
                  >
                    {getIcon(service.id)}
                  </div>
                  <span
                    className={`text-xs font-extrabold uppercase tracking-wider px-3 py-1 rounded-full ${
                      isHighlight
                        ? 'bg-lime-400 text-slate-950'
                        : 'bg-blue-50 text-[#0047BA]'
                    }`}
                  >
                    Core Service
                  </span>
                </div>

                {/* Service Title */}
                <h3
                  className={`text-xl font-bold mb-2 ${
                    isHighlight ? 'text-white' : 'text-[#091E42]'
                  }`}
                >
                  {service.title}
                </h3>

                {/* Tagline / Description */}
                <p
                  className={`text-sm mb-4 leading-relaxed line-clamp-3 ${
                    isHighlight ? 'text-blue-100' : 'text-slate-600'
                  }`}
                >
                  {service.tagline}
                </p>

                {/* Bullet Highlights */}
                <ul className="space-y-2 mb-6">
                  {service.features.slice(0, 3).map((feat, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs">
                      <Check
                        className={`w-4 h-4 shrink-0 mt-0.5 ${
                          isHighlight ? 'text-lime-400' : 'text-lime-600'
                        }`}
                      />
                      <span className={isHighlight ? 'text-slate-200' : 'text-slate-700'}>
                        {feat}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Button */}
              <div className="pt-4 border-t border-slate-100/20">
                <button
                  onClick={() => onSelectService(service.title)}
                  className={`w-full py-2.5 px-4 rounded-xl text-sm font-bold flex items-center justify-center gap-2 transition-all cursor-pointer ${
                    isHighlight
                      ? 'bg-white text-[#0047BA] hover:bg-lime-400 hover:text-slate-950 shadow-md'
                      : 'bg-slate-100 text-[#0047BA] hover:bg-[#0047BA] hover:text-white'
                  }`}
                >
                  <span>Request Service</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
