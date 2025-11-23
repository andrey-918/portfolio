import { useState, useEffect } from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import '../styles/work-experience.css';

interface ExperienceItem {
  id: number;
  company: string;
  position: string;
  period: string;
  description: string;
  technologies: string[];
  achievements: string[];
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
          <div className="work-experience-badge">
            <span className="work-experience-badge-text">Professional Journey</span>
          </div>
          <h2 className="work-experience-title">
            WORK<br />
            EXPERIENCE
          </h2>
        </div>

        <div className="work-experience-timeline">
          {experienceItems.map((item, index) => (
            <div key={index} className="experience-item">
              <div className="experience-period">
                <p className="experience-period-text">{item.period}</p>
                {index === 0 && (
                  <span className="experience-current-badge">Current</span>
                )}
              </div>
              <div className="experience-content">
                <h3 className="experience-position">{item.position}</h3>
                <p className="experience-company">
                  <a href="#" className="experience-company-link">{item.company}</a>
                </p>
                <p className="experience-location">{item.location}</p>
                <p className="experience-description">{item.description}</p>

                <div className="experience-technologies">
                  <h4 className="experience-tech-title">Technologies</h4>
                  <div className="experience-tech-list">
                    {item.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className="experience-tech-item">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="experience-achievements">
                  <h4 className="experience-achievements-title">Key Achievements</h4>
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
