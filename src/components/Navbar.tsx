"use client";

import { useState, useEffect } from "react";
import { Language } from "@/constants/translations";

interface NavbarProps {
  name: string;
  lang: Language;
  onLanguageChange: (lang: Language) => void;
}

export default function Navbar({ name, lang, onLanguageChange }: NavbarProps) {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    // Check initial preference from localStorage or system theme
    const savedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const isDark = savedTheme === "dark" || (!savedTheme && prefersDark);
    if (isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const toggleTheme = () => {
    const isDarkNow = document.documentElement.classList.toggle("dark");
    localStorage.setItem("theme", isDarkNow ? "dark" : "light");
    setDarkMode(isDarkNow);
  };

  const toggleLanguage = () => {
    const newLang: Language = lang === "vi" ? "en" : "vi";
    onLanguageChange(newLang);
  };

  return (
    <header className="navbar">
      <div className="navbar-inner">
        <a href="#hero" className="brand-logo">
          <span>{name}</span>
        </a>

        <div className="nav-actions">
          {/* Language Selector Button ("VI" / "EN") */}
          <button
            onClick={toggleLanguage}
            className="lang-switch-btn no-print"
            title="Switch Language / Đổi ngôn ngữ"
            aria-label="Switch Language"
          >
            {lang === "vi" ? "VI" : "EN"}
          </button>

          {/* Sleek Icon-only Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            className="icon-btn no-print"
            title="Toggle Theme"
            aria-label="Toggle Theme"
          >
            {darkMode ? "☀️" : "🌙"}
          </button>

          {/* Download PDF Button — icon only */}
          <a
            href="/portfolio.pdf"
            download="TruongCongQuocDat_FlutterDev_CV.pdf"
            className="icon-btn no-print"
            title="Download CV as PDF"
            aria-label="Download CV as PDF"
          >
            📥
          </a>
        </div>
      </div>
    </header>
  );
}
