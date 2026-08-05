"use client";

import { Education } from "@/types/cv";
import { Language, translations } from "@/constants/translations";
import styles from "./EducationSection.module.css";

interface EducationSectionProps {
  education: Education[];
  lang: Language;
}

export default function EducationSection({ education, lang }: EducationSectionProps) {
  const t = translations[lang].education;

  return (
    <section id="education" className={styles.section}>
      <h2 className="section-heading">
        <span>🎓</span> {t.heading}
      </h2>

      <div className="grid-2">
        {education.map((item, index) => (
          <div key={index} className="card-glass">
            <div className={styles.cardHeader}>
              <h3 className={styles.schoolName}>
                🏫 {item.school}
              </h3>
              <span className="badge">📅 {item.period}</span>
            </div>

            <p className={styles.majorText}>
              {t.majorLabel}: {item.major}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
