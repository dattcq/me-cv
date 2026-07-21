import React from 'react';
import { CareerObjective as CareerObjectiveType } from '@/types/cv';

interface CareerObjectiveProps {
  objective: CareerObjectiveType;
}

export default function CareerObjective({ objective }: CareerObjectiveProps) {
  return (
    <div className="card">
      <h2>🎯 Mục tiêu nghề nghiệp</h2>
      <p><strong>Tóm tắt:</strong> {objective.summary}</p>
      <p className="mt-4"><strong>Mục tiêu:</strong> {objective.goal}</p>
    </div>
  );
}
