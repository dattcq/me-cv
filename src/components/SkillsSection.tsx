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
    if (category.includes("CI/CD") || category.includes("Automation")) return "🚀";
    return "🛠️";
  };

  const entries = Object.entries(skills);
  const nativeEntry = entries.find(([cat]) => cat.includes("Native") || cat.includes("Hardware"));
  const subEntries = entries.filter(([cat]) => !cat.includes("Native") && !cat.includes("Hardware"));

  return (
    <section id="skills" className={styles.section}>
      <h2 className="section-heading">
        <span>⚡</span> {t.heading}
      </h2>

      <div className={styles.container}>
        {/* Left Block: 6 smaller categories organized in an inner 3x2 grid */}
        <div className={`card-glass ${styles.leftBlock}`}>
          <div className={styles.subGrid}>
            {subEntries.map(([category, itemsStr]) => {
              const items = itemsStr.split(",").map((item) => item.trim());
              const icon = getCategoryIcon(category);

              return (
                <div key={category} className={styles.subCard}>
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
        </div>

        {/* Right Block: Native & Hardware */}
        {nativeEntry && (() => {
          const [category, itemsStr] = nativeEntry;
          const items = itemsStr.split(",").map((item) => item.trim());
          const icon = getCategoryIcon(category);

          return (
            <div className={`card-glass ${styles.rightBlock}`}>
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
        })()}
      </div>
    </section>
  );
}
