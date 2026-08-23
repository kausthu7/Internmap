export type StartupType = 
  | 'Unicorn' 
  | 'Scale-up' 
  | 'Early Stage' 
  | 'DeepTech' 
  | 'Bootstrapped' 
  | 'Studio / Incubator';

export type StartupStage = 
  | 'Pre-seed' 
  | 'Seed' 
  | 'Series A' 
  | 'Series B' 
  | 'Series C+' 
  | 'Profitable / Public';

export type Sector = 
  | 'AI & DeepTech'
  | 'FinTech & InsurTech'
  | 'B2B SaaS & DevTools'
  | 'HealthTech & Bio'
  | 'ClimateTech & Green'
  | 'E-Commerce & Retail'
  | 'CyberSecurity'
  | 'HRTech & Work'
  | 'Web3 & Gaming'
  | 'Mobility & Logistics'
  | 'Food Service / Fast Food (QSR)'
  | 'Food Service / Coffee & Bakery'
  | 'Food Service / Pizza Delivery'
  | 'Grocery Retail / Supermarkets'
  | 'Specialized Retail (Sporting Goods)'
  | 'Discount Retail / Variety Store';

export interface JobRole {
  title: string;
  department: string;
  location: string;
  type: 'Full-time' | 'Hybrid' | 'Remote' | 'Internship' | 'Part-time';
  url?: string;
}

export interface Founder {
  name: string;
  role: string;
  avatarUrl?: string;
  linkedinUrl?: string;
}

export interface Startup {
  id: string;
  name: string;
  slug: string;
  tagline: string;
  description: string;
  type: StartupType;
  stage: StartupStage;
  sector: Sector;
  area: string; // e.g. "9th arrondissement", "Station F (13th)", etc.
  arrondissementNumber?: number; // 1 to 20 or undefined
  address: string;
  coordinates: [number, number]; // [lat, lng]
  foundedYear: number;
  fundingTotalEurM: number; // in Millions of Euros
  fundingDisplay: string; // e.g. "€450M+" or "Bootstrapped"
  headcount: string; // e.g. "250-500"
  hiringNow: boolean;
  activeJobsCount: number;
  websiteUrl: string;
  careersUrl: string;
  logoText?: string;
  customLogoUrl?: string;
  brandColor?: string;
  tags: string[];
  techStack?: string[];
  founders: Founder[];
  jobs?: JobRole[];
  featured?: boolean;
  isCommunitySubmitted?: boolean;
  dateAdded?: string;
  isBoosted?: boolean;
  boostedUntil?: string;
}

export interface FilterState {
  searchQuery: string;
  selectedType: string;
  selectedArea: string;
  selectedStage: string;
  selectedSector: string;
  selectedJobType: string;
  hiringOnly: boolean;
  minFunding?: number;
}

export interface NotHiringReport {
  id: string;
  startupId: string;
  startupName: string;
  timestamp: string;
  status: 'pending' | 'resolved' | 'dismissed';
}

