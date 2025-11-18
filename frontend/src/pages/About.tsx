

import React from 'react'
import '../styles/about.css'
import { WorkExp } from '../components/Sections/WorkExp'
import { EducationList } from '../components/Sections/EducationList'


export const About: React.FC = () => {

  return (
    <div className="container">
      <h1>Обо мне</h1>
      <div className="about-content">
        <p>
          Привет! Я full-stack разработчик с желанием создавать качественные веб-приложения.
          Мой опыт охватывает frontend и backend, я люблю учиться новому и работать в команде.
        </p>
      </div>
      <WorkExp />
      <h2>Образование</h2>
      <EducationList />
    </div>
  )
}
