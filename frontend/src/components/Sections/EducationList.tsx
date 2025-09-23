import React from 'react'
import { Education } from '../../types/experience'

interface EducationListProps {
  educations: Education[]
}

export const EducationList: React.FC<EducationListProps> = ({ educations }) => (
  <div className="education-list">
    {Array.isArray(educations) && educations.length > 0 ? (
      educations.map(edu => (
        <div key={edu.id} className="education-item">
          <h3>{edu.degree}, {edu.field}</h3>
          <div className="education-meta">
            <span>{edu.institution}</span> | <span>{edu.period}</span> | <span>{edu.location}</span>
          </div>
          <p>{edu.description}</p>
        </div>
      ))
    ) : (
      <div style={{ color: '#888', padding: '1em 0' }}>Нет информации об образовании</div>
    )}
  </div>
)
