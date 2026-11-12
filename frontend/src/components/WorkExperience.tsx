import { useState, useEffect } from 'react';

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
  current: boolean;
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
          <p className="eyebrow">Практика</p>
          <h2 className="section-title">Опыт в разработке</h2>
        </div>

        <div className="work-experience-timeline">
          {experienceItems.map((item) => (
            <article key={item.id} className="experience-item">
              <div className="experience-period">
                <p className="experience-period-text">{item.period}</p>
                {item.current && (
                  <span className="experience-current-badge">Сейчас</span>
                )}
              </div>
              <div className="experience-content">
                <h3 className="experience-position">{item.position}</h3>
                <p className="experience-company">
                  <a href={item.companyUrl} target="_blank" rel="noopener noreferrer" className="experience-company-link">{item.company} ↗</a>
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

                {item.achievements.length > 0 && <div className="experience-achievements">
                  <h4 className="experience-achievements-title">Задачи и обязанности</h4>
                  <ul className="experience-achievements-list">
                    {item.achievements.map((achievement, achIndex) => (
                      <li key={achIndex}>{achievement}</li>
                    ))}
                  </ul>
                </div>}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
