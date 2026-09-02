import React, { useState, useEffect } from 'react';
import { Send, Phone, MessageSquare, CheckCircle, Clock, MapPin, Sparkles, Mail, User, ShieldCheck } from 'lucide-react';
import { COMPANY_DETAILS, SERVICES } from '../data/content';

interface LeadCaptureFormProps {
  initialService?: string;
  initialProperty?: string;
  initialNotes?: string;
}

export const LeadCaptureForm: React.FC<LeadCaptureFormProps> = ({
  initialService = 'General & Deep Cleaning',
  initialProperty = '',
  initialNotes = ''
}) => {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    location: '',
    serviceRequired: initialService,
    propertyType: initialProperty || 'Apartment / Residential',
    preferredDate: '',
    message: initialNotes
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [generatedMailto, setGeneratedMailto] = useState('');

  useEffect(() => {
    if (initialService) {
      setFormData(prev => ({ ...prev, serviceRequired: initialService }));
    }
  }, [initialService]);

  useEffect(() => {
    if (initialNotes) {
      setFormData(prev => ({ ...prev, message: initialNotes }));
    }
  }, [initialNotes]);

  useEffect(() => {
    if (initialProperty) {
      setFormData(prev => ({ ...prev, propertyType: initialProperty }));
    }
  }, [initialProperty]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Construct the structured email body with user's inputs
    const emailSubject = `New Inquiry: ${formData.serviceRequired} - ${formData.fullName.trim() || 'Website Customer'}`;
    
    const emailBody = [
      `Dear Metro Cleaners & Renovators Ltd,`,
      ``,
      `I would like to request a quote / booking for your services:`,
      ``,
      `• Customer Name: ${formData.fullName}`,
      `• Phone Number: ${formData.phone}`,
      `• Email Address: ${formData.email || 'Not provided'}`,
      `• Location / Estate in Nairobi: ${formData.location || 'Nairobi'}`,
      `• Service Required: ${formData.serviceRequired}`,
      `• Property Type: ${formData.propertyType}`,
      `• Preferred Date: ${formData.preferredDate || 'As soon as possible'}`,
      ``,
      `• Details / Scope of Work:`,
      `${formData.message || 'No additional details specified.'}`,
      ``,
      `Please contact me at your earliest convenience with availability and a free estimate.`,
      ``,
      `Thank you,`,
      `${formData.fullName}`
    ].join('\n');

    // Dynamic mailto link creation pre-configured to send to info@metrocleaners.co.ke
    const mailtoUrl = `mailto:${COMPANY_DETAILS.email}?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;
    
    setGeneratedMailto(mailtoUrl);
    setIsSubmitted(true);

    // Trigger the mail client directly
    window.location.href = mailtoUrl;
  };

  const handleWhatsAppSend = () => {
    const text = `Hello Metro Cleaners & Renovators! My name is ${formData.fullName}. I'd like a quote for *${formData.serviceRequired}* in ${formData.location || 'Nairobi'}. Phone: ${formData.phone}. Notes: ${formData.message || 'Please send details'}.`;
    window.open(`https://wa.me/254706385869?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <section id="contact" className="py-16 md:py-24 bg-[#091E42] text-white relative overflow-hidden">
      {/* Background aesthetic lighting */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-lime-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Call & Location Information */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 text-lime-400 text-xs font-bold uppercase tracking-wider mb-3 border border-lime-400/30">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Quick Free Quote & Booking</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                Get in Touch with Metro Cleaners & Renovators
              </h2>
              <p className="mt-3 text-slate-300 text-base leading-relaxed">
                Fill in the form to immediately send your inquiry, or speak directly with our Nairobi operations team today.
              </p>
            </div>

            {/* Direct Contact Cards */}
            <div className="space-y-4">
              {/* Phone Card */}
              <a
                href={`tel:${COMPANY_DETAILS.phoneRaw}`}
                className="p-4 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all flex items-center gap-4 group"
              >
                <div className="w-12 h-12 rounded-xl bg-blue-600/30 border border-blue-400/30 flex items-center justify-center text-lime-400 group-hover:scale-110 transition-transform">
                  <Phone className="w-6 h-6 animate-pulse" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wider text-slate-400 font-semibold">Direct Call / Hotlines</p>
                  <p className="text-lg font-bold text-white">{COMPANY_DETAILS.phoneDisplay}</p>
                  <p className="text-xs text-lime-300 font-medium">Instant Response • Mon - Sat</p>
                </div>
              </a>

              {/* Email Card */}
              <a
                href={`mailto:${COMPANY_DETAILS.email}`}
                className="p-4 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all flex items-center gap-4 group"
              >
                <div className="w-12 h-12 rounded-xl bg-sky-600/30 border border-sky-400/30 flex items-center justify-center text-sky-400 group-hover:scale-110 transition-transform">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wider text-slate-400 font-semibold">Official Email</p>
                  <p className="text-base font-bold text-white">{COMPANY_DETAILS.email}</p>
                  <p className="text-xs text-slate-400">Quotes & Commercial RFPs</p>
                </div>
              </a>

              {/* Address Card */}
              <div className="p-4 rounded-2xl bg-white/5 border border-white/10 flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-emerald-600/30 border border-emerald-400/30 flex items-center justify-center text-emerald-400 shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wider text-slate-400 font-semibold">Location & Base</p>
                  <p className="text-sm font-bold text-white">{COMPANY_DETAILS.address}</p>
                  <p className="text-xs text-slate-400">Serving Lavington & all Nairobi County</p>
                </div>
              </div>

              {/* Working Hours Card */}
              <div className="p-4 rounded-2xl bg-white/5 border border-white/10 flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-amber-600/30 border border-amber-400/30 flex items-center justify-center text-amber-400 shrink-0">
                  <Clock className="w-6 h-6" />
                </div>
                <div className="text-xs space-y-0.5">
                  <p className="uppercase tracking-wider text-slate-400 font-semibold">Working Hours</p>
                  <p className="text-white font-bold">{COMPANY_DETAILS.workingHours.weekdays}</p>
                  <p className="text-slate-300 font-medium">{COMPANY_DETAILS.workingHours.saturday}</p>
                  <p className="text-lime-300 font-semibold">{COMPANY_DETAILS.workingHours.sunday}</p>
                </div>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-blue-900/40 border border-blue-700/40 flex items-center gap-3">
              <ShieldCheck className="w-5 h-5 text-lime-400 shrink-0" />
              <p className="text-xs text-blue-100">
                100% Privacy Guarantee. Your details are strictly used to schedule your service.
              </p>
            </div>
          </div>

          {/* Right Column: Lead Capture Form (Dynamic Mailto Logic) */}
          <div className="lg:col-span-7">
            <div className="bg-white text-slate-900 rounded-3xl p-6 sm:p-10 shadow-2xl border border-slate-100 relative">
              
              <div className="mb-6">
                <h3 className="text-2xl font-extrabold text-[#091E42] tracking-tight">
                  Request a Free Estimate
                </h3>
                <p className="text-slate-600 text-sm mt-1">
                  Submit the details below to launch your pre-populated email quote or WhatsApp confirmation.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                
                {/* Row 1: Full Name & Phone Number */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                      Your Full Name <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                        <User className="w-4 h-4" />
                      </div>
                      <input
                        type="text"
                        name="fullName"
                        required
                        value={formData.fullName}
                        onChange={handleChange}
                        placeholder="e.g. John Mwangi"
                        className="w-full pl-10 pr-3.5 py-3 rounded-xl border border-slate-300 focus:border-[#0047BA] focus:ring-2 focus:ring-blue-100 text-sm font-medium text-slate-900 placeholder:text-slate-400 outline-none transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                      Phone Number <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                        <Phone className="w-4 h-4" />
                      </div>
                      <input
                        type="tel"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="e.g. 0706 385869"
                        className="w-full pl-10 pr-3.5 py-3 rounded-xl border border-slate-300 focus:border-[#0047BA] focus:ring-2 focus:ring-blue-100 text-sm font-medium text-slate-900 placeholder:text-slate-400 outline-none transition-all"
                      />
                    </div>
                  </div>
                </div>

                {/* Row 2: Email & Location / Estate */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                      Email Address
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                        <Mail className="w-4 h-4" />
                      </div>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="e.g. client@domain.co.ke"
                        className="w-full pl-10 pr-3.5 py-3 rounded-xl border border-slate-300 focus:border-[#0047BA] focus:ring-2 focus:ring-blue-100 text-sm font-medium text-slate-900 placeholder:text-slate-400 outline-none transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                      Location / Estate in Nairobi <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                        <MapPin className="w-4 h-4" />
                      </div>
                      <input
                        type="text"
                        name="location"
                        required
                        value={formData.location}
                        onChange={handleChange}
                        placeholder="e.g. Lavington, Westlands, Kilimani..."
                        className="w-full pl-10 pr-3.5 py-3 rounded-xl border border-slate-300 focus:border-[#0047BA] focus:ring-2 focus:ring-blue-100 text-sm font-medium text-slate-900 placeholder:text-slate-400 outline-none transition-all"
                      />
                    </div>
                  </div>
                </div>

                {/* Row 3: Service Required & Property Type */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                      Service Required <span className="text-red-500">*</span>
                    </label>
                    <select
                      name="serviceRequired"
                      value={formData.serviceRequired}
                      onChange={handleChange}
                      className="w-full px-3.5 py-3 rounded-xl border border-slate-300 focus:border-[#0047BA] focus:ring-2 focus:ring-blue-100 text-sm font-bold text-[#0047BA] bg-white outline-none cursor-pointer"
                    >
                      <option value="General & Deep Cleaning">General & Deep Cleaning</option>
                      <option value="Renovations & Remodeling">Renovations & Remodeling</option>
                      <option value="Fumigation & Pest Control">Fumigation & Pest Control</option>
                      <option value="Sanitary Bins & Washroom Hygiene">Sanitary Bins & Washroom Care</option>
                      <option value="Carpet & Sofa Shampooing">Carpet & Sofa Shampooing</option>
                      <option value="Post-Construction Cleaning">Post-Construction Cleaning</option>
                      <option value="Multiple / Customized Package">Multiple / Customized Package</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                      Preferred Date / Timing
                    </label>
                    <input
                      type="date"
                      name="preferredDate"
                      value={formData.preferredDate}
                      onChange={handleChange}
                      className="w-full px-3.5 py-3 rounded-xl border border-slate-300 focus:border-[#0047BA] focus:ring-2 focus:ring-blue-100 text-sm font-medium text-slate-900 bg-white outline-none"
                    />
                  </div>
                </div>

                {/* Row 4: Message / Specific Needs */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                    Message / Space Details
                  </label>
                  <textarea
                    name="message"
                    rows={3}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Describe your rooms, square footage, specific stains, or renovation tasks..."
                    className="w-full p-3.5 rounded-xl border border-slate-300 focus:border-[#0047BA] focus:ring-2 focus:ring-blue-100 text-sm font-medium text-slate-900 placeholder:text-slate-400 outline-none transition-all"
                  />
                </div>

                {/* Submit Button */}
                <button
                  id="submit-quote-btn"
                  type="submit"
                  className="w-full py-4 px-6 rounded-xl bg-gradient-to-r from-[#0047BA] via-[#0284C7] to-[#0284C7] hover:from-[#003B95] hover:to-[#0369A1] text-white font-extrabold text-base shadow-lg shadow-blue-500/30 transition-all duration-200 hover:-translate-y-0.5 flex items-center justify-center gap-2.5 cursor-pointer"
                >
                  <Send className="w-5 h-5" />
                  <span>Submit Inquiry (Opens Email Client)</span>
                </button>

              </form>

              {/* Dynamic Mailto Post-Submit Notification Banner */}
              {isSubmitted && (
                <div className="mt-6 p-4 rounded-2xl bg-blue-50 border border-blue-200 text-slate-800 text-xs sm:text-sm space-y-3 animate-in fade-in duration-300">
                  <div className="flex items-start gap-2.5">
                    <CheckCircle className="w-5 h-5 text-lime-600 shrink-0 mt-0.5" />
                    <div>
                      <p className="font-bold text-slate-900">
                        Inquiry pre-populated for info@metrocleaners.co.ke!
                      </p>
                      <p className="text-slate-600 text-xs mt-0.5">
                        Your default email app should open automatically. You can also re-trigger it or send instantly via WhatsApp:
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 pt-1">
                    <a
                      href={generatedMailto}
                      className="px-3 py-1.5 bg-[#0047BA] text-white font-bold rounded-lg text-xs hover:bg-[#003791] flex items-center gap-1.5"
                    >
                      <Mail className="w-3.5 h-3.5" />
                      <span>Re-open Email App</span>
                    </a>

                    <button
                      type="button"
                      onClick={handleWhatsAppSend}
                      className="px-3 py-1.5 bg-emerald-600 text-white font-bold rounded-lg text-xs hover:bg-emerald-700 flex items-center gap-1.5 cursor-pointer"
                    >
                      <MessageSquare className="w-3.5 h-3.5" />
                      <span>Send via WhatsApp (+254 706 385869)</span>
                    </button>
                  </div>
                </div>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
