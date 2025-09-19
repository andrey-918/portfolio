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
        {experiences.map(exp => (
          <div key={exp.id} className="timeline-item">
            <div className="timeline-marker"></div>
            <div className="timeline-content">
              <h3>{exp.position}</h3>
              <h4>
                {exp.company}
                {exp.current && <span className="current-badge"> • Текущее место</span>}
              </h4>
              <p className="period">{exp.period} • {exp.location}</p>
              <p className="description">{exp.description}</p>
              <div className="technologies">
                {exp.technologies.map(tech => (
                  <span key={tech} className="tech-tag">{tech}</span>
                ))}
              </div>
              <ul className="achievements">
                {exp.achievements.map((achievement, index) => (
                  <li key={index}>✅ {achievement}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
)