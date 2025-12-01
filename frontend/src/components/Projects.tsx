import { useState, useEffect } from 'react';
import '../styles/projects.css';

interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  imageUrl: string;
  githubUrl?: string;
  liveUrl?: string;
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
      <div className="global-container">
        <div className="projects-header">
          <div className="projects-badge">
            <span className="projects-badge-text">Теория — это основа, а практика — результат.</span>
          </div>
          <h2 className="section-title">
            ПРОЕКТЫ
          </h2>
        </div>

        {/* Projects Grid */}
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-image-wrapper">
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className="project-image"
                />
                <div className="project-overlay"></div>
              </div>
              <div className="project-info">
                <div className="project-header">
                  <p className="project-category">{project.category}</p>
                  <h3 className="project-title">
                    {project.liveUrl ? <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="link">{project.title}</a> : project.title}
                  </h3>
                </div>
                <div className="project-content">
                  <p className="project-description">{project.description}</p>
                  <div className="project-technologies">
                    {project.technologies.map((tech, idx) => (
                      <span key={idx} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                </div>
                <div className="project-links">
                  {project.githubUrl && (
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="github-link link">
                      GitHub
                    </a>
                  )}
                  {project.liveUrl && (
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="github-link link">
                      Live
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
