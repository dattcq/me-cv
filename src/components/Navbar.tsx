"use client";

import { useState, useEffect } from "react";
import { Language, translations } from "@/constants/translations";

interface NavbarProps {
  name: string;
  lang: Language;
  onLanguageChange: (lang: Language) => void;
}

export default function Navbar({ name, lang, onLanguageChange }: NavbarProps) {
  const [darkMode, setDarkMode] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const t = translations[lang].nav;

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

  const handlePrint = () => {
    window.print();
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

        <ul className={`nav-links ${mobileMenuOpen ? "active" : ""}`}>
          <li>
            <a href="#about" className="nav-link" onClick={() => setMobileMenuOpen(false)}>
              {t.about}
            </a>
          </li>
          <li>
            <a href="#skills" className="nav-link" onClick={() => setMobileMenuOpen(false)}>
              {t.skills}
            </a>
          </li>
          <li>
            <a href="#experience" className="nav-link" onClick={() => setMobileMenuOpen(false)}>
              {t.experience}
            </a>
          </li>
          <li>
            <a href="#projects" className="nav-link" onClick={() => setMobileMenuOpen(false)}>
              {t.projects}
            </a>
          </li>
          <li>
            <a href="#education" className="nav-link" onClick={() => setMobileMenuOpen(false)}>
              {t.education}
            </a>
          </li>
          <li>
            <a href="#contact" className="nav-link" onClick={() => setMobileMenuOpen(false)}>
              {t.contact}
            </a>
          </li>
        </ul>

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

          {/* Print Button */}
          <button
            onClick={handlePrint}
            className="btn-primary no-print"
            title="Print or Save as PDF"
          >
            🖨️ {t.print}
          </button>

          <button
            className="mobile-menu-btn no-print"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? "✕" : "☰"}
          </button>
        </div>
      </div>
    </header>
  );
}
