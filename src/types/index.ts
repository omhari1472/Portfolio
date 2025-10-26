// Contact types
export interface Contact {
  contactId: string;
  name: string;
  email: string;
  subject: string;
  message: string;
  createdAt: string;
  status: 'new' | 'read' | 'archived';
}

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

// Analytics types
export interface Analytics {
  analyticsId: string;
  pageView: string;
  timestamp: string;
  userAgent?: string;
  country?: string;
  referrer?: string;
}

// Project types
export interface Project {
  projectId: string;
  title: string;
  description: string;
  techStack: string[];
  liveUrl?: string;
  githubUrl?: string;
  imageUrl?: string;
  featured: boolean;
  order: number;
  createdAt: string;
  updatedAt: string;
}

// API Response types
export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}

// Section data types
export interface StatCard {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  value: string;
  color: string;
}

export interface JourneyItem {
  year: string;
  title: string;
  company: string;
  description: string;
}

export interface Experience {
  company: string;
  location: string;
  role: string;
  period: string;
  type: string;
  achievements: string[];
  gradient: string;
}

export interface SkillCategory {
  title: string;
  skills: Skill[];
  gradient: string;
}

export interface Skill {
  name: string;
  level: number;
}

export interface Education {
  degree: string;
  institution: string;
  location: string;
  period: string;
  grade: string;
  highlights: string[];
  gradient: string;
}

export interface Hackathon {
  name: string;
  project: string;
  position: string;
  description: string;
  achievements: string[];
  tech: string[];
  gradient: string;
  icon: React.ComponentType<{ className?: string }>;
}

export interface Achievement {
  title: string;
  description: string;
  year: string;
  icon: React.ComponentType<{ className?: string }>;
  gradient: string;
}

export interface ProjectItem {
  title: string;
  description: string;
  impact: string;
  tags: string[];
  gradient: string;
  featured?: boolean;
}
