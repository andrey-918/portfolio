import { useState, useEffect } from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface ExperienceItem {
  id: number;
  company: string;
  position: string;
  period: string;
  description: string;
  technologies: string[];
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
      <div className="work-experience-container">
        <div className="work-experience-grid">
          {/* Left - Content */}
          <div className="work-experience-content">
            <div className="work-experience-badge">
              <span className="work-experience-badge-text">Creative Presentation</span>
            </div>

            <h2 className="work-experience-h2">
              MY<br />
              WORK<br />
              EXPERIENCE
            </h2>

            <p className="work-experience-description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>

            {/* Experience List */}
            <div className="work-experience-list">
              {experienceItems.map((item, index) => (
                <div key={index} className="work-experience-item">
                  <h3>{item.company}</h3>
                  <p className="work-experience-item-position">{item.position}</p>
                  <p className="work-experience-item-period">{item.period}</p>
                  <p className="work-experience-item-description">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Photo */}
          <div className="work-experience-photo-container">
            <div className="work-experience-photo-wrapper">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b3Jrc3BhY2UlMjBvZmZpY2V8ZW58MXx8fHwxNzYzODk1OTc5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Office workspace"
                className="work-experience-photo"
              />
            </div>
            <div className="work-experience-bottom-badge">
              <span className="work-experience-bottom-badge-text">May 09, 2026</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
