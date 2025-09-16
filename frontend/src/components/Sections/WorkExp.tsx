import React from 'react'
import { WorkExperience, Education } from '../../types/experience'
import '../styles/WorkExp.css'

export const WorkExp: React.FC = () => {
  const workExperiences: WorkExperience[] = [
    {
      id: 1,
      company: 'Технологическая компания',
      position: 'Full-stack разработчик',
      period: '2023 - настоящее время',
      description: 'Разработка веб-приложений и микросервисов',
      technologies: ['React', 'TypeScript', 'Go', 'PostgreSQL', 'Docker'],
      achievements: [
        'Увеличил производительность приложения на 40%',
        'Внедрил новые технологии в стек компании',
        'Обучил 2 junior-разработчиков'
      ],
      location: 'Москва, Россия',
      current: true
    },
    {
      id: 2,
      company: 'Стартап',
      position: 'Frontend разработчик',
      period: '2022 - 2023',
      description: 'Разработка пользовательских интерфейсов',
      technologies: ['React', 'JavaScript', 'CSS', 'REST API'],
      achievements: [
        'Создал с нуля основное веб-приложение',
        'Реализовал адаптивную верстку',
        'Настроил CI/CD процесс'
      ],
      location: 'Москва, Россия',
      current: false
    }
  ]

  const education: Education[] = [
    {
      id: 1,
      institution: 'Технический университет',
      degree: 'Бакалавр',
      field: 'Компьютерные науки',
      period: '2022 - 2026',
      description: 'Изучение алгоритмов, структур данных и разработки ПО',
      location: 'Москва, Россия'
    }
  ]

  return (
    <div className="workexp-page">
      <div className="container">
        <div className="workexp-header">
          <h1>Опыт работы и образование</h1>
          <p>Мой профессиональный путь и достижения</p>
        </div>

        <section className="experience-section">
          <h2>💼 Опыт работы</h2>
          <div className="timeline">
            {workExperiences.map(exp => (
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
        </section>

        <section className="education-section">
          <h2>🎓 Образование</h2>
          <div className="timeline">
            {education.map(edu => (
              <div key={edu.id} className="timeline-item">
                <div className="timeline-marker education-marker"></div>
                <div className="timeline-content">
                  <h3>{edu.degree} по {edu.field}</h3>
                  <h4>{edu.institution}</h4>
                  <p className="period">{edu.period} • {edu.location}</p>
                  <p className="description">{edu.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}