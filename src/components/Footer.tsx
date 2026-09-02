import React from 'react';
import { Phone, Mail, MapPin, Clock, ArrowUp, Heart, Sparkles, CheckCircle2 } from 'lucide-react';
import { Logo } from './Logo';
import { COMPANY_DETAILS, SERVICES } from '../data/content';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="main-footer" className="bg-[#061229] text-slate-300 pt-16 pb-12 border-t border-blue-900/40 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Grid of Footer */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800">
          
          {/* Col 1: Brand Info & Tagline (lg:col-span-4) */}
          <div className="lg:col-span-4 space-y-4">
            <Logo variant="white" size="lg" />
            
            <p className="text-sm text-slate-300 leading-relaxed font-normal pt-2">
              Metro Cleaners & Renovators Ltd is Nairobi's trusted premier provider of residential deep cleaning, office janitorial solutions, structural property renovations, fumigation, and feminine hygiene services.
            </p>

            <div className="pt-2">
              <span className="text-xs uppercase tracking-wider text-lime-400 font-bold block mb-2">
                Company Tagline:
              </span>
              <p className="text-sm font-semibold text-white italic">
                "{COMPANY_DETAILS.tagline}"
              </p>
            </div>

            {/* Social Icons */}
            <div className="pt-3">
              <p className="text-xs uppercase tracking-wider text-slate-400 font-semibold mb-3">
                Follow Us Online
              </p>
              <div className="flex items-center gap-3">
                {/* Facebook */}
                <a
                  href={COMPANY_DETAILS.socials.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-xl bg-slate-800/80 hover:bg-[#0047BA] text-slate-300 hover:text-white flex items-center justify-center transition-all hover:scale-110"
                  aria-label="Facebook Page"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                </a>
                {/* Instagram */}
                <a
                  href={COMPANY_DETAILS.socials.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-xl bg-slate-800/80 hover:bg-pink-600 text-slate-300 hover:text-white flex items-center justify-center transition-all hover:scale-110"
                  aria-label="Instagram Page"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                </a>
                {/* X / Twitter */}
                <a
                  href={COMPANY_DETAILS.socials.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-xl bg-slate-800/80 hover:bg-black text-slate-300 hover:text-white flex items-center justify-center transition-all hover:scale-110"
                  aria-label="X (Twitter) Profile"
                >
                  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                </a>
                {/* LinkedIn */}
                <a
                  href={COMPANY_DETAILS.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-xl bg-slate-800/80 hover:bg-[#0A66C2] text-slate-300 hover:text-white flex items-center justify-center transition-all hover:scale-110"
                  aria-label="LinkedIn Page"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                </a>
              </div>
            </div>
          </div>

          {/* Col 2: Quick Links (lg:col-span-2) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-sm font-extrabold text-white uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <a href="#hero" className="hover:text-sky-400 transition-colors">Home</a>
              </li>
              <li>
                <a href="#about" className="hover:text-sky-400 transition-colors">About Us</a>
              </li>
              <li>
                <a href="#services" className="hover:text-sky-400 transition-colors">Our Services</a>
              </li>
              <li>
                <a href="#renovations" className="hover:text-sky-400 transition-colors">Renovations Hub</a>
              </li>
              <li>
                <a href="#why-us" className="hover:text-sky-400 transition-colors">Why Choose Us</a>
              </li>
              <li>
                <a href="#reviews" className="hover:text-sky-400 transition-colors">Client Reviews</a>
              </li>
              <li>
                <a href="#faqs" className="hover:text-sky-400 transition-colors">FAQs</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-sky-400 transition-colors">Contact / Get Free Quote</a>
              </li>
            </ul>
          </div>

          {/* Col 3: Core Services (lg:col-span-3) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-sm font-extrabold text-white uppercase tracking-wider">
              Core Services
            </h4>
            <ul className="space-y-2 text-xs">
              {SERVICES.map((s) => (
                <li key={s.id}>
                  <a href="#services" className="hover:text-lime-300 transition-colors flex items-center gap-1.5">
                    <span className="text-lime-400">›</span>
                    <span>{s.title}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Contact & Operations Base (lg:col-span-3) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-sm font-extrabold text-white uppercase tracking-wider">
              Contact & Base
            </h4>
            
            <div className="space-y-3 text-xs">
              {/* Location */}
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-lime-400 shrink-0 mt-0.5" />
                <span>{COMPANY_DETAILS.address}</span>
              </div>

              {/* Phone */}
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-sky-400 shrink-0" />
                <a href={`tel:${COMPANY_DETAILS.phoneRaw}`} className="text-white font-bold hover:text-lime-300 transition-colors">
                  {COMPANY_DETAILS.phoneDisplay}
                </a>
              </div>

              {/* Email */}
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-sky-400 shrink-0" />
                <a href={`mailto:${COMPANY_DETAILS.email}`} className="hover:text-sky-300 transition-colors">
                  {COMPANY_DETAILS.email}
                </a>
              </div>

              {/* Working Hours */}
              <div className="flex items-start gap-2.5 pt-2 border-t border-slate-800">
                <Clock className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <p className="text-white font-semibold">Mon - Fri: 7:00 AM - 6:00 PM</p>
                  <p className="text-slate-400">Sat: 7:00 AM - 5:00 PM</p>
                  <p className="text-lime-400">Sun: Emergency Call-outs</p>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar & Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>
            © {new Date().getFullYear()} Metro Cleaners & Renovators Ltd. All rights reserved. Lavington, Nairobi, Kenya.
          </p>

          <div className="flex items-center gap-4">
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-[#0047BA] text-slate-200 hover:text-white transition-all cursor-pointer"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
