"use client";

import { useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "@/lib/firebase";

export default function CVPage() {
  const [cvData, setCvData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchData() {
      try {
        const docRef = doc(db, "cv_data", "truong_dat_profile");
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setCvData(docSnap.data());
        } else {
          setError("Chưa có dữ liệu CV. Hãy chờ hệ thống đẩy dữ liệu lên Firestore.");
        }
      } catch (err: any) {
        setError("Lỗi quyền truy cập Firebase: " + err.message);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  if (loading) return <div className="container"><div className="card">Đang tải dữ liệu CV...</div></div>;
  if (error) return <div className="container"><div className="card"><h3 className="text-accent">Thông báo</h3><p>{error}</p></div></div>;
  if (!cvData) return null;

  const { personal_info, education, career_objective, skills, experience, personal_projects } = cvData;

  return (
    <div className="container animate-fade-in">
      {/* Header */}
      <div className="card">
        <div className="flex justify-between items-center">
          <h1 className="text-accent" style={{ margin: 0, fontSize: '2.2rem' }}>{personal_info.name}</h1>
          <button 
            className="no-print"
            onClick={() => window.print()}
            style={{ padding: '10px 20px', background: 'var(--accent)', color: 'white', border: 'none', borderRadius: '8px', cursor: 'pointer', fontWeight: 'bold', transition: 'opacity 0.2s' }}
            onMouseOver={(e) => e.currentTarget.style.opacity = '0.9'}
            onMouseOut={(e) => e.currentTarget.style.opacity = '1'}
          >
            📥 Xuất PDF
          </button>
        </div>
        <p className="font-bold mt-4" style={{ fontSize: '1.2rem', color: 'var(--text-secondary)' }}>{personal_info.title}</p>
        <div className="flex gap-4 mt-4" style={{ flexWrap: 'wrap' }}>
          <p>📞 {personal_info.phone}</p>
          <p>✉️ {personal_info.email}</p>
          <p>📍 {personal_info.address}</p>
        </div>
      </div>

      {/* Career Objective */}
      <div className="card">
        <h2>🎯 Mục tiêu nghề nghiệp</h2>
        <p><strong>Tóm tắt:</strong> {career_objective.summary}</p>
        <p className="mt-4"><strong>Mục tiêu:</strong> {career_objective.goal}</p>
      </div>

      {/* Skills */}
      <div className="card">
        <h2>💻 Kỹ năng chuyên môn</h2>
        <ul>
          {Object.entries(skills).map(([category, details]) => (
            <li key={category}><strong>{category}:</strong> {details as string}</li>
          ))}
        </ul>
      </div>

      {/* Experience */}
      <div className="card">
        <h2>💼 Kinh nghiệm làm việc</h2>
        {experience.map((exp: any, index: number) => (
          <div key={index} style={{ marginBottom: index !== experience.length - 1 ? '2.5rem' : '0' }}>
            <div className="flex justify-between items-center">
              <h3 className="font-bold" style={{ margin: 0, color: 'var(--text-primary)' }}>{exp.company}</h3>
              <span style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', fontWeight: 'bold' }}>{exp.period}</span>
            </div>
            <p className="font-bold text-accent mt-4">{exp.role}</p>
            <p style={{ fontStyle: 'italic' }}>{exp.description}</p>
            
            {exp.projects && exp.projects.map((proj: any, idx: number) => (
              <div key={idx} className="mt-4" style={{ paddingLeft: '1rem', borderLeft: '2px solid var(--border)' }}>
                <strong style={{ color: 'var(--text-primary)' }}>{proj.name}</strong>
                <ul className="mt-4">
                  {proj.details.map((detail: string, i: number) => (
                    <li key={i}>{detail}</li>
                  ))}
                </ul>
              </div>
            ))}

            {exp.details && (
              <ul className="mt-4">
                {exp.details.map((detail: string, i: number) => (
                  <li key={i}>{detail}</li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>

      {/* Personal Projects */}
      {personal_projects && personal_projects.length > 0 && (
        <div className="card">
          <h2>🚀 Dự án cá nhân</h2>
          {personal_projects.map((proj: any, index: number) => (
            <div key={index} style={{ marginBottom: index !== personal_projects.length - 1 ? '2rem' : '0' }}>
              <div className="flex justify-between items-center">
                <h3 className="font-bold" style={{ margin: 0 }}>{proj.name}</h3>
                <span style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', fontWeight: 'bold' }}>{proj.period}</span>
              </div>
              <p className="font-bold text-accent mt-4">{proj.role}</p>
              <ul className="mt-4">
                {proj.details.map((detail: string, i: number) => (
                  <li key={i}>{detail}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}

      {/* Education */}
      <div className="card">
        <h2>🎓 Học vấn</h2>
        {education.map((edu: any, index: number) => (
          <div key={index}>
            <div className="flex justify-between items-center">
              <p style={{ margin: 0 }}><strong>{edu.school}</strong></p>
              <span style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', fontWeight: 'bold' }}>{edu.period}</span>
            </div>
            <p className="mt-4" style={{ color: 'var(--text-secondary)' }}>Chuyên ngành: {edu.major}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
