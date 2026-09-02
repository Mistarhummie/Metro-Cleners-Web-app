import React, { useState, useEffect } from 'react';
import { Phone, Menu, X, ArrowRight, ShieldCheck } from 'lucide-react';
import { Logo } from './Logo';
import { COMPANY_DETAILS } from '../data/content';

interface HeaderProps {
  onOpenQuote: (service?: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenQuote }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'Services', href: '#services' },
    { name: 'Renovations', href: '#renovations' },
    { name: 'Why Us', href: '#why-us' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'FAQs', href: '#faqs' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      id="main-header"
      className={`sticky top-0 z-40 w-full transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-md py-2.5 border-b border-slate-200/80'
          : 'bg-white py-3.5 border-b border-slate-100'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <a href="#hero" className="flex items-center gap-2 focus:outline-none focus:ring-2 focus:ring-sky-500 rounded-lg">
          <Logo size="md" />
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="px-3 py-2 text-sm font-semibold text-slate-700 hover:text-[#0047BA] rounded-md transition-colors hover:bg-slate-50"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Header Action CTAs */}
        <div className="hidden sm:flex items-center gap-3">
          {/* Click to Call Number */}
          <a
            id="header-call-btn"
            href={`tel:${COMPANY_DETAILS.phoneRaw}`}
            className="flex items-center gap-2 px-3.5 py-2 text-sm font-bold text-[#0047BA] bg-blue-50/80 hover:bg-blue-100/80 rounded-xl border border-blue-200/60 transition-all hover:scale-[1.02] shadow-xs"
            title="Call Metro Cleaners directly"
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-lime-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-lime-500"></span>
            </span>
            <Phone className="w-4 h-4 text-[#0047BA]" />
            <span>{COMPANY_DETAILS.phoneDisplay}</span>
          </a>

          {/* Free Estimate Button */}
          <button
            id="header-estimate-btn"
            onClick={() => onOpenQuote()}
            className="flex items-center gap-1.5 px-4 py-2 text-sm font-bold text-white bg-gradient-to-r from-[#0047BA] via-[#0284C7] to-[#0284C7] hover:from-[#003B95] hover:to-[#0369A1] rounded-xl shadow-md shadow-blue-500/20 transition-all hover:scale-[1.02] cursor-pointer"
          >
            <span>Get Free Quote</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Mobile Menu Toggle Button */}
        <div className="flex items-center gap-2 lg:hidden">
          <a
            href={`tel:${COMPANY_DETAILS.phoneRaw}`}
            className="sm:hidden p-2 text-[#0047BA] bg-blue-50 rounded-lg"
            aria-label="Call Now"
          >
            <Phone className="w-5 h-5" />
          </a>

          <button
            id="mobile-menu-toggle"
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-slate-700 hover:text-[#0047BA] hover:bg-slate-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 shadow-xl px-4 pt-3 pb-6 animate-in slide-in-from-top-2 duration-200">
          <div className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2.5 text-base font-medium text-slate-800 hover:bg-slate-50 hover:text-[#0047BA] rounded-lg transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="mt-4 pt-4 border-t border-slate-100 flex flex-col gap-3">
            <a
              href={`tel:${COMPANY_DETAILS.phoneRaw}`}
              className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-blue-50 text-[#0047BA] font-bold border border-blue-200"
            >
              <Phone className="w-5 h-5 text-lime-600" />
              <span>Direct Call: {COMPANY_DETAILS.phoneDisplay}</span>
            </a>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenQuote();
              }}
              className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-gradient-to-r from-[#0047BA] to-[#0284C7] text-white font-bold shadow-md"
            >
              <span>Get Free Estimate</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <div className="flex items-center justify-center gap-2 text-xs text-slate-500 pt-1">
              <ShieldCheck className="w-4 h-4 text-lime-600" />
              <span>Fully Insured & Vetted Staff • Lavington, Nairobi</span>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
