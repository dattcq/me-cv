"use client";

import { Language, translations } from "@/constants/translations";
import styles from "./SkillsSection.module.css";

interface SkillsSectionProps {
  skills: Record<string, string>;
  lang: Language;
}

export default function SkillsSection({ skills, lang }: SkillsSectionProps) {
  const t = translations[lang].skills;

  const getCategoryIcon = (category: string) => {
    if (category.includes("Ngôn ngữ") || category.includes("Language")) return "⚡";
    if (category.includes("State")) return "🧩";
    if (category.includes("Networking") || category.includes("Backend")) return "🌐";
    if (category.includes("Native") || category.includes("Hardware")) return "📲";
    if (category.includes("Cơ sở dữ liệu") || category.includes("Database") || category.includes("Local")) return "💾";
    return "🛠️";
  };

  return (
    <section id="skills" className={styles.section}>
      <h2 className="section-heading">
        <span>⚡</span> {t.heading}
      </h2>

      <div className={styles.grid}>
        {Object.entries(skills).map(([category, itemsStr]) => {
          const items = itemsStr.split(",").map((item) => item.trim());
          const icon = getCategoryIcon(category);

          return (
            <div
              key={category}
              className={`card-glass ${styles.card}`}
            >
              <div className={styles.header}>
                <span>{icon}</span>
                <span>{category}</span>
              </div>

              <div className={styles.badges}>
                {items.map((item, index) => (
                  <span key={index} className="badge">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
