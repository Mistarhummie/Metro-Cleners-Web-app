export interface ServiceItem {
  id: string;
  title: string;
  category: 'core' | 'cleaning' | 'renovation' | 'hygiene';
  tagline: string;
  description: string;
  features: string[];
  idealFor: string;
  startingPrice: string;
  iconName: string;
  popular?: boolean;
}

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  location: string;
  rating: number;
  comment: string;
  service: string;
  date: string;
  avatarUrl?: string;
}

export interface QuoteFormData {
  fullName: string;
  phone: string;
  email: string;
  location: string;
  serviceRequired: string;
  propertyType: string;
  preferredDate: string;
  notes: string;
}

export interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

export interface NairobiArea {
  name: string;
  zone: string;
  highlight: string;
}
