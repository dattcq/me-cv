import React from 'react';
import { Education as EducationType } from '@/types/cv';
import styles from './Education.module.css';

interface EducationProps {
  education: EducationType[];
}

export default function Education({ education }: EducationProps) {
  return (
    <div className="card">
      <h2>🎓 Học vấn</h2>
      {education.map((edu, index) => (
        <div key={index} className={index !== education.length - 1 ? styles.itemMb : ''}>
          <div className="flex justify-between items-center">
            <p className={styles.school}><strong>{edu.school}</strong></p>
            <span className={styles.period}>{edu.period}</span>
          </div>
          <p className="mt-4 text-secondary">Chuyên ngành: {edu.major}</p>
        </div>
      ))}
    </div>
  );
}
