import React from 'react';
import { ShieldCheck, Clock, ThumbsUp, Sparkles, PhoneCall, ClipboardCheck, Sparkle, CheckCircle } from 'lucide-react';
import { COMPANY_DETAILS } from '../data/content';

export const WhyChooseUs: React.FC = () => {
  const steps = [
    {
      num: "01",
      title: "Contact or Free Estimate",
      desc: "Call 0706 385869, chat on WhatsApp, or submit our online inquiry form with your requirements.",
      icon: <PhoneCall className="w-6 h-6 text-[#0047BA]" />
    },
    {
      num: "02",
      title: "Custom Plan & Assessment",
      desc: "We confirm your requirements, provide transparent upfront pricing, and schedule convenient dates.",
      icon: <ClipboardCheck className="w-6 h-6 text-sky-600" />
    },
    {
      num: "03",
      title: "Expert Execution",
      desc: "Our vetted, uniformed team arrives punctually with industrial machines and eco-friendly products.",
      icon: <Sparkles className="w-6 h-6 text-lime-600" />
    },
    {
      num: "04",
      title: "Final Inspection",
      desc: "We conduct a thorough quality walkthrough to guarantee every detail meets our spotless standard.",
      icon: <CheckCircle className="w-6 h-6 text-emerald-600" />
    }
  ];

  return (
    <section id="why-us" className="py-16 md:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Statistics Bar (Aligned with Inspiration Top Banner) */}
        <div className="bg-[#0047BA] text-white rounded-3xl p-8 sm:p-12 mb-16 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-sky-400/20 rounded-full blur-3xl pointer-events-none" />
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center divide-y lg:divide-y-0 lg:divide-x divide-blue-400/30">
            {COMPANY_DETAILS.stats.map((stat, idx) => (
              <div key={idx} className={`pt-4 lg:pt-0 ${idx > 0 ? 'lg:pl-6' : ''}`}>
                <p className="text-3xl sm:text-5xl font-black text-lime-300 tracking-tight mb-1">
                  {stat.value}
                </p>
                <p className="text-xs sm:text-sm font-semibold text-blue-100 uppercase tracking-wider">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-[#0047BA] text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-lime-600" />
            <span>How We Work</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#091E42] tracking-tight">
            Our Seamless 4-Step Process
          </h2>
          <p className="mt-3 text-slate-600 text-base sm:text-lg">
            Experience hassle-free property care from initial consultation to final sparkle inspection.
          </p>
        </div>

        {/* 4 Steps Flow */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className="bg-slate-50 rounded-3xl p-6 border border-slate-200/80 hover:bg-white hover:border-sky-300 hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="w-14 h-14 rounded-2xl bg-white shadow-xs border border-slate-100 flex items-center justify-center group-hover:scale-110 transition-transform">
                    {step.icon}
                  </div>
                  <span className="text-3xl font-black text-slate-300 group-hover:text-[#0047BA] transition-colors">
                    {step.num}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-[#091E42] mb-2 group-hover:text-[#0047BA] transition-colors">
                  {step.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {step.desc}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-200/60 flex items-center gap-1 text-[11px] font-bold text-lime-700">
                <span>Verified Quality Standard</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
