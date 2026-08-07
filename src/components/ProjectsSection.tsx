"use client";

import { PersonalProject } from "@/types/cv";
import { Language, translations } from "@/constants/translations";
import styles from "./ProjectsSection.module.css";

interface ProjectsSectionProps {
  projects: PersonalProject[];
  lang: Language;
}

export default function ProjectsSection({ projects, lang }: ProjectsSectionProps) {
  const t = translations[lang].projects;

  if (!projects || projects.length === 0) return null;

  return (
    <section id="projects" className={styles.section}>
      <h2 className="section-heading">
        <span>🚀</span> {t.heading}
      </h2>

      <div className={styles.projectsStack}>
        {projects.map((project, index) => {
          const techStackLine = project.details.find((d) => d.startsWith("Tech Stack:"));
          const repoLine = project.details.find((d) => d.startsWith("Mã nguồn:") || d.startsWith("Source Code:"));
          const descriptionLine = project.details.find((d) => d.startsWith("Mô tả:") || d.startsWith("Description:"));
          const bulletDetails = project.details.filter(
            (d) => !d.startsWith("Tech Stack:") && !d.startsWith("Mã nguồn:") && !d.startsWith("Source Code:") && !d.startsWith("Mô tả:") && !d.startsWith("Description:")
          );

          const repoUrl = repoLine ? repoLine.replace(/Mã nguồn:|Source Code:/, "").trim() : null;

          return (
            <div key={index} className={`card-glass ${styles.projectCard}`}>
              <div className={styles.cardHeader}>
                <div>
                  <h3 className={styles.projectName}>
                    {project.name}
                  </h3>
                  <div className={styles.projectRole}>
                    👤 {t.roleLabel}: {project.role}
                  </div>
                </div>

                <span className={`badge ${styles.periodBadge}`}>
                  📅 {project.period}
                </span>
              </div>

              {descriptionLine && (
                <p className={styles.description}>
                  {descriptionLine.replace(/Mô tả:|Description:/, "").trim()}
                </p>
              )}

              {bulletDetails.length > 0 && (
                <ul className={styles.detailList}>
                  {bulletDetails.map((detail, dIndex) => (
                    <li key={dIndex} className={styles.detailItem}>
                      {detail}
                    </li>
                  ))}
                </ul>
              )}

              {techStackLine && (
                <div className={styles.techStackWrapper}>
                  <div className={styles.techStackLabel}>
                    {t.techStackLabel}
                  </div>
                  <div className={styles.techBadges}>
                    {techStackLine
                      .replace("Tech Stack:", "")
                      .split(",")
                      .map((tech, tIndex) => (
                        <span key={tIndex} className={`badge ${styles.techBadge}`}>
                          {tech.trim()}
                        </span>
                      ))}
                  </div>
                </div>
              )}

              {repoUrl && (
                <div className={styles.repoWrapper}>
                  <a
                    href={repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`btn-secondary ${styles.repoBtn}`}
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
