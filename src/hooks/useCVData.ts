"use client";

import { useEffect, useState, useCallback } from "react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "@/lib/firebase";
import { CVData, CVDataSchema } from "@/types/cv";
import { FIRESTORE_COLLECTION, FIRESTORE_DOCUMENT_ID } from "@/constants/firebase";
import { initialCVData } from "@/constants/initialCVData";
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
  const error = "";
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
          setCvData(initialCVData);
        }
      } catch (err: unknown) {
        console.warn("Firestore fetch warning, using fallback local data:", err);
        setCvData(initialCVData);
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
