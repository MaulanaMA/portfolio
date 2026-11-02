export type Theme = 'dark' | 'light';
export type Language = 'id' | 'en';

export interface SocialLinks {
  github: string;
  linkedin: string;
  whatsapp: string;
  email: string;
}

export interface ProfileData {
  name: string;
  tagline: string;
  identity: string[];
  educationBrief: string;
  location: string;
  availability: boolean;
  socials: SocialLinks;
  cvUrl: string;
}

export interface Project {
  id: string;
  slug: string;
  title: string;
  category: 'web' | 'ar' | 'system' | 'network';
  descriptionKey: string;
  featuresKeys: string[];
  tags: string[];
  status: 'completed' | 'in-progress' | 'research' | 'production';
  statusLabelKey: string;
  githubUrl?: string;
  liveUrl?: string;
  image: string;
  role: string;
  period: string;
  highlights: string[];
}

export interface SkillItem {
  name: string;
  level: string;
  isLearning?: boolean;
}

export interface SkillGroup {
  categoryKey: string;
  icon: string;
  skills: SkillItem[];
}

export interface ExperienceItem {
  id: string;
  roleKey: string;
  companyKey: string;
  period: string;
  type: 'work' | 'intern' | 'tech' | 'teaching' | 'organization';
  descriptionKey: string;
  responsibilitiesKeys: string[];
  techStack?: string[];
}

export interface EducationItem {
  id: string;
  institution: string;
  degreeKey: string;
  majorKey: string;
  period: string;
  statusKey: string;
  highlightsKeys: string[];
}

export interface CertificationItem {
  id: string;
  title: string;
  issuer: string;
  issueDate: string;
  credentialId?: string;
  credentialUrl?: string;
}

export interface ServiceItem {
  id: string;
  titleKey: string;
  descriptionKey: string;
  featuresKeys: string[];
  popular?: boolean;
  tag: string;
}
