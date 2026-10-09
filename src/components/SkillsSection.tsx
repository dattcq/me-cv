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
    if (category.includes("Phương pháp") || category.includes("Methodology") || category.includes("Kiến trúc")) return "🛠️";
    if (category.includes("State")) return "🧩";
    if (category.includes("eKYC") || category.includes("Bảo mật") || category.includes("Security")) return "🛡️";
    if (category.includes("Native") || category.includes("Hardware")) return "📲";
    if (category.includes("Networking") || category.includes("Backend")) return "🌐";
    if (category.includes("Cơ sở dữ liệu") || category.includes("Database") || category.includes("Local")) return "💾";
    if (category.includes("CI/CD") || category.includes("DevOps") || category.includes("Automation")) return "🚀";
    if (category.includes("Công cụ") || category.includes("Tools")) return "⚡";
    return "💻";
  };

  const entries = Object.entries(skills);

  return (
    <section id="skills" className={styles.section}>
      <h2 className="section-heading">
        <span>⚡</span> {t.heading}
      </h2>

      <div className={styles.grid}>
        {entries.map(([category, itemsStr]) => {
          const items = itemsStr.split(",").map((item) => item.trim());
          const icon = getCategoryIcon(category);

          return (
            <div key={category} className={`card-glass ${styles.card}`}>
              <div className={styles.header}>
                <span className={styles.icon}>{icon}</span>
                <span className={styles.title}>{category}</span>
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
