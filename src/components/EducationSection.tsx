"use client";

import { Education } from "@/types/cv";
import { Language, translations } from "@/constants/translations";

interface EducationSectionProps {
  education: Education[];
  lang: Language;
}

export default function EducationSection({ education, lang }: EducationSectionProps) {
  const t = translations[lang].education;

  return (
    <section id="education" style={{ padding: "4rem 0" }}>
      <h2 className="section-heading">
        <span>🎓</span> {t.heading}
      </h2>

      <div className="grid-2">
        {education.map((item, index) => (
          <div key={index} className="card-glass">
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "flex-start",
                gap: "0.75rem",
                marginBottom: "0.75rem",
              }}
            >
              <h3 style={{ fontSize: "1.25rem", fontWeight: 800, margin: 0 }}>
                🏫 {item.school}
              </h3>
              <span className="badge">📅 {item.period}</span>
            </div>

            <p style={{ fontWeight: 600, color: "var(--accent-primary)", margin: 0, fontSize: "1.025rem" }}>
              {t.majorLabel}: {item.major}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
