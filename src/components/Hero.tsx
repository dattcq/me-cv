"use client";

import { PersonalInfo } from "@/types/cv";
import { Language, translations } from "@/constants/translations";
import styles from "./Hero.module.css";

interface HeroProps {
  personalInfo: PersonalInfo;
  lang: Language;
}

export default function Hero({ personalInfo, lang }: HeroProps) {
  const t = translations[lang].hero;

  return (
    <section id="hero" className={styles.heroSection}>
      <div className={styles.container}>
        {/* Badge */}
        <div className={styles.badgeWrapper}>
          <span className={`badge ${styles.badgeText}`}>
            {t.badge}
          </span>
        </div>

        {/* Name Title */}
        <h1 className={styles.nameTitle}>
          <span className="gradient-text">{personalInfo.name}</span>
        </h1>

        {/* Subtitle Role */}
        <div className={styles.subtitle}>
          {t.subTitle}
        </div>

        {/* Description Paragraph */}
        <p className={styles.description}>
          {t.description}
        </p>

        {/* CTA Buttons */}
        <div className={`${styles.ctaContainer} no-print`}>
          <a href="#experience" className="btn-primary">
            {t.ctaExperience}
          </a>
          <a href="#projects" className="btn-secondary">
            {t.ctaProjects}
          </a>
          <a href="#contact" className="btn-secondary">
            {t.ctaContact}
          </a>
        </div>
      </div>
    </section>
  );
}
