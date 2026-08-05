"use client";

import { CareerObjective } from "@/types/cv";
import { Language, translations } from "@/constants/translations";
import styles from "./AboutSection.module.css";

interface AboutSectionProps {
  objective: CareerObjective;
  lang: Language;
}

export default function AboutSection({ objective, lang }: AboutSectionProps) {
  const t = translations[lang].about;

  return (
    <section id="about" className={styles.section}>
      <h2 className="section-heading">
        <span>👨‍💻</span> {t.heading}
      </h2>

      <div className={styles.grid}>
        {/* Left Column: Vertical Stat Cards Stack */}
        <div className={styles.leftColumn}>
          <div className={`card-glass ${styles.statCard}`}>
            <div className={styles.statNumber}>
              {t.stat1Number}
            </div>
            <div className={styles.statTitle}>
              {t.stat1Title}
            </div>
            <div className={styles.statDesc}>
              {t.stat1Desc}
            </div>
          </div>

          <div className={`card-glass ${styles.statCard}`}>
            <div className={styles.statNumber}>
              {t.stat2Number}
            </div>
            <div className={styles.statTitle}>
              {t.stat2Title}
            </div>
            <div className={styles.statDesc}>
              {t.stat2Desc}
            </div>
          </div>
        </div>

        {/* Middle Column: Merged Profile & Career Goal */}
        <div className={`card-glass ${styles.profileCard}`}>
          <h3 className={styles.profileTitle}>
            {t.profileTitle}
          </h3>
          <p className={styles.profileSummary}>
            {objective.summary}
          </p>
          <div className={styles.goalDivider}>
            <p className={styles.goalText}>
              💡 <strong>{lang === "vi" ? "Định hướng: " : "Objective: "}</strong>
              {objective.goal}
            </p>
          </div>
        </div>

        {/* Right Column: Circular Zoomed Avatar Frame */}
        <div className={styles.avatarColumn}>
          <div className="avatar-circle-wrapper">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/avatar.jpg"
              alt="Trương Công Quốc Đạt"
              className="avatar-circle-img"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
