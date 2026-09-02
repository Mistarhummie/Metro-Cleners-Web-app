import { ServiceItem, TestimonialItem, FAQItem, NairobiArea } from '../types';

export const COMPANY_DETAILS = {
  name: "Metro Cleaners & Renovators Ltd",
  shortName: "Metro Cleaners",
  tagline: "We clean so you don't have to",
  address: "Lavington off Olenguruone Bypass, Nairobi, Kenya",
  phoneDisplay: "0706 385869",
  phoneRaw: "+254706385869",
  phoneSecondary: "0722 000000",
  email: "info@metrocleaners.co.ke",
  workingHours: {
    weekdays: "Mon - Fri: 7:00 AM - 6:00 PM",
    saturday: "Sat: 7:00 AM - 5:00 PM",
    sunday: "Sun: Emergency Call-outs & Prior Bookings",
    summary: "Mon-Fri: 7 AM - 6 PM | Sat: 7 AM - 5 PM"
  },
  socials: {
    facebook: "https://facebook.com/metrocleanerske",
    instagram: "https://instagram.com/metrocleanerske",
    twitter: "https://x.com/metrocleanerske",
    linkedin: "https://linkedin.com/company/metrocleanerske",
    whatsapp: "https://wa.me/254706385869"
  },
  stats: [
    { label: "Spaces Cleaned & Renovated", value: "2,500+", suffix: "" },
    { label: "Client Satisfaction Rate", value: "99.2", suffix: "%" },
    { label: "Vetted Cleaning Specialists", value: "45+", suffix: "" },
    { label: "Years Serving Nairobi", value: "10+", suffix: "Years" }
  ]
};

export const SERVICES: ServiceItem[] = [
  {
    id: "general-cleaning",
    title: "General & Deep Cleaning",
    category: "core",
    tagline: "Comprehensive residential and commercial deep cleaning solutions.",
    description: "From routine domestic chores to full-property intensive deep scrubbing, we clean every corner, skirting board, and appliance to pristine standards.",
    features: [
      "Deep kitchen degreasing & appliance detailing",
      "Full bathroom descaling, sanitization & grout scrubbing",
      "Move-in / Move-out & post-tenancy handover cleaning",
      "Window glass, track & frame polishing",
      "Dust extraction from carpets, curtains & upholstery"
    ],
    idealFor: "Apartments, Townhouses, Villas, Airbnb & Executive Offices",
    startingPrice: "From KSh 4,500",
    iconName: "Sparkles",
    popular: true
  },
  {
    id: "renovations",
    title: "Renovations & Remodeling",
    category: "core",
    tagline: "Turnkey structural repairs, modern finishes, and interior upgrades.",
    description: "Transform your living or working environment. Our expert renovation crew handles precision painting, tile installations, gypsum ceilings, plumbing, and woodwork.",
    features: [
      "Interior & exterior painting and textured coatings",
      "Floor tiling, wooden parquet fitting & repairs",
      "Modern gypsum false ceilings & ambient lighting fixtures",
      "Bathroom & kitchen remodeling and plumbing overhauls",
      "Wall repairs, waterproofing & damp-proofing"
    ],
    idealFor: "Homeowners, Real Estate Landlords & Commercial Fit-outs",
    startingPrice: "Custom Free On-site Estimate",
    iconName: "Hammer",
    popular: true
  },
  {
    id: "fumigation",
    title: "Fumigation & Pest Control",
    category: "core",
    tagline: "Government-approved, odorless & highly effective pest elimination.",
    description: "Eradicate bedbugs, cockroaches, termites, rodents, and mosquitoes safely using eco-friendly, non-staining, pet-safe pest control compounds.",
    features: [
      "Guaranteed cockroach and bedbug extermination",
      "Termite pre-construction and post-construction barrier treatments",
      "Rodent baiting, trap systems & prevention sealing",
      "Mosquito fogging for compounds & garden spaces",
      "Odorless & child/pet-friendly approved formulations"
    ],
    idealFor: "Homes, Restaurants, Warehouses, Schools & Estates",
    startingPrice: "From KSh 3,500",
    iconName: "ShieldCheck",
    popular: false
  },
  {
    id: "sanitary-bins",
    title: "Sanitary Bins & Washroom Care",
    category: "core",
    tagline: "Hygienic, touchless, and compliant feminine hygiene management.",
    description: "Reliable provision and scheduled servicing of automated & pedal-operated sanitary disposal bins with hospital-grade sanitization and odor control.",
    features: [
      "Hands-free pedal and sensor-activated bin units",
      "Scheduled bi-weekly or monthly collection & sterilization",
      "Discreet, sealed antibacterial liners and granules",
      "Automatic air freshener and soap dispenser servicing",
      "Certificate of sanitary disposal compliance"
    ],
    idealFor: "Corporate Offices, Schools, Malls, Hospitals & Hotels",
    startingPrice: "From KSh 1,200 / unit / mo",
    iconName: "Trash2",
    popular: false
  },
  {
    id: "carpet-upholstery",
    title: "Carpet & Sofa Shampooing",
    category: "cleaning",
    tagline: "Industrial hot-water extraction and stain eradication.",
    description: "Revitalize your fabric and leather furniture, rugs, and fitted carpets with fast-drying, anti-allergen steam and foam extraction technology.",
    features: [
      "Stubborn stain & pet odor neutralization",
      "Deep fabric fiber dust mite extraction",
      "Quick 2-4 hour drying time with industrial blowers",
      "Safe conditioning for velvet, suede, microfiber & leather"
    ],
    idealFor: "Living room suites, mattresses, executive office seating",
    startingPrice: "From KSh 2,500",
    iconName: "Armchair",
    popular: false
  },
  {
    id: "post-construction",
    title: "Post-Construction Cleanup",
    category: "cleaning",
    tagline: "Heavy debris removal and sparkle cleaning for new builds.",
    description: "Complete post-builders clean to remove cement residue, paint splatter, grout haze, and fine construction dust so the premises are move-in ready.",
    features: [
      "Paint and adhesive removal from glass and tiles",
      "High-power HEPA vacuuming of drywall dust",
      "Pressure washing of driveways, walkways & compound",
      "Final polish of all chrome, sanitaries & joinery"
    ],
    idealFor: "Contractors, Interior Designers & New Property Owners",
    startingPrice: "From KSh 12,000",
    iconName: "HardHat",
    popular: false
  }
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: "1",
    name: "Wanjiku Mwangi",
    role: "Homeowner",
    location: "Lavington, Nairobi",
    rating: 5,
    comment: "Metro Cleaners did an exceptional deep clean and sofa shampooing before we hosted our family gathering. The team was punctual, polite, and left our home smelling fresh and looking brand new!",
    service: "Deep Cleaning & Upholstery",
    date: "2 weeks ago"
  },
  {
    id: "2",
    name: "David Ochieng",
    role: "Property Manager",
    location: "Westlands, Nairobi",
    rating: 5,
    comment: "We contracted Metro for post-renovation cleaning and sanitary bin services for our commercial building. Their attention to detail and reliable schedule make them our go-to partner in Nairobi.",
    service: "Sanitary Bins & Commercial Clean",
    date: "1 month ago"
  },
  {
    id: "3",
    name: "Dr. Amina Hassan",
    role: "Clinic Director",
    location: "Kilimani, Nairobi",
    rating: 5,
    comment: "Their fumigation service was completely odorless and safe for our health facility. Zero cockroach sightings since their treatment. Highly recommended for professionalism!",
    service: "Fumigation & Pest Control",
    date: "3 weeks ago"
  },
  {
    id: "4",
    name: "Brian Kamau",
    role: "Estate Resident",
    location: "Karen, Nairobi",
    rating: 5,
    comment: "They handled our interior repaint and tile repair seamlessly. Quality workmanship, transparent pricing with no hidden surprises, and they cleaned up thoroughly afterwards.",
    service: "Renovations & Painting",
    date: "2 months ago"
  }
];

