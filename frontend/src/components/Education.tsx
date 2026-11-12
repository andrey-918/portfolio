import { useState, useEffect } from 'react';

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
      <div className="global-container">
        <div className="education-heading">
          <p className="eyebrow">База и развитие</p>
          <h2 className="section-title">Образование</h2>
        </div>
        <div className="education-list">
          {educationItems.map((item) => (
            <article className="education-item" key={item.id}>
              <div>
                <h3>{item.institution}</h3>
                <p>{item.degree} · {item.field}</p>
              </div>
              <span className="education-item-period">{item.period}</span>
            </article>
          ))}
          </div>
      </div>
    </section>
  );
}
