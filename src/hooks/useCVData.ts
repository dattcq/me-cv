"use client";

import { useEffect, useState, useCallback } from "react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "@/lib/firebase";
import { CVData, CVDataSchema } from "@/types/cv";
import { FIRESTORE_COLLECTION, FIRESTORE_DOCUMENT_ID } from "@/constants/firebase";
import { Language } from "@/constants/translations";
import { getTranslatedCVData } from "@/utils/translateCVData";

export interface UseCVDataReturn {
  cvData: CVData | null;
  displayData: CVData | null;
  loading: boolean;
  error: string;
  lang: Language;
  changeLanguage: (newLang: Language) => void;
}

export function useCVData(): UseCVDataReturn {
  const [cvData, setCvData] = useState<CVData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");
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
        setError(
          "Lỗi truy cập Firebase: " + (err instanceof Error ? err.message : String(err))
        );
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  const changeLanguage = useCallback((newLang: Language) => {
    setLang(newLang);
    if (typeof window !== "undefined") {
      localStorage.setItem("lang", newLang);
    }
  }, []);

  const displayData = cvData ? getTranslatedCVData(cvData, lang) : null;

  return {
    cvData,
    displayData,
    loading,
    error,
    lang,
    changeLanguage,
  };
}
