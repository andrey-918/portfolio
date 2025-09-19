import React from 'react'
import { Education } from '../../types/experience'

interface EducationListProps {
  educations: Education[]
}

export const EducationList: React.FC<EducationListProps> = ({ educations }) => (
  <div className="education-list">
    {educations.map(edu => (
      <div key={edu.id} className="education-item">
        <h3>{edu.degree}, {edu.field}</h3>
        <div className="education-meta">
          <span>{edu.institution}</span> | <span>{edu.period}</span> | <span>{edu.location}</span>
        </div>
        <p>{edu.description}</p>
      </div>
    ))}
  </div>
)
