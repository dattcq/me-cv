"use client";

import { useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "@/lib/firebase";
import { CVData } from "@/types/cv";

import Header from "@/components/Header";
import CareerObjective from "@/components/CareerObjective";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import PersonalProjects from "@/components/PersonalProjects";
import Education from "@/components/Education";

export default function CVPage() {
  const [cvData, setCvData] = useState<CVData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchData() {
      try {
        const docRef = doc(db, "cv_data", "truong_dat_profile");
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setCvData(docSnap.data() as CVData);
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

  if (loading) return <div className="container"><div className="card">Đang tải dữ liệu CV...</div></div>;
  if (error) return <div className="container"><div className="card"><h3 className="text-accent">Thông báo</h3><p>{error}</p></div></div>;
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
