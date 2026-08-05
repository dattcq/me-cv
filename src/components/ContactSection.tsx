"use client";

import { PersonalInfo } from "@/types/cv";
import { Language, translations } from "@/constants/translations";
import styles from "./ContactSection.module.css";

interface ContactSectionProps {
  personalInfo: PersonalInfo;
  lang: Language;
}

export default function ContactSection({ personalInfo, lang }: ContactSectionProps) {
  const t = translations[lang].contact;
  const tAbout = translations[lang].about;

  return (
    <section id="contact" className={styles.section}>
      <h2 className="section-heading">
        <span>📫</span> {t.heading}
      </h2>

      <div className={`card-glass ${styles.mainCard}`}>
        <h3 className={styles.title}>
          {t.title}
        </h3>
        <p className={styles.description}>
          {t.description}
        </p>

        {/* Contact Info Cards */}
        <div className={`grid-3 ${styles.grid}`}>
          <div className={`card-glass ${styles.infoCard}`}>
            <div className={styles.infoLabel}>
              📍 {tAbout.addressLabel}
            </div>
            <div className={styles.infoText}>
              {personalInfo.address}
            </div>
          </div>

          <div className={`card-glass ${styles.infoCard}`}>
            <div className={styles.infoLabel}>
              📧 {tAbout.emailLabel}
            </div>
            <a
              href={`mailto:${personalInfo.email}`}
              className={styles.infoLink}
            >
              {personalInfo.email}
            </a>
          </div>

          <div className={`card-glass ${styles.infoCard}`}>
            <div className={styles.infoLabel}>
              📞 {tAbout.phoneLabel}
            </div>
            <a
              href={`tel:${personalInfo.phone.replace(/\s+/g, "")}`}
              className={styles.infoLink}
            >
              {personalInfo.phone}
            </a>
          </div>
        </div>

        {/* Action Button: GitHub */}
        <div className={styles.actionsContainer}>
          <a
            href="https://github.com/dattcq"
            target="_blank"
            rel="noopener noreferrer"
            className={`btn-primary ${styles.githubBtn}`}
          >
            {t.github}
          </a>
        </div>

        <div className={styles.footerText}>
          © {new Date().getFullYear()} {personalInfo.name}. All rights reserved. Powered by Next.js & Firebase.
        </div>
      </div>
    </section>
  );
}
