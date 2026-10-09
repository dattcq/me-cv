"use client";

import { useEffect, useState, useMemo } from "react";
import { Language, translations } from "@/constants/translations";
import styles from "./SideNavbar.module.css";

interface SideNavbarProps {
  lang: Language;
}

interface NavItem {
  id: string;
  icon: string;
  label: string;
}

export default function SideNavbar({ lang }: SideNavbarProps) {
  const t = translations[lang].nav;
  const [activeSection, setActiveSection] = useState<string>("about");

  const navItems: NavItem[] = useMemo(
    () => [
      { id: "about", icon: "👨‍💻", label: t.about },
      { id: "skills", icon: "⚡", label: t.skills },
      { id: "experience", icon: "💼", label: t.experience },
      { id: "projects", icon: "🚀", label: t.projects },
      { id: "education", icon: "🎓", label: t.education },
      { id: "contact", icon: "✉️", label: t.contact },
    ],
    [t.about, t.skills, t.experience, t.projects, t.education, t.contact]
  );

  useEffect(() => {
    const handleScroll = () => {
      const sectionIds = navItems.map((item) => item.id);
      const scrollPosition = window.scrollY + 200; // Offset for header trigger

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const element = document.getElementById(sectionIds[i]);
        if (element && element.offsetTop <= scrollPosition) {
          setActiveSection(sectionIds[i]);
          return;
        }
      }

      // Default to first section if at top
      if (sectionIds.length > 0) {
        setActiveSection(sectionIds[0]);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [navItems]);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const target = document.getElementById(id);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
      setActiveSection(id);
    }
  };

  return (
    <nav className={styles.sideNavContainer} aria-label="Quick Section Navigation">
      {navItems.map((item) => {
        const isActive = activeSection === item.id;
        return (
          <a
            key={item.id}
            href={`#${item.id}`}
            onClick={(e) => scrollToSection(e, item.id)}
            className={`${styles.navItem} ${isActive ? styles.activeItem : ""}`}
            aria-label={item.label}
            aria-current={isActive ? "page" : undefined}
          >
            <span className={styles.icon}>{item.icon}</span>
            <span className={styles.label}>{item.label}</span>
            {isActive && <span className={styles.indicator} />}
          </a>
        );
      })}
    </nav>
  );
}
