export type Project = {
    name: string;
    description: string;
    appType : string;
    technologies: string[];
    link: string;
}

export type About = string;

export type Experience = {
    company: string;
    role: string;
    duration: string;
    description: string[];
}

export type ContactFormData = {
  name: string;
  email: string;
  message: string;
};

export interface SkillCategory {
    label: string;
    skills: string[];
}

export type SkillCategories = SkillCategory[];

export type Certification = {
    id: string;
    name: string;
    link: string;
    provider?: string;
};

export type Certifications = Certification[];