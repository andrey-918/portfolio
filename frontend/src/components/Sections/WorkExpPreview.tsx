import React from 'react'
import { Link } from 'react-router-dom'

export const WorkExpPreview: React.FC = () => {
  return (
    <section className="workexp-preview">
      <div className="container">
        <h2>Профессиональный опыт</h2>
        <div className="preview-content">
          <p>2+ года опыта в full-stack разработке с фокусом на современные технологии</p>
          <Link to="/workexp" className="cta-button">
            Посмотреть полный опыт →
          </Link>
        </div>
      </div>
    </section>
  )
}