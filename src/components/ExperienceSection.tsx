"use client";

import { Experience } from "@/types/cv";
import { Language, translations } from "@/constants/translations";
import styles from "./ExperienceSection.module.css";

interface ExperienceSectionProps {
  experience: Experience[];
  lang: Language;
}

export default function ExperienceSection({ experience, lang }: ExperienceSectionProps) {
  const t = translations[lang].experience;

  return (
    <section id="experience" className={styles.section}>
      <h2 className="section-heading">
        <span>💼</span> {t.heading}
      </h2>

      <div className="timeline">
        {experience.map((exp, index) => (
          <div key={index} className="timeline-item">
            <div className="timeline-dot" />

            <div className="card-glass">
              <div className={styles.header}>
                <div>
                  <h3 className={styles.company}>
                    {exp.company}
                  </h3>
                  <div className={styles.role}>
                    {exp.role}
                  </div>
                </div>

                <span className={`badge ${styles.periodBadge}`}>
                  📅 {exp.period}
                </span>
              </div>

              <p className={styles.description}>
                {exp.description}
              </p>

              {/* Sub-projects list */}
              {exp.projects && exp.projects.length > 0 && (
                <div className={styles.projectsContainer}>
                  {exp.projects.map((proj, pIndex) => {
                    const techStackLine = proj.details.find((d) => d.startsWith("Tech Stack:"));
                    const otherDetails = proj.details.filter((d) => !d.startsWith("Tech Stack:"));

                    return (
                      <div key={pIndex} className={styles.projectCard}>
                        <h4 className={styles.projectName}>
                          {proj.name}
                        </h4>

                        <ul className={techStackLine ? styles.detailsListWithTech : styles.detailsList}>
                          {otherDetails.map((detail, dIndex) => (
                            <li key={dIndex} className={styles.detailItem}>
                              {detail}
                            </li>
                          ))}
                        </ul>

                        {techStackLine && (
                          <div className={styles.techStackContainer}>
                            {techStackLine
                              .replace("Tech Stack:", "")
                              .split(",")
                              .map((tech, tIndex) => (
                                <span key={tIndex} className={`badge ${styles.techBadge}`}>
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
                <div className={styles.projectCard}>
                  <ul className={styles.detailsList}>
                    {exp.details.map((detail, dIndex) => (
                      <li key={dIndex} className={styles.detailItem}>
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
