import React from 'react';
import { PersonalInfo } from '@/types/cv';
import styles from './Header.module.css';

interface HeaderProps {
  personalInfo: PersonalInfo;
}

export default function Header({ personalInfo }: HeaderProps) {
  return (
    <div className="card">
      <div className="flex justify-between items-center">
        <h1 className={`text-accent ${styles.name}`}>{personalInfo.name}</h1>
        <button 
          className={`no-print ${styles.printButton}`}
          onClick={() => window.print()}
        >
          📥 Xuất PDF
        </button>
      </div>
      <p className={`font-bold mt-4 ${styles.title}`}>{personalInfo.title}</p>
      <div className={`flex gap-4 mt-4 ${styles.contactInfo}`}>
        <p>📞 {personalInfo.phone}</p>
        <p>✉️ {personalInfo.email}</p>
        <p>📍 {personalInfo.address}</p>
      </div>
    </div>
  );
}
