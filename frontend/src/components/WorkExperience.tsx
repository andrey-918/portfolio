import { useState, useEffect } from 'react';
import '../styles/work-experience.css';

interface ExperienceItem {
  id: number;
  company: string;
  position: string;
  period: string;
  description: string;
  technologies: string[];
  achievements: string[];
  companyUrl: string;
  location: string;
}

export function WorkExperience() {
  const [experienceItems, setExperienceItems] = useState<ExperienceItem[]>([]);

  useEffect(() => {
    fetch('/api/experience')
      .then(response => response.json())
      .then(data => setExperienceItems(data))
      .catch(error => console.error('Error fetching experience:', error));
  }, []);

  return (
    <section id="experience" className="work-experience-section">
      <div className="global-container">
        <div className="work-experience-header">
          <div className="section-badge-1">
            <span className="section-badge-1-text">«Опыт — это не то, что происходит с человеком, а то, что человек делает с тем, что с ним происходит». — Олдос Хаксли</span>
          </div>
          <h2 className="section-title">
            ОПЫТ<br />
            РАЗРАБОТКИ
          </h2>
        </div>

        <div className="work-experience-timeline">
          {experienceItems.map((item, index) => (
            <div key={index} className="experience-item">
              <div className="experience-period">
                <p className="experience-period-text">{item.period}</p>
                {index === 0 && (
                  <span className="experience-current-badge">Текущее место работы</span>
                )}
              </div>
              <div className="experience-content">
                <h3 className="experience-position">{item.position}</h3>
                <p className="experience-company">
                  <a href={item.companyUrl} className="experience-company-link">{item.company}</a>
                </p>
                <p className="experience-location">{item.location}</p>
                <p className="experience-description">{item.description}</p>

                <div className="experience-technologies">
                  <h4 className="experience-tech-title">Технологии</h4>
                  <div className="experience-tech-list">
                    {item.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className="tech-tag">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="experience-achievements">
                  <h4 className="experience-achievements-title">Достижения</h4>
                  <ul className="experience-achievements-list">
                    {item.achievements.map((achievement, achIndex) => (
                      <li key={achIndex}>{achievement}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
