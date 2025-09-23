
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Project } from '../../types'
import '../../styles/Projects.css'
import { FaGithub } from 'react-icons/fa'

interface ProjectGridProps {
  limit?: number
}

export const ProjectGrid: React.FC<ProjectGridProps> = ({ limit }) => {
  const [projects, setProjects] = useState<Project[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    setLoading(true)
    axios.get<Project[]>('/api/projects')
      .then(res => {
        setProjects(res.data)
        setError(null)
      })
      .catch(() => setError('Ошибка загрузки проектов'))
      .finally(() => setLoading(false))
  }, [])

  const displayedProjects = Array.isArray(projects) ? (limit ? projects.slice(0, limit) : projects) : []

  return (
    <section className="projects">
      <div className="container">
        <h2>Мои проекты</h2>
        {loading && <div>Загрузка...</div>}
        {error && <div style={{color: 'red'}}>{error}</div>}
        <div className="projects-grid">
          {Array.isArray(displayedProjects) && displayedProjects.length > 0 ? (
            displayedProjects.map(project => (
              <div key={project.id} className="project-card">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="technologies">
                  {Array.isArray(project.technologies) && project.technologies.length > 0 && project.technologies.map(tech => (
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
            ))
          ) : (
            <div style={{ color: '#888', padding: '1em 0' }}>Нет проектов</div>
          )}
        </div>
      </div>
    </section>
  )
}