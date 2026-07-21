import React from 'react';

interface SkillsProps {
  skills: Record<string, string>;
}

export default function Skills({ skills }: SkillsProps) {
  return (
    <div className="card">
      <h2>💻 Kỹ năng chuyên môn</h2>
      <ul>
        {Object.entries(skills).map(([category, details]) => (
          <li key={category}><strong>{category}:</strong> {details}</li>
        ))}
      </ul>
    </div>
  );
}