export const NAIROBI_AREAS: NairobiArea[] = [
  { name: "Lavington", zone: "Headquarters & Core Hub", highlight: "15 min response time" },
  { name: "Kilimani & Kileleshwa", zone: "Zone A", highlight: "Daily Teams on ground" },
  { name: "Westlands & Parklands", zone: "Zone A", highlight: "Commercial & Residential" },
  { name: "Karen & Lang'ata", zone: "Zone B", highlight: "Mansion & Compound care" },
  { name: "Runda & Muthaiga", zone: "Zone B", highlight: "Executive Villa specialists" },
  { name: "Upper Hill & CBD", zone: "Zone A", highlight: "Office & Janitorial teams" },
  { name: "South C & South B", zone: "Zone C", highlight: "Scheduled route coverage" },
  { name: "Thika Road & Garden City", zone: "Zone C", highlight: "Rapid deployment" }
];

export const FAQS: FAQItem[] = [
  {
    question: "How do I request an estimate or book a service?",
    answer: "You can simply call us at 0706 385869, chat with us on WhatsApp, or complete our online inquiry form. We provide quick phone estimates or arrange a free on-site survey for renovation and commercial projects.",
    category: "General"
  },
  {
    question: "Are your cleaning and pest control chemicals safe for kids and pets?",
    answer: "Yes, 100%. We utilize certified, eco-friendly, biodegradable cleaning detergents and government-approved, low-toxicity, odorless pest control formulations that are completely safe once dry.",
    category: "Safety"
  },
  {
    question: "Do I need to supply cleaning equipment and supplies?",
    answer: "No, our professional crews arrive fully equipped with high-grade industrial vacuum cleaners, pressure washers, steam extractors, microfiber cloths, ladders, and specialized cleaning agents.",
    category: "Operations"
  },
  {
    question: "Where are you located in Nairobi and what areas do you cover?",
    answer: "Our main base is located in Lavington off Olenguruone Bypass, Nairobi. We service all estates and commercial districts across Nairobi County and surrounding satellite towns like Kiambu, Ruiru, and Rongai.",
    category: "Location"
  },
  {
    question: "How quickly can you dispatch a team for urgent cleaning or fumigation?",
    answer: "We offer same-day and next-day emergency dispatches across Nairobi. Give us a direct call at 0706 385869 for immediate priority scheduling.",
    category: "Booking"
  }
];
