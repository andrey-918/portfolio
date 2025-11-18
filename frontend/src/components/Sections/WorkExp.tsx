import React from 'react'
import { WorkExperience } from '../../types/experience'
import '../../styles/WorkExp.css'

interface WorkExpProps {
  experiences: WorkExperience[]
}

export const WorkExp: React.FC<WorkExpProps> = ({ experiences }) => (
  <div className="workexp-page">
    <div className="container">
      <div className="timeline">
        {Array.isArray(experiences) && experiences.length > 0 ? (
          experiences.map(exp => (
            <div key={exp.id} className="timeline-item">
              <div className="timeline-content">
                <h3>{exp.position}</h3>
                <h4>
                  {exp.company}
                  {exp.current && <span className="current-badge"> • Текущее место</span>}
                </h4>
                <p className="period">{exp.period} • {exp.location}</p>
                <p className="description">{exp.description}</p>
                <div className="technologies">
                  {Array.isArray(exp.technologies) && exp.technologies.length > 0 && exp.technologies.map(tech => (
                    <span key={tech} className="tech-tag">{tech}</span>
                  ))}
                </div>
                <ul className="achievements">
                  {Array.isArray(exp.achievements) && exp.achievements.length > 0 && exp.achievements.map((achievement, index) => (
                    <li key={index}>✅ {achievement}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))
        ) : (
          <div style={{ color: '#888', padding: '1em 0' }}>Нет опыта работы</div>
        )}
      </div>
    </div>
  </div>
)