import React, { useEffect, useState } from 'react'
import axios from 'axios'

interface Project {
  id: number
  title: string
}

function App() {
  const [projects, setProjects] = useState<Project[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    axios.get('/api/projects')
      .then(response => {
        setProjects(response.data)
        setLoading(false)
      })
      .catch(error => {
        console.error('Error fetching projects:', error)
        setLoading(false)
      })
  }, [])

  if (loading) return <div>Loading...</div>

  return (
    <div>
      <h1>My Portfolio</h1>
      <div>
        {projects.map(project => (
          <div key={project.id}>
            <h3>{project.title}</h3>
          </div>
        ))}
      </div>
    </div>
  )
}

export default App