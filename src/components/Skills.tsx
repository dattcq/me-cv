

interface SkillsProps {
  skills: Record<string, string>;
}

import styles from './Skills.module.css';

export default function Skills({ skills }: SkillsProps) {
  return (
    <div className={`card ${styles.wrapper}`}>
      <h2>💻 Kỹ năng chuyên môn</h2>
      <ul>
        {Object.entries(skills).map(([category, details]) => (
          <li key={category}><strong>{category}:</strong> {details}</li>
        ))}
      </ul>
    </div>
  );
}
