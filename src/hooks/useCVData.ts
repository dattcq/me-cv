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
  // Render instantly with local data on first paint (0ms, no white screen)
  const [cvData, setCvData] = useState<CVData>(initialCVData);
  const loading = false;
  const error = "";
  const [lang, setLang] = useState<Language>(() => {
    if (typeof window !== "undefined") {
      const savedLang = localStorage.getItem("lang") as Language;
      if (savedLang === "vi" || savedLang === "en") return savedLang;
    }
    return "vi";
  });

  useEffect(() => {
    let isMounted = true;

    async function fetchData() {
      try {
        const docRef = doc(db, FIRESTORE_COLLECTION, FIRESTORE_DOCUMENT_ID);

        // Limit wait time to 3s to prevent hanging when offline or throttled
        const fetchPromise = getDoc(docRef);
        const timeoutPromise = new Promise<never>((_, reject) =>
          setTimeout(() => reject(new Error("Firestore fetch timeout")), 3000)
        );

        const docSnap = await Promise.race([fetchPromise, timeoutPromise]);
        if (isMounted && docSnap.exists()) {
          const parsedData = CVDataSchema.parse(docSnap.data());
          setCvData(parsedData);
        }
      } catch (err: unknown) {
        console.warn("Firestore background sync note (using local CV data):", err);
      }
    }

    fetchData();

    return () => {
      isMounted = false;
    };
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
