

import React, { useEffect, useState } from 'react'
import axios from 'axios'
import '../styles/about.css'
import { WorkExp } from '../components/Sections/WorkExp'
import { EducationList } from '../components/Sections/EducationList'
import { WorkExperience, Education } from '../types/experience'


export const About: React.FC = () => {
  const [workExperiences, setWorkExperiences] = useState<WorkExperience[]>([])
  const [educations, setEducations] = useState<Education[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    setLoading(true)
    Promise.all([
      axios.get<WorkExperience[]>('/api/experience'),
      axios.get<Education[]>('/api/education')
    ])
      .then(([expRes, eduRes]) => {
        setWorkExperiences(expRes.data)
        setEducations(eduRes.data)
        setError(null)
      })
      .catch(() => setError('Ошибка загрузки данных'))
      .finally(() => setLoading(false))
  }, [])

  return (
    <div className="container">
      <h1>Обо мне</h1>
      <div className="about-content">
        <p>
          Привет! Я full-stack разработчик с желанием создавать качественные веб-приложения. 
          Мой опыт охватывает frontend и backend, я люблю учиться новому и работать в команде.
        </p>
      </div>
      {loading && <div>Загрузка...</div>}
      {error && <div style={{color: 'red'}}>{error}</div>}
      <h2>Опыт работы</h2>
      <WorkExp experiences={workExperiences} />
      <h2>Образование</h2>
      <EducationList educations={educations} />
    </div>
  )
}