"use client";

import { useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "@/lib/firebase";
import { CVData, CVDataSchema } from "@/types/cv";
import { FIRESTORE_COLLECTION, FIRESTORE_DOCUMENT_ID } from "@/constants/firebase";
import { Language } from "@/constants/translations";
import { getTranslatedCVData } from "@/utils/translateCVData";

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
  const [cvData, setCvData] = useState<CVData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [lang, setLang] = useState<Language>(() => {
    if (typeof window !== "undefined") {
      const savedLang = localStorage.getItem("lang") as Language;
      if (savedLang === "vi" || savedLang === "en") return savedLang;
    }
    return "vi";
  });

  useEffect(() => {
    async function fetchData() {
      try {
        const docRef = doc(db, FIRESTORE_COLLECTION, FIRESTORE_DOCUMENT_ID);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          const parsedData = CVDataSchema.parse(docSnap.data());
          setCvData(parsedData);
        } else {
          setError("Chưa có dữ liệu CV. Hãy chờ hệ thống đẩy dữ liệu lên Firestore.");
        }
      } catch (err: unknown) {
        setError("Lỗi quyền truy cập Firebase: " + (err instanceof Error ? err.message : String(err)));
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  const handleLanguageChange = (newLang: Language) => {
    setLang(newLang);
    localStorage.setItem("lang", newLang);
  };

  if (loading) return <LoadingState />;
  if (error) return <ErrorState error={error} />;
  if (!cvData) return null;

  const displayData = getTranslatedCVData(cvData, lang);

  return (
    <>
      <Navbar
        name={displayData.personal_info.name}
        lang={lang}
        onLanguageChange={handleLanguageChange}
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
