export interface PersonalInfo {
  name: string;
  title: string;
  phone: string;
  email: string;
  address: string;
}

export interface CareerObjective {
  summary: string;
  goal: string;
}

export interface ExperienceProject {
  name: string;
  details: string[];
}

export interface Experience {
  company: string;
  period: string;
  role: string;
  description: string;
  projects?: ExperienceProject[];
  details?: string[];
}

export interface PersonalProject {
  name: string;
  period: string;
  role: string;
  details: string[];
}

export interface Education {
  school: string;
  period: string;
  major: string;
}

export interface CVData {
  personal_info: PersonalInfo;
  career_objective: CareerObjective;
  skills: Record<string, string>;
  experience: Experience[];
  personal_projects?: PersonalProject[];
  education: Education[];
}
