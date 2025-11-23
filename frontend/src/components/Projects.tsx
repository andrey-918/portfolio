import { useState, useEffect } from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  image_url: string;
  github_url?: string;
  live_url?: string;
  category: string;
  created_at: string;
}

export function Projects() {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    fetch('/api/projects')
      .then(response => response.json())
      .then(data => setProjects(data))
      .catch(error => console.error('Error fetching projects:', error));
  }, []);

  return (
    <section id="projects" className="projects-section">
      <div className="projects-container">
        <div className="projects-header">
          <div className="projects-badge">
            <span className="projects-badge-text">Creative Presentation</span>
          </div>
          <h2 className="projects-h2">
            SELECTED<br />
            PROJECTS
          </h2>
        </div>

        {/* Projects Grid */}
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-image-wrapper">
                <ImageWithFallback
                  src={project.image_url}
                  alt={project.title}
                  className="project-image"
                />
                <div className="project-overlay" />
              </div>
              <div className="project-info">
                <p className="project-category">{project.category}</p>
                <h3 className="project-title">{project.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
