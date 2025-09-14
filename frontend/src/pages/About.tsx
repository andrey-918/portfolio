import React from 'react'

export const About: React.FC = () => {
  return (
    <div className="container">
      <h1>Обо мне</h1>
      <div className="about-content">
        <p>
          Привет! Я full-stack разработчик с желанием создавать
          качественные веб-приложения.
        </p>
        {/* Информация о навыках, опыте и т.д. */}
      </div>
    </div>
  )
}