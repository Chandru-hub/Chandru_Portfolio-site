export interface ContactInfo {
  email: string;
  phone: string;
  location: string;
  linkedin: string;
}

export interface ProfileData {
  name: string;
  title: string;
  avatar: string;
  summary: string;
  headline: string;
  availability: string;
  contact: ContactInfo;
}

export interface Experience {
  id: number;
  title: string;
  company: string;
  period: string;
  description: string;
  achievements: string[];
}

export interface SkillGroup {
  category: string;
  items: string[];
}

export interface Education {
  degree: string;
  institution: string;
  period: string;
}

export interface Project {
  id: number;
  title: string;
  description: string;
  category?: string;
  stack?: string[];
}

export interface Certification {
  id: number;
  name: string;
  title: string;
  year: string;
  icon: string;
}

export type ThemeMode = 'light' | 'dark' | 'neon' | 'forest' | 'ocean';

export type TimeOfDay = 'morning' | 'afternoon' | 'evening' | 'night';

export interface ThemeState {
  mode: ThemeMode;
  /** When true, theme follows local time of day */
  autoTime: boolean;
  timeOfDay: TimeOfDay;
}