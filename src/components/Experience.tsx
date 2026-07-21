
import { Experience as ExperienceType } from '@/types/cv';
import styles from './Experience.module.css';

interface ExperienceProps {
  experience: ExperienceType[];
}

export default function Experience({ experience }: ExperienceProps) {
  return (
    <div className="card">
      <h2>💼 Kinh nghiệm làm việc</h2>
      {experience.map((exp, index) => (
        <div key={`${exp.company}-${exp.period}`} className={index !== experience.length - 1 ? styles.itemMb : ''}>
          <div className="flex justify-between items-center">
            <h3 className={`font-bold ${styles.company}`}>{exp.company}</h3>
            <span className={styles.period}>{exp.period}</span>
          </div>
          <p className="font-bold text-accent mt-4">{exp.role}</p>
          <p className={styles.description}>{exp.description}</p>
          
          {exp.projects && exp.projects.map((proj, idx) => (
            <div key={idx} className={`mt-4 ${styles.projectWrapper}`}>
              <strong className={styles.projectName}>{proj.name}</strong>
              <ul className="mt-4">
                {proj.details.map((detail, i) => (
                  <li key={`detail-${proj.name}-${i}`}>{detail}</li>
                ))}
              </ul>
            </div>
          ))}

          {exp.details && (
            <ul className="mt-4">
              {exp.details.map((detail, i) => (
                <li key={`exp-detail-${exp.company}-${i}`}>{detail}</li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </div>
  );
}
