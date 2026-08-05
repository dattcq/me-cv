"use client";

import { PersonalProject } from "@/types/cv";
import { Language, translations } from "@/constants/translations";

interface ProjectsSectionProps {
  projects: PersonalProject[];
  lang: Language;
}

export default function ProjectsSection({ projects, lang }: ProjectsSectionProps) {
  const t = translations[lang].projects;

  if (!projects || projects.length === 0) return null;

  return (
    <section id="projects" style={{ padding: "4rem 0" }}>
      <h2 className="section-heading">
        <span>🚀</span> {t.heading}
      </h2>

      <div className="grid-2">
        {projects.map((project, index) => {
          const techStackLine = project.details.find((d) => d.startsWith("Tech Stack:"));
          const repoLine = project.details.find((d) => d.startsWith("Mã nguồn:") || d.startsWith("Source Code:"));
          const descriptionLine = project.details.find((d) => d.startsWith("Mô tả:") || d.startsWith("Description:"));
          const bulletDetails = project.details.filter(
            (d) => !d.startsWith("Tech Stack:") && !d.startsWith("Mã nguồn:") && !d.startsWith("Source Code:") && !d.startsWith("Mô tả:") && !d.startsWith("Description:")
          );

          const repoUrl = repoLine ? repoLine.replace(/Mã nguồn:|Source Code:/, "").trim() : null;

          return (
            <div key={index} className="card-glass" style={{ display: "flex", flexDirection: "column" }}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                  gap: "0.75rem",
                  marginBottom: "1rem",
                }}
              >
                <div>
                  <h3 style={{ fontSize: "1.3rem", fontWeight: 800, margin: 0 }}>
                    {project.name}
                  </h3>
                  <div
                    style={{
                      fontSize: "0.975rem",
                      fontWeight: 600,
                      color: "var(--accent-primary)",
                      marginTop: "0.3rem",
                    }}
                  >
                    👤 {t.roleLabel}: {project.role}
                  </div>
                </div>

                <span className="badge" style={{ whiteSpace: "nowrap" }}>
                  📅 {project.period}
                </span>
              </div>

              {descriptionLine && (
                <p style={{ fontWeight: 500, color: "var(--text-primary)", marginBottom: "1.25rem", lineHeight: 1.7 }}>
                  {descriptionLine.replace(/Mô tả:|Description:/, "").trim()}
                </p>
              )}

              {bulletDetails.length > 0 && (
                <ul
                  style={{
                    paddingLeft: "1.25rem",
                    marginBottom: "1.25rem",
                    flex: 1,
                  }}
                >
                  {bulletDetails.map((detail, dIndex) => (
                    <li
                      key={dIndex}
                      style={{
                        fontSize: "0.925rem",
                        marginBottom: "0.5rem",
                        color: "var(--text-secondary)",
                        lineHeight: 1.6,
                      }}
                    >
                      {detail}
                    </li>
                  ))}
                </ul>
              )}

              {techStackLine && (
                <div style={{ marginTop: "auto", paddingTop: "1rem" }}>
                  <div
                    style={{
                      fontSize: "0.8rem",
                      fontWeight: 700,
                      textTransform: "uppercase",
                      color: "var(--text-secondary)",
                      marginBottom: "0.6rem",
                      letterSpacing: "0.05em",
                    }}
                  >
                    {t.techStackLabel}
                  </div>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem" }}>
                    {techStackLine
                      .replace("Tech Stack:", "")
                      .split(",")
                      .map((tech, tIndex) => (
                        <span key={tIndex} className="badge" style={{ fontSize: "0.775rem" }}>
                          {tech.trim()}
                        </span>
                      ))}
                  </div>
                </div>
              )}

              {repoUrl && (
                <div style={{ marginTop: "1.25rem", paddingTop: "1rem", borderTop: "1px dashed var(--card-border)" }}>
                  <a
                    href={repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-secondary"
                    style={{ padding: "0.5rem 1rem", fontSize: "0.875rem", width: "fit-content" }}
                  >
                    {t.sourceCode}
                  </a>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
