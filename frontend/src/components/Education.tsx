import { useState, useEffect } from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';

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
      <div className="education-container">
        <div className="education-grid">
          {/* Left - Content */}
          <div className="education-content">
            <div className="education-badge">
              <span className="education-badge-text">Creative Presentation</span>
            </div>

            <h2 className="education-h2">
              MY<br />
              EDUCATION
            </h2>

            <p className="education-description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
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
          <div className="education-photo-container">
            <div className="education-photo-wrapper">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1639414839074-51d49728c748?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aW50YWdlJTIwbGlicmFyeSUyMGJvb2tzfGVufDF8fHx8MTc2Mzg5NTk4NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Books and library"
                className="education-photo"
              />
            </div>
            <div className="education-bottom-badge">
              <span className="education-bottom-badge-text">May 09, 2026</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
