export type Language = 'en' | 'my' | 'zh';

export interface EstateZone {
  key: 'farm' | 'factory' | 'relax';
  number: string;
  label: string;
  kicker: string;
  title: string;
  image: string;
  fallbackImage: string;
  alt: string;
  description: string;
  highlights: string[];
  activities: string[];
}

export interface ProcessStage {
  label: string;
  title: string;
  description: string;
  fact: string;
}

export interface CompanionCrop {
  id: string;
  number: string;
  art: string;
  name: string;
  desc: string;
  bgClass: string;
}

export interface TripOption {
  id: 'harvest' | 'villa' | 'cupping';
  name: string;
  tag: string;
  title: string;
  itinerary: string[];
  total: (guests: number) => number;
  rate: (guests: number, t: (s: string) => string) => string;
}

export type ContactMode = 'visit' | 'wholesale';

export interface ContactFormData {
  mode: ContactMode;
  name: string;
  email: string;
  date?: string;
  phone?: string;
  company?: string;
  volume?: string;
  message: string;
}
