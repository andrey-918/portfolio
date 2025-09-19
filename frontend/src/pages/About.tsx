
import React from 'react'
import '../styles/about.css'
import { WorkExp } from '../components/Sections/WorkExp'
import { EducationList } from '../components/Sections/EducationList'
import { WorkExperience, Education } from '../types/experience'

const workExperiences: WorkExperience[] = [
  {
    id: 1,
    company: 'ООО "ВебТех"',
    position: 'Frontend Developer',
    period: '2022 — 2024',
    description: 'Разработка и поддержка SPA на React, внедрение TypeScript.',
    technologies: ['React', 'TypeScript', 'Redux', 'Vite'],
    achievements: ['Оптимизация загрузки на 30%', 'Внедрение CI/CD'],
    companyUrl: 'https://webtech.ru',
    location: 'Москва',
    current: false,
  },
  {
    id: 2,
    company: 'ООО "Инновации"',
    position: 'Full-stack Developer',
    period: '2024 — н.в.',
    description: 'Создание и поддержка корпоративных веб-приложений.',
    technologies: ['Go', 'React', 'PostgreSQL'],
    achievements: ['Разработка архитектуры проекта', 'Настройка мониторинга'],
    companyUrl: 'https://innovate.ru',
    location: 'Санкт-Петербург',
    current: true,
  },
]

const educations: Education[] = [
  {
    id: 1,
    institution: 'МГТУ им. Баумана',
    degree: 'Бакалавр',
    field: 'Информатика и вычислительная техника',
    period: '2018 — 2022',
    description: 'Изучение алгоритмов, ООП, баз данных, сетей.',
    location: 'Москва',
  },
]

export const About: React.FC = () => (
  <div className="container">
    <h1>Обо мне</h1>
    <div className="about-content">
      <p>
        Привет! Я full-stack разработчик с желанием создавать качественные веб-приложения. 
        Мой опыт охватывает frontend и backend, я люблю учиться новому и работать в команде.
      </p>
    </div>
    <h2>Опыт работы</h2>
    <WorkExp experiences={workExperiences} />
    <h2>Образование</h2>
    <EducationList educations={educations} />
  </div>
)