"use client";

import { PersonalInfo } from "@/types/cv";
import { Language, translations } from "@/constants/translations";

interface ContactSectionProps {
  personalInfo: PersonalInfo;
  lang: Language;
}

export default function ContactSection({ personalInfo, lang }: ContactSectionProps) {
  const t = translations[lang].contact;
  const tAbout = translations[lang].about;

  return (
    <section id="contact" style={{ paddingTop: "4rem", paddingBottom: "3rem" }}>
      <h2 className="section-heading">
        <span>📫</span> {t.heading}
      </h2>

      <div className="card-glass" style={{ textAlign: "center", padding: "3.5rem 2rem" }}>
        <h3 style={{ fontSize: "1.85rem", fontWeight: 800, marginBottom: "1rem" }}>
          {t.title}
        </h3>
        <p style={{ maxWidth: "650px", margin: "0 auto 2rem auto", color: "var(--text-secondary)", fontSize: "1.05rem", lineHeight: 1.8 }}>
          {t.description}
        </p>

        {/* Contact Info Cards */}
        <div className="grid-3" style={{ textAlign: "left", marginBottom: "2.5rem" }}>
          <div className="card-glass" style={{ padding: "1.25rem 1.5rem" }}>
            <div style={{ fontSize: "0.85rem", fontWeight: 700, textTransform: "uppercase", color: "var(--accent-primary)", marginBottom: "0.25rem" }}>
              📍 {tAbout.addressLabel}
            </div>
            <div style={{ fontWeight: 600, fontSize: "0.95rem", color: "var(--text-primary)" }}>
              {personalInfo.address}
            </div>
          </div>

          <div className="card-glass" style={{ padding: "1.25rem 1.5rem" }}>
            <div style={{ fontSize: "0.85rem", fontWeight: 700, textTransform: "uppercase", color: "var(--accent-primary)", marginBottom: "0.25rem" }}>
              📧 {tAbout.emailLabel}
            </div>
            <a
              href={`mailto:${personalInfo.email}`}
              style={{ fontWeight: 600, fontSize: "0.95rem", color: "var(--accent-primary)", textDecoration: "none" }}
            >
              {personalInfo.email}
            </a>
          </div>

          <div className="card-glass" style={{ padding: "1.25rem 1.5rem" }}>
            <div style={{ fontSize: "0.85rem", fontWeight: 700, textTransform: "uppercase", color: "var(--accent-primary)", marginBottom: "0.25rem" }}>
              📞 {tAbout.phoneLabel}
            </div>
            <a
              href={`tel:${personalInfo.phone.replace(/\s+/g, "")}`}
              style={{ fontWeight: 600, fontSize: "0.95rem", color: "var(--accent-primary)", textDecoration: "none" }}
            >
              {personalInfo.phone}
            </a>
          </div>
        </div>

        {/* CTA Action Buttons */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "1.25rem",
            flexWrap: "wrap",
            marginBottom: "2rem",
          }}
        >
          <a
            href={`mailto:${personalInfo.email}`}
            className="btn-primary"
            style={{ textDecoration: "none" }}
          >
            {t.sendEmail}
          </a>
          <a
            href={`tel:${personalInfo.phone.replace(/\s+/g, "")}`}
            className="btn-secondary"
            style={{ textDecoration: "none" }}
          >
            {t.callNow}
          </a>
          <a
            href="https://github.com/dattcq"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary"
            style={{ textDecoration: "none" }}
          >
            {t.github}
          </a>
        </div>

        <div style={{ fontSize: "0.9rem", color: "var(--text-secondary)", marginTop: "2.5rem", borderTop: "1px solid var(--card-border)", paddingTop: "1.75rem" }}>
          © {new Date().getFullYear()} {personalInfo.name}. All rights reserved. Powered by Next.js & Firebase.
        </div>
      </div>
    </section>
  );
}
