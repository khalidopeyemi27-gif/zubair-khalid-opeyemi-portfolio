export interface ArchitectureStep {
  id: string;
  title: string;
  description: string;
  components: string[];
}

export interface ProjectLink {
  label: string;
  url: string;
  isPlaceholder?: boolean;
}

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: 'IoT · Embedded Systems · Smart Agriculture' | 'Digital Safety · Software · AI' | 'Developer Tools · React · TypeScript · Framer' | 'Embedded Systems · Sensors · IoT';
  featured: boolean;
  isConfidentialPublicSafe?: boolean;
  publicIndicatorTag?: string;
  shortDescription: string;
  overview: string;
  problem: string;
  approach?: string;
  contribution: string[];
  publicTechnicalOverview?: string;
  technicalImplementation?: string[];
  technologies: string[];
  architectureSteps?: ArchitectureStep[];
  challengesAndLearning: string[];
  currentStatus: string;
  image?: string;
  hasRealImage?: boolean;
  imagePlaceholderLabel?: string;
  date: string;
  role: string;
  disclaimer?: string;
  repositoryNote?: string;
  links?: ProjectLink[];
}

export interface TechnicalCategory {
  title: string;
  description: string;
  skills: string[];
}

export interface Experience {
  period: string;
  role: string;
  company: string;
  location: string;
  summary: string;
  highlights: string[];
  technologies: string[];
}

export interface SocialProfileLinks {
  github: string;
  linkedin: string;
  resume: string;
  email: string;
}
