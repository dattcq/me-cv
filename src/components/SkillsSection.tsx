"use client";

import { Language, translations } from "@/constants/translations";

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
    <section id="skills" style={{ padding: "4rem 0" }}>
      <h2 className="section-heading">
        <span>⚡</span> {t.heading}
      </h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
          gap: "2rem",
          alignItems: "stretch",
        }}
      >
        {Object.entries(skills).map(([category, itemsStr]) => {
          const items = itemsStr.split(",").map((item) => item.trim());
          const icon = getCategoryIcon(category);

          return (
            <div
              key={category}
              className="card-glass"
              style={{ display: "flex", flexDirection: "column", height: "100%", padding: "2rem" }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.6rem",
                  fontSize: "1.15rem",
                  fontWeight: 700,
                  marginBottom: "1.25rem",
                  color: "var(--text-primary)",
                }}
              >
                <span>{icon}</span>
                <span>{category}</span>
              </div>

              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.6rem", marginTop: "auto" }}>
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
