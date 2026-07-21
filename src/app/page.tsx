"use client";

import { useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "@/lib/firebase";
import { CVData, CVDataSchema } from "@/types/cv";
import { FIRESTORE_COLLECTION, FIRESTORE_DOCUMENT_ID } from "@/constants/firebase";

import Header from "@/components/Header";
import CareerObjective from "@/components/CareerObjective";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import PersonalProjects from "@/components/PersonalProjects";
import Education from "@/components/Education";
import LoadingState from "@/components/LoadingState";
import ErrorState from "@/components/ErrorState";

export default function CVPage() {
  const [cvData, setCvData] = useState<CVData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

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

  if (loading) return <LoadingState />;
  if (error) return <ErrorState error={error} />;
  if (!cvData) return null;

  return (
    <div className="container animate-fade-in">
      <Header personalInfo={cvData.personal_info} />
      <CareerObjective objective={cvData.career_objective} />
      <Skills skills={cvData.skills} />
      <Experience experience={cvData.experience} />
      <PersonalProjects projects={cvData.personal_projects || []} />
      <Education education={cvData.education} />
    </div>
  );
}
