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
}

export interface Certification {
  id: number;
  name: string;
  title: string;
  year: string;
  icon: string;
}

export interface ThemeState {
  mode: 'light' | 'dark';
}