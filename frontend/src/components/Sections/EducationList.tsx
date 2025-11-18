import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Education } from '../../types/experience'

interface EducationListProps {
  educations?: Education[]
}

export const EducationList: React.FC<EducationListProps> = ({ educations: propEducations }) => {
  const [educations, setEducations] = useState<Education[]>(propEducations || [])
  const [loading, setLoading] = useState(!propEducations)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    if (propEducations) {
      setEducations(propEducations)
      setLoading(false)
      return
    }

    const cached = localStorage.getItem('education')
    if (cached) {
      setEducations(JSON.parse(cached))
      setLoading(false)
    } else {
      setLoading(true)
    }

    axios.get<Education[]>('/api/education')
      .then(res => {
        setEducations(res.data)
        localStorage.setItem('education', JSON.stringify(res.data))
        setError(null)
      })
      .catch(() => setError('Ошибка загрузки образования'))
      .finally(() => setLoading(false))
  }, [propEducations])

  return (
    <div className="education-list">
      {loading && <div>Загрузка...</div>}
      {error && <div style={{color: 'red'}}>{error}</div>}
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
}
