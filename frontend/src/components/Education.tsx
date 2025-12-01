import { useState, useEffect } from 'react';
import '../styles/education.css';
import educationPhoto1 from '../images/about-2.jpg'

interface EducationItem {
  id: number;
  institution: string;
  degree: string;
  field: string;
  period: string;
  description: string;
  location: string;
}

export function Education() {
  const [educationItems, setEducationItems] = useState<EducationItem[]>([]);

  useEffect(() => {
    fetch('/api/education')
      .then(response => response.json())
      .then(data => setEducationItems(data))
      .catch(error => console.error('Error fetching education:', error));
  }, []);

  return (
    <section id="education" className="education-section">
      <div className="global-container ">
        <div className="education-grid">
          {/* Left - Content */}
          <div className="education-content">
            <div className="section-badge-2">
              <span className="section-badge-2-text">«Я знаю, что ничего не знаю». — Сократ</span>
            </div>

            <h2 className="section-title">
              УЧЁБА
            </h2>

            <p className="education-description">
              Учёба — это не только лекции и экзамены, а настоящий путь к самосовершенствованию. Я прошел через университет и IT-курсы, где научился не бояться ошибок, думать творчески и превращать идеи в реальность. Это заложило фундамент для моей карьеры в IT, где каждый день — это шанс узнать что-то новое и создать что-то крутое.
            </p>

            {/* Education List */}
            <div className="education-list">
              {educationItems.map((item, index) => (
                <div key={index} className="education-item">
                  <h3>{item.institution}</h3>
                  <p className="education-item-period">{item.period}</p>
                  <p className="education-item-description">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Photo */}
          <div className="photo-container">
            <div className="photo-wrapper">
              <img
                src={educationPhoto1}
                alt="Books and library"
                className="photo"
              />
            </div>
            <div className="image-bottom-badge">
              <span className="image-bottom-badge-text">Oct 15, 2025</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
