import React from 'react';
import { Star, Quote, CheckCircle } from 'lucide-react';
import { TESTIMONIALS } from '../data/content';

export const Testimonials: React.FC = () => {
  return (
    <section id="reviews" className="py-16 md:py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-[#0047BA] text-xs font-bold uppercase tracking-wider mb-3">
            <span>Verified Customer Stories</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#091E42] tracking-tight">
            Trusted by Homeowners & Businesses Across Nairobi
          </h2>
          <p className="mt-3 text-slate-600 text-base sm:text-lg">
            Read real feedback from clients in Lavington, Westlands, Kilimani, and Karen.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {TESTIMONIALS.map((review) => (
            <div
              key={review.id}
              className="bg-slate-50 rounded-3xl p-6 border border-slate-200/80 shadow-xs hover:shadow-xl hover:bg-white hover:border-sky-300 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Rating & Quote Icon */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <Quote className="w-6 h-6 text-blue-300" />
                </div>

                {/* Comment Text */}
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed italic mb-6">
                  "{review.comment}"
                </p>
              </div>

              {/* Author Details */}
              <div className="pt-4 border-t border-slate-200/60">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="text-sm font-bold text-[#091E42]">{review.name}</h4>
                    <p className="text-xs text-slate-500">{review.role} • {review.location}</p>
                  </div>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-blue-100/70 text-[#0047BA]">
                    {review.service}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Brand Trust Strip */}
        <div className="mt-14 pt-10 border-t border-slate-100 flex flex-wrap items-center justify-center gap-8 text-slate-400 text-xs sm:text-sm font-semibold">
          <span>✓ Registered Under Companies Act Kenya</span>
          <span className="hidden sm:inline">•</span>
          <span>✓ Certified Fumigation Handlers</span>
          <span className="hidden sm:inline">•</span>
          <span>✓ NEMA Compliant Waste Disposal</span>
          <span className="hidden sm:inline">•</span>
          <span>✓ Fully Insured & Bonded Staff</span>
        </div>

      </div>
    </section>
  );
};
