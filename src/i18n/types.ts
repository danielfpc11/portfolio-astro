import { LOCALES } from '../../astro.config';

export type Locale = (typeof LOCALES)[number];

export interface JobProject {
  name: string;
  tasks: string[];
}

export interface Job {
  company: string;
  role: string;
  period: string;
  modality: string;
  descriptions: string[];
  projects?: JobProject[];
  clients?: JobProject[];
  teamTasks?: string[];
  technologies: string[];
  companyUrl: string;
}

export interface TranslationKeys {
  nav: {
    about: string;
    stack: string;
    experience: string;
    education: string;
    contact: string;
    downloadCv: string;
    cvComingSoon: string;
  };
  hero: {
    greeting: string;
    tagline: string;
    shortBio: string;
    availability: string;
    location: string;
    cta: string;
  };
  about: {
    title: string;
    bio: string;
    languagesTitle: string;
    languages: Array<{ name: string; level: string }>;
    softSkillsTitle: string;
    softSkills: string[];
  };
  stack: {
    title: string;
    categories: {
      languages: string;
      frontend: string;
      backend: string;
      databases: string;
      testing: string;
      devopsInfra: string;
      tools: string;
    };
    levels: {
      advanced: string;
      intermediate: string;
      basic: string;
    };
  };
  experience: {
    title: string;
    present: string;
    hybrid: string;
    onsite: string;
    technologiesLabel: string;
    projectsLabel: string;
    clientsLabel: string;
    teamLabel: string;
    jobs: Job[];
  };
  education: {
    title: string;
    degree: string;
    institution: string;
    year: string;
    honors: string;
  };
  contact: {
    title: string;
    subtitle: string;
    nameLabel: string;
    emailLabel: string;
    messageLabel: string;
    submitButton: string;
    linkedinLabel: string;
    emailDirectLabel: string;
  };
  footer: {
    copyright: string; // Use {year} placeholder — replaced at render time with current year
    builtWith: string;
  };
  notFound: {
    title: string;
    message: string;
    backHome: string;
  };
  seo: {
    metaTitle: string;
    metaDescription: string;
  };
}
