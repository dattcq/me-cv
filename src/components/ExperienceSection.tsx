"use client";

import { Experience } from "@/types/cv";
import { Language, translations } from "@/constants/translations";

interface ExperienceSectionProps {
  experience: Experience[];
  lang: Language;
}

export default function ExperienceSection({ experience, lang }: ExperienceSectionProps) {
  const t = translations[lang].experience;

  return (
    <section id="experience" style={{ padding: "4rem 0" }}>
      <h2 className="section-heading">
        <span>💼</span> {t.heading}
      </h2>

      <div className="timeline">
        {experience.map((exp, index) => (
          <div key={index} className="timeline-item">
            <div className="timeline-dot" />

            <div className="card-glass">
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                  flexWrap: "wrap",
                  gap: "0.75rem",
                  marginBottom: "1rem",
                }}
              >
                <div>
                  <h3 style={{ fontSize: "1.35rem", fontWeight: 800, margin: 0 }}>
                    {exp.company}
                  </h3>
                  <div
                    style={{
                      fontSize: "1.1rem",
                      fontWeight: 700,
                      color: "var(--accent-primary)",
                      marginTop: "0.35rem",
                    }}
                  >
                    {exp.role}
                  </div>
                </div>

                <span
                  className="badge"
                  style={{
                    backgroundColor: "var(--accent-primary)",
                    color: "#ffffff",
                    borderColor: "transparent",
                    padding: "0.45rem 1rem",
                  }}
                >
                  📅 {exp.period}
                </span>
              </div>

              <p style={{ fontStyle: "italic", marginBottom: "1.5rem", fontSize: "1rem" }}>
                {exp.description}
              </p>

              {/* Sub-projects list */}
              {exp.projects && exp.projects.length > 0 && (
                <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
                  {exp.projects.map((proj, pIndex) => {
                    const techStackLine = proj.details.find((d) => d.startsWith("Tech Stack:"));
                    const otherDetails = proj.details.filter((d) => !d.startsWith("Tech Stack:"));

                    return (
                      <div
                        key={pIndex}
                        style={{
                          background: "var(--bg-color)",
                          padding: "1.35rem",
                          borderRadius: "14px",
                          border: "1px solid var(--card-border)",
                        }}
                      >
                        <h4
                          style={{
                            fontSize: "1.1rem",
                            fontWeight: 700,
                            marginBottom: "0.75rem",
                            color: "var(--text-primary)",
                          }}
                        >
                          {proj.name}
                        </h4>

                        <ul
                          style={{
                            paddingLeft: "1.25rem",
                            marginBottom: techStackLine ? "1rem" : 0,
                          }}
                        >
                          {otherDetails.map((detail, dIndex) => (
                            <li
                              key={dIndex}
                              style={{
                                fontSize: "0.95rem",
                                marginBottom: "0.5rem",
                                color: "var(--text-secondary)",
                                lineHeight: 1.6,
                              }}
                            >
                              {detail}
                            </li>
                          ))}
                        </ul>

                        {techStackLine && (
                          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem" }}>
                            {techStackLine
                              .replace("Tech Stack:", "")
                              .split(",")
                              .map((tech, tIndex) => (
                                <span
                                  key={tIndex}
                                  className="badge"
                                  style={{ fontSize: "0.775rem", padding: "0.25rem 0.65rem" }}
                                >
                                  {tech.trim()}
                                </span>
                              ))}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              )}

              {/* General details list */}
              {exp.details && exp.details.length > 0 && (
                <div
                  style={{
                    background: "var(--bg-color)",
                    padding: "1.35rem",
                    borderRadius: "14px",
                    border: "1px solid var(--card-border)",
                  }}
                >
                  <ul style={{ paddingLeft: "1.25rem", margin: 0 }}>
                    {exp.details.map((detail, dIndex) => (
                      <li
                        key={dIndex}
                        style={{
                          fontSize: "0.95rem",
                          marginBottom: "0.5rem",
                          color: "var(--text-secondary)",
                          lineHeight: 1.6,
                        }}
                      >
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
