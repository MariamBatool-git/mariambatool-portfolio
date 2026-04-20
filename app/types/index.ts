export type Project = {
    name: string;
    description: string;
    appType : string;
    technologies: string[];
    link: string;
}

export type About = string;

export type Skill = string;

export type Experience = {
    company: string;
    role: string;
    duration: string;
    description: string[];
}
