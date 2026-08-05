"use client";

import { PersonalInfo } from "@/types/cv";
import { Language, translations } from "@/constants/translations";

interface HeroProps {
  personalInfo: PersonalInfo;
  lang: Language;
}

export default function Hero({ personalInfo, lang }: HeroProps) {
  const t = translations[lang].hero;

  return (
    <section id="hero" style={{ paddingTop: "3.5rem", paddingBottom: "3.5rem" }}>
      <div style={{ textAlign: "center", maxWidth: "850px", margin: "0 auto" }}>
        {/* Badge */}
        <div style={{ marginBottom: "2rem" }}>
          <span className="badge" style={{ fontSize: "0.925rem", padding: "0.45rem 1.15rem" }}>
            {t.badge}
          </span>
        </div>

        {/* Name Title with Diacritic Safe Formatting */}
        <h1
          style={{
            fontSize: "clamp(2.5rem, 5.5vw, 4rem)",
            fontWeight: 800,
            lineHeight: 1.2,
            marginBottom: "1rem",
            letterSpacing: "-0.02em",
          }}
        >
          <span className="gradient-text">{personalInfo.name}</span>
        </h1>

        {/* Subtitle Role */}
        <div
          style={{
            fontSize: "clamp(1.5rem, 3vw, 2.25rem)",
            fontWeight: 700,
            color: "var(--text-primary)",
            marginBottom: "2.25rem",
          }}
        >
          {t.subTitle}
        </div>

        {/* Description Paragraph */}
        <p
          style={{
            fontSize: "1.15rem",
            color: "var(--text-secondary)",
            marginBottom: "3.25rem",
            lineHeight: 1.8,
            maxWidth: "780px",
            margin: "0 auto 3.25rem auto",
          }}
        >
          {t.description}
        </p>

        {/* CTA Buttons */}
        <div
          style={{
            display: "flex",
            gap: "1.25rem",
            justifyContent: "center",
            flexWrap: "wrap",
          }}
          className="no-print"
        >
          <a href="#projects" className="btn-primary">
            {t.ctaProjects}
          </a>
          <a href="#about" className="btn-secondary">
            {t.ctaAbout}
          </a>
          <a href="#contact" className="btn-secondary">
            {t.ctaContact}
          </a>
        </div>
      </div>
    </section>
  );
}
