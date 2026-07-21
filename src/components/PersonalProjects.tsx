import React from 'react';
import { PersonalProject } from '@/types/cv';
import styles from './PersonalProjects.module.css';

interface PersonalProjectsProps {
  projects: PersonalProject[];
}

export default function PersonalProjects({ projects }: PersonalProjectsProps) {
  if (!projects || projects.length === 0) return null;

  return (
    <div className="card">
      <h2>🚀 Dự án cá nhân</h2>
      {projects.map((proj, index) => (
        <div key={index} className={index !== projects.length - 1 ? styles.itemMb : ''}>
          <div className="flex justify-between items-center">
            <h3 className={`font-bold ${styles.name}`}>{proj.name}</h3>
            <span className={styles.period}>{proj.period}</span>
          </div>
          <p className="font-bold text-accent mt-4">{proj.role}</p>
          <ul className="mt-4">
            {proj.details.map((detail, i) => (
              <li key={i}>{detail}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
