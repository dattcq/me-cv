
import { CareerObjective as CareerObjectiveType } from '@/types/cv';

interface CareerObjectiveProps {
  objective: CareerObjectiveType;
}

import styles from './CareerObjective.module.css';

export default function CareerObjective({ objective }: CareerObjectiveProps) {
  return (
    <div className={`card ${styles.wrapper}`}>
      <h2>🎯 Mục tiêu nghề nghiệp</h2>
      <p><strong>Tóm tắt:</strong> {objective.summary}</p>
      <p className="mt-4"><strong>Mục tiêu:</strong> {objective.goal}</p>
    </div>
  );
}
