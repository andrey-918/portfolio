import React from 'react'
import { Project, ProjectFilters } from '../../types'
import '../../styles/Projects.css'
import { FaGithub } from 'react-icons/fa'

interface ProjectGridProps {
  limit?: number
  filters?: ProjectFilters
}

export const ProjectGrid: React.FC<ProjectGridProps> = ({
  limit,
  filters
}) => {
  // Должен буду получать из бд
  const projects: Project[] = [
    {
      id: 1,
      title: 'Портфолио сайт',
      description: 'Многофункциональное портфолио с блогом и проектами',
      technologies: ['React', 'TypeScript', 'Go', 'PostgreSQL'],
      category: 'Full-stack',
      createdAt: '2025-09-14',
      githubUrl: 'https://github.com/andrey-918/portfolio',
      liveUrl: 'https://github.com/andrey-918'
    }
  ]

  const displayedProjects = limit ? projects.slice(0, limit) : projects

  return (
    <section className="projects">
      <div className="container">
        <h2>Мои проекты</h2>
        <div className="projects-grid">
          {displayedProjects.map(project => (
            <div key={project.id} className="project-card">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="technologies">
                {project.technologies.map(tech => (
                  <span key={tech} className="tech-tag">{tech}</span>
                ))}
              </div>
              <span className="category">{project.category}</span>

              <div className="project-buttons">
                {project.liveUrl && (
                  <button
                    className="live-demo-btn"
                    onClick={() => window.open(project.liveUrl, '_blank')}
                  >
                    🌐 Открыть проект
                  </button>
                )}

                {project.githubUrl && (
                  <button
                    className="live-demo-btn github-btn"
                    onClick={() => window.open(project.githubUrl, '_blank')}
                  >
                    <FaGithub style={{ marginRight: '8px', fontSize: '14px'}}/>
                    GitHub
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}