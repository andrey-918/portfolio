import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { WorkExperience } from '../../types/experience'
import '../../styles/WorkExp.css'

interface WorkExpProps {
  experiences?: WorkExperience[]
}

export const WorkExp: React.FC<WorkExpProps> = ({ experiences: propExperiences }) => {
  const [experiences, setExperiences] = useState<WorkExperience[]>(propExperiences || [])
  const [loading, setLoading] = useState(!propExperiences)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    if (propExperiences) {
      setExperiences(propExperiences)
      setLoading(false)
      return
    }

    const cached = localStorage.getItem('experience')
    if (cached) {
      setExperiences(JSON.parse(cached))
      setLoading(false)
    } else {
      setLoading(true)
    }

    axios.get<WorkExperience[]>('/api/experience')
      .then(res => {
        setExperiences(res.data)
        localStorage.setItem('experience', JSON.stringify(res.data))
        setError(null)
      })
      .catch(() => setError('Ошибка загрузки опыта работы'))
      .finally(() => setLoading(false))
  }, [propExperiences])

  return (
    <section className="work-exp">
      <h2>Опыт работы</h2>
      {loading && <div>Загрузка...</div>}
      {error && <div style={{color: 'red'}}>{error}</div>}
      <div className="work-exp-list">
        {Array.isArray(experiences) && experiences.length > 0 ? (
          experiences.map(exp => (
            <div key={exp.id} className="work-exp-item">
              <div className="work-exp-header">
                <h3>{exp.company}</h3>
                <span className="work-exp-period">{exp.period}</span>
              </div>
              <div className="work-exp-position">{exp.position}</div>
              <div className="work-exp-description">{exp.description}</div>
              <div className="work-exp-technologies">
                {Array.isArray(exp.technologies) && exp.technologies.length > 0 && exp.technologies.map(tech => (
                  <span key={tech} className="tech-tag">{tech}</span>
                ))}
              </div>
              <div className="work-exp-achievements">
                {exp.achievements && <p><strong>Достижения:</strong> {exp.achievements}</p>}
              </div>
              <div className="work-exp-location">
                {exp.location && <p><strong>Местоположение:</strong> {exp.location}</p>}
              </div>
            </div>
          ))
        ) : (
          <div style={{ color: '#888', padding: '1em 0' }}>Нет опыта работы</div>
        )}
      </div>
    </section>
  )
}
