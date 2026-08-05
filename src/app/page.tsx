"use client";

import { useCVData } from "@/hooks/useCVData";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import ExperienceSection from "@/components/ExperienceSection";
import ProjectsSection from "@/components/ProjectsSection";
import EducationSection from "@/components/EducationSection";
import ContactSection from "@/components/ContactSection";
import LoadingState from "@/components/LoadingState";
import ErrorState from "@/components/ErrorState";

export default function CVPage() {
  const { displayData, loading, error, lang, changeLanguage } = useCVData();

  if (loading) return <LoadingState />;
  if (error) return <ErrorState error={error} />;
  if (!displayData) return null;

  return (
    <>
      <Navbar
        name={displayData.personal_info.name}
        lang={lang}
        onLanguageChange={changeLanguage}
      />

      <main className="main-container">
        <Hero personalInfo={displayData.personal_info} lang={lang} />
        <AboutSection objective={displayData.career_objective} lang={lang} />
        <SkillsSection skills={displayData.skills} lang={lang} />
        <ExperienceSection experience={displayData.experience} lang={lang} />
        <ProjectsSection projects={displayData.personal_projects || []} lang={lang} />
        <EducationSection education={displayData.education} lang={lang} />
        <ContactSection personalInfo={displayData.personal_info} lang={lang} />
      </main>
    </>
  );
}
