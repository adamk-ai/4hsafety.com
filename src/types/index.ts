export interface TeamMember {
  id: string;
  name: string;
  position: string;
  description: string;
  image: string;
  linkedin?: string;
  email?: string;
  specialization: string;
  imagePosition?: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  gallery: string[];
  technologies: string[];
  category: string;
  client?: string;
  completed: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  features: string[];
}

export type Language = 'en' | 'hu' | 'sv' | 'it' | 'ko' | 'zh' | 'de';

export interface Translations {
  [key: string]: {
    [lang in Language]: string;
  };
}