import { z } from 'zod';

export const PersonalInfoSchema = z.object({
  name: z.string(),
  title: z.string(),
  phone: z.string(),
  email: z.string(),
  address: z.string(),
});
export type PersonalInfo = z.infer<typeof PersonalInfoSchema>;

export const CareerObjectiveSchema = z.object({
  summary: z.string(),
  goal: z.string(),
});
export type CareerObjective = z.infer<typeof CareerObjectiveSchema>;

export const ExperienceProjectSchema = z.object({
  name: z.string(),
  details: z.array(z.string()),
});
export type ExperienceProject = z.infer<typeof ExperienceProjectSchema>;

export const ExperienceSchema = z.object({
  company: z.string(),
  period: z.string(),
  role: z.string(),
  description: z.string(),
  projects: z.array(ExperienceProjectSchema).optional(),
  details: z.array(z.string()).optional(),
});
export type Experience = z.infer<typeof ExperienceSchema>;

export const PersonalProjectSchema = z.object({
  name: z.string(),
  period: z.string(),
  role: z.string(),
  details: z.array(z.string()),
});
export type PersonalProject = z.infer<typeof PersonalProjectSchema>;

export const EducationSchema = z.object({
  school: z.string(),
  period: z.string(),
  major: z.string(),
});
export type Education = z.infer<typeof EducationSchema>;

export const CVDataSchema = z.object({
  personal_info: PersonalInfoSchema,
  career_objective: CareerObjectiveSchema,
  skills: z.record(z.string(), z.string()),
  experience: z.array(ExperienceSchema),
  personal_projects: z.array(PersonalProjectSchema).optional(),
  education: z.array(EducationSchema),
});
export type CVData = z.infer<typeof CVDataSchema>;
